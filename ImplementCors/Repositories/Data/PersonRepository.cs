using ImplementCors.Base.Urls;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using NETCore.Models;
using NETCore.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ImplementCors.Repositories.Data
{
    public class PersonRepository : GeneralRepository<Person, string>
    {
        private readonly Address address;
        private readonly string request;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly HttpClient httpClient;

        public PersonRepository(Address address, string request = "Persons/") : base(address, request)
        {
            this.address = address;
            this.request = request;
            _contextAccessor = new HttpContextAccessor();
            httpClient = new HttpClient
            {
                BaseAddress = new Uri(address.link)
            };
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", _contextAccessor.HttpContext.Session.GetString("JWToken"));
        }

        public async Task<List<GetPersonVM>> GetPerson()
        {
            List<GetPersonVM> entities = new List<GetPersonVM>();

            using (var response = await httpClient.GetAsync(request + "GetPerson"))
            {
                string apiResponse = await response.Content.ReadAsStringAsync();
                entities = JsonConvert.DeserializeObject<List<GetPersonVM>>(apiResponse);
            }
            return entities;
        }
        
        public async Task<List<GetPersonVM>> GetPersonById(string NIK)
        {
            List<GetPersonVM> entities = new List<GetPersonVM>();

            using (var response = await httpClient.GetAsync(request + $"GetPerson/{NIK}"))
            {
                string apiResponse = await response.Content.ReadAsStringAsync();
                entities = JsonConvert.DeserializeObject<List<GetPersonVM>>(apiResponse);
            }
            return entities;
        }

        public async Task<InsertPersonVM> Register(InsertPersonVM insertPerson)
        {
            StringContent content = new StringContent(JsonConvert.SerializeObject(insertPerson), Encoding.UTF8, "application/json");
            using(var response = await httpClient.PostAsync(address.link + request + "InsertVM", content))
            {
                string apiResponse = await response.Content.ReadAsStringAsync();
                insertPerson = JsonConvert.DeserializeObject<InsertPersonVM>(apiResponse);
            }
            return insertPerson;
        }

        public HttpStatusCode Deleted(string NIK)
        {
            var result = httpClient.DeleteAsync(address.link + request + NIK).Result;
            return result.StatusCode;
        }

        public HttpStatusCode Post(InsertPersonVM insertPerson)
        {
            StringContent content = new StringContent(JsonConvert.SerializeObject(insertPerson), Encoding.UTF8, "application/json");
            var result = httpClient.PostAsync(address.link + request + "InsertVM", content).Result;
            return result.StatusCode;
        }
    }
}

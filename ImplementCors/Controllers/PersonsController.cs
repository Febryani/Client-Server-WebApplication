using ImplementCors.Base.Controllers;
using ImplementCors.Repositories.Data;
using Microsoft.AspNetCore.Mvc;
using NETCore.Models;
using NETCore.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ImplementCors.Controllers
{
    [Route("[controller]")]
    public class PersonsController : BaseController<Person, PersonRepository, string>
    {
        readonly HttpClient http = new HttpClient
        {
            BaseAddress = new Uri("https://localhost:44300/api/")
        };
        private readonly PersonRepository repository;
        public PersonsController(PersonRepository repository) : base(repository)
        {
            this.repository = repository;
        }
        
        [HttpGet("GetAllPerson")]
        public async Task<JsonResult> GetAllPerson()
        {
            var result = await repository.GetPerson();
            return Json(result);
        }

        [HttpGet("GetPersonByNik/{NIK}")]
        public async Task<JsonResult> GetPersonByNik(string NIK)
        {
            var result = await repository.GetPersonById(NIK);
            return Json(result);
        }

        [HttpPost("Register")]
        public IActionResult Register(InsertPersonVM person)
        {
            try
            {
                var conv = JsonConvert.SerializeObject(person);
                var buffer = System.Text.Encoding.UTF8.GetBytes(conv);
                var byteContent = new ByteArrayContent(buffer);
                byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                var result = http.PostAsync("persons/insertvm", byteContent).Result;
                return Json(result);
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        [HttpDelete("Deleted/{NIK}")]
        public JsonResult Deleted(string NIK)
        {
            var result = repository.Deleted(NIK);
            return Json(result);
        }

        /*[HttpPost("Register")]
        public JsonResult Register(InsertPersonVM entity)
        {
            var result = repository.Post(entity);
            return Json(result);
        }*/
    }
}

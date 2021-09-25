using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImplementCors.Controllers
{
    [Route("[controller]")]
    public class ChartController : Controller
    {
        [Authorize(Roles = "Manager")]
        [HttpGet]
        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            return RedirectToAction("LatihanCSS", "Login");
        }

        [HttpGet("Forbidden")]
        public IActionResult Forbidden()
        {
            return View("403");
        }
    }
}

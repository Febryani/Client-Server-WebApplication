using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NETCore.ViewModels
{
    public class LoginVM
    {
        public string NIK { get; set; }

        [Required(ErrorMessage = "Email tidak boleh kosong")]
        public string Email { get; set; }

      //  [Required(ErrorMessage = "Password tidak boleh kosong")]
        public string Password { get; set; }
        public string Phone { get; set; }
    }
}

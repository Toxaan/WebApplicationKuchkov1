using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationKuchkov1.Models
{
    public class UserDescription
    {
        public int id { get; set; }

        public string name { get; set; }

        public string username { get; set; }

        public string email { get; set; }

        public string phone { get; set; }
        public string website { get; set; }

        public bool blocked { get; set; }
    }
}

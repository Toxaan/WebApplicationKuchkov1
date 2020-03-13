using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplicationKuchkov1.Models;

namespace WebApplicationKuchkov1.Controllers
{

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<UserDescription> GetUsersList(int pageNum)
        {
            using (StreamReader r = new StreamReader("users.json"))
            {
                string json = r.ReadToEnd();
                List<UserDescription> users = JsonConvert.DeserializeObject<List<UserDescription>>(json);

                return users;
            }
        }

        [HttpGet("[action]")]
        public bool BlockUser(int recordId)
        {
            try
            {
                List<UserDescription> users;
                using (StreamReader r = new StreamReader("users.json"))
                {
                    string json = r.ReadToEnd();
                    users = JsonConvert.DeserializeObject<List<UserDescription>>(json);
                    users[recordId].blocked = !users[recordId].blocked;
                }
                using (StreamWriter sw = new StreamWriter("users.json"))
                {
                    string jsonString;
                    jsonString = JsonConvert.SerializeObject(users);
                    sw.Write(jsonString);
                }

                return true;
            }
            catch
            {
                return false;
            }
            

        }
    }
}
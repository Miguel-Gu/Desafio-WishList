using System;
using System.Collections.Generic;

#nullable disable

namespace wishList_webAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Desejos = new HashSet<Desejo>();
        }

        public short IdUsuarios { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<Desejo> Desejos { get; set; }
    }
}

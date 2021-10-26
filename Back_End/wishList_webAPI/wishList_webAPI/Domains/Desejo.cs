using System;
using System.Collections.Generic;

#nullable disable

namespace wishList_webAPI.Domains
{
    public partial class Desejo
    {
        public short IdDesejos { get; set; }
        public short? IdUsuarios { get; set; }
        public string NomeDesejo { get; set; }
        public string Descricao { get; set; }

        public virtual Usuario IdUsuariosNavigation { get; set; }
    }
}

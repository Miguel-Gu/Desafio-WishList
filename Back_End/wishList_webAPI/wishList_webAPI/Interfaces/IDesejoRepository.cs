using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wishList_webAPI.Domains;

namespace wishList_webAPI.Interfaces
{
    /// <summary>
    /// Interfaces com os métodos Cadastar e Listar
    /// </summary>
    interface IDesejoRepository
    {
        /// <summary>
        /// Cadastra um novo desejo
        /// </summary>
        /// <param name="novoDesejo">Novo desejo que será cadastrado</param>
        void Cadastrar(Desejo novoDesejo);


        /// <summary>
        /// lista um lista de desejos
        /// </summary>
        /// <returns>Uma lista de desejos</returns>
        List<Desejo> ListarDesejos();
    }
}

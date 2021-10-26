using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wishList_webAPI.Domains;
using wishList_webAPI.Interfaces;
using wishList_webAPI.Repositories;

namespace wishList_webAPI.Controllers
{
    //configurando que a respota da api vai ser em JSON
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class DesejosController : ControllerBase
    {
        //variável que irá receber os métodos da repository
        private IDesejoRepository _desejosRepository { get; set; }

        public DesejosController()
        {
            //recebendo os métodos da repository para _desejosRepository
            _desejosRepository = new DesejoRepository();
        }

        //Cadastrar
        [HttpPost]
        public IActionResult Cadastrar(Desejo novoDesejo)
        {
            try
            {
                //verificação caso o objeto seja nullo
                if (novoDesejo == null)
                {
                    return BadRequest(
                        new
                        {
                            mensagem = "Objeto vazio!",
                            erro = true
                        }
                        );
                }

                //invocar funçao cadastrar caso a função seja false.
                _desejosRepository.Cadastrar(novoDesejo);

                //retornando o status code 201 created
                return StatusCode(201);
            }
            catch (Exception excp)
            {
                //retornando o erro, caso exista
                return BadRequest(excp);
            }
        }

        //Listar
        [HttpGet]
        public IActionResult Listar()
        {
            //usando o try fazer o tratamentod e erro.
            try
            {
                //retornando toda a lista.
                return Ok(_desejosRepository.ListarDesejos());
            }
            catch (Exception erro)
            {
                //retornando o erro.
                return BadRequest(erro);
            }
        }

    }
}

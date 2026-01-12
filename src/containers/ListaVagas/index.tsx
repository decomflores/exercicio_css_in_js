import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { VagasListagem } from './styles'

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor back-end',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 5000,
    salarioMax: 8000,
    requisitos: ['Python', 'Django', 'PostgreSQL', 'Docker']
  },
  {
    id: 3,
    titulo: 'Designer UX/UI',
    localizacao: 'São Paulo',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 8000,
    salarioMax: 12000,
    requisitos: ['Figma', 'Adobe XD', 'User Research']
  },
  {
    id: 4,
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 6000,
    salarioMax: 9000,
    requisitos: ['Node.js', 'React', 'TypeScript', 'MongoDB']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (item) => item.titulo.toLocaleLowerCase().search(filtro.toLocaleLowerCase()) !== -1
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasListagem>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasListagem>
    </div>
  )
}

export default ListaVagas

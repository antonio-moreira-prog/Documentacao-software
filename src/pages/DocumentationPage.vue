<template>
  <div>
    <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 700px; overflow: auto;">
      <q-infinite-scroll @load="onLoadRef" :offset="250" :scroll-target="scrollTargetRef">
        <div v-for="(item, index) in itemsRef" :key="index" class="caption">
          <q-card-section>
            <div>
              <h4>1.1. Tema</h4>
              <p>O tema central deste documento é o Produto de Software de Gestão Escolar.</p>

              <h4>1.2. Objetivo do Projeto</h4>
              <p>O objetivo é desenvolver um sistema que otimize a gestão escolar, abrangendo áreas como matrículas, lançamento de notas, frequência, calendário escolar e comunicação com pais e alunos.</p>

              <h4>1.3. Delimitação do Problema</h4>
              <p>O sistema foca em resolver desafios específicos enfrentados pelas escolas, como a falta de integração entre setores e a dificuldade de acesso a informações relevantes.</p>

              <h4>1.4. Justificativa da Escolha do Tema</h4>
              <p>A escolha desse tema se baseia na necessidade de modernizar e agilizar os processos escolares, proporcionando maior eficiência e transparência.</p>

              <h4>1.5. Método de Trabalho</h4>
              <p>O desenvolvimento seguirá uma abordagem ágil, com iterações e feedback contínuo dos usuários e stakeholders.</p>

              <h4>1.6. Organização do Trabalho</h4>
              <p>O documento está organizado em seções que abordam diferentes aspectos do sistema.</p>

              <h4>1.7. Glossário</h4>
              <p>SGE: Sistema de Gestão Escolar</p>
              <p>Matrícula: Processo de inscrição de alunos nas disciplinas</p>
              <p>Calendário Escolar: Cronograma de atividades e eventos escolares</p>

              <h4>2. DESCRIÇÃO GERAL DO SISTEMA</h4>
              <h4>2.1. Descrição do Problema</h4>
              <p>O sistema visa resolver os desafios enfrentados pelas escolas na gestão de informações acadêmicas e administrativas.</p>

              <h4>2.2. Principais Envolvidos e Suas Características</h4>
              <p>Administradores: Responsáveis pela configuração e manutenção do sistema.</p>
              <p>Professores: Utilizam o sistema para lançar notas, registrar frequência e gerenciar turmas.</p>
              <p>Alunos e Pais: Acessam informações sobre notas, calendário e comunicados.</p>

              <h4>2.3. Regras de Negócio</h4>
              <p>O sistema seguirá regras específicas relacionadas a matrículas, avaliações, horários de aula e comunicação.</p>

              <h4>3. ESPECIFICAÇÃO DOS REQUISITOS</h4>
              <h4>3.1. Requisitos Funcionais</h4>
              <q-img width="100%" src="https://www.researchgate.net/profile/Roberto-Paldes/publication/275581436/figure/tbl1/AS:668639523008513@1536427493115/Principais-funcionalidades-e-requisitos-funcionais.png" />
              <p>Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer.</p>
              <p>Alguns exemplos incluem:</p>
              <ul>
                <li>Cadastro de Alunos: Permitir o registro de informações dos alunos, como nome, data de nascimento e turma.</li>
                <li>Lançamento de Notas: Possibilitar que os professores insiram notas e comentários para cada aluno.</li>
                <li>Geração de Boletins: Gerar boletins com as notas e frequência dos alunos.</li>
              </ul>

              <h4>3.2. Requisitos Não-Funcionais</h4>
              <p>Os requisitos não-funcionais definem características globais do sistema.</p>
              <q-img width="100%" src="https://treinamentowaei.files.wordpress.com/2014/07/requisitosnaofuncionais.jpg" />
              <ul>
                <li>Desempenho: O sistema deve responder rapidamente mesmo com grande quantidade de dados.</li>
                <li>Segurança: Garantir que apenas usuários autorizados acessem as informações.</li>
                <li>Usabilidade: A interface deve ser intuitiva e fácil de usar.</li>
              </ul>

              <h4>3.3. Protótipo</h4>
              <p>Um protótipo visual do sistema será desenvolvido para validar as funcionalidades e a interface com os usuários.</p>

              <h4>3.4. Métricas e Cronograma</h4>
              <p>Serão definidas métricas para avaliar o sucesso do projeto, como tempo de resposta e taxa de adoção.</p>
              <p>O cronograma detalhará as etapas de desenvolvimento e implantação.</p>

              <h4>4. ANÁLISE E DESIGN</h4>
                <h5>4.1. Arquitetura do Sistema</h5>
                <p>A arquitetura definirá a estrutura do software, incluindo componentes, camadas e integrações.</p>

                <h5>4.2. Modelo do Domínio</h5>
                <p>O modelo do domínio mapeará as entidades e relacionamentos do sistema, como Aluno, Professor, Disciplina e Turma.</p>
                <q-img width="96%" src="https://lh6.googleusercontent.com/giT8se_BXAqOgRiVwooeqsuaEtam6Ekw21hhzguK-Vols__jyFi31CPI1Uv_c7DR93Dy4wq3wb9DCz29VkPsNwX8sEGkOvpfPIeC5qC_nBMvllmDOO-IU_h6ccxYqWepUaWMhlkT" />

                <h5>4.3. Diagramas de Interação</h5>
                <p>Serão criados diagramas para representar a interação entre os atores do sistema, como Aluno, Professor e Administrador.</p>

                <h5>4.4. Diagrama de Classes</h5>
                <p>O diagrama de classes mostrará as classes, atributos e métodos do sistema.</p>

                <h5>4.5. Diagrama de Atividades</h5>
                <p>Representará os fluxos de trabalho e processos do sistema, como o processo de matrícula.</p>

                <h5>4.6. Diagrama de Estados</h5>
                <p>Mostrará os estados possíveis para as entidades do sistema, como Aluno (ativo, inativo, formado).</p>

                <h5>4.7. Diagrama de Componentes</h5>
                <p>Definirá os componentes do sistema e suas interações.</p>

                <h5>4.8. Modelo de Dados</h5>
                <p>O modelo de dados especificará as tabelas do banco de dados, relacionamentos e chaves primárias e estrangeiras.</p>

              <h4>4.9. AMBIENTE DE DESENVOLVIMENTO</h4>
              <p>Descreve o ambiente de desenvolvimento utilizado para criar e testar o software.</p>
              <p>Isso inclui linguagens de programação, IDEs, servidores, bancos de dados e outras ferramentas.</p>

              <h4>4.10. SISTEMAS E COMPONENTES EXTERNOS UTILIZADOS</h4>
              <p>Lista quaisquer sistemas ou componentes externos que o software depende, como APIs de terceiros, serviços de autenticação ou integrações com outros sistemas.</p>

              <h4>5. IMPLEMENTAÇÃO</h4>
              <p>Nesta fase, o código-fonte é escrito com base nos requisitos e no design.</p>
              <p>Os desenvolvedores implementam as funcionalidades planejadas.</p>

              <h4>6. TESTES</h4>
                <h5>6.1. Plano de Testes</h5>
                <p>Descreve os cenários de teste, casos de uso e critérios de aceitação. O objetivo é garantir que o software funcione corretamente.</p>

                <h5>6.2. Execução do Plano de Testes</h5>
                <p>Os testes são executados para verificar se o sistema atende aos requisitos e se não há defeitos.</p>
                <h4>7. IMPLANTAÇÃO</h4>
                <h5>7.1. Diagrama de Implantação</h5>
                <p>Mostra como os componentes do sistema serão implantados em servidores e ambientes de produção.</p>

                <h5>7.2. Manual de Implantação</h5>
                <p>Fornece instruções detalhadas para implantar o software em um ambiente real.</p>
              <h4>8. MANUAL DO USUÁRIO</h4>
              <p>O manual do usuário explica como utilizar o sistema, incluindo instruções de acesso, navegação e funcionalidades disponíveis.</p>
            </div>
          </q-card-section>

        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  computed: {
    editorContent() {
      return this.$store.state.editorContent;
    },
  },
  props: ["content"],
  created() {
    console.log(this.$route.query.content);
  },
  setup() {
    const itemsRef = ref([{}, {}, {}, {}, {}, {}, {}]);
    const itemsId = ref([{}, {}, {}, {}, {}, {}, {}]);
    const scrollTargetRef = ref(null);

    return {
      itemsRef,
      itemsId,
      scrollTargetRef,

      onLoadRef(index, done) {
        setTimeout(() => {
          itemsRef.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },

      onLoadId(index, done) {
        setTimeout(() => {
          itemsId.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },
};
</script>

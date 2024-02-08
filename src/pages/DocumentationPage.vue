<template>
  <q-page class="q-page-padding">
    <div class="q-gutter-md">
      <q-card class="documentation-card">
        <q-card-section>
          <h2 class="text-h6">Documentação do Produto de Software de Gestão Escolar</h2>
          <p class="text-subtitle1">PREFÁCIO</p>
          <p class="text-body1">Este documento descreve o Produto de Software de Gestão Escolar, destinado a escolas e instituições de ensino. Ele abrange desde a introdução até os requisitos do sistema. A documentação visa facilitar o entendimento e uso eficiente do software.</p>
        </q-card-section>

        <q-card-section>
          <h3 class="word-title">1. INTRODUÇÃO AO DOCUMENTO</h3>
          <h4 class="word-subtitle">1.1. Tema</h4>
          <p class="word-text">O tema central deste documento é o Produto de Software de Gestão Escolar.</p>

          <h4 class="word-subtitle">1.2. Objetivo do Projeto</h4>
          <p class="word-text">O objetivo é desenvolver um sistema que otimize a gestão escolar, abrangendo áreas como matrículas, lançamento de notas, frequência, calendário escolar e comunicação com pais e alunos.</p>

          <h4 class="word-subtitle">1.3. Delimitação do Problema</h4>
          <p class="word-text">O sistema foca em resolver desafios específicos enfrentados pelas escolas, como a falta de integração entre setores e a dificuldade de acesso a informações relevantes.</p>

          <h4 class="word-subtitle">1.4. Justificativa da Escolha do Tema</h4>
          <p class="word-text">A escolha desse tema se baseia na necessidade de modernizar e agilizar os processos escolares, proporcionando maior eficiência e transparência.</p>

          <h4 class="word-subtitle">1.5. Método de Trabalho</h4>
          <p class="word-text">O desenvolvimento seguirá uma abordagem ágil, com iterações e feedback contínuo dos usuários e stakeholders.</p>

          <h4 class="word-subtitle">1.6. Organização do Trabalho</h4>
          <p class="word-text">O documento está organizado em seções que abordam diferentes aspectos do sistema.</p>

          <h4 class="word-subtitle">1.7. Glossário</h4>
          <p class="word-text">SGE: Sistema de Gestão Escolar<br>
          Matrícula: Processo de inscrição de alunos nas disciplinas<br>
          Calendário Escolar: Cronograma de atividades e eventos escolares</p>

        </q-card-section>

        <q-card-section>
          <h3 class="word-title">2. DESCRIÇÃO GERAL DO SISTEMA</h3>
          <h4 class="word-subtitle">2.1. Descrição do Problema</h4>
          <p class="word-text">O sistema visa resolver os desafios enfrentados pelas escolas na gestão de informações acadêmicas e administrativas.</p>

          <h4 class="word-subtitle">2.2. Principais Envolvidos e Suas Características</h4>
          <p class="word-text">Administradores: Responsáveis pela configuração e manutenção do sistema.<br>
          Professores: Utilizam o sistema para lançar notas, registrar frequência e gerenciar turmas.<br>
          Alunos e Pais: Acessam informações sobre notas, calendário e comunicados.</p>

          <h4 class="word-subtitle">2.3. Regras de Negócio</h4>
          <p class="word-text">O sistema seguirá regras específicas relacionadas a matrículas, avaliações, horários de aula e comunicação.</p>
        </q-card-section>

        <q-card-section>
          <h3 class="word-title">3. REQUISITOS DO SISTEMA</h3>
          <p class="word-text">Os requisitos detalhados serão apresentados nas próximas seções, incluindo funcionalidades, interfaces e fluxos de trabalho.</p>
        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DocumentationPage'
}
</script>

<style scoped>

.documentation-card {
  max-width: 1000px; /* Aumentando a largura máxima para 1000px */
  margin: auto;
  padding: 30px;
  background-color: #08111a;
  border-radius: 10px;
}

.word-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.word-subtitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.word-text {
  font-size: 14px;
  line-height: 1.5;
}
.documentation-card {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.text-h6 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.text-subtitle1 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.text-body1 {
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>

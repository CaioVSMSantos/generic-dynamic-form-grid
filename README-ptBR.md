<h1>Generic Dynamic Form Grid</h1>

<h3 align="center">
    <a href="README.md">English-US</a>
    <span>|</span>
    <a href="README-ptBR.md">Português-BR</a>
</h3>

[![Latest Version](https://badgen.net/github/releases/CaioVictorMota/generic-dynamic-form-grid/)](https://github.com/CaioVictorMota/generic-dynamic-form-grid/releases/tag/v1.0)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)


<h2>Um componente CSS / JS simples para criar Grids dinâmicoss</h2>

Esse componente foi criado durante meus estudos de desenvolvimento FrontEnd Web.
Seu principal objetivo é ser usado como um contêiner fácil e rápido no qual células dinâmicas de Grid podem ser colocadas simplesmente adicionando as classes corretas aos elementos HTML.

A motivação para construir esse componente, além da experimentação envolvida nos estudos do FrontEnd, foi padronizar um tipo de formulário no meu ambiente de trabalho atual, caracterizado por seus diferentes campos de entrada e sua estrutura comum geral.

Além do componente principal, há também as folhas de estilo "evo-standard-form" e "evo-standard-tablegrid" que imitam aproximadamente meu ambiente de trabalho, usadas para testar e demonstrar como ele funciona.

Espero que este seja um componente em evolução, mantendo o objetivo principal. Quaisquer sugestões, críticas, dicas e lições construtivas serão bem-vindas e apreciadas.

<h2>Como Usar</h2>

<strong>1 - Faça o Download do Último Release do Componente</strong>
<p>Há apenas dois arquivos na versão mais recente, um CSS e um JS. Ambos devem ser incluídos na página a ser usada. Uma forte recomendação é incluir o arquivo JS na parte inferior da página.</p>
<p>Exemplo:</p>

```
<link rel="stylesheet" href="css/evo-dynamic-grid.min.css">
.
.
<script src="js/evo-dynamic-grid.min.js"></script>
```

<strong>2 - Crie um contêiner para a grade dinâmica</strong>
<p>Adicione a Classe CSS <em>"evo-dynamic-grid"</em> ao elemento a ser transformado em contêiner.</p>
<p>Exemplo:</p>

```
<section class="evo-dynamic-grid">
```

<strong>3 - Adicione elementos de tag dentro do contêiner com as Classes de posicionamento</strong>
<p>Agora é possível adicionar outros elementos de tag no contêiner usando as Classes <em>row-N</em> e <em>column-N</em>. Como o nome indica, eles são usados ​​para especificar a Linha e a Coluna da Grid CSS dinamicamente. A última Linha da Grid será o número da Linha mais alto especificado por um elemento. O mesmo se aplica à Coluna.
</p>
<p>Exemplo:</p>

```
<!-- Especifica uma Input Tag na Primeira Linha e Segunda Coluna do Grid -->
<input class="row-1 column-2" type="text" name="text" id="text">

<!-- Especifica uma Label Tag na Terceira Linha e Quarta Coluna do Grid -->
<label class="row-3 column-4" for="myElement">Label</label>
```

<p>Também é possível anexar <em>-span-N</em> nas Classes de Linha e Coluna para fazer com que um elemento ocupe uma região maior.</p>
<p>Exemplo:</p>

```
<!-- Especifica uma Input Tag começando na Segunda Linha abrangendo até a Quarta Linha (Span 3) e Primeira Coluna do Grid -->
<input class="row-2-span-3 column-1" type="text" name="text2" id="text2">

<!-- Especifica uma Label Tag na Primeira Linha e começando na Primeira Coluna abrangendo até a Segunda Colina (Span 2) do Grid -->
<label class="row-1 column-1-span-2" for="myElement2">Label</label>
```

<strong>4 - Adicione Classes de Suporte para Ajustar o Posicionamento</strong>
<p>Também estão disponíveis algumas Classes de suporte para serem usadas para Justificar/Alinhar Elementos dentro das células do Grid. Estas são as seguintes:</P>
<ul>
    <li>justify-start
    <li>justify-end
    <li>justify-center
    <li>align-start
    <li>align-end
    <li>align-center
</ul>
<p>Justificar e Alinhar podem ser usados ​​ao mesmo tempo e ajustar o Elemento Tag, conforme o nome implica</p>
<p>Exemplo:</p>

```
<!-- Especifica uma Input Tag na Primeira Linha e Primeira Coluna do Grid Justificada no Início da Célula (Geralmente o lado Esquerdo)-->
<input class="row-1 column-1 justify-start" type="text" name="text2" id="text2">

<!-- Especifica uma Label Tag na Segunda Linha e Primeira Coluna do Grid Alinhada no Fim da Célula (Geralmente embaixo)-->
<label class="row-2 column-1 align-end" for="myElement2">Label</label>
```

<h2>Créditos</h2>

Esse Projeto foi construído por [Caio "Tyghorn" Victor](https://github.com/CaioVictorMota) para a humanidade.

Nós somos todos um.
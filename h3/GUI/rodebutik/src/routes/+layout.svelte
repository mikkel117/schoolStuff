<script lang="ts">
  import "../gloable.css";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
  <a href="/todos">todos</a>
</nav>

<slot />

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background-color: rgb(0, 28, 41);
  }
  a {
    color: #eeac00;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
  a:hover {
    color: #005c7b;
  }
</style>

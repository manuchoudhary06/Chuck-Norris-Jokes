<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chuck Norris Joke Generator</title>
    <!-- CSS Skeleton -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
    />
  </head>
  <body>
    <div class="container">
      <h2>Chuck Norris Joke Generator</h2>
      <form>
        <div>
          <label for="number">Number of Jokes</label>
          <input type="number" id="number" />
        </div>
        <div>
          <button class="get-jokes">Get Jokes</button>
        </div>
      </form>
      <ul class="jokes"></ul>
    </div>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>

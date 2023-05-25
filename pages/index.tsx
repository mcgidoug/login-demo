export default function Login() {
  return (
    <div>
      <h1> Registraion </h1>
      <form action="/api/register" method="post">
        <label>
          Email Address
        </label>
        <input className="text-black" type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input className="text-black" type='password' name='password' placeholder='Type your password'></input>
        <input type='submit' value='Register'></input>

      </form>

      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>
          Email Address
        </label>
        <input className="text-black" type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input className="text-black" type='password' name='password' placeholder='Type your password'></input>
        <input type='submit' value='Login'></input>

      </form>
    </div>
  )
}
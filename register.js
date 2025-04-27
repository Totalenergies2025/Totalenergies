export default function Register() {
  return (
    <div>
      <h1>Criar Conta na TotalEnergies</h1>
      <form>
        <input type="text" placeholder="Nome Completo" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

import supabase from '@/lib/supabase'
import DeleteUserButton from './DeleteUserButton'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
  const { data, error } = await supabase.auth.admin.listUsers()
  if (error) {
    return <p className="p-4 text-red-500">Error: {error.message}</p>
  }

  const users = data?.users ?? []

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1 text-left">ID</th>
            <th className="border px-2 py-1 text-left">Email</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-2 py-1">{user.id}</td>
              <td className="border px-2 py-1">{user.email}</td>
              <td className="border px-2 py-1 text-center">
                <DeleteUserButton id={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

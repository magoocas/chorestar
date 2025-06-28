'use client'

interface Props {
  id: string
}

export default function DeleteUserButton({ id }: Props) {
  async function handleDelete() {
    const res = await fetch('/api/admin/delete-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    if (res.ok) {
      location.reload()
    } else {
      alert('Failed to delete user')
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  )
}

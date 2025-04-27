
export function Button({ children, className }) {
  return (
    <button className={`px-4 py-2 text-lg font-semibold rounded-2xl ${className || ''}`}>
      {children}
    </button>
  )
}

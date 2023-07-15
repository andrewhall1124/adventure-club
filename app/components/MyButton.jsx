export function MyButton({ name, style, action }) {
  let buttonClass = '';
  const outlined = 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-two border-[1px] text-xl py-2 px-3 rounded-xl transition-colors';
  const filled = 'border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600 font-two border-[1px] text-xl p-2 rounded-xl transition-colors';

  if (style === 'outlined') {
    buttonClass = outlined;
  } else {
    buttonClass = filled;
  }

  return (
    <button className={buttonClass} onClick={action}>
      {name}
    </button>
  );
}

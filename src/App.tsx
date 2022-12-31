import React, { useState, useRef, useEffect } from "react";

interface ItemProps {
  name: string;
  isChecked: boolean;
}

function App() {
  // variables
  const localStorageName = "shopping-list-items";
  // state
  const [items, setItems] = useState<ItemProps[]>([]);
  // ref
  const inputNewItem = useRef<HTMLInputElement>(null);
  // useEffect
  useEffect(() => {
    let storedItems = localStorage.getItem(localStorageName);
    if (storedItems != null) {
      setItems([JSON.parse(storedItems)]);
    }
  }, []);
  // methods
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let val = inputNewItem.current?.value || "";
    if (val !== "") {
      setItems([
        ...items,
        {
          name: val,
          isChecked: false,
        },
      ]);
      localStorage.setItem(localStorageName, JSON.stringify(items));
      if (inputNewItem.current != null) {
        inputNewItem.current.value = "";
      }
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4 lg:px-0">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8">
        <h1 className="text-5xl font-medium text-center mb-8 text-mandy">
          Liste de courses
        </h1>
        {items && items.length > 0 ? (
          <ul className="px-4 flex flex-col gap-4">
            {items.map((item, index) => (
              <li key={index} className="text-lg">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center italic text-gray-300">
            Aucun élément n'a encore été ajouté.
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex items-center justify-between gap-4"
        >
          <label htmlFor="item" className="sr-only">
            Nom de l'élément
          </label>
          <input
            type="text"
            ref={inputNewItem}
            className="rounded-2xl border border-gray-200 w-full placeholder:italic placeholder:text-gray-300 px-4 py-2 focus:outline-mandy-300"
            placeholder="Brosse à dents pour Marie-Jeanette"
          />
          <button
            type="submit"
            className="bg-mandy text-white px-4 py-2 rounded-2xl transition hover:bg-mandy-600 focus:bg-mandy-600"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

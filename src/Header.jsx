import SearchBox from './SearchBox';

function Header({setFilter, filter}) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>

      <SearchBox setFilter={setFilter} filter={filter} />
    </header>
  );
};

export default Header;

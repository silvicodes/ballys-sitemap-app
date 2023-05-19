import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchHome from './components/SearchHome';
import SearchResults from './components/SearchResults';
import RepositoryDetail from './components/RepositoryDetail';
import Footer from './components/footer';
import Header from './components/Header';  

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header title="Ballys Sitemap" /> {/* Pass "Ballys Sitemap" as a prop here */}
        <Routes>
          <Route path="/" element={<SearchHome />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/repository-detail/:repoId" element={<RepositoryDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

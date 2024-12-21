const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      <button
        className='btn'
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <span className="page-display" aria-live="polite">
        {currentPage} / {totalPages}
      </span>
      <button
        className='btn'
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
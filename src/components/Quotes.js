import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': '6OswdSRYmeJgqtC+MLCqOA==iSGiiZldylP7Y018',
            },
          },
        );
        const data = await res.json();
        const quoteData = data[0];
        setQuote(quoteData.quote);
        setAuthor(quoteData.author);
      } catch (err) {
        setError('Cannot display quotes');
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);
  if (loading) {
    return <p>loading.....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="quotes">
      <p className="quotes-author">{author}</p>
      <p className="quotes-quote">{quote}</p>
    </div>
  );
};
export default Quote;

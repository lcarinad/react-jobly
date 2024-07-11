import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";
import CompanyCard from "./CompanyCard";

/**Show page with list of companies.
 *
 * On mount, show companies from API.
 * Re-loads filtered companies if search form submitted.
 *
 *
 */
function Companies() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnLoad() {
    searchCompany();
  }, []);

  async function searchCompany(name) {
    let companies = await JoblyApi.getAllCompanies(name);
    setCompanies(companies);
  }
  if (!companies) return <LoadingSpinner />;

  return (
    <div>
      {companies ? (
        <div>
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p>Sorry, no results with that search term</p>
      )}
    </div>
  );
}

export default Companies;

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**Show information about each company
 *
 * Is rendered by Companies to show a card for each company.
 */

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <Card>
      <CardBody>
        <Link to={`/companies/${handle}`}>
          <CardTitle tag="h5">{name}</CardTitle>
        </Link>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
}
export default CompanyCard;

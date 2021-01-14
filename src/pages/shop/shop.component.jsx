import React, { useState } from "react";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

function ShopPage({ props }) {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default ShopPage;

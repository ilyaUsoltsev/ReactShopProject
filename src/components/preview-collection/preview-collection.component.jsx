import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, imageUrl, price, name }) => {
            return (
              <CollectionItem
                key={id}
                id={id}
                imageUrl={imageUrl}
                price={price}
                name={name}
              />
            );
          })}
      </div>
    </div>
  );
}

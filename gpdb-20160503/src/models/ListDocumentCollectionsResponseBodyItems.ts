// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDocumentCollectionsResponseBodyItemsCollectionList } from "./ListDocumentCollectionsResponseBodyItemsCollectionList";


export class ListDocumentCollectionsResponseBodyItems extends $dara.Model {
  collectionList?: ListDocumentCollectionsResponseBodyItemsCollectionList[];
  static names(): { [key: string]: string } {
    return {
      collectionList: 'CollectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionList: { 'type': 'array', 'itemType': ListDocumentCollectionsResponseBodyItemsCollectionList },
    };
  }

  validate() {
    if(Array.isArray(this.collectionList)) {
      $dara.Model.validateArray(this.collectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionsResponseBodyCollections extends $dara.Model {
  collection?: string[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.collection)) {
      $dara.Model.validateArray(this.collection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStoreViewIndexResponseBodyIndexes } from "./GetStoreViewIndexResponseBodyIndexes";


export class GetStoreViewIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The index configurations.
   */
  indexes?: GetStoreViewIndexResponseBodyIndexes[];
  static names(): { [key: string]: string } {
    return {
      indexes: 'indexes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexes: { 'type': 'array', 'itemType': GetStoreViewIndexResponseBodyIndexes },
    };
  }

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


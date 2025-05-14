// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureViewFieldRelationshipsResponseBodyRelationships } from "./ListFeatureViewFieldRelationshipsResponseBodyRelationships";


export class ListFeatureViewFieldRelationshipsResponseBody extends $dara.Model {
  relationships?: ListFeatureViewFieldRelationshipsResponseBodyRelationships[];
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationships: 'Relationships',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationships: { 'type': 'array', 'itemType': ListFeatureViewFieldRelationshipsResponseBodyRelationships },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relationships)) {
      $dara.Model.validateArray(this.relationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


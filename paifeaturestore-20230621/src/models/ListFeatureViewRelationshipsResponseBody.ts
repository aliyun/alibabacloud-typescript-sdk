// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureViewRelationshipsResponseBodyRelationships } from "./ListFeatureViewRelationshipsResponseBodyRelationships";


export class ListFeatureViewRelationshipsResponseBody extends $dara.Model {
  relationships?: ListFeatureViewRelationshipsResponseBodyRelationships[];
  /**
   * @example
   * 0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B
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
      relationships: { 'type': 'array', 'itemType': ListFeatureViewRelationshipsResponseBodyRelationships },
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


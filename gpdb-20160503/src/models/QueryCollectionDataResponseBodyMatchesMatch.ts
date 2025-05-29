// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCollectionDataResponseBodyMatchesMatchValues } from "./QueryCollectionDataResponseBodyMatchesMatchValues";


export class QueryCollectionDataResponseBodyMatchesMatch extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * doca-1234
   */
  id?: string;
  /**
   * @remarks
   * Metadata.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The similarity score of this data, which is related to the algorithm `(l2/ip/cosine)` specified when creating the index.
   * 
   * @example
   * 0.12345
   */
  score?: number;
  /**
   * @remarks
   * List of vector data.
   */
  values?: QueryCollectionDataResponseBodyMatchesMatchValues;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metadata: 'Metadata',
      score: 'Score',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      score: 'number',
      values: QueryCollectionDataResponseBodyMatchesMatchValues,
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.values && typeof (this.values as any).validate === 'function') {
      (this.values as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


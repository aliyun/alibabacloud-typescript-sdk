// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSyncResultResponseBodyDataHitResultHits } from "./GetSyncResultResponseBodyDataHitResultHits";


export class GetSyncResultResponseBodyDataHitResult extends $dara.Model {
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  name?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 1211
   */
  rid?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hits)) {
      $dara.Model.validateArray(this.hits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


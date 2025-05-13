// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAckClustersResponseBodyResult } from "./ListAckClustersResponseBodyResult";


export class ListAckClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F93EAA49-284F-4FCE-9E67-FA23FB4BB512
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListAckClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAckClustersResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


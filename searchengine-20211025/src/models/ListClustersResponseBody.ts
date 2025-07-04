// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersResponseBodyResult } from "./ListClustersResponseBodyResult";


export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
  result?: ListClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClustersResponseBodyResult },
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


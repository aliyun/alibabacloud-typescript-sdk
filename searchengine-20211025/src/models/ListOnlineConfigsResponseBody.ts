// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOnlineConfigsResponseBodyResult } from "./ListOnlineConfigsResponseBodyResult";


export class ListOnlineConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
  result?: ListOnlineConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOnlineConfigsResponseBodyResult },
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


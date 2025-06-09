// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEndpointsResponseBodyResult } from "./ListEndpointsResponseBodyResult";


export class ListEndpointsResponseBody extends $dara.Model {
  /**
   * @example
   * D6030CE6-9FEB-5B2F-84AC-3ADE3CBA89E5
   */
  requestId?: string;
  result?: ListEndpointsResponseBodyResult[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResult },
      totalCount: 'number',
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


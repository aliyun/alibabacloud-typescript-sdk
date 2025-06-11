// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchKillProcessListResponseBodyData } from "./BatchKillProcessListResponseBodyData";


export class BatchKillProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of the return result.
   */
  data?: BatchKillProcessListResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BatchKillProcessListResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


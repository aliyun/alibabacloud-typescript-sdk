// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchAddFeishuUsersResponseBodyResult } from "./BatchAddFeishuUsersResponseBodyResult";


export class BatchAddFeishuUsersResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: BatchAddFeishuUsersResponseBodyResult;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchAddFeishuUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


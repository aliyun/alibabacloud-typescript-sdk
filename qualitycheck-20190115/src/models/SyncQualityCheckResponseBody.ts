// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncQualityCheckResponseBodyData } from "./SyncQualityCheckResponseBodyData";


export class SyncQualityCheckResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: SyncQualityCheckResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8*****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SyncQualityCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


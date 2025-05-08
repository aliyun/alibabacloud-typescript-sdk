// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddMigrationTaskResponseBodyData } from "./AddMigrationTaskResponseBodyData";


export class AddMigrationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data structure.
   */
  data?: AddMigrationTaskResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * 请求结果，取值如下：
   * - `true`：请求成功。
   * - `false`：请求失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddMigrationTaskResponseBodyData,
      errorCode: 'string',
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


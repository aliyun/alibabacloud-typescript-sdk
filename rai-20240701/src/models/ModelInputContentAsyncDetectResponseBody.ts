// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelInputContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * 操作是否成功。true表示成功，false表示失败。
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumUploadFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the deletion was successful. The value success is returned if the deletion was successful.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 内部错误，请联系管理员。
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 40B10E04-81E8-4643-970D-F1B38F2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - `true`: The operation was successful.
   * - `false`: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


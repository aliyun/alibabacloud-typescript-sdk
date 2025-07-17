// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRetcodeAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 means success, other status codes are exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the Browser Monitoring task was deleted. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Additional information. The value description is as follows:
   * - If the request is normal, return success.
   * - If the request is abnormal, return specific abnormal information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01FF8DD9-A09C-47A1-895A-B6E321BE77B6
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful:
   * - `true`: The operation was successful
   * - `false`: The operation failed
   * 
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
      code: 'number',
      data: 'string',
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


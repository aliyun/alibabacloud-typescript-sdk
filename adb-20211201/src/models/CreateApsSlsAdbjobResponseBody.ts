// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsSlsADBJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * aps-aa11111aa1aa1a1a
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code returned by the request. A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the call result. Valid values:
   * - If the request is normal, **Success** is returned. 
   * - If the request is abnormal, the specific error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * - **success**: The check passed.
   * - **false**: The check failed.
   * 
   * @example
   * True
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
      code: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRetryJobExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Response Code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returns `success` for successful requests, and an error message for failed requests.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique Request ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * 438737AC-760A-57D9-B646-B7EF79426243
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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


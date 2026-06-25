// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateMarkSuccessWorkflowExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of `200` indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional details about the result.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, used for troubleshooting.
   * 
   * @example
   * 1DF6732E-15D8-5E1F-95E3-C10077F556B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the operation succeeded.
   * 
   * - `true`: The operation succeeded.
   * 
   * - `false`: The operation failed.
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


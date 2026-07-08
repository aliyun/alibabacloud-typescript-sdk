// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenderingInstanceCommandsStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Description. When Status=Failed, this field contains the failure reason.
   * 
   * @example
   * conn failed!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Command execution result string
   * 
   * @example
   * Thu Jun 27 16:06:26 CST 2024
   */
  result?: string;
  /**
   * @remarks
   * Command execution status. Valid values:
   * 
   * 1. Doing: Executing
   * 
   * 2. Success: Succeeded
   * 
   * 3. Failed: Failed. The system automatically retries within the timeout period. You can either wait or resend the request.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenderingInstanceCommandsStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description. When Status is Failed, this field includes the cause of the failure.
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
   * The execution result string of the command.
   * 
   * @example
   * Thu Jun 27 16:06:26 CST 2024
   */
  result?: string;
  /**
   * @remarks
   * The command execution status. Valid values:
   * - Doing: Executing.
   * - Success: Succeeded.
   * - Failed: Failed. Within the timeout period, the system automatically retries the command. You can continue to wait or initiate a new request.
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


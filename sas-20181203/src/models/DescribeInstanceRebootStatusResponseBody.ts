// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRebootStatusResponseBodyRebootStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned when the server failed to be restarted. Valid values:
   * 
   * *   **10001**: The restart command failed to be sent.
   * *   **10002**: The restart operation failed.
   * *   **10003**: A timeout error occurs.
   * 
   * @example
   * 10001
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned when the server failed to be restarted.
   * 
   * @example
   * push failed
   */
  msg?: string;
  /**
   * @remarks
   * The status of the server. Valid values:
   * 
   * *   **0**: The server is being restarted.
   * *   **1**: The server is restarted.
   * *   **2**: The server failed to be restarted.
   * 
   * @example
   * 2
   */
  rebootStatus?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 9b59c2d6-0967-46e3-ad7b-152227c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      rebootStatus: 'RebootStatus',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      rebootStatus: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRebootStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the status information about the servers that you restart.
   */
  rebootStatuses?: DescribeInstanceRebootStatusResponseBodyRebootStatuses[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5BD95679-D63A-4151-97D0-188432F4A57
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      rebootStatuses: 'RebootStatuses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebootStatuses: { 'type': 'array', 'itemType': DescribeInstanceRebootStatusResponseBodyRebootStatuses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rebootStatuses)) {
      $dara.Model.validateArray(this.rebootStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentInstallStatusResponseBodyAegisClientInvokeStatusResponseList extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Installed
   */
  message?: string;
  /**
   * @remarks
   * The installation status. Valid value:
   * 
   * *   **-1**: The agent is not installed.
   * *   **0**: The agent is installed.
   * *   **1**: Failed to create a directory in the client.
   * *   **2**: Failed to download the installation package.
   * *   **3**: The installation file does not exist.
   * *   **4**: The verification information of the installation file does not exist.
   * *   **5**: Failed to verify the installation file.
   * *   **6**: Failed to execute the installation file.
   * *   **7**: You do not have the required permissions. The installation failed.
   * *   **8**: No client process is detected.
   * *   **100**: The installation failed due to an unknown error.
   * *   **1001**: The installation failed. One-click installation is not supported in this region.
   * *   **1002**: The installation failed. Servers that are not provided by Alibaba Cloud are not supported. Install the agent by executing a script on the server.
   * *   **1003**: The installation failed. The operating system is not supported.
   * *   **1004**: An internal error occurred. Try again later.
   * *   **1005**: The Elastic Compute Service (ECS) instance is not started. Start the ECS instance and try again.
   * *   **1006**: One-click installation is not supported for ECS instances of the classic network type.
   * *   **1007**: The running command is manually stopped.
   * *   **1008**: Cloud Assistant is not installed. You cannot install the client.
   * *   **1009**: The command execution timed out. Try again later.
   * *   **1010**: The machine is already online. You do not need to install a client.
   * 
   * @example
   * 1
   */
  resuleCode?: string;
  /**
   * @remarks
   * The installation result. Valid value:
   * 
   * *   **-1**: The agent is not installed.
   * *   **0**: The agent is being installed.
   * *   **1**: The agent is installed.
   * *   **2**: The installation failed.
   * 
   * @example
   * 0
   */
  result?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * d123f6ae-9749-4338-8c7f-3c2c1ead****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      resuleCode: 'ResuleCode',
      result: 'Result',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      resuleCode: 'string',
      result: 'number',
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

export class DescribeAgentInstallStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of servers.
   */
  aegisClientInvokeStatusResponseList?: DescribeAgentInstallStatusResponseBodyAegisClientInvokeStatusResponseList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aegisClientInvokeStatusResponseList: 'AegisClientInvokeStatusResponseList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisClientInvokeStatusResponseList: { 'type': 'array', 'itemType': DescribeAgentInstallStatusResponseBodyAegisClientInvokeStatusResponseList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aegisClientInvokeStatusResponseList)) {
      $dara.Model.validateArray(this.aegisClientInvokeStatusResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


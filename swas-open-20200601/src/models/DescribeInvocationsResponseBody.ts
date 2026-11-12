// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The command content, which is transmitted in Base64 encoding.
   * 
   * @example
   * bHM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * testname
   */
  commandName?: string;
  /**
   * @remarks
   * The type of the command. Valid values:
   * 
   * - RunBatScript: a Bat command for Windows instances.
   * - RunPowerShellScript: a PowerShell command for Windows instances.
   * - RunShellScript: a shell command for Linux instances.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the command was created. The time is displayed in UTC (Z) in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2022-07-11T06:37:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The execution status of the command. Valid values:
   * 
   * - Pending: The system is verifying or sending the command.
   * - Invalid: The specified command type or parameter is invalid.
   * - Aborted: The command failed to be sent to the instance. The instance must be in the Running state, and the command must be delivered within one minute.
   * - Running: The command is being run on the instance.
   * - Success: The command execution is complete, and the exit code is 0.
   * - Failed: The command execution is complete, and the exit code is non-zero.
   * - Error: An exception occurred during command execution, and the command could not continue.
   * - Timeout: The command execution timed out.
   * - Cancelled: The command execution has been canceled, and the command was never started.
   * - Stopping: The running command is being stopped.
   * - Terminated: The command was terminated during execution.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * t-hz02p9545t6****
   */
  invokeId?: string;
  /**
   * @remarks
   * The status of the command. Valid values:
   * 
   * - Running: The command is running.
   * - Finished: The command execution is complete.
   * - Failed: The command execution failed.
   * - Stopped: The command has been stopped.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The custom parameters included in the command. If no parameters exist, the default value is {}.
   * 
   * @example
   * {}
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeStatus: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command execution records.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Settings for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


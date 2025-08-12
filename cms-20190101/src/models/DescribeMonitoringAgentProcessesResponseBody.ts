// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess extends $dara.Model {
  /**
   * @remarks
   * The command used to obtain the number of processes. Valid value: `number`.
   * 
   * >  The `number` command obtains the number of processes that match the condition.
   * 
   * @example
   * number
   */
  command?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 3619****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-hp3hl3cx1pbahzy8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 234567
   */
  processId?: number;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * Nginx
   */
  processName?: string;
  /**
   * @remarks
   * The user who launched the process.
   * 
   * @example
   * alice
   */
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      groupId: 'string',
      instanceId: 'string',
      processId: 'number',
      processName: 'string',
      processUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBodyNodeProcesses extends $dara.Model {
  nodeProcess?: DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess[];
  static names(): { [key: string]: string } {
    return {
      nodeProcess: 'NodeProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeProcess: { 'type': 'array', 'itemType': DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess },
    };
  }

  validate() {
    if(Array.isArray(this.nodeProcess)) {
      $dara.Model.validateArray(this.nodeProcess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The value 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The information about the processes.
   */
  nodeProcesses?: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C11C0E85-6862-4F25-8D66-D6A5E0882984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeProcesses: 'NodeProcesses',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeProcesses: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeProcesses && typeof (this.nodeProcesses as any).validate === 'function') {
      (this.nodeProcesses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


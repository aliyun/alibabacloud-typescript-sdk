// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The definition of the flow.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n - type: pass\\n name: mypass
   */
  flowDefinition?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The input of the execution, which is in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  input?: string;
  /**
   * @remarks
   * The name of the execution.
   * 
   * @example
   * exec
   */
  name?: string;
  /**
   * @remarks
   * The execution result, which is in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the role that executed the flow. If the RoleArn in the flow definition is changed during the execution of the flow, the system records and returns a snapshot of the original RoleArn.
   * 
   * >  If you do not specify the RoleArn parameter in the request parameters, the response parameters do not contain the RoleArn parameter.
   * 
   * @example
   * acs:ram:${region}:${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  startedTime?: string;
  /**
   * @remarks
   * The execution status. Valid values:
   * 
   * *   **Starting**
   * *   **Running**
   * *   **Stopped**
   * *   **Succeeded**
   * *   **Failed**
   * *   **TimedOut**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  stoppedTime?: string;
  static names(): { [key: string]: string } {
    return {
      flowDefinition: 'FlowDefinition',
      flowName: 'FlowName',
      input: 'Input',
      name: 'Name',
      output: 'Output',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      startedTime: 'StartedTime',
      status: 'Status',
      stoppedTime: 'StoppedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowDefinition: 'string',
      flowName: 'string',
      input: 'string',
      name: 'string',
      output: 'string',
      requestId: 'string',
      roleArn: 'string',
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


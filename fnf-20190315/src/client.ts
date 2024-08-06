// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The definition of the workflow. The definition must comply with the flow definition language (FDL) syntax. Considering compatibility, the system supports two flow definition specifications.
   * 
   * >  In the preceding flow definition example, Name:my_flow_name is the workflow name, which must be consistent with the input parameter Name
   * 
   * This parameter is required.
   * 
   * @example
   * version:&nbsp;v1.0<br/>type:&nbsp;flow<br/>steps:<br/>&nbsp;-&nbsp;type:&nbsp;pass<br/>&nbsp;name:&nbsp;mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * test flow
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values: Express and Standard. Considering compatibility, an empty string is equivalent to the Standard execution mode.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The path of the external storage.
   * 
   * @example
   * /path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * The name of the flow. The name is unique within the same region and cannot be modified after the flow is created. Set this parameter based on the following rules:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram:${region}:${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow. Set this parameter to **FDL**.
   * 
   * This parameter is required.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      executionMode: 'ExecutionMode',
      externalStorageLocation: 'ExternalStorageLocation',
      name: 'Name',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      executionMode: 'string',
      externalStorageLocation: 'string',
      name: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Considering compatibility, the system supports two flow definition specifications.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n - type: pass\\n name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test flow
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values: Express and Standard. Considering compatibility, an empty string is equivalent to the Standard execution mode.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The unique ID of the flow.
   * 
   * @example
   * e589e092-e2c0-4dee-b306-3574ddfdddf5****
   */
  id?: string;
  /**
   * @remarks
   * The time when the flow was last modified.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The request ID. Each time an `HTTP status code` is returned, Serverless Workflow returns a value for the parameter.
   * 
   * @example
   * testRequestID
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram:${region}:${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow.
   * 
   * Valid value:
   * 
   * *   FDL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      executionMode: 'ExecutionMode',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      executionMode: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleRequest extends $tea.Model {
  /**
   * @remarks
   * The CRON expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the time-based schedule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the workflow that is associated with the time-based schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule. Specify the value in the JSON format.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
  /**
   * @remarks
   * The name of the time-based schedule. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   It is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  signatureVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      flowName: 'FlowName',
      payload: 'Payload',
      scheduleName: 'ScheduleName',
      signatureVersion: 'SignatureVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      flowName: 'string',
      payload: 'string',
      scheduleName: 'string',
      signatureVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the time-based schedule was created.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the time-based schedule is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the time-based schedule was last modified.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
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
   * The ID of the time-based schedule.
   * 
   * @example
   * testScheduleId
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the time-based schedule.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      lastModifiedTime: 'LastModifiedTime',
      payload: 'Payload',
      requestId: 'RequestId',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      lastModifiedTime: 'string',
      payload: 'string',
      requestId: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The maximum period of time for long polling waits. Valid values: 0 to 60. Unit: seconds. Configure this parameter based on the following rules:
   * 
   * *   If the value is 0, the system immediately returns the current execution status.
   * *   If the value is greater than 0, the long polling request waits until the execution ends or the specified period elapses.
   * 
   * @example
   * 20
   */
  waitTimeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      waitTimeSeconds: 'WaitTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      waitTimeSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponseBody extends $tea.Model {
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
   * Succeeded
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
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n - type: pass\\n name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test flow
   */
  description?: string;
  /**
   * @remarks
   * The execution mode or the enumeration type. Valid values: Express and Standard. A value of Standard indicates an empty string.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The unique ID of the flow.
   * 
   * @example
   * e589e092-e2c0-4dee-b306-3574ddfdddf5****
   */
  id?: string;
  /**
   * @remarks
   * The time when the flow was last modified.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  name?: string;
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
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the workflow.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      executionMode: 'ExecutionMode',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      executionMode: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The name of the time-based schedule. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the time-based schedule was created.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the time-based schedule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the time-based schedule was last modified.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
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
   * The ID of the time-based schedule.
   * 
   * @example
   * testScheduleId
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the time-based schedule.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      lastModifiedTime: 'LastModifiedTime',
      payload: 'Payload',
      requestId: 'RequestId',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      lastModifiedTime: 'string',
      payload: 'string',
      requestId: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The number of workflows that you want to query. Valid values: 1-999. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The name of the event to start the query. You can obtain the value from the response data.
   * 
   * @example
   * flow_xxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The events.
   */
  events?: GetExecutionHistoryResponseBodyEvents[];
  /**
   * @remarks
   * You do not need to specify this parameter for the first request. The returned value of **ScheduleEventId** is used as the token for the next query. No value is returned for the last query.
   * 
   * @example
   * 3
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': GetExecutionHistoryResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExecutionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExecutionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * The name prefix of the execution.
   * 
   * @example
   * run
   */
  executionNamePrefix?: string;
  /**
   * @remarks
   * The name of the flow. The name must be unique within the region and cannot be modified after the flow is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The number of executions that you want to query. Valid values: 1-99. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The name of the execution to start the query. You can obtain the value from the response data. You do not need to specify this parameter for the first request.
   * 
   * @example
   * flow_xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query executions. Specify the value in the UTC RFC3339 format.
   * 
   * @example
   * 2020-12-02T02:39:20.402Z
   */
  startedTimeBegin?: string;
  /**
   * @remarks
   * The end of the time range to query executions. Specify the value in the UTC RFC3339 format.
   * 
   * @example
   * 2020-12-02T02:23:54.817Z
   */
  startedTimeEnd?: string;
  /**
   * @remarks
   * The status of the execution that you want to filter. Valid values:
   * 
   * *   **Starting**
   * *   **Running**
   * *   **Stopped**
   * *   **Succeeded**
   * *   **Failed**
   * *   **TimedOut**
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionNamePrefix: 'ExecutionNamePrefix',
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
      startedTimeBegin: 'StartedTimeBegin',
      startedTimeEnd: 'StartedTimeEnd',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionNamePrefix: 'string',
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
      startedTimeBegin: 'string',
      startedTimeEnd: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The start key for the next query. This parameter is not returned if all results have been returned.
   * 
   * @example
   * exec2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of workflows that you want to query. Valid values: 1 - 999. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The token to start the query.
   * 
   * @example
   * flow_nextxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of flows.
   */
  flows?: ListFlowsResponseBodyFlows[];
  /**
   * @remarks
   * The start key for the next query. This parameter is not returned if all results have been returned.
   * 
   * @example
   * flow_nextxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flows: 'Flows',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flows: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlows },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedules. The name is unique within the region and cannot be modified after the flow is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The number of schedules to be queried. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * For the first query, you do not need to specify this parameter. The system uses the value of the **FlowName** parameter as the value of the **NextToken** parameter. When the query ends, no value is returned for this parameter.
   * 
   * @example
   * testNextToken
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * testNextToken
   */
  nextToken?: string;
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
   * The time-based schedules that are queried.
   */
  schedules?: ListSchedulesResponseBodySchedules[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      schedules: { 'type': 'array', 'itemType': ListSchedulesResponseBodySchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSchedulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedRequest extends $tea.Model {
  /**
   * @remarks
   * The cause of the failure. The value must be 1 to 4,096 characters in length.
   * 
   * @example
   * emptyString
   */
  cause?: string;
  /**
   * @remarks
   * The error code for the failed task. The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * nill
   */
  error?: string;
  /**
   * @remarks
   * The token of the task whose execution you want to report. The task token is passed to the called service, such as Message Service (MNS) or Function Compute. For MNS, the value of this parameter can be obtained from a message. For Function Compute, the value of this parameter can be obtained from an event. For more information, see [Service integration modes](https://help.aliyun.com/document_detail/2592915.html).
   * 
   * This parameter is required.
   * 
   * @example
   * emptyString
   */
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      taskToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportTaskFailedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportTaskFailedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededRequest extends $tea.Model {
  /**
   * @remarks
   * The output information of the task whose execution success you want to report.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
  /**
   * @remarks
   * The token of the task whose execution you want to report. The task token is passed to the called service, such as Message Service (MNS) or Function Compute. For MNS, the value of this parameter can be obtained from a message. For Function Compute, the value of this parameter can be obtained from an event. For more information, see [Service integration modes](https://help.aliyun.com/document_detail/2592915.html).
   * 
   * This parameter is required.
   * 
   * @example
   * emptyString
   */
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      taskToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportTaskSucceededResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportTaskSucceededResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies that the **TaskToken**-related tasks are called back after the execution in the flow ends.
   * 
   * @example
   * 12
   */
  callbackFnFTaskToken?: string;
  /**
   * @remarks
   * The name of the execution. The execution name is unique within a workflow. Configure this parameter based on the following rules:
   * 
   * *   The name must start with a letter or an underscore (_).
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be executed.
   * 
   * This parameter is required.
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
  static names(): { [key: string]: string } {
    return {
      callbackFnFTaskToken: 'CallbackFnFTaskToken',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackFnFTaskToken: 'string',
      executionName: 'string',
      flowName: 'string',
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $tea.Model {
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
   * The name of the workflow.
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
   * exec1
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
   * Succeeded
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
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the execution that you want to start. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * Different from the StartExecution operation, in the synchronous execution mode, the execution name is no longer required to be unique within a flow. You can choose to provide an execution name to identify the current execution. In this case, the system adds a UUID to the current execution name. The used format is {ExecutionName}:{UUID}. If you do not specify the execution name, the system automatically generates an execution name.
   * 
   * @example
   * my_exec_name
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be executed.
   * 
   * This parameter is required.
   * 
   * @example
   * my_flow_name
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
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code that is returned if the execution failed.
   * 
   * @example
   * ActionNotSupported
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that indicates the execution timed out.
   * 
   * @example
   * Standard execution is not supported
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * my_flow_name
   */
  flowName?: string;
  /**
   * @remarks
   * The name of the execution.
   * 
   * @example
   * my_exec_name:{UUID}
   */
  name?: string;
  /**
   * @remarks
   * The output of the execution, which is in the JSON format.
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
   * The time when the execution started.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  startedTime?: string;
  /**
   * @remarks
   * The status of the execution. Valid values:
   * 
   * *   **Starting**
   * *   **Running**
   * *   **Stopped**
   * *   **Succeeded**
   * *   **Failed**
   * *   **TimedOut**
   * 
   * @example
   * Succeeded
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      flowName: 'FlowName',
      name: 'Name',
      output: 'Output',
      requestId: 'RequestId',
      startedTime: 'StartedTime',
      status: 'Status',
      stoppedTime: 'StoppedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      flowName: 'string',
      name: 'string',
      output: 'string',
      requestId: 'string',
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSyncExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartSyncExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The reason for stopping the execution. The value must be 1 to 4,096 characters in length.
   * 
   * @example
   * for test
   */
  cause?: string;
  /**
   * @remarks
   * The error for stopping the execution. The value must be 1 to 128 characters in length.
   * 
   * @example
   * nill
   */
  error?: string;
  /**
   * @remarks
   * The name of the execution to be stopped. You can call the **ListExecutions** operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be stopped. You can call the **ListFlows** operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      executionName: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The definition of the workflow. The definition must comply with the flow definition language (FDL) syntax. Considering compatibility, the system supports the two workflow definition specifications.
   * 
   * >  In the preceding workflow definition example, Name:my_flow_name is the workflow name, which must be consistent with the input parameter Name
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n  - type: pass\\n    name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test definition
   */
  description?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, the flow execution engine assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow. Valid value: **FDL**.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      name: 'Name',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      name: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The flow definition, which follows the FDL syntax standard. Considering compatibility, the system supports the two flow definition specifications.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n  - type: pass\\n    name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test definition
   */
  description?: string;
  /**
   * @remarks
   * The path of the external storage.
   * 
   * @example
   * /path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * The unique ID of the flow.
   * 
   * @example
   * e589e092-e2c0-4dee-b306-3574ddfdddf5****
   */
  id?: string;
  /**
   * @remarks
   * The time when the flow was last modified.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestID
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, the flow execution engine assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      externalStorageLocation: 'ExternalStorageLocation',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      externalStorageLocation: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleRequest extends $tea.Model {
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the time-based schedule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule. It must be in the JSON format.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
  /**
   * @remarks
   * The name of the time-based schedule. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      flowName: 'FlowName',
      payload: 'Payload',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      flowName: 'string',
      payload: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the time-based schedule was created.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the time-based schedule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the time-based schedule was last updated.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
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
   * The ID of the time-based schedule.
   * 
   * @example
   * testScheduleId
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the time-based schedule.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      lastModifiedTime: 'LastModifiedTime',
      payload: 'Payload',
      requestId: 'RequestId',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      lastModifiedTime: 'string',
      payload: 'string',
      requestId: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBodyEvents extends $tea.Model {
  /**
   * @remarks
   * The details about the execution step.
   * 
   * @example
   * {}
   */
  eventDetail?: string;
  /**
   * @remarks
   * The ID of the execution step.
   * 
   * @example
   * 2
   */
  eventId?: number;
  /**
   * @remarks
   * The ID of the scheduling step.
   * 
   * @example
   * 1
   */
  scheduleEventId?: number;
  /**
   * @remarks
   * The name of the execution step.
   * 
   * @example
   * passStep
   */
  stepName?: string;
  /**
   * @remarks
   * The time when the event was updated.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  time?: string;
  /**
   * @remarks
   * The type of the execution step. Valid values:
   * 
   * *   **StepEntered**
   * *   **StepStarted**
   * *   **StepSucceeded**
   * *   **StepFailed**
   * *   **StepExited**
   * *   **BranchEntered**
   * *   **BranchExited**
   * *   **IterationEntered**
   * *   **IterationExited**
   * *   **TaskScheduled**
   * *   **TaskStarted**
   * *   **TaskSubmitted**
   * *   **TaskSubmitFailed**
   * *   **TaskSucceeded**
   * *   **TaskFailed**
   * *   **TaskTimedOut**
   * *   **ExecutionStarted**
   * *   **ExecutionStopped**
   * *   **ExecutionSucceeded**
   * *   **ExecutionFailed**
   * *   **ExecutionTimedOut**
   * 
   * @example
   * TaskSucceeded
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'EventDetail',
      eventId: 'EventId',
      scheduleEventId: 'ScheduleEventId',
      stepName: 'StepName',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: 'string',
      eventId: 'number',
      scheduleEventId: 'number',
      stepName: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $tea.Model {
  /**
   * @remarks
   * The definition of the flow.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n  - type: pass\\n    name: mypass
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
   * The output of the execution, which is in the JSON format
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
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
   * The status of the execution.
   * 
   * @example
   * Succeeded
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
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlows extends $tea.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The definition of the flow. The definition must comply with the Flow Definition Language (FDL) syntax.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n - type: pass\\n name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test flow
   */
  description?: string;
  /**
   * @remarks
   * The execution mode or the enumeration type. Valid values: Express and Standard. A value of Standard indicates an empty string.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The unique ID of the flow.
   * 
   * @example
   * e589e092-e2c0-4dee-b306-3574ddf5****
   */
  id?: string;
  /**
   * @remarks
   * The time when the flow was last modified.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the specified Resource Access Management (RAM) role that Serverless Workflow assumes to invoke resources when the flow is executed.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      executionMode: 'ExecutionMode',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      executionMode: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodySchedules extends $tea.Model {
  /**
   * @remarks
   * The time when the time-based schedule was created.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the time-based schedule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the time-based schedule was last modified.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
  /**
   * @remarks
   * The ID of the time-based schedule.
   * 
   * @example
   * testScheduleId
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the time-based schedule.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      lastModifiedTime: 'LastModifiedTime',
      payload: 'Payload',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      lastModifiedTime: 'string',
      payload: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "cn-beijing.fnf.aliyuncs.com",
      'cn-hangzhou': "cn-hangzhou.fnf.aliyuncs.com",
      'cn-shanghai': "cn-shanghai.fnf.aliyuncs.com",
      'cn-shenzhen': "cn-shenzhen.fnf.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fnf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The number of flows that each user can create is restricted by resources. For more information, see [Limits](https://help.aliyun.com/document_detail/122093.html). If you want to create more flows, submit a ticket.
   * *   At the user level, flows are distinguished by name. The name of a flow within one account must be unique.
   * 
   * @param request - CreateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionMode)) {
      body["ExecutionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.externalStorageLocation)) {
      body["ExternalStorageLocation"] = request.externalStorageLocation;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowResponse>(await this.callApi(params, req, runtime), new CreateFlowResponse({}));
  }

  /**
   * Creates a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The number of flows that each user can create is restricted by resources. For more information, see [Limits](https://help.aliyun.com/document_detail/122093.html). If you want to create more flows, submit a ticket.
   * *   At the user level, flows are distinguished by name. The name of a flow within one account must be unique.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduleResponse
   */
  async createScheduleWithOptions(request: CreateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.signatureVersion)) {
      query["SignatureVersion"] = request.signatureVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!Util.isUnset(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduleResponse>(await this.callApi(params, req, runtime), new CreateScheduleResponse({}));
  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @returns CreateScheduleResponse
   */
  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleWithOptions(request, runtime);
  }

  /**
   * Deletes an existing flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * A delete operation is asynchronous. If this operation is successful, the system returns a successful response. If an existing flow is pending to be deleted, a new flow of the same name will not be affected by the existing one. After you delete a flow, you cannot query its historical executions. All executions in progress will stop after their most recent steps are complete.
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
  }

  /**
   * Deletes an existing flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * A delete operation is asynchronous. If this operation is successful, the system returns a successful response. If an existing flow is pending to be deleted, a new flow of the same name will not be affected by the existing one. After you delete a flow, you cannot query its historical executions. All executions in progress will stop after their most recent steps are complete.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduleResponse
   */
  async deleteScheduleWithOptions(request: DeleteScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduleResponse>(await this.callApi(params, req, runtime), new DeleteScheduleResponse({}));
  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @returns DeleteScheduleResponse
   */
  async deleteSchedule(request: DeleteScheduleRequest): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleWithOptions(request, runtime);
  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutionResponse
   */
  async describeExecutionWithOptions(request: DescribeExecutionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExecutionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExecutionResponse>(await this.callApi(params, req, runtime), new DescribeExecutionResponse({}));
  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @returns DescribeExecutionResponse
   */
  async describeExecution(request: DescribeExecutionRequest): Promise<DescribeExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowResponse
   */
  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowResponse>(await this.callApi(params, req, runtime), new DescribeFlowResponse({}));
  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @returns DescribeFlowResponse
   */
  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduleResponse
   */
  async describeScheduleWithOptions(request: DescribeScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScheduleResponse>(await this.callApi(params, req, runtime), new DescribeScheduleResponse({}));
  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @returns DescribeScheduleResponse
   */
  async describeSchedule(request: DescribeScheduleRequest): Promise<DescribeScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleWithOptions(request, runtime);
  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistoryWithOptions(request: GetExecutionHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetExecutionHistoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExecutionHistory",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExecutionHistoryResponse>(await this.callApi(params, req, runtime), new GetExecutionHistoryResponse({}));
  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistory(request: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionHistoryWithOptions(request, runtime);
  }

  /**
   * Queries all historical executions of a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you delete a flow, you cannot query its historical executions, even if you create a flow of the same name.
   * 
   * @param request - ListExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionsResponse
   */
  async listExecutionsWithOptions(request: ListExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionsResponse>(await this.callApi(params, req, runtime), new ListExecutionsResponse({}));
  }

  /**
   * Queries all historical executions of a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you delete a flow, you cannot query its historical executions, even if you create a flow of the same name.
   * 
   * @param request - ListExecutionsRequest
   * @returns ListExecutionsResponse
   */
  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowsResponse
   */
  async listFlowsWithOptions(request: ListFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlows",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowsResponse>(await this.callApi(params, req, runtime), new ListFlowsResponse({}));
  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @returns ListFlowsResponse
   */
  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchedulesResponse
   */
  async listSchedulesWithOptions(request: ListSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<ListSchedulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSchedules",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSchedulesResponse>(await this.callApi(params, req, runtime), new ListSchedulesResponse({}));
  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @returns ListSchedulesResponse
   */
  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchedulesWithOptions(request, runtime);
  }

  /**
   * Reports a failed task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskFailed is used to call back `pattern: waitForCallback` indicates that the current task fails to be executed.
   * In the new service (CloudFlow), the task step that ReportTaskFailed is used to call back `TaskMode: WaitForCustomCallback` indicates that the current task fails to be executed.
   * 
   * @param request - ReportTaskFailedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportTaskFailedResponse
   */
  async reportTaskFailedWithOptions(request: ReportTaskFailedRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskFailedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!Util.isUnset(request.error)) {
      body["Error"] = request.error;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportTaskFailed",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportTaskFailedResponse>(await this.callApi(params, req, runtime), new ReportTaskFailedResponse({}));
  }

  /**
   * Reports a failed task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskFailed is used to call back `pattern: waitForCallback` indicates that the current task fails to be executed.
   * In the new service (CloudFlow), the task step that ReportTaskFailed is used to call back `TaskMode: WaitForCustomCallback` indicates that the current task fails to be executed.
   * 
   * @param request - ReportTaskFailedRequest
   * @returns ReportTaskFailedResponse
   */
  async reportTaskFailed(request: ReportTaskFailedRequest): Promise<ReportTaskFailedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskFailedWithOptions(request, runtime);
  }

  /**
   * Reports a successful task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskSucceeded is used to call back pattern: waitForCallback indicates that the current task is successfully executed.
   * In the new service (CloudFlow), the task step that ReportTaskSucceeded is used to call back TaskMode: WaitForCustomCallback indicates that the current task is successfully executed.
   * 
   * @param request - ReportTaskSucceededRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportTaskSucceededResponse
   */
  async reportTaskSucceededWithOptions(request: ReportTaskSucceededRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskSucceededResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportTaskSucceeded",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportTaskSucceededResponse>(await this.callApi(params, req, runtime), new ReportTaskSucceededResponse({}));
  }

  /**
   * Reports a successful task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskSucceeded is used to call back pattern: waitForCallback indicates that the current task is successfully executed.
   * In the new service (CloudFlow), the task step that ReportTaskSucceeded is used to call back TaskMode: WaitForCustomCallback indicates that the current task is successfully executed.
   * 
   * @param request - ReportTaskSucceededRequest
   * @returns ReportTaskSucceededResponse
   */
  async reportTaskSucceeded(request: ReportTaskSucceededRequest): Promise<ReportTaskSucceededResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskSucceededWithOptions(request, runtime);
  }

  /**
   * Starts the execution of a workflow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The flow is created. A flow only in standard mode is supported.
   * *   If you do not specify an execution, the system automatically generates an execution and starts the execution.
   * *   If an ongoing execution has the same name as that of the execution to be started, the system directly returns the ongoing execution.
   * *   If the ongoing execution with the same name has ended (succeeded or failed), `ExecutionAlreadyExists` is returned.
   * *   If no execution with the same name exists, the system starts a new execution.
   * 
   * @param request - StartExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartExecutionResponse
   */
  async startExecutionWithOptions(request: StartExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartExecutionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackFnFTaskToken)) {
      body["CallbackFnFTaskToken"] = request.callbackFnFTaskToken;
    }

    if (!Util.isUnset(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartExecutionResponse>(await this.callApi(params, req, runtime), new StartExecutionResponse({}));
  }

  /**
   * Starts the execution of a workflow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The flow is created. A flow only in standard mode is supported.
   * *   If you do not specify an execution, the system automatically generates an execution and starts the execution.
   * *   If an ongoing execution has the same name as that of the execution to be started, the system directly returns the ongoing execution.
   * *   If the ongoing execution with the same name has ended (succeeded or failed), `ExecutionAlreadyExists` is returned.
   * *   If no execution with the same name exists, the system starts a new execution.
   * 
   * @param request - StartExecutionRequest
   * @returns StartExecutionResponse
   */
  async startExecution(request: StartExecutionRequest): Promise<StartExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  /**
   * Synchronously starts an execution in a flow.
   * 
   * @remarks
   *   Only flows of the express execution mode are supported.
   * 
   * @param request - StartSyncExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSyncExecutionResponse
   */
  async startSyncExecutionWithOptions(request: StartSyncExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartSyncExecutionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartSyncExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSyncExecutionResponse>(await this.callApi(params, req, runtime), new StartSyncExecutionResponse({}));
  }

  /**
   * Synchronously starts an execution in a flow.
   * 
   * @remarks
   *   Only flows of the express execution mode are supported.
   * 
   * @param request - StartSyncExecutionRequest
   * @returns StartSyncExecutionResponse
   */
  async startSyncExecution(request: StartSyncExecutionRequest): Promise<StartSyncExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSyncExecutionWithOptions(request, runtime);
  }

  /**
   * Stops an execution that is in progress in a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The flow must be in progress.
   * 
   * @param request - StopExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopExecutionResponse
   */
  async stopExecutionWithOptions(request: StopExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StopExecutionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!Util.isUnset(request.error)) {
      body["Error"] = request.error;
    }

    if (!Util.isUnset(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopExecutionResponse>(await this.callApi(params, req, runtime), new StopExecutionResponse({}));
  }

  /**
   * Stops an execution that is in progress in a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The flow must be in progress.
   * 
   * @param request - StopExecutionRequest
   * @returns StopExecutionResponse
   */
  async stopExecution(request: StopExecutionRequest): Promise<StopExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopExecutionWithOptions(request, runtime);
  }

  /**
   * Updates a flow.
   * 
   * @param request - UpdateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowResponse
   */
  async updateFlowWithOptions(request: UpdateFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFlowResponse>(await this.callApi(params, req, runtime), new UpdateFlowResponse({}));
  }

  /**
   * Updates a flow.
   * 
   * @param request - UpdateFlowRequest
   * @returns UpdateFlowResponse
   */
  async updateFlow(request: UpdateFlowRequest): Promise<UpdateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduleResponse
   */
  async updateScheduleWithOptions(request: UpdateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!Util.isUnset(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScheduleResponse>(await this.callApi(params, req, runtime), new UpdateScheduleResponse({}));
  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @returns UpdateScheduleResponse
   */
  async updateSchedule(request: UpdateScheduleRequest): Promise<UpdateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleWithOptions(request, runtime);
  }

}

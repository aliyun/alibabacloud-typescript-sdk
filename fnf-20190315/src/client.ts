// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  localName?: string;
  /**
   * @example
   * cn-qingdao.fnf.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBodyEvents extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlows extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodySchedules extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @example
   * 0aa3f793-6e5f-8472-c7a2-70d2b84c04ac
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $dara.Model {
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
  metadataOnly?: boolean;
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
      metadataOnly: 'MetadataOnly',
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
      metadataOnly: 'boolean',
      nextToken: 'string',
      startedTimeBegin: 'string',
      startedTimeEnd: 'string',
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

export class ListExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The start key for the next query. This parameter is not returned if this is the last query.
   * 
   * >  This parameter may not be displayed in the response because no next page exists.
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

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.schedules)) {
      $dara.Model.validateArray(this.schedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedRequest extends $dara.Model {
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
   * The error code for the failed task. The error code must be 1 to 128 characters in length.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionRequest extends $dara.Model {
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
   * The error code for stopping the execution. The error code must be 1 to 128 characters in length.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * 执行的角色权限配置。若流程定义中的RoleArn在执行期间发生变更，系统将记录并返回执行初始时刻的RoleArn的快照。
   * > 如果您的流程在执行时未配置执行角色，则该字段不会出现。
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

export class StopExecutionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
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
  async createFlowWithOptions(request: CreateFlowRequest, runtime: $dara.RuntimeOptions): Promise<CreateFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionMode)) {
      body["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.externalStorageLocation)) {
      body["ExternalStorageLocation"] = request.externalStorageLocation;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFlowResponse>(await this.callApi(params, req, runtime), new CreateFlowResponse({}));
    } else {
      return $dara.cast<CreateFlowResponse>(await this.execute(params, req, runtime), new CreateFlowResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduleResponse
   */
  async createScheduleWithOptions(request: CreateScheduleRequest, runtime: $dara.RuntimeOptions): Promise<CreateScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.signatureVersion)) {
      query["SignatureVersion"] = request.signatureVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateScheduleResponse>(await this.callApi(params, req, runtime), new CreateScheduleResponse({}));
    } else {
      return $dara.cast<CreateScheduleResponse>(await this.execute(params, req, runtime), new CreateScheduleResponse({}));
    }

  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @returns CreateScheduleResponse
   */
  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
    } else {
      return $dara.cast<DeleteFlowResponse>(await this.execute(params, req, runtime), new DeleteFlowResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduleResponse
   */
  async deleteScheduleWithOptions(request: DeleteScheduleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteScheduleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteScheduleResponse>(await this.callApi(params, req, runtime), new DeleteScheduleResponse({}));
    } else {
      return $dara.cast<DeleteScheduleResponse>(await this.execute(params, req, runtime), new DeleteScheduleResponse({}));
    }

  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @returns DeleteScheduleResponse
   */
  async deleteSchedule(request: DeleteScheduleRequest): Promise<DeleteScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduleWithOptions(request, runtime);
  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutionResponse
   */
  async describeExecutionWithOptions(request: DescribeExecutionRequest, runtime: $dara.RuntimeOptions): Promise<DescribeExecutionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeExecutionResponse>(await this.callApi(params, req, runtime), new DescribeExecutionResponse({}));
    } else {
      return $dara.cast<DescribeExecutionResponse>(await this.execute(params, req, runtime), new DescribeExecutionResponse({}));
    }

  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @returns DescribeExecutionResponse
   */
  async describeExecution(request: DescribeExecutionRequest): Promise<DescribeExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowResponse
   */
  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFlowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFlowResponse>(await this.callApi(params, req, runtime), new DescribeFlowResponse({}));
    } else {
      return $dara.cast<DescribeFlowResponse>(await this.execute(params, req, runtime), new DescribeFlowResponse({}));
    }

  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @returns DescribeFlowResponse
   */
  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  /**
   * 查询地域信息列表
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * 查询地域信息列表
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduleResponse
   */
  async describeScheduleWithOptions(request: DescribeScheduleRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScheduleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScheduleResponse>(await this.callApi(params, req, runtime), new DescribeScheduleResponse({}));
    } else {
      return $dara.cast<DescribeScheduleResponse>(await this.execute(params, req, runtime), new DescribeScheduleResponse({}));
    }

  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @returns DescribeScheduleResponse
   */
  async describeSchedule(request: DescribeScheduleRequest): Promise<DescribeScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScheduleWithOptions(request, runtime);
  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistoryWithOptions(request: GetExecutionHistoryRequest, runtime: $dara.RuntimeOptions): Promise<GetExecutionHistoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetExecutionHistoryResponse>(await this.callApi(params, req, runtime), new GetExecutionHistoryResponse({}));
    } else {
      return $dara.cast<GetExecutionHistoryResponse>(await this.execute(params, req, runtime), new GetExecutionHistoryResponse({}));
    }

  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistory(request: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listExecutionsWithOptions(request: ListExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<ListExecutionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExecutionsResponse>(await this.callApi(params, req, runtime), new ListExecutionsResponse({}));
    } else {
      return $dara.cast<ListExecutionsResponse>(await this.execute(params, req, runtime), new ListExecutionsResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowsResponse
   */
  async listFlowsWithOptions(request: ListFlowsRequest, runtime: $dara.RuntimeOptions): Promise<ListFlowsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFlowsResponse>(await this.callApi(params, req, runtime), new ListFlowsResponse({}));
    } else {
      return $dara.cast<ListFlowsResponse>(await this.execute(params, req, runtime), new ListFlowsResponse({}));
    }

  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @returns ListFlowsResponse
   */
  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchedulesResponse
   */
  async listSchedulesWithOptions(request: ListSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<ListSchedulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSchedulesResponse>(await this.callApi(params, req, runtime), new ListSchedulesResponse({}));
    } else {
      return $dara.cast<ListSchedulesResponse>(await this.execute(params, req, runtime), new ListSchedulesResponse({}));
    }

  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @returns ListSchedulesResponse
   */
  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async reportTaskFailedWithOptions(request: ReportTaskFailedRequest, runtime: $dara.RuntimeOptions): Promise<ReportTaskFailedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!$dara.isNull(request.error)) {
      body["Error"] = request.error;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReportTaskFailedResponse>(await this.callApi(params, req, runtime), new ReportTaskFailedResponse({}));
    } else {
      return $dara.cast<ReportTaskFailedResponse>(await this.execute(params, req, runtime), new ReportTaskFailedResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async reportTaskSucceededWithOptions(request: ReportTaskSucceededRequest, runtime: $dara.RuntimeOptions): Promise<ReportTaskSucceededResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      body["Output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReportTaskSucceededResponse>(await this.callApi(params, req, runtime), new ReportTaskSucceededResponse({}));
    } else {
      return $dara.cast<ReportTaskSucceededResponse>(await this.execute(params, req, runtime), new ReportTaskSucceededResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async startExecutionWithOptions(request: StartExecutionRequest, runtime: $dara.RuntimeOptions): Promise<StartExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackFnFTaskToken)) {
      body["CallbackFnFTaskToken"] = request.callbackFnFTaskToken;
    }

    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartExecutionResponse>(await this.callApi(params, req, runtime), new StartExecutionResponse({}));
    } else {
      return $dara.cast<StartExecutionResponse>(await this.execute(params, req, runtime), new StartExecutionResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async startSyncExecutionWithOptions(request: StartSyncExecutionRequest, runtime: $dara.RuntimeOptions): Promise<StartSyncExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartSyncExecutionResponse>(await this.callApi(params, req, runtime), new StartSyncExecutionResponse({}));
    } else {
      return $dara.cast<StartSyncExecutionResponse>(await this.execute(params, req, runtime), new StartSyncExecutionResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async stopExecutionWithOptions(request: StopExecutionRequest, runtime: $dara.RuntimeOptions): Promise<StopExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!$dara.isNull(request.error)) {
      body["Error"] = request.error;
    }

    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopExecutionResponse>(await this.callApi(params, req, runtime), new StopExecutionResponse({}));
    } else {
      return $dara.cast<StopExecutionResponse>(await this.execute(params, req, runtime), new StopExecutionResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopExecutionWithOptions(request, runtime);
  }

  /**
   * Updates a flow.
   * 
   * @param request - UpdateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowResponse
   */
  async updateFlowWithOptions(request: UpdateFlowRequest, runtime: $dara.RuntimeOptions): Promise<UpdateFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFlowResponse>(await this.callApi(params, req, runtime), new UpdateFlowResponse({}));
    } else {
      return $dara.cast<UpdateFlowResponse>(await this.execute(params, req, runtime), new UpdateFlowResponse({}));
    }

  }

  /**
   * Updates a flow.
   * 
   * @param request - UpdateFlowRequest
   * @returns UpdateFlowResponse
   */
  async updateFlow(request: UpdateFlowRequest): Promise<UpdateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduleResponse
   */
  async updateScheduleWithOptions(request: UpdateScheduleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateScheduleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateScheduleResponse>(await this.callApi(params, req, runtime), new UpdateScheduleResponse({}));
    } else {
      return $dara.cast<UpdateScheduleResponse>(await this.execute(params, req, runtime), new UpdateScheduleResponse({}));
    }

  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @returns UpdateScheduleResponse
   */
  async updateSchedule(request: UpdateScheduleRequest): Promise<UpdateScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScheduleWithOptions(request, runtime);
  }

}

// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFlowRequest extends $tea.Model {
  requestId?: string;
  name?: string;
  definition?: string;
  description?: string;
  type?: string;
  roleArn?: string;
  externalStorageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      name: 'Name',
      definition: 'Definition',
      description: 'Description',
      type: 'Type',
      roleArn: 'RoleArn',
      externalStorageLocation: 'ExternalStorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      name: 'string',
      definition: 'string',
      description: 'string',
      type: 'string',
      roleArn: 'string',
      externalStorageLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  type?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  definition?: string;
  lastModifiedTime?: string;
  id?: string;
  externalStorageLocation?: string;
  roleArn?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      definition: 'Definition',
      lastModifiedTime: 'LastModifiedTime',
      id: 'Id',
      externalStorageLocation: 'ExternalStorageLocation',
      roleArn: 'RoleArn',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      definition: 'string',
      lastModifiedTime: 'string',
      id: 'string',
      externalStorageLocation: 'string',
      roleArn: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  scheduleName?: string;
  description?: string;
  payload?: string;
  cronExpression?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
      description: 'Description',
      payload: 'Payload',
      cronExpression: 'CronExpression',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      scheduleName: 'string',
      description: 'string',
      payload: 'string',
      cronExpression: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBody extends $tea.Model {
  description?: string;
  createdTime?: string;
  requestId?: string;
  lastModifiedTime?: string;
  enable?: boolean;
  payload?: string;
  cronExpression?: string;
  scheduleId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      lastModifiedTime: 'LastModifiedTime',
      enable: 'Enable',
      payload: 'Payload',
      cronExpression: 'CronExpression',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      lastModifiedTime: 'string',
      enable: 'boolean',
      payload: 'string',
      cronExpression: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  requestId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: DeleteScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  executionName?: string;
  waitTimeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      executionName: 'ExecutionName',
      waitTimeSeconds: 'WaitTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      executionName: 'string',
      waitTimeSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponseBody extends $tea.Model {
  status?: string;
  input?: string;
  stoppedTime?: string;
  requestId?: string;
  flowName?: string;
  output?: string;
  externalOutputUri?: string;
  startedTime?: string;
  externalInputUri?: string;
  flowDefinition?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      input: 'Input',
      stoppedTime: 'StoppedTime',
      requestId: 'RequestId',
      flowName: 'FlowName',
      output: 'Output',
      externalOutputUri: 'ExternalOutputUri',
      startedTime: 'StartedTime',
      externalInputUri: 'ExternalInputUri',
      flowDefinition: 'FlowDefinition',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      input: 'string',
      stoppedTime: 'string',
      requestId: 'string',
      flowName: 'string',
      output: 'string',
      externalOutputUri: 'string',
      startedTime: 'string',
      externalInputUri: 'string',
      flowDefinition: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $tea.Model {
  requestId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  type?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  definition?: string;
  lastModifiedTime?: string;
  id?: string;
  externalStorageLocation?: string;
  roleArn?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      definition: 'Definition',
      lastModifiedTime: 'LastModifiedTime',
      id: 'Id',
      externalStorageLocation: 'ExternalStorageLocation',
      roleArn: 'RoleArn',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      definition: 'string',
      lastModifiedTime: 'string',
      id: 'string',
      externalStorageLocation: 'string',
      roleArn: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponseBody extends $tea.Model {
  description?: string;
  createdTime?: string;
  requestId?: string;
  lastModifiedTime?: string;
  enable?: boolean;
  payload?: string;
  cronExpression?: string;
  scheduleId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      lastModifiedTime: 'LastModifiedTime',
      enable: 'Enable',
      payload: 'Payload',
      cronExpression: 'CronExpression',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      lastModifiedTime: 'string',
      enable: 'boolean',
      payload: 'string',
      cronExpression: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  executionName?: string;
  nextToken?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      executionName: 'ExecutionName',
      nextToken: 'NextToken',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      executionName: 'string',
      nextToken: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  events?: GetExecutionHistoryResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      events: { 'type': 'array', 'itemType': GetExecutionHistoryResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExecutionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExecutionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  nextToken?: string;
  limit?: number;
  status?: string;
  startedTimeBegin?: string;
  startedTimeEnd?: string;
  executionNamePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      nextToken: 'NextToken',
      limit: 'Limit',
      status: 'Status',
      startedTimeBegin: 'StartedTimeBegin',
      startedTimeEnd: 'StartedTimeEnd',
      executionNamePrefix: 'ExecutionNamePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      nextToken: 'string',
      limit: 'number',
      status: 'string',
      startedTimeBegin: 'string',
      startedTimeEnd: 'string',
      executionNamePrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $tea.Model {
  executions?: ListExecutionsResponseBodyExecutions[];
  nextToken?: string;
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
  headers: { [key: string]: string };
  body: ListExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsRequest extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  flows?: ListFlowsResponseBodyFlows[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      flows: 'Flows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      flows: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  nextToken?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      nextToken: 'NextToken',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      nextToken: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $tea.Model {
  schedules?: ListSchedulesResponseBodySchedules[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      schedules: 'Schedules',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedules: { 'type': 'array', 'itemType': ListSchedulesResponseBodySchedules },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSchedulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedRequest extends $tea.Model {
  requestId?: string;
  taskToken?: string;
  error?: string;
  cause?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskToken: 'TaskToken',
      error: 'Error',
      cause: 'Cause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskToken: 'string',
      error: 'string',
      cause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponseBody extends $tea.Model {
  requestId?: string;
  eventId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportTaskFailedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportTaskFailedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededRequest extends $tea.Model {
  requestId?: string;
  taskToken?: string;
  output?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskToken: 'TaskToken',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskToken: 'string',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponseBody extends $tea.Model {
  requestId?: string;
  eventId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportTaskSucceededResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportTaskSucceededResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  executionName?: string;
  input?: string;
  callbackFnFTaskToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      executionName: 'ExecutionName',
      input: 'Input',
      callbackFnFTaskToken: 'CallbackFnFTaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      executionName: 'string',
      input: 'string',
      callbackFnFTaskToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $tea.Model {
  status?: string;
  input?: string;
  stoppedTime?: string;
  requestId?: string;
  flowName?: string;
  output?: string;
  externalOutputUri?: string;
  startedTime?: string;
  externalInputUri?: string;
  flowDefinition?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      input: 'Input',
      stoppedTime: 'StoppedTime',
      requestId: 'RequestId',
      flowName: 'FlowName',
      output: 'Output',
      externalOutputUri: 'ExternalOutputUri',
      startedTime: 'StartedTime',
      externalInputUri: 'ExternalInputUri',
      flowDefinition: 'FlowDefinition',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      input: 'string',
      stoppedTime: 'string',
      requestId: 'string',
      flowName: 'string',
      output: 'string',
      externalOutputUri: 'string',
      startedTime: 'string',
      externalInputUri: 'string',
      flowDefinition: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  executionName?: string;
  cause?: string;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      executionName: 'ExecutionName',
      cause: 'Cause',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      executionName: 'string',
      cause: 'string',
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionResponseBody extends $tea.Model {
  status?: string;
  input?: string;
  stoppedTime?: string;
  requestId?: string;
  flowName?: string;
  output?: string;
  externalOutputUri?: string;
  startedTime?: string;
  externalInputUri?: string;
  flowDefinition?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      input: 'Input',
      stoppedTime: 'StoppedTime',
      requestId: 'RequestId',
      flowName: 'FlowName',
      output: 'Output',
      externalOutputUri: 'ExternalOutputUri',
      startedTime: 'StartedTime',
      externalInputUri: 'ExternalInputUri',
      flowDefinition: 'FlowDefinition',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      input: 'string',
      stoppedTime: 'string',
      requestId: 'string',
      flowName: 'string',
      output: 'string',
      externalOutputUri: 'string',
      startedTime: 'string',
      externalInputUri: 'string',
      flowDefinition: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowRequest extends $tea.Model {
  requestId?: string;
  name?: string;
  definition?: string;
  description?: string;
  type?: string;
  roleArn?: string;
  externalStorageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      name: 'Name',
      definition: 'Definition',
      description: 'Description',
      type: 'Type',
      roleArn: 'RoleArn',
      externalStorageLocation: 'ExternalStorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      name: 'string',
      definition: 'string',
      description: 'string',
      type: 'string',
      roleArn: 'string',
      externalStorageLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponseBody extends $tea.Model {
  type?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  definition?: string;
  lastModifiedTime?: string;
  id?: string;
  externalStorageLocation?: string;
  roleArn?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      definition: 'Definition',
      lastModifiedTime: 'LastModifiedTime',
      id: 'Id',
      externalStorageLocation: 'ExternalStorageLocation',
      roleArn: 'RoleArn',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      definition: 'string',
      lastModifiedTime: 'string',
      id: 'string',
      externalStorageLocation: 'string',
      roleArn: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleRequest extends $tea.Model {
  requestId?: string;
  flowName?: string;
  scheduleName?: string;
  description?: string;
  payload?: string;
  cronExpression?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
      description: 'Description',
      payload: 'Payload',
      cronExpression: 'CronExpression',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowName: 'string',
      scheduleName: 'string',
      description: 'string',
      payload: 'string',
      cronExpression: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponseBody extends $tea.Model {
  description?: string;
  createdTime?: string;
  requestId?: string;
  lastModifiedTime?: string;
  enable?: boolean;
  payload?: string;
  cronExpression?: string;
  scheduleId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      lastModifiedTime: 'LastModifiedTime',
      enable: 'Enable',
      payload: 'Payload',
      cronExpression: 'CronExpression',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      lastModifiedTime: 'string',
      enable: 'boolean',
      payload: 'string',
      cronExpression: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBodyEvents extends $tea.Model {
  type?: string;
  eventId?: number;
  time?: string;
  scheduleEventId?: number;
  eventDetail?: string;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      eventId: 'EventId',
      time: 'Time',
      scheduleEventId: 'ScheduleEventId',
      eventDetail: 'EventDetail',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'number',
      time: 'string',
      scheduleEventId: 'number',
      eventDetail: 'string',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $tea.Model {
  status?: string;
  stoppedTime?: string;
  startedTime?: string;
  flowDefinition?: string;
  externalInputUri?: string;
  output?: string;
  flowName?: string;
  externalOutputUri?: string;
  name?: string;
  input?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stoppedTime: 'StoppedTime',
      startedTime: 'StartedTime',
      flowDefinition: 'FlowDefinition',
      externalInputUri: 'ExternalInputUri',
      output: 'Output',
      flowName: 'FlowName',
      externalOutputUri: 'ExternalOutputUri',
      name: 'Name',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stoppedTime: 'string',
      startedTime: 'string',
      flowDefinition: 'string',
      externalInputUri: 'string',
      output: 'string',
      flowName: 'string',
      externalOutputUri: 'string',
      name: 'string',
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlows extends $tea.Model {
  type?: string;
  definition?: string;
  roleArn?: string;
  description?: string;
  externalStorageLocation?: string;
  name?: string;
  createdTime?: string;
  lastModifiedTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      definition: 'Definition',
      roleArn: 'RoleArn',
      description: 'Description',
      externalStorageLocation: 'ExternalStorageLocation',
      name: 'Name',
      createdTime: 'CreatedTime',
      lastModifiedTime: 'LastModifiedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      definition: 'string',
      roleArn: 'string',
      description: 'string',
      externalStorageLocation: 'string',
      name: 'string',
      createdTime: 'string',
      lastModifiedTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodySchedules extends $tea.Model {
  description?: string;
  scheduleId?: string;
  payload?: string;
  scheduleName?: string;
  createdTime?: string;
  lastModifiedTime?: string;
  cronExpression?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      scheduleId: 'ScheduleId',
      payload: 'Payload',
      scheduleName: 'ScheduleName',
      createdTime: 'CreatedTime',
      lastModifiedTime: 'LastModifiedTime',
      cronExpression: 'CronExpression',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scheduleId: 'string',
      payload: 'string',
      scheduleName: 'string',
      createdTime: 'string',
      lastModifiedTime: 'string',
      cronExpression: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
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

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowResponse>(await this.doRPCRequest("CreateFlow", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowResponse({}));
  }

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async createScheduleWithOptions(request: CreateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScheduleResponse>(await this.doRPCRequest("CreateSchedule", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScheduleResponse({}));
  }

  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteFlowResponse>(await this.doRPCRequest("DeleteFlow", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async deleteScheduleWithOptions(request: DeleteScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteScheduleResponse>(await this.doRPCRequest("DeleteSchedule", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteScheduleResponse({}));
  }

  async deleteSchedule(request: DeleteScheduleRequest): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleWithOptions(request, runtime);
  }

  async describeExecutionWithOptions(request: DescribeExecutionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExecutionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeExecutionResponse>(await this.doRPCRequest("DescribeExecution", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeExecutionResponse({}));
  }

  async describeExecution(request: DescribeExecutionRequest): Promise<DescribeExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutionWithOptions(request, runtime);
  }

  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeFlowResponse>(await this.doRPCRequest("DescribeFlow", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeFlowResponse({}));
  }

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  async describeScheduleWithOptions(request: DescribeScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScheduleResponse>(await this.doRPCRequest("DescribeSchedule", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScheduleResponse({}));
  }

  async describeSchedule(request: DescribeScheduleRequest): Promise<DescribeScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleWithOptions(request, runtime);
  }

  async getExecutionHistoryWithOptions(request: GetExecutionHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetExecutionHistoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetExecutionHistoryResponse>(await this.doRPCRequest("GetExecutionHistory", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetExecutionHistoryResponse({}));
  }

  async getExecutionHistory(request: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionHistoryWithOptions(request, runtime);
  }

  async listExecutionsWithOptions(request: ListExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListExecutionsResponse>(await this.doRPCRequest("ListExecutions", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListExecutionsResponse({}));
  }

  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  async listFlowsWithOptions(request: ListFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListFlowsResponse>(await this.doRPCRequest("ListFlows", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListFlowsResponse({}));
  }

  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

  async listSchedulesWithOptions(request: ListSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<ListSchedulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSchedulesResponse>(await this.doRPCRequest("ListSchedules", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListSchedulesResponse({}));
  }

  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchedulesWithOptions(request, runtime);
  }

  async reportTaskFailedWithOptions(request: ReportTaskFailedRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskFailedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReportTaskFailedResponse>(await this.doRPCRequest("ReportTaskFailed", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReportTaskFailedResponse({}));
  }

  async reportTaskFailed(request: ReportTaskFailedRequest): Promise<ReportTaskFailedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskFailedWithOptions(request, runtime);
  }

  async reportTaskSucceededWithOptions(request: ReportTaskSucceededRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskSucceededResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReportTaskSucceededResponse>(await this.doRPCRequest("ReportTaskSucceeded", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReportTaskSucceededResponse({}));
  }

  async reportTaskSucceeded(request: ReportTaskSucceededRequest): Promise<ReportTaskSucceededResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskSucceededWithOptions(request, runtime);
  }

  async startExecutionWithOptions(request: StartExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartExecutionResponse>(await this.doRPCRequest("StartExecution", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartExecutionResponse({}));
  }

  async startExecution(request: StartExecutionRequest): Promise<StartExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  async stopExecutionWithOptions(request: StopExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StopExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopExecutionResponse>(await this.doRPCRequest("StopExecution", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopExecutionResponse({}));
  }

  async stopExecution(request: StopExecutionRequest): Promise<StopExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopExecutionWithOptions(request, runtime);
  }

  async updateFlowWithOptions(request: UpdateFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlowResponse>(await this.doRPCRequest("UpdateFlow", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlowResponse({}));
  }

  async updateFlow(request: UpdateFlowRequest): Promise<UpdateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  async updateScheduleWithOptions(request: UpdateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScheduleResponse>(await this.doRPCRequest("UpdateSchedule", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScheduleResponse({}));
  }

  async updateSchedule(request: UpdateScheduleRequest): Promise<UpdateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleWithOptions(request, runtime);
  }

}

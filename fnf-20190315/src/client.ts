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
  definition?: string;
  description?: string;
  executionMode?: string;
  externalStorageLocation?: string;
  name?: string;
  requestId?: string;
  roleArn?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      executionMode: 'ExecutionMode',
      externalStorageLocation: 'ExternalStorageLocation',
      name: 'Name',
      requestId: 'RequestId',
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
      requestId: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  createdTime?: string;
  definition?: string;
  description?: string;
  executionMode?: string;
  id?: string;
  lastModifiedTime?: string;
  name?: string;
  requestId?: string;
  roleArn?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFlowResponseBody;
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
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  flowName?: string;
  payload?: string;
  requestId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      flowName: 'FlowName',
      payload: 'Payload',
      requestId: 'RequestId',
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
      requestId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBody extends $tea.Model {
  createdTime?: string;
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  lastModifiedTime?: string;
  payload?: string;
  requestId?: string;
  scheduleId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateScheduleResponseBody;
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
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
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
  statusCode: number;
  body: DeleteFlowResponseBody;
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
  flowName?: string;
  requestId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      requestId: 'RequestId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      requestId: 'string',
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
  statusCode: number;
  body: DeleteScheduleResponseBody;
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
  executionName?: string;
  flowName?: string;
  requestId?: string;
  waitTimeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      requestId: 'RequestId',
      waitTimeSeconds: 'WaitTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      requestId: 'string',
      waitTimeSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionResponseBody extends $tea.Model {
  flowDefinition?: string;
  flowName?: string;
  input?: string;
  name?: string;
  output?: string;
  requestId?: string;
  startedTime?: string;
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExecutionResponseBody;
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
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  createdTime?: string;
  definition?: string;
  description?: string;
  executionMode?: string;
  id?: string;
  lastModifiedTime?: string;
  name?: string;
  requestId?: string;
  roleArn?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFlowResponseBody;
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
  flowName?: string;
  requestId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      requestId: 'RequestId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      requestId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleResponseBody extends $tea.Model {
  createdTime?: string;
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  lastModifiedTime?: string;
  payload?: string;
  requestId?: string;
  scheduleId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScheduleResponseBody;
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
  executionName?: string;
  flowName?: string;
  limit?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBody extends $tea.Model {
  events?: GetExecutionHistoryResponseBodyEvents[];
  nextToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExecutionHistoryResponseBody;
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
  executionNamePrefix?: string;
  flowName?: string;
  limit?: number;
  nextToken?: string;
  requestId?: string;
  startedTimeBegin?: string;
  startedTimeEnd?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionNamePrefix: 'ExecutionNamePrefix',
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
      requestId: 'RequestId',
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
      requestId: 'string',
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
  statusCode: number;
  body: ListExecutionsResponseBody;
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
  limit?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $tea.Model {
  flows?: ListFlowsResponseBodyFlows[];
  nextToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFlowsResponseBody;
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
  flowName?: string;
  limit?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSchedulesResponseBody;
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
  cause?: string;
  error?: string;
  requestId?: string;
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      requestId: 'RequestId',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      requestId: 'string',
      taskToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskFailedResponseBody extends $tea.Model {
  eventId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReportTaskFailedResponseBody;
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
  output?: string;
  requestId?: string;
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      taskToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTaskSucceededResponseBody extends $tea.Model {
  eventId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReportTaskSucceededResponseBody;
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
  callbackFnFTaskToken?: string;
  executionName?: string;
  flowName?: string;
  input?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackFnFTaskToken: 'CallbackFnFTaskToken',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackFnFTaskToken: 'string',
      executionName: 'string',
      flowName: 'string',
      input: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $tea.Model {
  flowDefinition?: string;
  flowName?: string;
  input?: string;
  name?: string;
  output?: string;
  requestId?: string;
  startedTime?: string;
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StartExecutionResponseBody;
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

export class StopExecutionRequest extends $tea.Model {
  cause?: string;
  error?: string;
  executionName?: string;
  flowName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      executionName: 'string',
      flowName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExecutionResponseBody extends $tea.Model {
  flowDefinition?: string;
  flowName?: string;
  input?: string;
  name?: string;
  output?: string;
  requestId?: string;
  startedTime?: string;
  status?: string;
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

export class StopExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopExecutionResponseBody;
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
  definition?: string;
  description?: string;
  name?: string;
  requestId?: string;
  roleArn?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
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

export class UpdateFlowResponseBody extends $tea.Model {
  createdTime?: string;
  definition?: string;
  description?: string;
  externalStorageLocation?: string;
  id?: string;
  lastModifiedTime?: string;
  name?: string;
  requestId?: string;
  roleArn?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFlowResponseBody;
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
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  flowName?: string;
  payload?: string;
  requestId?: string;
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      flowName: 'FlowName',
      payload: 'Payload',
      requestId: 'RequestId',
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
      requestId: 'string',
      scheduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleResponseBody extends $tea.Model {
  createdTime?: string;
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  lastModifiedTime?: string;
  payload?: string;
  requestId?: string;
  scheduleId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateScheduleResponseBody;
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
  eventDetail?: string;
  eventId?: number;
  scheduleEventId?: number;
  stepName?: string;
  time?: string;
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
  flowDefinition?: string;
  flowName?: string;
  input?: string;
  name?: string;
  output?: string;
  startedTime?: string;
  status?: string;
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
  createdTime?: string;
  definition?: string;
  description?: string;
  executionMode?: string;
  id?: string;
  lastModifiedTime?: string;
  name?: string;
  roleArn?: string;
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
  createdTime?: string;
  cronExpression?: string;
  description?: string;
  enable?: boolean;
  lastModifiedTime?: string;
  payload?: string;
  scheduleId?: string;
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

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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
      query: OpenApiUtil.query(query),
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

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async createScheduleWithOptions(request: CreateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
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

  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async deleteScheduleWithOptions(request: DeleteScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduleResponse>(await this.callApi(params, req, runtime), new DeleteScheduleResponse({}));
  }

  async deleteSchedule(request: DeleteScheduleRequest): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleWithOptions(request, runtime);
  }

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

  async describeExecution(request: DescribeExecutionRequest): Promise<DescribeExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutionWithOptions(request, runtime);
  }

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

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

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

  async describeSchedule(request: DescribeScheduleRequest): Promise<DescribeScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleWithOptions(request, runtime);
  }

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

  async getExecutionHistory(request: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionHistoryWithOptions(request, runtime);
  }

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

  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

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

  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

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

  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchedulesWithOptions(request, runtime);
  }

  async reportTaskFailedWithOptions(request: ReportTaskFailedRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskFailedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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

  async reportTaskFailed(request: ReportTaskFailedRequest): Promise<ReportTaskFailedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskFailedWithOptions(request, runtime);
  }

  async reportTaskSucceededWithOptions(request: ReportTaskSucceededRequest, runtime: $Util.RuntimeOptions): Promise<ReportTaskSucceededResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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

  async reportTaskSucceeded(request: ReportTaskSucceededRequest): Promise<ReportTaskSucceededResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTaskSucceededWithOptions(request, runtime);
  }

  async startExecutionWithOptions(request: StartExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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
      query: OpenApiUtil.query(query),
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

  async startExecution(request: StartExecutionRequest): Promise<StartExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  async stopExecutionWithOptions(request: StopExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StopExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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
      query: OpenApiUtil.query(query),
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

  async stopExecution(request: StopExecutionRequest): Promise<StopExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopExecutionWithOptions(request, runtime);
  }

  async updateFlowWithOptions(request: UpdateFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

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
      query: OpenApiUtil.query(query),
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

  async updateFlow(request: UpdateFlowRequest): Promise<UpdateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  async updateScheduleWithOptions(request: UpdateScheduleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
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

  async updateSchedule(request: UpdateScheduleRequest): Promise<UpdateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleWithOptions(request, runtime);
  }

}

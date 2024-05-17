// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchDeleteJobsRequest extends $tea.Model {
  groupId?: string;
  jobIdList?: number[];
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteJobsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteJobsResponseBody;
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
      body: BatchDeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyRequest extends $tea.Model {
  groupId?: string;
  jobIdList?: number[];
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteRouteStrategyResponseBody;
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
      body: BatchDeleteRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsRequest extends $tea.Model {
  groupId?: string;
  jobIdList?: number[];
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDisableJobsResponseBody;
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
      body: BatchDisableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsRequest extends $tea.Model {
  groupId?: string;
  jobIdList?: number[];
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchEnableJobsResponseBody;
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
      body: BatchEnableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequest extends $tea.Model {
  appKey?: string;
  appName?: string;
  appType?: number;
  description?: string;
  enableLog?: boolean;
  groupId?: string;
  maxJobs?: number;
  monitorConfigJson?: string;
  monitorContactsJson?: string;
  namespace?: string;
  namespaceName?: string;
  namespaceSource?: string;
  regionId?: string;
  scheduleBusyWorkers?: boolean;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appType: 'AppType',
      description: 'Description',
      enableLog: 'EnableLog',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
      namespaceName: 'NamespaceName',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      scheduleBusyWorkers: 'ScheduleBusyWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appType: 'number',
      description: 'string',
      enableLog: 'boolean',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
      namespaceName: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      scheduleBusyWorkers: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  code?: number;
  data?: CreateAppGroupResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAppGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppGroupResponseBody;
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
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  attemptInterval?: number;
  calendar?: string;
  className?: string;
  consumerSize?: number;
  contactInfo?: CreateJobRequestContactInfo[];
  content?: string;
  dataOffset?: number;
  description?: string;
  dispatcherSize?: number;
  executeMode?: string;
  failEnable?: boolean;
  failTimes?: number;
  groupId?: string;
  jobType?: string;
  maxAttempt?: number;
  maxConcurrency?: number;
  missWorkerEnable?: boolean;
  name?: string;
  namespace?: string;
  namespaceSource?: string;
  pageSize?: number;
  parameters?: string;
  queueSize?: number;
  regionId?: string;
  sendChannel?: string;
  status?: number;
  successNoticeEnable?: boolean;
  taskAttemptInterval?: number;
  taskMaxAttempt?: number;
  timeExpression?: string;
  timeType?: number;
  timeout?: number;
  timeoutEnable?: boolean;
  timeoutKillEnable?: boolean;
  timezone?: string;
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      className: 'ClassName',
      consumerSize: 'ConsumerSize',
      contactInfo: 'ContactInfo',
      content: 'Content',
      dataOffset: 'DataOffset',
      description: 'Description',
      dispatcherSize: 'DispatcherSize',
      executeMode: 'ExecuteMode',
      failEnable: 'FailEnable',
      failTimes: 'FailTimes',
      groupId: 'GroupId',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      missWorkerEnable: 'MissWorkerEnable',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      queueSize: 'QueueSize',
      regionId: 'RegionId',
      sendChannel: 'SendChannel',
      status: 'Status',
      successNoticeEnable: 'SuccessNoticeEnable',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
      timezone: 'Timezone',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      calendar: 'string',
      className: 'string',
      consumerSize: 'number',
      contactInfo: { 'type': 'array', 'itemType': CreateJobRequestContactInfo },
      content: 'string',
      dataOffset: 'number',
      description: 'string',
      dispatcherSize: 'number',
      executeMode: 'string',
      failEnable: 'boolean',
      failTimes: 'number',
      groupId: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      missWorkerEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageSize: 'number',
      parameters: 'string',
      queueSize: 'number',
      regionId: 'string',
      sendChannel: 'string',
      status: 'number',
      successNoticeEnable: 'boolean',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
      timezone: 'string',
      XAttrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  code?: number;
  data?: CreateJobResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
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
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  code?: number;
  data?: CreateNamespaceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateNamespaceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
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
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  name?: string;
  namespace?: string;
  regionId?: string;
  status?: number;
  strategyContent?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      status: 'Status',
      strategyContent: 'StrategyContent',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      status: 'number',
      strategyContent: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponseBody extends $tea.Model {
  code?: number;
  data?: CreateRouteStrategyResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateRouteStrategyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRouteStrategyResponseBody;
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
      body: CreateRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  maxConcurrency?: number;
  name?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  timeExpression?: string;
  timeType?: number;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'number',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBody extends $tea.Model {
  code?: string;
  data?: CreateWorkflowResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateWorkflowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowResponseBody;
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
      body: CreateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupRequest extends $tea.Model {
  deleteJobs?: boolean;
  groupId?: string;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteJobs: 'DeleteJobs',
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteJobs: 'boolean',
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppGroupResponseBody;
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
      body: DeleteAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobResponseBody;
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
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRouteStrategyResponseBody;
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
      body: DeleteRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowResponseBody;
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
      body: DeleteWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersRequest extends $tea.Model {
  designateType?: number;
  groupId?: string;
  jobId?: number;
  labels?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  transferable?: boolean;
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      groupId: 'GroupId',
      jobId: 'JobId',
      labels: 'Labels',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      transferable: 'Transferable',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      groupId: 'string',
      jobId: 'number',
      labels: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      transferable: 'boolean',
      workers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DesignateWorkersResponseBody;
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
      body: DesignateWorkersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableJobResponseBody;
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
      body: DisableJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableWorkflowResponseBody;
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
      body: DisableWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableJobResponseBody;
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
      body: EnableJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWorkflowResponseBody;
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
      body: EnableWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobRequest extends $tea.Model {
  checkJobStatus?: boolean;
  designateType?: number;
  groupId?: string;
  instanceParameters?: string;
  jobId?: number;
  label?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      checkJobStatus: 'CheckJobStatus',
      designateType: 'DesignateType',
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      jobId: 'JobId',
      label: 'Label',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobStatus: 'boolean',
      designateType: 'number',
      groupId: 'string',
      instanceParameters: 'string',
      jobId: 'number',
      label: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      worker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponseBody extends $tea.Model {
  code?: number;
  data?: ExecuteJobResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExecuteJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteJobResponseBody;
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
      body: ExecuteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowRequest extends $tea.Model {
  groupId?: string;
  instanceParameters?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceParameters: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponseBody extends $tea.Model {
  code?: number;
  data?: ExecuteWorkflowResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExecuteWorkflowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteWorkflowResponseBody;
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
      body: ExecuteWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponseBody extends $tea.Model {
  code?: number;
  data?: GetAppGroupResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAppGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppGroupResponseBody;
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
      body: GetAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  jobName?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBody extends $tea.Model {
  code?: number;
  data?: GetJobInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInfoResponseBody;
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
      body: GetJobInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  jobInstanceId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: GetJobInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInstanceResponseBody;
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
      body: GetJobInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListRequest extends $tea.Model {
  endTimestamp?: number;
  groupId?: string;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  startTimestamp?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTimestamp: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBody extends $tea.Model {
  code?: number;
  data?: GetJobInstanceListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobInstanceListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInstanceListResponseBody;
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
      body: GetJobInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogRequest extends $tea.Model {
  endTimestamp?: number;
  groupId?: string;
  jobId?: string;
  jobInstanceId?: string;
  keyword?: string;
  line?: number;
  namespace?: string;
  namespaceSource?: string;
  offset?: number;
  regionId?: string;
  reverse?: boolean;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      keyword: 'Keyword',
      line: 'Line',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      offset: 'Offset',
      regionId: 'RegionId',
      reverse: 'Reverse',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'string',
      jobInstanceId: 'string',
      keyword: 'string',
      line: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      offset: 'number',
      regionId: 'string',
      reverse: 'boolean',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponseBody extends $tea.Model {
  code?: number;
  data?: GetLogResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetLogResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogResponseBody;
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
      body: GetLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewRequest extends $tea.Model {
  endTime?: number;
  groupId?: string;
  metricType?: number;
  namespace?: string;
  namespaceSource?: string;
  operate?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricType: 'MetricType',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      operate: 'Operate',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      metricType: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      operate: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOverviewResponseBody;
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
      body: GetOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBody extends $tea.Model {
  code?: number;
  data?: GetWorkFlowResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkFlowResponseBody;
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
      body: GetWorkFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBody extends $tea.Model {
  code?: number;
  data?: GetWorkerListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkerListResponseBody;
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
      body: GetWorkerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  wfInstanceId?: number;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: GetWorkflowInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkflowInstanceResponseBody;
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
      body: GetWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionRequest extends $tea.Model {
  grantOption?: boolean;
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      grantOption: 'GrantOption',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantOption: 'boolean',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantPermissionResponseBody;
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
      body: GrantPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  appGroupName?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupName: 'AppGroupName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  code?: number;
  data?: ListGroupsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGroupsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
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
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  groupId?: string;
  jobName?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  code?: number;
  data?: ListJobsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesRequest extends $tea.Model {
  namespace?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  code?: number;
  data?: ListNamespacesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListNamespacesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespacesResponseBody;
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
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: ListWorkflowInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowInstanceResponseBody;
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
      body: ListWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobRequest extends $tea.Model {
  dataTime?: string;
  endDate?: number;
  groupId?: string;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endDate: 'EndDate',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endDate: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RerunJobResponseBody;
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
      body: RerunJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  jobInstanceId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryJobInstanceResponseBody;
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
      body: RetryJobInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokePermissionResponseBody;
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
      body: RevokePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessRequest extends $tea.Model {
  groupId?: string;
  jobId?: number;
  jobInstanceId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetJobInstanceSuccessResponseBody;
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
      body: SetJobInstanceSuccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessRequest extends $tea.Model {
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  wfInstanceId?: number;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetWfInstanceSuccessResponseBody;
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
      body: SetWfInstanceSuccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  groupId?: string;
  instanceId?: number;
  jobId?: number;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'number',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
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
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  maxConcurrency?: number;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'number',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppGroupResponseBody;
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
      body: UpdateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
  attemptInterval?: number;
  calendar?: string;
  className?: string;
  consumerSize?: number;
  contactInfo?: UpdateJobRequestContactInfo[];
  content?: string;
  dataOffset?: number;
  description?: string;
  dispatcherSize?: number;
  executeMode?: string;
  failEnable?: boolean;
  failTimes?: number;
  groupId?: string;
  jobId?: number;
  maxAttempt?: number;
  maxConcurrency?: number;
  missWorkerEnable?: boolean;
  name?: string;
  namespace?: string;
  namespaceSource?: string;
  pageSize?: number;
  parameters?: string;
  queueSize?: number;
  regionId?: string;
  sendChannel?: string;
  successNoticeEnable?: boolean;
  taskAttemptInterval?: number;
  taskDispatchMode?: string;
  taskMaxAttempt?: number;
  template?: string;
  timeExpression?: string;
  timeType?: number;
  timeout?: number;
  timeoutEnable?: boolean;
  timeoutKillEnable?: boolean;
  timezone?: string;
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      className: 'ClassName',
      consumerSize: 'ConsumerSize',
      contactInfo: 'ContactInfo',
      content: 'Content',
      dataOffset: 'DataOffset',
      description: 'Description',
      dispatcherSize: 'DispatcherSize',
      executeMode: 'ExecuteMode',
      failEnable: 'FailEnable',
      failTimes: 'FailTimes',
      groupId: 'GroupId',
      jobId: 'JobId',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      missWorkerEnable: 'MissWorkerEnable',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      queueSize: 'QueueSize',
      regionId: 'RegionId',
      sendChannel: 'SendChannel',
      successNoticeEnable: 'SuccessNoticeEnable',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskDispatchMode: 'TaskDispatchMode',
      taskMaxAttempt: 'TaskMaxAttempt',
      template: 'Template',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
      timezone: 'Timezone',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      calendar: 'string',
      className: 'string',
      consumerSize: 'number',
      contactInfo: { 'type': 'array', 'itemType': UpdateJobRequestContactInfo },
      content: 'string',
      dataOffset: 'number',
      description: 'string',
      dispatcherSize: 'number',
      executeMode: 'string',
      failEnable: 'boolean',
      failTimes: 'number',
      groupId: 'string',
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      missWorkerEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageSize: 'number',
      parameters: 'string',
      queueSize: 'number',
      regionId: 'string',
      sendChannel: 'string',
      successNoticeEnable: 'boolean',
      taskAttemptInterval: 'number',
      taskDispatchMode: 'string',
      taskMaxAttempt: 'number',
      template: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
      timezone: 'string',
      XAttrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateJobResponseBody;
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
      body: UpdateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  name?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  timeExpression?: string;
  timeType?: number;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowResponseBody;
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
      body: UpdateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagRequest extends $tea.Model {
  dagJson?: string;
  groupId?: string;
  namespace?: string;
  namespaceSource?: string;
  regionId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      dagJson: 'DagJson',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagJson: 'string',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowDagResponseBody;
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
      body: UpdateWorkflowDagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyData extends $tea.Model {
  appGroupId?: number;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestContactInfo extends $tea.Model {
  ding?: string;
  userMail?: string;
  userName?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyData extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBodyData extends $tea.Model {
  namespaceUid?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceUid: 'NamespaceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponseBodyData extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBodyData extends $tea.Model {
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponseBodyData extends $tea.Model {
  jobInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponseBodyData extends $tea.Model {
  wfInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      wfInstanceId: 'WfInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponseBodyData extends $tea.Model {
  appKey?: string;
  appName?: string;
  curJobs?: number;
  description?: string;
  groupId?: string;
  maxJobs?: number;
  monitorConfigJson?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      curJobs: 'CurJobs',
      description: 'Description',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      curJobs: 'number',
      description: 'string',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo extends $tea.Model {
  ding?: string;
  userMail?: string;
  userName?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig extends $tea.Model {
  failEnable?: boolean;
  missWorkerEnable?: boolean;
  sendChannel?: string;
  timeout?: number;
  timeoutEnable?: boolean;
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo extends $tea.Model {
  contactInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo[];
  monitorConfig?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo },
      monitorConfig: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs extends $tea.Model {
  consumerSize?: number;
  dispatcherSize?: number;
  pageSize?: number;
  queueSize?: number;
  taskAttemptInterval?: number;
  taskMaxAttempt?: number;
  static names(): { [key: string]: string } {
    return {
      consumerSize: 'ConsumerSize',
      dispatcherSize: 'DispatcherSize',
      pageSize: 'PageSize',
      queueSize: 'QueueSize',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerSize: 'number',
      dispatcherSize: 'number',
      pageSize: 'number',
      queueSize: 'number',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoTimeConfig extends $tea.Model {
  calendar?: string;
  dataOffset?: number;
  timeExpression?: string;
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      calendar: 'Calendar',
      dataOffset: 'DataOffset',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendar: 'string',
      dataOffset: 'number',
      timeExpression: 'string',
      timeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfo extends $tea.Model {
  attemptInterval?: number;
  className?: string;
  content?: string;
  description?: string;
  executeMode?: string;
  jarUrl?: string;
  jobId?: number;
  jobMonitorInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo;
  jobType?: string;
  mapTaskXAttrs?: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs;
  maxAttempt?: number;
  maxConcurrency?: string;
  name?: string;
  parameters?: string;
  status?: number;
  timeConfig?: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig;
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      className: 'ClassName',
      content: 'Content',
      description: 'Description',
      executeMode: 'ExecuteMode',
      jarUrl: 'JarUrl',
      jobId: 'JobId',
      jobMonitorInfo: 'JobMonitorInfo',
      jobType: 'JobType',
      mapTaskXAttrs: 'MapTaskXAttrs',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      parameters: 'Parameters',
      status: 'Status',
      timeConfig: 'TimeConfig',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      className: 'string',
      content: 'string',
      description: 'string',
      executeMode: 'string',
      jarUrl: 'string',
      jobId: 'number',
      jobMonitorInfo: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      status: 'number',
      timeConfig: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig,
      XAttrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyData extends $tea.Model {
  jobConfigInfo?: GetJobInfoResponseBodyDataJobConfigInfo;
  static names(): { [key: string]: string } {
    return {
      jobConfigInfo: 'JobConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobConfigInfo: GetJobInfoResponseBodyDataJobConfigInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBodyDataJobInstanceDetail extends $tea.Model {
  dataTime?: string;
  endTime?: string;
  executor?: string;
  instanceId?: number;
  jobId?: number;
  jobName?: string;
  parameters?: string;
  progress?: string;
  result?: string;
  scheduleTime?: string;
  startTime?: string;
  status?: number;
  timeType?: number;
  traceId?: string;
  triggerType?: number;
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobName: 'JobName',
      parameters: 'Parameters',
      progress: 'Progress',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      traceId: 'TraceId',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      instanceId: 'number',
      jobId: 'number',
      jobName: 'string',
      parameters: 'string',
      progress: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      traceId: 'string',
      triggerType: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBodyData extends $tea.Model {
  jobInstanceDetail?: GetJobInstanceResponseBodyDataJobInstanceDetail;
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetail: 'JobInstanceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetail: GetJobInstanceResponseBodyDataJobInstanceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBodyDataJobInstanceDetails extends $tea.Model {
  dataTime?: string;
  endTime?: string;
  executor?: string;
  instanceId?: number;
  jobId?: number;
  progress?: string;
  result?: string;
  scheduleTime?: string;
  startTime?: string;
  status?: number;
  timeType?: number;
  triggerType?: number;
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      progress: 'Progress',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      instanceId: 'number',
      jobId: 'number',
      progress: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      triggerType: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBodyData extends $tea.Model {
  jobInstanceDetails?: GetJobInstanceListResponseBodyDataJobInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetails: 'JobInstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetails: { 'type': 'array', 'itemType': GetJobInstanceListResponseBodyDataJobInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponseBodyData extends $tea.Model {
  logs?: string[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowInfo extends $tea.Model {
  description?: string;
  name?: string;
  status?: string;
  timeExpression?: string;
  timeType?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
      timeExpression: 'string',
      timeType: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges extends $tea.Model {
  source?: number;
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes extends $tea.Model {
  id?: number;
  label?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfo extends $tea.Model {
  edges?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges[];
  nodes?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyData extends $tea.Model {
  workFlowInfo?: GetWorkFlowResponseBodyDataWorkFlowInfo;
  workFlowNodeInfo?: GetWorkFlowResponseBodyDataWorkFlowNodeInfo;
  static names(): { [key: string]: string } {
    return {
      workFlowInfo: 'WorkFlowInfo',
      workFlowNodeInfo: 'WorkFlowNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowInfo: GetWorkFlowResponseBodyDataWorkFlowInfo,
      workFlowNodeInfo: GetWorkFlowResponseBodyDataWorkFlowNodeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBodyDataWorkerInfos extends $tea.Model {
  ip?: string;
  label?: string;
  port?: number;
  starter?: string;
  version?: string;
  workerAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      label: 'Label',
      port: 'Port',
      starter: 'Starter',
      version: 'Version',
      workerAddress: 'WorkerAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      label: 'string',
      port: 'number',
      starter: 'string',
      version: 'string',
      workerAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBodyData extends $tea.Model {
  workerInfos?: GetWorkerListResponseBodyDataWorkerInfos[];
  static names(): { [key: string]: string } {
    return {
      workerInfos: 'WorkerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workerInfos: { 'type': 'array', 'itemType': GetWorkerListResponseBodyDataWorkerInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges extends $tea.Model {
  source?: number;
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes extends $tea.Model {
  attempt?: number;
  dataTime?: string;
  endTime?: string;
  jobId?: number;
  jobInstanceId?: number;
  jobName?: string;
  result?: string;
  scheduleTime?: string;
  startTime?: string;
  status?: number;
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      attempt: 'Attempt',
      dataTime: 'DataTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      jobName: 'JobName',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      dataTime: 'string',
      endTime: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      jobName: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDag extends $tea.Model {
  edges?: GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges[];
  nodes?: GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceInfo extends $tea.Model {
  dataTime?: string;
  endTime?: string;
  scheduleTime?: string;
  startTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyData extends $tea.Model {
  wfInstanceDag?: GetWorkflowInstanceResponseBodyDataWfInstanceDag;
  wfInstanceInfo?: GetWorkflowInstanceResponseBodyDataWfInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      wfInstanceDag: 'WfInstanceDag',
      wfInstanceInfo: 'WfInstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceDag: GetWorkflowInstanceResponseBodyDataWfInstanceDag,
      wfInstanceInfo: GetWorkflowInstanceResponseBodyDataWfInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyDataAppGroups extends $tea.Model {
  appGroupId?: number;
  appKey?: string;
  appName?: string;
  description?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
      appName: 'AppName',
      description: 'Description',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
      appName: 'string',
      description: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyData extends $tea.Model {
  appGroups?: ListGroupsResponseBodyDataAppGroups[];
  static names(): { [key: string]: string } {
    return {
      appGroups: 'AppGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroups: { 'type': 'array', 'itemType': ListGroupsResponseBodyDataAppGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo extends $tea.Model {
  ding?: string;
  userMail?: string;
  userName?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig extends $tea.Model {
  failEnable?: boolean;
  missWorkerEnable?: boolean;
  sendChannel?: string;
  timeout?: number;
  timeoutEnable?: boolean;
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfo extends $tea.Model {
  contactInfo?: ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo[];
  monitorConfig?: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo },
      monitorConfig: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsMapTaskXAttrs extends $tea.Model {
  consumerSize?: number;
  dispatcherSize?: number;
  pageSize?: number;
  queueSize?: number;
  taskAttemptInterval?: number;
  taskMaxAttempt?: number;
  static names(): { [key: string]: string } {
    return {
      consumerSize: 'ConsumerSize',
      dispatcherSize: 'DispatcherSize',
      pageSize: 'PageSize',
      queueSize: 'QueueSize',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerSize: 'number',
      dispatcherSize: 'number',
      pageSize: 'number',
      queueSize: 'number',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsTimeConfig extends $tea.Model {
  calendar?: string;
  dataOffset?: number;
  timeExpression?: string;
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      calendar: 'Calendar',
      dataOffset: 'DataOffset',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendar: 'string',
      dataOffset: 'number',
      timeExpression: 'string',
      timeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobs extends $tea.Model {
  attemptInterval?: number;
  className?: string;
  content?: string;
  description?: string;
  executeMode?: string;
  jarUrl?: string;
  jobId?: number;
  jobMonitorInfo?: ListJobsResponseBodyDataJobsJobMonitorInfo;
  jobType?: string;
  mapTaskXAttrs?: ListJobsResponseBodyDataJobsMapTaskXAttrs;
  maxAttempt?: number;
  maxConcurrency?: string;
  name?: string;
  parameters?: string;
  status?: number;
  timeConfig?: ListJobsResponseBodyDataJobsTimeConfig;
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      className: 'ClassName',
      content: 'Content',
      description: 'Description',
      executeMode: 'ExecuteMode',
      jarUrl: 'JarUrl',
      jobId: 'JobId',
      jobMonitorInfo: 'JobMonitorInfo',
      jobType: 'JobType',
      mapTaskXAttrs: 'MapTaskXAttrs',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      parameters: 'Parameters',
      status: 'Status',
      timeConfig: 'TimeConfig',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      className: 'string',
      content: 'string',
      description: 'string',
      executeMode: 'string',
      jarUrl: 'string',
      jobId: 'number',
      jobMonitorInfo: ListJobsResponseBodyDataJobsJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: ListJobsResponseBodyDataJobsMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      status: 'number',
      timeConfig: ListJobsResponseBodyDataJobsTimeConfig,
      XAttrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $tea.Model {
  jobs?: ListJobsResponseBodyDataJobs[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyDataNamespaces extends $tea.Model {
  description?: string;
  name?: string;
  UId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      UId: 'UId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      UId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyData extends $tea.Model {
  namespaces?: ListNamespacesResponseBodyDataNamespaces[];
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataNamespaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBodyDataWfInstanceInfos extends $tea.Model {
  dataTime?: string;
  endTime?: string;
  scheduleTime?: string;
  startTime?: string;
  status?: number;
  wfInstanceId?: number;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBodyData extends $tea.Model {
  wfInstanceInfos?: ListWorkflowInstanceResponseBodyDataWfInstanceInfos[];
  static names(): { [key: string]: string } {
    return {
      wfInstanceInfos: 'WfInstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceInfos: { 'type': 'array', 'itemType': ListWorkflowInstanceResponseBodyDataWfInstanceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequestContactInfo extends $tea.Model {
  ding?: string;
  userMail?: string;
  userName?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
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
      'cn-beijing': "schedulerx.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "schedulerx.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "schedulerx.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "schedulerx.cn-shenzhen.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("schedulerx2", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Deletes multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchDeleteJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteJobsResponse
   */
  async batchDeleteJobsWithOptions(request: BatchDeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteJobsResponse>(await this.callApi(params, req, runtime), new BatchDeleteJobsResponse({}));
  }

  /**
   * @summary Deletes multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchDeleteJobsRequest
   * @return BatchDeleteJobsResponse
   */
  async batchDeleteJobs(request: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteJobsWithOptions(request, runtime);
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request BatchDeleteRouteStrategyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategyWithOptions(request: BatchDeleteRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new BatchDeleteRouteStrategyResponse({}));
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request BatchDeleteRouteStrategyRequest
   * @return BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategy(request: BatchDeleteRouteStrategyRequest): Promise<BatchDeleteRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * @summary Disables multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchDisableJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDisableJobsResponse
   */
  async batchDisableJobsWithOptions(request: BatchDisableJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDisableJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDisableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDisableJobsResponse>(await this.callApi(params, req, runtime), new BatchDisableJobsResponse({}));
  }

  /**
   * @summary Disables multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchDisableJobsRequest
   * @return BatchDisableJobsResponse
   */
  async batchDisableJobs(request: BatchDisableJobsRequest): Promise<BatchDisableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDisableJobsWithOptions(request, runtime);
  }

  /**
   * @summary Enables multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchEnableJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchEnableJobsResponse
   */
  async batchEnableJobsWithOptions(request: BatchEnableJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchEnableJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchEnableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchEnableJobsResponse>(await this.callApi(params, req, runtime), new BatchEnableJobsResponse({}));
  }

  /**
   * @summary Enables multiple jobs at a time.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   *
   * @param request BatchEnableJobsRequest
   * @return BatchEnableJobsResponse
   */
  async batchEnableJobs(request: BatchEnableJobsRequest): Promise<BatchEnableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchEnableJobsWithOptions(request, runtime);
  }

  /**
   * @summary Creates an application group. The AppKey is returned.
   *
   * @param request CreateAppGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppGroupResponse
   */
  async createAppGroupWithOptions(request: CreateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupResponse>(await this.callApi(params, req, runtime), new CreateAppGroupResponse({}));
  }

  /**
   * @summary Creates an application group. The AppKey is returned.
   *
   * @param request CreateAppGroupRequest
   * @return CreateAppGroupResponse
   */
  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates a job and obtains the job ID.
   *
   * @param request CreateJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateJobResponse
   */
  async createJobWithOptions(request: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!Util.isUnset(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!Util.isUnset(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!Util.isUnset(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!Util.isUnset(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!Util.isUnset(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!Util.isUnset(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!Util.isUnset(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!Util.isUnset(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * @summary Creates a job and obtains the job ID.
   *
   * @param request CreateJobRequest
   * @return CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * @summary Creates a namespace.
   *
   * @param request CreateNamespaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  /**
   * @summary Creates a namespace.
   *
   * @param request CreateNamespaceRequest
   * @return CreateNamespaceResponse
   */
  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * @summary Creates a routing policy.
   *
   * @param request CreateRouteStrategyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRouteStrategyResponse
   */
  async createRouteStrategyWithOptions(request: CreateRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.strategyContent)) {
      query["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRouteStrategyResponse>(await this.callApi(params, req, runtime), new CreateRouteStrategyResponse({}));
  }

  /**
   * @summary Creates a routing policy.
   *
   * @param request CreateRouteStrategyRequest
   * @return CreateRouteStrategyResponse
   */
  async createRouteStrategy(request: CreateRouteStrategyRequest): Promise<CreateRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteStrategyWithOptions(request, runtime);
  }

  /**
   * @summary Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   *
   * @param request CreateWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateWorkflowResponse
   */
  async createWorkflowWithOptions(request: CreateWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkflowResponse>(await this.callApi(params, req, runtime), new CreateWorkflowResponse({}));
  }

  /**
   * @summary Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   *
   * @param request CreateWorkflowRequest
   * @return CreateWorkflowResponse
   */
  async createWorkflow(request: CreateWorkflowRequest): Promise<CreateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request DeleteAppGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAppGroupResponse
   */
  async deleteAppGroupWithOptions(request: DeleteAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteJobs)) {
      query["DeleteJobs"] = request.deleteJobs;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppGroupResponse>(await this.callApi(params, req, runtime), new DeleteAppGroupResponse({}));
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request DeleteAppGroupRequest
   * @return DeleteAppGroupResponse
   */
  async deleteAppGroup(request: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a specified job.
   *
   * @param request DeleteJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteJobResponse
   */
  async deleteJobWithOptions(request: DeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
  }

  /**
   * @summary Deletes a specified job.
   *
   * @param request DeleteJobRequest
   * @return DeleteJobResponse
   */
  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a routing policy.
   *
   * @param request DeleteRouteStrategyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRouteStrategyResponse
   */
  async deleteRouteStrategyWithOptions(request: DeleteRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new DeleteRouteStrategyResponse({}));
  }

  /**
   * @summary Deletes a routing policy.
   *
   * @param request DeleteRouteStrategyRequest
   * @return DeleteRouteStrategyResponse
   */
  async deleteRouteStrategy(request: DeleteRouteStrategyRequest): Promise<DeleteRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a workflow.
   *
   * @param request DeleteWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: DeleteWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowResponse({}));
  }

  /**
   * @summary Deletes a workflow.
   *
   * @param request DeleteWorkflowRequest
   * @return DeleteWorkflowResponse
   */
  async deleteWorkflow(request: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Returns available regions.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @summary Returns available regions.
   *
   * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * @summary Designates machines.
   *
   * @param request DesignateWorkersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DesignateWorkersResponse
   */
  async designateWorkersWithOptions(request: DesignateWorkersRequest, runtime: $Util.RuntimeOptions): Promise<DesignateWorkersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DesignateWorkers",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DesignateWorkersResponse>(await this.callApi(params, req, runtime), new DesignateWorkersResponse({}));
  }

  /**
   * @summary Designates machines.
   *
   * @param request DesignateWorkersRequest
   * @return DesignateWorkersResponse
   */
  async designateWorkers(request: DesignateWorkersRequest): Promise<DesignateWorkersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.designateWorkersWithOptions(request, runtime);
  }

  /**
   * @summary Disables a job.
   *
   * @param request DisableJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableJobResponse
   */
  async disableJobWithOptions(request: DisableJobRequest, runtime: $Util.RuntimeOptions): Promise<DisableJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableJobResponse>(await this.callApi(params, req, runtime), new DisableJobResponse({}));
  }

  /**
   * @summary Disables a job.
   *
   * @param request DisableJobRequest
   * @return DisableJobResponse
   */
  async disableJob(request: DisableJobRequest): Promise<DisableJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableJobWithOptions(request, runtime);
  }

  /**
   * @summary Disables a specified workflow.
   *
   * @param request DisableWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableWorkflowResponse
   */
  async disableWorkflowWithOptions(request: DisableWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DisableWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableWorkflowResponse>(await this.callApi(params, req, runtime), new DisableWorkflowResponse({}));
  }

  /**
   * @summary Disables a specified workflow.
   *
   * @param request DisableWorkflowRequest
   * @return DisableWorkflowResponse
   */
  async disableWorkflow(request: DisableWorkflowRequest): Promise<DisableWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Enables a job.
   *
   * @param request EnableJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableJobResponse
   */
  async enableJobWithOptions(request: EnableJobRequest, runtime: $Util.RuntimeOptions): Promise<EnableJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableJobResponse>(await this.callApi(params, req, runtime), new EnableJobResponse({}));
  }

  /**
   * @summary Enables a job.
   *
   * @param request EnableJobRequest
   * @return EnableJobResponse
   */
  async enableJob(request: EnableJobRequest): Promise<EnableJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableJobWithOptions(request, runtime);
  }

  /**
   * @summary Enables a specified workflow.
   *
   * @param request EnableWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableWorkflowResponse
   */
  async enableWorkflowWithOptions(request: EnableWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<EnableWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableWorkflowResponse>(await this.callApi(params, req, runtime), new EnableWorkflowResponse({}));
  }

  /**
   * @summary Enables a specified workflow.
   *
   * @param request EnableWorkflowRequest
   * @return EnableWorkflowResponse
   */
  async enableWorkflow(request: EnableWorkflowRequest): Promise<EnableWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Triggers a job to immediately run once.
   *
   * @description > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   *
   * @param request ExecuteJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecuteJobResponse
   */
  async executeJobWithOptions(request: ExecuteJobRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteJobResponse>(await this.callApi(params, req, runtime), new ExecuteJobResponse({}));
  }

  /**
   * @summary Triggers a job to immediately run once.
   *
   * @description > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   *
   * @param request ExecuteJobRequest
   * @return ExecuteJobResponse
   */
  async executeJob(request: ExecuteJobRequest): Promise<ExecuteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeJobWithOptions(request, runtime);
  }

  /**
   * @summary Immediately triggers a workflow.
   *
   * @param request ExecuteWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecuteWorkflowResponse
   */
  async executeWorkflowWithOptions(request: ExecuteWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteWorkflowResponse>(await this.callApi(params, req, runtime), new ExecuteWorkflowResponse({}));
  }

  /**
   * @summary Immediately triggers a workflow.
   *
   * @param request ExecuteWorkflowRequest
   * @return ExecuteWorkflowResponse
   */
  async executeWorkflow(request: ExecuteWorkflowRequest): Promise<ExecuteWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary The configuration of the alert. The value is a JSON string. For more information, see **the additional information about response parameters below this table**.
   *
   * @param request GetAppGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAppGroupResponse
   */
  async getAppGroupWithOptions(request: GetAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppGroupResponse>(await this.callApi(params, req, runtime), new GetAppGroupResponse({}));
  }

  /**
   * @summary The configuration of the alert. The value is a JSON string. For more information, see **the additional information about response parameters below this table**.
   *
   * @param request GetAppGroupRequest
   * @return GetAppGroupResponse
   */
  async getAppGroup(request: GetAppGroupRequest): Promise<GetAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   *
   * @param request GetJobInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobInfoResponse
   */
  async getJobInfoWithOptions(request: GetJobInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInfo",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInfoResponse>(await this.callApi(params, req, runtime), new GetJobInfoResponse({}));
  }

  /**
   * @summary Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   *
   * @param request GetJobInfoRequest
   * @return GetJobInfoResponse
   */
  async getJobInfo(request: GetJobInfoRequest): Promise<GetJobInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInfoWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a job instance. You can view the status and progress of the job instance.
   *
   * @param request GetJobInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobInstanceResponse
   */
  async getJobInstanceWithOptions(request: GetJobInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInstanceResponse>(await this.callApi(params, req, runtime), new GetJobInstanceResponse({}));
  }

  /**
   * @summary Queries the information about a job instance. You can view the status and progress of the job instance.
   *
   * @param request GetJobInstanceRequest
   * @return GetJobInstanceResponse
   */
  async getJobInstance(request: GetJobInstanceRequest): Promise<GetJobInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the most recent 10 execution instances of a job.
   *
   * @param request GetJobInstanceListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobInstanceListResponse
   */
  async getJobInstanceListWithOptions(request: GetJobInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInstanceListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInstanceList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInstanceListResponse>(await this.callApi(params, req, runtime), new GetJobInstanceListResponse({}));
  }

  /**
   * @summary Queries the most recent 10 execution instances of a job.
   *
   * @param request GetJobInstanceListRequest
   * @return GetJobInstanceListResponse
   */
  async getJobInstanceList(request: GetJobInstanceListRequest): Promise<GetJobInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInstanceListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the operational logs of a job. You can call this operation only in the professional edition.
   *
   * @param request GetLogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLogResponse
   */
  async getLogWithOptions(request: GetLogRequest, runtime: $Util.RuntimeOptions): Promise<GetLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLog",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogResponse>(await this.callApi(params, req, runtime), new GetLogResponse({}));
  }

  /**
   * @summary Queries the operational logs of a job. You can call this operation only in the professional edition.
   *
   * @param request GetLogRequest
   * @return GetLogResponse
   */
  async getLog(request: GetLogRequest): Promise<GetLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * @summary 查询概览数据信息
   *
   * @param request GetOverviewRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOverviewResponse
   */
  async getOverviewWithOptions(request: GetOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOverview",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOverviewResponse>(await this.callApi(params, req, runtime), new GetOverviewResponse({}));
  }

  /**
   * @summary 查询概览数据信息
   *
   * @param request GetOverviewRequest
   * @return GetOverviewResponse
   */
  async getOverview(request: GetOverviewRequest): Promise<GetOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the information about a workflow.
   *
   * @param request GetWorkFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWorkFlowResponse
   */
  async getWorkFlowWithOptions(request: GetWorkFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkFlow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkFlowResponse>(await this.callApi(params, req, runtime), new GetWorkFlowResponse({}));
  }

  /**
   * @summary Obtains the information about a workflow.
   *
   * @param request GetWorkFlowRequest
   * @return GetWorkFlowResponse
   */
  async getWorkFlow(request: GetWorkFlowRequest): Promise<GetWorkFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkFlowWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the list of workers that are connected to an application.
   *
   * @param request GetWorkerListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWorkerListResponse
   */
  async getWorkerListWithOptions(request: GetWorkerListRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkerListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkerList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkerListResponse>(await this.callApi(params, req, runtime), new GetWorkerListResponse({}));
  }

  /**
   * @summary Obtains the list of workers that are connected to an application.
   *
   * @param request GetWorkerListRequest
   * @return GetWorkerListResponse
   */
  async getWorkerList(request: GetWorkerListRequest): Promise<GetWorkerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkerListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   *
   * @param request GetWorkflowInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWorkflowInstanceResponse
   */
  async getWorkflowInstanceWithOptions(request: GetWorkflowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new GetWorkflowInstanceResponse({}));
  }

  /**
   * @summary Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   *
   * @param request GetWorkflowInstanceRequest
   * @return GetWorkflowInstanceResponse
   */
  async getWorkflowInstance(request: GetWorkflowInstanceRequest): Promise<GetWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Grants permissions to an application group.
   *
   * @param request GrantPermissionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantPermissionResponse
   */
  async grantPermissionWithOptions(request: GrantPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.grantOption)) {
      query["GrantOption"] = request.grantOption;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantPermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantPermissionResponse>(await this.callApi(params, req, runtime), new GrantPermissionResponse({}));
  }

  /**
   * @summary Grants permissions to an application group.
   *
   * @param request GrantPermissionRequest
   * @return GrantPermissionResponse
   */
  async grantPermission(request: GrantPermissionRequest): Promise<GrantPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantPermissionWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of applications.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   *
   * @param request ListGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGroupName)) {
      query["AppGroupName"] = request.appGroupName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
   * @summary Queries a list of applications.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   *
   * @param request ListGroupsRequest
   * @return ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries jobs.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
   *
   * @param request ListJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobsResponse
   */
  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * @summary Queries jobs.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
   *
   * @param request ListJobsRequest
   * @return ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * @summary Queries namespaces.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   *
   * @param request ListNamespacesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: ListNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaces",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacesResponse>(await this.callApi(params, req, runtime), new ListNamespacesResponse({}));
  }

  /**
   * @summary Queries namespaces.
   *
   * @description Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   *
   * @param request ListNamespacesRequest
   * @return ListNamespacesResponse
   */
  async listNamespaces(request: ListNamespacesRequest): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the execution history of a workflow. You can call this operation only in the professional edition.
   *
   * @param request ListWorkflowInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWorkflowInstanceResponse
   */
  async listWorkflowInstanceWithOptions(request: ListWorkflowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new ListWorkflowInstanceResponse({}));
  }

  /**
   * @summary Queries the execution history of a workflow. You can call this operation only in the professional edition.
   *
   * @param request ListWorkflowInstanceRequest
   * @return ListWorkflowInstanceResponse
   */
  async listWorkflowInstance(request: ListWorkflowInstanceRequest): Promise<ListWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   *
   * @param request RerunJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RerunJobResponse
   */
  async rerunJobWithOptions(request: RerunJobRequest, runtime: $Util.RuntimeOptions): Promise<RerunJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataTime)) {
      body["DataTime"] = request.dataTime;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RerunJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RerunJobResponse>(await this.callApi(params, req, runtime), new RerunJobResponse({}));
  }

  /**
   * @summary Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   *
   * @param request RerunJobRequest
   * @return RerunJobResponse
   */
  async rerunJob(request: RerunJobRequest): Promise<RerunJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunJobWithOptions(request, runtime);
  }

  /**
   * @summary Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   *
   * @param request RetryJobInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RetryJobInstanceResponse
   */
  async retryJobInstanceWithOptions(request: RetryJobInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RetryJobInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryJobInstanceResponse>(await this.callApi(params, req, runtime), new RetryJobInstanceResponse({}));
  }

  /**
   * @summary Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   *
   * @param request RetryJobInstanceRequest
   * @return RetryJobInstanceResponse
   */
  async retryJobInstance(request: RetryJobInstanceRequest): Promise<RetryJobInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryJobInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   *
   * @param request RevokePermissionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokePermissionResponse
   */
  async revokePermissionWithOptions(request: RevokePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokePermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokePermissionResponse>(await this.callApi(params, req, runtime), new RevokePermissionResponse({}));
  }

  /**
   * @summary Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   *
   * @param request RevokePermissionRequest
   * @return RevokePermissionResponse
   */
  async revokePermission(request: RevokePermissionRequest): Promise<RevokePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokePermissionWithOptions(request, runtime);
  }

  /**
   * @summary Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   *
   * @param request SetJobInstanceSuccessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccessWithOptions(request: SetJobInstanceSuccessRequest, runtime: $Util.RuntimeOptions): Promise<SetJobInstanceSuccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetJobInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetJobInstanceSuccessResponse>(await this.callApi(params, req, runtime), new SetJobInstanceSuccessResponse({}));
  }

  /**
   * @summary Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   *
   * @param request SetJobInstanceSuccessRequest
   * @return SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccess(request: SetJobInstanceSuccessRequest): Promise<SetJobInstanceSuccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setJobInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * @summary Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   *
   * @param request SetWfInstanceSuccessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccessWithOptions(request: SetWfInstanceSuccessRequest, runtime: $Util.RuntimeOptions): Promise<SetWfInstanceSuccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.wfInstanceId)) {
      query["WfInstanceId"] = request.wfInstanceId;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetWfInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetWfInstanceSuccessResponse>(await this.callApi(params, req, runtime), new SetWfInstanceSuccessResponse({}));
  }

  /**
   * @summary Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   *
   * @param request SetWfInstanceSuccessRequest
   * @return SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccess(request: SetWfInstanceSuccessRequest): Promise<SetWfInstanceSuccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWfInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * @summary Stops a job instance in the running state.
   *
   * @param request StopInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopInstanceResponse
   */
  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
   * @summary Stops a job instance in the running state.
   *
   * @param request StopInstanceRequest
   * @return StopInstanceResponse
   */
  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request UpdateAppGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAppGroupResponse
   */
  async updateAppGroupWithOptions(request: UpdateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppGroupResponse>(await this.callApi(params, req, runtime), new UpdateAppGroupResponse({}));
  }

  /**
   * @summary The additional information that is returned.
   *
   * @param request UpdateAppGroupRequest
   * @return UpdateAppGroupResponse
   */
  async updateAppGroup(request: UpdateAppGroupRequest): Promise<UpdateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppGroupWithOptions(request, runtime);
  }

  /**
   * @summary Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   *
   * @param request UpdateJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateJobResponse
   */
  async updateJobWithOptions(request: UpdateJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!Util.isUnset(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!Util.isUnset(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!Util.isUnset(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!Util.isUnset(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!Util.isUnset(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!Util.isUnset(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!Util.isUnset(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!Util.isUnset(request.taskDispatchMode)) {
      body["TaskDispatchMode"] = request.taskDispatchMode;
    }

    if (!Util.isUnset(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!Util.isUnset(request.template)) {
      body["Template"] = request.template;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!Util.isUnset(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateJobResponse>(await this.callApi(params, req, runtime), new UpdateJobResponse({}));
  }

  /**
   * @summary Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   *
   * @param request UpdateJobRequest
   * @return UpdateJobResponse
   */
  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  /**
   * @summary Updates the basic information about a workflow. You can call this operation only in the professional edition.
   *
   * @param request UpdateWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(request: UpdateWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowResponse({}));
  }

  /**
   * @summary Updates the basic information about a workflow. You can call this operation only in the professional edition.
   *
   * @param request UpdateWorkflowRequest
   * @return UpdateWorkflowResponse
   */
  async updateWorkflow(request: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   *
   * @param request UpdateWorkflowDagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWorkflowDagResponse
   */
  async updateWorkflowDagWithOptions(request: UpdateWorkflowDagRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowDagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dagJson)) {
      body["DagJson"] = request.dagJson;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflowDag",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowDagResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowDagResponse({}));
  }

  /**
   * @summary Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   *
   * @param request UpdateWorkflowDagRequest
   * @return UpdateWorkflowDagResponse
   */
  async updateWorkflowDag(request: UpdateWorkflowDagRequest): Promise<UpdateWorkflowDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowDagWithOptions(request, runtime);
  }

}

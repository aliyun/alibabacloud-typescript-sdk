// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAppRequest extends $tea.Model {
  /**
   * @example
   * ltk1ZXHv6LvibZypFkPHzRA
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 10
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      clusterId: 'ClusterId',
      enableLog: 'EnableLog',
      maxConcurrency: 'MaxConcurrency',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      clusterId: 'string',
      enableLog: 'boolean',
      maxConcurrency: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateAppResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: CreateAppResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qianxi-test-0812
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scx.dev.x1
   */
  clusterSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitches?: CreateClusterRequestVSwitches[];
  /**
   * @remarks
   * VPC id
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-aa1a18236n90rqhuhhnhh
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      engineType: 'EngineType',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterSpec: 'string',
      engineType: 'string',
      vSwitches: { 'type': 'array', 'itemType': CreateClusterRequestVSwitches },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qianxi-test-0812
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scx.dev.x1
   */
  clusterSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchesShrink?: string;
  /**
   * @remarks
   * VPC id
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-aa1a18236n90rqhuhhnhh
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      engineType: 'EngineType',
      vSwitchesShrink: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterSpec: 'string',
      engineType: 'string',
      vSwitchesShrink: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: CreateClusterResponseBodyData;
  /**
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * B8733786-C045-59F1-8D79-99A52863F62D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateClusterResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-job
   */
  name?: string;
  noticeConfig?: CreateJobRequestNoticeConfig;
  noticeContacts?: CreateJobRequestNoticeContacts[];
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1701310327000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  timeType?: number;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      startTime: 'StartTime',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: CreateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': CreateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      startTime: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-job
   */
  name?: string;
  noticeConfigShrink?: string;
  noticeContactsShrink?: string;
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1701310327000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  timeType?: number;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfigShrink: 'NoticeConfig',
      noticeContactsShrink: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      startTime: 'StartTime',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfigShrink: 'string',
      noticeContactsShrink: 'string',
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      startTime: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: CreateJobResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteAppRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * CF99C381-C8F6-5A8D-8C24-57F46B706D2D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-a1804a3226d
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * F131C3E0-3FAA-5FA4-A6F3-E974D69EF3C5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
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
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 91143E1D-E235-5BE0-9364-C2EE28FFB5A6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobsResponseBody;
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
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportJobsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  exportJobType?: number;
  /**
   * @remarks
   * -
   */
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      exportJobType: 'ExportJobType',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      exportJobType: 'number',
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportJobsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  exportJobType?: number;
  /**
   * @remarks
   * -
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      exportJobType: 'ExportJobType',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      exportJobType: 'number',
      jobIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Buffer;
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
      body: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetClusterResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: GetClusterResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesigateInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesigateInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetDesigateInfoResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 1DF6732E-15D8-5E1F-95E3-C10077F556B5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: GetDesigateInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesigateInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDesigateInfoResponseBody;
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
      body: GetDesigateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetJobExecutionProgressResponseBodyData;
  /**
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @example
   * 9B57FDD7-ABBE-5030-B348-86EB9943DB59
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: GetJobExecutionProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobExecutionProgressResponseBody;
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
      body: GetJobExecutionProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1721636220
   */
  endTime?: number;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * hello word
   */
  keyword?: string;
  /**
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * LineNum
   * 
   * @example
   * 2
   */
  lineNum?: number;
  /**
   * @example
   * 344008
   */
  logId?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1721636220
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      keyword: 'Keyword',
      level: 'Level',
      lineNum: 'LineNum',
      logId: 'LogId',
      offset: 'Offset',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobExecutionId: 'string',
      keyword: 'string',
      level: 'string',
      lineNum: 'number',
      logId: 'number',
      offset: 'number',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: string[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * C78E2AD2-5985-515B-BAD2-31A248AFC263
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': 'string' },
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

export class ImportCalendarRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"month":1,"days":[3,4,5,6,9,10,11,12,13,16,17,18,19,20,28,29,30,31]},{"month":2,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28]},{"month":3,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31]},{"month":4,"days":[3,4,6,7,10,11,12,13,14,17,18,19,20,21,23,24,25,26,27,28]},{"month":5,"days":[4,5,6,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30,31]},{"month":6,"days":[1,2,5,6,7,8,9,12,13,14,15,16,19,20,21,25,26,27,28,29,30]},{"month":7,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31]},{"month":8,"days":[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31]},{"month":9,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28]},{"month":10,"days":[7,8,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31]},{"month":11,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30]},{"month":12,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28,29]}]
   */
  months?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workday
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      months: 'Months',
      name: 'Name',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      months: 'string',
      name: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCalendarResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: string[];
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 2ECA6FC9-7557-5576-AF5F-FC3E7BCC9C21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCalendarResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportCalendarResponseBody;
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
      body: ImportCalendarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportJobsRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  autoCreateApp?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * {
   *   "kind": "SchedulerXJobs",
   *   "type": "JSON",
   *   "version": "2.0",
   *   "content": [
   *     {
   *       "appName": "xxl-job-executor-perf-test-xx",
   *       "groupId": "xxl-job-executor-perf-test-xx",
   *       "description": "xxl-job-executor-xx",
   *       "jobConfigInfo": [
   *         {
   *           "jobHandler": "testJobVoidHandler",
   *           "dataOffset": 0,
   *           "executeMode": "standalone",
   *           "monitorConfigInfo": {
   *             "alarmType": "CustomContacts",
   *             "failLimitTimes": 1,
   *             "failEnable": true,
   *             "failRate": 100,
   *             "timeoutKillEnable": false,
   *             "missWorkerEnable": false,
   *             "sendChannel": "webhook",
   *             "timeoutEnable": true,
   *             "timeout": 7200,
   *             "daysOfDeadline": 0,
   *             "successNotice": false
   *           },
   *           "attemptInterval": 30,
   *           "cleanMode": "{\\"cleanMode\\":\\"NUM_ONLY\\",\\"totalRemain\\":300}",
   *           "description": "",
   *           "routeStrategy": 1,
   *           "userName": "xx",
   *           "userId": "xx",
   *           "content": "{\\"jobHandler\\":\\"testJobVoidHandler\\"}",
   *           "maxConcurrency": 1,
   *           "maxAttempt": 0,
   *           "name": "perf_auto_test_0",
   *           "xattrs": "",
   *           "jobType": "xxljob",
   *           "contentType": 1,
   *           "parameters": "success-withMsg",
   *           "timeConfig": {
   *             "calendar": "",
   *             "dataOffset": 0,
   *             "timeType": 1,
   *             "paramMap": {},
   *             "timeExpression": "* * * * * ?"
   *           },
   *           "contactInfoList": [],
   *           "status": 0
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  content?: string;
  /**
   * @example
   * true
   */
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoCreateApp: 'AutoCreateApp',
      clusterId: 'ClusterId',
      content: 'Content',
      overwrite: 'Overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateApp: 'boolean',
      clusterId: 'string',
      content: 'string',
      overwrite: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportJobsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 9A48E22F-F30A-5CE5-AC7A-E0FED1B6942E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class ImportJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportJobsResponseBody;
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
      body: ImportJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventRequest extends $tea.Model {
  /**
   * @example
   * webhook
   */
  alarmChannel?: string;
  /**
   * @example
   * true
   */
  alarmStatus?: string;
  /**
   * @example
   * schedulerx3_fail_alarm
   */
  alarmType?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1731636011558
   */
  endTime?: number;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1690419316000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alarmChannel: 'AlarmChannel',
      alarmStatus: 'AlarmStatus',
      alarmType: 'AlarmType',
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobName: 'JobName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmChannel: 'string',
      alarmStatus: 'string',
      alarmType: 'string',
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobName: 'string',
      pageNum: 'string',
      pageSize: 'string',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListAlarmEventResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 27B1345D-5F71-5972-8E4C-AABA6C6232F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListAlarmEventResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlarmEventResponseBody;
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
      body: ListAlarmEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppNamesRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppNamesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * .
   */
  data?: ListAppNamesResponseBodyData[];
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3881C59F-59F1-5B2E-8110-7D689CA9B207
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListAppNamesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppNamesResponseBody;
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
      body: ListAppNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListAppsResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 2C3E52FF-CBE9-5C0E-8252-37ACFF1F5EFF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListAppsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
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
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarNamesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarNamesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: string[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * AA3538A0-FBE6-5E31-AD88-A02C6FF0DACC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCalendarNamesResponseBody;
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
      body: ListCalendarNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  /**
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @example
   * cluster-test
   */
  clusterName?: string;
  /**
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListClustersResponseBodyData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListClustersResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * gray
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobId: 'JobId',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobId: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListExecutorsResponseBodyData[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListExecutorsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutorsResponseBody;
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
      body: ListExecutorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 2024-11-12 20:50:56
   */
  endTime?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2024-11-12 20:50:55
   */
  startTime?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListJobExecutionsResponseBodyData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 6BCE89B3-E882-511D-9A75-D452A56EC4B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListJobExecutionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobExecutionsResponseBody;
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
      body: ListJobExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  description?: string;
  /**
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @example
   * 10
   */
  jobId?: number;
  /**
   * @example
   * job01
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      jobName: 'JobName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobId: 'number',
      jobName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  /**
   * @remarks
   * -
   */
  data?: ListJobsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobsResponseBodyData,
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

export class ListLablesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 15
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLablesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListLablesResponseBodyData[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 9079A828-9138-50F1-801E-F2BC3D222A06
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListLablesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLablesResponseBody;
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
      body: ListLablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionZoneResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListRegionZoneResponseBodyData[];
  /**
   * @example
   * IllegalRequest
   */
  errorCode?: string;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 438737AC-760A-57D9-B646-B7EF79426243
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListRegionZoneResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionZoneResponseBody;
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
      body: ListRegionZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * -
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @example
   * AFD5B166-4A7D-50DF-91BF-EFAFD41F7335
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleEventRequest extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1728872796295
   */
  endTime?: number;
  /**
   * @example
   * INFO
   */
  event?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * hello word
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1581317873000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      event: 'Event',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      event: 'string',
      jobExecutionId: 'string',
      jobName: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleEventResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListScheduleEventResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * B880122A-B0E4-52E8-8F54-87DB7779EB74
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListScheduleEventResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduleEventResponseBody;
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
      body: ListScheduleEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTimesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * Asia/Beijing
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      calendar: 'string',
      clusterId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTimesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: string[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 9A48E22F-F30A-5CE5-AC7A-E0FED1B6942E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTimesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduleTimesResponseBody;
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
      body: ListScheduleTimesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDesignateExecutorsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      appName: 'AppName',
      clusterId: 'ClusterId',
      designateType: 'DesignateType',
      jobId: 'JobId',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      appName: 'string',
      clusterId: 'string',
      designateType: 'number',
      jobId: 'number',
      transferable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDesignateExecutorsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressListShrink: 'AddressList',
      appName: 'AppName',
      clusterId: 'ClusterId',
      designateType: 'DesignateType',
      jobId: 'JobId',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressListShrink: 'string',
      appName: 'string',
      clusterId: 'string',
      designateType: 'number',
      jobId: 'number',
      transferable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDesignateExecutorsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * AFD5B166-4A7D-50DF-91BF-EFAFD41F7335
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateDesignateExecutorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateDesignateExecutorsResponseBody;
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
      body: OperateDesignateExecutorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDisableJobsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDisableJobsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateDisableJobsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 29ED6209-5DE6-5E1D-89B0-B7B1D823A1BF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateDisableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateDisableJobsResponseBody;
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
      body: OperateDisableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateEnableJobsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateEnableJobsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * -
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateEnableJobsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 4CC4132F-B798-5D6E-9F06-D44B33E417E9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateEnableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateEnableJobsResponseBody;
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
      body: OperateEnableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateExecuteJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * name=zhangsan
   */
  instanceParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * http://192.168.1.5:9999/
   */
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      instanceParameters: 'InstanceParameters',
      jobId: 'JobId',
      label: 'Label',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      instanceParameters: 'string',
      jobId: 'number',
      label: 'string',
      worker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateExecuteJobResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: OperateExecuteJobResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 6305893D-517D-5131-A767-644EDA81CEC3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: OperateExecuteJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateExecuteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateExecuteJobResponseBody;
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
      body: OperateExecuteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRerunJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 14:11:10
   */
  dataTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      dataTime: 'DataTime',
      endDate: 'EndDate',
      jobId: 'JobId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      dataTime: 'string',
      endDate: 'number',
      jobId: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRerunJobResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * BCDF4006-C8A1-5F83-9368-588347D3EE84
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateRerunJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateRerunJobResponseBody;
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
      body: OperateRerunJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRetryJobExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRetryJobExecutionResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 438737AC-760A-57D9-B646-B7EF79426243
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateRetryJobExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateRetryJobExecutionResponseBody;
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
      body: OperateRetryJobExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateStopJobExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateStopJobExecutionResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * E82D8B33-204D-58E1-8F56-909F6B48F3D1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class OperateStopJobExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateStopJobExecutionResponseBody;
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
      body: OperateStopJobExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  /**
   * @example
   * f312159702f4469585586ed5a6904163v3
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 10
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      clusterId: 'ClusterId',
      enableLog: 'EnableLog',
      maxConcurrency: 'MaxConcurrency',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      clusterId: 'string',
      enableLog: 'boolean',
      maxConcurrency: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 39AA91C1-7BB7-5934-B15B-FD8E706D76C4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppResponseBody;
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
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-c20f7ec9a78
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx-test-1107
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * EEF9AF15-AEEF-5E59-BF7B-BCBB119DC53F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterResponseBody;
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
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @example
   * test-job
   */
  name?: string;
  noticeConfig?: UpdateJobRequestNoticeConfig;
  noticeContacts?: UpdateJobRequestNoticeContacts[];
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1716902187
   */
  startTime?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * Asia/Beijing
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      startTime: 'StartTime',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: UpdateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': UpdateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      startTime: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @example
   * test-job
   */
  name?: string;
  noticeConfigShrink?: string;
  noticeContactsShrink?: string;
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1716902187
   */
  startTime?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * Asia/Beijing
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfigShrink: 'NoticeConfig',
      noticeContactsShrink: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      startTime: 'StartTime',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfigShrink: 'string',
      noticeContactsShrink: 'string',
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      startTime: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3808cf26-dde2-4286-8503-b0a2cd4065a7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class CreateAppResponseBodyData extends $tea.Model {
  /**
   * @example
   * 4a0fae835cd741f3b12376d8a5a8e549v3
   */
  accessToken?: string;
  /**
   * @example
   * 10
   */
  appGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appGroupId: 'AppGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestVSwitches extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-2ze745n3r2sfqtahhubpl
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * xxljob-b21969c2309
   */
  clusterId?: string;
  /**
   * @example
   * 229317760970086
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestNoticeConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @example
   * 1
   */
  failLimitTimes?: number;
  /**
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @example
   * mail
   */
  sendChannel?: string;
  /**
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      failLimitTimes: 'FailLimitTimes',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      successNotice: 'SuccessNotice',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      failLimitTimes: 'number',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      successNotice: 'boolean',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestNoticeContacts extends $tea.Model {
  /**
   * @example
   * 1
   */
  contactType?: number;
  /**
   * @example
   * xiaoming
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 74
   */
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

export class GetClusterResponseBodyDataVSwitches extends $tea.Model {
  /**
   * @example
   * vsw-8vbf1n216nshvfjdyff8a
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * xxljob-e0d018c6df8
   */
  clusterId?: string;
  /**
   * @example
   * xxl-job-test-1730427575152
   */
  clusterName?: string;
  /**
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  internetDomain?: string;
  /**
   * @example
   * http://xxljob-xxxxxx.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @example
   * 100
   */
  jobNum?: number;
  /**
   * @example
   * {
   *   "vSwitchIdList": [
   *     "xxx",
   *     "xxx"
   *   ],
   *   "cpu": xxx,
   *   "cpuUnit": "xxx",
   *   "diskCapacity": xxx,
   *   "memoryCapacity": xxx,
   *   "zoneIds": [
   *     "xxx",
   *     "xxx"
   *   ],
   *   "securityGroupList": [
   *     "xxx"
   *   ],
   *   "eniCrossZone": "xxx",
   *   "regionId": "xxx",
   *   "instanceCount": xxx,
   *   "vpcId": "xxx",
   *   "memoryUnit": "xxx",
   *   "diskType": "xxx",
   *   "appClusterId": "xxx"
   * }
   */
  kubeConfig?: string;
  /**
   * @example
   * 1000
   */
  maxJobNum?: number;
  /**
   * @example
   * 2
   */
  productType?: number;
  /**
   * @example
   * 10
   */
  spm?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  vSwitches?: GetClusterResponseBodyDataVSwitches[];
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1fiz967u39lt8yuxcs0
   */
  vpcId?: string;
  /**
   * @example
   * 10
   */
  workerNum?: number;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      jobNum: 'JobNum',
      kubeConfig: 'KubeConfig',
      maxJobNum: 'MaxJobNum',
      productType: 'ProductType',
      spm: 'Spm',
      status: 'Status',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      workerNum: 'WorkerNum',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      jobNum: 'number',
      kubeConfig: 'string',
      maxJobNum: 'number',
      productType: 'number',
      spm: 'number',
      status: 'number',
      vSwitches: { 'type': 'array', 'itemType': GetClusterResponseBodyDataVSwitches },
      vpcId: 'string',
      workerNum: 'number',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesigateInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2
   */
  designateType?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      transferable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataRootProgress extends $tea.Model {
  /**
   * @example
   * 2
   */
  finished?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataShardingProgressStatusType extends $tea.Model {
  /**
   * @example
   * 5
   */
  code?: string;
  /**
   * @example
   * TaskStatus.FAILED
   */
  name?: string;
  /**
   * @remarks
   * -
   */
  tips?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      tips: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataShardingProgress extends $tea.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1306189481388277762
   */
  jobExecutionId?: string;
  /**
   * @example
   * 2,4,6,8,10
   */
  result?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  statusType?: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType;
  /**
   * @example
   * http://192.168.1.9:9999/
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jobExecutionId: 'JobExecutionId',
      result: 'Result',
      status: 'Status',
      statusType: 'StatusType',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      jobExecutionId: 'string',
      result: 'string',
      status: 'number',
      statusType: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType,
      workerAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataTaskProgress extends $tea.Model {
  /**
   * @example
   * 100
   */
  failed?: number;
  /**
   * @example
   * calendar_test_2
   */
  name?: string;
  /**
   * @example
   * 10
   */
  pulled?: number;
  /**
   * @example
   * 100
   */
  queue?: number;
  /**
   * @example
   * 1
   */
  running?: number;
  /**
   * @example
   * 100
   */
  success?: number;
  /**
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      name: 'Name',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      name: 'string',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataTotalProgress extends $tea.Model {
  /**
   * @example
   * 15
   */
  finished?: number;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataWorkerProgress extends $tea.Model {
  /**
   * @example
   * 20
   */
  failed?: number;
  /**
   * @example
   * 20
   */
  pulled?: number;
  /**
   * @example
   * 20
   */
  queue?: number;
  /**
   * @example
   * 20
   */
  running?: number;
  /**
   * @example
   * 20
   */
  success?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  /**
   * @example
   * 1a0e97fb17244665327205402dbd6d
   */
  traceId?: string;
  /**
   * @example
   * 10.10.116.53:61941
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
      total: 'number',
      traceId: 'string',
      workerAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyData extends $tea.Model {
  jobDescription?: string;
  rootProgress?: GetJobExecutionProgressResponseBodyDataRootProgress;
  shardingProgress?: GetJobExecutionProgressResponseBodyDataShardingProgress[];
  taskProgress?: GetJobExecutionProgressResponseBodyDataTaskProgress[];
  totalProgress?: GetJobExecutionProgressResponseBodyDataTotalProgress;
  workerProgress?: GetJobExecutionProgressResponseBodyDataWorkerProgress[];
  static names(): { [key: string]: string } {
    return {
      jobDescription: 'JobDescription',
      rootProgress: 'RootProgress',
      shardingProgress: 'ShardingProgress',
      taskProgress: 'TaskProgress',
      totalProgress: 'TotalProgress',
      workerProgress: 'WorkerProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDescription: 'string',
      rootProgress: GetJobExecutionProgressResponseBodyDataRootProgress,
      shardingProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataShardingProgress },
      taskProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataTaskProgress },
      totalProgress: GetJobExecutionProgressResponseBodyDataTotalProgress,
      workerProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataWorkerProgress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * webhook
   */
  alarmChannel?: string;
  /**
   * @example
   * zhangsan
   */
  alarmContacts?: string;
  alarmMessage?: string;
  /**
   * @example
   * true
   */
  alarmStatus?: string;
  /**
   * @example
   * schedulerx3_fail_alarm
   */
  alarmType?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      alarmChannel: 'AlarmChannel',
      alarmContacts: 'AlarmContacts',
      alarmMessage: 'AlarmMessage',
      alarmStatus: 'AlarmStatus',
      alarmType: 'AlarmType',
      appName: 'AppName',
      jobName: 'JobName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmChannel: 'string',
      alarmContacts: 'string',
      alarmMessage: 'string',
      alarmStatus: 'string',
      alarmType: 'string',
      appName: 'string',
      jobName: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  records?: ListAlarmEventResponseBodyDataRecords[];
  /**
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListAlarmEventResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppNamesResponseBodyData extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appGroupId?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 15
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appName: 'string',
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyDataRecords extends $tea.Model {
  /**
   * @remarks
   * AccessToken
   * 
   * @example
   * 2f4ddeab8e344ed68e0402cf9b8502ffv3
   */
  accessToken?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1827811800555555
   */
  creator?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 1
   */
  executorNum?: number;
  /**
   * @example
   * 43885
   */
  id?: number;
  /**
   * @example
   * 10
   */
  jobNum?: number;
  /**
   * @example
   * http://28.5.128.3:80
   */
  leader?: string;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * 1000
   */
  maxJobs?: number;
  title?: string;
  /**
   * @example
   * 1827811800555555
   */
  updater?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      creator: 'Creator',
      enableLog: 'EnableLog',
      executorNum: 'ExecutorNum',
      id: 'Id',
      jobNum: 'JobNum',
      leader: 'Leader',
      maxConcurrency: 'MaxConcurrency',
      maxJobs: 'MaxJobs',
      title: 'Title',
      updater: 'Updater',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      creator: 'string',
      enableLog: 'boolean',
      executorNum: 'number',
      id: 'number',
      jobNum: 'number',
      leader: 'string',
      maxConcurrency: 'number',
      maxJobs: 'number',
      title: 'string',
      updater: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListAppsResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListAppsResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyDataRecordsVSwitches extends $tea.Model {
  /**
   * @example
   * vsw-8vbl54xzux86usy61r5zm
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * xxljob-c20f7ec9a78
   */
  clusterId?: string;
  /**
   * @example
   * xxl-job-test-1730427510169
   */
  clusterName?: string;
  /**
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  internetDomain?: string;
  /**
   * @example
   * http://xxljob-b9e19e46c4e.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @example
   * 1
   */
  productType?: number;
  spInstanceId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  vSwitches?: ListClustersResponseBodyDataRecordsVSwitches[];
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1fxort6ag5h9752i305
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      productType: 'ProductType',
      spInstanceId: 'SpInstanceId',
      status: 'Status',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      productType: 'number',
      spInstanceId: 'string',
      status: 'number',
      vSwitches: { 'type': 'array', 'itemType': ListClustersResponseBodyDataRecordsVSwitches },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListClustersResponseBodyDataRecords[];
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListClustersResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyData extends $tea.Model {
  /**
   * @example
   * http://192.168.1.10:9999/
   */
  address?: string;
  /**
   * @example
   * 192.168.1.10
   */
  ip?: string;
  /**
   * @example
   * true
   */
  isDesignated?: boolean;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * 9999
   */
  port?: number;
  /**
   * @example
   * 2.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ip: 'Ip',
      isDesignated: 'IsDesignated',
      label: 'Label',
      online: 'Online',
      port: 'Port',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ip: 'string',
      isDesignated: 'boolean',
      label: 'string',
      online: 'boolean',
      port: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  endTime?: string;
  /**
   * @example
   * 1827811800526000
   */
  executor?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * name=zhangsan
   */
  parameters?: string;
  /**
   * @example
   * success
   */
  result?: string;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @example
   * 28.0.168.46
   */
  serverIp?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @example
   * http://192.168.1.9:9999/
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attempt: 'Attempt',
      dataTime: 'DataTime',
      duration: 'Duration',
      endTime: 'EndTime',
      executor: 'Executor',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      parameters: 'Parameters',
      result: 'Result',
      routeStrategy: 'RouteStrategy',
      scheduleTime: 'ScheduleTime',
      serverIp: 'ServerIp',
      status: 'Status',
      timeType: 'TimeType',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attempt: 'number',
      dataTime: 'string',
      duration: 'number',
      endTime: 'string',
      executor: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      jobType: 'string',
      parameters: 'string',
      result: 'string',
      routeStrategy: 'number',
      scheduleTime: 'string',
      serverIp: 'string',
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

export class ListJobExecutionsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListJobExecutionsResponseBodyDataRecords[];
  /**
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListJobExecutionsResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @example
   * work-day
   */
  calendar?: string;
  /**
   * @example
   * {"cleanMode":"NUM_ONLY","totalRemain":300}
   */
  cleanMode?: string;
  /**
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @example
   * 3
   */
  dataOffset?: number;
  description?: string;
  /**
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * 5
   */
  maxAttempt?: number;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * job01
   */
  name?: string;
  /**
   * @example
   * {"failLimitTimes":1,"failEnable":true,"timeoutKillEnable":false,"missWorkerEnable":true,"timeoutEnable":true,"sendChannel":"","timeout":300,"successNotice":false}
   */
  noticeConfig?: string;
  noticeContacts?: string;
  /**
   * @example
   * name=10
   */
  parameters?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * HangKong
   */
  timeZone?: string;
  /**
   * @example
   * HangKong
   */
  timezone?: string;
  /**
   * @example
   * 1963096506470832
   */
  updater?: string;
  xattrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      cleanMode: 'CleanMode',
      creator: 'Creator',
      dataOffset: 'DataOffset',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeZone: 'TimeZone',
      timezone: 'Timezone',
      updater: 'Updater',
      xattrs: 'Xattrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      cleanMode: 'string',
      creator: 'string',
      dataOffset: 'number',
      description: 'string',
      jobHandler: 'string',
      jobId: 'number',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: 'string',
      noticeContacts: 'string',
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeZone: 'string',
      timezone: 'string',
      updater: 'string',
      xattrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListJobsResponseBodyDataRecords[];
  /**
   * @example
   * 65
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListJobsResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLablesResponseBodyData extends $tea.Model {
  /**
   * @example
   * true
   */
  isDesignated?: boolean;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * 2
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDesignated: 'IsDesignated',
      label: 'Label',
      online: 'Online',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDesignated: 'boolean',
      label: 'string',
      online: 'boolean',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionZoneResponseBodyData extends $tea.Model {
  /**
   * @example
   * E
   */
  localName?: string;
  /**
   * @remarks
   * zone id
   * 
   * @example
   * cn-beijing-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * endpoint
   * 
   * @example
   * schedulerx3.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-hangzhou
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleEventResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * hello word
   */
  content?: string;
  /**
   * @example
   * INFO
   */
  event?: string;
  /**
   * @remarks
   * 130
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @example
   * http://192.168.1.5:9999/
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      event: 'Event',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      time: 'Time',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      event: 'string',
      jobExecutionId: 'string',
      jobName: 'string',
      time: 'string',
      workerAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleEventResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: ListScheduleEventResponseBodyDataRecords[];
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListScheduleEventResponseBodyDataRecords },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateExecuteJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobExecutionId: 'JobExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequestNoticeConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @example
   * true
   */
  failLimitTimes?: number;
  /**
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @example
   * webhook,sms,mail,phone
   */
  sendChannel?: string;
  /**
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @example
   * 90
   */
  timeout?: number;
  /**
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      failLimitTimes: 'FailLimitTimes',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      successNotice: 'SuccessNotice',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      failLimitTimes: 'number',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      successNotice: 'boolean',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequestNoticeContacts extends $tea.Model {
  /**
   * @example
   * 1
   */
  contactType?: number;
  /**
   * @example
   * xiaoming
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("schedulerx3", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建应用
   * 
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      body["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.enableLog)) {
      body["EnableLog"] = request.enableLog;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建集群
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.vSwitches)) {
      request.vSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitches, "VSwitches", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.engineType)) {
      body["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.vSwitchesShrink)) {
      body["VSwitches"] = request.vSwitchesShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * 创建集群
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.noticeConfig)) {
      request.noticeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeConfig, "NoticeConfig", "json");
    }

    if (!Util.isUnset(tmpReq.noticeContacts)) {
      request.noticeContactsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeContacts, "NoticeContacts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.jobHandler)) {
      body["JobHandler"] = request.jobHandler;
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

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.noticeConfigShrink)) {
      body["NoticeConfig"] = request.noticeConfigShrink;
    }

    if (!Util.isUnset(request.noticeContactsShrink)) {
      body["NoticeContacts"] = request.noticeContactsShrink;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.routeStrategy)) {
      body["RouteStrategy"] = request.routeStrategy;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
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
      action: "CreateJob",
      version: "2024-06-24",
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
   * 创建任务
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * 删除应用分组
   * 
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  /**
   * 删除应用分组
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * 释放删除集群
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * 释放删除集群
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 批量删除任务
   * 
   * @param tmpReq - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  /**
   * 批量删除任务
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * 批量导出任务信息
   * 
   * @param tmpReq - ExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportJobsResponse
   */
  async exportJobsWithOptions(tmpReq: ExportJobsRequest, runtime: $Util.RuntimeOptions): Promise<ExportJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.exportJobType)) {
      body["ExportJobType"] = request.exportJobType;
    }

    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "byte",
    });
    return $tea.cast<ExportJobsResponse>(await this.callApi(params, req, runtime), new ExportJobsResponse({}));
  }

  /**
   * 批量导出任务信息
   * 
   * @param request - ExportJobsRequest
   * @returns ExportJobsResponse
   */
  async exportJobs(request: ExportJobsRequest): Promise<ExportJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportJobsWithOptions(request, runtime);
  }

  /**
   * 获取集群详细信息
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: GetClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  /**
   * 获取集群详细信息
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * 获取指定机器信息
   * 
   * @param request - GetDesigateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDesigateInfoResponse
   */
  async getDesigateInfoWithOptions(request: GetDesigateInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDesigateInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDesigateInfo",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDesigateInfoResponse>(await this.callApi(params, req, runtime), new GetDesigateInfoResponse({}));
  }

  /**
   * 获取指定机器信息
   * 
   * @param request - GetDesigateInfoRequest
   * @returns GetDesigateInfoResponse
   */
  async getDesigateInfo(request: GetDesigateInfoRequest): Promise<GetDesigateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDesigateInfoWithOptions(request, runtime);
  }

  /**
   * 获取任务执行的详情
   * 
   * @param request - GetJobExecutionProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobExecutionProgressResponse
   */
  async getJobExecutionProgressWithOptions(request: GetJobExecutionProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetJobExecutionProgressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobExecutionProgress",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobExecutionProgressResponse>(await this.callApi(params, req, runtime), new GetJobExecutionProgressResponse({}));
  }

  /**
   * 获取任务执行的详情
   * 
   * @param request - GetJobExecutionProgressRequest
   * @returns GetJobExecutionProgressResponse
   */
  async getJobExecutionProgress(request: GetJobExecutionProgressRequest): Promise<GetJobExecutionProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobExecutionProgressWithOptions(request, runtime);
  }

  /**
   * 查询日志
   * 
   * @param request - GetLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogResponse
   */
  async getLogWithOptions(request: GetLogRequest, runtime: $Util.RuntimeOptions): Promise<GetLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLog",
      version: "2024-06-24",
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
   * 查询日志
   * 
   * @param request - GetLogRequest
   * @returns GetLogResponse
   */
  async getLog(request: GetLogRequest): Promise<GetLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * 导入日历
   * 
   * @param request - ImportCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCalendarResponse
   */
  async importCalendarWithOptions(request: ImportCalendarRequest, runtime: $Util.RuntimeOptions): Promise<ImportCalendarResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.months)) {
      body["Months"] = request.months;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportCalendarResponse>(await this.callApi(params, req, runtime), new ImportCalendarResponse({}));
  }

  /**
   * 导入日历
   * 
   * @param request - ImportCalendarRequest
   * @returns ImportCalendarResponse
   */
  async importCalendar(request: ImportCalendarRequest): Promise<ImportCalendarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCalendarWithOptions(request, runtime);
  }

  /**
   * 批量导入任务
   * 
   * @param request - ImportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportJobsResponse
   */
  async importJobsWithOptions(request: ImportJobsRequest, runtime: $Util.RuntimeOptions): Promise<ImportJobsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoCreateApp)) {
      body["AutoCreateApp"] = request.autoCreateApp;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportJobsResponse>(await this.callApi(params, req, runtime), new ImportJobsResponse({}));
  }

  /**
   * 批量导入任务
   * 
   * @param request - ImportJobsRequest
   * @returns ImportJobsResponse
   */
  async importJobs(request: ImportJobsRequest): Promise<ImportJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importJobsWithOptions(request, runtime);
  }

  /**
   * 获取报警事件
   * 
   * @param request - ListAlarmEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmEventResponse
   */
  async listAlarmEventWithOptions(request: ListAlarmEventRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmEventResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarmEvent",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmEventResponse>(await this.callApi(params, req, runtime), new ListAlarmEventResponse({}));
  }

  /**
   * 获取报警事件
   * 
   * @param request - ListAlarmEventRequest
   * @returns ListAlarmEventResponse
   */
  async listAlarmEvent(request: ListAlarmEventRequest): Promise<ListAlarmEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmEventWithOptions(request, runtime);
  }

  /**
   * 获取应用名字列表
   * 
   * @param request - ListAppNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppNamesResponse
   */
  async listAppNamesWithOptions(request: ListAppNamesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppNamesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppNames",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppNamesResponse>(await this.callApi(params, req, runtime), new ListAppNamesResponse({}));
  }

  /**
   * 获取应用名字列表
   * 
   * @param request - ListAppNamesRequest
   * @returns ListAppNamesResponse
   */
  async listAppNames(request: ListAppNamesRequest): Promise<ListAppNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppNamesWithOptions(request, runtime);
  }

  /**
   * @param request - ListAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  /**
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * 获取日历名字列表
   * 
   * @param request - ListCalendarNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalendarNamesResponse
   */
  async listCalendarNamesWithOptions(request: ListCalendarNamesRequest, runtime: $Util.RuntimeOptions): Promise<ListCalendarNamesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCalendarNames",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCalendarNamesResponse>(await this.callApi(params, req, runtime), new ListCalendarNamesResponse({}));
  }

  /**
   * 获取日历名字列表
   * 
   * @param request - ListCalendarNamesRequest
   * @returns ListCalendarNamesResponse
   */
  async listCalendarNames(request: ListCalendarNamesRequest): Promise<ListCalendarNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCalendarNamesWithOptions(request, runtime);
  }

  /**
   * 查询实例列表
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * 查询实例列表
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查询Executor列表
   * 
   * @param request - ListExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorsResponse
   */
  async listExecutorsWithOptions(request: ListExecutorsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutorsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutorsResponse>(await this.callApi(params, req, runtime), new ListExecutorsResponse({}));
  }

  /**
   * 查询Executor列表
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: ListExecutorsRequest): Promise<ListExecutorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListJobExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutionsWithOptions(request: ListJobExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobExecutionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobExecutions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobExecutionsResponse>(await this.callApi(params, req, runtime), new ListJobExecutionsResponse({}));
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListJobExecutionsRequest
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutions(request: ListJobExecutionsRequest): Promise<ListJobExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobExecutionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2024-06-24",
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
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * 获取executor的label列表
   * 
   * @param request - ListLablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLablesResponse
   */
  async listLablesWithOptions(request: ListLablesRequest, runtime: $Util.RuntimeOptions): Promise<ListLablesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLables",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLablesResponse>(await this.callApi(params, req, runtime), new ListLablesResponse({}));
  }

  /**
   * 获取executor的label列表
   * 
   * @param request - ListLablesRequest
   * @returns ListLablesResponse
   */
  async listLables(request: ListLablesRequest): Promise<ListLablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLablesWithOptions(request, runtime);
  }

  /**
   * 获取可用区列表
   * 
   * @param request - ListRegionZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionZoneResponse
   */
  async listRegionZoneWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionZoneResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegionZone",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionZoneResponse>(await this.callApi(params, req, runtime), new ListRegionZoneResponse({}));
  }

  /**
   * 获取可用区列表
   * @returns ListRegionZoneResponse
   */
  async listRegionZone(): Promise<ListRegionZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionZoneWithOptions(runtime);
  }

  /**
   * 获取所有region列表
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
   * 获取所有region列表
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询调度事件
   * 
   * @param request - ListScheduleEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduleEventResponse
   */
  async listScheduleEventWithOptions(request: ListScheduleEventRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduleEventResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduleEvent",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScheduleEventResponse>(await this.callApi(params, req, runtime), new ListScheduleEventResponse({}));
  }

  /**
   * 查询调度事件
   * 
   * @param request - ListScheduleEventRequest
   * @returns ListScheduleEventResponse
   */
  async listScheduleEvent(request: ListScheduleEventRequest): Promise<ListScheduleEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduleEventWithOptions(request, runtime);
  }

  /**
   * 获取指定时间类型和表达式未来5次调度时间
   * 
   * @param request - ListScheduleTimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduleTimesResponse
   */
  async listScheduleTimesWithOptions(request: ListScheduleTimesRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduleTimesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduleTimes",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScheduleTimesResponse>(await this.callApi(params, req, runtime), new ListScheduleTimesResponse({}));
  }

  /**
   * 获取指定时间类型和表达式未来5次调度时间
   * 
   * @param request - ListScheduleTimesRequest
   * @returns ListScheduleTimesResponse
   */
  async listScheduleTimes(request: ListScheduleTimesRequest): Promise<ListScheduleTimesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduleTimesWithOptions(request, runtime);
  }

  /**
   * 指定执行器
   * 
   * @param tmpReq - OperateDesignateExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateDesignateExecutorsResponse
   */
  async operateDesignateExecutorsWithOptions(tmpReq: OperateDesignateExecutorsRequest, runtime: $Util.RuntimeOptions): Promise<OperateDesignateExecutorsResponse> {
    Util.validateModel(tmpReq);
    let request = new OperateDesignateExecutorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addressList)) {
      request.addressListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addressList, "AddressList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressListShrink)) {
      body["AddressList"] = request.addressListShrink;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.designateType)) {
      body["DesignateType"] = request.designateType;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.transferable)) {
      body["Transferable"] = request.transferable;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OperateDesignateExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateDesignateExecutorsResponse>(await this.callApi(params, req, runtime), new OperateDesignateExecutorsResponse({}));
  }

  /**
   * 指定执行器
   * 
   * @param request - OperateDesignateExecutorsRequest
   * @returns OperateDesignateExecutorsResponse
   */
  async operateDesignateExecutors(request: OperateDesignateExecutorsRequest): Promise<OperateDesignateExecutorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateDesignateExecutorsWithOptions(request, runtime);
  }

  /**
   * 批量禁用任务
   * 
   * @param tmpReq - OperateDisableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateDisableJobsResponse
   */
  async operateDisableJobsWithOptions(tmpReq: OperateDisableJobsRequest, runtime: $Util.RuntimeOptions): Promise<OperateDisableJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new OperateDisableJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OperateDisableJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateDisableJobsResponse>(await this.callApi(params, req, runtime), new OperateDisableJobsResponse({}));
  }

  /**
   * 批量禁用任务
   * 
   * @param request - OperateDisableJobsRequest
   * @returns OperateDisableJobsResponse
   */
  async operateDisableJobs(request: OperateDisableJobsRequest): Promise<OperateDisableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateDisableJobsWithOptions(request, runtime);
  }

  /**
   * 批量启用任务
   * 
   * @param tmpReq - OperateEnableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateEnableJobsResponse
   */
  async operateEnableJobsWithOptions(tmpReq: OperateEnableJobsRequest, runtime: $Util.RuntimeOptions): Promise<OperateEnableJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new OperateEnableJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OperateEnableJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateEnableJobsResponse>(await this.callApi(params, req, runtime), new OperateEnableJobsResponse({}));
  }

  /**
   * 批量启用任务
   * 
   * @param request - OperateEnableJobsRequest
   * @returns OperateEnableJobsResponse
   */
  async operateEnableJobs(request: OperateEnableJobsRequest): Promise<OperateEnableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateEnableJobsWithOptions(request, runtime);
  }

  /**
   * 运行一次任务
   * 
   * @param request - OperateExecuteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateExecuteJobResponse
   */
  async operateExecuteJobWithOptions(request: OperateExecuteJobRequest, runtime: $Util.RuntimeOptions): Promise<OperateExecuteJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceParameters)) {
      body["InstanceParameters"] = request.instanceParameters;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.worker)) {
      body["Worker"] = request.worker;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OperateExecuteJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateExecuteJobResponse>(await this.callApi(params, req, runtime), new OperateExecuteJobResponse({}));
  }

  /**
   * 运行一次任务
   * 
   * @param request - OperateExecuteJobRequest
   * @returns OperateExecuteJobResponse
   */
  async operateExecuteJob(request: OperateExecuteJobRequest): Promise<OperateExecuteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateExecuteJobWithOptions(request, runtime);
  }

  /**
   * 重刷任务历史数据
   * 
   * @param request - OperateRerunJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateRerunJobResponse
   */
  async operateRerunJobWithOptions(request: OperateRerunJobRequest, runtime: $Util.RuntimeOptions): Promise<OperateRerunJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataTime)) {
      query["DataTime"] = request.dataTime;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateRerunJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateRerunJobResponse>(await this.callApi(params, req, runtime), new OperateRerunJobResponse({}));
  }

  /**
   * 重刷任务历史数据
   * 
   * @param request - OperateRerunJobRequest
   * @returns OperateRerunJobResponse
   */
  async operateRerunJob(request: OperateRerunJobRequest): Promise<OperateRerunJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateRerunJobWithOptions(request, runtime);
  }

  /**
   * 重跑失败的任务实例
   * 
   * @param request - OperateRetryJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateRetryJobExecutionResponse
   */
  async operateRetryJobExecutionWithOptions(request: OperateRetryJobExecutionRequest, runtime: $Util.RuntimeOptions): Promise<OperateRetryJobExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateRetryJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateRetryJobExecutionResponse>(await this.callApi(params, req, runtime), new OperateRetryJobExecutionResponse({}));
  }

  /**
   * 重跑失败的任务实例
   * 
   * @param request - OperateRetryJobExecutionRequest
   * @returns OperateRetryJobExecutionResponse
   */
  async operateRetryJobExecution(request: OperateRetryJobExecutionRequest): Promise<OperateRetryJobExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateRetryJobExecutionWithOptions(request, runtime);
  }

  /**
   * 停止正在运行的任务实例
   * 
   * @param request - OperateStopJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateStopJobExecutionResponse
   */
  async operateStopJobExecutionWithOptions(request: OperateStopJobExecutionRequest, runtime: $Util.RuntimeOptions): Promise<OperateStopJobExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateStopJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateStopJobExecutionResponse>(await this.callApi(params, req, runtime), new OperateStopJobExecutionResponse({}));
  }

  /**
   * 停止正在运行的任务实例
   * 
   * @param request - OperateStopJobExecutionRequest
   * @returns OperateStopJobExecutionResponse
   */
  async operateStopJobExecution(request: OperateStopJobExecutionRequest): Promise<OperateStopJobExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateStopJobExecutionWithOptions(request, runtime);
  }

  /**
   * 更新应用分组
   * 
   * @param request - UpdateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppResponse
   */
  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      body["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.enableLog)) {
      body["EnableLog"] = request.enableLog;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  /**
   * 更新应用分组
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  /**
   * 更新集群
   * 
   * @param request - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(request: UpdateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterResponse>(await this.callApi(params, req, runtime), new UpdateClusterResponse({}));
  }

  /**
   * 更新集群
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * 更新任务信息
   * 
   * @param tmpReq - UpdateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(tmpReq: UpdateJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.noticeConfig)) {
      request.noticeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeConfig, "NoticeConfig", "json");
    }

    if (!Util.isUnset(tmpReq.noticeContacts)) {
      request.noticeContactsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeContacts, "NoticeContacts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.jobHandler)) {
      body["JobHandler"] = request.jobHandler;
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

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.noticeConfigShrink)) {
      body["NoticeConfig"] = request.noticeConfigShrink;
    }

    if (!Util.isUnset(request.noticeContactsShrink)) {
      body["NoticeContacts"] = request.noticeContactsShrink;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.routeStrategy)) {
      body["RouteStrategy"] = request.routeStrategy;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
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
      action: "UpdateJob",
      version: "2024-06-24",
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
   * 更新任务信息
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

}

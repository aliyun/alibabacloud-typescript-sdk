// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchCheckSessionRequest extends $tea.Model {
  records?: BatchCheckSessionRequestRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': BatchCheckSessionRequestRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckSessionShrinkRequest extends $tea.Model {
  recordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      recordsShrink: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckSessionResponseBody extends $tea.Model {
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

export class BatchCheckSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCheckSessionResponseBody;
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
      body: BatchCheckSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReserveTaskRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReserveTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReserveTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelReserveTaskResponseBody;
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
      body: CancelReserveTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdaptationRequest extends $tea.Model {
  adaptTarget?: CreateAdaptationRequestAdaptTarget;
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptTarget: 'AdaptTarget',
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptTarget: CreateAdaptationRequestAdaptTarget,
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdaptationShrinkRequest extends $tea.Model {
  adaptTargetShrink?: string;
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptTargetShrink: 'AdaptTarget',
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptTargetShrink: 'string',
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdaptationResponseBody extends $tea.Model {
  adaptApplyId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdaptationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAdaptationResponseBody;
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
      body: CreateAdaptationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  appType?: string;
  streamingAppId?: string;
  streamingSolution?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      streamingAppId: 'StreamingAppId',
      streamingSolution: 'StreamingSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      streamingAppId: 'string',
      streamingSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
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

export class CreateAppSessionRequest extends $tea.Model {
  adapterFileId?: string;
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  districtId?: string;
  enablePostpaid?: boolean;
  projectId?: string;
  startParameters?: CreateAppSessionRequestStartParameters[];
  systemInfo?: CreateAppSessionRequestSystemInfo[];
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      adapterFileId: 'AdapterFileId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      districtId: 'DistrictId',
      enablePostpaid: 'EnablePostpaid',
      projectId: 'ProjectId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adapterFileId: 'string',
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customSessionId: 'string',
      customUserId: 'string',
      districtId: 'string',
      enablePostpaid: 'boolean',
      projectId: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionRequestStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionRequestSystemInfo },
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppSessionResponseBody;
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
      body: CreateAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequest extends $tea.Model {
  appInfos?: CreateAppSessionBatchRequestAppInfos[];
  customTaskId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      customTaskId: 'CustomTaskId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfos },
      customTaskId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchShrinkRequest extends $tea.Model {
  appInfosShrink?: string;
  customTaskId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appInfosShrink: 'AppInfos',
      customTaskId: 'CustomTaskId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfosShrink: 'string',
      customTaskId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchResponseBody extends $tea.Model {
  customTaskId?: string;
  platformTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTaskId: 'CustomTaskId',
      platformTaskId: 'PlatformTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTaskId: 'string',
      platformTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppSessionBatchResponseBody;
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
      body: CreateAppSessionBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequest extends $tea.Model {
  appInfos?: CreateAppSessionBatchSyncRequestAppInfos[];
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncRequestAppInfos },
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncShrinkRequest extends $tea.Model {
  appInfosShrink?: string;
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfosShrink: 'AppInfos',
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfosShrink: 'string',
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBody extends $tea.Model {
  batchId?: string;
  failedList?: CreateAppSessionBatchSyncResponseBodyFailedList[];
  requestId?: string;
  resultList?: CreateAppSessionBatchSyncResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      failedList: 'FailedList',
      requestId: 'RequestId',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      failedList: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncResponseBodyFailedList },
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncResponseBodyResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppSessionBatchSyncResponseBody;
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
      body: CreateAppSessionBatchSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncRequest extends $tea.Model {
  adapterFileId?: string;
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  districtId?: string;
  matchRules?: CreateAppSessionSyncRequestMatchRules[];
  projectId?: string;
  startParameters?: CreateAppSessionSyncRequestStartParameters[];
  systemInfo?: CreateAppSessionSyncRequestSystemInfo[];
  tags?: CreateAppSessionSyncRequestTags[];
  static names(): { [key: string]: string } {
    return {
      adapterFileId: 'AdapterFileId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      districtId: 'DistrictId',
      matchRules: 'MatchRules',
      projectId: 'ProjectId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adapterFileId: 'string',
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customSessionId: 'string',
      customUserId: 'string',
      districtId: 'string',
      matchRules: { 'type': 'array', 'itemType': CreateAppSessionSyncRequestMatchRules },
      projectId: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionSyncRequestStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionSyncRequestSystemInfo },
      tags: { 'type': 'array', 'itemType': CreateAppSessionSyncRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  bizInfo?: CreateAppSessionSyncResponseBodyBizInfo;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      bizInfo: 'BizInfo',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      bizInfo: CreateAppSessionSyncResponseBodyBizInfo,
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppSessionSyncResponseBody;
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
      body: CreateAppSessionSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionRequest extends $tea.Model {
  appId?: string;
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBody extends $tea.Model {
  appVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppVersionResponseBody;
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
      body: CreateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  clientToken?: string;
  districtId?: string;
  expectResourceReadyTime?: string;
  expectSessionCapacity?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientToken: 'ClientToken',
      districtId: 'DistrictId',
      expectResourceReadyTime: 'ExpectResourceReadyTime',
      expectSessionCapacity: 'ExpectSessionCapacity',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      clientToken: 'string',
      districtId: 'string',
      expectResourceReadyTime: 'string',
      expectSessionCapacity: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationResponseBody extends $tea.Model {
  currMaxAllocatableSessionCapacity?: number;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currMaxAllocatableSessionCapacity: 'CurrMaxAllocatableSessionCapacity',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currMaxAllocatableSessionCapacity: 'number',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCapacityReservationResponseBody;
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
      body: CreateCapacityReservationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
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

export class DeleteAppVersionRequest extends $tea.Model {
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponseBody extends $tea.Model {
  appVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppVersionResponseBody;
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
      body: DeleteAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatsInfoRequest extends $tea.Model {
  districtIds?: string[];
  instanceTypes?: string[];
  projectIds?: string[];
  static names(): { [key: string]: string } {
    return {
      districtIds: 'DistrictIds',
      instanceTypes: 'InstanceTypes',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtIds: { 'type': 'array', 'itemType': 'string' },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      projectIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatsInfoResponseBody extends $tea.Model {
  data?: DescribeInstanceStatsInfoResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInstanceStatsInfoResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatsInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceStatsInfoResponseBody;
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
      body: DescribeInstanceStatsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdaptationRequest extends $tea.Model {
  adaptApplyId?: number;
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdaptationResponseBody extends $tea.Model {
  adaptApplyId?: number;
  adaptTarget?: GetAdaptationResponseBodyAdaptTarget;
  appId?: string;
  appVersionId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      adaptTarget: 'AdaptTarget',
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      adaptTarget: GetAdaptationResponseBodyAdaptTarget,
      appId: 'string',
      appVersionId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdaptationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdaptationResponseBody;
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
      body: GetAdaptationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  appId?: string;
  appName?: string;
  appType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  requestId?: string;
  streamingAppId?: string;
  streamingSolution?: string;
  versionAdaptNum?: number;
  versionTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      streamingAppId: 'StreamingAppId',
      streamingSolution: 'StreamingSolution',
      versionAdaptNum: 'VersionAdaptNum',
      versionTotalNum: 'VersionTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
      streamingAppId: 'string',
      streamingSolution: 'string',
      versionAdaptNum: 'number',
      versionTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCcuRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCcuResponseBody extends $tea.Model {
  detailList?: GetAppCcuResponseBodyDetailList[];
  requestId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': GetAppCcuResponseBodyDetailList },
      requestId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCcuResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppCcuResponseBody;
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
      body: GetAppCcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionRequest extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  bizInfo?: GetAppSessionResponseBodyBizInfo;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      bizInfo: 'BizInfo',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      bizInfo: GetAppSessionResponseBodyBizInfo,
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppSessionResponseBody;
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
      body: GetAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionRequest extends $tea.Model {
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionResponseBody extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  appVersionName?: string;
  appVersionStatus?: string;
  appVersionStatusMemo?: string;
  consumeCu?: number;
  fileAddress?: string;
  fileSize?: number;
  fileUploadFinishTime?: string;
  fileUploadType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionStatus: 'AppVersionStatus',
      appVersionStatusMemo: 'AppVersionStatusMemo',
      consumeCu: 'ConsumeCu',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadFinishTime: 'FileUploadFinishTime',
      fileUploadType: 'FileUploadType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionStatus: 'string',
      appVersionStatusMemo: 'string',
      consumeCu: 'number',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadFinishTime: 'string',
      fileUploadType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppVersionResponseBody;
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
      body: GetAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  districtId?: string;
  pageNum?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      districtId: 'DistrictId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      districtId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponseBody extends $tea.Model {
  capacities?: GetCapacityResponseBodyCapacities[];
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: { 'type': 'array', 'itemType': GetCapacityResponseBodyCapacities },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCapacityResponseBody;
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
      body: GetCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveTaskDetailRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveTaskDetailResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  currCompletedSessionCapacity?: number;
  districtId?: string;
  expectResourceReadyTime?: string;
  expectSessionCapacity?: number;
  projectId?: string;
  requestId?: string;
  resBatchList?: GetReserveTaskDetailResponseBodyResBatchList[];
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      currCompletedSessionCapacity: 'CurrCompletedSessionCapacity',
      districtId: 'DistrictId',
      expectResourceReadyTime: 'ExpectResourceReadyTime',
      expectSessionCapacity: 'ExpectSessionCapacity',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      resBatchList: 'ResBatchList',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      currCompletedSessionCapacity: 'number',
      districtId: 'string',
      expectResourceReadyTime: 'string',
      expectSessionCapacity: 'number',
      projectId: 'string',
      requestId: 'string',
      resBatchList: { 'type': 'array', 'itemType': GetReserveTaskDetailResponseBodyResBatchList },
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveTaskDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReserveTaskDetailResponseBody;
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
      body: GetReserveTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePublicIPsRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePublicIPsResponseBody extends $tea.Model {
  ipList?: GetResourcePublicIPsResponseBodyIpList[];
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': GetResourcePublicIPsResponseBodyIpList },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePublicIPsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcePublicIPsResponseBody;
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
      body: GetResourcePublicIPsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppRequest extends $tea.Model {
  keySearch?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keySearch: 'KeySearch',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keySearch: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBody extends $tea.Model {
  apps?: ListAppResponseBodyApps[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListAppResponseBodyApps },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppResponseBody;
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
      body: ListAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsRequest extends $tea.Model {
  appId?: string;
  customSessionIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  platformSessionIds?: string[];
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customSessionIds: 'CustomSessionIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platformSessionIds: 'PlatformSessionIds',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customSessionIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      platformSessionIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponseBody extends $tea.Model {
  appSessions?: ListAppSessionsResponseBodyAppSessions[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appSessions: 'AppSessions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSessions: { 'type': 'array', 'itemType': ListAppSessionsResponseBodyAppSessions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppSessionsResponseBody;
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
      body: ListAppSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  versions?: ListAppVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      versions: { 'type': 'array', 'itemType': ListAppVersionResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppVersionResponseBody;
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
      body: ListAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  districtId?: string;
  instanceId?: string[];
  instanceType?: string;
  maxResults?: number;
  nextToken?: string;
  projectId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      districtId: 'DistrictId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppResponseBody;
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
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppVersionRequest extends $tea.Model {
  appVersionId?: string;
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      appVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppVersionResponseBody extends $tea.Model {
  appVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppVersionResponseBody;
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
      body: ModifyAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  districtId?: string;
  expectReleaseSessionCapacity?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      districtId: 'DistrictId',
      expectReleaseSessionCapacity: 'ExpectReleaseSessionCapacity',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      districtId: 'string',
      expectReleaseSessionCapacity: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseCapacityResponseBody;
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
      body: ReleaseCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityByBatchRequest extends $tea.Model {
  resBatchId?: string;
  static names(): { [key: string]: string } {
    return {
      resBatchId: 'ResBatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resBatchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityByBatchResponseBody extends $tea.Model {
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

export class ReleaseCapacityByBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseCapacityByBatchResponseBody;
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
      body: ReleaseCapacityByBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancesRequest extends $tea.Model {
  amount?: number;
  districtId?: string;
  instanceType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      districtId: 'DistrictId',
      instanceType: 'InstanceType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      districtId: 'string',
      instanceType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstancesResponseBody;
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
      body: ReleaseInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveInstancesRequest extends $tea.Model {
  amount?: number;
  districtId?: string;
  instanceType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      districtId: 'DistrictId',
      instanceType: 'InstanceType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      districtId: 'string',
      instanceType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReserveInstancesResponseBody;
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
      body: ReserveInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBizCocChangeCallbackRequest extends $tea.Model {
  platformSessionId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      platformSessionId: 'PlatformSessionId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformSessionId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBizCocChangeCallbackResponseBody extends $tea.Model {
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

export class SendBizCocChangeCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendBizCocChangeCallbackResponseBody;
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
      body: SendBizCocChangeCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionRequest extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  stopParam?: StopAppSessionRequestStopParam[];
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      stopParam: 'StopParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
      stopParam: { 'type': 'array', 'itemType': StopAppSessionRequestStopParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionShrinkRequest extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  stopParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      stopParamShrink: 'StopParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
      stopParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppSessionResponseBody;
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
      body: StopAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  batchId?: string;
  projectId?: string;
  stopParam?: StopAppSessionBatchRequestStopParam[];
  tags?: StopAppSessionBatchRequestTags[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      batchId: 'BatchId',
      projectId: 'ProjectId',
      stopParam: 'StopParam',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      batchId: 'string',
      projectId: 'string',
      stopParam: { 'type': 'array', 'itemType': StopAppSessionBatchRequestStopParam },
      tags: { 'type': 'array', 'itemType': StopAppSessionBatchRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchShrinkRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  batchId?: string;
  projectId?: string;
  stopParamShrink?: string;
  tags?: StopAppSessionBatchShrinkRequestTags[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      batchId: 'BatchId',
      projectId: 'ProjectId',
      stopParamShrink: 'StopParam',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      batchId: 'string',
      projectId: 'string',
      stopParamShrink: 'string',
      tags: { 'type': 'array', 'itemType': StopAppSessionBatchShrinkRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchResponseBody extends $tea.Model {
  appId?: string;
  batchId?: string;
  projectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batchId: 'BatchId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batchId: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppSessionBatchResponseBody;
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
      body: StopAppSessionBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionBizStatusRequest extends $tea.Model {
  bizStatus?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      platformSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionBizStatusResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateSessionBizStatusResponseBodyData;
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
      data: UpdateSessionBizStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionBizStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSessionBizStatusResponseBody;
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
      body: UpdateSessionBizStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckSessionRequestRecords extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  referenceInfo?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      referenceInfo: 'ReferenceInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
      referenceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdaptationRequestAdaptTarget extends $tea.Model {
  bitRate?: number;
  frameRate?: number;
  resolution?: string;
  startProgram?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      startProgram: 'StartProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      frameRate: 'number',
      resolution: 'string',
      startProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionRequestStartParameters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionRequestSystemInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequestAppInfosResultStoreStoreInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequestAppInfosResultStore extends $tea.Model {
  need?: boolean;
  storeInfo?: CreateAppSessionBatchRequestAppInfosResultStoreStoreInfo[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      need: 'Need',
      storeInfo: 'StoreInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      need: 'boolean',
      storeInfo: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfosResultStoreStoreInfo },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequestAppInfosStartParameters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequestAppInfosSystemInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequestAppInfos extends $tea.Model {
  adapterFileId?: string;
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customUserId?: string;
  customerSessionId?: string;
  datasetId?: string;
  districtId?: string;
  projectId?: string;
  resultStore?: CreateAppSessionBatchRequestAppInfosResultStore;
  startParameters?: CreateAppSessionBatchRequestAppInfosStartParameters[];
  systemInfo?: CreateAppSessionBatchRequestAppInfosSystemInfo[];
  static names(): { [key: string]: string } {
    return {
      adapterFileId: 'AdapterFileId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customUserId: 'CustomUserId',
      customerSessionId: 'CustomerSessionId',
      datasetId: 'DatasetId',
      districtId: 'DistrictId',
      projectId: 'ProjectId',
      resultStore: 'ResultStore',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adapterFileId: 'string',
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customUserId: 'string',
      customerSessionId: 'string',
      datasetId: 'string',
      districtId: 'string',
      projectId: 'string',
      resultStore: CreateAppSessionBatchRequestAppInfosResultStore,
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfosStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfosSystemInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequestAppInfosMatchRules extends $tea.Model {
  key?: string;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequestAppInfosStartParameters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequestAppInfosSystemInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequestAppInfosTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncRequestAppInfos extends $tea.Model {
  adapterFileId?: string;
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customUserId?: string;
  customerSessionId?: string;
  districtId?: string;
  matchRules?: CreateAppSessionBatchSyncRequestAppInfosMatchRules[];
  projectId?: string;
  startParameters?: CreateAppSessionBatchSyncRequestAppInfosStartParameters[];
  systemInfo?: CreateAppSessionBatchSyncRequestAppInfosSystemInfo[];
  tags?: CreateAppSessionBatchSyncRequestAppInfosTags[];
  static names(): { [key: string]: string } {
    return {
      adapterFileId: 'AdapterFileId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customUserId: 'CustomUserId',
      customerSessionId: 'CustomerSessionId',
      districtId: 'DistrictId',
      matchRules: 'MatchRules',
      projectId: 'ProjectId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adapterFileId: 'string',
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customUserId: 'string',
      customerSessionId: 'string',
      districtId: 'string',
      matchRules: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncRequestAppInfosMatchRules },
      projectId: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncRequestAppInfosStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncRequestAppInfosSystemInfo },
      tags: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncRequestAppInfosTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBodyFailedListFailedInfo extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBodyFailedList extends $tea.Model {
  appId?: string;
  customSessionId?: string;
  failedInfo?: CreateAppSessionBatchSyncResponseBodyFailedListFailedInfo;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customSessionId: 'CustomSessionId',
      failedInfo: 'FailedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customSessionId: 'string',
      failedInfo: CreateAppSessionBatchSyncResponseBodyFailedListFailedInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBodyResultListBizInfoEndpoints extends $tea.Model {
  accessHost?: string;
  accessPort?: string;
  districtId?: string;
  isp?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessHost: 'AccessHost',
      accessPort: 'AccessPort',
      districtId: 'DistrictId',
      isp: 'Isp',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessHost: 'string',
      accessPort: 'string',
      districtId: 'string',
      isp: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBodyResultListBizInfo extends $tea.Model {
  biz?: { [key: string]: any };
  endpoints?: CreateAppSessionBatchSyncResponseBodyResultListBizInfoEndpoints[];
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endpoints: { 'type': 'array', 'itemType': CreateAppSessionBatchSyncResponseBodyResultListBizInfoEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchSyncResponseBodyResultList extends $tea.Model {
  appId?: string;
  appVersion?: string;
  bizInfo?: CreateAppSessionBatchSyncResponseBodyResultListBizInfo;
  customSessionId?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      bizInfo: 'BizInfo',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      bizInfo: CreateAppSessionBatchSyncResponseBodyResultListBizInfo,
      customSessionId: 'string',
      platformSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncRequestMatchRules extends $tea.Model {
  key?: string;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncRequestStartParameters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncRequestSystemInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncResponseBodyBizInfoEndpoints extends $tea.Model {
  accessHost?: string;
  accessPort?: string;
  districtId?: string;
  isp?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessHost: 'AccessHost',
      accessPort: 'AccessPort',
      districtId: 'DistrictId',
      isp: 'Isp',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessHost: 'string',
      accessPort: 'string',
      districtId: 'string',
      isp: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionSyncResponseBodyBizInfo extends $tea.Model {
  biz?: { [key: string]: any };
  endpoints?: CreateAppSessionSyncResponseBodyBizInfoEndpoints[];
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endpoints: { 'type': 'array', 'itemType': CreateAppSessionSyncResponseBodyBizInfoEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatsInfoResponseBodyData extends $tea.Model {
  districtId?: string;
  instanceType?: string;
  operatingInstanceCount?: number;
  projectId?: string;
  releasingInstanceCount?: number;
  reservingInstanceCount?: number;
  runningInstanceCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      districtId: 'DistrictId',
      instanceType: 'InstanceType',
      operatingInstanceCount: 'OperatingInstanceCount',
      projectId: 'ProjectId',
      releasingInstanceCount: 'ReleasingInstanceCount',
      reservingInstanceCount: 'ReservingInstanceCount',
      runningInstanceCount: 'RunningInstanceCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtId: 'string',
      instanceType: 'string',
      operatingInstanceCount: 'number',
      projectId: 'string',
      releasingInstanceCount: 'number',
      reservingInstanceCount: 'number',
      runningInstanceCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdaptationResponseBodyAdaptTarget extends $tea.Model {
  bitRate?: number;
  frameRate?: number;
  resolution?: string;
  startProgram?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      startProgram: 'StartProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      frameRate: 'number',
      resolution: 'string',
      startProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCcuResponseBodyDetailList extends $tea.Model {
  appId?: string;
  appVersion?: string;
  ccu?: string;
  districtId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      ccu: 'Ccu',
      districtId: 'DistrictId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      ccu: 'string',
      districtId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponseBodyBizInfo extends $tea.Model {
  startTime?: string;
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      stopTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponseBodyCapacities extends $tea.Model {
  appId?: string;
  appVersion?: string;
  districtId?: string;
  projectId?: string;
  sessionCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      districtId: 'DistrictId',
      projectId: 'ProjectId',
      sessionCapacity: 'SessionCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      districtId: 'string',
      projectId: 'string',
      sessionCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveTaskDetailResponseBodyResBatchList extends $tea.Model {
  resBatchId?: string;
  resBatchTagName?: string;
  static names(): { [key: string]: string } {
    return {
      resBatchId: 'ResBatchId',
      resBatchTagName: 'ResBatchTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resBatchId: 'string',
      resBatchTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePublicIPsResponseBodyIpList extends $tea.Model {
  ip?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBodyApps extends $tea.Model {
  appId?: string;
  appName?: string;
  appType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  versionAdaptNum?: number;
  versionTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      versionAdaptNum: 'VersionAdaptNum',
      versionTotalNum: 'VersionTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      versionAdaptNum: 'number',
      versionTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponseBodyAppSessionsBizInfo extends $tea.Model {
  startTime?: string;
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      stopTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponseBodyAppSessions extends $tea.Model {
  appId?: string;
  appVersion?: string;
  bizInfo?: ListAppSessionsResponseBodyAppSessionsBizInfo;
  customSessionId?: string;
  platformSessionId?: string;
  projectId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      bizInfo: 'BizInfo',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      bizInfo: ListAppSessionsResponseBodyAppSessionsBizInfo,
      customSessionId: 'string',
      platformSessionId: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionResponseBodyVersions extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  appVersionName?: string;
  appVersionStatus?: string;
  appVersionStatusMemo?: string;
  consumeCu?: number;
  fileAddress?: string;
  fileSize?: number;
  fileUploadFinishTime?: string;
  fileUploadType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionStatus: 'AppVersionStatus',
      appVersionStatusMemo: 'AppVersionStatusMemo',
      consumeCu: 'ConsumeCu',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadFinishTime: 'FileUploadFinishTime',
      fileUploadType: 'FileUploadType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionStatus: 'string',
      appVersionStatusMemo: 'string',
      consumeCu: 'number',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadFinishTime: 'string',
      fileUploadType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  creationTime?: string;
  districtId?: string;
  instanceId?: string;
  instanceType?: string;
  projectId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      districtId: 'DistrictId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      districtId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionRequestStopParam extends $tea.Model {
  key?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchRequestStopParam extends $tea.Model {
  key?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionBatchShrinkRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSessionBizStatusResponseBodyData extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cgcs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 批量检查异常会话
   *
   * @param tmpReq BatchCheckSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchCheckSessionResponse
   */
  async batchCheckSessionWithOptions(tmpReq: BatchCheckSessionRequest, runtime: $Util.RuntimeOptions): Promise<BatchCheckSessionResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchCheckSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!Util.isUnset(request.recordsShrink)) {
      query["Records"] = request.recordsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCheckSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCheckSessionResponse>(await this.callApi(params, req, runtime), new BatchCheckSessionResponse({}));
  }

  /**
   * @summary 批量检查异常会话
   *
   * @param request BatchCheckSessionRequest
   * @return BatchCheckSessionResponse
   */
  async batchCheckSession(request: BatchCheckSessionRequest): Promise<BatchCheckSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCheckSessionWithOptions(request, runtime);
  }

  /**
   * @summary 取消 session 资源预定任务
   *
   * @param request CancelReserveTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelReserveTaskResponse
   */
  async cancelReserveTaskWithOptions(request: CancelReserveTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelReserveTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelReserveTask",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelReserveTaskResponse>(await this.callApi(params, req, runtime), new CancelReserveTaskResponse({}));
  }

  /**
   * @summary 取消 session 资源预定任务
   *
   * @param request CancelReserveTaskRequest
   * @return CancelReserveTaskResponse
   */
  async cancelReserveTask(request: CancelReserveTaskRequest): Promise<CancelReserveTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelReserveTaskWithOptions(request, runtime);
  }

  /**
   * @summary 提交适配请求
   *
   * @param tmpReq CreateAdaptationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAdaptationResponse
   */
  async createAdaptationWithOptions(tmpReq: CreateAdaptationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAdaptationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAdaptationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.adaptTarget)) {
      request.adaptTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.adaptTarget, "AdaptTarget", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.adaptTargetShrink)) {
      body["AdaptTarget"] = request.adaptTargetShrink;
    }

    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAdaptation",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAdaptationResponse>(await this.callApi(params, req, runtime), new CreateAdaptationResponse({}));
  }

  /**
   * @summary 提交适配请求
   *
   * @param request CreateAdaptationRequest
   * @return CreateAdaptationResponse
   */
  async createAdaptation(request: CreateAdaptationRequest): Promise<CreateAdaptationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAdaptationWithOptions(request, runtime);
  }

  /**
   * @summary 应用创建服务
   *
   * @param request CreateAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.streamingAppId)) {
      body["StreamingAppId"] = request.streamingAppId;
    }

    if (!Util.isUnset(request.streamingSolution)) {
      body["StreamingSolution"] = request.streamingSolution;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2021-11-11",
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
   * @summary 应用创建服务
   *
   * @param request CreateAppRequest
   * @return CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * @summary 增加实时生产资源的相关字段
   *
   * @param request CreateAppSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppSessionResponse
   */
  async createAppSessionWithOptions(request: CreateAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adapterFileId)) {
      query["AdapterFileId"] = request.adapterFileId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.districtId)) {
      query["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.enablePostpaid)) {
      query["EnablePostpaid"] = request.enablePostpaid;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.startParameters)) {
      query["StartParameters"] = request.startParameters;
    }

    if (!Util.isUnset(request.systemInfo)) {
      query["SystemInfo"] = request.systemInfo;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionResponse>(await this.callApi(params, req, runtime), new CreateAppSessionResponse({}));
  }

  /**
   * @summary 增加实时生产资源的相关字段
   *
   * @param request CreateAppSessionRequest
   * @return CreateAppSessionResponse
   */
  async createAppSession(request: CreateAppSessionRequest): Promise<CreateAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionWithOptions(request, runtime);
  }

  /**
   * @summary 批量创建会话
   *
   * @param tmpReq CreateAppSessionBatchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppSessionBatchResponse
   */
  async createAppSessionBatchWithOptions(tmpReq: CreateAppSessionBatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionBatchResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppSessionBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appInfos)) {
      request.appInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInfos, "AppInfos", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appInfosShrink)) {
      query["AppInfos"] = request.appInfosShrink;
    }

    if (!Util.isUnset(request.customTaskId)) {
      query["CustomTaskId"] = request.customTaskId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSessionBatch",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionBatchResponse>(await this.callApi(params, req, runtime), new CreateAppSessionBatchResponse({}));
  }

  /**
   * @summary 批量创建会话
   *
   * @param request CreateAppSessionBatchRequest
   * @return CreateAppSessionBatchResponse
   */
  async createAppSessionBatch(request: CreateAppSessionBatchRequest): Promise<CreateAppSessionBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionBatchWithOptions(request, runtime);
  }

  /**
   * @summary 同步批量创建多个会话
   *
   * @param tmpReq CreateAppSessionBatchSyncRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppSessionBatchSyncResponse
   */
  async createAppSessionBatchSyncWithOptions(tmpReq: CreateAppSessionBatchSyncRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionBatchSyncResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppSessionBatchSyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appInfos)) {
      request.appInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInfos, "AppInfos", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appInfosShrink)) {
      query["AppInfos"] = request.appInfosShrink;
    }

    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSessionBatchSync",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionBatchSyncResponse>(await this.callApi(params, req, runtime), new CreateAppSessionBatchSyncResponse({}));
  }

  /**
   * @summary 同步批量创建多个会话
   *
   * @param request CreateAppSessionBatchSyncRequest
   * @return CreateAppSessionBatchSyncResponse
   */
  async createAppSessionBatchSync(request: CreateAppSessionBatchSyncRequest): Promise<CreateAppSessionBatchSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionBatchSyncWithOptions(request, runtime);
  }

  /**
   * @summary 同步创建会话
   *
   * @param request CreateAppSessionSyncRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppSessionSyncResponse
   */
  async createAppSessionSyncWithOptions(request: CreateAppSessionSyncRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adapterFileId)) {
      query["AdapterFileId"] = request.adapterFileId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.districtId)) {
      query["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.matchRules)) {
      query["MatchRules"] = request.matchRules;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.startParameters)) {
      query["StartParameters"] = request.startParameters;
    }

    if (!Util.isUnset(request.systemInfo)) {
      query["SystemInfo"] = request.systemInfo;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSessionSync",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionSyncResponse>(await this.callApi(params, req, runtime), new CreateAppSessionSyncResponse({}));
  }

  /**
   * @summary 同步创建会话
   *
   * @param request CreateAppSessionSyncRequest
   * @return CreateAppSessionSyncResponse
   */
  async createAppSessionSync(request: CreateAppSessionSyncRequest): Promise<CreateAppSessionSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionSyncWithOptions(request, runtime);
  }

  /**
   * @summary 应用版本创建服务
   *
   * @param request CreateAppVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAppVersionResponse
   */
  async createAppVersionWithOptions(request: CreateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppVersionResponse>(await this.callApi(params, req, runtime), new CreateAppVersionResponse({}));
  }

  /**
   * @summary 应用版本创建服务
   *
   * @param request CreateAppVersionRequest
   * @return CreateAppVersionResponse
   */
  async createAppVersion(request: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionWithOptions(request, runtime);
  }

  /**
   * @summary 预定session资源
   *
   * @param request CreateCapacityReservationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCapacityReservationResponse
   */
  async createCapacityReservationWithOptions(request: CreateCapacityReservationRequest, runtime: $Util.RuntimeOptions): Promise<CreateCapacityReservationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.districtId)) {
      body["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.expectResourceReadyTime)) {
      body["ExpectResourceReadyTime"] = request.expectResourceReadyTime;
    }

    if (!Util.isUnset(request.expectSessionCapacity)) {
      body["ExpectSessionCapacity"] = request.expectSessionCapacity;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCapacityReservation",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCapacityReservationResponse>(await this.callApi(params, req, runtime), new CreateCapacityReservationResponse({}));
  }

  /**
   * @summary 预定session资源
   *
   * @param request CreateCapacityReservationRequest
   * @return CreateCapacityReservationResponse
   */
  async createCapacityReservation(request: CreateCapacityReservationRequest): Promise<CreateCapacityReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCapacityReservationWithOptions(request, runtime);
  }

  /**
   * @summary 应用删除接口
   *
   * @param request DeleteAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAppResponse
   */
  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2021-11-11",
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
   * @summary 应用删除接口
   *
   * @param request DeleteAppRequest
   * @return DeleteAppResponse
   */
  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * @summary 应用版本删除接口
   *
   * @param request DeleteAppVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAppVersionResponse
   */
  async deleteAppVersionWithOptions(request: DeleteAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppVersionResponse>(await this.callApi(params, req, runtime), new DeleteAppVersionResponse({}));
  }

  /**
   * @summary 应用版本删除接口
   *
   * @param request DeleteAppVersionRequest
   * @return DeleteAppVersionResponse
   */
  async deleteAppVersion(request: DeleteAppVersionRequest): Promise<DeleteAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppVersionWithOptions(request, runtime);
  }

  /**
   * @param request DescribeInstanceStatsInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceStatsInfoResponse
   */
  async describeInstanceStatsInfoWithOptions(request: DescribeInstanceStatsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatsInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceStatsInfo",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceStatsInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStatsInfoResponse({}));
  }

  /**
   * @param request DescribeInstanceStatsInfoRequest
   * @return DescribeInstanceStatsInfoResponse
   */
  async describeInstanceStatsInfo(request: DescribeInstanceStatsInfoRequest): Promise<DescribeInstanceStatsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatsInfoWithOptions(request, runtime);
  }

  /**
   * @summary 获取适配申请详情
   *
   * @param request GetAdaptationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAdaptationResponse
   */
  async getAdaptationWithOptions(request: GetAdaptationRequest, runtime: $Util.RuntimeOptions): Promise<GetAdaptationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.adaptApplyId)) {
      body["AdaptApplyId"] = request.adaptApplyId;
    }

    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAdaptation",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdaptationResponse>(await this.callApi(params, req, runtime), new GetAdaptationResponse({}));
  }

  /**
   * @summary 获取适配申请详情
   *
   * @param request GetAdaptationRequest
   * @return GetAdaptationResponse
   */
  async getAdaptation(request: GetAdaptationRequest): Promise<GetAdaptationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdaptationWithOptions(request, runtime);
  }

  /**
   * @summary 应用详情接口
   *
   * @param request GetAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAppResponse
   */
  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  /**
   * @summary 应用详情接口
   *
   * @param request GetAppRequest
   * @return GetAppResponse
   */
  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  /**
   * @summary 查询会话并发数
   *
   * @param request GetAppCcuRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAppCcuResponse
   */
  async getAppCcuWithOptions(request: GetAppCcuRequest, runtime: $Util.RuntimeOptions): Promise<GetAppCcuResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppCcu",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppCcuResponse>(await this.callApi(params, req, runtime), new GetAppCcuResponse({}));
  }

  /**
   * @summary 查询会话并发数
   *
   * @param request GetAppCcuRequest
   * @return GetAppCcuResponse
   */
  async getAppCcu(request: GetAppCcuRequest): Promise<GetAppCcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppCcuWithOptions(request, runtime);
  }

  /**
   * @summary 获取App会话信息
   *
   * @param request GetAppSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAppSessionResponse
   */
  async getAppSessionWithOptions(request: GetAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<GetAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppSessionResponse>(await this.callApi(params, req, runtime), new GetAppSessionResponse({}));
  }

  /**
   * @summary 获取App会话信息
   *
   * @param request GetAppSessionRequest
   * @return GetAppSessionResponse
   */
  async getAppSession(request: GetAppSessionRequest): Promise<GetAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSessionWithOptions(request, runtime);
  }

  /**
   * @summary 应用版本详情接口
   *
   * @param request GetAppVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAppVersionResponse
   */
  async getAppVersionWithOptions(request: GetAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAppVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppVersionResponse>(await this.callApi(params, req, runtime), new GetAppVersionResponse({}));
  }

  /**
   * @summary 应用版本详情接口
   *
   * @param request GetAppVersionRequest
   * @return GetAppVersionResponse
   */
  async getAppVersion(request: GetAppVersionRequest): Promise<GetAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppVersionWithOptions(request, runtime);
  }

  /**
   * @summary 查询 session 会话容量信息
   *
   * @param request GetCapacityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCapacityResponse
   */
  async getCapacityWithOptions(request: GetCapacityRequest, runtime: $Util.RuntimeOptions): Promise<GetCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.districtId)) {
      body["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCapacity",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCapacityResponse>(await this.callApi(params, req, runtime), new GetCapacityResponse({}));
  }

  /**
   * @summary 查询 session 会话容量信息
   *
   * @param request GetCapacityRequest
   * @return GetCapacityResponse
   */
  async getCapacity(request: GetCapacityRequest): Promise<GetCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

  /**
   * @summary 查询预定任务的详情信息
   *
   * @param request GetReserveTaskDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetReserveTaskDetailResponse
   */
  async getReserveTaskDetailWithOptions(request: GetReserveTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetReserveTaskDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetReserveTaskDetail",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetReserveTaskDetailResponse>(await this.callApi(params, req, runtime), new GetReserveTaskDetailResponse({}));
  }

  /**
   * @summary 查询预定任务的详情信息
   *
   * @param request GetReserveTaskDetailRequest
   * @return GetReserveTaskDetailResponse
   */
  async getReserveTaskDetail(request: GetReserveTaskDetailRequest): Promise<GetReserveTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReserveTaskDetailWithOptions(request, runtime);
  }

  /**
   * @summary 查询公网ip
   *
   * @param request GetResourcePublicIPsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourcePublicIPsResponse
   */
  async getResourcePublicIPsWithOptions(request: GetResourcePublicIPsRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePublicIPsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePublicIPs",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePublicIPsResponse>(await this.callApi(params, req, runtime), new GetResourcePublicIPsResponse({}));
  }

  /**
   * @summary 查询公网ip
   *
   * @param request GetResourcePublicIPsRequest
   * @return GetResourcePublicIPsResponse
   */
  async getResourcePublicIPs(request: GetResourcePublicIPsRequest): Promise<GetResourcePublicIPsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePublicIPsWithOptions(request, runtime);
  }

  /**
   * @summary 应用列表接口
   *
   * @param request ListAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppResponse
   */
  async listAppWithOptions(request: ListAppRequest, runtime: $Util.RuntimeOptions): Promise<ListAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keySearch)) {
      body["KeySearch"] = request.keySearch;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListApp",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppResponse>(await this.callApi(params, req, runtime), new ListAppResponse({}));
  }

  /**
   * @summary 应用列表接口
   *
   * @param request ListAppRequest
   * @return ListAppResponse
   */
  async listApp(request: ListAppRequest): Promise<ListAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppWithOptions(request, runtime);
  }

  /**
   * @summary 查询App会话
   *
   * @param request ListAppSessionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppSessionsResponse
   */
  async listAppSessionsWithOptions(request: ListAppSessionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.customSessionIds)) {
      query["CustomSessionIds"] = request.customSessionIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platformSessionIds)) {
      query["PlatformSessionIds"] = request.platformSessionIds;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppSessions",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppSessionsResponse>(await this.callApi(params, req, runtime), new ListAppSessionsResponse({}));
  }

  /**
   * @summary 查询App会话
   *
   * @param request ListAppSessionsRequest
   * @return ListAppSessionsResponse
   */
  async listAppSessions(request: ListAppSessionsRequest): Promise<ListAppSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSessionsWithOptions(request, runtime);
  }

  /**
   * @summary 应用版本列表接口
   *
   * @param request ListAppVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppVersionResponse
   */
  async listAppVersionWithOptions(request: ListAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<ListAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppVersionResponse>(await this.callApi(params, req, runtime), new ListAppVersionResponse({}));
  }

  /**
   * @summary 应用版本列表接口
   *
   * @param request ListAppVersionRequest
   * @return ListAppVersionResponse
   */
  async listAppVersion(request: ListAppVersionRequest): Promise<ListAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppVersionWithOptions(request, runtime);
  }

  /**
   * @summary 查询GCS实例列表
   *
   * @param request ListInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @summary 查询GCS实例列表
   *
   * @param request ListInstancesRequest
   * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 应用修改服务
   *
   * @param request ModifyAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAppResponse
   */
  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
  }

  /**
   * @summary 应用修改服务
   *
   * @param request ModifyAppRequest
   * @return ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * @summary 应用版本修改服务
   *
   * @param request ModifyAppVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAppVersionResponse
   */
  async modifyAppVersionWithOptions(request: ModifyAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppVersionResponse>(await this.callApi(params, req, runtime), new ModifyAppVersionResponse({}));
  }

  /**
   * @summary 应用版本修改服务
   *
   * @param request ModifyAppVersionRequest
   * @return ModifyAppVersionResponse
   */
  async modifyAppVersion(request: ModifyAppVersionRequest): Promise<ModifyAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppVersionWithOptions(request, runtime);
  }

  /**
   * @summary 释放 session 资源预定的资源
   *
   * @param request ReleaseCapacityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseCapacityResponse
   */
  async releaseCapacityWithOptions(request: ReleaseCapacityRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.districtId)) {
      body["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.expectReleaseSessionCapacity)) {
      body["ExpectReleaseSessionCapacity"] = request.expectReleaseSessionCapacity;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseCapacity",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseCapacityResponse>(await this.callApi(params, req, runtime), new ReleaseCapacityResponse({}));
  }

  /**
   * @summary 释放 session 资源预定的资源
   *
   * @param request ReleaseCapacityRequest
   * @return ReleaseCapacityResponse
   */
  async releaseCapacity(request: ReleaseCapacityRequest): Promise<ReleaseCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCapacityWithOptions(request, runtime);
  }

  /**
   * @summary 根据资源批次号释放 session 资源预定的资源
   *
   * @param request ReleaseCapacityByBatchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseCapacityByBatchResponse
   */
  async releaseCapacityByBatchWithOptions(request: ReleaseCapacityByBatchRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseCapacityByBatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resBatchId)) {
      body["ResBatchId"] = request.resBatchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseCapacityByBatch",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseCapacityByBatchResponse>(await this.callApi(params, req, runtime), new ReleaseCapacityByBatchResponse({}));
  }

  /**
   * @summary 根据资源批次号释放 session 资源预定的资源
   *
   * @param request ReleaseCapacityByBatchRequest
   * @return ReleaseCapacityByBatchResponse
   */
  async releaseCapacityByBatch(request: ReleaseCapacityByBatchRequest): Promise<ReleaseCapacityByBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCapacityByBatchWithOptions(request, runtime);
  }

  /**
   * @summary 退订GCS实例
   *
   * @param request ReleaseInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseInstancesResponse
   */
  async releaseInstancesWithOptions(request: ReleaseInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.districtId)) {
      body["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstances",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstancesResponse>(await this.callApi(params, req, runtime), new ReleaseInstancesResponse({}));
  }

  /**
   * @summary 退订GCS实例
   *
   * @param request ReleaseInstancesRequest
   * @return ReleaseInstancesResponse
   */
  async releaseInstances(request: ReleaseInstancesRequest): Promise<ReleaseInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 预定GCS实例
   *
   * @param request ReserveInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReserveInstancesResponse
   */
  async reserveInstancesWithOptions(request: ReserveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ReserveInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.districtId)) {
      body["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReserveInstances",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReserveInstancesResponse>(await this.callApi(params, req, runtime), new ReserveInstancesResponse({}));
  }

  /**
   * @summary 预定GCS实例
   *
   * @param request ReserveInstancesRequest
   * @return ReserveInstancesResponse
   */
  async reserveInstances(request: ReserveInstancesRequest): Promise<ReserveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reserveInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 发送业务能力变更结果回调
   *
   * @param request SendBizCocChangeCallbackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendBizCocChangeCallbackResponse
   */
  async sendBizCocChangeCallbackWithOptions(request: SendBizCocChangeCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SendBizCocChangeCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    if (!Util.isUnset(request.result)) {
      query["Result"] = request.result;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendBizCocChangeCallback",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendBizCocChangeCallbackResponse>(await this.callApi(params, req, runtime), new SendBizCocChangeCallbackResponse({}));
  }

  /**
   * @summary 发送业务能力变更结果回调
   *
   * @param request SendBizCocChangeCallbackRequest
   * @return SendBizCocChangeCallbackResponse
   */
  async sendBizCocChangeCallback(request: SendBizCocChangeCallbackRequest): Promise<SendBizCocChangeCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendBizCocChangeCallbackWithOptions(request, runtime);
  }

  /**
   * @summary 停止App会话
   *
   * @param tmpReq StopAppSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAppSessionResponse
   */
  async stopAppSessionWithOptions(tmpReq: StopAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<StopAppSessionResponse> {
    Util.validateModel(tmpReq);
    let request = new StopAppSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.stopParam)) {
      request.stopParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stopParam, "StopParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    if (!Util.isUnset(request.stopParamShrink)) {
      query["StopParam"] = request.stopParamShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAppSessionResponse>(await this.callApi(params, req, runtime), new StopAppSessionResponse({}));
  }

  /**
   * @summary 停止App会话
   *
   * @param request StopAppSessionRequest
   * @return StopAppSessionResponse
   */
  async stopAppSession(request: StopAppSessionRequest): Promise<StopAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppSessionWithOptions(request, runtime);
  }

  /**
   * @summary 批量停止会话接口
   *
   * @param tmpReq StopAppSessionBatchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAppSessionBatchResponse
   */
  async stopAppSessionBatchWithOptions(tmpReq: StopAppSessionBatchRequest, runtime: $Util.RuntimeOptions): Promise<StopAppSessionBatchResponse> {
    Util.validateModel(tmpReq);
    let request = new StopAppSessionBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.stopParam)) {
      request.stopParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stopParam, "StopParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.stopParamShrink)) {
      query["StopParam"] = request.stopParamShrink;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAppSessionBatch",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAppSessionBatchResponse>(await this.callApi(params, req, runtime), new StopAppSessionBatchResponse({}));
  }

  /**
   * @summary 批量停止会话接口
   *
   * @param request StopAppSessionBatchRequest
   * @return StopAppSessionBatchResponse
   */
  async stopAppSessionBatch(request: StopAppSessionBatchRequest): Promise<StopAppSessionBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppSessionBatchWithOptions(request, runtime);
  }

  /**
   * @summary 更新会话状态
   *
   * @param request UpdateSessionBizStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSessionBizStatusResponse
   */
  async updateSessionBizStatusWithOptions(request: UpdateSessionBizStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSessionBizStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizStatus)) {
      query["BizStatus"] = request.bizStatus;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSessionBizStatus",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSessionBizStatusResponse>(await this.callApi(params, req, runtime), new UpdateSessionBizStatusResponse({}));
  }

  /**
   * @summary 更新会话状态
   *
   * @param request UpdateSessionBizStatusRequest
   * @return UpdateSessionBizStatusResponse
   */
  async updateSessionBizStatus(request: UpdateSessionBizStatusRequest): Promise<UpdateSessionBizStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSessionBizStatusWithOptions(request, runtime);
  }

}

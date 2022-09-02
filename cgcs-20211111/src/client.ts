// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelReserveTaskResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAdaptationResponseBody;
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
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
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
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  enablePostpaid?: boolean;
  projectId?: string;
  startParameters?: CreateAppSessionRequestStartParameters[];
  systemInfo?: CreateAppSessionRequestSystemInfo[];
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      enablePostpaid: 'EnablePostpaid',
      projectId: 'ProjectId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customSessionId: 'string',
      customUserId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppSessionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppSessionBatchSyncResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppSessionSyncResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCapacityReservationResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAdaptationResponseBody;
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
      versionAdaptNum: 'number',
      versionTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppCcuResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppSessionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCapacityResponseBody;
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
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetReserveTaskDetailResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourcePublicIPsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppResponseBody;
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customSessionIds: 'CustomSessionIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platformSessionIds: 'PlatformSessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customSessionIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      platformSessionIds: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppSessionsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseCapacityResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StopAppSessionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StopAppSessionBatchResponseBody;
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
  ccu?: string;
  districtId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ccu: 'Ccu',
      districtId: 'DistrictId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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
  sessionCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      districtId: 'DistrictId',
      sessionCapacity: 'SessionCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      districtId: 'string',
      sessionCapacity: 'number',
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      bizInfo: 'BizInfo',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
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

  async cancelReserveTask(request: CancelReserveTaskRequest): Promise<CancelReserveTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelReserveTaskWithOptions(request, runtime);
  }

  async createAdaptationWithOptions(tmpReq: CreateAdaptationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAdaptationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAdaptationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.adaptTarget))) {
      request.adaptTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.adaptTarget), "AdaptTarget", "json");
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

  async createAdaptation(request: CreateAdaptationRequest): Promise<CreateAdaptationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAdaptationWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
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

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createAppSessionWithOptions(request: CreateAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
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

  async createAppSession(request: CreateAppSessionRequest): Promise<CreateAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionWithOptions(request, runtime);
  }

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

  async createAppSessionBatchSync(request: CreateAppSessionBatchSyncRequest): Promise<CreateAppSessionBatchSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionBatchSyncWithOptions(request, runtime);
  }

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

  async createAppSessionSync(request: CreateAppSessionSyncRequest): Promise<CreateAppSessionSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionSyncWithOptions(request, runtime);
  }

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

  async createAppVersion(request: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionWithOptions(request, runtime);
  }

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

  async createCapacityReservation(request: CreateCapacityReservationRequest): Promise<CreateCapacityReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCapacityReservationWithOptions(request, runtime);
  }

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

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

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

  async deleteAppVersion(request: DeleteAppVersionRequest): Promise<DeleteAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppVersionWithOptions(request, runtime);
  }

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

  async getAdaptation(request: GetAdaptationRequest): Promise<GetAdaptationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdaptationWithOptions(request, runtime);
  }

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

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

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

  async getAppCcu(request: GetAppCcuRequest): Promise<GetAppCcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppCcuWithOptions(request, runtime);
  }

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

  async getAppSession(request: GetAppSessionRequest): Promise<GetAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSessionWithOptions(request, runtime);
  }

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

  async getAppVersion(request: GetAppVersionRequest): Promise<GetAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppVersionWithOptions(request, runtime);
  }

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

  async getCapacity(request: GetCapacityRequest): Promise<GetCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

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

  async getReserveTaskDetail(request: GetReserveTaskDetailRequest): Promise<GetReserveTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReserveTaskDetailWithOptions(request, runtime);
  }

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

  async getResourcePublicIPs(request: GetResourcePublicIPsRequest): Promise<GetResourcePublicIPsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePublicIPsWithOptions(request, runtime);
  }

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

  async listApp(request: ListAppRequest): Promise<ListAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppWithOptions(request, runtime);
  }

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

  async listAppSessions(request: ListAppSessionsRequest): Promise<ListAppSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSessionsWithOptions(request, runtime);
  }

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

  async listAppVersion(request: ListAppVersionRequest): Promise<ListAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppVersionWithOptions(request, runtime);
  }

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

  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

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

  async modifyAppVersion(request: ModifyAppVersionRequest): Promise<ModifyAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppVersionWithOptions(request, runtime);
  }

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

  async releaseCapacity(request: ReleaseCapacityRequest): Promise<ReleaseCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCapacityWithOptions(request, runtime);
  }

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

  async stopAppSession(request: StopAppSessionRequest): Promise<StopAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppSessionWithOptions(request, runtime);
  }

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

  async stopAppSessionBatch(request: StopAppSessionBatchRequest): Promise<StopAppSessionBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppSessionBatchWithOptions(request, runtime);
  }

}

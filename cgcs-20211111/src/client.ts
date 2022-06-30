// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      httpCode: 'number',
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
  datasetId?: string;
  enablePostpaid?: boolean;
  resultStore?: CreateAppSessionRequestResultStore;
  startParameters?: CreateAppSessionRequestStartParameters[];
  startParametersV2?: CreateAppSessionRequestStartParametersV2[];
  systemInfo?: CreateAppSessionRequestSystemInfo[];
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      datasetId: 'DatasetId',
      enablePostpaid: 'EnablePostpaid',
      resultStore: 'ResultStore',
      startParameters: 'StartParameters',
      startParametersV2: 'StartParametersV2',
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
      datasetId: 'string',
      enablePostpaid: 'boolean',
      resultStore: CreateAppSessionRequestResultStore,
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionRequestStartParameters },
      startParametersV2: { 'type': 'array', 'itemType': CreateAppSessionRequestStartParametersV2 },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionRequestSystemInfo },
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionShrinkRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  datasetId?: string;
  enablePostpaid?: boolean;
  resultStoreShrink?: string;
  startParameters?: CreateAppSessionShrinkRequestStartParameters[];
  startParametersV2Shrink?: string;
  systemInfo?: CreateAppSessionShrinkRequestSystemInfo[];
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      datasetId: 'DatasetId',
      enablePostpaid: 'EnablePostpaid',
      resultStoreShrink: 'ResultStore',
      startParameters: 'StartParameters',
      startParametersV2Shrink: 'StartParametersV2',
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
      datasetId: 'string',
      enablePostpaid: 'boolean',
      resultStoreShrink: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionShrinkRequestStartParameters },
      startParametersV2Shrink: 'string',
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionShrinkRequestSystemInfo },
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

export class CreateAppSessionSyncRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  districtId?: string;
  projectId?: string;
  speedInfo?: CreateAppSessionSyncRequestSpeedInfo[];
  startParameters?: CreateAppSessionSyncRequestStartParameters[];
  systemInfo?: CreateAppSessionSyncRequestSystemInfo[];
  tags?: CreateAppSessionSyncRequestTags[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      districtId: 'DistrictId',
      projectId: 'ProjectId',
      speedInfo: 'SpeedInfo',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customSessionId: 'string',
      customUserId: 'string',
      districtId: 'string',
      projectId: 'string',
      speedInfo: { 'type': 'array', 'itemType': CreateAppSessionSyncRequestSpeedInfo },
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateDatasetDeployTaskRequest extends $tea.Model {
  clientToken?: string;
  customParam?: string;
  needUnzip?: boolean;
  ossBucket?: string;
  ossFilePath?: string;
  ossRegionId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      customParam: 'CustomParam',
      needUnzip: 'NeedUnzip',
      ossBucket: 'OssBucket',
      ossFilePath: 'OssFilePath',
      ossRegionId: 'OssRegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      customParam: 'string',
      needUnzip: 'boolean',
      ossBucket: 'string',
      ossFilePath: 'string',
      ossRegionId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetDeployTaskResponseBody extends $tea.Model {
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

export class CreateDatasetDeployTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatasetDeployTaskResponseBody;
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
      body: CreateDatasetDeployTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  boundAppIdList?: string[];
  operatorId?: string;
  operatorType?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimit?: CreateProjectRequestProjectQuotaLimit;
  static names(): { [key: string]: string } {
    return {
      boundAppIdList: 'BoundAppIdList',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimit: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppIdList: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
      operatorType: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimit: CreateProjectRequestProjectQuotaLimit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectShrinkRequest extends $tea.Model {
  boundAppIdListShrink?: string;
  operatorId?: string;
  operatorType?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimitShrink?: string;
  static names(): { [key: string]: string } {
    return {
      boundAppIdListShrink: 'BoundAppIdList',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimitShrink: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppIdListShrink: 'string',
      operatorId: 'string',
      operatorType: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimitShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProjectResponseBodyData;
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
      data: CreateProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
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
      body: CreateProjectResponseBody,
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      httpCode: 'number',
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class DeleteProjectRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteProjectResponseBodyData;
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
      data: DeleteProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProjectResponseBody;
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
      body: DeleteProjectResponseBody,
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
  code?: string;
  gmtCreate?: string;
  gmtModified?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      adaptTarget: 'AdaptTarget',
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      adaptTarget: GetAdaptationResponseBodyAdaptTarget,
      appId: 'string',
      appVersionId: 'string',
      code: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  gmtCreate?: string;
  gmtModified?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  versionAdaptNum?: number;
  versionTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      versionAdaptNum: 'VersionAdaptNum',
      versionTotalNum: 'VersionTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      code: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  bizInfo?: GetAppSessionResponseBodyBizInfo[];
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
      bizInfo: { 'type': 'array', 'itemType': GetAppSessionResponseBodyBizInfo },
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
  code?: string;
  consumeCu?: number;
  fileAddress?: string;
  fileSize?: number;
  fileUploadFinishTime?: string;
  fileUploadType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionStatus: 'AppVersionStatus',
      appVersionStatusMemo: 'AppVersionStatusMemo',
      code: 'Code',
      consumeCu: 'ConsumeCu',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadFinishTime: 'FileUploadFinishTime',
      fileUploadType: 'FileUploadType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionStatus: 'string',
      appVersionStatusMemo: 'string',
      code: 'string',
      consumeCu: 'number',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadFinishTime: 'string',
      fileUploadType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetDatasetRequest extends $tea.Model {
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  customParam?: string;
  datasetId?: string;
  datasetSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customParam: 'CustomParam',
      datasetId: 'DatasetId',
      datasetSize: 'DatasetSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customParam: 'string',
      datasetId: 'string',
      datasetSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDatasetResponseBody;
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
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  code?: string;
  data?: GetProjectResponseBodyData;
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
      data: GetProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectResponseBody;
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
      body: GetProjectResponseBody,
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListAppResponseBodyApps },
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  versions?: ListAppVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ModifyProjectRequest extends $tea.Model {
  boundAppIdList?: string[];
  operatorId?: string;
  operatorType?: string;
  projectId?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimit?: ModifyProjectRequestProjectQuotaLimit;
  static names(): { [key: string]: string } {
    return {
      boundAppIdList: 'BoundAppIdList',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimit: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppIdList: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
      operatorType: 'string',
      projectId: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimit: ModifyProjectRequestProjectQuotaLimit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectShrinkRequest extends $tea.Model {
  boundAppIdListShrink?: string;
  operatorId?: string;
  operatorType?: string;
  projectId?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimitShrink?: string;
  static names(): { [key: string]: string } {
    return {
      boundAppIdListShrink: 'BoundAppIdList',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimitShrink: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppIdListShrink: 'string',
      operatorId: 'string',
      operatorType: 'string',
      projectId: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimitShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectResponseBody extends $tea.Model {
  code?: string;
  data?: ModifyProjectResponseBodyData;
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
      data: ModifyProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyProjectResponseBody;
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
      body: ModifyProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectRequest extends $tea.Model {
  keySearch?: string;
  operatorId?: string;
  operatorType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keySearch: 'KeySearch',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keySearch: 'string',
      operatorId: 'string',
      operatorType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PageQueryProjectResponseBodyData;
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
      data: PageQueryProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PageQueryProjectResponseBody;
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
      body: PageQueryProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectAppsRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectAppsResponseBody extends $tea.Model {
  code?: string;
  data?: PageQueryProjectAppsResponseBodyData;
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
      data: PageQueryProjectAppsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PageQueryProjectAppsResponseBody;
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
      body: PageQueryProjectAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfflineTaskProgressRequest extends $tea.Model {
  appId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfflineTaskProgressResponseBody extends $tea.Model {
  code?: string;
  data?: QueryOfflineTaskProgressResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryOfflineTaskProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfflineTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOfflineTaskProgressResponseBody;
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
      body: QueryOfflineTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDistrictMetaResponseBody extends $tea.Model {
  code?: string;
  data?: RefreshDistrictMetaResponseBodyData;
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
      data: RefreshDistrictMetaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDistrictMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshDistrictMetaResponseBody;
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
      body: RefreshDistrictMetaResponseBody,
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

export class SubmitOfflineTaskRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  appType?: string;
  env?: string;
  uri?: string;
  versionId?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      env: 'Env',
      uri: 'Uri',
      versionId: 'VersionId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      env: 'string',
      uri: 'string',
      versionId: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOfflineTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOfflineTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitOfflineTaskResponseBody;
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
      body: SubmitOfflineTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectQuotaLimitDistrictLimitMapValue extends $tea.Model {
  districtId?: string;
  districtName?: string;
  maxLimit?: number;
  static names(): { [key: string]: string } {
    return {
      districtId: 'DistrictId',
      districtName: 'DistrictName',
      maxLimit: 'MaxLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtId: 'string',
      districtName: 'string',
      maxLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataProjectQuotaLimitDistrictLimitMapValue extends $tea.Model {
  districtId?: string;
  districtName?: string;
  maxLimit?: number;
  static names(): { [key: string]: string } {
    return {
      districtId: 'DistrictId',
      districtName: 'DistrictName',
      maxLimit: 'MaxLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtId: 'string',
      districtName: 'string',
      maxLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRecordsProjectQuotaLimitDistrictLimitMapValue extends $tea.Model {
  districtId?: string;
  districtName?: string;
  maxLimit?: number;
  static names(): { [key: string]: string } {
    return {
      districtId: 'DistrictId',
      districtName: 'DistrictName',
      maxLimit: 'MaxLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtId: 'string',
      districtName: 'string',
      maxLimit: 'number',
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

export class CreateAppSessionRequestResultStoreStoreInfo extends $tea.Model {
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

export class CreateAppSessionRequestResultStore extends $tea.Model {
  need?: boolean;
  storeInfo?: CreateAppSessionRequestResultStoreStoreInfo[];
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
      storeInfo: { 'type': 'array', 'itemType': CreateAppSessionRequestResultStoreStoreInfo },
      type: 'string',
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

export class CreateAppSessionRequestStartParametersV2 extends $tea.Model {
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

export class CreateAppSessionShrinkRequestStartParameters extends $tea.Model {
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

export class CreateAppSessionShrinkRequestSystemInfo extends $tea.Model {
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

export class CreateAppSessionSyncRequestSpeedInfo extends $tea.Model {
  endpointId?: number;
  rtt?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
      rtt: 'rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'number',
      rtt: 'number',
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
      key: 'key',
      value: 'value',
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

export class CreateAppSessionSyncResponseBodyBizInfoBiz extends $tea.Model {
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
  biz?: CreateAppSessionSyncResponseBodyBizInfoBiz[];
  endpoints?: CreateAppSessionSyncResponseBodyBizInfoEndpoints[];
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: { 'type': 'array', 'itemType': CreateAppSessionSyncResponseBodyBizInfoBiz },
      endpoints: { 'type': 'array', 'itemType': CreateAppSessionSyncResponseBodyBizInfoEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestProjectQuotaLimit extends $tea.Model {
  districtLimitMap?: { [key: string]: ProjectQuotaLimitDistrictLimitMapValue };
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      districtLimitMap: 'DistrictLimitMap',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtLimitMap: { 'type': 'map', 'keyType': 'string', 'valueType': ProjectQuotaLimitDistrictLimitMapValue },
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyData extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  message?: string;
  projectId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      projectId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBodyData extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
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

export class GetAppSessionResponseBodyBizInfo extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class GetProjectResponseBodyDataProjectQuotaLimit extends $tea.Model {
  districtLimitMap?: { [key: string]: DataProjectQuotaLimitDistrictLimitMapValue };
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      districtLimitMap: 'DistrictLimitMap',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtLimitMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataProjectQuotaLimitDistrictLimitMapValue },
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $tea.Model {
  boundAppNums?: number;
  gmtCreate?: string;
  gmtModified?: string;
  projectId?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimit?: GetProjectResponseBodyDataProjectQuotaLimit;
  static names(): { [key: string]: string } {
    return {
      boundAppNums: 'BoundAppNums',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      projectId: 'ProjectId',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimit: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppNums: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      projectId: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimit: GetProjectResponseBodyDataProjectQuotaLimit,
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
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListAppSessionsResponseBodyAppSessions extends $tea.Model {
  appId?: string;
  appVersion?: string;
  bizInfo?: ListAppSessionsResponseBodyAppSessionsBizInfo[];
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
      bizInfo: { 'type': 'array', 'itemType': ListAppSessionsResponseBodyAppSessionsBizInfo },
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
  tenantId?: number;
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
      tenantId: 'TenantId',
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
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectRequestProjectQuotaLimit extends $tea.Model {
  districtLimitMap?: { [key: string]: ProjectQuotaLimitDistrictLimitMapValue };
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      districtLimitMap: 'DistrictLimitMap',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtLimitMap: { 'type': 'map', 'keyType': 'string', 'valueType': ProjectQuotaLimitDistrictLimitMapValue },
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectResponseBodyData extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectResponseBodyDataRecordsProjectQuotaLimit extends $tea.Model {
  districtLimitMap?: { [key: string]: DataRecordsProjectQuotaLimitDistrictLimitMapValue };
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      districtLimitMap: 'DistrictLimitMap',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtLimitMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataRecordsProjectQuotaLimitDistrictLimitMapValue },
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectResponseBodyDataRecords extends $tea.Model {
  boundAppNums?: number;
  gmtCreate?: string;
  gmtModified?: string;
  projectId?: string;
  projectMemo?: string;
  projectName?: string;
  projectQuotaLimit?: PageQueryProjectResponseBodyDataRecordsProjectQuotaLimit;
  static names(): { [key: string]: string } {
    return {
      boundAppNums: 'BoundAppNums',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      projectId: 'ProjectId',
      projectMemo: 'ProjectMemo',
      projectName: 'ProjectName',
      projectQuotaLimit: 'ProjectQuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAppNums: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      projectId: 'string',
      projectMemo: 'string',
      projectName: 'string',
      projectQuotaLimit: PageQueryProjectResponseBodyDataRecordsProjectQuotaLimit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pages?: number;
  records?: PageQueryProjectResponseBodyDataRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': PageQueryProjectResponseBodyDataRecords },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectAppsResponseBodyDataRecords extends $tea.Model {
  appId?: string;
  appName?: string;
  gmtCreate?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      gmtCreate: 'GmtCreate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      gmtCreate: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryProjectAppsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pages?: number;
  records?: PageQueryProjectAppsResponseBodyDataRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': PageQueryProjectAppsResponseBodyDataRecords },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfflineTaskProgressResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  progress?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      progress: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDistrictMetaResponseBodyDataProjectQuotaLimit extends $tea.Model {
  districtLimitMap?: { [key: string]: DataProjectQuotaLimitDistrictLimitMapValue };
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      districtLimitMap: 'DistrictLimitMap',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtLimitMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataProjectQuotaLimitDistrictLimitMapValue },
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDistrictMetaResponseBodyData extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  message?: string;
  projectQuotaLimit?: RefreshDistrictMetaResponseBodyDataProjectQuotaLimit;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      projectQuotaLimit: 'ProjectQuotaLimit',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      projectQuotaLimit: RefreshDistrictMetaResponseBodyDataProjectQuotaLimit,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionRequestStopParam extends $tea.Model {
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

  async createAppSessionWithOptions(tmpReq: CreateAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.resultStore))) {
      request.resultStoreShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.resultStore), "ResultStore", "json");
    }

    if (!Util.isUnset(tmpReq.startParametersV2)) {
      request.startParametersV2Shrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startParametersV2, "StartParametersV2", "json");
    }

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

    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.enablePostpaid)) {
      query["EnablePostpaid"] = request.enablePostpaid;
    }

    if (!Util.isUnset(request.resultStoreShrink)) {
      query["ResultStore"] = request.resultStoreShrink;
    }

    if (!Util.isUnset(request.startParameters)) {
      query["StartParameters"] = request.startParameters;
    }

    if (!Util.isUnset(request.startParametersV2Shrink)) {
      query["StartParametersV2"] = request.startParametersV2Shrink;
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

  async createAppSessionSyncWithOptions(request: CreateAppSessionSyncRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionSyncResponse> {
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

    if (!Util.isUnset(request.districtId)) {
      query["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.speedInfo)) {
      query["SpeedInfo"] = request.speedInfo;
    }

    if (!Util.isUnset(request.startParameters)) {
      query["StartParameters"] = request.startParameters;
    }

    if (!Util.isUnset(request.systemInfo)) {
      query["SystemInfo"] = request.systemInfo;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
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
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.districtId)) {
      query["DistrictId"] = request.districtId;
    }

    if (!Util.isUnset(request.expectResourceReadyTime)) {
      query["ExpectResourceReadyTime"] = request.expectResourceReadyTime;
    }

    if (!Util.isUnset(request.expectSessionCapacity)) {
      query["ExpectSessionCapacity"] = request.expectSessionCapacity;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async createDatasetDeployTaskWithOptions(request: CreateDatasetDeployTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetDeployTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.customParam)) {
      query["CustomParam"] = request.customParam;
    }

    if (!Util.isUnset(request.needUnzip)) {
      query["NeedUnzip"] = request.needUnzip;
    }

    if (!Util.isUnset(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossFilePath)) {
      query["OssFilePath"] = request.ossFilePath;
    }

    if (!Util.isUnset(request.ossRegionId)) {
      query["OssRegionId"] = request.ossRegionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasetDeployTask",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetDeployTaskResponse>(await this.callApi(params, req, runtime), new CreateDatasetDeployTaskResponse({}));
  }

  async createDatasetDeployTask(request: CreateDatasetDeployTaskRequest): Promise<CreateDatasetDeployTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetDeployTaskWithOptions(request, runtime);
  }

  async createProjectWithOptions(tmpReq: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.boundAppIdList)) {
      request.boundAppIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.boundAppIdList, "BoundAppIdList", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.projectQuotaLimit))) {
      request.projectQuotaLimitShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.projectQuotaLimit), "ProjectQuotaLimit", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boundAppIdListShrink)) {
      body["BoundAppIdList"] = request.boundAppIdListShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.projectMemo)) {
      body["ProjectMemo"] = request.projectMemo;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.projectQuotaLimitShrink)) {
      body["ProjectQuotaLimit"] = request.projectQuotaLimitShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
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

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
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

  async getDatasetWithOptions(request: GetDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
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

  async modifyProjectWithOptions(tmpReq: ModifyProjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.boundAppIdList)) {
      request.boundAppIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.boundAppIdList, "BoundAppIdList", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.projectQuotaLimit))) {
      request.projectQuotaLimitShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.projectQuotaLimit), "ProjectQuotaLimit", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boundAppIdListShrink)) {
      body["BoundAppIdList"] = request.boundAppIdListShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectMemo)) {
      body["ProjectMemo"] = request.projectMemo;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.projectQuotaLimitShrink)) {
      body["ProjectQuotaLimit"] = request.projectQuotaLimitShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProject",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProjectResponse>(await this.callApi(params, req, runtime), new ModifyProjectResponse({}));
  }

  async modifyProject(request: ModifyProjectRequest): Promise<ModifyProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProjectWithOptions(request, runtime);
  }

  async pageQueryProjectWithOptions(request: PageQueryProjectRequest, runtime: $Util.RuntimeOptions): Promise<PageQueryProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keySearch)) {
      body["KeySearch"] = request.keySearch;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
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
      action: "PageQueryProject",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageQueryProjectResponse>(await this.callApi(params, req, runtime), new PageQueryProjectResponse({}));
  }

  async pageQueryProject(request: PageQueryProjectRequest): Promise<PageQueryProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageQueryProjectWithOptions(request, runtime);
  }

  async pageQueryProjectAppsWithOptions(request: PageQueryProjectAppsRequest, runtime: $Util.RuntimeOptions): Promise<PageQueryProjectAppsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
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
      action: "PageQueryProjectApps",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageQueryProjectAppsResponse>(await this.callApi(params, req, runtime), new PageQueryProjectAppsResponse({}));
  }

  async pageQueryProjectApps(request: PageQueryProjectAppsRequest): Promise<PageQueryProjectAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageQueryProjectAppsWithOptions(request, runtime);
  }

  async queryOfflineTaskProgressWithOptions(request: QueryOfflineTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<QueryOfflineTaskProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOfflineTaskProgress",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOfflineTaskProgressResponse>(await this.callApi(params, req, runtime), new QueryOfflineTaskProgressResponse({}));
  }

  async queryOfflineTaskProgress(request: QueryOfflineTaskProgressRequest): Promise<QueryOfflineTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOfflineTaskProgressWithOptions(request, runtime);
  }

  async refreshDistrictMetaWithOptions(runtime: $Util.RuntimeOptions): Promise<RefreshDistrictMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RefreshDistrictMeta",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDistrictMetaResponse>(await this.callApi(params, req, runtime), new RefreshDistrictMetaResponse({}));
  }

  async refreshDistrictMeta(): Promise<RefreshDistrictMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDistrictMetaWithOptions(runtime);
  }

  async stopAppSessionWithOptions(request: StopAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<StopAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    if (!Util.isUnset(request.stopParam)) {
      query["StopParam"] = request.stopParam;
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

  async submitOfflineTaskWithOptions(request: SubmitOfflineTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOfflineTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitOfflineTask",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitOfflineTaskResponse>(await this.callApi(params, req, runtime), new SubmitOfflineTaskResponse({}));
  }

  async submitOfflineTask(request: SubmitOfflineTaskRequest): Promise<SubmitOfflineTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOfflineTaskWithOptions(request, runtime);
  }

}

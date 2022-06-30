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
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
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

export class StopAppSessionRequest extends $tea.Model {
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

export class ListAppSessionsResponseBodyAppSessions extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
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

  async stopAppSessionWithOptions(request: StopAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<StopAppSessionResponse> {
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

}

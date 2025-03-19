// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetConnectionTicketResponseBodyBindQueueInfo extends $dara.Model {
  queueStatus?: string;
  rank?: number;
  readyTimeout?: number;
  remainingTime?: number;
  requestKey?: string;
  targetId?: string;
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      queueStatus: 'QueueStatus',
      rank: 'Rank',
      readyTimeout: 'ReadyTimeout',
      remainingTime: 'RemainingTime',
      requestKey: 'RequestKey',
      targetId: 'TargetId',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueStatus: 'string',
      rank: 'number',
      readyTimeout: 'number',
      remainingTime: 'number',
      requestKey: 'string',
      targetId: 'string',
      waitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBodyPolicy extends $dara.Model {
  resolutionAdaptive?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      resolutionAdaptive: 'ResolutionAdaptive',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resolutionAdaptive: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponseBodyAppModels extends $dara.Model {
  /**
   * @example
   * img-f37nddbjc1lje14st
   */
  appCenterImageId?: string;
  /**
   * @example
   * ca-fxwp4koyr5y2sp4mz
   */
  appId?: string;
  /**
   * @example
   * Microsoft Word
   */
  appName?: string;
  appThemeColor?: string;
  /**
   * @example
   * R2021a
   */
  appVersion?: string;
  /**
   * @example
   * v1.0
   */
  appVersionName?: string;
  authTime?: string;
  /**
   * @example
   * 2
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * https://app-streaming-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1973619010349344/1634523814270_Matlab.png
   */
  iconUrl?: string;
  /**
   * @example
   * True
   */
  isAuth?: boolean;
  /**
   * @example
   * True
   */
  usedInSession?: boolean;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appId: 'AppId',
      appName: 'AppName',
      appThemeColor: 'AppThemeColor',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      authTime: 'AuthTime',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      iconUrl: 'IconUrl',
      isAuth: 'IsAuth',
      usedInSession: 'UsedInSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appId: 'string',
      appName: 'string',
      appThemeColor: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      authTime: 'string',
      categoryId: 'number',
      categoryType: 'number',
      iconUrl: 'string',
      isAuth: 'boolean',
      usedInSession: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponseBodyRunningCloudApps extends $dara.Model {
  /**
   * @example
   * ca-dln05y44ze6esfl8x
   */
  appId?: string;
  /**
   * @example
   * aig-dk8p95irk9xs5xi6a
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-gc1gemx6vpa6vlync
   */
  appInstanceId?: string;
  /**
   * @example
   * alihealth-keeper
   */
  appName?: string;
  /**
   * @example
   * 11.1
   */
  appVersion?: string;
  /**
   * @example
   * test1.0
   */
  appVersionName?: string;
  /**
   * @example
   * 87
   */
  duration?: number;
  /**
   * @example
   * https://app-icon-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/187465/18_bf1.jpg
   */
  iconUrl?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1642748400
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      duration: 'Duration',
      iconUrl: 'IconUrl',
      osType: 'OsType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      duration: 'number',
      iconUrl: 'string',
      osType: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @example
   * ca-etn4zizgaezo9gis9
   */
  appId?: string;
  /**
   * @example
   * aig-bw1o1gcwvd3e1ipeu
   */
  appInstanceGroupId?: string;
  appInstanceId?: string;
  /**
   * @example
   * 1.0.0.1
   */
  appVersion?: string;
  autoConnectInQueue?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * f2463208-ec89-4309-8e8c-8b17acdcab93
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.21
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise LTSC 2019" 10.0 (Build 17763)
   */
  clientOS?: string;
  clientType?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  connectionProperties?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  environmentConfig?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v1c4e2ef03d620f0f6cb41634196161219054e12d8aa5a13deb9ed14eebb76d674559115ad2e27a57f6820c1fd33e0ca36
   */
  loginToken?: string;
  /**
   * @example
   * /home/test/test.jpg
   */
  param?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  resourceId?: string;
  /**
   * @example
   * 09e2b2e6-3181-4c84-9539-6fc9f1c3199e
   */
  sessionId?: string;
  /**
   * @example
   * 6f41731b-7091-4954-80c8-1d1e0b3ebb48
   */
  taskId?: string;
  /**
   * @example
   * 1126819517152528
   */
  tenantId?: string;
  /**
   * @example
   * A8B35215993FBF283F28D617975204C4
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      autoConnectInQueue: 'AutoConnectInQueue',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      connectionProperties: 'ConnectionProperties',
      endUserId: 'EndUserId',
      environmentConfig: 'EnvironmentConfig',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      param: 'Param',
      productType: 'ProductType',
      resourceId: 'ResourceId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      autoConnectInQueue: 'boolean',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      connectionProperties: 'string',
      endUserId: 'string',
      environmentConfig: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      param: 'string',
      productType: 'string',
      resourceId: 'string',
      sessionId: 'string',
      taskId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @example
   * aig-53fvrq1oanz6cxzi3
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-gc1gemx6vpa6vlync
   */
  appInstanceId?: string;
  appInstancePersistentId?: string;
  bindQueueInfo?: GetConnectionTicketResponseBodyBindQueueInfo;
  /**
   * @example
   * InternalError.TicketGenInternalError
   */
  code?: string;
  /**
   * @example
   * v15418e331d8d068c29411646996786785303b8f61fd880aeaa50c5b584443cd9e65cc7eec72acdaad0a844666a3b26dab
   */
  loginToken?: string;
  /**
   * @example
   * reenter app instance failed
   */
  message?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  policy?: GetConnectionTicketResponseBodyPolicy;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AD2D0761-1FE5-549D-B169-D3F8D19C6CDD
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  retryTimes?: number;
  /**
   * @example
   * f3d1b31c-605e-4d04-a896-015fc9fc03b4
   */
  taskId?: string;
  /**
   * @example
   * Running
   */
  taskStatus?: string;
  tenantId?: number;
  /**
   * @example
   * n7n9bqZlPrvgUOPSJzfdb$89jWwlVISgrchpY0tOfVYGBBcdoPoH39PVHK63fQTEM14kzajQdWAnHTnSicc35W_eI2LbTSGKquKukwcU7opRwmInhtQH*mlmsZQ3ByOLYVmqI*1hFESs0
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      bindQueueInfo: 'BindQueueInfo',
      code: 'Code',
      loginToken: 'LoginToken',
      message: 'Message',
      osType: 'OsType',
      policy: 'Policy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retryTimes: 'RetryTimes',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      bindQueueInfo: GetConnectionTicketResponseBodyBindQueueInfo,
      code: 'string',
      loginToken: 'string',
      message: 'string',
      osType: 'string',
      policy: GetConnectionTicketResponseBodyPolicy,
      regionId: 'string',
      requestId: 'string',
      retryTimes: 'number',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'number',
      ticket: 'string',
    };
  }

  validate() {
    if(this.bindQueueInfo && typeof (this.bindQueueInfo as any).validate === 'function') {
      (this.bindQueueInfo as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
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
      body: GetConnectionTicketResponseBody,
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

export class ListPublishedAppInfoRequest extends $dara.Model {
  /**
   * @example
   * Microsoft Word
   */
  appName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 1
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * 17b38aaa-761f-44c5-9862-2ad0f5025d15
   */
  clientId?: string;
  /**
   * @example
   * 125.80.132.13
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-shanghai
   */
  loginRegionId?: string;
  /**
   * @example
   * v189fa78c1aff77a0483b16497517322299131027b85bb84bbdc0871988ce8296d8fd891e2fdeaded3bd75f81f639acee8
   */
  loginToken?: string;
  orderParam?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * c261a6a1-e242-4f4b-813c-5fe807e49f03
   */
  sessionId?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      orderParam: 'OrderParam',
      productType: 'ProductType',
      sessionId: 'SessionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      categoryId: 'number',
      categoryType: 'number',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      orderParam: 'string',
      productType: 'string',
      sessionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * appModels
   */
  appModels?: ListPublishedAppInfoResponseBodyAppModels[];
  /**
   * @example
   * 2NVfhLfgy5b3J5iJyoLQ6x4EULMg1hbhgB9NfnvdK9oj5zwxd17j4TuQkZze3RvhEvBinZYjknujF3Q1M
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DB70F8FE-63A3-587B-8560-CEC258E8B944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appModels: 'AppModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appModels: { 'type': 'array', 'itemType': ListPublishedAppInfoResponseBodyAppModels },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appModels)) {
      $dara.Model.validateArray(this.appModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedAppInfoResponseBody;
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
      body: ListPublishedAppInfoResponseBody,
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

export class ListRunningAppsRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 370b56f8-2812-4b6c-bfa6-2560791cad88
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.32
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise" 10.0 (Build 18363)
   */
  clientOS?: string;
  /**
   * @example
   * 0.1.0-R-20220512.175656
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v1124500957832f30b3e716406562071655aa43b2a723ed2be0837815483d54e025db13ba5469f06f2410d0efc4d302e36
   */
  loginToken?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * a863f4c3-2f1d-4971-8cf7-e2b92ae97764
   */
  sessionId?: string;
  /**
   * @example
   * 1735953493960828
   */
  tenantId?: string;
  /**
   * @example
   * 470E8C12AB78CE9C3F6627DD0409E51D
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DC3521C-3820-5EA5-9A9A-00BB7AF4E8E5
   */
  requestId?: string;
  runningCloudApps?: ListRunningAppsResponseBodyRunningCloudApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runningCloudApps: 'RunningCloudApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runningCloudApps: { 'type': 'array', 'itemType': ListRunningAppsResponseBodyRunningCloudApps },
    };
  }

  validate() {
    if(Array.isArray(this.runningCloudApps)) {
      $dara.Model.validateArray(this.runningCloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunningAppsResponseBody;
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
      body: ListRunningAppsResponseBody,
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

export class ResetAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 22631)
   */
  clientOS?: string;
  /**
   * @example
   * 7.7.0-R-20241217.092056
   */
  clientVersion?: string;
  /**
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v285fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c261a6a1-e242-4f4b-813c-5fe807e49f03
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @example
   * The app instance group is not found.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAppResourcesResponseBody;
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
      body: ResetAppResourcesResponseBody,
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

export class RestartAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-53fvrq1oanz6c****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b699ca7
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 7.5.3-RS-20241127.131156
   */
  clientVersion?: string;
  /**
   * @example
   * user001
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1124500957832f30b3e716406562071655aa43b2a723ed2be0837815483d54e025db13ba5469f06f2410d0efc4d302e36
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c261a6a1-e242-4f4b-813c-5fe807e49f03
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @example
   * The app instance group is not found.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartAppResourcesResponseBody;
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
      body: RestartAppResourcesResponseBody,
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

export class StartAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b69****
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 22631)
   */
  clientOS?: string;
  /**
   * @example
   * 7.5.1-R-20240903.163046
   */
  clientVersion?: string;
  /**
   * @example
   * testUser01
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v185fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a863f4c3-2f1d-4971-8cf7-e2b92ae9****
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @example
   * The app instance group is not found.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAppResourcesResponseBody;
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
      body: StartAppResourcesResponseBody,
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

export class StopAppRequest extends $dara.Model {
  /**
   * @example
   * 1924794279035094
   */
  aliUid?: number;
  /**
   * @example
   * AnonymousUserAPI
   */
  apiType?: string;
  /**
   * @example
   * ca-fxwp4koywsglzvvex
   */
  appId?: string;
  /**
   * @example
   * aig-89ibriac2wudyph38
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-d297eyf83g5niwnjl
   */
  appInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * pc
   */
  clientChannel?: string;
  /**
   * @example
   * 91b79184-51d0-42ad-8475-78cae95b0aa6
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.79
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise" 10.0 (Build 19042)
   */
  clientOS?: string;
  /**
   * @example
   * 3.1.1-R-20211022.144255
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @example
   * idp-9ie5smicnct2xodn2
   */
  idpId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v185fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d330e
   */
  loginToken?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 597e869d-ea14-4b83-9490-714f68bfe935
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B26903
   */
  uuid?: string;
  /**
   * @example
   * ac3cb49059261898
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiType: 'ApiType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      bizRegionId: 'BizRegionId',
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      forceStop: 'ForceStop',
      idpId: 'IdpId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      uuid: 'Uuid',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      bizRegionId: 'string',
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      forceStop: 'boolean',
      idpId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      regionId: 'string',
      sessionId: 'string',
      uuid: 'string',
      wyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppResponseBody extends $dara.Model {
  /**
   * @example
   * 83A9075B-C646-59A9-8232-CAE41AF4B9E3
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

export class StopAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppResponseBody;
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
      body: StopAppResponseBody,
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

export class StopAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b699ca7
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise" 10.0 (Build 19042)
   */
  clientOS?: string;
  /**
   * @example
   * 7.2.0-R-20241008.110000
   */
  clientVersion?: string;
  /**
   * @example
   * testUser
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v12369636c721ba6b3ddb1683341016775c3f63e4d0e78f120f9a0544ed826b7af7daf747c402f0d0730b52f451b70****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 597e869d-ea14-4b83-9490-714f68bfe935
   */
  sessionId?: string;
  /**
   * @example
   * C50973691A6D2BE23F2CDD73B85B****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @example
   * The app instance group is not found.
   */
  message?: string;
  /**
   * @example
   * 829444D6-9FD3-5C65-A570-065975537647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppResourcesResponseBody;
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
      body: StopAppResourcesResponseBody,
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

export class UnbindRequest extends $dara.Model {
  /**
   * @example
   * ca-fxwp4koxs8hopi94e
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-e1l4kqqykxt4uzdx9
   */
  appInstanceGroupId?: string;
  appInstanceId?: string;
  /**
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b699ca7
   */
  clientId?: string;
  /**
   * @example
   * 139.129.223.122
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 19041)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20220303.171122
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-shanghai
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1e9c8e83d83ea11270871640059145702bde8c5be8c6b9a854ffb6a43bd2673c19a5551c83800724e024f488dbfb0b247
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11040139-4fb4-4b35-9b44-6c07c746a43e
   */
  sessionId?: string;
  /**
   * @example
   * 1569416393841402
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6EBD4046-2202-5FBD-8595-4B631F0C484B
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

export class UnbindResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindResponseBody;
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
      body: UnbindResponseBody,
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取连接信息
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.autoConnectInQueue)) {
      body["AutoConnectInQueue"] = request.autoConnectInQueue;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.connectionProperties)) {
      body["ConnectionProperties"] = request.connectionProperties;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.environmentConfig)) {
      body["EnvironmentConfig"] = request.environmentConfig;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
    } else {
      return $dara.cast<GetConnectionTicketResponse>(await this.execute(params, req, runtime), new GetConnectionTicketResponse({}));
    }

  }

  /**
   * 获取连接信息
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * 已上架应用列表
   * 
   * @param request - ListPublishedAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedAppInfoResponse
   */
  async listPublishedAppInfoWithOptions(request: ListPublishedAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<ListPublishedAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      query["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.orderParam)) {
      query["OrderParam"] = request.orderParam;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishedAppInfo",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublishedAppInfoResponse>(await this.callApi(params, req, runtime), new ListPublishedAppInfoResponse({}));
    } else {
      return $dara.cast<ListPublishedAppInfoResponse>(await this.execute(params, req, runtime), new ListPublishedAppInfoResponse({}));
    }

  }

  /**
   * 已上架应用列表
   * 
   * @param request - ListPublishedAppInfoRequest
   * @returns ListPublishedAppInfoResponse
   */
  async listPublishedAppInfo(request: ListPublishedAppInfoRequest): Promise<ListPublishedAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublishedAppInfoWithOptions(request, runtime);
  }

  /**
   * 运行中应用列表
   * 
   * @param request - ListRunningAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunningAppsResponse
   */
  async listRunningAppsWithOptions(request: ListRunningAppsRequest, runtime: $dara.RuntimeOptions): Promise<ListRunningAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRunningApps",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRunningAppsResponse>(await this.callApi(params, req, runtime), new ListRunningAppsResponse({}));
    } else {
      return $dara.cast<ListRunningAppsResponse>(await this.execute(params, req, runtime), new ListRunningAppsResponse({}));
    }

  }

  /**
   * 运行中应用列表
   * 
   * @param request - ListRunningAppsRequest
   * @returns ListRunningAppsResponse
   */
  async listRunningApps(request: ListRunningAppsRequest): Promise<ListRunningAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRunningAppsWithOptions(request, runtime);
  }

  /**
   * 重置应用资源
   * 
   * @param request - ResetAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAppResourcesResponse
   */
  async resetAppResourcesWithOptions(request: ResetAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ResetAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetAppResourcesResponse>(await this.callApi(params, req, runtime), new ResetAppResourcesResponse({}));
    } else {
      return $dara.cast<ResetAppResourcesResponse>(await this.execute(params, req, runtime), new ResetAppResourcesResponse({}));
    }

  }

  /**
   * 重置应用资源
   * 
   * @param request - ResetAppResourcesRequest
   * @returns ResetAppResourcesResponse
   */
  async resetAppResources(request: ResetAppResourcesRequest): Promise<ResetAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAppResourcesWithOptions(request, runtime);
  }

  /**
   * 重启应用资源
   * 
   * @param request - RestartAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartAppResourcesResponse
   */
  async restartAppResourcesWithOptions(request: RestartAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<RestartAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartAppResourcesResponse>(await this.callApi(params, req, runtime), new RestartAppResourcesResponse({}));
    } else {
      return $dara.cast<RestartAppResourcesResponse>(await this.execute(params, req, runtime), new RestartAppResourcesResponse({}));
    }

  }

  /**
   * 重启应用资源
   * 
   * @param request - RestartAppResourcesRequest
   * @returns RestartAppResourcesResponse
   */
  async restartAppResources(request: RestartAppResourcesRequest): Promise<RestartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartAppResourcesWithOptions(request, runtime);
  }

  /**
   * 启动应用资源
   * 
   * @param request - StartAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAppResourcesResponse
   */
  async startAppResourcesWithOptions(request: StartAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<StartAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartAppResourcesResponse>(await this.callApi(params, req, runtime), new StartAppResourcesResponse({}));
    } else {
      return $dara.cast<StartAppResourcesResponse>(await this.execute(params, req, runtime), new StartAppResourcesResponse({}));
    }

  }

  /**
   * 启动应用资源
   * 
   * @param request - StartAppResourcesRequest
   * @returns StartAppResourcesResponse
   */
  async startAppResources(request: StartAppResourcesRequest): Promise<StartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAppResourcesWithOptions(request, runtime);
  }

  /**
   * 停止应用
   * 
   * @param request - StopAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAppResponse
   */
  async stopAppWithOptions(request: StopAppRequest, runtime: $dara.RuntimeOptions): Promise<StopAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.forceStop)) {
      body["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.idpId)) {
      body["IdpId"] = request.idpId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApp",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAppResponse>(await this.callApi(params, req, runtime), new StopAppResponse({}));
    } else {
      return $dara.cast<StopAppResponse>(await this.execute(params, req, runtime), new StopAppResponse({}));
    }

  }

  /**
   * 停止应用
   * 
   * @param request - StopAppRequest
   * @returns StopAppResponse
   */
  async stopApp(request: StopAppRequest): Promise<StopAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppWithOptions(request, runtime);
  }

  /**
   * 关闭应用资源
   * 
   * @param request - StopAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAppResourcesResponse
   */
  async stopAppResourcesWithOptions(request: StopAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<StopAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAppResourcesResponse>(await this.callApi(params, req, runtime), new StopAppResourcesResponse({}));
    } else {
      return $dara.cast<StopAppResourcesResponse>(await this.execute(params, req, runtime), new StopAppResourcesResponse({}));
    }

  }

  /**
   * 关闭应用资源
   * 
   * @param request - StopAppResourcesRequest
   * @returns StopAppResourcesResponse
   */
  async stopAppResources(request: StopAppResourcesRequest): Promise<StopAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑实例
   * 
   * @param request - UnbindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindResponse
   */
  async unbindWithOptions(request: UnbindRequest, runtime: $dara.RuntimeOptions): Promise<UnbindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Unbind",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindResponse>(await this.callApi(params, req, runtime), new UnbindResponse({}));
    } else {
      return $dara.cast<UnbindResponse>(await this.execute(params, req, runtime), new UnbindResponse({}));
    }

  }

  /**
   * 解绑实例
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: UnbindRequest): Promise<UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

}

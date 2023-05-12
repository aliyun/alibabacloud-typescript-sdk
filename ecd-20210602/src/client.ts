// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AppDownloadEventRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDownloadEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDownloadEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AppDownloadEventResponseBody;
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
      body: AppDownloadEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstallEventRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstallEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstallEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AppInstallEventResponseBody;
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
      body: AppInstallEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyStsTokenRequest extends $tea.Model {
  appVersion?: string;
  appVersionCode?: number;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      appVersionCode: 'AppVersionCode',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      appVersionCode: 'number',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyStsTokenResponseBody extends $tea.Model {
  code?: string;
  data?: ApplyStsTokenResponseBodyData;
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
      data: ApplyStsTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyStsTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyStsTokenResponseBody;
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
      body: ApplyStsTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAppRequest extends $tea.Model {
  appId?: number;
  orderId?: number;
  regionId?: string;
  subscribeId?: number;
  userList?: AuthorizeAppRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      subscribeId: 'SubscribeId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      orderId: 'number',
      regionId: 'string',
      subscribeId: 'number',
      userList: { 'type': 'array', 'itemType': AuthorizeAppRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAppResponseBody extends $tea.Model {
  code?: string;
  data?: AuthorizeAppResponseBodyData;
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
      data: AuthorizeAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeAppResponseBody;
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
      body: AuthorizeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppRequest extends $tea.Model {
  appId?: number;
  distributeType?: string;
  language?: string;
  silenceInfo?: AutoInstallAppRequestSilenceInfo;
  tenantId?: number;
  userList?: AutoInstallAppRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      distributeType: 'DistributeType',
      language: 'Language',
      silenceInfo: 'SilenceInfo',
      tenantId: 'TenantId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      distributeType: 'string',
      language: 'string',
      silenceInfo: AutoInstallAppRequestSilenceInfo,
      tenantId: 'number',
      userList: { 'type': 'array', 'itemType': AutoInstallAppRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppShrinkRequest extends $tea.Model {
  appId?: number;
  distributeType?: string;
  language?: string;
  silenceInfoShrink?: string;
  tenantId?: number;
  userListShrink?: string;
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      distributeType: 'DistributeType',
      language: 'Language',
      silenceInfoShrink: 'SilenceInfo',
      tenantId: 'TenantId',
      userListShrink: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      distributeType: 'string',
      language: 'string',
      silenceInfoShrink: 'string',
      tenantId: 'number',
      userListShrink: 'string',
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppResponseBody extends $tea.Model {
  code?: string;
  data?: AutoInstallAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AutoInstallAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AutoInstallAppResponseBody;
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
      body: AutoInstallAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsRequest extends $tea.Model {
  appIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsShrinkRequest extends $tea.Model {
  appIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appIdsShrink: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchDeleteAppsResponseBodyData;
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
      data: BatchDeleteAppsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDeleteAppsResponseBody;
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
      body: BatchDeleteAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsRequest extends $tea.Model {
  appIds?: { [key: string]: any };
  autoInstallApps?: BatchDistributeAppsRequestAutoInstallApps[];
  distributeType?: string;
  language?: string;
  orderId?: number;
  requestType?: string;
  subscribeId?: number;
  tenantId?: number;
  userList?: BatchDistributeAppsRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      autoInstallApps: 'AutoInstallApps',
      distributeType: 'DistributeType',
      language: 'Language',
      orderId: 'OrderId',
      requestType: 'RequestType',
      subscribeId: 'SubscribeId',
      tenantId: 'TenantId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoInstallApps: { 'type': 'array', 'itemType': BatchDistributeAppsRequestAutoInstallApps },
      distributeType: 'string',
      language: 'string',
      orderId: 'number',
      requestType: 'string',
      subscribeId: 'number',
      tenantId: 'number',
      userList: { 'type': 'array', 'itemType': BatchDistributeAppsRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsShrinkRequest extends $tea.Model {
  appIdsShrink?: string;
  autoInstallApps?: BatchDistributeAppsShrinkRequestAutoInstallApps[];
  distributeType?: string;
  language?: string;
  orderId?: number;
  requestType?: string;
  subscribeId?: number;
  tenantId?: number;
  userList?: BatchDistributeAppsShrinkRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appIdsShrink: 'AppIds',
      autoInstallApps: 'AutoInstallApps',
      distributeType: 'DistributeType',
      language: 'Language',
      orderId: 'OrderId',
      requestType: 'RequestType',
      subscribeId: 'SubscribeId',
      tenantId: 'TenantId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsShrink: 'string',
      autoInstallApps: { 'type': 'array', 'itemType': BatchDistributeAppsShrinkRequestAutoInstallApps },
      distributeType: 'string',
      language: 'string',
      orderId: 'number',
      requestType: 'string',
      subscribeId: 'number',
      tenantId: 'number',
      userList: { 'type': 'array', 'itemType': BatchDistributeAppsShrinkRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchDistributeAppsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchDistributeAppsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDistributeAppsResponseBody;
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
      body: BatchDistributeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsRequest extends $tea.Model {
  appIds?: { [key: string]: any };
  autoInstallApps?: BatchSubscribeAppsRequestAutoInstallApps[];
  distributeType?: string;
  forceInstallType?: string;
  language?: string;
  requestType?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      autoInstallApps: 'AutoInstallApps',
      distributeType: 'DistributeType',
      forceInstallType: 'ForceInstallType',
      language: 'Language',
      requestType: 'RequestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoInstallApps: { 'type': 'array', 'itemType': BatchSubscribeAppsRequestAutoInstallApps },
      distributeType: 'string',
      forceInstallType: 'string',
      language: 'string',
      requestType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsShrinkRequest extends $tea.Model {
  appIdsShrink?: string;
  autoInstallApps?: BatchSubscribeAppsShrinkRequestAutoInstallApps[];
  distributeType?: string;
  forceInstallType?: string;
  language?: string;
  requestType?: string;
  static names(): { [key: string]: string } {
    return {
      appIdsShrink: 'AppIds',
      autoInstallApps: 'AutoInstallApps',
      distributeType: 'DistributeType',
      forceInstallType: 'ForceInstallType',
      language: 'Language',
      requestType: 'RequestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsShrink: 'string',
      autoInstallApps: { 'type': 'array', 'itemType': BatchSubscribeAppsShrinkRequestAutoInstallApps },
      distributeType: 'string',
      forceInstallType: 'string',
      language: 'string',
      requestType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchSubscribeAppsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchSubscribeAppsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSubscribeAppsResponseBody;
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
      body: BatchSubscribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAppshowRequest extends $tea.Model {
  isShow?: number;
  static names(): { [key: string]: string } {
    return {
      isShow: 'IsShow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAppshowResponseBody extends $tea.Model {
  code?: string;
  data?: ChangeAppshowResponseBodyData;
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
      data: ChangeAppshowResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAppshowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeAppshowResponseBody;
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
      body: ChangeAppshowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeRequest extends $tea.Model {
  appVersion?: string;
  appVersionCode?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      appVersionCode: 'AppVersionCode',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      appVersionCode: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeResponseBody extends $tea.Model {
  code?: string;
  data?: CheckUpgradeResponseBodyData;
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
      data: CheckUpgradeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckUpgradeResponseBody;
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
      body: CheckUpgradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClientOnOpenEventRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClientOnOpenEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClientOnOpenEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClientOnOpenEventResponseBody;
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
      body: ClientOnOpenEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAppRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAppResponseBody extends $tea.Model {
  code?: string;
  filePath?: string;
  message?: string;
  requestId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      filePath: 'FilePath',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      filePath: 'string',
      message: 'string',
      requestId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompleteAppResponseBody;
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
      body: CompleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteIconRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteIconResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  size?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      size: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteIconResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompleteIconResponseBody;
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
      body: CompleteIconResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  appVersionName?: string;
  copyrightName?: string;
  copyrightPath?: string;
  copyrightRealName?: string;
  executeFile?: string;
  executeFileAddress?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  name?: string;
  ossAppUrl?: string;
  silenceFlag?: number;
  silenceParam?: string;
  startParam?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      copyrightName: 'CopyrightName',
      copyrightPath: 'CopyrightPath',
      copyrightRealName: 'CopyrightRealName',
      executeFile: 'ExecuteFile',
      executeFileAddress: 'ExecuteFileAddress',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      startParam: 'StartParam',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      appVersionName: 'string',
      copyrightName: 'string',
      copyrightPath: 'string',
      copyrightRealName: 'string',
      executeFile: 'string',
      executeFileAddress: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      name: 'string',
      ossAppUrl: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      startParam: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAppVersionResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAppVersionResponseBodyData,
      httpStatusCode: 'number',
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

export class CreateIsvAppRequest extends $tea.Model {
  appDownloadUrl?: string;
  appRegInfo?: string;
  appVersion?: string;
  applicationLink?: string;
  applicationType?: string;
  cateId?: number;
  certFileName?: string;
  certFilePath?: string;
  certFileRealName?: string;
  copyrightName?: string;
  copyrightPath?: string;
  copyrightRealName?: string;
  description?: string;
  detail?: string;
  developer?: string;
  email?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  licenseName?: string;
  licensePath?: string;
  licenseRealName?: string;
  name?: string;
  ossAppUrl?: string;
  phone?: string;
  publishType?: number;
  regionId?: string;
  searchTag?: string;
  silenceDeleteParam?: string;
  silenceParam?: string;
  static names(): { [key: string]: string } {
    return {
      appDownloadUrl: 'AppDownloadUrl',
      appRegInfo: 'AppRegInfo',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      cateId: 'CateId',
      certFileName: 'CertFileName',
      certFilePath: 'CertFilePath',
      certFileRealName: 'CertFileRealName',
      copyrightName: 'CopyrightName',
      copyrightPath: 'CopyrightPath',
      copyrightRealName: 'CopyrightRealName',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      email: 'Email',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      licenseName: 'LicenseName',
      licensePath: 'LicensePath',
      licenseRealName: 'LicenseRealName',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      phone: 'Phone',
      publishType: 'PublishType',
      regionId: 'RegionId',
      searchTag: 'SearchTag',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceParam: 'SilenceParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDownloadUrl: 'string',
      appRegInfo: 'string',
      appVersion: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      cateId: 'number',
      certFileName: 'string',
      certFilePath: 'string',
      certFileRealName: 'string',
      copyrightName: 'string',
      copyrightPath: 'string',
      copyrightRealName: 'string',
      description: 'string',
      detail: 'string',
      developer: 'string',
      email: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      licenseName: 'string',
      licensePath: 'string',
      licenseRealName: 'string',
      name: 'string',
      ossAppUrl: 'string',
      phone: 'string',
      publishType: 'number',
      regionId: 'string',
      searchTag: 'string',
      silenceDeleteParam: 'string',
      silenceParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsvAppResponseBody extends $tea.Model {
  appId?: number;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsvAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIsvAppResponseBody;
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
      body: CreateIsvAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  amount?: number;
  buyerId?: number;
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      buyerId: 'BuyerId',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      buyerId: 'number',
      itemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderResponseBody;
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
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantAppRequest extends $tea.Model {
  appTag?: string[];
  appVersion?: string;
  appVersionName?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  cateType?: number;
  controlParam?: string;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  executeFileAddress?: string;
  fileName?: string;
  fileOpenWay?: string[];
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  OS?: string;
  ossAppUrl?: string;
  searchTag?: string;
  silenceFlag?: number;
  silenceParam?: string;
  size?: number;
  sourceType?: string;
  startParam?: string;
  subAppType?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appTag: 'AppTag',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      cateType: 'CateType',
      controlParam: 'ControlParam',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      executeFileAddress: 'ExecuteFileAddress',
      fileName: 'FileName',
      fileOpenWay: 'FileOpenWay',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      OS: 'OS',
      ossAppUrl: 'OssAppUrl',
      searchTag: 'SearchTag',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      size: 'Size',
      sourceType: 'SourceType',
      startParam: 'StartParam',
      subAppType: 'SubAppType',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTag: { 'type': 'array', 'itemType': 'string' },
      appVersion: 'string',
      appVersionName: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      cateType: 'number',
      controlParam: 'string',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      executeFileAddress: 'string',
      fileName: 'string',
      fileOpenWay: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      OS: 'string',
      ossAppUrl: 'string',
      searchTag: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      size: 'number',
      sourceType: 'string',
      startParam: 'string',
      subAppType: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantAppShrinkRequest extends $tea.Model {
  appTagShrink?: string;
  appVersion?: string;
  appVersionName?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  cateType?: number;
  controlParam?: string;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  executeFileAddress?: string;
  fileName?: string;
  fileOpenWayShrink?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  OS?: string;
  ossAppUrl?: string;
  searchTag?: string;
  silenceFlag?: number;
  silenceParam?: string;
  size?: number;
  sourceType?: string;
  startParam?: string;
  subAppType?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appTagShrink: 'AppTag',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      cateType: 'CateType',
      controlParam: 'ControlParam',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      executeFileAddress: 'ExecuteFileAddress',
      fileName: 'FileName',
      fileOpenWayShrink: 'FileOpenWay',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      OS: 'OS',
      ossAppUrl: 'OssAppUrl',
      searchTag: 'SearchTag',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      size: 'Size',
      sourceType: 'SourceType',
      startParam: 'StartParam',
      subAppType: 'SubAppType',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTagShrink: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      cateType: 'number',
      controlParam: 'string',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      executeFileAddress: 'string',
      fileName: 'string',
      fileOpenWayShrink: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      OS: 'string',
      ossAppUrl: 'string',
      searchTag: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      size: 'number',
      sourceType: 'string',
      startParam: 'string',
      subAppType: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantAppResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTenantAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTenantAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantAppResponseBody;
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
      body: CreateTenantAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteAppVersionResponseBodyData;
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
      data: DeleteAppVersionResponseBodyData,
      message: 'string',
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

export class DeleteAuthorizationUserRequest extends $tea.Model {
  appId?: number;
  orderId?: number;
  regionId?: string;
  subscribeId?: number;
  userList?: DeleteAuthorizationUserRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      subscribeId: 'SubscribeId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      orderId: 'number',
      regionId: 'string',
      subscribeId: 'number',
      userList: { 'type': 'array', 'itemType': DeleteAuthorizationUserRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationUserResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteAuthorizationUserResponseBodyData;
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
      data: DeleteAuthorizationUserResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAuthorizationUserResponseBody;
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
      body: DeleteAuthorizationUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDistributeUserRequest extends $tea.Model {
  appId?: number;
  orderId?: number;
  regionId?: string;
  subscribeId?: number;
  userList?: DeleteDistributeUserRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      subscribeId: 'SubscribeId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      orderId: 'number',
      regionId: 'string',
      subscribeId: 'number',
      userList: { 'type': 'array', 'itemType': DeleteDistributeUserRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDistributeUserResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteDistributeUserResponseBodyData;
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
      data: DeleteDistributeUserResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDistributeUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDistributeUserResponseBody;
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
      body: DeleteDistributeUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsvAppRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsvAppResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsvAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIsvAppResponseBody;
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
      body: DeleteIsvAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantAppRequest extends $tea.Model {
  appId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantAppResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteTenantAppResponseBodyData;
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
      data: DeleteTenantAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTenantAppResponseBody;
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
      body: DeleteTenantAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBody extends $tea.Model {
  app?: DescribeAppResponseBodyApp;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: DescribeAppResponseBodyApp,
      code: 'string',
      message: 'string',
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

export class DescribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppResponseBody;
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
      body: DescribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDownloadInfoRequest extends $tea.Model {
  appId?: number;
  appMode?: number;
  appVersion?: string;
  appVersionCode?: number;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMode: 'AppMode',
      appVersion: 'AppVersion',
      appVersionCode: 'AppVersionCode',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appMode: 'number',
      appVersion: 'string',
      appVersionCode: 'number',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDownloadInfoResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAppDownloadInfoResponseBodyData;
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
      data: DescribeAppDownloadInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppDownloadInfoResponseBody;
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
      body: DescribeAppDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnpackagedAppDownloadInfoRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnpackagedAppDownloadInfoResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeUnpackagedAppDownloadInfoResponseBodyData;
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
      data: DescribeUnpackagedAppDownloadInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnpackagedAppDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUnpackagedAppDownloadInfoResponseBody;
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
      body: DescribeUnpackagedAppDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeDownloadInfoRequest extends $tea.Model {
  appVersion?: string;
  appVersionCode?: number;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      appVersionCode: 'AppVersionCode',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      appVersionCode: 'number',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeDownloadInfoResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeUpgradeDownloadInfoResponseBodyData;
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
      data: DescribeUpgradeDownloadInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUpgradeDownloadInfoResponseBody;
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
      body: DescribeUpgradeDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisibleAppsRequest extends $tea.Model {
  appVersion?: string;
  catalogId?: number;
  channel?: string;
  instanceId?: string;
  keyword?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      catalogId: 'CatalogId',
      channel: 'Channel',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      catalogId: 'number',
      channel: 'string',
      instanceId: 'string',
      keyword: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisibleAppsResponseBody extends $tea.Model {
  apps?: DescribeVisibleAppsResponseBodyApps[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': DescribeVisibleAppsResponseBodyApps },
      code: 'string',
      message: 'string',
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

export class DescribeVisibleAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVisibleAppsResponseBody;
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
      body: DescribeVisibleAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeAppRequest extends $tea.Model {
  appId?: number;
  autoInstallFlag?: boolean;
  distributeType?: string;
  language?: string;
  orderId?: number;
  requestType?: string;
  subscribeId?: number;
  tenantId?: number;
  userList?: DistributeAppRequestUserList[];
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstallFlag: 'AutoInstallFlag',
      distributeType: 'DistributeType',
      language: 'Language',
      orderId: 'OrderId',
      requestType: 'RequestType',
      subscribeId: 'SubscribeId',
      tenantId: 'TenantId',
      userList: 'UserList',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      autoInstallFlag: 'boolean',
      distributeType: 'string',
      language: 'string',
      orderId: 'number',
      requestType: 'string',
      subscribeId: 'number',
      tenantId: 'number',
      userList: { 'type': 'array', 'itemType': DistributeAppRequestUserList },
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeAppResponseBody extends $tea.Model {
  code?: string;
  data?: DistributeAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DistributeAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DistributeAppResponseBody;
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
      body: DistributeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdminStsCredentialRequest extends $tea.Model {
  fileType?: number;
  isManual?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      isManual: 'IsManual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'number',
      isManual: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdminStsCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetAdminStsCredentialResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAdminStsCredentialResponseBodyData,
      message: 'string',
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

export class GetAdminStsCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAdminStsCredentialResponseBody;
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
      body: GetAdminStsCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlRequest extends $tea.Model {
  appId?: number;
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      sourceRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppDownloadUrlResponseBody;
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
      body: GetAppDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStreamAgreementStatusResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStreamAgreementStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppStreamAgreementStatusResponseBody;
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
      body: GetAppStreamAgreementStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppshowRequest extends $tea.Model {
  isShow?: number;
  static names(): { [key: string]: string } {
    return {
      isShow: 'IsShow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppshowResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppshowResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppshowResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppshowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppshowResponseBody;
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
      body: GetAppshowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertRequest extends $tea.Model {
  appId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCertResponseBody;
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
      body: GetCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertTemplateRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCertTemplateResponseBody;
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
      body: GetCertTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlRequest extends $tea.Model {
  appId?: number;
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      sourceRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIconDownloadUrlResponseBody;
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
      body: GetIconDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvAppUploadCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetIsvAppUploadCredentialResponseBodyData;
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
      data: GetIsvAppUploadCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvAppUploadCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIsvAppUploadCredentialResponseBody;
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
      body: GetIsvAppUploadCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCertStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCertStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIsvCertStatusResponseBody;
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
      body: GetIsvCertStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCertUploadCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetIsvCertUploadCredentialResponseBodyData;
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
      data: GetIsvCertUploadCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCertUploadCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIsvCertUploadCredentialResponseBody;
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
      body: GetIsvCertUploadCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCopyrightUploadCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetIsvCopyrightUploadCredentialResponseBodyData;
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
      data: GetIsvCopyrightUploadCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCopyrightUploadCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIsvCopyrightUploadCredentialResponseBody;
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
      body: GetIsvCopyrightUploadCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMarketAppDownloadUrlRequest extends $tea.Model {
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMarketAppDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

export class GetMarketAppDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMarketAppDownloadUrlResponseBody;
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
      body: GetMarketAppDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsCredentialRequest extends $tea.Model {
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetStsCredentialResponseBodyData;
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
      data: GetStsCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStsCredentialResponseBody;
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
      body: GetStsCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantAppRequest extends $tea.Model {
  appId?: number;
  language?: string;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      language: 'Language',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      language: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantAppResponseBody extends $tea.Model {
  code?: string;
  data?: GetTenantAppResponseBodyData;
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
      data: GetTenantAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTenantAppResponseBody;
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
      body: GetTenantAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAppWamPackageInfoRequest extends $tea.Model {
  appVersion?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAppWamPackageInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetUploadAppWamPackageInfoResponseBodyData;
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
      data: GetUploadAppWamPackageInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAppWamPackageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUploadAppWamPackageInfoResponseBody;
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
      body: GetUploadAppWamPackageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsIsvNeedEnterResponseBody extends $tea.Model {
  code?: string;
  isNeed?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isNeed: 'IsNeed',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isNeed: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsIsvNeedEnterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IsIsvNeedEnterResponseBody;
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
      body: IsIsvNeedEnterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdWorkspaceRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdWorkspaceResponseBody extends $tea.Model {
  code?: string;
  data?: ListAdWorkspaceResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAdWorkspaceResponseBodyData },
      message: 'string',
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

export class ListAdWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAdWorkspaceResponseBody;
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
      body: ListAdWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAppCategoryRequest extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAppCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: ListAllAppCategoryResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllAppCategoryResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAppCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAllAppCategoryResponseBody;
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
      body: ListAllAppCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCatalogRequest extends $tea.Model {
  appVersion?: string;
  channel?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      channel: 'Channel',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      channel: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCatalogResponseBody extends $tea.Model {
  catalogs?: ListAppCatalogResponseBodyCatalogs[];
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': ListAppCatalogResponseBodyCatalogs },
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCatalogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppCatalogResponseBody;
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
      body: ListAppCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppOpenTypeRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppOpenTypeResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppOpenTypeResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppOpenTypeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppOpenTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppOpenTypeResponseBody;
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
      body: ListAppOpenTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionRequest extends $tea.Model {
  appId?: number;
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
      appId: 'number',
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
  data?: ListAppVersionResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListAuthorizationAllUserRequest extends $tea.Model {
  adRegionId?: string;
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  userRegionId?: string;
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adRegionId: 'AdRegionId',
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userRegionId: 'UserRegionId',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adRegionId: 'string',
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      userRegionId: 'string',
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAllUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  userList?: ListAuthorizationAllUserResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListAuthorizationAllUserResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAllUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAuthorizationAllUserResponseBody;
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
      body: ListAuthorizationAllUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAppRequest extends $tea.Model {
  cateId?: number;
  isFree?: string;
  keyName?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      isFree: 'IsFree',
      keyName: 'KeyName',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      isFree: 'string',
      keyName: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListAuthorizationAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAuthorizationAppResponseBodyData },
      message: 'string',
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

export class ListAuthorizationAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAuthorizationAppResponseBody;
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
      body: ListAuthorizationAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationInfoRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListAuthorizationInfoResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAuthorizationInfoResponseBodyData },
      message: 'string',
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

export class ListAuthorizationInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAuthorizationInfoResponseBody;
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
      body: ListAuthorizationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAllUserRequest extends $tea.Model {
  adRegionId?: string;
  appId?: number;
  keyName?: string;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  userRegionId?: string;
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adRegionId: 'AdRegionId',
      appId: 'AppId',
      keyName: 'KeyName',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userRegionId: 'UserRegionId',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adRegionId: 'string',
      appId: 'number',
      keyName: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      userRegionId: 'string',
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAllUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  userList?: ListDistributeAllUserResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListDistributeAllUserResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAllUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDistributeAllUserResponseBody;
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
      body: ListDistributeAllUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAppRequest extends $tea.Model {
  cateId?: number;
  isFree?: string;
  keyName?: string;
  language?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      isFree: 'IsFree',
      keyName: 'KeyName',
      language: 'Language',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      isFree: 'string',
      keyName: 'string',
      language: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListDistributeAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDistributeAppResponseBodyData },
      message: 'string',
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

export class ListDistributeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDistributeAppResponseBody;
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
      body: ListDistributeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeUserByAppRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeUserByAppResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  userList?: ListDistributeUserByAppResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListDistributeUserByAppResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeUserByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDistributeUserByAppResponseBody;
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
      body: ListDistributeUserByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageAppRequest extends $tea.Model {
  appName?: string;
  appUid?: string;
  imageUid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUid: 'AppUid',
      imageUid: 'ImageUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUid: 'string',
      imageUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListImageAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListImageAppResponseBodyData },
      message: 'string',
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

export class ListImageAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListImageAppResponseBody;
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
      body: ListImageAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppRequest extends $tea.Model {
  appName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListIsvAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListIsvAppResponseBodyData },
      message: 'string',
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

export class ListIsvAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIsvAppResponseBody;
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
      body: ListIsvAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppAuditsRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppAuditsResponseBody extends $tea.Model {
  code?: string;
  data?: ListIsvAppAuditsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListIsvAppAuditsResponseBodyData },
      message: 'string',
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

export class ListIsvAppAuditsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIsvAppAuditsResponseBody;
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
      body: ListIsvAppAuditsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAppRequest extends $tea.Model {
  appVersion?: string;
  catalogId?: number;
  instanceId?: string;
  keyword?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      catalogId: 'CatalogId',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      catalogId: 'number',
      instanceId: 'string',
      keyword: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAppResponseBody extends $tea.Model {
  apps?: ListMyAppResponseBodyApps[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListMyAppResponseBodyApps },
      code: 'string',
      message: 'string',
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

export class ListMyAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMyAppResponseBody;
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
      body: ListMyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeAppRequest extends $tea.Model {
  cateId?: number;
  isFree?: string;
  keyName?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      isFree: 'IsFree',
      keyName: 'KeyName',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      isFree: 'string',
      keyName: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListSubscribeAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSubscribeAppResponseBodyData },
      message: 'string',
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

export class ListSubscribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubscribeAppResponseBody;
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
      body: ListSubscribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeInfoRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListSubscribeInfoResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSubscribeInfoResponseBodyData },
      message: 'string',
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

export class ListSubscribeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubscribeInfoResponseBody;
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
      body: ListSubscribeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppRequest extends $tea.Model {
  appUid?: string;
  auditStatus?: number;
  bizType?: string;
  cateId?: number;
  cateIdList?: string;
  distributeTypeList?: string;
  isFree?: string;
  isFreeList?: string;
  keyName?: string;
  language?: string;
  oderBy?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  sourceTypeList?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      auditStatus: 'AuditStatus',
      bizType: 'BizType',
      cateId: 'CateId',
      cateIdList: 'CateIdList',
      distributeTypeList: 'DistributeTypeList',
      isFree: 'IsFree',
      isFreeList: 'IsFreeList',
      keyName: 'KeyName',
      language: 'Language',
      oderBy: 'OderBy',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
      sourceTypeList: 'SourceTypeList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      auditStatus: 'number',
      bizType: 'string',
      cateId: 'number',
      cateIdList: 'string',
      distributeTypeList: 'string',
      isFree: 'string',
      isFreeList: 'string',
      keyName: 'string',
      language: 'string',
      oderBy: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      sourceTypeList: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListTenantAppResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTenantAppResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTenantAppResponseBody;
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
      body: ListTenantAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppCategoryRequest extends $tea.Model {
  language?: string;
  PId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      PId: 'PId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      PId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: ListTenantAppCategoryResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTenantAppCategoryResponseBodyData },
      message: 'string',
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

export class ListTenantAppCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTenantAppCategoryResponseBody;
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
      body: ListTenantAppCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnpackagedAppRequest extends $tea.Model {
  appVersion?: string;
  catalogId?: number;
  instanceId?: string;
  keyword?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      catalogId: 'CatalogId',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      catalogId: 'number',
      instanceId: 'string',
      keyword: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnpackagedAppResponseBody extends $tea.Model {
  apps?: ListUnpackagedAppResponseBodyApps[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListUnpackagedAppResponseBodyApps },
      code: 'string',
      message: 'string',
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

export class ListUnpackagedAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUnpackagedAppResponseBody;
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
      body: ListUnpackagedAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpdateImageAppRequest extends $tea.Model {
  appName?: string;
  appUid?: string;
  imageUid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUid: 'AppUid',
      imageUid: 'ImageUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUid: 'string',
      imageUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpdateImageAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListUpdateImageAppResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListUpdateImageAppResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpdateImageAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUpdateImageAppResponseBody;
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
      body: ListUpdateImageAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionAppInfoRequest extends $tea.Model {
  appTag?: string;
  appUid?: string;
  name?: string;
  os?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appTag: 'AppTag',
      appUid: 'AppUid',
      name: 'Name',
      os: 'Os',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTag: 'string',
      appUid: 'string',
      name: 'string',
      os: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionAppInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListVersionAppInfoResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVersionAppInfoResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVersionAppInfoResponseBody;
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
      body: ListVersionAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIsvAppAuditRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIsvAppAuditResponseBody extends $tea.Model {
  code?: string;
  data?: QueryIsvAppAuditResponseBodyData;
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
      data: QueryIsvAppAuditResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIsvAppAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIsvAppAuditResponseBody;
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
      body: QueryIsvAppAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsRequest extends $tea.Model {
  appId?: number;
  cateId?: number;
  itemId?: number;
  itemName?: string;
  pageNumber?: number;
  pageSize?: number;
  paymentType?: number;
  regionId?: string;
  requestId?: string;
  sellerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      itemId: 'ItemId',
      itemName: 'ItemName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      sellerId: 'SellerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      cateId: 'number',
      itemId: 'number',
      itemName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'number',
      regionId: 'string',
      requestId: 'string',
      sellerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryItemsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryItemsResponseBodyData },
      message: 'string',
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

export class QueryItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemsResponseBody;
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
      body: QueryItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersRequest extends $tea.Model {
  buyerId?: number;
  itemId?: number;
  orderName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  requestId?: string;
  sellerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      itemId: 'ItemId',
      orderName: 'OrderName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      sellerId: 'SellerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'number',
      itemId: 'number',
      orderName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      sellerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBody extends $tea.Model {
  code?: string;
  data?: QueryOrdersResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryOrdersResponseBodyData },
      message: 'string',
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

export class QueryOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrdersResponseBody;
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
      body: QueryOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppStreamAgreementStatusResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppStreamAgreementStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAppStreamAgreementStatusResponseBody;
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
      body: SetAppStreamAgreementStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeAppRequest extends $tea.Model {
  appId?: number;
  autoDeleteFlag?: boolean;
  autoInstallFlag?: boolean;
  distributeType?: string;
  forceInstallType?: string;
  language?: string;
  requestType?: string;
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoDeleteFlag: 'AutoDeleteFlag',
      autoInstallFlag: 'AutoInstallFlag',
      distributeType: 'DistributeType',
      forceInstallType: 'ForceInstallType',
      language: 'Language',
      requestType: 'RequestType',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      autoDeleteFlag: 'boolean',
      autoInstallFlag: 'boolean',
      distributeType: 'string',
      forceInstallType: 'string',
      language: 'string',
      requestType: 'string',
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeAppResponseBody extends $tea.Model {
  code?: string;
  data?: SubscribeAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubscribeAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubscribeAppResponseBody;
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
      body: SubscribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMetaRequest extends $tea.Model {
  appId?: number;
  appRegInfo?: string;
  appTag?: string[];
  appVersion?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  ossAppUrl?: string;
  publishType?: number;
  regionId?: string;
  silenceFlag?: number;
  silenceParam?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appRegInfo: 'AppRegInfo',
      appTag: 'AppTag',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      publishType: 'PublishType',
      regionId: 'RegionId',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appRegInfo: 'string',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appVersion: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      ossAppUrl: 'string',
      publishType: 'number',
      regionId: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMetaShrinkRequest extends $tea.Model {
  appId?: number;
  appRegInfo?: string;
  appTagShrink?: string;
  appVersion?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  ossAppUrl?: string;
  publishType?: number;
  regionId?: string;
  silenceFlag?: number;
  silenceParam?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appRegInfo: 'AppRegInfo',
      appTagShrink: 'AppTag',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      publishType: 'PublishType',
      regionId: 'RegionId',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appRegInfo: 'string',
      appTagShrink: 'string',
      appVersion: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      ossAppUrl: 'string',
      publishType: 'number',
      regionId: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMetaResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateAppMetaResponseBodyData;
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
      data: UpdateAppMetaResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppMetaResponseBody;
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
      body: UpdateAppMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppParamRequest extends $tea.Model {
  appInstallParam?: string;
  appInstallPath?: string;
  appStreamStartParam?: string;
  appUid?: string;
  versionAdaptParam?: string;
  static names(): { [key: string]: string } {
    return {
      appInstallParam: 'AppInstallParam',
      appInstallPath: 'AppInstallPath',
      appStreamStartParam: 'AppStreamStartParam',
      appUid: 'AppUid',
      versionAdaptParam: 'VersionAdaptParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstallParam: 'string',
      appInstallPath: 'string',
      appStreamStartParam: 'string',
      appUid: 'string',
      versionAdaptParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppParamResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateAppParamResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateAppParamResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppParamResponseBody;
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
      body: UpdateAppParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  applicationLink?: string;
  executeFile?: string;
  executeFileAddress?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  mock?: boolean;
  name?: string;
  ossAppUrl?: string;
  silenceFlag?: number;
  silenceParam?: string;
  startParam?: string;
  versionId?: number;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      executeFile: 'ExecuteFile',
      executeFileAddress: 'ExecuteFileAddress',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      mock: 'Mock',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      startParam: 'StartParam',
      versionId: 'VersionId',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      applicationLink: 'string',
      executeFile: 'string',
      executeFileAddress: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      mock: 'boolean',
      name: 'string',
      ossAppUrl: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      startParam: 'string',
      versionId: 'number',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateAppVersionResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateAppVersionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppVersionResponseBody;
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
      body: UpdateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppWamPackageInfoRequest extends $tea.Model {
  appId?: number;
  appVersion?: string;
  instanceId?: string;
  osType?: string;
  privateKey?: string;
  region?: string;
  systemVersion?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  wamFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      instanceId: 'InstanceId',
      osType: 'OsType',
      privateKey: 'PrivateKey',
      region: 'Region',
      systemVersion: 'SystemVersion',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
      wamFileSize: 'WamFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      instanceId: 'string',
      osType: 'string',
      privateKey: 'string',
      region: 'string',
      systemVersion: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
      wamFileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppWamPackageInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppWamPackageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppWamPackageInfoResponseBody;
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
      body: UpdateAppWamPackageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIsvAppRequest extends $tea.Model {
  appDownloadUrl?: string;
  appId?: number;
  appVersion?: string;
  applicationLink?: string;
  cateId?: number;
  copyrightName?: string;
  copyrightPath?: string;
  copyrightRealName?: string;
  detail?: string;
  developer?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  name?: string;
  newVersion?: string;
  ossAppUrl?: string;
  publishType?: number;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      appDownloadUrl: 'AppDownloadUrl',
      appId: 'AppId',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      cateId: 'CateId',
      copyrightName: 'CopyrightName',
      copyrightPath: 'CopyrightPath',
      copyrightRealName: 'CopyrightRealName',
      detail: 'Detail',
      developer: 'Developer',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      name: 'Name',
      newVersion: 'NewVersion',
      ossAppUrl: 'OssAppUrl',
      publishType: 'PublishType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDownloadUrl: 'string',
      appId: 'number',
      appVersion: 'string',
      applicationLink: 'string',
      cateId: 'number',
      copyrightName: 'string',
      copyrightPath: 'string',
      copyrightRealName: 'string',
      detail: 'string',
      developer: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      name: 'string',
      newVersion: 'string',
      ossAppUrl: 'string',
      publishType: 'number',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIsvAppResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIsvAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIsvAppResponseBody;
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
      body: UpdateIsvAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrderRequest extends $tea.Model {
  orderId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateOrderResponseBody;
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
      body: UpdateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSilenceRequest extends $tea.Model {
  appId?: number;
  silenceDeleteFlag?: number;
  silenceDeleteParam?: string;
  silenceInstallFlag?: number;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      silenceDeleteFlag: 'SilenceDeleteFlag',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallFlag: 'SilenceInstallFlag',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      silenceDeleteFlag: 'number',
      silenceDeleteParam: 'string',
      silenceInstallFlag: 'number',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSilenceResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateSilenceResponseBodyData;
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
      data: UpdateSilenceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSilenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSilenceResponseBody;
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
      body: UpdateSilenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantAppRequest extends $tea.Model {
  appId?: number;
  appTag?: string[];
  appTag1?: string;
  appVersion?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  cateType?: number;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  ossAppUrl?: string;
  searchTag?: string;
  silenceFlag?: number;
  silenceParam?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appTag: 'AppTag',
      appTag1: 'AppTag1',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      cateType: 'CateType',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      searchTag: 'SearchTag',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appTag1: 'string',
      appVersion: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      cateType: 'number',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      ossAppUrl: 'string',
      searchTag: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantAppShrinkRequest extends $tea.Model {
  appId?: number;
  appTagShrink?: string;
  appTag1?: string;
  appVersion?: string;
  applicationLink?: string;
  applicationType?: string;
  bizType?: string;
  cateId?: number;
  cateType?: number;
  description?: string;
  detail?: string;
  developer?: string;
  distributeType?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  iconUrl?: string;
  isFree?: string;
  licenceType?: string;
  name?: string;
  ossAppUrl?: string;
  searchTag?: string;
  silenceFlag?: number;
  silenceParam?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appTagShrink: 'AppTag',
      appTag1: 'AppTag1',
      appVersion: 'AppVersion',
      applicationLink: 'ApplicationLink',
      applicationType: 'ApplicationType',
      bizType: 'BizType',
      cateId: 'CateId',
      cateType: 'CateType',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      isFree: 'IsFree',
      licenceType: 'LicenceType',
      name: 'Name',
      ossAppUrl: 'OssAppUrl',
      searchTag: 'SearchTag',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appTagShrink: 'string',
      appTag1: 'string',
      appVersion: 'string',
      applicationLink: 'string',
      applicationType: 'string',
      bizType: 'string',
      cateId: 'number',
      cateType: 'number',
      description: 'string',
      detail: 'string',
      developer: 'string',
      distributeType: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      isFree: 'string',
      licenceType: 'string',
      name: 'string',
      ossAppUrl: 'string',
      searchTag: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantAppResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateTenantAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTenantAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTenantAppResponseBody;
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
      body: UpdateTenantAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserListRequest extends $tea.Model {
  adRegionId?: string;
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  userRegionId?: string;
  userType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adRegionId: 'AdRegionId',
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userRegionId: 'UserRegionId',
      userType: 'UserType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adRegionId: 'string',
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      userRegionId: 'string',
      userType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  userList?: UserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': UserListResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UserListResponseBody;
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
      body: UserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyStsTokenResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAppRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppRequestSilenceInfo extends $tea.Model {
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppRequestUserList extends $tea.Model {
  isDistribute?: boolean;
  name?: string;
  orderId?: number;
  subscribeId?: number;
  userEmail?: string;
  userId?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistribute: 'IsDistribute',
      name: 'Name',
      orderId: 'OrderId',
      subscribeId: 'SubscribeId',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistribute: 'boolean',
      name: 'string',
      orderId: 'number',
      subscribeId: 'number',
      userEmail: 'string',
      userId: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoInstallAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsResponseBodyDataFailAppList extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsResponseBodyDataSuccessAppList extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAppsResponseBodyData extends $tea.Model {
  failAppList?: BatchDeleteAppsResponseBodyDataFailAppList[];
  isSuccess?: boolean;
  successAppList?: BatchDeleteAppsResponseBodyDataSuccessAppList[];
  static names(): { [key: string]: string } {
    return {
      failAppList: 'FailAppList',
      isSuccess: 'IsSuccess',
      successAppList: 'SuccessAppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failAppList: { 'type': 'array', 'itemType': BatchDeleteAppsResponseBodyDataFailAppList },
      isSuccess: 'boolean',
      successAppList: { 'type': 'array', 'itemType': BatchDeleteAppsResponseBodyDataSuccessAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsRequestAutoInstallApps extends $tea.Model {
  appId?: number;
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsShrinkRequestAutoInstallApps extends $tea.Model {
  appId?: number;
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsShrinkRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDistributeAppsResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsRequestAutoInstallApps extends $tea.Model {
  appId?: number;
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsShrinkRequestAutoInstallApps extends $tea.Model {
  appId?: number;
  silenceDeleteParam?: string;
  silenceInstallParam?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceInstallParam: 'SilenceInstallParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      silenceDeleteParam: 'string',
      silenceInstallParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubscribeAppsResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAppshowResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeResponseBodyData extends $tea.Model {
  comments?: string;
  forceUpgrade?: boolean;
  size?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      forceUpgrade: 'ForceUpgrade',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      forceUpgrade: 'boolean',
      size: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantAppResponseBodyData extends $tea.Model {
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationUserRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationUserResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDistributeUserRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDistributeUserResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyApp extends $tea.Model {
  cateName?: string;
  description?: string;
  developer?: string;
  fileRealName?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  osType?: string;
  publishDate?: string;
  sandboxMode?: boolean;
  silenceFlag?: boolean;
  silenceParam?: string;
  size?: number;
  sourceType?: string;
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      description: 'Description',
      developer: 'Developer',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      publishDate: 'PublishDate',
      sandboxMode: 'SandboxMode',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      size: 'Size',
      sourceType: 'SourceType',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      description: 'string',
      developer: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      osType: 'string',
      publishDate: 'string',
      sandboxMode: 'boolean',
      silenceFlag: 'boolean',
      silenceParam: 'string',
      size: 'number',
      sourceType: 'string',
      status: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDownloadInfoResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  endpoint?: string;
  file?: string;
  realFileName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      file: 'File',
      realFileName: 'RealFileName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      file: 'string',
      realFileName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnpackagedAppDownloadInfoResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  endpoint?: string;
  file?: string;
  realFileName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      file: 'File',
      realFileName: 'RealFileName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      file: 'string',
      realFileName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeDownloadInfoResponseBodyDataDownloadInfo extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  endpoint?: string;
  file?: string;
  realFileName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      file: 'File',
      realFileName: 'RealFileName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      file: 'string',
      realFileName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeDownloadInfoResponseBodyData extends $tea.Model {
  comments?: string;
  downloadInfo?: DescribeUpgradeDownloadInfoResponseBodyDataDownloadInfo;
  forceUpgrade?: boolean;
  size?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      downloadInfo: 'DownloadInfo',
      forceUpgrade: 'ForceUpgrade',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      downloadInfo: DescribeUpgradeDownloadInfoResponseBodyDataDownloadInfo,
      forceUpgrade: 'boolean',
      size: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisibleAppsResponseBodyApps extends $tea.Model {
  cateName?: string;
  description?: string;
  developer?: string;
  fileRealName?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  osType?: string;
  publishDate?: string;
  sandboxMode?: boolean;
  size?: number;
  sourceType?: string;
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      description: 'Description',
      developer: 'Developer',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      publishDate: 'PublishDate',
      sandboxMode: 'SandboxMode',
      size: 'Size',
      sourceType: 'SourceType',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      description: 'string',
      developer: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      osType: 'string',
      publishDate: 'string',
      sandboxMode: 'boolean',
      size: 'number',
      sourceType: 'string',
      status: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeAppRequestUserList extends $tea.Model {
  userEmail?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userEmail: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdminStsCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  accessPath?: string;
  bucketName?: string;
  expiration?: string;
  filePath?: string;
  ossPoint?: string;
  ossPointInternal?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      accessPath: 'AccessPath',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      ossPointInternal: 'OssPointInternal',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      accessPath: 'string',
      bucketName: 'string',
      expiration: 'string',
      filePath: 'string',
      ossPoint: 'string',
      ossPointInternal: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppshowResponseBodyData extends $tea.Model {
  id?: number;
  isShow?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isShow: 'IsShow',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isShow: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvAppUploadCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  accessPath?: string;
  bucketName?: string;
  expiration?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      accessPath: 'AccessPath',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      accessPath: 'string',
      bucketName: 'string',
      expiration: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCertUploadCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  expiration?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiration: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIsvCopyrightUploadCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantAppResponseBodyData extends $tea.Model {
  appRegInfo?: string;
  cateId?: number;
  cateName?: string;
  description?: string;
  detail?: string;
  developer?: string;
  discountPrice?: number;
  distributeType?: string;
  executeFile?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  hasCert?: boolean;
  iconUrl?: string;
  id?: number;
  isFree?: string;
  licenseType?: string;
  manageCateEnName?: string;
  manageCateId?: number;
  manageCateName?: string;
  name?: string;
  originAppType?: string;
  originalPrice?: number;
  ossAppUrl?: string;
  price?: string;
  publishDate?: string;
  publishType?: string;
  searchTag?: string;
  silenceDeleteFlag?: number;
  silenceDeleteParam?: string;
  silenceFlag?: number;
  silenceParam?: string;
  sourceType?: string;
  status?: string;
  version?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appRegInfo: 'AppRegInfo',
      cateId: 'CateId',
      cateName: 'CateName',
      description: 'Description',
      detail: 'Detail',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      distributeType: 'DistributeType',
      executeFile: 'ExecuteFile',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      hasCert: 'HasCert',
      iconUrl: 'IconUrl',
      id: 'Id',
      isFree: 'IsFree',
      licenseType: 'LicenseType',
      manageCateEnName: 'ManageCateEnName',
      manageCateId: 'ManageCateId',
      manageCateName: 'ManageCateName',
      name: 'Name',
      originAppType: 'OriginAppType',
      originalPrice: 'OriginalPrice',
      ossAppUrl: 'OssAppUrl',
      price: 'Price',
      publishDate: 'PublishDate',
      publishType: 'PublishType',
      searchTag: 'SearchTag',
      silenceDeleteFlag: 'SilenceDeleteFlag',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      sourceType: 'SourceType',
      status: 'Status',
      version: 'Version',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appRegInfo: 'string',
      cateId: 'number',
      cateName: 'string',
      description: 'string',
      detail: 'string',
      developer: 'string',
      discountPrice: 'number',
      distributeType: 'string',
      executeFile: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      hasCert: 'boolean',
      iconUrl: 'string',
      id: 'number',
      isFree: 'string',
      licenseType: 'string',
      manageCateEnName: 'string',
      manageCateId: 'number',
      manageCateName: 'string',
      name: 'string',
      originAppType: 'string',
      originalPrice: 'number',
      ossAppUrl: 'string',
      price: 'string',
      publishDate: 'string',
      publishType: 'string',
      searchTag: 'string',
      silenceDeleteFlag: 'number',
      silenceDeleteParam: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      sourceType: 'string',
      status: 'string',
      version: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAppWamPackageInfoResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  endpoint?: string;
  file?: string;
  ossPointInternal?: string;
  realFileName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      file: 'File',
      ossPointInternal: 'OssPointInternal',
      realFileName: 'RealFileName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      file: 'string',
      ossPointInternal: 'string',
      realFileName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdWorkspaceResponseBodyData extends $tea.Model {
  adDomain?: string;
  adName?: string;
  adRegionId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      adName: 'AdName',
      adRegionId: 'AdRegionId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      adName: 'string',
      adRegionId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAppCategoryResponseBodyData extends $tea.Model {
  icon?: string;
  iconUrlInternal?: string;
  id?: number;
  name?: string;
  PId?: number;
  rank?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      iconUrlInternal: 'IconUrlInternal',
      id: 'Id',
      name: 'Name',
      PId: 'PId',
      rank: 'Rank',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      iconUrlInternal: 'string',
      id: 'number',
      name: 'string',
      PId: 'number',
      rank: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCatalogResponseBodyCatalogs extends $tea.Model {
  icon?: string;
  iconFocusUrl?: string;
  iconNormalUrl?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      iconFocusUrl: 'IconFocusUrl',
      iconNormalUrl: 'IconNormalUrl',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      iconFocusUrl: 'string',
      iconNormalUrl: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppOpenTypeResponseBodyData extends $tea.Model {
  appId?: string;
  fileType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileType: 'FileType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionResponseBodyData extends $tea.Model {
  adapterMode?: string;
  adapterUid?: string;
  appCateId?: number;
  appCateName?: string;
  appDescription?: string;
  appIconUrl?: string;
  appId?: number;
  appName?: string;
  appRegInfo?: string;
  appSize?: number;
  appVersion?: string;
  copyrightDownloadUrl?: string;
  copyrightName?: string;
  copyrightPath?: string;
  copyrightRealName?: string;
  createTime?: string;
  developer?: string;
  executeFile?: string;
  extInfo?: string;
  fileDownloadUrl?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  id?: number;
  isvId?: number;
  originAppType?: string;
  ossAppUrl?: string;
  processInstId?: string;
  publishType?: number;
  remark?: string;
  status?: number;
  updateTime?: string;
  versionName?: string;
  versionUid?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      adapterMode: 'AdapterMode',
      adapterUid: 'AdapterUid',
      appCateId: 'AppCateId',
      appCateName: 'AppCateName',
      appDescription: 'AppDescription',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appRegInfo: 'AppRegInfo',
      appSize: 'AppSize',
      appVersion: 'AppVersion',
      copyrightDownloadUrl: 'CopyrightDownloadUrl',
      copyrightName: 'CopyrightName',
      copyrightPath: 'CopyrightPath',
      copyrightRealName: 'CopyrightRealName',
      createTime: 'CreateTime',
      developer: 'Developer',
      executeFile: 'ExecuteFile',
      extInfo: 'ExtInfo',
      fileDownloadUrl: 'FileDownloadUrl',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      id: 'Id',
      isvId: 'IsvId',
      originAppType: 'OriginAppType',
      ossAppUrl: 'OssAppUrl',
      processInstId: 'ProcessInstId',
      publishType: 'PublishType',
      remark: 'Remark',
      status: 'Status',
      updateTime: 'UpdateTime',
      versionName: 'VersionName',
      versionUid: 'VersionUid',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adapterMode: 'string',
      adapterUid: 'string',
      appCateId: 'number',
      appCateName: 'string',
      appDescription: 'string',
      appIconUrl: 'string',
      appId: 'number',
      appName: 'string',
      appRegInfo: 'string',
      appSize: 'number',
      appVersion: 'string',
      copyrightDownloadUrl: 'string',
      copyrightName: 'string',
      copyrightPath: 'string',
      copyrightRealName: 'string',
      createTime: 'string',
      developer: 'string',
      executeFile: 'string',
      extInfo: 'string',
      fileDownloadUrl: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      id: 'number',
      isvId: 'number',
      originAppType: 'string',
      ossAppUrl: 'string',
      processInstId: 'string',
      publishType: 'number',
      remark: 'string',
      status: 'number',
      updateTime: 'string',
      versionName: 'string',
      versionUid: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAllUserResponseBodyUserList extends $tea.Model {
  isDistributeUser?: boolean;
  name?: string;
  orderId?: number;
  subscribeId?: number;
  userEmail?: string;
  userId?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistributeUser: 'IsDistributeUser',
      name: 'Name',
      orderId: 'OrderId',
      subscribeId: 'SubscribeId',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistributeUser: 'boolean',
      name: 'string',
      orderId: 'number',
      subscribeId: 'number',
      userEmail: 'string',
      userId: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationAppResponseBodyData extends $tea.Model {
  cateId?: number;
  cateName?: string;
  developer?: string;
  discountPrice?: number;
  iconUrl?: string;
  id?: number;
  isFree?: string;
  labels?: string;
  name?: string;
  originalPrice?: number;
  paymentType?: number;
  publishDate?: string;
  sourceType?: string;
  subscribeCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      iconUrl: 'IconUrl',
      id: 'Id',
      isFree: 'IsFree',
      labels: 'Labels',
      name: 'Name',
      originalPrice: 'OriginalPrice',
      paymentType: 'PaymentType',
      publishDate: 'PublishDate',
      sourceType: 'SourceType',
      subscribeCount: 'SubscribeCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      developer: 'string',
      discountPrice: 'number',
      iconUrl: 'string',
      id: 'number',
      isFree: 'string',
      labels: 'string',
      name: 'string',
      originalPrice: 'number',
      paymentType: 'number',
      publishDate: 'string',
      sourceType: 'string',
      subscribeCount: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationInfoResponseBodyData extends $tea.Model {
  distributeCount?: number;
  distributeLimit?: number;
  expireTime?: string;
  id?: number;
  orderId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      distributeCount: 'DistributeCount',
      distributeLimit: 'DistributeLimit',
      expireTime: 'ExpireTime',
      id: 'Id',
      orderId: 'OrderId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeCount: 'number',
      distributeLimit: 'number',
      expireTime: 'string',
      id: 'number',
      orderId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAllUserResponseBodyUserList extends $tea.Model {
  isDistributeUser?: boolean;
  name?: string;
  orderId?: number;
  subscribeId?: number;
  userEmail?: string;
  userId?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistributeUser: 'IsDistributeUser',
      name: 'Name',
      orderId: 'OrderId',
      subscribeId: 'SubscribeId',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistributeUser: 'boolean',
      name: 'string',
      orderId: 'number',
      subscribeId: 'number',
      userEmail: 'string',
      userId: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeAppResponseBodyData extends $tea.Model {
  cateId?: number;
  cateName?: string;
  developer?: string;
  discountPrice?: number;
  iconUrl?: string;
  id?: number;
  isFree?: string;
  labels?: string;
  name?: string;
  originAppType?: string;
  originalPrice?: number;
  paymentType?: number;
  publishDate?: string;
  sourceType?: string;
  status?: string;
  version?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      iconUrl: 'IconUrl',
      id: 'Id',
      isFree: 'IsFree',
      labels: 'Labels',
      name: 'Name',
      originAppType: 'OriginAppType',
      originalPrice: 'OriginalPrice',
      paymentType: 'PaymentType',
      publishDate: 'PublishDate',
      sourceType: 'SourceType',
      status: 'Status',
      version: 'Version',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      developer: 'string',
      discountPrice: 'number',
      iconUrl: 'string',
      id: 'number',
      isFree: 'string',
      labels: 'string',
      name: 'string',
      originAppType: 'string',
      originalPrice: 'number',
      paymentType: 'number',
      publishDate: 'string',
      sourceType: 'string',
      status: 'string',
      version: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributeUserByAppResponseBodyUserList extends $tea.Model {
  isDistributeUser?: boolean;
  name?: string;
  orderId?: number;
  subscribeId?: number;
  userEmail?: string;
  userId?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistributeUser: 'IsDistributeUser',
      name: 'Name',
      orderId: 'OrderId',
      subscribeId: 'SubscribeId',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistributeUser: 'boolean',
      name: 'string',
      orderId: 'number',
      subscribeId: 'number',
      userEmail: 'string',
      userId: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageAppResponseBodyData extends $tea.Model {
  appTag?: string[];
  appUid?: string;
  gmtCreate?: string;
  iconUrl?: string;
  id?: string;
  name?: string;
  osType?: string;
  status?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      appTag: 'AppTag',
      appUid: 'AppUid',
      gmtCreate: 'GmtCreate',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      status: 'Status',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTag: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      gmtCreate: 'string',
      iconUrl: 'string',
      id: 'string',
      name: 'string',
      osType: 'string',
      status: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppResponseBodyData extends $tea.Model {
  appRegInfo?: string;
  auditStatus?: number;
  cateId?: number;
  cateName?: string;
  createDate?: string;
  developer?: string;
  hasCert?: string;
  iconUrl?: string;
  id?: number;
  manageCateEnName?: string;
  manageCateId?: string;
  manageCateName?: string;
  name?: string;
  originAppType?: string;
  status?: number;
  updateDate?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appRegInfo: 'AppRegInfo',
      auditStatus: 'AuditStatus',
      cateId: 'CateId',
      cateName: 'CateName',
      createDate: 'CreateDate',
      developer: 'Developer',
      hasCert: 'HasCert',
      iconUrl: 'IconUrl',
      id: 'Id',
      manageCateEnName: 'ManageCateEnName',
      manageCateId: 'ManageCateId',
      manageCateName: 'ManageCateName',
      name: 'Name',
      originAppType: 'OriginAppType',
      status: 'Status',
      updateDate: 'UpdateDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appRegInfo: 'string',
      auditStatus: 'number',
      cateId: 'number',
      cateName: 'string',
      createDate: 'string',
      developer: 'string',
      hasCert: 'string',
      iconUrl: 'string',
      id: 'number',
      manageCateEnName: 'string',
      manageCateId: 'string',
      manageCateName: 'string',
      name: 'string',
      originAppType: 'string',
      status: 'number',
      updateDate: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvAppAuditsResponseBodyData extends $tea.Model {
  appCateId?: number;
  appIconUrl?: string;
  appId?: number;
  appName?: string;
  appRegInfo?: string;
  appVersion?: string;
  copyrightDownloadUrl?: string;
  createDate?: string;
  developer?: string;
  extInfo?: string;
  fileDownloadUrl?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  id?: number;
  originAppType?: string;
  publishType?: number;
  remark?: string;
  status?: number;
  updateDate?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appCateId: 'AppCateId',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appRegInfo: 'AppRegInfo',
      appVersion: 'AppVersion',
      copyrightDownloadUrl: 'CopyrightDownloadUrl',
      createDate: 'CreateDate',
      developer: 'Developer',
      extInfo: 'ExtInfo',
      fileDownloadUrl: 'FileDownloadUrl',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      id: 'Id',
      originAppType: 'OriginAppType',
      publishType: 'PublishType',
      remark: 'Remark',
      status: 'Status',
      updateDate: 'UpdateDate',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCateId: 'number',
      appIconUrl: 'string',
      appId: 'number',
      appName: 'string',
      appRegInfo: 'string',
      appVersion: 'string',
      copyrightDownloadUrl: 'string',
      createDate: 'string',
      developer: 'string',
      extInfo: 'string',
      fileDownloadUrl: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      id: 'number',
      originAppType: 'string',
      publishType: 'number',
      remark: 'string',
      status: 'number',
      updateDate: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAppResponseBodyApps extends $tea.Model {
  cateName?: string;
  description?: string;
  developer?: string;
  fileRealName?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  osType?: string;
  publishDate?: string;
  size?: number;
  sourceType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      description: 'Description',
      developer: 'Developer',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      publishDate: 'PublishDate',
      size: 'Size',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      description: 'string',
      developer: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      osType: 'string',
      publishDate: 'string',
      size: 'number',
      sourceType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeAppResponseBodyData extends $tea.Model {
  cateId?: number;
  cateName?: string;
  developer?: string;
  discountPrice?: number;
  iconUrl?: string;
  id?: number;
  isFree?: string;
  labels?: string;
  name?: string;
  originalPrice?: number;
  paymentType?: number;
  publishDate?: string;
  sourceType?: string;
  subscribeCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      iconUrl: 'IconUrl',
      id: 'Id',
      isFree: 'IsFree',
      labels: 'Labels',
      name: 'Name',
      originalPrice: 'OriginalPrice',
      paymentType: 'PaymentType',
      publishDate: 'PublishDate',
      sourceType: 'SourceType',
      subscribeCount: 'SubscribeCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      developer: 'string',
      discountPrice: 'number',
      iconUrl: 'string',
      id: 'number',
      isFree: 'string',
      labels: 'string',
      name: 'string',
      originalPrice: 'number',
      paymentType: 'number',
      publishDate: 'string',
      sourceType: 'string',
      subscribeCount: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeInfoResponseBodyData extends $tea.Model {
  appId?: number;
  distributeCount?: number;
  distributeLimit?: number;
  distributeType?: string;
  expireTime?: string;
  id?: number;
  installMode?: string;
  orderId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      distributeCount: 'DistributeCount',
      distributeLimit: 'DistributeLimit',
      distributeType: 'DistributeType',
      expireTime: 'ExpireTime',
      id: 'Id',
      installMode: 'InstallMode',
      orderId: 'OrderId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      distributeCount: 'number',
      distributeLimit: 'number',
      distributeType: 'string',
      expireTime: 'string',
      id: 'number',
      installMode: 'string',
      orderId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppResponseBodyData extends $tea.Model {
  adminTag?: string[];
  appAdminTag?: string;
  appRegInfo?: string;
  appTag?: string[];
  appUid?: string;
  autoInstallFlag?: boolean;
  autoInstallType?: string;
  cateId?: number;
  cateName?: string;
  clusterUid?: string;
  description?: string;
  developer?: string;
  discountPrice?: number;
  distributeType?: string;
  expireTime?: string;
  extend?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hasCert?: boolean;
  iconUrl?: string;
  iconUrlInternal?: string;
  id?: number;
  install?: boolean;
  isFree?: string;
  isGame?: boolean;
  isWhiteList?: number;
  itemCode?: string;
  labels?: string;
  licenseType?: string;
  manageCateEnName?: string;
  manageCateId?: number;
  manageCateName?: string;
  name?: string;
  originAppType?: string;
  originalPrice?: number;
  osType?: string;
  ownerOs?: string;
  paymentType?: number;
  price?: string;
  priority?: number;
  publishDate?: string;
  publishType?: string;
  searchTag?: string;
  silenceDeleteFlag?: number;
  silenceDeleteParam?: string;
  silenceFlag?: number;
  silenceParam?: string;
  size?: number;
  sourceType?: string;
  startTime?: string;
  status?: string;
  subSourceType?: string;
  subscribeCount?: number;
  supplierId?: number;
  userTag?: string[];
  version?: string;
  versionName?: string;
  wamFileName?: string;
  wamFilePath?: string;
  wamFileRealName?: string;
  wamFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminTag: 'AdminTag',
      appAdminTag: 'AppAdminTag',
      appRegInfo: 'AppRegInfo',
      appTag: 'AppTag',
      appUid: 'AppUid',
      autoInstallFlag: 'AutoInstallFlag',
      autoInstallType: 'AutoInstallType',
      cateId: 'CateId',
      cateName: 'CateName',
      clusterUid: 'ClusterUid',
      description: 'Description',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      distributeType: 'DistributeType',
      expireTime: 'ExpireTime',
      extend: 'Extend',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasCert: 'HasCert',
      iconUrl: 'IconUrl',
      iconUrlInternal: 'IconUrlInternal',
      id: 'Id',
      install: 'Install',
      isFree: 'IsFree',
      isGame: 'IsGame',
      isWhiteList: 'IsWhiteList',
      itemCode: 'ItemCode',
      labels: 'Labels',
      licenseType: 'LicenseType',
      manageCateEnName: 'ManageCateEnName',
      manageCateId: 'ManageCateId',
      manageCateName: 'ManageCateName',
      name: 'Name',
      originAppType: 'OriginAppType',
      originalPrice: 'OriginalPrice',
      osType: 'OsType',
      ownerOs: 'OwnerOs',
      paymentType: 'PaymentType',
      price: 'Price',
      priority: 'Priority',
      publishDate: 'PublishDate',
      publishType: 'PublishType',
      searchTag: 'SearchTag',
      silenceDeleteFlag: 'SilenceDeleteFlag',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      size: 'Size',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      subSourceType: 'SubSourceType',
      subscribeCount: 'SubscribeCount',
      supplierId: 'SupplierId',
      userTag: 'UserTag',
      version: 'Version',
      versionName: 'VersionName',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
      wamFileSize: 'WamFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminTag: { 'type': 'array', 'itemType': 'string' },
      appAdminTag: 'string',
      appRegInfo: 'string',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      autoInstallFlag: 'boolean',
      autoInstallType: 'string',
      cateId: 'number',
      cateName: 'string',
      clusterUid: 'string',
      description: 'string',
      developer: 'string',
      discountPrice: 'number',
      distributeType: 'string',
      expireTime: 'string',
      extend: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasCert: 'boolean',
      iconUrl: 'string',
      iconUrlInternal: 'string',
      id: 'number',
      install: 'boolean',
      isFree: 'string',
      isGame: 'boolean',
      isWhiteList: 'number',
      itemCode: 'string',
      labels: 'string',
      licenseType: 'string',
      manageCateEnName: 'string',
      manageCateId: 'number',
      manageCateName: 'string',
      name: 'string',
      originAppType: 'string',
      originalPrice: 'number',
      osType: 'string',
      ownerOs: 'string',
      paymentType: 'number',
      price: 'string',
      priority: 'number',
      publishDate: 'string',
      publishType: 'string',
      searchTag: 'string',
      silenceDeleteFlag: 'number',
      silenceDeleteParam: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      size: 'number',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      subSourceType: 'string',
      subscribeCount: 'number',
      supplierId: 'number',
      userTag: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      versionName: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
      wamFileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppCategoryResponseBodyData extends $tea.Model {
  clientCateEnName?: string;
  clientCateName?: string;
  icon?: string;
  iconUrlInternal?: string;
  id?: number;
  name?: string;
  PId?: number;
  rank?: number;
  static names(): { [key: string]: string } {
    return {
      clientCateEnName: 'ClientCateEnName',
      clientCateName: 'ClientCateName',
      icon: 'Icon',
      iconUrlInternal: 'IconUrlInternal',
      id: 'Id',
      name: 'Name',
      PId: 'PId',
      rank: 'Rank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCateEnName: 'string',
      clientCateName: 'string',
      icon: 'string',
      iconUrlInternal: 'string',
      id: 'number',
      name: 'string',
      PId: 'number',
      rank: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnpackagedAppResponseBodyApps extends $tea.Model {
  appId?: number;
  cateName?: string;
  description?: string;
  developer?: string;
  fileRealName?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  osType?: string;
  publishDate?: string;
  size?: number;
  sourceType?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateName: 'CateName',
      description: 'Description',
      developer: 'Developer',
      fileRealName: 'FileRealName',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      publishDate: 'PublishDate',
      size: 'Size',
      sourceType: 'SourceType',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      cateName: 'string',
      description: 'string',
      developer: 'string',
      fileRealName: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      osType: 'string',
      publishDate: 'string',
      size: 'number',
      sourceType: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpdateImageAppResponseBodyData extends $tea.Model {
  adaptorUid?: string;
  appTag?: string[];
  appUid?: string;
  gmtCreate?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  osType?: string;
  status?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
      appTag: 'AppTag',
      appUid: 'AppUid',
      gmtCreate: 'GmtCreate',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      status: 'Status',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      gmtCreate: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      osType: 'string',
      status: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionAppInfoResponseBodyData extends $tea.Model {
  adaptorUid?: string;
  appTag?: string[];
  appUid?: string;
  cateId?: number;
  gmtCreate?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  ownerOs?: string;
  size?: number;
  status?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
      appTag: 'AppTag',
      appUid: 'AppUid',
      cateId: 'CateId',
      gmtCreate: 'GmtCreate',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      ownerOs: 'OwnerOs',
      size: 'Size',
      status: 'Status',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      cateId: 'number',
      gmtCreate: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      ownerOs: 'string',
      size: 'number',
      status: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIsvAppAuditResponseBodyData extends $tea.Model {
  appCateId?: number;
  appIconUrl?: string;
  appId?: number;
  appName?: string;
  appVersion?: string;
  copyrightDownloadUrl?: string;
  copyrightName?: string;
  copyrightPath?: string;
  copyrightRealName?: string;
  createDate?: string;
  developer?: string;
  extInfo?: string;
  fileDownloadUrl?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  originAppType?: string;
  publishType?: number;
  remark?: string;
  status?: number;
  updateDate?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appCateId: 'AppCateId',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      copyrightDownloadUrl: 'CopyrightDownloadUrl',
      copyrightName: 'CopyrightName',
      copyrightPath: 'CopyrightPath',
      copyrightRealName: 'CopyrightRealName',
      createDate: 'CreateDate',
      developer: 'Developer',
      extInfo: 'ExtInfo',
      fileDownloadUrl: 'FileDownloadUrl',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      originAppType: 'OriginAppType',
      publishType: 'PublishType',
      remark: 'Remark',
      status: 'Status',
      updateDate: 'UpdateDate',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCateId: 'number',
      appIconUrl: 'string',
      appId: 'number',
      appName: 'string',
      appVersion: 'string',
      copyrightDownloadUrl: 'string',
      copyrightName: 'string',
      copyrightPath: 'string',
      copyrightRealName: 'string',
      createDate: 'string',
      developer: 'string',
      extInfo: 'string',
      fileDownloadUrl: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      originAppType: 'string',
      publishType: 'number',
      remark: 'string',
      status: 'number',
      updateDate: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyDataAppDTO extends $tea.Model {
  cateName?: string;
  developer?: string;
  iconUrl?: string;
  licenseType?: number;
  modifyDate?: string;
  name?: string;
  publishDate?: string;
  sourceType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      developer: 'Developer',
      iconUrl: 'IconUrl',
      licenseType: 'LicenseType',
      modifyDate: 'ModifyDate',
      name: 'Name',
      publishDate: 'PublishDate',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      developer: 'string',
      iconUrl: 'string',
      licenseType: 'number',
      modifyDate: 'string',
      name: 'string',
      publishDate: 'string',
      sourceType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyData extends $tea.Model {
  appDTO?: QueryItemsResponseBodyDataAppDTO;
  appId?: number;
  cateId?: number;
  id?: number;
  itemCode?: string;
  itemName?: string;
  labels?: string;
  paymentType?: number;
  picUrl?: string;
  price?: string;
  rawPrice?: string;
  sellerId?: number;
  static names(): { [key: string]: string } {
    return {
      appDTO: 'AppDTO',
      appId: 'AppId',
      cateId: 'CateId',
      id: 'Id',
      itemCode: 'ItemCode',
      itemName: 'ItemName',
      labels: 'Labels',
      paymentType: 'PaymentType',
      picUrl: 'PicUrl',
      price: 'Price',
      rawPrice: 'RawPrice',
      sellerId: 'SellerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDTO: QueryItemsResponseBodyDataAppDTO,
      appId: 'number',
      cateId: 'number',
      id: 'number',
      itemCode: 'string',
      itemName: 'string',
      labels: 'string',
      paymentType: 'number',
      picUrl: 'string',
      price: 'string',
      rawPrice: 'string',
      sellerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataAppDTO extends $tea.Model {
  developer?: string;
  gmtModified?: number;
  licenseType?: number;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      developer: 'Developer',
      gmtModified: 'GmtModified',
      licenseType: 'LicenseType',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developer: 'string',
      gmtModified: 'number',
      licenseType: 'number',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyData extends $tea.Model {
  amount?: number;
  appDTO?: QueryOrdersResponseBodyDataAppDTO;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  orderName?: string;
  orderTime?: string;
  outDateTime?: number;
  paymentTime?: string;
  price?: string;
  rawPrice?: string;
  status?: number;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appDTO: 'AppDTO',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      orderName: 'OrderName',
      orderTime: 'OrderTime',
      outDateTime: 'OutDateTime',
      paymentTime: 'PaymentTime',
      price: 'Price',
      rawPrice: 'RawPrice',
      status: 'Status',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appDTO: QueryOrdersResponseBodyDataAppDTO,
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      orderName: 'string',
      orderTime: 'string',
      outDateTime: 'number',
      paymentTime: 'string',
      price: 'string',
      rawPrice: 'string',
      status: 'number',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMetaResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppParamResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSilenceResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantAppResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserListResponseBodyUserList extends $tea.Model {
  isDistribute?: boolean;
  name?: string;
  userEmail?: string;
  userId?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistribute: 'IsDistribute',
      name: 'Name',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistribute: 'boolean',
      name: 'string',
      userEmail: 'string',
      userId: 'number',
      userType: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async appDownloadEventWithOptions(request: AppDownloadEventRequest, runtime: $Util.RuntimeOptions): Promise<AppDownloadEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AppDownloadEvent",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppDownloadEventResponse>(await this.callApi(params, req, runtime), new AppDownloadEventResponse({}));
  }

  async appDownloadEvent(request: AppDownloadEventRequest): Promise<AppDownloadEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appDownloadEventWithOptions(request, runtime);
  }

  async appInstallEventWithOptions(request: AppInstallEventRequest, runtime: $Util.RuntimeOptions): Promise<AppInstallEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AppInstallEvent",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppInstallEventResponse>(await this.callApi(params, req, runtime), new AppInstallEventResponse({}));
  }

  async appInstallEvent(request: AppInstallEventRequest): Promise<AppInstallEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appInstallEventWithOptions(request, runtime);
  }

  async applyStsTokenWithOptions(request: ApplyStsTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyStsTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionCode)) {
      query["AppVersionCode"] = request.appVersionCode;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyStsToken",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyStsTokenResponse>(await this.callApi(params, req, runtime), new ApplyStsTokenResponse({}));
  }

  async applyStsToken(request: ApplyStsTokenRequest): Promise<ApplyStsTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyStsTokenWithOptions(request, runtime);
  }

  async authorizeAppWithOptions(request: AuthorizeAppRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeAppResponse>(await this.callApi(params, req, runtime), new AuthorizeAppResponse({}));
  }

  async authorizeApp(request: AuthorizeAppRequest): Promise<AuthorizeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeAppWithOptions(request, runtime);
  }

  async autoInstallAppWithOptions(tmpReq: AutoInstallAppRequest, runtime: $Util.RuntimeOptions): Promise<AutoInstallAppResponse> {
    Util.validateModel(tmpReq);
    let request = new AutoInstallAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.silenceInfo)) {
      request.silenceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.silenceInfo, "SilenceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "UserList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.silenceInfoShrink)) {
      body["SilenceInfo"] = request.silenceInfoShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userListShrink)) {
      body["UserList"] = request.userListShrink;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AutoInstallApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AutoInstallAppResponse>(await this.callApi(params, req, runtime), new AutoInstallAppResponse({}));
  }

  async autoInstallApp(request: AutoInstallAppRequest): Promise<AutoInstallAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.autoInstallAppWithOptions(request, runtime);
  }

  async batchDeleteAppsWithOptions(tmpReq: BatchDeleteAppsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteAppsResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDeleteAppsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appIds)) {
      request.appIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIds, "AppIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appIdsShrink)) {
      query["AppIds"] = request.appIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteApps",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteAppsResponse>(await this.callApi(params, req, runtime), new BatchDeleteAppsResponse({}));
  }

  async batchDeleteApps(request: BatchDeleteAppsRequest): Promise<BatchDeleteAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteAppsWithOptions(request, runtime);
  }

  async batchDistributeAppsWithOptions(tmpReq: BatchDistributeAppsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDistributeAppsResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDistributeAppsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appIds)) {
      request.appIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIds, "AppIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appIdsShrink)) {
      query["AppIds"] = request.appIdsShrink;
    }

    if (!Util.isUnset(request.autoInstallApps)) {
      query["AutoInstallApps"] = request.autoInstallApps;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.requestType)) {
      body["RequestType"] = request.requestType;
    }

    if (!Util.isUnset(request.subscribeId)) {
      body["SubscribeId"] = request.subscribeId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDistributeApps",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDistributeAppsResponse>(await this.callApi(params, req, runtime), new BatchDistributeAppsResponse({}));
  }

  async batchDistributeApps(request: BatchDistributeAppsRequest): Promise<BatchDistributeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDistributeAppsWithOptions(request, runtime);
  }

  async batchSubscribeAppsWithOptions(tmpReq: BatchSubscribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSubscribeAppsResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchSubscribeAppsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appIds)) {
      request.appIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIds, "AppIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appIdsShrink)) {
      query["AppIds"] = request.appIdsShrink;
    }

    if (!Util.isUnset(request.autoInstallApps)) {
      query["AutoInstallApps"] = request.autoInstallApps;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.forceInstallType)) {
      body["ForceInstallType"] = request.forceInstallType;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.requestType)) {
      body["RequestType"] = request.requestType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchSubscribeApps",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSubscribeAppsResponse>(await this.callApi(params, req, runtime), new BatchSubscribeAppsResponse({}));
  }

  async batchSubscribeApps(request: BatchSubscribeAppsRequest): Promise<BatchSubscribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSubscribeAppsWithOptions(request, runtime);
  }

  async changeAppshowWithOptions(request: ChangeAppshowRequest, runtime: $Util.RuntimeOptions): Promise<ChangeAppshowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isShow)) {
      query["IsShow"] = request.isShow;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeAppshow",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeAppshowResponse>(await this.callApi(params, req, runtime), new ChangeAppshowResponse({}));
  }

  async changeAppshow(request: ChangeAppshowRequest): Promise<ChangeAppshowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAppshowWithOptions(request, runtime);
  }

  async checkUpgradeWithOptions(request: CheckUpgradeRequest, runtime: $Util.RuntimeOptions): Promise<CheckUpgradeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionCode)) {
      query["AppVersionCode"] = request.appVersionCode;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUpgrade",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUpgradeResponse>(await this.callApi(params, req, runtime), new CheckUpgradeResponse({}));
  }

  async checkUpgrade(request: CheckUpgradeRequest): Promise<CheckUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUpgradeWithOptions(request, runtime);
  }

  async clientOnOpenEventWithOptions(request: ClientOnOpenEventRequest, runtime: $Util.RuntimeOptions): Promise<ClientOnOpenEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClientOnOpenEvent",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClientOnOpenEventResponse>(await this.callApi(params, req, runtime), new ClientOnOpenEventResponse({}));
  }

  async clientOnOpenEvent(request: ClientOnOpenEventRequest): Promise<ClientOnOpenEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clientOnOpenEventWithOptions(request, runtime);
  }

  async completeAppWithOptions(request: CompleteAppRequest, runtime: $Util.RuntimeOptions): Promise<CompleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompleteAppResponse>(await this.callApi(params, req, runtime), new CompleteAppResponse({}));
  }

  async completeApp(request: CompleteAppRequest): Promise<CompleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeAppWithOptions(request, runtime);
  }

  async completeIconWithOptions(request: CompleteIconRequest, runtime: $Util.RuntimeOptions): Promise<CompleteIconResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteIcon",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompleteIconResponse>(await this.callApi(params, req, runtime), new CompleteIconResponse({}));
  }

  async completeIcon(request: CompleteIconRequest): Promise<CompleteIconResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeIconWithOptions(request, runtime);
  }

  async createAppVersionWithOptions(request: CreateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    if (!Util.isUnset(request.copyrightName)) {
      body["CopyrightName"] = request.copyrightName;
    }

    if (!Util.isUnset(request.copyrightPath)) {
      body["CopyrightPath"] = request.copyrightPath;
    }

    if (!Util.isUnset(request.copyrightRealName)) {
      body["CopyrightRealName"] = request.copyrightRealName;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.executeFileAddress)) {
      body["ExecuteFileAddress"] = request.executeFileAddress;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.silenceFlag)) {
      body["SilenceFlag"] = request.silenceFlag;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    if (!Util.isUnset(request.startParam)) {
      body["StartParam"] = request.startParam;
    }

    if (!Util.isUnset(request.wamFileName)) {
      body["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      body["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      body["WamFileRealName"] = request.wamFileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppVersion",
      version: "2021-06-02",
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

  async createIsvAppWithOptions(request: CreateIsvAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateIsvAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appDownloadUrl)) {
      body["AppDownloadUrl"] = request.appDownloadUrl;
    }

    if (!Util.isUnset(request.appRegInfo)) {
      body["AppRegInfo"] = request.appRegInfo;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.applicationLink)) {
      body["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.cateId)) {
      body["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.certFileName)) {
      body["CertFileName"] = request.certFileName;
    }

    if (!Util.isUnset(request.certFilePath)) {
      body["CertFilePath"] = request.certFilePath;
    }

    if (!Util.isUnset(request.certFileRealName)) {
      body["CertFileRealName"] = request.certFileRealName;
    }

    if (!Util.isUnset(request.copyrightName)) {
      body["CopyrightName"] = request.copyrightName;
    }

    if (!Util.isUnset(request.copyrightPath)) {
      body["CopyrightPath"] = request.copyrightPath;
    }

    if (!Util.isUnset(request.copyrightRealName)) {
      body["CopyrightRealName"] = request.copyrightRealName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.developer)) {
      body["Developer"] = request.developer;
    }

    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.licenseName)) {
      body["LicenseName"] = request.licenseName;
    }

    if (!Util.isUnset(request.licensePath)) {
      body["LicensePath"] = request.licensePath;
    }

    if (!Util.isUnset(request.licenseRealName)) {
      body["LicenseRealName"] = request.licenseRealName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchTag)) {
      body["SearchTag"] = request.searchTag;
    }

    if (!Util.isUnset(request.silenceDeleteParam)) {
      body["SilenceDeleteParam"] = request.silenceDeleteParam;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIsvApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIsvAppResponse>(await this.callApi(params, req, runtime), new CreateIsvAppResponse({}));
  }

  async createIsvApp(request: CreateIsvAppRequest): Promise<CreateIsvAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIsvAppWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.buyerId)) {
      query["BuyerId"] = request.buyerId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async createTenantAppWithOptions(tmpReq: CreateTenantAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantAppResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTenantAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appTag)) {
      request.appTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appTag, "AppTag", "json");
    }

    if (!Util.isUnset(tmpReq.fileOpenWay)) {
      request.fileOpenWayShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileOpenWay, "FileOpenWay", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTagShrink)) {
      body["AppTag"] = request.appTagShrink;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    if (!Util.isUnset(request.applicationLink)) {
      body["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cateId)) {
      body["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.cateType)) {
      body["CateType"] = request.cateType;
    }

    if (!Util.isUnset(request.controlParam)) {
      body["ControlParam"] = request.controlParam;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.developer)) {
      body["Developer"] = request.developer;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.executeFileAddress)) {
      body["ExecuteFileAddress"] = request.executeFileAddress;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileOpenWayShrink)) {
      body["FileOpenWay"] = request.fileOpenWayShrink;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.isFree)) {
      body["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.licenceType)) {
      body["LicenceType"] = request.licenceType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.OS)) {
      body["OS"] = request.OS;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.searchTag)) {
      body["SearchTag"] = request.searchTag;
    }

    if (!Util.isUnset(request.silenceFlag)) {
      body["SilenceFlag"] = request.silenceFlag;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startParam)) {
      body["StartParam"] = request.startParam;
    }

    if (!Util.isUnset(request.subAppType)) {
      body["SubAppType"] = request.subAppType;
    }

    if (!Util.isUnset(request.wamFileName)) {
      body["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      body["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      body["WamFileRealName"] = request.wamFileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantAppResponse>(await this.callApi(params, req, runtime), new CreateTenantAppResponse({}));
  }

  async createTenantApp(request: CreateTenantAppRequest): Promise<CreateTenantAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantAppWithOptions(request, runtime);
  }

  async deleteAppVersionWithOptions(request: DeleteAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppVersion",
      version: "2021-06-02",
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

  async deleteAuthorizationUserWithOptions(request: DeleteAuthorizationUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAuthorizationUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAuthorizationUser",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAuthorizationUserResponse>(await this.callApi(params, req, runtime), new DeleteAuthorizationUserResponse({}));
  }

  async deleteAuthorizationUser(request: DeleteAuthorizationUserRequest): Promise<DeleteAuthorizationUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAuthorizationUserWithOptions(request, runtime);
  }

  async deleteDistributeUserWithOptions(request: DeleteDistributeUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDistributeUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDistributeUser",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDistributeUserResponse>(await this.callApi(params, req, runtime), new DeleteDistributeUserResponse({}));
  }

  async deleteDistributeUser(request: DeleteDistributeUserRequest): Promise<DeleteDistributeUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDistributeUserWithOptions(request, runtime);
  }

  async deleteIsvAppWithOptions(request: DeleteIsvAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIsvAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIsvApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIsvAppResponse>(await this.callApi(params, req, runtime), new DeleteIsvAppResponse({}));
  }

  async deleteIsvApp(request: DeleteIsvAppRequest): Promise<DeleteIsvAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIsvAppWithOptions(request, runtime);
  }

  async deleteTenantAppWithOptions(request: DeleteTenantAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTenantAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTenantAppResponse>(await this.callApi(params, req, runtime), new DeleteTenantAppResponse({}));
  }

  async deleteTenantApp(request: DeleteTenantAppRequest): Promise<DeleteTenantAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantAppWithOptions(request, runtime);
  }

  async describeAppWithOptions(request: DescribeAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppResponse>(await this.callApi(params, req, runtime), new DescribeAppResponse({}));
  }

  async describeApp(request: DescribeAppRequest): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppWithOptions(request, runtime);
  }

  async describeAppDownloadInfoWithOptions(request: DescribeAppDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppDownloadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appMode)) {
      query["AppMode"] = request.appMode;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionCode)) {
      query["AppVersionCode"] = request.appVersionCode;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppDownloadInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppDownloadInfoResponse>(await this.callApi(params, req, runtime), new DescribeAppDownloadInfoResponse({}));
  }

  async describeAppDownloadInfo(request: DescribeAppDownloadInfoRequest): Promise<DescribeAppDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppDownloadInfoWithOptions(request, runtime);
  }

  async describeUnpackagedAppDownloadInfoWithOptions(request: DescribeUnpackagedAppDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnpackagedAppDownloadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnpackagedAppDownloadInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnpackagedAppDownloadInfoResponse>(await this.callApi(params, req, runtime), new DescribeUnpackagedAppDownloadInfoResponse({}));
  }

  async describeUnpackagedAppDownloadInfo(request: DescribeUnpackagedAppDownloadInfoRequest): Promise<DescribeUnpackagedAppDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnpackagedAppDownloadInfoWithOptions(request, runtime);
  }

  async describeUpgradeDownloadInfoWithOptions(request: DescribeUpgradeDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpgradeDownloadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appVersionCode)) {
      query["AppVersionCode"] = request.appVersionCode;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUpgradeDownloadInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUpgradeDownloadInfoResponse>(await this.callApi(params, req, runtime), new DescribeUpgradeDownloadInfoResponse({}));
  }

  async describeUpgradeDownloadInfo(request: DescribeUpgradeDownloadInfoRequest): Promise<DescribeUpgradeDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpgradeDownloadInfoWithOptions(request, runtime);
  }

  async describeVisibleAppsWithOptions(request: DescribeVisibleAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVisibleAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVisibleApps",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVisibleAppsResponse>(await this.callApi(params, req, runtime), new DescribeVisibleAppsResponse({}));
  }

  async describeVisibleApps(request: DescribeVisibleAppsRequest): Promise<DescribeVisibleAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVisibleAppsWithOptions(request, runtime);
  }

  async distributeAppWithOptions(request: DistributeAppRequest, runtime: $Util.RuntimeOptions): Promise<DistributeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoInstallFlag)) {
      body["AutoInstallFlag"] = request.autoInstallFlag;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.requestType)) {
      body["RequestType"] = request.requestType;
    }

    if (!Util.isUnset(request.subscribeId)) {
      body["SubscribeId"] = request.subscribeId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DistributeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DistributeAppResponse>(await this.callApi(params, req, runtime), new DistributeAppResponse({}));
  }

  async distributeApp(request: DistributeAppRequest): Promise<DistributeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.distributeAppWithOptions(request, runtime);
  }

  async getAdminStsCredentialWithOptions(request: GetAdminStsCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetAdminStsCredentialResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.isManual)) {
      body["IsManual"] = request.isManual;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAdminStsCredential",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdminStsCredentialResponse>(await this.callApi(params, req, runtime), new GetAdminStsCredentialResponse({}));
  }

  async getAdminStsCredential(request: GetAdminStsCredentialRequest): Promise<GetAdminStsCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdminStsCredentialWithOptions(request, runtime);
  }

  async getAppDownloadUrlWithOptions(request: GetAppDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAppDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppDownloadUrl",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetAppDownloadUrlResponse({}));
  }

  async getAppDownloadUrl(request: GetAppDownloadUrlRequest): Promise<GetAppDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppDownloadUrlWithOptions(request, runtime);
  }

  async getAppStreamAgreementStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAppStreamAgreementStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAppStreamAgreementStatus",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppStreamAgreementStatusResponse>(await this.callApi(params, req, runtime), new GetAppStreamAgreementStatusResponse({}));
  }

  async getAppStreamAgreementStatus(): Promise<GetAppStreamAgreementStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppStreamAgreementStatusWithOptions(runtime);
  }

  async getAppshowWithOptions(request: GetAppshowRequest, runtime: $Util.RuntimeOptions): Promise<GetAppshowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isShow)) {
      body["IsShow"] = request.isShow;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAppshow",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppshowResponse>(await this.callApi(params, req, runtime), new GetAppshowResponse({}));
  }

  async getAppshow(request: GetAppshowRequest): Promise<GetAppshowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppshowWithOptions(request, runtime);
  }

  async getCertWithOptions(request: GetCertRequest, runtime: $Util.RuntimeOptions): Promise<GetCertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCert",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCertResponse>(await this.callApi(params, req, runtime), new GetCertResponse({}));
  }

  async getCert(request: GetCertRequest): Promise<GetCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertWithOptions(request, runtime);
  }

  async getCertTemplateWithOptions(request: GetCertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetCertTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCertTemplate",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCertTemplateResponse>(await this.callApi(params, req, runtime), new GetCertTemplateResponse({}));
  }

  async getCertTemplate(request: GetCertTemplateRequest): Promise<GetCertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertTemplateWithOptions(request, runtime);
  }

  async getIconDownloadUrlWithOptions(request: GetIconDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetIconDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIconDownloadUrl",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIconDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetIconDownloadUrlResponse({}));
  }

  async getIconDownloadUrl(request: GetIconDownloadUrlRequest): Promise<GetIconDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIconDownloadUrlWithOptions(request, runtime);
  }

  async getIsvAppUploadCredentialWithOptions(runtime: $Util.RuntimeOptions): Promise<GetIsvAppUploadCredentialResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetIsvAppUploadCredential",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIsvAppUploadCredentialResponse>(await this.callApi(params, req, runtime), new GetIsvAppUploadCredentialResponse({}));
  }

  async getIsvAppUploadCredential(): Promise<GetIsvAppUploadCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIsvAppUploadCredentialWithOptions(runtime);
  }

  async getIsvCertStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetIsvCertStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetIsvCertStatus",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIsvCertStatusResponse>(await this.callApi(params, req, runtime), new GetIsvCertStatusResponse({}));
  }

  async getIsvCertStatus(): Promise<GetIsvCertStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIsvCertStatusWithOptions(runtime);
  }

  async getIsvCertUploadCredentialWithOptions(runtime: $Util.RuntimeOptions): Promise<GetIsvCertUploadCredentialResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetIsvCertUploadCredential",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIsvCertUploadCredentialResponse>(await this.callApi(params, req, runtime), new GetIsvCertUploadCredentialResponse({}));
  }

  async getIsvCertUploadCredential(): Promise<GetIsvCertUploadCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIsvCertUploadCredentialWithOptions(runtime);
  }

  async getIsvCopyrightUploadCredentialWithOptions(runtime: $Util.RuntimeOptions): Promise<GetIsvCopyrightUploadCredentialResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetIsvCopyrightUploadCredential",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIsvCopyrightUploadCredentialResponse>(await this.callApi(params, req, runtime), new GetIsvCopyrightUploadCredentialResponse({}));
  }

  async getIsvCopyrightUploadCredential(): Promise<GetIsvCopyrightUploadCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIsvCopyrightUploadCredentialWithOptions(runtime);
  }

  async getMarketAppDownloadUrlWithOptions(request: GetMarketAppDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMarketAppDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMarketAppDownloadUrl",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMarketAppDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetMarketAppDownloadUrlResponse({}));
  }

  async getMarketAppDownloadUrl(request: GetMarketAppDownloadUrlRequest): Promise<GetMarketAppDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMarketAppDownloadUrlWithOptions(request, runtime);
  }

  async getStsCredentialWithOptions(request: GetStsCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetStsCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStsCredential",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStsCredentialResponse>(await this.callApi(params, req, runtime), new GetStsCredentialResponse({}));
  }

  async getStsCredential(request: GetStsCredentialRequest): Promise<GetStsCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStsCredentialWithOptions(request, runtime);
  }

  async getTenantAppWithOptions(request: GetTenantAppRequest, runtime: $Util.RuntimeOptions): Promise<GetTenantAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTenantAppResponse>(await this.callApi(params, req, runtime), new GetTenantAppResponse({}));
  }

  async getTenantApp(request: GetTenantAppRequest): Promise<GetTenantAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTenantAppWithOptions(request, runtime);
  }

  async getUploadAppWamPackageInfoWithOptions(request: GetUploadAppWamPackageInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadAppWamPackageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadAppWamPackageInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadAppWamPackageInfoResponse>(await this.callApi(params, req, runtime), new GetUploadAppWamPackageInfoResponse({}));
  }

  async getUploadAppWamPackageInfo(request: GetUploadAppWamPackageInfoRequest): Promise<GetUploadAppWamPackageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadAppWamPackageInfoWithOptions(request, runtime);
  }

  async isIsvNeedEnterWithOptions(runtime: $Util.RuntimeOptions): Promise<IsIsvNeedEnterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "IsIsvNeedEnter",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IsIsvNeedEnterResponse>(await this.callApi(params, req, runtime), new IsIsvNeedEnterResponse({}));
  }

  async isIsvNeedEnter(): Promise<IsIsvNeedEnterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isIsvNeedEnterWithOptions(runtime);
  }

  async listAdWorkspaceWithOptions(request: ListAdWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<ListAdWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdWorkspace",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAdWorkspaceResponse>(await this.callApi(params, req, runtime), new ListAdWorkspaceResponse({}));
  }

  async listAdWorkspace(request: ListAdWorkspaceRequest): Promise<ListAdWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAdWorkspaceWithOptions(request, runtime);
  }

  async listAllAppCategoryWithOptions(request: ListAllAppCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ListAllAppCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAllAppCategory",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllAppCategoryResponse>(await this.callApi(params, req, runtime), new ListAllAppCategoryResponse({}));
  }

  async listAllAppCategory(request: ListAllAppCategoryRequest): Promise<ListAllAppCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllAppCategoryWithOptions(request, runtime);
  }

  async listAppCatalogWithOptions(request: ListAppCatalogRequest, runtime: $Util.RuntimeOptions): Promise<ListAppCatalogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppCatalog",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppCatalogResponse>(await this.callApi(params, req, runtime), new ListAppCatalogResponse({}));
  }

  async listAppCatalog(request: ListAppCatalogRequest): Promise<ListAppCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppCatalogWithOptions(request, runtime);
  }

  async listAppOpenTypeWithOptions(request: ListAppOpenTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListAppOpenTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
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
      action: "ListAppOpenType",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppOpenTypeResponse>(await this.callApi(params, req, runtime), new ListAppOpenTypeResponse({}));
  }

  async listAppOpenType(request: ListAppOpenTypeRequest): Promise<ListAppOpenTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppOpenTypeWithOptions(request, runtime);
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
      version: "2021-06-02",
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

  async listAuthorizationAllUserWithOptions(request: ListAuthorizationAllUserRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationAllUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adRegionId)) {
      query["AdRegionId"] = request.adRegionId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userRegionId)) {
      query["UserRegionId"] = request.userRegionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizationAllUser",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationAllUserResponse>(await this.callApi(params, req, runtime), new ListAuthorizationAllUserResponse({}));
  }

  async listAuthorizationAllUser(request: ListAuthorizationAllUserRequest): Promise<ListAuthorizationAllUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationAllUserWithOptions(request, runtime);
  }

  async listAuthorizationAppWithOptions(request: ListAuthorizationAppRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.isFree)) {
      query["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizationApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationAppResponse>(await this.callApi(params, req, runtime), new ListAuthorizationAppResponse({}));
  }

  async listAuthorizationApp(request: ListAuthorizationAppRequest): Promise<ListAuthorizationAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationAppWithOptions(request, runtime);
  }

  async listAuthorizationInfoWithOptions(request: ListAuthorizationInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizationInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationInfoResponse>(await this.callApi(params, req, runtime), new ListAuthorizationInfoResponse({}));
  }

  async listAuthorizationInfo(request: ListAuthorizationInfoRequest): Promise<ListAuthorizationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationInfoWithOptions(request, runtime);
  }

  async listDistributeAllUserWithOptions(request: ListDistributeAllUserRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributeAllUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adRegionId)) {
      query["AdRegionId"] = request.adRegionId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userRegionId)) {
      query["UserRegionId"] = request.userRegionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDistributeAllUser",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributeAllUserResponse>(await this.callApi(params, req, runtime), new ListDistributeAllUserResponse({}));
  }

  async listDistributeAllUser(request: ListDistributeAllUserRequest): Promise<ListDistributeAllUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributeAllUserWithOptions(request, runtime);
  }

  async listDistributeAppWithOptions(request: ListDistributeAppRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.isFree)) {
      query["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDistributeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributeAppResponse>(await this.callApi(params, req, runtime), new ListDistributeAppResponse({}));
  }

  async listDistributeApp(request: ListDistributeAppRequest): Promise<ListDistributeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributeAppWithOptions(request, runtime);
  }

  async listDistributeUserByAppWithOptions(request: ListDistributeUserByAppRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributeUserByAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDistributeUserByApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributeUserByAppResponse>(await this.callApi(params, req, runtime), new ListDistributeUserByAppResponse({}));
  }

  async listDistributeUserByApp(request: ListDistributeUserByAppRequest): Promise<ListDistributeUserByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributeUserByAppWithOptions(request, runtime);
  }

  async listImageAppWithOptions(request: ListImageAppRequest, runtime: $Util.RuntimeOptions): Promise<ListImageAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.imageUid)) {
      query["ImageUid"] = request.imageUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImageApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImageAppResponse>(await this.callApi(params, req, runtime), new ListImageAppResponse({}));
  }

  async listImageApp(request: ListImageAppRequest): Promise<ListImageAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImageAppWithOptions(request, runtime);
  }

  async listIsvAppWithOptions(request: ListIsvAppRequest, runtime: $Util.RuntimeOptions): Promise<ListIsvAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIsvApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIsvAppResponse>(await this.callApi(params, req, runtime), new ListIsvAppResponse({}));
  }

  async listIsvApp(request: ListIsvAppRequest): Promise<ListIsvAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIsvAppWithOptions(request, runtime);
  }

  async listIsvAppAuditsWithOptions(request: ListIsvAppAuditsRequest, runtime: $Util.RuntimeOptions): Promise<ListIsvAppAuditsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIsvAppAudits",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIsvAppAuditsResponse>(await this.callApi(params, req, runtime), new ListIsvAppAuditsResponse({}));
  }

  async listIsvAppAudits(request: ListIsvAppAuditsRequest): Promise<ListIsvAppAuditsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIsvAppAuditsWithOptions(request, runtime);
  }

  async listMyAppWithOptions(request: ListMyAppRequest, runtime: $Util.RuntimeOptions): Promise<ListMyAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMyApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMyAppResponse>(await this.callApi(params, req, runtime), new ListMyAppResponse({}));
  }

  async listMyApp(request: ListMyAppRequest): Promise<ListMyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMyAppWithOptions(request, runtime);
  }

  async listSubscribeAppWithOptions(request: ListSubscribeAppRequest, runtime: $Util.RuntimeOptions): Promise<ListSubscribeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.isFree)) {
      query["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscribeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubscribeAppResponse>(await this.callApi(params, req, runtime), new ListSubscribeAppResponse({}));
  }

  async listSubscribeApp(request: ListSubscribeAppRequest): Promise<ListSubscribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubscribeAppWithOptions(request, runtime);
  }

  async listSubscribeInfoWithOptions(request: ListSubscribeInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListSubscribeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscribeInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubscribeInfoResponse>(await this.callApi(params, req, runtime), new ListSubscribeInfoResponse({}));
  }

  async listSubscribeInfo(request: ListSubscribeInfoRequest): Promise<ListSubscribeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubscribeInfoWithOptions(request, runtime);
  }

  async listTenantAppWithOptions(request: ListTenantAppRequest, runtime: $Util.RuntimeOptions): Promise<ListTenantAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.cateIdList)) {
      query["CateIdList"] = request.cateIdList;
    }

    if (!Util.isUnset(request.distributeTypeList)) {
      query["DistributeTypeList"] = request.distributeTypeList;
    }

    if (!Util.isUnset(request.isFree)) {
      query["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.isFreeList)) {
      query["IsFreeList"] = request.isFreeList;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.oderBy)) {
      query["OderBy"] = request.oderBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.sourceTypeList)) {
      query["SourceTypeList"] = request.sourceTypeList;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTenantAppResponse>(await this.callApi(params, req, runtime), new ListTenantAppResponse({}));
  }

  async listTenantApp(request: ListTenantAppRequest): Promise<ListTenantAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantAppWithOptions(request, runtime);
  }

  async listTenantAppCategoryWithOptions(request: ListTenantAppCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ListTenantAppCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.PId)) {
      query["PId"] = request.PId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTenantAppCategory",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTenantAppCategoryResponse>(await this.callApi(params, req, runtime), new ListTenantAppCategoryResponse({}));
  }

  async listTenantAppCategory(request: ListTenantAppCategoryRequest): Promise<ListTenantAppCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantAppCategoryWithOptions(request, runtime);
  }

  async listUnpackagedAppWithOptions(request: ListUnpackagedAppRequest, runtime: $Util.RuntimeOptions): Promise<ListUnpackagedAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUnpackagedApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUnpackagedAppResponse>(await this.callApi(params, req, runtime), new ListUnpackagedAppResponse({}));
  }

  async listUnpackagedApp(request: ListUnpackagedAppRequest): Promise<ListUnpackagedAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUnpackagedAppWithOptions(request, runtime);
  }

  async listUpdateImageAppWithOptions(request: ListUpdateImageAppRequest, runtime: $Util.RuntimeOptions): Promise<ListUpdateImageAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appUid)) {
      body["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.imageUid)) {
      body["ImageUid"] = request.imageUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUpdateImageApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUpdateImageAppResponse>(await this.callApi(params, req, runtime), new ListUpdateImageAppResponse({}));
  }

  async listUpdateImageApp(request: ListUpdateImageAppRequest): Promise<ListUpdateImageAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUpdateImageAppWithOptions(request, runtime);
  }

  async listVersionAppInfoWithOptions(request: ListVersionAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionAppInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTag)) {
      body["AppTag"] = request.appTag;
    }

    if (!Util.isUnset(request.appUid)) {
      body["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.os)) {
      body["Os"] = request.os;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVersionAppInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVersionAppInfoResponse>(await this.callApi(params, req, runtime), new ListVersionAppInfoResponse({}));
  }

  async listVersionAppInfo(request: ListVersionAppInfoRequest): Promise<ListVersionAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionAppInfoWithOptions(request, runtime);
  }

  async queryIsvAppAuditWithOptions(request: QueryIsvAppAuditRequest, runtime: $Util.RuntimeOptions): Promise<QueryIsvAppAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIsvAppAudit",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIsvAppAuditResponse>(await this.callApi(params, req, runtime), new QueryIsvAppAuditResponse({}));
  }

  async queryIsvAppAudit(request: QueryIsvAppAuditRequest): Promise<QueryIsvAppAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIsvAppAuditWithOptions(request, runtime);
  }

  async queryItemsWithOptions(request: QueryItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemName)) {
      query["ItemName"] = request.itemName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.sellerId)) {
      query["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItems",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemsResponse>(await this.callApi(params, req, runtime), new QueryItemsResponse({}));
  }

  async queryItems(request: QueryItemsRequest): Promise<QueryItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemsWithOptions(request, runtime);
  }

  async queryOrdersWithOptions(request: QueryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buyerId)) {
      query["BuyerId"] = request.buyerId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.sellerId)) {
      query["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrders",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrdersResponse>(await this.callApi(params, req, runtime), new QueryOrdersResponse({}));
  }

  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrdersWithOptions(request, runtime);
  }

  async setAppStreamAgreementStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<SetAppStreamAgreementStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "SetAppStreamAgreementStatus",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAppStreamAgreementStatusResponse>(await this.callApi(params, req, runtime), new SetAppStreamAgreementStatusResponse({}));
  }

  async setAppStreamAgreementStatus(): Promise<SetAppStreamAgreementStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppStreamAgreementStatusWithOptions(runtime);
  }

  async subscribeAppWithOptions(request: SubscribeAppRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoDeleteFlag)) {
      body["AutoDeleteFlag"] = request.autoDeleteFlag;
    }

    if (!Util.isUnset(request.autoInstallFlag)) {
      body["AutoInstallFlag"] = request.autoInstallFlag;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.forceInstallType)) {
      body["ForceInstallType"] = request.forceInstallType;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.requestType)) {
      body["RequestType"] = request.requestType;
    }

    if (!Util.isUnset(request.silenceDeleteParam)) {
      body["SilenceDeleteParam"] = request.silenceDeleteParam;
    }

    if (!Util.isUnset(request.silenceInstallParam)) {
      body["SilenceInstallParam"] = request.silenceInstallParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubscribeApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubscribeAppResponse>(await this.callApi(params, req, runtime), new SubscribeAppResponse({}));
  }

  async subscribeApp(request: SubscribeAppRequest): Promise<SubscribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeAppWithOptions(request, runtime);
  }

  async updateAppMetaWithOptions(tmpReq: UpdateAppMetaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appTag)) {
      request.appTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appTag, "AppTag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appRegInfo)) {
      body["AppRegInfo"] = request.appRegInfo;
    }

    if (!Util.isUnset(request.appTagShrink)) {
      body["AppTag"] = request.appTagShrink;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.applicationLink)) {
      body["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cateId)) {
      body["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.developer)) {
      body["Developer"] = request.developer;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.isFree)) {
      body["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.licenceType)) {
      body["LicenceType"] = request.licenceType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.silenceFlag)) {
      body["SilenceFlag"] = request.silenceFlag;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    if (!Util.isUnset(request.wamFileName)) {
      body["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      body["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      body["WamFileRealName"] = request.wamFileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppMeta",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppMetaResponse>(await this.callApi(params, req, runtime), new UpdateAppMetaResponse({}));
  }

  async updateAppMeta(request: UpdateAppMetaRequest): Promise<UpdateAppMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppMetaWithOptions(request, runtime);
  }

  async updateAppParamWithOptions(request: UpdateAppParamRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppParamResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstallParam)) {
      body["AppInstallParam"] = request.appInstallParam;
    }

    if (!Util.isUnset(request.appInstallPath)) {
      body["AppInstallPath"] = request.appInstallPath;
    }

    if (!Util.isUnset(request.appStreamStartParam)) {
      body["AppStreamStartParam"] = request.appStreamStartParam;
    }

    if (!Util.isUnset(request.appUid)) {
      body["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.versionAdaptParam)) {
      body["VersionAdaptParam"] = request.versionAdaptParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppParam",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppParamResponse>(await this.callApi(params, req, runtime), new UpdateAppParamResponse({}));
  }

  async updateAppParam(request: UpdateAppParamRequest): Promise<UpdateAppParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppParamWithOptions(request, runtime);
  }

  async updateAppVersionWithOptions(request: UpdateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.applicationLink)) {
      body["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.executeFileAddress)) {
      body["ExecuteFileAddress"] = request.executeFileAddress;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.mock)) {
      body["Mock"] = request.mock;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.silenceFlag)) {
      body["SilenceFlag"] = request.silenceFlag;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    if (!Util.isUnset(request.startParam)) {
      body["StartParam"] = request.startParam;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.wamFileName)) {
      body["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      body["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      body["WamFileRealName"] = request.wamFileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppVersion",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppVersionResponse>(await this.callApi(params, req, runtime), new UpdateAppVersionResponse({}));
  }

  async updateAppVersion(request: UpdateAppVersionRequest): Promise<UpdateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionWithOptions(request, runtime);
  }

  async updateAppWamPackageInfoWithOptions(request: UpdateAppWamPackageInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppWamPackageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    if (!Util.isUnset(request.wamFileName)) {
      query["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      query["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      query["WamFileRealName"] = request.wamFileRealName;
    }

    if (!Util.isUnset(request.wamFileSize)) {
      query["WamFileSize"] = request.wamFileSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppWamPackageInfo",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppWamPackageInfoResponse>(await this.callApi(params, req, runtime), new UpdateAppWamPackageInfoResponse({}));
  }

  async updateAppWamPackageInfo(request: UpdateAppWamPackageInfoRequest): Promise<UpdateAppWamPackageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWamPackageInfoWithOptions(request, runtime);
  }

  async updateIsvAppWithOptions(request: UpdateIsvAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIsvAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appDownloadUrl)) {
      query["AppDownloadUrl"] = request.appDownloadUrl;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.applicationLink)) {
      query["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.copyrightName)) {
      query["CopyrightName"] = request.copyrightName;
    }

    if (!Util.isUnset(request.copyrightPath)) {
      query["CopyrightPath"] = request.copyrightPath;
    }

    if (!Util.isUnset(request.copyrightRealName)) {
      query["CopyrightRealName"] = request.copyrightRealName;
    }

    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.developer)) {
      query["Developer"] = request.developer;
    }

    if (!Util.isUnset(request.executeFile)) {
      query["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      query["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newVersion)) {
      query["NewVersion"] = request.newVersion;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      query["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.publishType)) {
      query["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIsvApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIsvAppResponse>(await this.callApi(params, req, runtime), new UpdateIsvAppResponse({}));
  }

  async updateIsvApp(request: UpdateIsvAppRequest): Promise<UpdateIsvAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIsvAppWithOptions(request, runtime);
  }

  async updateOrderWithOptions(request: UpdateOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOrder",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOrderResponse>(await this.callApi(params, req, runtime), new UpdateOrderResponse({}));
  }

  async updateOrder(request: UpdateOrderRequest): Promise<UpdateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrderWithOptions(request, runtime);
  }

  async updateSilenceWithOptions(request: UpdateSilenceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSilenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.silenceDeleteFlag)) {
      body["SilenceDeleteFlag"] = request.silenceDeleteFlag;
    }

    if (!Util.isUnset(request.silenceDeleteParam)) {
      body["SilenceDeleteParam"] = request.silenceDeleteParam;
    }

    if (!Util.isUnset(request.silenceInstallFlag)) {
      body["SilenceInstallFlag"] = request.silenceInstallFlag;
    }

    if (!Util.isUnset(request.silenceInstallParam)) {
      body["SilenceInstallParam"] = request.silenceInstallParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSilence",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSilenceResponse>(await this.callApi(params, req, runtime), new UpdateSilenceResponse({}));
  }

  async updateSilence(request: UpdateSilenceRequest): Promise<UpdateSilenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSilenceWithOptions(request, runtime);
  }

  async updateTenantAppWithOptions(tmpReq: UpdateTenantAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTenantAppResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTenantAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appTag)) {
      request.appTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appTag, "AppTag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appTagShrink)) {
      body["AppTag"] = request.appTagShrink;
    }

    if (!Util.isUnset(request.appTag1)) {
      body["AppTag1"] = request.appTag1;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.applicationLink)) {
      body["ApplicationLink"] = request.applicationLink;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cateId)) {
      body["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.cateType)) {
      body["CateType"] = request.cateType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.developer)) {
      body["Developer"] = request.developer;
    }

    if (!Util.isUnset(request.distributeType)) {
      body["DistributeType"] = request.distributeType;
    }

    if (!Util.isUnset(request.executeFile)) {
      body["ExecuteFile"] = request.executeFile;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      body["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.isFree)) {
      body["IsFree"] = request.isFree;
    }

    if (!Util.isUnset(request.licenceType)) {
      body["LicenceType"] = request.licenceType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      body["OssAppUrl"] = request.ossAppUrl;
    }

    if (!Util.isUnset(request.searchTag)) {
      body["SearchTag"] = request.searchTag;
    }

    if (!Util.isUnset(request.silenceFlag)) {
      body["SilenceFlag"] = request.silenceFlag;
    }

    if (!Util.isUnset(request.silenceParam)) {
      body["SilenceParam"] = request.silenceParam;
    }

    if (!Util.isUnset(request.wamFileName)) {
      body["WamFileName"] = request.wamFileName;
    }

    if (!Util.isUnset(request.wamFilePath)) {
      body["WamFilePath"] = request.wamFilePath;
    }

    if (!Util.isUnset(request.wamFileRealName)) {
      body["WamFileRealName"] = request.wamFileRealName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTenantAppResponse>(await this.callApi(params, req, runtime), new UpdateTenantAppResponse({}));
  }

  async updateTenantApp(request: UpdateTenantAppRequest): Promise<UpdateTenantAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTenantAppWithOptions(request, runtime);
  }

  async userListWithOptions(request: UserListRequest, runtime: $Util.RuntimeOptions): Promise<UserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adRegionId)) {
      query["AdRegionId"] = request.adRegionId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userRegionId)) {
      query["UserRegionId"] = request.userRegionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UserList",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UserListResponse>(await this.callApi(params, req, runtime), new UserListResponse({}));
  }

  async userList(request: UserListRequest): Promise<UserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.userListWithOptions(request, runtime);
  }

}

// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckWhiteBoardHostRequest extends $tea.Model {
  docKey?: string;
  originHost?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'DocKey',
      originHost: 'OriginHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
      originHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckWhiteBoardHostResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckWhiteBoardHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckWhiteBoardHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckWhiteBoardHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: CreateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhiteBoardRequest extends $tea.Model {
  userId?: string;
  appID?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      appID: 'AppID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      appID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhiteBoardResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: CreateWhiteBoardResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: CreateWhiteBoardResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhiteBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWhiteBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWhiteBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPermissionCallbackRequest extends $tea.Model {
  userId?: string;
  docKey?: string;
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      docKey: 'DocKey',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      docKey: 'string',
      permissionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPermissionCallbackResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPermissionCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserPermissionCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserPermissionCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProfileCallbackRequest extends $tea.Model {
  userIds?: string;
  docKey?: string;
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
      docKey: 'DocKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: 'string',
      docKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProfileCallbackResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: GetUserProfileCallbackResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: GetUserProfileCallbackResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProfileCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserProfileCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserProfileCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhiteBoardProfileCallbackRequest extends $tea.Model {
  docKey?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'DocKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhiteBoardProfileCallbackResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: GetWhiteBoardProfileCallbackResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: GetWhiteBoardProfileCallbackResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhiteBoardProfileCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWhiteBoardProfileCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWhiteBoardProfileCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardRequest extends $tea.Model {
  appID?: string;
  userId?: string;
  docKey?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      userId: 'UserId',
      docKey: 'DocKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      userId: 'string',
      docKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: OpenWhiteBoardResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: OpenWhiteBoardResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenWhiteBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenWhiteBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUsersPermissionsRequest extends $tea.Model {
  userIds?: string;
  docKey?: string;
  appID?: string;
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
      docKey: 'DocKey',
      appID: 'AppID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: 'string',
      docKey: 'string',
      appID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUsersPermissionsResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: RefreshUsersPermissionsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: RefreshUsersPermissionsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUsersPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshUsersPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshUsersPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppCallbackUrlRequest extends $tea.Model {
  appID?: string;
  appCallbackUrl?: string;
  appCallbackAuthKey?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appCallbackUrl: 'AppCallbackUrl',
      appCallbackAuthKey: 'AppCallbackAuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appCallbackUrl: 'string',
      appCallbackAuthKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppCallbackUrlResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppCallbackUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppCallbackUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppCallbackUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppDomainNamesRequest extends $tea.Model {
  appID?: string;
  appDomainNames?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appDomainNames: 'AppDomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appDomainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppDomainNamesResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppDomainNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppDomainNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppDomainNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppNameRequest extends $tea.Model {
  appID?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppNameResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppStatusRequest extends $tea.Model {
  appID?: string;
  appStatus?: number;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appStatus: 'AppStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppStatusResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $tea.Model {
  appID?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhiteBoardResponseBodyResult extends $tea.Model {
  docKey?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'DocKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProfileCallbackResponseBodyResultUserProfileList extends $tea.Model {
  userId?: string;
  avatarUrl?: string;
  nick?: string;
  nickPinyin?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      avatarUrl: 'AvatarUrl',
      nick: 'Nick',
      nickPinyin: 'NickPinyin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      avatarUrl: 'string',
      nick: 'string',
      nickPinyin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProfileCallbackResponseBodyResult extends $tea.Model {
  userProfileList?: GetUserProfileCallbackResponseBodyResultUserProfileList[];
  static names(): { [key: string]: string } {
    return {
      userProfileList: 'UserProfileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userProfileList: { 'type': 'array', 'itemType': GetUserProfileCallbackResponseBodyResultUserProfileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhiteBoardProfileCallbackResponseBodyResult extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardResponseBodyResultDocumentAccessInfoUserInfo extends $tea.Model {
  avatarUrl?: string;
  nick?: string;
  nickPinyin?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      nick: 'Nick',
      nickPinyin: 'NickPinyin',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nick: 'string',
      nickPinyin: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardResponseBodyResultDocumentAccessInfo extends $tea.Model {
  accessToken?: string;
  collabHost?: string;
  permission?: number;
  userInfo?: OpenWhiteBoardResponseBodyResultDocumentAccessInfoUserInfo;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      collabHost: 'CollabHost',
      permission: 'Permission',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      collabHost: 'string',
      permission: 'number',
      userInfo: OpenWhiteBoardResponseBodyResultDocumentAccessInfoUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWhiteBoardResponseBodyResult extends $tea.Model {
  documentAccessInfo?: OpenWhiteBoardResponseBodyResultDocumentAccessInfo;
  static names(): { [key: string]: string } {
    return {
      documentAccessInfo: 'DocumentAccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentAccessInfo: OpenWhiteBoardResponseBodyResultDocumentAccessInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUsersPermissionsResponseBodyResult extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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
    this._endpoint = this.getEndpoint("rtc-white-board", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkWhiteBoardHostWithOptions(request: CheckWhiteBoardHostRequest, runtime: $Util.RuntimeOptions): Promise<CheckWhiteBoardHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckWhiteBoardHostResponse>(await this.doRPCRequest("CheckWhiteBoardHost", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CheckWhiteBoardHostResponse({}));
  }

  async checkWhiteBoardHost(request: CheckWhiteBoardHostRequest): Promise<CheckWhiteBoardHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkWhiteBoardHostWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createWhiteBoardWithOptions(request: CreateWhiteBoardRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhiteBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWhiteBoardResponse>(await this.doRPCRequest("CreateWhiteBoard", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWhiteBoardResponse({}));
  }

  async createWhiteBoard(request: CreateWhiteBoardRequest): Promise<CreateWhiteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhiteBoardWithOptions(request, runtime);
  }

  async getUserPermissionCallbackWithOptions(request: GetUserPermissionCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetUserPermissionCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserPermissionCallbackResponse>(await this.doRPCRequest("GetUserPermissionCallback", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserPermissionCallbackResponse({}));
  }

  async getUserPermissionCallback(request: GetUserPermissionCallbackRequest): Promise<GetUserPermissionCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserPermissionCallbackWithOptions(request, runtime);
  }

  async getUserProfileCallbackWithOptions(request: GetUserProfileCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProfileCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserProfileCallbackResponse>(await this.doRPCRequest("GetUserProfileCallback", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserProfileCallbackResponse({}));
  }

  async getUserProfileCallback(request: GetUserProfileCallbackRequest): Promise<GetUserProfileCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProfileCallbackWithOptions(request, runtime);
  }

  async getWhiteBoardProfileCallbackWithOptions(request: GetWhiteBoardProfileCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetWhiteBoardProfileCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWhiteBoardProfileCallbackResponse>(await this.doRPCRequest("GetWhiteBoardProfileCallback", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetWhiteBoardProfileCallbackResponse({}));
  }

  async getWhiteBoardProfileCallback(request: GetWhiteBoardProfileCallbackRequest): Promise<GetWhiteBoardProfileCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWhiteBoardProfileCallbackWithOptions(request, runtime);
  }

  async openWhiteBoardWithOptions(request: OpenWhiteBoardRequest, runtime: $Util.RuntimeOptions): Promise<OpenWhiteBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenWhiteBoardResponse>(await this.doRPCRequest("OpenWhiteBoard", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new OpenWhiteBoardResponse({}));
  }

  async openWhiteBoard(request: OpenWhiteBoardRequest): Promise<OpenWhiteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openWhiteBoardWithOptions(request, runtime);
  }

  async refreshUsersPermissionsWithOptions(request: RefreshUsersPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshUsersPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshUsersPermissionsResponse>(await this.doRPCRequest("RefreshUsersPermissions", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshUsersPermissionsResponse({}));
  }

  async refreshUsersPermissions(request: RefreshUsersPermissionsRequest): Promise<RefreshUsersPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshUsersPermissionsWithOptions(request, runtime);
  }

  async setAppCallbackUrlWithOptions(request: SetAppCallbackUrlRequest, runtime: $Util.RuntimeOptions): Promise<SetAppCallbackUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppCallbackUrlResponse>(await this.doRPCRequest("SetAppCallbackUrl", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppCallbackUrlResponse({}));
  }

  async setAppCallbackUrl(request: SetAppCallbackUrlRequest): Promise<SetAppCallbackUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppCallbackUrlWithOptions(request, runtime);
  }

  async setAppDomainNamesWithOptions(request: SetAppDomainNamesRequest, runtime: $Util.RuntimeOptions): Promise<SetAppDomainNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppDomainNamesResponse>(await this.doRPCRequest("SetAppDomainNames", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppDomainNamesResponse({}));
  }

  async setAppDomainNames(request: SetAppDomainNamesRequest): Promise<SetAppDomainNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppDomainNamesWithOptions(request, runtime);
  }

  async setAppNameWithOptions(request: SetAppNameRequest, runtime: $Util.RuntimeOptions): Promise<SetAppNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppNameResponse>(await this.doRPCRequest("SetAppName", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppNameResponse({}));
  }

  async setAppName(request: SetAppNameRequest): Promise<SetAppNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppNameWithOptions(request, runtime);
  }

  async setAppStatusWithOptions(request: SetAppStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetAppStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppStatusResponse>(await this.doRPCRequest("SetAppStatus", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppStatusResponse({}));
  }

  async setAppStatus(request: SetAppStatusRequest): Promise<SetAppStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppStatusWithOptions(request, runtime);
  }

}

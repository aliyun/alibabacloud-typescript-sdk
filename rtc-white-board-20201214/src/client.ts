// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeAppsRequest extends $tea.Model {
  appID?: string;
  appStatus?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appStatus: 'AppStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appStatus: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: DescribeAppsResponseBodyResult;
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
      result: DescribeAppsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseWhiteBoardRecordingRequest extends $tea.Model {
  appID?: string;
  userId?: string;
  docKey?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      userId: 'UserId',
      docKey: 'DocKey',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      userId: 'string',
      docKey: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseWhiteBoardRecordingResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: PauseWhiteBoardRecordingResponseBodyResult;
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
      result: PauseWhiteBoardRecordingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseWhiteBoardRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PauseWhiteBoardRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PauseWhiteBoardRecordingResponseBody,
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

export class StartWhiteBoardRecordingRequest extends $tea.Model {
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

export class StartWhiteBoardRecordingResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: StartWhiteBoardRecordingResponseBodyResult;
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
      result: StartWhiteBoardRecordingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWhiteBoardRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartWhiteBoardRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartWhiteBoardRecordingResponseBody,
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

export class DescribeWhiteBoardsRequest extends $tea.Model {
  appID?: string;
  docStatus?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      docStatus: 'DocStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      docStatus: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardsResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: DescribeWhiteBoardsResponseBodyResult;
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
      result: DescribeWhiteBoardsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWhiteBoardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWhiteBoardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeWhiteBoardRecordingRequest extends $tea.Model {
  appID?: string;
  userId?: string;
  docKey?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      userId: 'UserId',
      docKey: 'DocKey',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      userId: 'string',
      docKey: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeWhiteBoardRecordingResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: ResumeWhiteBoardRecordingResponseBodyResult;
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
      result: ResumeWhiteBoardRecordingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeWhiteBoardRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeWhiteBoardRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeWhiteBoardRecordingResponseBody,
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

export class SetAppCallbackTypeRequest extends $tea.Model {
  appID?: string;
  appCallbackType?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appCallbackType: 'AppCallbackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appCallbackType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppCallbackTypeResponseBody extends $tea.Model {
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

export class SetAppCallbackTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppCallbackTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppCallbackTypeResponseBody,
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

export class SetUsersPermissionsRequest extends $tea.Model {
  userIds?: string;
  docKey?: string;
  appID?: string;
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
      docKey: 'DocKey',
      appID: 'AppID',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: 'string',
      docKey: 'string',
      appID: 'string',
      permissionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUsersPermissionsResponseBody extends $tea.Model {
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

export class SetUsersPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetUsersPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetUsersPermissionsResponseBody,
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

export class DescribeWhiteBoardRecordingsRequest extends $tea.Model {
  appID?: string;
  docKey?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      docKey: 'DocKey',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      docKey: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardRecordingsResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: DescribeWhiteBoardRecordingsResponseBodyResult;
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
      result: DescribeWhiteBoardRecordingsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardRecordingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWhiteBoardRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWhiteBoardRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWhiteBoardRecordingRequest extends $tea.Model {
  appID?: string;
  userId?: string;
  docKey?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      userId: 'UserId',
      docKey: 'DocKey',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      userId: 'string',
      docKey: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWhiteBoardRecordingResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: StopWhiteBoardRecordingResponseBodyResult;
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
      result: StopWhiteBoardRecordingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWhiteBoardRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopWhiteBoardRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopWhiteBoardRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultAppList extends $tea.Model {
  appID?: string;
  appName?: string;
  status?: number;
  callbackUrl?: string;
  domainNames?: string;
  createTime?: string;
  callbackType?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      appName: 'AppName',
      status: 'Status',
      callbackUrl: 'CallbackUrl',
      domainNames: 'DomainNames',
      createTime: 'CreateTime',
      callbackType: 'CallbackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      appName: 'string',
      status: 'number',
      callbackUrl: 'string',
      domainNames: 'string',
      createTime: 'string',
      callbackType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResult extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  appList?: DescribeAppsResponseBodyResultAppList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      appList: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseWhiteBoardRecordingResponseBodyResult extends $tea.Model {
  pauseTime?: number;
  static names(): { [key: string]: string } {
    return {
      pauseTime: 'PauseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWhiteBoardRecordingResponseBodyResult extends $tea.Model {
  recordId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardsResponseBodyResultDocList extends $tea.Model {
  appID?: string;
  docKey?: string;
  status?: number;
  createUserId?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      docKey: 'DocKey',
      status: 'Status',
      createUserId: 'CreateUserId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      docKey: 'string',
      status: 'number',
      createUserId: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardsResponseBodyResult extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  docList?: DescribeWhiteBoardsResponseBodyResultDocList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      docList: 'DocList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      docList: { 'type': 'array', 'itemType': DescribeWhiteBoardsResponseBodyResultDocList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeWhiteBoardRecordingResponseBodyResult extends $tea.Model {
  resumeTime?: number;
  static names(): { [key: string]: string } {
    return {
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resumeTime: 'number',
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
  wsDomain?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      collabHost: 'CollabHost',
      permission: 'Permission',
      userInfo: 'UserInfo',
      wsDomain: 'WsDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      collabHost: 'string',
      permission: 'number',
      userInfo: OpenWhiteBoardResponseBodyResultDocumentAccessInfoUserInfo,
      wsDomain: 'string',
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

export class DescribeWhiteBoardRecordingsResponseBodyResultRecordingList extends $tea.Model {
  appID?: string;
  docKey?: string;
  recordId?: string;
  userId?: string;
  operateList?: string[];
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      docKey: 'DocKey',
      recordId: 'RecordId',
      userId: 'UserId',
      operateList: 'OperateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      docKey: 'string',
      recordId: 'string',
      userId: 'string',
      operateList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteBoardRecordingsResponseBodyResult extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  recordingList?: DescribeWhiteBoardRecordingsResponseBodyResultRecordingList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      recordingList: 'RecordingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      recordingList: { 'type': 'array', 'itemType': DescribeWhiteBoardRecordingsResponseBodyResultRecordingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWhiteBoardRecordingResponseBodyResult extends $tea.Model {
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopTime: 'number',
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

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppsResponse>(await this.doRPCRequest("DescribeApps", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppsResponse({}));
  }

  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  async pauseWhiteBoardRecordingWithOptions(request: PauseWhiteBoardRecordingRequest, runtime: $Util.RuntimeOptions): Promise<PauseWhiteBoardRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PauseWhiteBoardRecordingResponse>(await this.doRPCRequest("PauseWhiteBoardRecording", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new PauseWhiteBoardRecordingResponse({}));
  }

  async pauseWhiteBoardRecording(request: PauseWhiteBoardRecordingRequest): Promise<PauseWhiteBoardRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseWhiteBoardRecordingWithOptions(request, runtime);
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

  async startWhiteBoardRecordingWithOptions(request: StartWhiteBoardRecordingRequest, runtime: $Util.RuntimeOptions): Promise<StartWhiteBoardRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartWhiteBoardRecordingResponse>(await this.doRPCRequest("StartWhiteBoardRecording", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new StartWhiteBoardRecordingResponse({}));
  }

  async startWhiteBoardRecording(request: StartWhiteBoardRecordingRequest): Promise<StartWhiteBoardRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startWhiteBoardRecordingWithOptions(request, runtime);
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

  async describeWhiteBoardsWithOptions(request: DescribeWhiteBoardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhiteBoardsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWhiteBoardsResponse>(await this.doRPCRequest("DescribeWhiteBoards", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWhiteBoardsResponse({}));
  }

  async describeWhiteBoards(request: DescribeWhiteBoardsRequest): Promise<DescribeWhiteBoardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhiteBoardsWithOptions(request, runtime);
  }

  async resumeWhiteBoardRecordingWithOptions(request: ResumeWhiteBoardRecordingRequest, runtime: $Util.RuntimeOptions): Promise<ResumeWhiteBoardRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeWhiteBoardRecordingResponse>(await this.doRPCRequest("ResumeWhiteBoardRecording", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeWhiteBoardRecordingResponse({}));
  }

  async resumeWhiteBoardRecording(request: ResumeWhiteBoardRecordingRequest): Promise<ResumeWhiteBoardRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeWhiteBoardRecordingWithOptions(request, runtime);
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

  async setAppCallbackTypeWithOptions(request: SetAppCallbackTypeRequest, runtime: $Util.RuntimeOptions): Promise<SetAppCallbackTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppCallbackTypeResponse>(await this.doRPCRequest("SetAppCallbackType", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppCallbackTypeResponse({}));
  }

  async setAppCallbackType(request: SetAppCallbackTypeRequest): Promise<SetAppCallbackTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppCallbackTypeWithOptions(request, runtime);
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

  async setUsersPermissionsWithOptions(request: SetUsersPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<SetUsersPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetUsersPermissionsResponse>(await this.doRPCRequest("SetUsersPermissions", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetUsersPermissionsResponse({}));
  }

  async setUsersPermissions(request: SetUsersPermissionsRequest): Promise<SetUsersPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUsersPermissionsWithOptions(request, runtime);
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

  async describeWhiteBoardRecordingsWithOptions(request: DescribeWhiteBoardRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhiteBoardRecordingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWhiteBoardRecordingsResponse>(await this.doRPCRequest("DescribeWhiteBoardRecordings", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWhiteBoardRecordingsResponse({}));
  }

  async describeWhiteBoardRecordings(request: DescribeWhiteBoardRecordingsRequest): Promise<DescribeWhiteBoardRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhiteBoardRecordingsWithOptions(request, runtime);
  }

  async stopWhiteBoardRecordingWithOptions(request: StopWhiteBoardRecordingRequest, runtime: $Util.RuntimeOptions): Promise<StopWhiteBoardRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopWhiteBoardRecordingResponse>(await this.doRPCRequest("StopWhiteBoardRecording", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new StopWhiteBoardRecordingResponse({}));
  }

  async stopWhiteBoardRecording(request: StopWhiteBoardRecordingRequest): Promise<StopWhiteBoardRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopWhiteBoardRecordingWithOptions(request, runtime);
  }

}

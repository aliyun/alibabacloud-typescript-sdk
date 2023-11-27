// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ResultUserMuteSettingsValue extends $tea.Model {
  mute?: boolean;
  expireTime?: number;
  static names(): { [key: string]: string } {
    return {
      mute: 'Mute',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mute: 'boolean',
      expireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultImportMessageResultValue extends $tea.Model {
  result?: number;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      msgId: 'msgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'number',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestParamsUserConversationsValue extends $tea.Model {
  top?: boolean;
  redPoint?: number;
  mute?: boolean;
  visible?: boolean;
  createTime?: number;
  modifyTime?: number;
  userExtensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      redPoint: 'RedPoint',
      mute: 'Mute',
      visible: 'Visible',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      userExtensions: 'UserExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'boolean',
      redPoint: 'number',
      mute: 'boolean',
      visible: 'boolean',
      createTime: 'number',
      modifyTime: 'number',
      userExtensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestParamsOptionsSingleChatCreateRequestUserConversationValue extends $tea.Model {
  userExtensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      userExtensions: 'UserExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userExtensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersResponseBody extends $tea.Model {
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

export class AddGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupSilenceBlacklistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupSilenceBlacklistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistResponseBody extends $tea.Model {
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

export class AddGroupSilenceBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGroupSilenceBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGroupSilenceBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistRequest extends $tea.Model {
  appId?: string;
  requestParams?: AddGroupSilenceWhitelistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: AddGroupSilenceWhitelistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistResponseBody extends $tea.Model {
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

export class AddGroupSilenceWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGroupSilenceWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGroupSilenceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionCidRequest extends $tea.Model {
  appId?: string;
  requestParams?: BindInterconnectionCidRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: BindInterconnectionCidRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionCidShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionCidResponseBody extends $tea.Model {
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

export class BindInterconnectionCidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindInterconnectionCidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindInterconnectionCidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionUidRequest extends $tea.Model {
  appId?: string;
  requestParams?: BindInterconnectionUidRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: BindInterconnectionUidRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionUidShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionUidResponseBody extends $tea.Model {
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

export class BindInterconnectionUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindInterconnectionUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindInterconnectionUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: CancelSilenceAllGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: CancelSilenceAllGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersResponseBody extends $tea.Model {
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

export class CancelSilenceAllGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelSilenceAllGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelSilenceAllGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  appId?: string;
  requestParams?: CreateGroupRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: CreateGroupRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CreateGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequest extends $tea.Model {
  request?: CreateRoomRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: CreateRoomRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  result?: CreateRoomResponseBodyResult;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      result: CreateRoomResponseBodyResult,
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRoomResponseBody,
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
  code?: string;
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
      code: 'string',
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

export class DestroyRoomRequest extends $tea.Model {
  request?: DestroyRoomRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: DestroyRoomRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
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

export class DestroyRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DestroyRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DestroyRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupRequest extends $tea.Model {
  appId?: string;
  requestParams?: DismissGroupRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: DismissGroupRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupResponseBody extends $tea.Model {
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

export class DismissGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DismissGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DismissGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigRequest extends $tea.Model {
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

export class GetCommonConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetCommonConfigResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetCommonConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCommonConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCommonConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetGroupByIdRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetGroupByIdRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetGroupByIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetGroupByIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGroupByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGroupByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetGroupMemberByIdsRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetGroupMemberByIdsRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetGroupMemberByIdsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetGroupMemberByIdsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGroupMemberByIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGroupMemberByIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigRequest extends $tea.Model {
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

export class GetIMConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  messaage?: string;
  requestId?: string;
  result?: GetIMConfigResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      messaage: 'Messaage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      messaage: 'string',
      requestId: 'string',
      result: GetIMConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIMConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIMConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetLoginTokenRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetLoginTokenRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetLoginTokenResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetLoginTokenResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMediaUploadUrlRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMediaUploadUrlRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetMediaUploadUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetMediaUploadUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMediaUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMediaUrlRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMediaUrlRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetMediaUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetMediaUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMediaUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetMessageByIdRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetMessageByIdRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetMessageByIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetMessageByIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMessageByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomStatisticsRequest extends $tea.Model {
  request?: GetRoomStatisticsRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: GetRoomStatisticsRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomStatisticsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  responseSuccess?: boolean;
  result?: GetRoomStatisticsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      responseSuccess: 'boolean',
      result: GetRoomStatisticsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRoomStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoomStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingRequest extends $tea.Model {
  appId?: string;
  requestParams?: GetUserMuteSettingRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: GetUserMuteSettingRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetUserMuteSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetUserMuteSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserMuteSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserMuteSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportGroupChatConversationRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportGroupChatConversationRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ImportGroupChatConversationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ImportGroupChatConversationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportGroupChatConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportGroupChatConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportGroupChatMemberRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportGroupChatMemberRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberResponseBody extends $tea.Model {
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

export class ImportGroupChatMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportGroupChatMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportGroupChatMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ImportMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ImportMessageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequest extends $tea.Model {
  appId?: string;
  requestParams?: ImportSingleConversationRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ImportSingleConversationRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationResponseBody extends $tea.Model {
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

export class ImportSingleConversationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportSingleConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportSingleConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantRequest extends $tea.Model {
  request?: InitTenantRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: InitTenantRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
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

export class InitTenantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffRequest extends $tea.Model {
  appId?: string;
  requestParams?: KickOffRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: KickOffRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffResponseBody extends $tea.Model {
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

export class KickOffResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KickOffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KickOffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosRequest extends $tea.Model {
  requestParams?: ListAppInfosRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParams: ListAppInfosRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosShrinkRequest extends $tea.Model {
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: ListAppInfosResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ListAppInfosResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallbackApiIdsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: ListCallbackApiIdsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ListCallbackApiIdsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallbackApiIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCallbackApiIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallbackApiIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsRequest extends $tea.Model {
  appId?: string;
  requestParams?: ListDetailReportStatisticsRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ListDetailReportStatisticsRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: ListDetailReportStatisticsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ListDetailReportStatisticsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDetailReportStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDetailReportStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: ListGroupAllMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ListGroupAllMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListGroupAllMembersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListGroupAllMembersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupAllMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupAllMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: ListGroupSilenceMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: ListGroupSilenceMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListGroupSilenceMembersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListGroupSilenceMembersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupSilenceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupSilenceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesRequest extends $tea.Model {
  request?: ListRoomMessagesRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: ListRoomMessagesRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  responseSuccess?: boolean;
  result?: ListRoomMessagesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      responseSuccess: 'boolean',
      result: ListRoomMessagesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRoomMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRoomMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersRequest extends $tea.Model {
  request?: ListRoomUsersRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: ListRoomUsersRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  responseSuccess?: boolean;
  result?: ListRoomUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      responseSuccess: 'boolean',
      result: ListRoomUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRoomUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRoomUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteUsersRequest extends $tea.Model {
  appId?: string;
  requestParams?: MuteUsersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: MuteUsersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteUsersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteUsersResponseBody extends $tea.Model {
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

export class MuteUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MuteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MuteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingRequest extends $tea.Model {
  appId?: string;
  requestParams?: QueryInterconnectionCidMappingRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: QueryInterconnectionCidMappingRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: QueryInterconnectionCidMappingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: QueryInterconnectionCidMappingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInterconnectionCidMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInterconnectionCidMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: RecallMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RecallMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageResponseBody extends $tea.Model {
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

export class RecallMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecallMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecallMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysResponseBody extends $tea.Model {
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

export class RemoveGroupExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGroupExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGroupExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupMemberExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupMemberExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberExtensionByKeysResponseBody extends $tea.Model {
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

export class RemoveGroupMemberExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGroupMemberExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGroupMemberExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersResponseBody extends $tea.Model {
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

export class RemoveGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupSilenceBlacklistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupSilenceBlacklistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistResponseBody extends $tea.Model {
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

export class RemoveGroupSilenceBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGroupSilenceBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGroupSilenceBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveGroupSilenceWhitelistRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveGroupSilenceWhitelistRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistResponseBody extends $tea.Model {
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

export class RemoveGroupSilenceWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGroupSilenceWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGroupSilenceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveMessageExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveMessageExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysResponseBody extends $tea.Model {
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

export class RemoveMessageExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveMessageExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveMessageExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveSingleChatExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveSingleChatExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysResponseBody extends $tea.Model {
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

export class RemoveSingleChatExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveSingleChatExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSingleChatExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: RemoveUserConversationExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: RemoveUserConversationExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysResponseBody extends $tea.Model {
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

export class RemoveUserConversationExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveUserConversationExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserConversationExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageRequest extends $tea.Model {
  request?: SendCustomMessageRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: SendCustomMessageRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  responseSuccess?: boolean;
  result?: SendCustomMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      responseSuccess: 'boolean',
      result: SendCustomMessageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCustomMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCustomMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToRoomUsersRequest extends $tea.Model {
  receivers?: string[];
  request?: SendCustomMessageToRoomUsersRequestRequest;
  static names(): { [key: string]: string } {
    return {
      receivers: 'Receivers',
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receivers: { 'type': 'array', 'itemType': 'string' },
      request: SendCustomMessageToRoomUsersRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToRoomUsersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  responseSuccess?: boolean;
  result?: SendCustomMessageToRoomUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      responseSuccess: 'boolean',
      result: SendCustomMessageToRoomUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToRoomUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCustomMessageToRoomUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCustomMessageToRoomUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  appId?: string;
  requestParams?: SendMessageRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SendMessageRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: SendMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: SendMessageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetGroupExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetGroupExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysResponseBody extends $tea.Model {
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

export class SetGroupExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGroupExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGroupExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupMemberExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetGroupMemberExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetGroupMemberExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupMemberExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupMemberExtensionByKeysResponseBody extends $tea.Model {
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

export class SetGroupMemberExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGroupMemberExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGroupMemberExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupOwnerRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetGroupOwnerRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetGroupOwnerRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupOwnerShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupOwnerResponseBody extends $tea.Model {
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

export class SetGroupOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGroupOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGroupOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetMessageExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetMessageExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysResponseBody extends $tea.Model {
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

export class SetMessageExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMessageExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetMessageExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageReadRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetMessageReadRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetMessageReadRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageReadShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageReadResponseBody extends $tea.Model {
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

export class SetMessageReadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMessageReadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetMessageReadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetSingleChatExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetSingleChatExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysResponseBody extends $tea.Model {
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

export class SetSingleChatExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetSingleChatExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSingleChatExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysRequest extends $tea.Model {
  appId?: string;
  requestParams?: SetUserConversationExtensionByKeysRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SetUserConversationExtensionByKeysRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysResponseBody extends $tea.Model {
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

export class SetUserConversationExtensionByKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetUserConversationExtensionByKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserConversationExtensionByKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersRequest extends $tea.Model {
  appId?: string;
  requestParams?: SilenceAllGroupMembersRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: SilenceAllGroupMembersRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersResponseBody extends $tea.Model {
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

export class SilenceAllGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SilenceAllGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SilenceAllGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInterconnectionUidRequest extends $tea.Model {
  appId?: string;
  requestParams?: UnbindInterconnectionUidRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UnbindInterconnectionUidRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInterconnectionUidShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInterconnectionUidResponseBody extends $tea.Model {
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

export class UnbindInterconnectionUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindInterconnectionUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindInterconnectionUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppNameRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateAppNameRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateAppNameRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppNameShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppNameResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class UpdateAppNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppStatusRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateAppStatusRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateAppStatusRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppStatusShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppStatusResponseBody extends $tea.Model {
  code?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateCallbackConfigRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateCallbackConfigRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: UpdateCallbackConfigResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: UpdateCallbackConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCallbackConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCallbackConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupIconRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupIconRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconResponseBody extends $tea.Model {
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

export class UpdateGroupIconResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupIconResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupIconResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupMembersRoleRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupMembersRoleRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleResponseBody extends $tea.Model {
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

export class UpdateGroupMembersRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupMembersRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupMembersRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateGroupTitleRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateGroupTitleRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleResponseBody extends $tea.Model {
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

export class UpdateGroupTitleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupTitleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupTitleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMsgRecallIntervalRequest extends $tea.Model {
  appId?: string;
  requestParams?: UpdateMsgRecallIntervalRequestRequestParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParams: UpdateMsgRecallIntervalRequestRequestParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMsgRecallIntervalShrinkRequest extends $tea.Model {
  appId?: string;
  requestParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestParamsShrink: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestParamsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMsgRecallIntervalResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMsgRecallIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMsgRecallIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMsgRecallIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusRequest extends $tea.Model {
  request?: UpdateTenantStatusRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: UpdateTenantStatusRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusResponseBody extends $tea.Model {
  requestId?: string;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
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

export class UpdateTenantStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTenantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTenantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersRequestRequestParamsInitMembers extends $tea.Model {
  appUid?: string;
  extensions?: { [key: string]: string };
  joinTime?: number;
  nick?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      extensions: 'Extensions',
      joinTime: 'JoinTime',
      nick: 'Nick',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      joinTime: 'number',
      nick: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  initMembers?: AddGroupMembersRequestRequestParamsInitMembers[];
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      initMembers: 'InitMembers',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      initMembers: { 'type': 'array', 'itemType': AddGroupMembersRequestRequestParamsInitMembers },
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceBlacklistRequestRequestParams extends $tea.Model {
  appCid?: string;
  members?: string[];
  operatorAppUid?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      members: 'Members',
      operatorAppUid: 'OperatorAppUid',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupSilenceWhitelistRequestRequestParams extends $tea.Model {
  appCid?: string;
  members?: string[];
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      members: 'Members',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionCidRequestRequestParams extends $tea.Model {
  aimAppCid?: string;
  dingTalkCid?: string;
  static names(): { [key: string]: string } {
    return {
      aimAppCid: 'AimAppCid',
      dingTalkCid: 'DingTalkCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aimAppCid: 'string',
      dingTalkCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInterconnectionUidRequestRequestParams extends $tea.Model {
  appUid?: string;
  dingTalkUid?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      dingTalkUid: 'DingTalkUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      dingTalkUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSilenceAllGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestRequestParamsInitMembers extends $tea.Model {
  appUid?: string;
  extensions?: { [key: string]: string };
  joinTime?: number;
  nick?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      extensions: 'Extensions',
      joinTime: 'JoinTime',
      nick: 'Nick',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      joinTime: 'number',
      nick: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestRequestParams extends $tea.Model {
  creatorAppUid?: string;
  entranceId?: string;
  extensions?: { [key: string]: string };
  iconMediaId?: string;
  initMembers?: CreateGroupRequestRequestParamsInitMembers[];
  title?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAppUid: 'CreatorAppUid',
      entranceId: 'EntranceId',
      extensions: 'Extensions',
      iconMediaId: 'IconMediaId',
      initMembers: 'InitMembers',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAppUid: 'string',
      entranceId: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      iconMediaId: 'string',
      initMembers: { 'type': 'array', 'itemType': CreateGroupRequestRequestParamsInitMembers },
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyResult extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequestRequest extends $tea.Model {
  domain?: string;
  ownerId?: string;
  ownerNick?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      ownerId: 'ownerId',
      ownerNick: 'ownerNick',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ownerId: 'string',
      ownerNick: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBodyResult extends $tea.Model {
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'roomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomRequestRequest extends $tea.Model {
  domain?: string;
  openId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      openId: 'openId',
      roomId: 'roomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      openId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissGroupRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigResponseBodyResultCommonConfigAppConfigs extends $tea.Model {
  appKey?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigResponseBodyResultCommonConfigLoginConfig extends $tea.Model {
  loginType?: number;
  static names(): { [key: string]: string } {
    return {
      loginType: 'LoginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigResponseBodyResultCommonConfig extends $tea.Model {
  appConfigs?: GetCommonConfigResponseBodyResultCommonConfigAppConfigs[];
  loginConfig?: GetCommonConfigResponseBodyResultCommonConfigLoginConfig;
  static names(): { [key: string]: string } {
    return {
      appConfigs: 'AppConfigs',
      loginConfig: 'LoginConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfigs: { 'type': 'array', 'itemType': GetCommonConfigResponseBodyResultCommonConfigAppConfigs },
      loginConfig: GetCommonConfigResponseBodyResultCommonConfigLoginConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonConfigResponseBodyResult extends $tea.Model {
  commonConfig?: GetCommonConfigResponseBodyResultCommonConfig;
  static names(): { [key: string]: string } {
    return {
      commonConfig: 'CommonConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonConfig: GetCommonConfigResponseBodyResultCommonConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdRequestRequestParams extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByIdResponseBodyResult extends $tea.Model {
  appCid?: string;
  ceateTime?: number;
  extensions?: { [key: string]: string };
  iconMediaId?: string;
  memberCount?: number;
  memberLimit?: number;
  ownerAppUid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      ceateTime: 'CeateTime',
      extensions: 'Extensions',
      iconMediaId: 'IconMediaId',
      memberCount: 'MemberCount',
      memberLimit: 'MemberLimit',
      ownerAppUid: 'OwnerAppUid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      ceateTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      iconMediaId: 'string',
      memberCount: 'number',
      memberLimit: 'number',
      ownerAppUid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBodyResultMembers extends $tea.Model {
  appUid?: string;
  extensions?: { [key: string]: string };
  joinTime?: number;
  nick?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      extensions: 'Extensions',
      joinTime: 'JoinTime',
      nick: 'Nick',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      joinTime: 'number',
      nick: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupMemberByIdsResponseBodyResult extends $tea.Model {
  members?: GetGroupMemberByIdsResponseBodyResultMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': GetGroupMemberByIdsResponseBodyResultMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigResponseBodyResultImConfigCallbackConfig extends $tea.Model {
  apis?: { [key: string]: boolean };
  callbackUrl?: string;
  events?: { [key: string]: boolean };
  signatureKey?: string;
  signatureValue?: string;
  spis?: { [key: string]: boolean };
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      callbackUrl: 'CallbackUrl',
      events: 'Events',
      signatureKey: 'SignatureKey',
      signatureValue: 'SignatureValue',
      spis: 'Spis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      callbackUrl: 'string',
      events: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      signatureKey: 'string',
      signatureValue: 'string',
      spis: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigResponseBodyResultImConfigMsgConfig extends $tea.Model {
  clientMsgRecallTimeIntervalMinute?: number;
  static names(): { [key: string]: string } {
    return {
      clientMsgRecallTimeIntervalMinute: 'ClientMsgRecallTimeIntervalMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMsgRecallTimeIntervalMinute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigResponseBodyResultImConfig extends $tea.Model {
  callbackConfig?: GetIMConfigResponseBodyResultImConfigCallbackConfig;
  msgConfig?: GetIMConfigResponseBodyResultImConfigMsgConfig;
  static names(): { [key: string]: string } {
    return {
      callbackConfig: 'CallbackConfig',
      msgConfig: 'MsgConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: GetIMConfigResponseBodyResultImConfigCallbackConfig,
      msgConfig: GetIMConfigResponseBodyResultImConfigMsgConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIMConfigResponseBodyResult extends $tea.Model {
  imConfig?: GetIMConfigResponseBodyResultImConfig;
  static names(): { [key: string]: string } {
    return {
      imConfig: 'ImConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imConfig: GetIMConfigResponseBodyResultImConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequestRequestParams extends $tea.Model {
  appKey?: string;
  appUid?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appUid: 'AppUid',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appUid: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyResult extends $tea.Model {
  accessToken?: string;
  accessTokenExpiredTime?: number;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'number',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlRequestRequestParams extends $tea.Model {
  mimeType?: string;
  static names(): { [key: string]: string } {
    return {
      mimeType: 'MimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mimeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUploadUrlResponseBodyResult extends $tea.Model {
  mediaId?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlRequestRequestParams extends $tea.Model {
  mediaId?: string;
  urlExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      urlExpireTime: 'UrlExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      urlExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaUrlResponseBodyResult extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdRequestRequestParams extends $tea.Model {
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageByIdResponseBodyResult extends $tea.Model {
  appCid?: string;
  content?: string;
  contentType?: number;
  conversationType?: number;
  createTime?: number;
  extensions?: { [key: string]: string };
  msgId?: string;
  senderId?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      content: 'Content',
      contentType: 'ContentType',
      conversationType: 'ConversationType',
      createTime: 'CreateTime',
      extensions: 'Extensions',
      msgId: 'MsgId',
      senderId: 'SenderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      content: 'string',
      contentType: 'number',
      conversationType: 'number',
      createTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      msgId: 'string',
      senderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomStatisticsRequestRequest extends $tea.Model {
  domain?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomStatisticsResponseBodyResult extends $tea.Model {
  onlineCount?: number;
  PV?: number;
  UV?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      PV: 'PV',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'number',
      PV: 'number',
      UV: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingRequestRequestParams extends $tea.Model {
  appUids?: string[];
  static names(): { [key: string]: string } {
    return {
      appUids: 'AppUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMuteSettingResponseBodyResult extends $tea.Model {
  userMuteSettings?: { [key: string]: ResultUserMuteSettingsValue };
  static names(): { [key: string]: string } {
    return {
      userMuteSettings: 'UserMuteSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userMuteSettings: { 'type': 'map', 'keyType': 'string', 'valueType': ResultUserMuteSettingsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationRequestRequestParams extends $tea.Model {
  createTime?: number;
  extensions?: { [key: string]: string };
  iconMediaId?: string;
  memberLimit?: number;
  ownerAppUid?: string;
  silenceAll?: boolean;
  title?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extensions: 'Extensions',
      iconMediaId: 'IconMediaId',
      memberLimit: 'MemberLimit',
      ownerAppUid: 'OwnerAppUid',
      silenceAll: 'SilenceAll',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      iconMediaId: 'string',
      memberLimit: 'number',
      ownerAppUid: 'string',
      silenceAll: 'boolean',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatConversationResponseBodyResult extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequestRequestParamsGroupChatMembers extends $tea.Model {
  appUid?: string;
  extensions?: { [key: string]: string };
  joinTime?: number;
  modifyTime?: number;
  mute?: boolean;
  nick?: string;
  redPoint?: number;
  role?: number;
  top?: boolean;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      extensions: 'Extensions',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      mute: 'Mute',
      nick: 'Nick',
      redPoint: 'RedPoint',
      role: 'Role',
      top: 'Top',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      joinTime: 'number',
      modifyTime: 'number',
      mute: 'boolean',
      nick: 'string',
      redPoint: 'number',
      role: 'number',
      top: 'boolean',
      visible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportGroupChatMemberRequestRequestParams extends $tea.Model {
  appCid?: string;
  groupChatMembers?: ImportGroupChatMemberRequestRequestParamsGroupChatMembers[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      groupChatMembers: 'GroupChatMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      groupChatMembers: { 'type': 'array', 'itemType': ImportGroupChatMemberRequestRequestParamsGroupChatMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequestRequestParamsMessages extends $tea.Model {
  appCid?: string;
  content?: string;
  contentType?: number;
  conversationType?: number;
  createTime?: number;
  extensions?: { [key: string]: string };
  receiverIds?: string[];
  senderId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      content: 'Content',
      contentType: 'ContentType',
      conversationType: 'ConversationType',
      createTime: 'CreateTime',
      extensions: 'Extensions',
      receiverIds: 'ReceiverIds',
      senderId: 'SenderId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      content: 'string',
      contentType: 'number',
      conversationType: 'number',
      createTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      receiverIds: { 'type': 'array', 'itemType': 'string' },
      senderId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageRequestRequestParams extends $tea.Model {
  messages?: ImportMessageRequestRequestParamsMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ImportMessageRequestRequestParamsMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportMessageResponseBodyResult extends $tea.Model {
  importMessageResult?: { [key: string]: ResultImportMessageResultValue };
  static names(): { [key: string]: string } {
    return {
      importMessageResult: 'ImportMessageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importMessageResult: { 'type': 'map', 'keyType': 'string', 'valueType': ResultImportMessageResultValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequestRequestParamsConversation extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  createTime?: number;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
      createTime: 'CreateTime',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSingleConversationRequestRequestParams extends $tea.Model {
  conversation?: ImportSingleConversationRequestRequestParamsConversation;
  userConversations?: { [key: string]: RequestParamsUserConversationsValue };
  static names(): { [key: string]: string } {
    return {
      conversation: 'Conversation',
      userConversations: 'UserConversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversation: ImportSingleConversationRequestRequestParamsConversation,
      userConversations: { 'type': 'map', 'keyType': 'string', 'valueType': RequestParamsUserConversationsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantRequestRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOffRequestRequestParams extends $tea.Model {
  appKeys?: string[];
  appUid?: string;
  information?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      appUid: 'AppUid',
      information: 'Information',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      information: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosRequestRequestParams extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosResponseBodyResultAppInfos extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: number;
  createTime?: string;
  instanceId?: string;
  prodVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      prodVersion: 'ProdVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'number',
      createTime: 'string',
      instanceId: 'string',
      prodVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfosResponseBodyResult extends $tea.Model {
  appInfos?: ListAppInfosResponseBodyResultAppInfos[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: { 'type': 'array', 'itemType': ListAppInfosResponseBodyResultAppInfos },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallbackApiIdsResponseBodyResult extends $tea.Model {
  events?: { [key: string]: boolean };
  spis?: { [key: string]: boolean };
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      spis: 'Spis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      spis: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsRequestRequestParams extends $tea.Model {
  endTime?: string;
  reportStatisticsType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reportStatisticsType: 'ReportStatisticsType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reportStatisticsType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetailReportStatisticsResponseBodyResult extends $tea.Model {
  data?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersResponseBodyResultMembers extends $tea.Model {
  appUid?: string;
  extensions?: { [key: string]: string };
  joinTime?: number;
  nick?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      extensions: 'Extensions',
      joinTime: 'JoinTime',
      nick: 'Nick',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      joinTime: 'number',
      nick: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAllMembersResponseBodyResult extends $tea.Model {
  members?: ListGroupAllMembersResponseBodyResultMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ListGroupAllMembersResponseBodyResultMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupSilenceMembersResponseBodyResult extends $tea.Model {
  appCid?: string;
  blacklist?: { [key: string]: number };
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      blacklist: 'Blacklist',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      blacklist: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesRequestRequest extends $tea.Model {
  domain?: string;
  pageNumber?: number;
  pageSize?: number;
  roomId?: string;
  subType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roomId: 'RoomId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roomId: 'string',
      subType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesResponseBodyResultRoomMessageList extends $tea.Model {
  body?: string;
  messageId?: string;
  roomId?: string;
  sendTimeMillis?: number;
  senderId?: string;
  subType?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      messageId: 'MessageId',
      roomId: 'RoomId',
      sendTimeMillis: 'SendTimeMillis',
      senderId: 'SenderId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      messageId: 'string',
      roomId: 'string',
      sendTimeMillis: 'number',
      senderId: 'string',
      subType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomMessagesResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  roomMessageList?: ListRoomMessagesResponseBodyResultRoomMessageList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      roomMessageList: 'RoomMessageList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      roomMessageList: { 'type': 'array', 'itemType': ListRoomMessagesResponseBodyResultRoomMessageList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersRequestRequest extends $tea.Model {
  domain?: string;
  pageNumber?: number;
  pageSize?: number;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponseBodyResultRoomUserVOList extends $tea.Model {
  nick?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  roomUserVOList?: ListRoomUsersResponseBodyResultRoomUserVOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      roomUserVOList: 'RoomUserVOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      roomUserVOList: { 'type': 'array', 'itemType': ListRoomUsersResponseBodyResultRoomUserVOList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteUsersRequestRequestParams extends $tea.Model {
  appUids?: string[];
  mute?: boolean;
  muteDuration?: number;
  static names(): { [key: string]: string } {
    return {
      appUids: 'AppUids',
      mute: 'Mute',
      muteDuration: 'MuteDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUids: { 'type': 'array', 'itemType': 'string' },
      mute: 'boolean',
      muteDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingRequestRequestParams extends $tea.Model {
  srcCid?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      srcCid: 'SrcCid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcCid: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInterconnectionCidMappingResponseBodyResult extends $tea.Model {
  dstCid?: string;
  static names(): { [key: string]: string } {
    return {
      dstCid: 'DstCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallMessageRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  extensions?: { [key: string]: string };
  msgId?: string;
  operatorType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      extensions: 'Extensions',
      msgId: 'MsgId',
      operatorType: 'OperatorType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      msgId: 'string',
      operatorType: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUidsRemoved?: string[];
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUidsRemoved: 'AppUidsRemoved',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUidsRemoved: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceBlacklistRequestRequestParams extends $tea.Model {
  appCid?: string;
  members?: string[];
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      members: 'Members',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupSilenceWhitelistRequestRequestParams extends $tea.Model {
  appCid?: string;
  members?: string[];
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      members: 'Members',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessageExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  keys?: string[];
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      keys: 'Keys',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSingleChatExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserConversationExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageRequestRequest extends $tea.Model {
  body?: string;
  domain?: string;
  roomId?: string;
  senderId?: string;
  subType?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      domain: 'Domain',
      roomId: 'RoomId',
      senderId: 'SenderId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      domain: 'string',
      roomId: 'string',
      senderId: 'string',
      subType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageResponseBodyResult extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToRoomUsersRequestRequest extends $tea.Model {
  body?: string;
  domain?: string;
  roomId?: string;
  senderId?: string;
  subType?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      domain: 'Domain',
      roomId: 'RoomId',
      senderId: 'SenderId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      domain: 'string',
      roomId: 'string',
      senderId: 'string',
      subType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToRoomUsersResponseBodyResult extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptionsReceiveScopeOption extends $tea.Model {
  excludeReceiverIds?: string[];
  receiveScope?: number;
  receiverIds?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeReceiverIds: 'ExcludeReceiverIds',
      receiveScope: 'ReceiveScope',
      receiverIds: 'ReceiverIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeReceiverIds: { 'type': 'array', 'itemType': 'string' },
      receiveScope: 'number',
      receiverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptionsSingleChatCreateRequest extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  extensions?: { [key: string]: string };
  userConversation?: { [key: string]: RequestParamsOptionsSingleChatCreateRequestUserConversationValue };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
      extensions: 'Extensions',
      userConversation: 'UserConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userConversation: { 'type': 'map', 'keyType': 'string', 'valueType': RequestParamsOptionsSingleChatCreateRequestUserConversationValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParamsOptions extends $tea.Model {
  receiveScopeOption?: SendMessageRequestRequestParamsOptionsReceiveScopeOption;
  redPointPolicy?: number;
  singleChatCreateRequest?: SendMessageRequestRequestParamsOptionsSingleChatCreateRequest;
  static names(): { [key: string]: string } {
    return {
      receiveScopeOption: 'ReceiveScopeOption',
      redPointPolicy: 'RedPointPolicy',
      singleChatCreateRequest: 'SingleChatCreateRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiveScopeOption: SendMessageRequestRequestParamsOptionsReceiveScopeOption,
      redPointPolicy: 'number',
      singleChatCreateRequest: SendMessageRequestRequestParamsOptionsSingleChatCreateRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestRequestParams extends $tea.Model {
  appCid?: string;
  content?: string;
  contentType?: number;
  conversationType?: number;
  extensions?: { [key: string]: string };
  options?: SendMessageRequestRequestParamsOptions;
  senderId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      content: 'Content',
      contentType: 'ContentType',
      conversationType: 'ConversationType',
      extensions: 'Extensions',
      options: 'Options',
      senderId: 'SenderId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      content: 'string',
      contentType: 'number',
      conversationType: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      options: SendMessageRequestRequestParamsOptions,
      senderId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBodyResult extends $tea.Model {
  createTime?: number;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupMemberExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupOwnerRequestRequestParams extends $tea.Model {
  appCid?: string;
  newOwnerAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      newOwnerAppUid: 'NewOwnerAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      newOwnerAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  extensions?: { [key: string]: string };
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      extensions: 'Extensions',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageReadRequestRequestParams extends $tea.Model {
  appUid?: string;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSingleChatExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConversationExtensionByKeysRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUid?: string;
  extensions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUid: 'AppUid',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUid: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceAllGroupMembersRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInterconnectionUidRequestRequestParams extends $tea.Model {
  appUid?: string;
  dingTalkUid?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      dingTalkUid: 'DingTalkUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      dingTalkUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppNameRequestRequestParams extends $tea.Model {
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

export class UpdateAppStatusRequestRequestParams extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigRequestRequestParams extends $tea.Model {
  apis?: { [key: string]: boolean };
  callbackUrl?: string;
  events?: { [key: string]: boolean };
  signatureKey?: string;
  signatureValue?: string;
  spis?: { [key: string]: boolean };
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      callbackUrl: 'CallbackUrl',
      events: 'Events',
      signatureKey: 'SignatureKey',
      signatureValue: 'SignatureValue',
      spis: 'Spis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      callbackUrl: 'string',
      events: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      signatureKey: 'string',
      signatureValue: 'string',
      spis: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponseBodyResultImConfigCallbackConfig extends $tea.Model {
  apiIds?: string[];
  backendUrl?: string;
  signatureKey?: string;
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      backendUrl: 'BackendUrl',
      signatureKey: 'SignatureKey',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: { 'type': 'array', 'itemType': 'string' },
      backendUrl: 'string',
      signatureKey: 'string',
      signatureValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponseBodyResultImConfigMsgConfig extends $tea.Model {
  msgRecallTimeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      msgRecallTimeInterval: 'MsgRecallTimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgRecallTimeInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponseBodyResultImConfig extends $tea.Model {
  callbackConfig?: UpdateCallbackConfigResponseBodyResultImConfigCallbackConfig;
  msgConfig?: UpdateCallbackConfigResponseBodyResultImConfigMsgConfig;
  static names(): { [key: string]: string } {
    return {
      callbackConfig: 'CallbackConfig',
      msgConfig: 'MsgConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: UpdateCallbackConfigResponseBodyResultImConfigCallbackConfig,
      msgConfig: UpdateCallbackConfigResponseBodyResultImConfigMsgConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCallbackConfigResponseBodyResult extends $tea.Model {
  imConfig?: UpdateCallbackConfigResponseBodyResultImConfig;
  static names(): { [key: string]: string } {
    return {
      imConfig: 'ImConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imConfig: UpdateCallbackConfigResponseBodyResultImConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupIconRequestRequestParams extends $tea.Model {
  appCid?: string;
  iconMediaId?: string;
  operatorAppUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      iconMediaId: 'IconMediaId',
      operatorAppUid: 'OperatorAppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      iconMediaId: 'string',
      operatorAppUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMembersRoleRequestRequestParams extends $tea.Model {
  appCid?: string;
  appUids?: string[];
  operatorAppUid?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      appUids: 'AppUids',
      operatorAppUid: 'OperatorAppUid',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      appUids: { 'type': 'array', 'itemType': 'string' },
      operatorAppUid: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupTitleRequestRequestParams extends $tea.Model {
  appCid?: string;
  operatorAppUid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appCid: 'AppCid',
      operatorAppUid: 'OperatorAppUid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCid: 'string',
      operatorAppUid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMsgRecallIntervalRequestRequestParams extends $tea.Model {
  clientMsgRecallIntervalMinute?: number;
  static names(): { [key: string]: string } {
    return {
      clientMsgRecallIntervalMinute: 'ClientMsgRecallIntervalMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMsgRecallIntervalMinute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantStatusRequestRequest extends $tea.Model {
  domain?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      status: 'number',
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
    this._endpoint = this.getEndpoint("live-interaction", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addGroupMembersWithOptions(tmpReq: AddGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddGroupMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGroupMembersResponse>(await this.callApi(params, req, runtime), new AddGroupMembersResponse({}));
  }

  async addGroupMembers(request: AddGroupMembersRequest): Promise<AddGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupMembersWithOptions(request, runtime);
  }

  async addGroupSilenceBlacklistWithOptions(tmpReq: AddGroupSilenceBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupSilenceBlacklistResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupSilenceBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddGroupSilenceBlacklist",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGroupSilenceBlacklistResponse>(await this.callApi(params, req, runtime), new AddGroupSilenceBlacklistResponse({}));
  }

  async addGroupSilenceBlacklist(request: AddGroupSilenceBlacklistRequest): Promise<AddGroupSilenceBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupSilenceBlacklistWithOptions(request, runtime);
  }

  async addGroupSilenceWhitelistWithOptions(tmpReq: AddGroupSilenceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<AddGroupSilenceWhitelistResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGroupSilenceWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddGroupSilenceWhitelist",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGroupSilenceWhitelistResponse>(await this.callApi(params, req, runtime), new AddGroupSilenceWhitelistResponse({}));
  }

  async addGroupSilenceWhitelist(request: AddGroupSilenceWhitelistRequest): Promise<AddGroupSilenceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGroupSilenceWhitelistWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq BindInterconnectionCidRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BindInterconnectionCidResponse
   */
  // Deprecated
  async bindInterconnectionCidWithOptions(tmpReq: BindInterconnectionCidRequest, runtime: $Util.RuntimeOptions): Promise<BindInterconnectionCidResponse> {
    Util.validateModel(tmpReq);
    let request = new BindInterconnectionCidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindInterconnectionCid",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindInterconnectionCidResponse>(await this.callApi(params, req, runtime), new BindInterconnectionCidResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request BindInterconnectionCidRequest
    * @return BindInterconnectionCidResponse
   */
  // Deprecated
  async bindInterconnectionCid(request: BindInterconnectionCidRequest): Promise<BindInterconnectionCidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInterconnectionCidWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq BindInterconnectionUidRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BindInterconnectionUidResponse
   */
  // Deprecated
  async bindInterconnectionUidWithOptions(tmpReq: BindInterconnectionUidRequest, runtime: $Util.RuntimeOptions): Promise<BindInterconnectionUidResponse> {
    Util.validateModel(tmpReq);
    let request = new BindInterconnectionUidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindInterconnectionUid",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindInterconnectionUidResponse>(await this.callApi(params, req, runtime), new BindInterconnectionUidResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request BindInterconnectionUidRequest
    * @return BindInterconnectionUidResponse
   */
  // Deprecated
  async bindInterconnectionUid(request: BindInterconnectionUidRequest): Promise<BindInterconnectionUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInterconnectionUidWithOptions(request, runtime);
  }

  async cancelSilenceAllGroupMembersWithOptions(tmpReq: CancelSilenceAllGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<CancelSilenceAllGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new CancelSilenceAllGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelSilenceAllGroupMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelSilenceAllGroupMembersResponse>(await this.callApi(params, req, runtime), new CancelSilenceAllGroupMembersResponse({}));
  }

  async cancelSilenceAllGroupMembers(request: CancelSilenceAllGroupMembersRequest): Promise<CancelSilenceAllGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSilenceAllGroupMembersWithOptions(request, runtime);
  }

  async createGroupWithOptions(tmpReq: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request CreateRoomRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRoomResponse
   */
  // Deprecated
  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRoom",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRoomResponse>(await this.callApi(params, req, runtime), new CreateRoomResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request CreateRoomRequest
    * @return CreateRoomResponse
   */
  // Deprecated
  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
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
      version: "2020-12-14",
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

  async destroyRoomWithOptions(request: DestroyRoomRequest, runtime: $Util.RuntimeOptions): Promise<DestroyRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DestroyRoom",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DestroyRoomResponse>(await this.callApi(params, req, runtime), new DestroyRoomResponse({}));
  }

  async destroyRoom(request: DestroyRoomRequest): Promise<DestroyRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyRoomWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq DismissGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DismissGroupResponse
   */
  // Deprecated
  async dismissGroupWithOptions(tmpReq: DismissGroupRequest, runtime: $Util.RuntimeOptions): Promise<DismissGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new DismissGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DismissGroup",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DismissGroupResponse>(await this.callApi(params, req, runtime), new DismissGroupResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request DismissGroupRequest
    * @return DismissGroupResponse
   */
  // Deprecated
  async dismissGroup(request: DismissGroupRequest): Promise<DismissGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dismissGroupWithOptions(request, runtime);
  }

  async getCommonConfigWithOptions(request: GetCommonConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetCommonConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCommonConfig",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCommonConfigResponse>(await this.callApi(params, req, runtime), new GetCommonConfigResponse({}));
  }

  async getCommonConfig(request: GetCommonConfigRequest): Promise<GetCommonConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommonConfigWithOptions(request, runtime);
  }

  async getGroupByIdWithOptions(tmpReq: GetGroupByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupByIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetGroupByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupById",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupByIdResponse>(await this.callApi(params, req, runtime), new GetGroupByIdResponse({}));
  }

  async getGroupById(request: GetGroupByIdRequest): Promise<GetGroupByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupByIdWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq GetGroupMemberByIdsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetGroupMemberByIdsResponse
   */
  // Deprecated
  async getGroupMemberByIdsWithOptions(tmpReq: GetGroupMemberByIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupMemberByIdsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetGroupMemberByIdsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupMemberByIds",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupMemberByIdsResponse>(await this.callApi(params, req, runtime), new GetGroupMemberByIdsResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetGroupMemberByIdsRequest
    * @return GetGroupMemberByIdsResponse
   */
  // Deprecated
  async getGroupMemberByIds(request: GetGroupMemberByIdsRequest): Promise<GetGroupMemberByIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupMemberByIdsWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetIMConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetIMConfigResponse
   */
  // Deprecated
  async getIMConfigWithOptions(request: GetIMConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetIMConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIMConfig",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIMConfigResponse>(await this.callApi(params, req, runtime), new GetIMConfigResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetIMConfigRequest
    * @return GetIMConfigResponse
   */
  // Deprecated
  async getIMConfig(request: GetIMConfigRequest): Promise<GetIMConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIMConfigWithOptions(request, runtime);
  }

  async getLoginTokenWithOptions(tmpReq: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginToken",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginTokenResponse>(await this.callApi(params, req, runtime), new GetLoginTokenResponse({}));
  }

  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  async getMediaUploadUrlWithOptions(tmpReq: GetMediaUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaUploadUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMediaUploadUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaUploadUrl",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaUploadUrlResponse>(await this.callApi(params, req, runtime), new GetMediaUploadUrlResponse({}));
  }

  async getMediaUploadUrl(request: GetMediaUploadUrlRequest): Promise<GetMediaUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaUploadUrlWithOptions(request, runtime);
  }

  async getMediaUrlWithOptions(tmpReq: GetMediaUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMediaUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaUrl",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaUrlResponse>(await this.callApi(params, req, runtime), new GetMediaUrlResponse({}));
  }

  async getMediaUrl(request: GetMediaUrlRequest): Promise<GetMediaUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaUrlWithOptions(request, runtime);
  }

  async getMessageByIdWithOptions(tmpReq: GetMessageByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetMessageByIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMessageByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMessageById",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMessageByIdResponse>(await this.callApi(params, req, runtime), new GetMessageByIdResponse({}));
  }

  async getMessageById(request: GetMessageByIdRequest): Promise<GetMessageByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMessageByIdWithOptions(request, runtime);
  }

  async getRoomStatisticsWithOptions(request: GetRoomStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetRoomStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRoomStatistics",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRoomStatisticsResponse>(await this.callApi(params, req, runtime), new GetRoomStatisticsResponse({}));
  }

  async getRoomStatistics(request: GetRoomStatisticsRequest): Promise<GetRoomStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoomStatisticsWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq GetUserMuteSettingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetUserMuteSettingResponse
   */
  // Deprecated
  async getUserMuteSettingWithOptions(tmpReq: GetUserMuteSettingRequest, runtime: $Util.RuntimeOptions): Promise<GetUserMuteSettingResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUserMuteSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserMuteSetting",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserMuteSettingResponse>(await this.callApi(params, req, runtime), new GetUserMuteSettingResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetUserMuteSettingRequest
    * @return GetUserMuteSettingResponse
   */
  // Deprecated
  async getUserMuteSetting(request: GetUserMuteSettingRequest): Promise<GetUserMuteSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMuteSettingWithOptions(request, runtime);
  }

  async importGroupChatConversationWithOptions(tmpReq: ImportGroupChatConversationRequest, runtime: $Util.RuntimeOptions): Promise<ImportGroupChatConversationResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportGroupChatConversationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportGroupChatConversation",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportGroupChatConversationResponse>(await this.callApi(params, req, runtime), new ImportGroupChatConversationResponse({}));
  }

  async importGroupChatConversation(request: ImportGroupChatConversationRequest): Promise<ImportGroupChatConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importGroupChatConversationWithOptions(request, runtime);
  }

  async importGroupChatMemberWithOptions(tmpReq: ImportGroupChatMemberRequest, runtime: $Util.RuntimeOptions): Promise<ImportGroupChatMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportGroupChatMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportGroupChatMember",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportGroupChatMemberResponse>(await this.callApi(params, req, runtime), new ImportGroupChatMemberResponse({}));
  }

  async importGroupChatMember(request: ImportGroupChatMemberRequest): Promise<ImportGroupChatMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importGroupChatMemberWithOptions(request, runtime);
  }

  async importMessageWithOptions(tmpReq: ImportMessageRequest, runtime: $Util.RuntimeOptions): Promise<ImportMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportMessage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportMessageResponse>(await this.callApi(params, req, runtime), new ImportMessageResponse({}));
  }

  async importMessage(request: ImportMessageRequest): Promise<ImportMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importMessageWithOptions(request, runtime);
  }

  async importSingleConversationWithOptions(tmpReq: ImportSingleConversationRequest, runtime: $Util.RuntimeOptions): Promise<ImportSingleConversationResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportSingleConversationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportSingleConversation",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportSingleConversationResponse>(await this.callApi(params, req, runtime), new ImportSingleConversationResponse({}));
  }

  async importSingleConversation(request: ImportSingleConversationRequest): Promise<ImportSingleConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSingleConversationWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request InitTenantRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InitTenantResponse
   */
  // Deprecated
  async initTenantWithOptions(request: InitTenantRequest, runtime: $Util.RuntimeOptions): Promise<InitTenantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitTenant",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitTenantResponse>(await this.callApi(params, req, runtime), new InitTenantResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request InitTenantRequest
    * @return InitTenantResponse
   */
  // Deprecated
  async initTenant(request: InitTenantRequest): Promise<InitTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initTenantWithOptions(request, runtime);
  }

  async kickOffWithOptions(tmpReq: KickOffRequest, runtime: $Util.RuntimeOptions): Promise<KickOffResponse> {
    Util.validateModel(tmpReq);
    let request = new KickOffShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KickOff",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KickOffResponse>(await this.callApi(params, req, runtime), new KickOffResponse({}));
  }

  async kickOff(request: KickOffRequest): Promise<KickOffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickOffWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq ListAppInfosRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAppInfosResponse
   */
  // Deprecated
  async listAppInfosWithOptions(tmpReq: ListAppInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInfosResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAppInfosShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppInfos",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppInfosResponse>(await this.callApi(params, req, runtime), new ListAppInfosResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ListAppInfosRequest
    * @return ListAppInfosResponse
   */
  // Deprecated
  async listAppInfos(request: ListAppInfosRequest): Promise<ListAppInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInfosWithOptions(request, runtime);
  }

  async listCallbackApiIdsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListCallbackApiIdsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListCallbackApiIds",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCallbackApiIdsResponse>(await this.callApi(params, req, runtime), new ListCallbackApiIdsResponse({}));
  }

  async listCallbackApiIds(): Promise<ListCallbackApiIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallbackApiIdsWithOptions(runtime);
  }

  async listDetailReportStatisticsWithOptions(tmpReq: ListDetailReportStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDetailReportStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDetailReportStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDetailReportStatistics",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDetailReportStatisticsResponse>(await this.callApi(params, req, runtime), new ListDetailReportStatisticsResponse({}));
  }

  async listDetailReportStatistics(request: ListDetailReportStatisticsRequest): Promise<ListDetailReportStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDetailReportStatisticsWithOptions(request, runtime);
  }

  async listGroupAllMembersWithOptions(tmpReq: ListGroupAllMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupAllMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGroupAllMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupAllMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupAllMembersResponse>(await this.callApi(params, req, runtime), new ListGroupAllMembersResponse({}));
  }

  async listGroupAllMembers(request: ListGroupAllMembersRequest): Promise<ListGroupAllMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupAllMembersWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq ListGroupSilenceMembersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGroupSilenceMembersResponse
   */
  // Deprecated
  async listGroupSilenceMembersWithOptions(tmpReq: ListGroupSilenceMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupSilenceMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGroupSilenceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupSilenceMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupSilenceMembersResponse>(await this.callApi(params, req, runtime), new ListGroupSilenceMembersResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ListGroupSilenceMembersRequest
    * @return ListGroupSilenceMembersResponse
   */
  // Deprecated
  async listGroupSilenceMembers(request: ListGroupSilenceMembersRequest): Promise<ListGroupSilenceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupSilenceMembersWithOptions(request, runtime);
  }

  async listRoomMessagesWithOptions(request: ListRoomMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomMessagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRoomMessages",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoomMessagesResponse>(await this.callApi(params, req, runtime), new ListRoomMessagesResponse({}));
  }

  async listRoomMessages(request: ListRoomMessagesRequest): Promise<ListRoomMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomMessagesWithOptions(request, runtime);
  }

  async listRoomUsersWithOptions(request: ListRoomUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRoomUsers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoomUsersResponse>(await this.callApi(params, req, runtime), new ListRoomUsersResponse({}));
  }

  async listRoomUsers(request: ListRoomUsersRequest): Promise<ListRoomUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomUsersWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq MuteUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return MuteUsersResponse
   */
  // Deprecated
  async muteUsersWithOptions(tmpReq: MuteUsersRequest, runtime: $Util.RuntimeOptions): Promise<MuteUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new MuteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MuteUsers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MuteUsersResponse>(await this.callApi(params, req, runtime), new MuteUsersResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request MuteUsersRequest
    * @return MuteUsersResponse
   */
  // Deprecated
  async muteUsers(request: MuteUsersRequest): Promise<MuteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.muteUsersWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq QueryInterconnectionCidMappingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryInterconnectionCidMappingResponse
   */
  // Deprecated
  async queryInterconnectionCidMappingWithOptions(tmpReq: QueryInterconnectionCidMappingRequest, runtime: $Util.RuntimeOptions): Promise<QueryInterconnectionCidMappingResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryInterconnectionCidMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryInterconnectionCidMapping",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInterconnectionCidMappingResponse>(await this.callApi(params, req, runtime), new QueryInterconnectionCidMappingResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request QueryInterconnectionCidMappingRequest
    * @return QueryInterconnectionCidMappingResponse
   */
  // Deprecated
  async queryInterconnectionCidMapping(request: QueryInterconnectionCidMappingRequest): Promise<QueryInterconnectionCidMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInterconnectionCidMappingWithOptions(request, runtime);
  }

  async recallMessageWithOptions(tmpReq: RecallMessageRequest, runtime: $Util.RuntimeOptions): Promise<RecallMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new RecallMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecallMessage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecallMessageResponse>(await this.callApi(params, req, runtime), new RecallMessageResponse({}));
  }

  async recallMessage(request: RecallMessageRequest): Promise<RecallMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recallMessageWithOptions(request, runtime);
  }

  async removeGroupExtensionByKeysWithOptions(tmpReq: RemoveGroupExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupExtensionByKeysResponse>(await this.callApi(params, req, runtime), new RemoveGroupExtensionByKeysResponse({}));
  }

  async removeGroupExtensionByKeys(request: RemoveGroupExtensionByKeysRequest): Promise<RemoveGroupExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupExtensionByKeysWithOptions(request, runtime);
  }

  async removeGroupMemberExtensionByKeysWithOptions(tmpReq: RemoveGroupMemberExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupMemberExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupMemberExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupMemberExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupMemberExtensionByKeysResponse>(await this.callApi(params, req, runtime), new RemoveGroupMemberExtensionByKeysResponse({}));
  }

  async removeGroupMemberExtensionByKeys(request: RemoveGroupMemberExtensionByKeysRequest): Promise<RemoveGroupMemberExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupMemberExtensionByKeysWithOptions(request, runtime);
  }

  async removeGroupMembersWithOptions(tmpReq: RemoveGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupMembersResponse>(await this.callApi(params, req, runtime), new RemoveGroupMembersResponse({}));
  }

  async removeGroupMembers(request: RemoveGroupMembersRequest): Promise<RemoveGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupMembersWithOptions(request, runtime);
  }

  async removeGroupSilenceBlacklistWithOptions(tmpReq: RemoveGroupSilenceBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupSilenceBlacklistResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupSilenceBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupSilenceBlacklist",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupSilenceBlacklistResponse>(await this.callApi(params, req, runtime), new RemoveGroupSilenceBlacklistResponse({}));
  }

  async removeGroupSilenceBlacklist(request: RemoveGroupSilenceBlacklistRequest): Promise<RemoveGroupSilenceBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupSilenceBlacklistWithOptions(request, runtime);
  }

  async removeGroupSilenceWhitelistWithOptions(tmpReq: RemoveGroupSilenceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGroupSilenceWhitelistResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveGroupSilenceWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupSilenceWhitelist",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupSilenceWhitelistResponse>(await this.callApi(params, req, runtime), new RemoveGroupSilenceWhitelistResponse({}));
  }

  async removeGroupSilenceWhitelist(request: RemoveGroupSilenceWhitelistRequest): Promise<RemoveGroupSilenceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGroupSilenceWhitelistWithOptions(request, runtime);
  }

  async removeMessageExtensionByKeysWithOptions(tmpReq: RemoveMessageExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMessageExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveMessageExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMessageExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveMessageExtensionByKeysResponse>(await this.callApi(params, req, runtime), new RemoveMessageExtensionByKeysResponse({}));
  }

  async removeMessageExtensionByKeys(request: RemoveMessageExtensionByKeysRequest): Promise<RemoveMessageExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMessageExtensionByKeysWithOptions(request, runtime);
  }

  async removeSingleChatExtensionByKeysWithOptions(tmpReq: RemoveSingleChatExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSingleChatExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveSingleChatExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSingleChatExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSingleChatExtensionByKeysResponse>(await this.callApi(params, req, runtime), new RemoveSingleChatExtensionByKeysResponse({}));
  }

  async removeSingleChatExtensionByKeys(request: RemoveSingleChatExtensionByKeysRequest): Promise<RemoveSingleChatExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSingleChatExtensionByKeysWithOptions(request, runtime);
  }

  async removeUserConversationExtensionByKeysWithOptions(tmpReq: RemoveUserConversationExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserConversationExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveUserConversationExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserConversationExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserConversationExtensionByKeysResponse>(await this.callApi(params, req, runtime), new RemoveUserConversationExtensionByKeysResponse({}));
  }

  async removeUserConversationExtensionByKeys(request: RemoveUserConversationExtensionByKeysRequest): Promise<RemoveUserConversationExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserConversationExtensionByKeysWithOptions(request, runtime);
  }

  async sendCustomMessageWithOptions(request: SendCustomMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomMessage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCustomMessageResponse>(await this.callApi(params, req, runtime), new SendCustomMessageResponse({}));
  }

  async sendCustomMessage(request: SendCustomMessageRequest): Promise<SendCustomMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageWithOptions(request, runtime);
  }

  async sendCustomMessageToRoomUsersWithOptions(request: SendCustomMessageToRoomUsersRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageToRoomUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.receivers)) {
      bodyFlat["Receivers"] = request.receivers;
    }

    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomMessageToRoomUsers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCustomMessageToRoomUsersResponse>(await this.callApi(params, req, runtime), new SendCustomMessageToRoomUsersResponse({}));
  }

  async sendCustomMessageToRoomUsers(request: SendCustomMessageToRoomUsersRequest): Promise<SendCustomMessageToRoomUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageToRoomUsersWithOptions(request, runtime);
  }

  async sendMessageWithOptions(tmpReq: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  async setGroupExtensionByKeysWithOptions(tmpReq: SetGroupExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetGroupExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetGroupExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGroupExtensionByKeysResponse>(await this.callApi(params, req, runtime), new SetGroupExtensionByKeysResponse({}));
  }

  async setGroupExtensionByKeys(request: SetGroupExtensionByKeysRequest): Promise<SetGroupExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupExtensionByKeysWithOptions(request, runtime);
  }

  async setGroupMemberExtensionByKeysWithOptions(tmpReq: SetGroupMemberExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupMemberExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetGroupMemberExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetGroupMemberExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGroupMemberExtensionByKeysResponse>(await this.callApi(params, req, runtime), new SetGroupMemberExtensionByKeysResponse({}));
  }

  async setGroupMemberExtensionByKeys(request: SetGroupMemberExtensionByKeysRequest): Promise<SetGroupMemberExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupMemberExtensionByKeysWithOptions(request, runtime);
  }

  async setGroupOwnerWithOptions(tmpReq: SetGroupOwnerRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupOwnerResponse> {
    Util.validateModel(tmpReq);
    let request = new SetGroupOwnerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetGroupOwner",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGroupOwnerResponse>(await this.callApi(params, req, runtime), new SetGroupOwnerResponse({}));
  }

  async setGroupOwner(request: SetGroupOwnerRequest): Promise<SetGroupOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupOwnerWithOptions(request, runtime);
  }

  async setMessageExtensionByKeysWithOptions(tmpReq: SetMessageExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetMessageExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetMessageExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetMessageExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMessageExtensionByKeysResponse>(await this.callApi(params, req, runtime), new SetMessageExtensionByKeysResponse({}));
  }

  async setMessageExtensionByKeys(request: SetMessageExtensionByKeysRequest): Promise<SetMessageExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMessageExtensionByKeysWithOptions(request, runtime);
  }

  async setMessageReadWithOptions(tmpReq: SetMessageReadRequest, runtime: $Util.RuntimeOptions): Promise<SetMessageReadResponse> {
    Util.validateModel(tmpReq);
    let request = new SetMessageReadShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetMessageRead",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMessageReadResponse>(await this.callApi(params, req, runtime), new SetMessageReadResponse({}));
  }

  async setMessageRead(request: SetMessageReadRequest): Promise<SetMessageReadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMessageReadWithOptions(request, runtime);
  }

  async setSingleChatExtensionByKeysWithOptions(tmpReq: SetSingleChatExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetSingleChatExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetSingleChatExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetSingleChatExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSingleChatExtensionByKeysResponse>(await this.callApi(params, req, runtime), new SetSingleChatExtensionByKeysResponse({}));
  }

  async setSingleChatExtensionByKeys(request: SetSingleChatExtensionByKeysRequest): Promise<SetSingleChatExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSingleChatExtensionByKeysWithOptions(request, runtime);
  }

  async setUserConversationExtensionByKeysWithOptions(tmpReq: SetUserConversationExtensionByKeysRequest, runtime: $Util.RuntimeOptions): Promise<SetUserConversationExtensionByKeysResponse> {
    Util.validateModel(tmpReq);
    let request = new SetUserConversationExtensionByKeysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetUserConversationExtensionByKeys",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetUserConversationExtensionByKeysResponse>(await this.callApi(params, req, runtime), new SetUserConversationExtensionByKeysResponse({}));
  }

  async setUserConversationExtensionByKeys(request: SetUserConversationExtensionByKeysRequest): Promise<SetUserConversationExtensionByKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserConversationExtensionByKeysWithOptions(request, runtime);
  }

  async silenceAllGroupMembersWithOptions(tmpReq: SilenceAllGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<SilenceAllGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new SilenceAllGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SilenceAllGroupMembers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SilenceAllGroupMembersResponse>(await this.callApi(params, req, runtime), new SilenceAllGroupMembersResponse({}));
  }

  async silenceAllGroupMembers(request: SilenceAllGroupMembersRequest): Promise<SilenceAllGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.silenceAllGroupMembersWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq UnbindInterconnectionUidRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnbindInterconnectionUidResponse
   */
  // Deprecated
  async unbindInterconnectionUidWithOptions(tmpReq: UnbindInterconnectionUidRequest, runtime: $Util.RuntimeOptions): Promise<UnbindInterconnectionUidResponse> {
    Util.validateModel(tmpReq);
    let request = new UnbindInterconnectionUidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindInterconnectionUid",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindInterconnectionUidResponse>(await this.callApi(params, req, runtime), new UnbindInterconnectionUidResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request UnbindInterconnectionUidRequest
    * @return UnbindInterconnectionUidResponse
   */
  // Deprecated
  async unbindInterconnectionUid(request: UnbindInterconnectionUidRequest): Promise<UnbindInterconnectionUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInterconnectionUidWithOptions(request, runtime);
  }

  async updateAppNameWithOptions(tmpReq: UpdateAppNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppNameResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppNameShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppName",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppNameResponse>(await this.callApi(params, req, runtime), new UpdateAppNameResponse({}));
  }

  async updateAppName(request: UpdateAppNameRequest): Promise<UpdateAppNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppNameWithOptions(request, runtime);
  }

  async updateAppStatusWithOptions(tmpReq: UpdateAppStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppStatus",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppStatusResponse>(await this.callApi(params, req, runtime), new UpdateAppStatusResponse({}));
  }

  async updateAppStatus(request: UpdateAppStatusRequest): Promise<UpdateAppStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppStatusWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq UpdateCallbackConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCallbackConfigResponse
   */
  // Deprecated
  async updateCallbackConfigWithOptions(tmpReq: UpdateCallbackConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCallbackConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateCallbackConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCallbackConfig",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCallbackConfigResponse>(await this.callApi(params, req, runtime), new UpdateCallbackConfigResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request UpdateCallbackConfigRequest
    * @return UpdateCallbackConfigResponse
   */
  // Deprecated
  async updateCallbackConfig(request: UpdateCallbackConfigRequest): Promise<UpdateCallbackConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCallbackConfigWithOptions(request, runtime);
  }

  async updateGroupIconWithOptions(tmpReq: UpdateGroupIconRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupIconResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupIconShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupIcon",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupIconResponse>(await this.callApi(params, req, runtime), new UpdateGroupIconResponse({}));
  }

  async updateGroupIcon(request: UpdateGroupIconRequest): Promise<UpdateGroupIconResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupIconWithOptions(request, runtime);
  }

  async updateGroupMembersRoleWithOptions(tmpReq: UpdateGroupMembersRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupMembersRoleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupMembersRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupMembersRole",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupMembersRoleResponse>(await this.callApi(params, req, runtime), new UpdateGroupMembersRoleResponse({}));
  }

  async updateGroupMembersRole(request: UpdateGroupMembersRoleRequest): Promise<UpdateGroupMembersRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupMembersRoleWithOptions(request, runtime);
  }

  async updateGroupTitleWithOptions(tmpReq: UpdateGroupTitleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupTitleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGroupTitleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupTitle",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupTitleResponse>(await this.callApi(params, req, runtime), new UpdateGroupTitleResponse({}));
  }

  async updateGroupTitle(request: UpdateGroupTitleRequest): Promise<UpdateGroupTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupTitleWithOptions(request, runtime);
  }

  async updateMsgRecallIntervalWithOptions(tmpReq: UpdateMsgRecallIntervalRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMsgRecallIntervalResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateMsgRecallIntervalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requestParams)) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestParams, "RequestParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestParamsShrink)) {
      body["RequestParams"] = request.requestParamsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMsgRecallInterval",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMsgRecallIntervalResponse>(await this.callApi(params, req, runtime), new UpdateMsgRecallIntervalResponse({}));
  }

  async updateMsgRecallInterval(request: UpdateMsgRecallIntervalRequest): Promise<UpdateMsgRecallIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMsgRecallIntervalWithOptions(request, runtime);
  }

  async updateTenantStatusWithOptions(request: UpdateTenantStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTenantStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.request)) {
      bodyFlat["Request"] = request.request;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTenantStatus",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTenantStatusResponse>(await this.callApi(params, req, runtime), new UpdateTenantStatusResponse({}));
  }

  async updateTenantStatus(request: UpdateTenantStatusRequest): Promise<UpdateTenantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTenantStatusWithOptions(request, runtime);
  }

}

// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class LoginStateInfo extends $tea.Model {
  sceneCode?: string;
  thirdUserIdentifier?: string;
  thirdUserType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultValue extends $tea.Model {
  deviceOpenId?: string;
  deviceUnionIds?: ResultValueDeviceUnionIds[];
  name?: string;
  firmwareVersion?: string;
  mac?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
      name: 'Name',
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ResultValueDeviceUnionIds },
      name: 'string',
      firmwareVersion: 'string',
      mac: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequest extends $tea.Model {
  deviceInfo?: AddAndRemoveFavoriteContentRequestDeviceInfo;
  openAddAndRemoveFavoriteContentRequest?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest;
  userInfo?: AddAndRemoveFavoriteContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openAddAndRemoveFavoriteContentRequest: 'OpenAddAndRemoveFavoriteContentRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: AddAndRemoveFavoriteContentRequestDeviceInfo,
      openAddAndRemoveFavoriteContentRequest: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest,
      userInfo: AddAndRemoveFavoriteContentRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openAddAndRemoveFavoriteContentRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openAddAndRemoveFavoriteContentRequestShrink: 'OpenAddAndRemoveFavoriteContentRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openAddAndRemoveFavoriteContentRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAndRemoveFavoriteContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAndRemoveFavoriteContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubRequest extends $tea.Model {
  addSubscriptionInfoRequest?: AddSubRequestAddSubscriptionInfoRequest;
  deviceInfo?: AddSubRequestDeviceInfo;
  userInfo?: AddSubRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      addSubscriptionInfoRequest: 'AddSubscriptionInfoRequest',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSubscriptionInfoRequest: AddSubRequestAddSubscriptionInfoRequest,
      deviceInfo: AddSubRequestDeviceInfo,
      userInfo: AddSubRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubShrinkRequest extends $tea.Model {
  addSubscriptionInfoRequestShrink?: string;
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addSubscriptionInfoRequestShrink: 'AddSubscriptionInfoRequest',
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSubscriptionInfoRequestShrink: 'string',
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: AddSubResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: AddSubResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoRequest extends $tea.Model {
  encryptedAligenieUserIdentifier?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedAligenieUserIdentifier: 'EncryptedAligenieUserIdentifier',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedAligenieUserIdentifier: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: AuthLoginWithAligenieUserInfoResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: AuthLoginWithAligenieUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthLoginWithAligenieUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthLoginWithAligenieUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest extends $tea.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoRequest extends $tea.Model {
  encryptedTaobaoUserIdentifier?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedTaobaoUserIdentifier: 'EncryptedTaobaoUserIdentifier',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedTaobaoUserIdentifier: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: AuthLoginWithTaobaoUserInfoResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: AuthLoginWithTaobaoUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthLoginWithTaobaoUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthLoginWithTaobaoUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoRequest extends $tea.Model {
  extInfo?: { [key: string]: any };
  sceneCode?: string;
  thirdUserIdentifier?: string;
  thirdUserType?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoShrinkRequest extends $tea.Model {
  extInfoShrink?: string;
  sceneCode?: string;
  thirdUserIdentifier?: string;
  thirdUserType?: string;
  static names(): { [key: string]: string } {
    return {
      extInfoShrink: 'ExtInfo',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfoShrink: 'string',
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoResponseBody extends $tea.Model {
  code?: number;
  dataObj?: AuthLoginWithThirdUserInfoResponseBodyDataObj;
  message?: string;
  requestId?: string;
  result?: AuthLoginWithThirdUserInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataObj: 'DataObj',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataObj: AuthLoginWithThirdUserInfoResponseBodyDataObj,
      message: 'string',
      requestId: 'string',
      result: AuthLoginWithThirdUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthLoginWithThirdUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthLoginWithThirdUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelRequest extends $tea.Model {
  bizData?: string;
  calleeNick?: string;
  calleePhoneNum?: string;
  deviceInfo?: CheckAndDoVoipCallForHotelRequestDeviceInfo;
  userInfo?: CheckAndDoVoipCallForHotelRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      calleeNick: 'CalleeNick',
      calleePhoneNum: 'CalleePhoneNum',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      calleeNick: 'string',
      calleePhoneNum: 'string',
      deviceInfo: CheckAndDoVoipCallForHotelRequestDeviceInfo,
      userInfo: CheckAndDoVoipCallForHotelRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelShrinkRequest extends $tea.Model {
  bizData?: string;
  calleeNick?: string;
  calleePhoneNum?: string;
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      calleeNick: 'CalleeNick',
      calleePhoneNum: 'CalleePhoneNum',
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      calleeNick: 'string',
      calleePhoneNum: 'string',
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: CheckAndDoVoipCallForHotelResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: CheckAndDoVoipCallForHotelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckAndDoVoipCallForHotelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAndDoVoipCallForHotelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtRequest extends $tea.Model {
  authCode?: string;
  encodeKey?: string;
  encodeType?: string;
  userInfo?: CheckAuthCodeBindForExtRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      encodeKey: 'string',
      encodeType: 'string',
      userInfo: CheckAuthCodeBindForExtRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtShrinkRequest extends $tea.Model {
  authCode?: string;
  encodeKey?: string;
  encodeType?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      encodeKey: 'string',
      encodeType: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: CheckAuthCodeBindForExtResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: CheckAuthCodeBindForExtResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckAuthCodeBindForExtResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAuthCodeBindForExtResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerRequest extends $tea.Model {
  curPlayIndex?: number;
  deviceInfo?: CloudPlayerRequestDeviceInfo;
  playMode?: string;
  songId?: string;
  songIdList?: string[];
  source?: string;
  userInfo?: CloudPlayerRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      curPlayIndex: 'CurPlayIndex',
      deviceInfo: 'DeviceInfo',
      playMode: 'PlayMode',
      songId: 'SongId',
      songIdList: 'SongIdList',
      source: 'Source',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPlayIndex: 'number',
      deviceInfo: CloudPlayerRequestDeviceInfo,
      playMode: 'string',
      songId: 'string',
      songIdList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      userInfo: CloudPlayerRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerShrinkRequest extends $tea.Model {
  curPlayIndex?: number;
  deviceInfoShrink?: string;
  playMode?: string;
  songId?: string;
  songIdListShrink?: string;
  source?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      curPlayIndex: 'CurPlayIndex',
      deviceInfoShrink: 'DeviceInfo',
      playMode: 'PlayMode',
      songId: 'SongId',
      songIdListShrink: 'SongIdList',
      source: 'Source',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPlayIndex: 'number',
      deviceInfoShrink: 'string',
      playMode: 'string',
      songId: 'string',
      songIdListShrink: 'string',
      source: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloudPlayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloudPlayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequest extends $tea.Model {
  deviceInfo?: CreateAlarmRequestDeviceInfo;
  payload?: CreateAlarmRequestPayload;
  userInfo?: CreateAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateAlarmRequestDeviceInfo,
      payload: CreateAlarmRequestPayload,
      userInfo: CreateAlarmRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: number;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequest extends $tea.Model {
  deviceInfo?: CreatePlayingListRequestDeviceInfo;
  openCreatePlayingListRequest?: CreatePlayingListRequestOpenCreatePlayingListRequest;
  userInfo?: CreatePlayingListRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openCreatePlayingListRequest: 'OpenCreatePlayingListRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreatePlayingListRequestDeviceInfo,
      openCreatePlayingListRequest: CreatePlayingListRequestOpenCreatePlayingListRequest,
      userInfo: CreatePlayingListRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openCreatePlayingListRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openCreatePlayingListRequestShrink: 'OpenCreatePlayingListRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openCreatePlayingListRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: CreatePlayingListResponseBodyResult;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: CreatePlayingListResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePlayingListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePlayingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequest extends $tea.Model {
  deviceInfo?: CreateScheduleTaskRequestDeviceInfo;
  payload?: CreateScheduleTaskRequestPayload;
  userInfo?: CreateScheduleTaskRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateScheduleTaskRequestDeviceInfo,
      payload: CreateScheduleTaskRequestPayload,
      userInfo: CreateScheduleTaskRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: number;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateScheduleTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScheduleTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsRequest extends $tea.Model {
  deviceInfo?: DeleteAlarmsRequestDeviceInfo;
  payload?: DeleteAlarmsRequestPayload;
  userInfo?: DeleteAlarmsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: DeleteAlarmsRequestDeviceInfo,
      payload: DeleteAlarmsRequestPayload,
      userInfo: DeleteAlarmsRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskRequest extends $tea.Model {
  deviceInfo?: DeleteScheduleTaskRequestDeviceInfo;
  payload?: DeleteScheduleTaskRequestPayload;
  userInfo?: DeleteScheduleTaskRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: DeleteScheduleTaskRequestDeviceInfo,
      payload: DeleteScheduleTaskRequestPayload,
      userInfo: DeleteScheduleTaskRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteScheduleTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScheduleTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubRequest extends $tea.Model {
  subId?: number;
  static names(): { [key: string]: string } {
    return {
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequest extends $tea.Model {
  controlRequest?: DeviceControlRequestControlRequest;
  deviceInfo?: DeviceControlRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      controlRequest: 'ControlRequest',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlRequest: DeviceControlRequestControlRequest,
      deviceInfo: DeviceControlRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlShrinkRequest extends $tea.Model {
  controlRequestShrink?: string;
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      controlRequestShrink: 'ControlRequest',
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlRequestShrink: 'string',
      deviceInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeviceControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeviceControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateRequest extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: EcologyOpennessAuthenticateResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: EcologyOpennessAuthenticateResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EcologyOpennessAuthenticateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EcologyOpennessAuthenticateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeRequest extends $tea.Model {
  phoneNumber?: string;
  region?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      region: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: EcologyOpennessSendVerificationCodeResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: EcologyOpennessSendVerificationCodeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EcologyOpennessSendVerificationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EcologyOpennessSendVerificationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberRequest extends $tea.Model {
  code?: string;
  phoneNumber?: string;
  region?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      phoneNumber: 'string',
      region: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBody extends $tea.Model {
  code?: number;
  dataObj?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj;
  message?: string;
  requestId?: string;
  result?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataObj: 'DataObj',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataObj: FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj,
      message: 'string',
      requestId: 'string',
      result: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FindUserlistToAuthLoginWithPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FindUserlistToAuthLoginWithPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmRequest extends $tea.Model {
  deviceInfo?: GetAlarmRequestDeviceInfo;
  payload?: GetAlarmRequestPayload;
  userInfo?: GetAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetAlarmRequestDeviceInfo,
      payload: GetAlarmRequestPayload,
      userInfo: GetAlarmRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetAlarmResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetAlarmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumRequest extends $tea.Model {
  id?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  result?: GetAlbumResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      result: GetAlbumResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlbumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlbumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdRequest extends $tea.Model {
  albumId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetAlbumDetailByIdResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetAlbumDetailByIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlbumDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlbumDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoRequest extends $tea.Model {
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetAligenieUserInfoResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetAligenieUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAligenieUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAligenieUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceRequest extends $tea.Model {
  channelInfo?: GetCodeEnhanceRequestChannelInfo;
  userInfo?: GetCodeEnhanceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      channelInfo: 'ChannelInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfo: GetCodeEnhanceRequestChannelInfo,
      userInfo: GetCodeEnhanceRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceShrinkRequest extends $tea.Model {
  channelInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      channelInfoShrink: 'ChannelInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCodeEnhanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCodeEnhanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentRequest extends $tea.Model {
  id?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetContentResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetContentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemRequest extends $tea.Model {
  deviceInfo?: GetCurrentPlayingItemRequestDeviceInfo;
  userInfo?: GetCurrentPlayingItemRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetCurrentPlayingItemRequestDeviceInfo,
      userInfo: GetCurrentPlayingItemRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetCurrentPlayingItemResponseBodyResult;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetCurrentPlayingItemResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCurrentPlayingItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCurrentPlayingItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListRequest extends $tea.Model {
  deviceInfo?: GetCurrentPlayingListRequestDeviceInfo;
  openQueryPlayListRequest?: GetCurrentPlayingListRequestOpenQueryPlayListRequest;
  userInfo?: GetCurrentPlayingListRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openQueryPlayListRequest: 'OpenQueryPlayListRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetCurrentPlayingListRequestDeviceInfo,
      openQueryPlayListRequest: GetCurrentPlayingListRequestOpenQueryPlayListRequest,
      userInfo: GetCurrentPlayingListRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openQueryPlayListRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openQueryPlayListRequestShrink: 'OpenQueryPlayListRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openQueryPlayListRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetCurrentPlayingListResponseBodyResult[];
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetCurrentPlayingListResponseBodyResult },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCurrentPlayingListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCurrentPlayingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoRequest extends $tea.Model {
  deviceInfo?: GetDeviceBasicInfoRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceBasicInfoRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceBasicInfoResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceBasicInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityRequest extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  identityId?: string;
  identityType?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityId: 'IdentityId',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityId: 'string',
      identityType: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceIdByIdentityResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceIdByIdentityResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceIdByIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceIdByIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingRequest extends $tea.Model {
  deviceInfo?: GetDeviceSettingRequestDeviceInfo;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceSettingRequestDeviceInfo,
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      keysShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailRequest extends $tea.Model {
  deviceInfo?: GetDeviceStatusDetailRequestDeviceInfo;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceStatusDetailRequestDeviceInfo,
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      keysShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceStatusDetailResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceStatusDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceStatusDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceStatusDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoRequest extends $tea.Model {
  deviceInfo?: GetDeviceStatusInfoRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceStatusInfoRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceStatusInfoResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceStatusInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceStatusInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceStatusInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagRequest extends $tea.Model {
  deviceInfo?: GetDeviceTagRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceTagRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceTagResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceTagResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskRequest extends $tea.Model {
  deviceInfo?: GetScheduleTaskRequestDeviceInfo;
  payload?: GetScheduleTaskRequestPayload;
  userInfo?: GetScheduleTaskRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetScheduleTaskRequestDeviceInfo,
      payload: GetScheduleTaskRequestPayload,
      userInfo: GetScheduleTaskRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetScheduleTaskResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetScheduleTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetScheduleTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScheduleTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountRequest extends $tea.Model {
  userInfo?: GetUnreadMessageCountRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetUnreadMessageCountRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountShrinkRequest extends $tea.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUnreadMessageCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUnreadMessageCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdRequest extends $tea.Model {
  deviceInfo?: GetUserByDeviceIdRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetUserByDeviceIdRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetUserByDeviceIdResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetUserByDeviceIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserByDeviceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserByDeviceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherRequest extends $tea.Model {
  deviceInfo?: GetWeatherRequestDeviceInfo;
  payload?: GetWeatherRequestPayload;
  userInfo?: GetWeatherRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetWeatherRequestDeviceInfo,
      payload: GetWeatherRequestPayload,
      userInfo: GetWeatherRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetWeatherResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetWeatherResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeatherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWeatherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListRequest extends $tea.Model {
  deviceInfo?: IndexControlPlayingListRequestDeviceInfo;
  openIndexControlRequest?: IndexControlPlayingListRequestOpenIndexControlRequest;
  userInfo?: IndexControlPlayingListRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openIndexControlRequest: 'OpenIndexControlRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: IndexControlPlayingListRequestDeviceInfo,
      openIndexControlRequest: IndexControlPlayingListRequestOpenIndexControlRequest,
      userInfo: IndexControlPlayingListRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openIndexControlRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openIndexControlRequestShrink: 'OpenIndexControlRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openIndexControlRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: IndexControlPlayingListResponseBodyResult;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: IndexControlPlayingListResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IndexControlPlayingListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IndexControlPlayingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsRequest extends $tea.Model {
  deviceInfo?: ListAlarmsRequestDeviceInfo;
  payload?: ListAlarmsRequestPayload;
  userInfo?: ListAlarmsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListAlarmsRequestDeviceInfo,
      payload: ListAlarmsRequestPayload,
      userInfo: ListAlarmsRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListAlarmsResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListAlarmsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailRequest extends $tea.Model {
  id?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListAlbumDetailResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListAlbumDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlbumDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlbumDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedRequest extends $tea.Model {
  albumIdList?: string[];
  deviceInfo?: ListAlbumIsAddedRequestDeviceInfo;
  userInfo?: ListAlbumIsAddedRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      albumIdList: 'AlbumIdList',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumIdList: { 'type': 'array', 'itemType': 'string' },
      deviceInfo: ListAlbumIsAddedRequestDeviceInfo,
      userInfo: ListAlbumIsAddedRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedShrinkRequest extends $tea.Model {
  albumIdListShrink?: string;
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      albumIdListShrink: 'AlbumIdList',
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumIdListShrink: 'string',
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListAlbumIsAddedResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAlbumIsAddedResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlbumIsAddedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlbumIsAddedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentRequest extends $tea.Model {
  deviceInfo?: ListCateContentRequestDeviceInfo;
  request?: ListCateContentRequestRequest;
  userInfo?: ListCateContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListCateContentRequestDeviceInfo,
      request: ListCateContentRequestRequest,
      userInfo: ListCateContentRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  requestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      requestShrink: 'Request',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      requestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListCateContentResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListCateContentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCateContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCateContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateInfoRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListCateInfoResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCateInfoResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateFirstFloorHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateFirstFloorRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateFirstFloorResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListCommonCateFirstFloorResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCommonCateFirstFloorResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateFirstFloorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCommonCateFirstFloorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCommonCateFirstFloorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorRequest extends $tea.Model {
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListCommonCateSecondFloorResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCommonCateSecondFloorResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCommonCateSecondFloorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCommonCateSecondFloorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoRequest extends $tea.Model {
  deviceInfos?: ListDeviceBasicInfoRequestDeviceInfos;
  static names(): { [key: string]: string } {
    return {
      deviceInfos: 'DeviceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfos: ListDeviceBasicInfoRequestDeviceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoShrinkRequest extends $tea.Model {
  deviceInfosShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfosShrink: 'DeviceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfosShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: ResultValue };
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': ResultValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdRequest extends $tea.Model {
  userInfo?: ListDeviceByUserIdRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: ListDeviceByUserIdRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdShrinkRequest extends $tea.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListDeviceByUserIdResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeviceByUserIdResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelRequest extends $tea.Model {
  channelInfo?: ListDeviceByUserIdAndChanelRequestChannelInfo;
  userInfo?: ListDeviceByUserIdAndChanelRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      channelInfo: 'ChannelInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfo: ListDeviceByUserIdAndChanelRequestChannelInfo,
      userInfo: ListDeviceByUserIdAndChanelRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelShrinkRequest extends $tea.Model {
  channelInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      channelInfoShrink: 'ChannelInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListDeviceByUserIdAndChanelResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeviceByUserIdAndChanelResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceByUserIdAndChanelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceByUserIdAndChanelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIdByIdentitiesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIdByIdentitiesRequest extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  identityIds?: string[];
  identityType?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityIds: 'IdentityIds',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityIds: { 'type': 'array', 'itemType': 'string' },
      identityType: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIdByIdentitiesShrinkRequest extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  identityIdsShrink?: string;
  identityType?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityIdsShrink: 'IdentityIds',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityIdsShrink: 'string',
      identityType: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIdByIdentitiesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: ResultValue };
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': ResultValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIdByIdentitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceIdByIdentitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceIdByIdentitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicRequest extends $tea.Model {
  deviceInfo?: ListMusicRequestDeviceInfo;
  payload?: ListMusicRequestPayload;
  userInfo?: ListMusicRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListMusicRequestDeviceInfo,
      payload: ListMusicRequestPayload,
      userInfo: ListMusicRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListMusicResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListMusicResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMusicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMusicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryRequest extends $tea.Model {
  deviceInfo?: ListPlayHistoryRequestDeviceInfo;
  request?: ListPlayHistoryRequestRequest;
  userInfo?: ListPlayHistoryRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListPlayHistoryRequestDeviceInfo,
      request: ListPlayHistoryRequestRequest,
      userInfo: ListPlayHistoryRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  requestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      requestShrink: 'Request',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      requestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  result?: ListPlayHistoryResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      result: { 'type': 'array', 'itemType': ListPlayHistoryResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPlayHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPlayHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequest extends $tea.Model {
  deviceInfo?: ListRecommendContentRequestDeviceInfo;
  request?: ListRecommendContentRequestRequest;
  userInfo?: ListRecommendContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListRecommendContentRequestDeviceInfo,
      request: ListRecommendContentRequestRequest,
      userInfo: ListRecommendContentRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  requestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      requestShrink: 'Request',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      requestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListRecommendContentResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRecommendContentResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRecommendContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecommendContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubRequest extends $tea.Model {
  deviceInfo?: ListSubRequestDeviceInfo;
  page?: ListSubRequestPage;
  userInfo?: ListSubRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      page: 'Page',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListSubRequestDeviceInfo,
      page: ListSubRequestPage,
      userInfo: ListSubRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  pageShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      pageShrink: 'Page',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      pageShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListSubResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListSubResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequest extends $tea.Model {
  deviceInfo?: ListSubAlbumRequestDeviceInfo;
  querySubscriptionAlbumRequest?: ListSubAlbumRequestQuerySubscriptionAlbumRequest;
  userInfo?: ListSubAlbumRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      querySubscriptionAlbumRequest: 'QuerySubscriptionAlbumRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListSubAlbumRequestDeviceInfo,
      querySubscriptionAlbumRequest: ListSubAlbumRequestQuerySubscriptionAlbumRequest,
      userInfo: ListSubAlbumRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  querySubscriptionAlbumRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      querySubscriptionAlbumRequestShrink: 'QuerySubscriptionAlbumRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      querySubscriptionAlbumRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListSubAlbumResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListSubAlbumResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubAlbumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubAlbumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryRequest extends $tea.Model {
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListSubscriptionAlbumCategoryResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSubscriptionAlbumCategoryResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubscriptionAlbumCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubscriptionAlbumCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageRequest extends $tea.Model {
  beforeTime?: string;
  userInfo?: ListUserMessageRequestUserInfo;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTime: 'BeforeTime',
      userInfo: 'UserInfo',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTime: 'string',
      userInfo: ListUserMessageRequestUserInfo,
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageShrinkRequest extends $tea.Model {
  beforeTime?: string;
  userInfoShrink?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTime: 'BeforeTime',
      userInfoShrink: 'UserInfo',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTime: 'string',
      userInfoShrink: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  result?: ListUserMessageResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: { 'type': 'array', 'itemType': ListUserMessageResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlRequest extends $tea.Model {
  deviceInfo?: PlayAndPauseControlRequestDeviceInfo;
  openPlayAndPauseControlParam?: PlayAndPauseControlRequestOpenPlayAndPauseControlParam;
  userInfo?: PlayAndPauseControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openPlayAndPauseControlParam: 'OpenPlayAndPauseControlParam',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PlayAndPauseControlRequestDeviceInfo,
      openPlayAndPauseControlParam: PlayAndPauseControlRequestOpenPlayAndPauseControlParam,
      userInfo: PlayAndPauseControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openPlayAndPauseControlParamShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openPlayAndPauseControlParamShrink: 'OpenPlayAndPauseControlParam',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openPlayAndPauseControlParamShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PlayAndPauseControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PlayAndPauseControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlRequest extends $tea.Model {
  deviceInfo?: PlayModeControlRequestDeviceInfo;
  openPlayModeControlRequest?: PlayModeControlRequestOpenPlayModeControlRequest;
  userInfo?: PlayModeControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openPlayModeControlRequest: 'OpenPlayModeControlRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PlayModeControlRequestDeviceInfo,
      openPlayModeControlRequest: PlayModeControlRequestOpenPlayModeControlRequest,
      userInfo: PlayModeControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openPlayModeControlRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openPlayModeControlRequestShrink: 'OpenPlayModeControlRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openPlayModeControlRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: PlayModeControlResponseBodyResult;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: PlayModeControlResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PlayModeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PlayModeControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlRequest extends $tea.Model {
  deviceInfo?: PreviousAndNextControlRequestDeviceInfo;
  openControlPlayingListRequest?: PreviousAndNextControlRequestOpenControlPlayingListRequest;
  userInfo?: PreviousAndNextControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openControlPlayingListRequest: 'OpenControlPlayingListRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PreviousAndNextControlRequestDeviceInfo,
      openControlPlayingListRequest: PreviousAndNextControlRequestOpenControlPlayingListRequest,
      userInfo: PreviousAndNextControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openControlPlayingListRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openControlPlayingListRequestShrink: 'OpenControlPlayingListRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openControlPlayingListRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: PreviousAndNextControlResponseBodyResult;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: PreviousAndNextControlResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreviousAndNextControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreviousAndNextControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlRequest extends $tea.Model {
  deviceInfo?: ProgressControlRequestDeviceInfo;
  openProgressControlRequest?: ProgressControlRequestOpenProgressControlRequest;
  userInfo?: ProgressControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openProgressControlRequest: 'OpenProgressControlRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ProgressControlRequestDeviceInfo,
      openProgressControlRequest: ProgressControlRequestOpenProgressControlRequest,
      userInfo: ProgressControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  openProgressControlRequestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openProgressControlRequestShrink: 'OpenProgressControlRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openProgressControlRequestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  success?: string;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProgressControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ProgressControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeRequest extends $tea.Model {
  deviceInfo?: QueryMusicTypeRequestDeviceInfo;
  payload?: QueryMusicTypeRequestPayload;
  userInfo?: QueryMusicTypeRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: QueryMusicTypeRequestDeviceInfo,
      payload: QueryMusicTypeRequestPayload,
      userInfo: QueryMusicTypeRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: QueryMusicTypeResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryMusicTypeResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMusicTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMusicTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdRequest extends $tea.Model {
  sp?: string;
  tmeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      sp: 'Sp',
      tmeUserId: 'TmeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sp: 'string',
      tmeUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: QueryUserDeviceListByTmeUserIdResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: QueryUserDeviceListByTmeUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserDeviceListByTmeUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserDeviceListByTmeUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageRequest extends $tea.Model {
  messageId?: number;
  userInfo?: ReadMessageRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'number',
      userInfo: ReadMessageRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageShrinkRequest extends $tea.Model {
  messageId?: number;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'number',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReadMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReadMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindRequest extends $tea.Model {
  bindReq?: ScanCodeBindRequestBindReq;
  userInfo?: ScanCodeBindRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      bindReq: 'BindReq',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindReq: ScanCodeBindRequestBindReq,
      userInfo: ScanCodeBindRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindShrinkRequest extends $tea.Model {
  bindReqShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bindReqShrink: 'BindReq',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindReqShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ScanCodeBindResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ScanCodeBindResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScanCodeBindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScanCodeBindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequest extends $tea.Model {
  scgFilter?: ScgSearchRequestScgFilter;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      scgFilter: 'ScgFilter',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scgFilter: ScgSearchRequestScgFilter,
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchShrinkRequest extends $tea.Model {
  scgFilterShrink?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      scgFilterShrink: 'ScgFilter',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scgFilterShrink: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  result?: ScgSearchResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ScgSearchResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScgSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScgSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentRequest extends $tea.Model {
  deviceInfo?: SearchContentRequestDeviceInfo;
  request?: SearchContentRequestRequest;
  userInfo?: SearchContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SearchContentRequestDeviceInfo,
      request: SearchContentRequestRequest,
      userInfo: SearchContentRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  requestShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      requestShrink: 'Request',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      requestShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: SearchContentResponseBodyResult[];
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SearchContentResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  url?: string;
  userInfo?: SendMessageRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      userInfo: SendMessageRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageShrinkRequest extends $tea.Model {
  url?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: 'boolean',
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

export class SetDeviceSettingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceSettingRequest extends $tea.Model {
  deviceInfo?: SetDeviceSettingRequestDeviceInfo;
  key?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SetDeviceSettingRequestDeviceInfo,
      key: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceSettingShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  key?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      key: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceSettingResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeviceSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeviceSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAligenieUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAligenieUserRequest extends $tea.Model {
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAligenieUserResponseBody extends $tea.Model {
  code?: number;
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

export class UnbindAligenieUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindAligenieUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindAligenieUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceRequest extends $tea.Model {
  deviceInfo?: UnbindDeviceRequestDeviceInfo;
  userInfo?: UnbindDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UnbindDeviceRequestDeviceInfo,
      userInfo: UnbindDeviceRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequest extends $tea.Model {
  deviceInfo?: UpdateAlarmRequestDeviceInfo;
  payload?: UpdateAlarmRequestPayload;
  userInfo?: UpdateAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UpdateAlarmRequestDeviceInfo,
      payload: UpdateAlarmRequestPayload,
      userInfo: UpdateAlarmRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultValueDeviceUnionIds extends $tea.Model {
  organizationId?: string;
  deviceUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      deviceUnionId: 'DeviceUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      deviceUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair extends $tea.Model {
  extendInfo?: { [key: string]: any };
  rawId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      rawId: 'RawId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rawId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest extends $tea.Model {
  favoriteCmd?: string;
  openSourceRawIdPair?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair;
  packageType?: string;
  static names(): { [key: string]: string } {
    return {
      favoriteCmd: 'FavoriteCmd',
      openSourceRawIdPair: 'OpenSourceRawIdPair',
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favoriteCmd: 'string',
      openSourceRawIdPair: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair,
      packageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubRequestAddSubscriptionInfoRequestScheduleInfo extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubRequestAddSubscriptionInfoRequest extends $tea.Model {
  albumId?: string;
  dailyStudyCnt?: number;
  playMode?: string;
  scheduleInfo?: AddSubRequestAddSubscriptionInfoRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      dailyStudyCnt: 'DailyStudyCnt',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      dailyStudyCnt: 'number',
      playMode: 'string',
      scheduleInfo: AddSubRequestAddSubscriptionInfoRequestScheduleInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubResponseBodyResultScheduleInfo extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubResponseBodyResult extends $tea.Model {
  albumId?: string;
  dailyStudyCnt?: number;
  deviceId?: string;
  id?: number;
  playMode?: string;
  scheduleInfo?: AddSubResponseBodyResultScheduleInfo;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      dailyStudyCnt: 'DailyStudyCnt',
      deviceId: 'DeviceId',
      id: 'Id',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      dailyStudyCnt: 'number',
      deviceId: 'string',
      id: 'number',
      playMode: 'string',
      scheduleInfo: AddSubResponseBodyResultScheduleInfo,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoResponseBodyResult extends $tea.Model {
  expiredTimeLong?: number;
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTimeLong: 'ExpiredTimeLong',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTimeLong: 'number',
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponseBodyResult extends $tea.Model {
  expiredTimeLong?: number;
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTimeLong: 'ExpiredTimeLong',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTimeLong: 'number',
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoResponseBodyResult extends $tea.Model {
  expiredTimeLong?: number;
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTimeLong: 'ExpiredTimeLong',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTimeLong: 'number',
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoResponseBodyDataObj extends $tea.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoResponseBodyResult extends $tea.Model {
  expiredTimeLong?: number;
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTimeLong: 'ExpiredTimeLong',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTimeLong: 'number',
      loginStateAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData extends $tea.Model {
  deviceIcon?: string;
  deviceName?: string;
  deviceType?: string;
  online?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIcon: 'DeviceIcon',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      online: 'Online',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIcon: 'string',
      deviceName: 'string',
      deviceType: 'string',
      online: 'boolean',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets extends $tea.Model {
  code?: number;
  data?: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult extends $tea.Model {
  message?: string;
  retCode?: number;
  retValue?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      retCode: 'RetCode',
      retValue: 'RetValue',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      retCode: 'number',
      retValue: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResult extends $tea.Model {
  deviceTargets?: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets;
  isStartCall?: boolean;
  passed?: boolean;
  startCallResult?: CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult;
  static names(): { [key: string]: string } {
    return {
      deviceTargets: 'DeviceTargets',
      isStartCall: 'IsStartCall',
      passed: 'Passed',
      startCallResult: 'StartCallResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTargets: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets,
      isStartCall: 'boolean',
      passed: 'boolean',
      startCallResult: CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo extends $tea.Model {
  id?: string;
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo extends $tea.Model {
  id?: string;
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBodyResult extends $tea.Model {
  deviceOpenInfo?: CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo;
  userOpenInfo?: CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo;
  static names(): { [key: string]: string } {
    return {
      deviceOpenInfo: 'DeviceOpenInfo',
      userOpenInfo: 'UserOpenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenInfo: CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo,
      userOpenInfo: CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudPlayerRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayloadMusicInfo extends $tea.Model {
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayloadScheduleInfoOnce extends $tea.Model {
  day?: number;
  hour?: number;
  minute?: number;
  month?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay extends $tea.Model {
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayloadScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayloadScheduleInfo extends $tea.Model {
  once?: CreateAlarmRequestPayloadScheduleInfoOnce;
  statutoryWorkingDay?: CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay;
  type?: string;
  weekly?: CreateAlarmRequestPayloadScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateAlarmRequestPayloadScheduleInfoOnce,
      statutoryWorkingDay: CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: CreateAlarmRequestPayloadScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestPayload extends $tea.Model {
  musicInfo?: CreateAlarmRequestPayloadMusicInfo;
  scheduleInfo?: CreateAlarmRequestPayloadScheduleInfo;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicInfo: CreateAlarmRequestPayloadMusicInfo,
      scheduleInfo: CreateAlarmRequestPayloadScheduleInfo,
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestOpenCreatePlayingListRequestContentList extends $tea.Model {
  rawId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      rawId: 'RawId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestOpenCreatePlayingListRequest extends $tea.Model {
  contentList?: CreatePlayingListRequestOpenCreatePlayingListRequestContentList[];
  contentType?: string;
  extendInfo?: { [key: string]: any };
  index?: number;
  needAlbumContinued?: boolean;
  playFrom?: string;
  playMode?: string;
  static names(): { [key: string]: string } {
    return {
      contentList: 'ContentList',
      contentType: 'ContentType',
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needAlbumContinued: 'NeedAlbumContinued',
      playFrom: 'PlayFrom',
      playMode: 'PlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentList: { 'type': 'array', 'itemType': CreatePlayingListRequestOpenCreatePlayingListRequestContentList },
      contentType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needAlbumContinued: 'boolean',
      playFrom: 'string',
      playMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponseBodyResult extends $tea.Model {
  albumName?: string;
  albumRawId?: string;
  audioLength?: number;
  copyright?: number;
  cover?: CreatePlayingListResponseBodyResultCover;
  defaultPlayOrder?: number;
  itemUrl?: string;
  liked?: boolean;
  lyricUrl?: string;
  playMode?: string;
  pos?: number;
  progress?: number;
  rawId?: string;
  singer?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: CreatePlayingListResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'boolean',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadActionDTOs extends $tea.Model {
  customAction?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customAction: 'customAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAction: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTOOnce extends $tea.Model {
  day?: number;
  hour?: number;
  minute?: number;
  month?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay extends $tea.Model {
  hours?: number[];
  minutes?: number[];
  static names(): { [key: string]: string } {
    return {
      hours: 'Hours',
      minutes: 'Minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hours: { 'type': 'array', 'itemType': 'number' },
      minutes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTOWeekly extends $tea.Model {
  daysOfWeek?: number[];
  hours?: number[];
  minutes?: number[];
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hours: 'Hours',
      minutes: 'Minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hours: { 'type': 'array', 'itemType': 'number' },
      minutes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTO extends $tea.Model {
  once?: CreateScheduleTaskRequestPayloadScheduleDTOOnce;
  scheduleEndTime?: number;
  scheduleStartTime?: number;
  scheduleType?: string;
  statutoryWorkingDay?: CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay;
  weekly?: CreateScheduleTaskRequestPayloadScheduleDTOWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      scheduleEndTime: 'ScheduleEndTime',
      scheduleStartTime: 'ScheduleStartTime',
      scheduleType: 'ScheduleType',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateScheduleTaskRequestPayloadScheduleDTOOnce,
      scheduleEndTime: 'number',
      scheduleStartTime: 'number',
      scheduleType: 'string',
      statutoryWorkingDay: CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay,
      weekly: CreateScheduleTaskRequestPayloadScheduleDTOWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayload extends $tea.Model {
  actionDTOs?: CreateScheduleTaskRequestPayloadActionDTOs[];
  idempotentId?: string;
  scheduleDTO?: CreateScheduleTaskRequestPayloadScheduleDTO;
  static names(): { [key: string]: string } {
    return {
      actionDTOs: 'ActionDTOs',
      idempotentId: 'IdempotentId',
      scheduleDTO: 'ScheduleDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDTOs: { 'type': 'array', 'itemType': CreateScheduleTaskRequestPayloadActionDTOs },
      idempotentId: 'string',
      scheduleDTO: CreateScheduleTaskRequestPayloadScheduleDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsRequestPayload extends $tea.Model {
  alarmIds?: number[];
  static names(): { [key: string]: string } {
    return {
      alarmIds: 'AlarmIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmsRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTaskRequestPayload extends $tea.Model {
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

export class DeleteScheduleTaskRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestControlRequest extends $tea.Model {
  muted?: boolean;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      muted: 'Muted',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      muted: 'boolean',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateResponseBodyResult extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  sceneCode?: string;
  thirdUserIdentifier?: string;
  thirdUserType?: string;
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeResponseBodyResult extends $tea.Model {
  expireIn?: number;
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      expireIn: 'ExpireIn',
      repeatInterval: 'RepeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireIn: 'number',
      repeatInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj extends $tea.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin extends $tea.Model {
  avatar?: string;
  encryptedUserIdentifier?: string;
  findingType?: string;
  nickname?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      encryptedUserIdentifier: 'EncryptedUserIdentifier',
      findingType: 'FindingType',
      nickname: 'Nickname',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      encryptedUserIdentifier: 'string',
      findingType: 'string',
      nickname: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult extends $tea.Model {
  userListToAuthLogin?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin[];
  static names(): { [key: string]: string } {
    return {
      userListToAuthLogin: 'UserListToAuthLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userListToAuthLogin: { 'type': 'array', 'itemType': FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmRequestPayload extends $tea.Model {
  alarmId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultMusicInfo extends $tea.Model {
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoOnce extends $tea.Model {
  day?: number;
  hour?: number;
  minute?: number;
  month?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay extends $tea.Model {
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfo extends $tea.Model {
  once?: GetAlarmResponseBodyResultScheduleInfoOnce;
  statutoryWorkingDay?: GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay;
  type?: string;
  weekly?: GetAlarmResponseBodyResultScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: GetAlarmResponseBodyResultScheduleInfoOnce,
      statutoryWorkingDay: GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: GetAlarmResponseBodyResultScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResult extends $tea.Model {
  alarmId?: number;
  musicInfo?: GetAlarmResponseBodyResultMusicInfo;
  scheduleInfo?: GetAlarmResponseBodyResultScheduleInfo;
  scheduleTypeDesc?: string;
  status?: number;
  triggerDateDesc?: string;
  triggerTimeDesc?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      scheduleTypeDesc: 'ScheduleTypeDesc',
      status: 'Status',
      triggerDateDesc: 'TriggerDateDesc',
      triggerTimeDesc: 'TriggerTimeDesc',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      musicInfo: GetAlarmResponseBodyResultMusicInfo,
      scheduleInfo: GetAlarmResponseBodyResultScheduleInfo,
      scheduleTypeDesc: 'string',
      status: 'number',
      triggerDateDesc: 'string',
      triggerTimeDesc: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumResponseBodyResultAuthors extends $tea.Model {
  authorTypes?: string[];
  gender?: string;
  id?: number;
  online?: boolean;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      gender: 'string',
      id: 'number',
      online: 'boolean',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumResponseBodyResult extends $tea.Model {
  alias?: string[];
  audition?: boolean;
  authors?: GetAlbumResponseBodyResultAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: GetAlbumResponseBodyResultCover;
  description?: string;
  finished?: string;
  hotScore?: number;
  id?: number;
  itemType?: string;
  rawId?: string;
  source?: string;
  title?: string;
  totalEpisode?: number;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      finished: 'Finished',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
      totalEpisode: 'TotalEpisode',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': GetAlbumResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: GetAlbumResponseBodyResultCover,
      description: 'string',
      finished: 'string',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
      totalEpisode: 'number',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponseBodyResultAlbumContentList extends $tea.Model {
  duration?: string;
  id?: string;
  orderIndex?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      orderIndex: 'OrderIndex',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      id: 'string',
      orderIndex: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponseBodyResult extends $tea.Model {
  albumContentList?: GetAlbumDetailByIdResponseBodyResultAlbumContentList[];
  albumCoverUrl?: string;
  albumDescription?: string;
  albumId?: string;
  albumTitle?: string;
  static names(): { [key: string]: string } {
    return {
      albumContentList: 'AlbumContentList',
      albumCoverUrl: 'AlbumCoverUrl',
      albumDescription: 'AlbumDescription',
      albumId: 'AlbumId',
      albumTitle: 'AlbumTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumContentList: { 'type': 'array', 'itemType': GetAlbumDetailByIdResponseBodyResultAlbumContentList },
      albumCoverUrl: 'string',
      albumDescription: 'string',
      albumId: 'string',
      albumTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoResponseBodyResult extends $tea.Model {
  aligenieNickname?: string;
  avatar?: string;
  deletable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aligenieNickname: 'AligenieNickname',
      avatar: 'Avatar',
      deletable: 'Deletable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligenieNickname: 'string',
      avatar: 'string',
      deletable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceRequestChannelInfo extends $tea.Model {
  channel?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentResponseBodyResultAuthors extends $tea.Model {
  authorTypes?: string[];
  gender?: string;
  id?: number;
  online?: boolean;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      gender: 'string',
      id: 'number',
      online: 'boolean',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentResponseBodyResult extends $tea.Model {
  albumId?: string;
  alias?: string[];
  audition?: boolean;
  authors?: GetContentResponseBodyResultAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: GetContentResponseBodyResultCover;
  description?: string;
  duration?: number;
  hotScore?: number;
  id?: number;
  itemType?: string;
  lyric?: string;
  rawId?: string;
  source?: string;
  styles?: string[];
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      duration: 'Duration',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      lyric: 'Lyric',
      rawId: 'RawId',
      source: 'Source',
      styles: 'Styles',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': GetContentResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: GetContentResponseBodyResultCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      lyric: 'string',
      rawId: 'string',
      source: 'string',
      styles: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingItemResponseBodyResult extends $tea.Model {
  albumName?: string;
  albumRawId?: string;
  audioLength?: number;
  copyright?: number;
  cover?: GetCurrentPlayingItemResponseBodyResultCover;
  defaultPlayOrder?: number;
  itemUrl?: string;
  liked?: string;
  lyricUrl?: string;
  playMode?: string;
  pos?: number;
  progress?: number;
  rawId?: string;
  singer?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: GetCurrentPlayingItemResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'string',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListRequestOpenQueryPlayListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentPlayingListResponseBodyResult extends $tea.Model {
  albumName?: string;
  albumRawId?: string;
  audioLength?: number;
  copyright?: number;
  cover?: GetCurrentPlayingListResponseBodyResultCover;
  defaultPlayOrder?: number;
  itemUrl?: string;
  liked?: boolean;
  lyricUrl?: string;
  playMode?: string;
  pos?: number;
  progress?: number;
  rawId?: string;
  singer?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: GetCurrentPlayingListResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'boolean',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoResponseBodyResult extends $tea.Model {
  firmwareVersion?: string;
  mac?: string;
  name?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      name: 'Name',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      mac: 'string',
      name: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds extends $tea.Model {
  deviceUnionId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceUnionId: 'DeviceUnionId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceUnionId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBodyResult extends $tea.Model {
  deviceOpenId?: string;
  deviceUnionIds?: GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResultPlayer extends $tea.Model {
  audioAlbum?: string;
  audioAnchor?: string;
  audioExt?: string;
  audioId?: string;
  audioLength?: string;
  audioName?: string;
  audioSource?: string;
  audioUrl?: string;
  format?: string;
  progress?: string;
  source?: string;
  status?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      audioAlbum: 'AudioAlbum',
      audioAnchor: 'AudioAnchor',
      audioExt: 'AudioExt',
      audioId: 'AudioId',
      audioLength: 'AudioLength',
      audioName: 'AudioName',
      audioSource: 'AudioSource',
      audioUrl: 'AudioUrl',
      format: 'Format',
      progress: 'Progress',
      source: 'Source',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAlbum: 'string',
      audioAnchor: 'string',
      audioExt: 'string',
      audioId: 'string',
      audioLength: 'string',
      audioName: 'string',
      audioSource: 'string',
      audioUrl: 'string',
      format: 'string',
      progress: 'string',
      source: 'string',
      status: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResultPower extends $tea.Model {
  quantity?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      quantity: 'Quantity',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quantity: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResultSpeaker extends $tea.Model {
  muted?: boolean;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      muted: 'Muted',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      muted: 'boolean',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResult extends $tea.Model {
  player?: GetDeviceStatusDetailResponseBodyResultPlayer;
  power?: GetDeviceStatusDetailResponseBodyResultPower;
  speaker?: GetDeviceStatusDetailResponseBodyResultSpeaker;
  static names(): { [key: string]: string } {
    return {
      player: 'Player',
      power: 'Power',
      speaker: 'Speaker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      player: GetDeviceStatusDetailResponseBodyResultPlayer,
      power: GetDeviceStatusDetailResponseBodyResultPower,
      speaker: GetDeviceStatusDetailResponseBodyResultSpeaker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoResponseBodyResult extends $tea.Model {
  online?: number;
  static names(): { [key: string]: string } {
    return {
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      online: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagResponseBodyResult extends $tea.Model {
  deviceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskRequestPayload extends $tea.Model {
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

export class GetScheduleTaskRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponseBodyResultActionTopicList extends $tea.Model {
  customAction?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customAction: 'CustomAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAction: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponseBodyResult extends $tea.Model {
  actionTopicList?: GetScheduleTaskResponseBodyResultActionTopicList[];
  cron?: string;
  scheduleEndTime?: string;
  scheduleId?: number;
  scheduleStartTime?: string;
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      actionTopicList: 'ActionTopicList',
      cron: 'Cron',
      scheduleEndTime: 'ScheduleEndTime',
      scheduleId: 'ScheduleId',
      scheduleStartTime: 'ScheduleStartTime',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTopicList: { 'type': 'array', 'itemType': GetScheduleTaskResponseBodyResultActionTopicList },
      cron: 'string',
      scheduleEndTime: 'string',
      scheduleId: 'number',
      scheduleStartTime: 'string',
      scheduleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnreadMessageCountRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponseBodyResultUserUnionIds extends $tea.Model {
  organizationId?: string;
  userUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      userUnionId: 'UserUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      userUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponseBodyResult extends $tea.Model {
  userOpenId?: string;
  userUnionIds?: GetUserByDeviceIdResponseBodyResultUserUnionIds[];
  static names(): { [key: string]: string } {
    return {
      userOpenId: 'UserOpenId',
      userUnionIds: 'UserUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userOpenId: 'string',
      userUnionIds: { 'type': 'array', 'itemType': GetUserByDeviceIdResponseBodyResultUserUnionIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherRequestPayload extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResultCurrentMeteorologyTemperature extends $tea.Model {
  current?: string;
  currentDesc?: string;
  high?: string;
  highDesc?: string;
  logical?: string;
  low?: string;
  lowDesc?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      currentDesc: 'CurrentDesc',
      high: 'High',
      highDesc: 'HighDesc',
      logical: 'Logical',
      low: 'Low',
      lowDesc: 'LowDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      currentDesc: 'string',
      high: 'string',
      highDesc: 'string',
      logical: 'string',
      low: 'string',
      lowDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResultCurrentMeteorologyWeather extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResultCurrentMeteorology extends $tea.Model {
  temperature?: GetWeatherResponseBodyResultCurrentMeteorologyTemperature;
  weather?: GetWeatherResponseBodyResultCurrentMeteorologyWeather;
  static names(): { [key: string]: string } {
    return {
      temperature: 'Temperature',
      weather: 'Weather',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: GetWeatherResponseBodyResultCurrentMeteorologyTemperature,
      weather: GetWeatherResponseBodyResultCurrentMeteorologyWeather,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResult extends $tea.Model {
  currentMeteorology?: GetWeatherResponseBodyResultCurrentMeteorology;
  static names(): { [key: string]: string } {
    return {
      currentMeteorology: 'CurrentMeteorology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMeteorology: GetWeatherResponseBodyResultCurrentMeteorology,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListRequestOpenIndexControlRequest extends $tea.Model {
  extendInfo?: { [key: string]: any };
  index?: number;
  needContentContinued?: boolean;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needContentContinued: 'NeedContentContinued',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needContentContinued: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexControlPlayingListResponseBodyResult extends $tea.Model {
  albumName?: string;
  albumRawId?: string;
  audioLength?: number;
  copyright?: number;
  cover?: IndexControlPlayingListResponseBodyResultCover;
  defaultPlayOrder?: number;
  itemUrl?: string;
  liked?: boolean;
  lyricUrl?: string;
  playMode?: string;
  pos?: number;
  progress?: number;
  rawId?: string;
  singer?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: IndexControlPlayingListResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'boolean',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsRequestPayload extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModelMusicInfo extends $tea.Model {
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModelScheduleInfoOnce extends $tea.Model {
  day?: number;
  hour?: number;
  minute?: number;
  month?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay extends $tea.Model {
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModelScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModelScheduleInfo extends $tea.Model {
  once?: ListAlarmsResponseBodyResultModelScheduleInfoOnce;
  statutoryWorkingDay?: ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay;
  type?: string;
  weekly?: ListAlarmsResponseBodyResultModelScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: ListAlarmsResponseBodyResultModelScheduleInfoOnce,
      statutoryWorkingDay: ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: ListAlarmsResponseBodyResultModelScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResultModel extends $tea.Model {
  alarmId?: number;
  musicInfo?: ListAlarmsResponseBodyResultModelMusicInfo;
  scheduleInfo?: ListAlarmsResponseBodyResultModelScheduleInfo;
  scheduleTypeDesc?: string;
  status?: number;
  triggerDateDesc?: string;
  triggerTimeDesc?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      scheduleTypeDesc: 'ScheduleTypeDesc',
      status: 'Status',
      triggerDateDesc: 'TriggerDateDesc',
      triggerTimeDesc: 'TriggerTimeDesc',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      musicInfo: ListAlarmsResponseBodyResultModelMusicInfo,
      scheduleInfo: ListAlarmsResponseBodyResultModelScheduleInfo,
      scheduleTypeDesc: 'string',
      status: 'number',
      triggerDateDesc: 'string',
      triggerTimeDesc: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBodyResult extends $tea.Model {
  currentPage?: number;
  model?: ListAlarmsResponseBodyResultModel[];
  pageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      model: 'Model',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      model: { 'type': 'array', 'itemType': ListAlarmsResponseBodyResultModel },
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResultOpenDataItemListAuthors extends $tea.Model {
  authorTypes?: string[];
  gender?: string;
  id?: number;
  online?: boolean;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      gender: 'string',
      id: 'number',
      online: 'boolean',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResultOpenDataItemListCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResultOpenDataItemList extends $tea.Model {
  alias?: string[];
  audition?: boolean;
  authors?: ListAlbumDetailResponseBodyResultOpenDataItemListAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: ListAlbumDetailResponseBodyResultOpenDataItemListCover;
  description?: string;
  duration?: number;
  hotScore?: number;
  id?: number;
  itemType?: string;
  orderIndex?: number;
  rawId?: string;
  source?: string;
  styles?: string[];
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      duration: 'Duration',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      orderIndex: 'OrderIndex',
      rawId: 'RawId',
      source: 'Source',
      styles: 'Styles',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListAlbumDetailResponseBodyResultOpenDataItemListAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: ListAlbumDetailResponseBodyResultOpenDataItemListCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      orderIndex: 'number',
      rawId: 'string',
      source: 'string',
      styles: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResult extends $tea.Model {
  currentPageNum?: number;
  openDataItemList?: ListAlbumDetailResponseBodyResultOpenDataItemList[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      openDataItemList: 'OpenDataItemList',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      openDataItemList: { 'type': 'array', 'itemType': ListAlbumDetailResponseBodyResultOpenDataItemList },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedResponseBodyResult extends $tea.Model {
  albumId?: string;
  isAdded?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      isAdded: 'IsAdded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      isAdded: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentRequestRequest extends $tea.Model {
  cateId?: number;
  isAlbum?: boolean;
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      isAlbum: 'IsAlbum',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      isAlbum: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemListAuthorsCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemListAuthors extends $tea.Model {
  authorTypes?: string[];
  cover?: ListCateContentResponseBodyResultOpenDataItemListAuthorsCover;
  description?: string;
  gender?: string;
  id?: number;
  online?: boolean;
  rawId?: string;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      cover: 'Cover',
      description: 'Description',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      cover: ListCateContentResponseBodyResultOpenDataItemListAuthorsCover,
      description: 'string',
      gender: 'string',
      id: 'number',
      online: 'boolean',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemListCover extends $tea.Model {
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  canResize?: boolean;
  static names(): { [key: string]: string } {
    return {
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
      canResize: 'canResize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
      canResize: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemList extends $tea.Model {
  alias?: string[];
  audition?: boolean;
  authors?: ListCateContentResponseBodyResultOpenDataItemListAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: string;
  cover?: ListCateContentResponseBodyResultOpenDataItemListCover;
  description?: string;
  hotScore?: number;
  itemType?: string;
  rawId?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      hotScore: 'HotScore',
      itemType: 'ItemType',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListCateContentResponseBodyResultOpenDataItemListAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'string',
      cover: ListCateContentResponseBodyResultOpenDataItemListCover,
      description: 'string',
      hotScore: 'number',
      itemType: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResult extends $tea.Model {
  currentPageNum?: number;
  openDataItemList?: ListCateContentResponseBodyResultOpenDataItemList[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      openDataItemList: 'OpenDataItemList',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      openDataItemList: { 'type': 'array', 'itemType': ListCateContentResponseBodyResultOpenDataItemList },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateInfoResponseBodyResult extends $tea.Model {
  cateId?: number;
  cateName?: string;
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      parentCateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateFirstFloorResponseBodyResult extends $tea.Model {
  cateId?: number;
  cateName?: string;
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      parentCateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorResponseBodyResult extends $tea.Model {
  cateId?: number;
  cateName?: string;
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      parentCateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoRequestDeviceInfos extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  idType?: string;
  ids?: string[];
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      idType: 'IdType',
      ids: 'Ids',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      idType: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdResponseBodyResultDeviceUnionIds extends $tea.Model {
  deviceUnionId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceUnionId: 'DeviceUnionId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceUnionId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdResponseBodyResult extends $tea.Model {
  deviceOpenId?: string;
  deviceUnionIds?: ListDeviceByUserIdResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ListDeviceByUserIdResponseBodyResultDeviceUnionIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelRequestChannelInfo extends $tea.Model {
  channel?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds extends $tea.Model {
  deviceUnionId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceUnionId: 'DeviceUnionId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceUnionId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceByUserIdAndChanelResponseBodyResult extends $tea.Model {
  deviceOpenId?: string;
  deviceUnionIds?: ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicRequestPayload extends $tea.Model {
  currentPage?: number;
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponseBodyResultModel extends $tea.Model {
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponseBodyResult extends $tea.Model {
  currentPage?: number;
  model?: ListMusicResponseBodyResultModel[];
  pageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      model: 'Model',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      model: { 'type': 'array', 'itemType': ListMusicResponseBodyResultModel },
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryRequestRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBodyResultAuthorsCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBodyResultAuthors extends $tea.Model {
  authorTypes?: string[];
  cover?: ListPlayHistoryResponseBodyResultAuthorsCover;
  description?: string;
  gender?: string;
  id?: number;
  online?: boolean;
  rawId?: string;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      cover: 'Cover',
      description: 'Description',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      cover: ListPlayHistoryResponseBodyResultAuthorsCover,
      description: 'string',
      gender: 'string',
      id: 'number',
      online: 'boolean',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBodyResult extends $tea.Model {
  alias?: string[];
  audition?: boolean;
  authors?: ListPlayHistoryResponseBodyResultAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: ListPlayHistoryResponseBodyResultCover;
  description?: string;
  hotScore?: number;
  id?: number;
  itemType?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListPlayHistoryResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: ListPlayHistoryResponseBodyResultCover,
      description: 'string',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequestRequest extends $tea.Model {
  count?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponseBodyResultAuthorsCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponseBodyResultAuthors extends $tea.Model {
  authorTypes?: string[];
  cover?: ListRecommendContentResponseBodyResultAuthorsCover;
  description?: string;
  gender?: string;
  id?: number;
  online?: boolean;
  rawId?: string;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      cover: 'Cover',
      description: 'Description',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      cover: ListRecommendContentResponseBodyResultAuthorsCover,
      description: 'string',
      gender: 'string',
      id: 'number',
      online: 'boolean',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentResponseBodyResult extends $tea.Model {
  alias?: string[];
  audition?: boolean;
  authors?: ListRecommendContentResponseBodyResultAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: ListRecommendContentResponseBodyResultCover;
  description?: string;
  hotScore?: number;
  id?: number;
  itemType?: string;
  rawId?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListRecommendContentResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: ListRecommendContentResponseBodyResultCover,
      description: 'string',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubRequestPage extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBodyResultDataListScheduleInfo extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBodyResultDataList extends $tea.Model {
  albumId?: string;
  coverUrl?: string;
  dailyStudyCnt?: number;
  deviceId?: string;
  id?: number;
  playMode?: string;
  scheduleInfo?: ListSubResponseBodyResultDataListScheduleInfo;
  title?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      coverUrl: 'CoverUrl',
      dailyStudyCnt: 'DailyStudyCnt',
      deviceId: 'DeviceId',
      id: 'Id',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      coverUrl: 'string',
      dailyStudyCnt: 'number',
      deviceId: 'string',
      id: 'number',
      playMode: 'string',
      scheduleInfo: ListSubResponseBodyResultDataListScheduleInfo,
      title: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBodyResult extends $tea.Model {
  dataList?: ListSubResponseBodyResultDataList[];
  hasNext?: boolean;
  totalCount?: number;
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      hasNext: 'HasNext',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSubResponseBodyResultDataList },
      hasNext: 'boolean',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestQuerySubscriptionAlbumRequestPage extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestQuerySubscriptionAlbumRequest extends $tea.Model {
  albumId?: string;
  categoryId?: number;
  page?: ListSubAlbumRequestQuerySubscriptionAlbumRequestPage;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      categoryId: 'CategoryId',
      page: 'Page',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      categoryId: 'number',
      page: ListSubAlbumRequestQuerySubscriptionAlbumRequestPage,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumResponseBodyResultDataListScheduleInfo extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  scheduleId?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
      scheduleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumResponseBodyResultDataList extends $tea.Model {
  albumId?: string;
  categoryId?: number;
  coverUrl?: string;
  id?: number;
  isAdded?: boolean;
  scheduleInfo?: ListSubAlbumResponseBodyResultDataListScheduleInfo;
  sequence?: number;
  title?: string;
  totalEpisode?: number;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      categoryId: 'CategoryId',
      coverUrl: 'CoverUrl',
      id: 'Id',
      isAdded: 'IsAdded',
      scheduleInfo: 'ScheduleInfo',
      sequence: 'Sequence',
      title: 'Title',
      totalEpisode: 'TotalEpisode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      categoryId: 'number',
      coverUrl: 'string',
      id: 'number',
      isAdded: 'boolean',
      scheduleInfo: ListSubAlbumResponseBodyResultDataListScheduleInfo,
      sequence: 'number',
      title: 'string',
      totalEpisode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumResponseBodyResult extends $tea.Model {
  dataList?: ListSubAlbumResponseBodyResultDataList[];
  hasNext?: boolean;
  totalCount?: number;
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      hasNext: 'HasNext',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSubAlbumResponseBodyResultDataList },
      hasNext: 'boolean',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryResponseBodyResult extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageResponseBodyResult extends $tea.Model {
  content?: string;
  deviceName?: string;
  gmtCreate?: string;
  id?: string;
  pic?: string;
  source?: string;
  sourceUuid?: string;
  status?: number;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      deviceName: 'DeviceName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      pic: 'Pic',
      source: 'Source',
      sourceUuid: 'SourceUuid',
      status: 'Status',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      deviceName: 'string',
      gmtCreate: 'string',
      id: 'string',
      pic: 'string',
      source: 'string',
      sourceUuid: 'string',
      status: 'number',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlRequestOpenPlayAndPauseControlParam extends $tea.Model {
  openPlayAndPauseCommand?: string;
  static names(): { [key: string]: string } {
    return {
      openPlayAndPauseCommand: 'OpenPlayAndPauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openPlayAndPauseCommand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayAndPauseControlRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlRequestOpenPlayModeControlRequest extends $tea.Model {
  openPlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      openPlayMode: 'OpenPlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openPlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlResponseBodyResult extends $tea.Model {
  openPlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      openPlayMode: 'OpenPlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openPlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlRequestOpenControlPlayingListRequest extends $tea.Model {
  cmd?: string;
  extendInfo?: { [key: string]: any };
  isFromDevice?: boolean;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      extendInfo: 'ExtendInfo',
      isFromDevice: 'IsFromDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isFromDevice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviousAndNextControlResponseBodyResult extends $tea.Model {
  albumName?: string;
  albumRawId?: string;
  audioLength?: number;
  copyright?: number;
  cover?: PreviousAndNextControlResponseBodyResultCover;
  defaultPlayOrder?: number;
  itemUrl?: string;
  liked?: boolean;
  lyricUrl?: string;
  playMode?: string;
  pos?: number;
  progress?: number;
  rawId?: string;
  singer?: string;
  source?: string;
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: PreviousAndNextControlResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'boolean',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlRequestOpenProgressControlRequest extends $tea.Model {
  extendInfo?: { [key: string]: any };
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProgressControlRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeRequestPayload extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeResponseBodyResult extends $tea.Model {
  musicType?: number;
  musicTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicType: 'number',
      musicTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList extends $tea.Model {
  deviceName?: string;
  online?: boolean;
  openDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      online: 'Online',
      openDeviceId: 'OpenDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      online: 'boolean',
      openDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList extends $tea.Model {
  authorizedDeviceList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList[];
  openUserId?: string;
  userNickname?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedDeviceList: 'AuthorizedDeviceList',
      openUserId: 'OpenUserId',
      userNickname: 'UserNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedDeviceList: { 'type': 'array', 'itemType': QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList },
      openUserId: 'string',
      userNickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBodyResult extends $tea.Model {
  aligenieUserInfoList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList[];
  encodeKey?: string;
  encodeType?: string;
  sp?: string;
  static names(): { [key: string]: string } {
    return {
      aligenieUserInfoList: 'AligenieUserInfoList',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligenieUserInfoList: { 'type': 'array', 'itemType': QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList },
      encodeKey: 'string',
      encodeType: 'string',
      sp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMessageRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindRequestBindReq extends $tea.Model {
  clientId?: string;
  code?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      code: 'Code',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      code: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindResponseBodyResult extends $tea.Model {
  bizGroup?: string;
  bizType?: string;
  deviceOpenId?: string;
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      bizGroup: 'BizGroup',
      bizType: 'BizType',
      deviceOpenId: 'DeviceOpenId',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroup: 'string',
      bizType: 'string',
      deviceOpenId: 'string',
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilterOffSetParam extends $tea.Model {
  limit?: number;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilterPageParam extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilterSortParam extends $tea.Model {
  sortKey?: string;
  sortOrder?: string;
  sortText?: string;
  static names(): { [key: string]: string } {
    return {
      sortKey: 'SortKey',
      sortOrder: 'SortOrder',
      sortText: 'SortText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortKey: 'string',
      sortOrder: 'string',
      sortText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilter extends $tea.Model {
  offSetParam?: ScgSearchRequestScgFilterOffSetParam;
  pageParam?: ScgSearchRequestScgFilterPageParam;
  sortParam?: ScgSearchRequestScgFilterSortParam;
  useOffSet?: boolean;
  static names(): { [key: string]: string } {
    return {
      offSetParam: 'OffSetParam',
      pageParam: 'PageParam',
      sortParam: 'SortParam',
      useOffSet: 'UseOffSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offSetParam: ScgSearchRequestScgFilterOffSetParam,
      pageParam: ScgSearchRequestScgFilterPageParam,
      sortParam: ScgSearchRequestScgFilterSortParam,
      useOffSet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchResponseBodyResultCover extends $tea.Model {
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  canResize?: boolean;
  static names(): { [key: string]: string } {
    return {
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
      canResize: 'canResize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
      canResize: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchResponseBodyResult extends $tea.Model {
  album?: boolean;
  albumRawId?: string;
  albumType?: number;
  alias?: string[];
  authorIds?: number[];
  authorNames?: string[];
  category?: string;
  contentType?: string;
  cover?: ScgSearchResponseBodyResultCover;
  isAudition?: boolean;
  isCharge?: string;
  needCharge?: boolean;
  rawId?: string;
  singers?: string;
  source?: string;
  supportAudition?: boolean;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      album: 'Album',
      albumRawId: 'AlbumRawId',
      albumType: 'AlbumType',
      alias: 'Alias',
      authorIds: 'AuthorIds',
      authorNames: 'AuthorNames',
      category: 'Category',
      contentType: 'ContentType',
      cover: 'Cover',
      isAudition: 'IsAudition',
      isCharge: 'IsCharge',
      needCharge: 'NeedCharge',
      rawId: 'RawId',
      singers: 'Singers',
      source: 'Source',
      supportAudition: 'SupportAudition',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      album: 'boolean',
      albumRawId: 'string',
      albumType: 'number',
      alias: { 'type': 'array', 'itemType': 'string' },
      authorIds: { 'type': 'array', 'itemType': 'number' },
      authorNames: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      contentType: 'string',
      cover: ScgSearchResponseBodyResultCover,
      isAudition: 'boolean',
      isCharge: 'string',
      needCharge: 'boolean',
      rawId: 'string',
      singers: 'string',
      source: 'string',
      supportAudition: 'boolean',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentRequestRequest extends $tea.Model {
  cate?: string;
  pageNum?: number;
  pageSize?: number;
  query?: string;
  queryAlbum?: boolean;
  subCate?: string;
  static names(): { [key: string]: string } {
    return {
      cate: 'Cate',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      query: 'Query',
      queryAlbum: 'QueryAlbum',
      subCate: 'SubCate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cate: 'string',
      pageNum: 'number',
      pageSize: 'number',
      query: 'string',
      queryAlbum: 'boolean',
      subCate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponseBodyResultAuthorsCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponseBodyResultAuthors extends $tea.Model {
  authorTypes?: string[];
  cover?: SearchContentResponseBodyResultAuthorsCover;
  description?: string;
  gender?: string;
  id?: number;
  online?: boolean;
  rawId?: string;
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      cover: 'Cover',
      description: 'Description',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      cover: SearchContentResponseBodyResultAuthorsCover,
      description: 'string',
      gender: 'string',
      id: 'number',
      online: 'boolean',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponseBodyResultCover extends $tea.Model {
  canResize?: boolean;
  img?: string;
  large?: string;
  mediam?: string;
  medium?: string;
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentResponseBodyResult extends $tea.Model {
  albumId?: string;
  alias?: string[];
  audition?: boolean;
  authors?: SearchContentResponseBodyResultAuthors[];
  category?: string;
  charge?: boolean;
  commCateId?: number;
  cover?: SearchContentResponseBodyResultCover;
  description?: string;
  duration?: number;
  hotScore?: number;
  id?: number;
  itemType?: string;
  lyric?: string;
  orderIndex?: string;
  source?: string;
  styles?: string[];
  title?: string;
  type?: string;
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      duration: 'Duration',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      lyric: 'Lyric',
      orderIndex: 'OrderIndex',
      source: 'Source',
      styles: 'Styles',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': SearchContentResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: SearchContentResponseBodyResultCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      lyric: 'string',
      orderIndex: 'string',
      source: 'string',
      styles: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceSettingRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestDeviceInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadMusicInfo extends $tea.Model {
  musicId?: number;
  musicName?: string;
  musicType?: number;
  musicTypeName?: string;
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoOnce extends $tea.Model {
  day?: number;
  hour?: number;
  minute?: number;
  month?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay extends $tea.Model {
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  hour?: number;
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfo extends $tea.Model {
  once?: UpdateAlarmRequestPayloadScheduleInfoOnce;
  statutoryWorkingDay?: UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay;
  type?: string;
  weekly?: UpdateAlarmRequestPayloadScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: UpdateAlarmRequestPayloadScheduleInfoOnce,
      statutoryWorkingDay: UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: UpdateAlarmRequestPayloadScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayload extends $tea.Model {
  alarmId?: number;
  musicInfo?: UpdateAlarmRequestPayloadMusicInfo;
  scheduleInfo?: UpdateAlarmRequestPayloadScheduleInfo;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      musicInfo: UpdateAlarmRequestPayloadMusicInfo,
      scheduleInfo: UpdateAlarmRequestPayloadScheduleInfo,
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestUserInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
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
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAndRemoveFavoriteContentWithOptions(tmpReq: AddAndRemoveFavoriteContentRequest, headers: AddAndRemoveFavoriteContentHeaders, runtime: $Util.RuntimeOptions): Promise<AddAndRemoveFavoriteContentResponse> {
    Util.validateModel(tmpReq);
    let request = new AddAndRemoveFavoriteContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openAddAndRemoveFavoriteContentRequest)) {
      request.openAddAndRemoveFavoriteContentRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openAddAndRemoveFavoriteContentRequest, "OpenAddAndRemoveFavoriteContentRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openAddAndRemoveFavoriteContentRequestShrink)) {
      body["OpenAddAndRemoveFavoriteContentRequest"] = request.openAddAndRemoveFavoriteContentRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddAndRemoveFavoriteContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/AddAndRemoveFavoriteContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAndRemoveFavoriteContentResponse>(await this.callApi(params, req, runtime), new AddAndRemoveFavoriteContentResponse({}));
  }

  async addAndRemoveFavoriteContent(request: AddAndRemoveFavoriteContentRequest): Promise<AddAndRemoveFavoriteContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddAndRemoveFavoriteContentHeaders({ });
    return await this.addAndRemoveFavoriteContentWithOptions(request, headers, runtime);
  }

  async addSubWithOptions(tmpReq: AddSubRequest, headers: AddSubHeaders, runtime: $Util.RuntimeOptions): Promise<AddSubResponse> {
    Util.validateModel(tmpReq);
    let request = new AddSubShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addSubscriptionInfoRequest)) {
      request.addSubscriptionInfoRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addSubscriptionInfoRequest, "AddSubscriptionInfoRequest", "json");
    }

    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addSubscriptionInfoRequestShrink)) {
      query["AddSubscriptionInfoRequest"] = request.addSubscriptionInfoRequestShrink;
    }

    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/addSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddSubResponse>(await this.callApi(params, req, runtime), new AddSubResponse({}));
  }

  async addSub(request: AddSubRequest): Promise<AddSubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddSubHeaders({ });
    return await this.addSubWithOptions(request, headers, runtime);
  }

  async authLoginWithAligenieUserInfoWithOptions(request: AuthLoginWithAligenieUserInfoRequest, headers: AuthLoginWithAligenieUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<AuthLoginWithAligenieUserInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptedAligenieUserIdentifier)) {
      body["EncryptedAligenieUserIdentifier"] = request.encryptedAligenieUserIdentifier;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthLoginWithAligenieUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithAligenieUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthLoginWithAligenieUserInfoResponse>(await this.callApi(params, req, runtime), new AuthLoginWithAligenieUserInfoResponse({}));
  }

  async authLoginWithAligenieUserInfo(request: AuthLoginWithAligenieUserInfoRequest): Promise<AuthLoginWithAligenieUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AuthLoginWithAligenieUserInfoHeaders({ });
    return await this.authLoginWithAligenieUserInfoWithOptions(request, headers, runtime);
  }

  async authLoginWithAligenieUserInfoGeneratedByPhoneNumberWithOptions(request: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest, headers: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders, runtime: $Util.RuntimeOptions): Promise<AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthLoginWithAligenieUserInfoGeneratedByPhoneNumber",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithAligenieUserInfoGeneratedByPhoneNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse>(await this.callApi(params, req, runtime), new AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse({}));
  }

  async authLoginWithAligenieUserInfoGeneratedByPhoneNumber(request: AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest): Promise<AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders({ });
    return await this.authLoginWithAligenieUserInfoGeneratedByPhoneNumberWithOptions(request, headers, runtime);
  }

  async authLoginWithTaobaoUserInfoWithOptions(request: AuthLoginWithTaobaoUserInfoRequest, headers: AuthLoginWithTaobaoUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<AuthLoginWithTaobaoUserInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptedTaobaoUserIdentifier)) {
      body["EncryptedTaobaoUserIdentifier"] = request.encryptedTaobaoUserIdentifier;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthLoginWithTaobaoUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithTaobaoUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthLoginWithTaobaoUserInfoResponse>(await this.callApi(params, req, runtime), new AuthLoginWithTaobaoUserInfoResponse({}));
  }

  async authLoginWithTaobaoUserInfo(request: AuthLoginWithTaobaoUserInfoRequest): Promise<AuthLoginWithTaobaoUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AuthLoginWithTaobaoUserInfoHeaders({ });
    return await this.authLoginWithTaobaoUserInfoWithOptions(request, headers, runtime);
  }

  async authLoginWithThirdUserInfoWithOptions(tmpReq: AuthLoginWithThirdUserInfoRequest, headers: AuthLoginWithThirdUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<AuthLoginWithThirdUserInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new AuthLoginWithThirdUserInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    if (!Util.isUnset(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.thirdUserIdentifier)) {
      body["ThirdUserIdentifier"] = request.thirdUserIdentifier;
    }

    if (!Util.isUnset(request.thirdUserType)) {
      body["ThirdUserType"] = request.thirdUserType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthLoginWithThirdUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithThirdUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthLoginWithThirdUserInfoResponse>(await this.callApi(params, req, runtime), new AuthLoginWithThirdUserInfoResponse({}));
  }

  async authLoginWithThirdUserInfo(request: AuthLoginWithThirdUserInfoRequest): Promise<AuthLoginWithThirdUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AuthLoginWithThirdUserInfoHeaders({ });
    return await this.authLoginWithThirdUserInfoWithOptions(request, headers, runtime);
  }

  async checkAndDoVoipCallForHotelWithOptions(tmpReq: CheckAndDoVoipCallForHotelRequest, headers: CheckAndDoVoipCallForHotelHeaders, runtime: $Util.RuntimeOptions): Promise<CheckAndDoVoipCallForHotelResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckAndDoVoipCallForHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizData)) {
      body["BizData"] = request.bizData;
    }

    if (!Util.isUnset(request.calleeNick)) {
      body["CalleeNick"] = request.calleeNick;
    }

    if (!Util.isUnset(request.calleePhoneNum)) {
      body["CalleePhoneNum"] = request.calleePhoneNum;
    }

    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckAndDoVoipCallForHotel",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/checkAndDoVoipCallForHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAndDoVoipCallForHotelResponse>(await this.callApi(params, req, runtime), new CheckAndDoVoipCallForHotelResponse({}));
  }

  async checkAndDoVoipCallForHotel(request: CheckAndDoVoipCallForHotelRequest): Promise<CheckAndDoVoipCallForHotelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CheckAndDoVoipCallForHotelHeaders({ });
    return await this.checkAndDoVoipCallForHotelWithOptions(request, headers, runtime);
  }

  async checkAuthCodeBindForExtWithOptions(tmpReq: CheckAuthCodeBindForExtRequest, headers: CheckAuthCodeBindForExtHeaders, runtime: $Util.RuntimeOptions): Promise<CheckAuthCodeBindForExtResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckAuthCodeBindForExtShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAuthCodeBindForExt",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/checkAuthCodeBindForExt`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckAuthCodeBindForExtResponse>(await this.callApi(params, req, runtime), new CheckAuthCodeBindForExtResponse({}));
  }

  async checkAuthCodeBindForExt(request: CheckAuthCodeBindForExtRequest): Promise<CheckAuthCodeBindForExtResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CheckAuthCodeBindForExtHeaders({ });
    return await this.checkAuthCodeBindForExtWithOptions(request, headers, runtime);
  }

  async cloudPlayerWithOptions(tmpReq: CloudPlayerRequest, headers: CloudPlayerHeaders, runtime: $Util.RuntimeOptions): Promise<CloudPlayerResponse> {
    Util.validateModel(tmpReq);
    let request = new CloudPlayerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.songIdList)) {
      request.songIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.songIdList, "SongIdList", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.curPlayIndex)) {
      query["CurPlayIndex"] = request.curPlayIndex;
    }

    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.playMode)) {
      query["PlayMode"] = request.playMode;
    }

    if (!Util.isUnset(request.songId)) {
      query["SongId"] = request.songId;
    }

    if (!Util.isUnset(request.songIdListShrink)) {
      query["SongIdList"] = request.songIdListShrink;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloudPlayer",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/cloud/player`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloudPlayerResponse>(await this.callApi(params, req, runtime), new CloudPlayerResponse({}));
  }

  async cloudPlayer(request: CloudPlayerRequest): Promise<CloudPlayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CloudPlayerHeaders({ });
    return await this.cloudPlayerWithOptions(request, headers, runtime);
  }

  async createAlarmWithOptions(tmpReq: CreateAlarmRequest, headers: CreateAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/createAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlarmResponse>(await this.callApi(params, req, runtime), new CreateAlarmResponse({}));
  }

  async createAlarm(request: CreateAlarmRequest): Promise<CreateAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAlarmHeaders({ });
    return await this.createAlarmWithOptions(request, headers, runtime);
  }

  async createPlayingListWithOptions(tmpReq: CreatePlayingListRequest, headers: CreatePlayingListHeaders, runtime: $Util.RuntimeOptions): Promise<CreatePlayingListResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openCreatePlayingListRequest)) {
      request.openCreatePlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openCreatePlayingListRequest, "OpenCreatePlayingListRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openCreatePlayingListRequestShrink)) {
      body["OpenCreatePlayingListRequest"] = request.openCreatePlayingListRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/CreatePlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePlayingListResponse>(await this.callApi(params, req, runtime), new CreatePlayingListResponse({}));
  }

  async createPlayingList(request: CreatePlayingListRequest): Promise<CreatePlayingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreatePlayingListHeaders({ });
    return await this.createPlayingListWithOptions(request, headers, runtime);
  }

  async createScheduleTaskWithOptions(tmpReq: CreateScheduleTaskRequest, headers: CreateScheduleTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateScheduleTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/CreateScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduleTaskResponse>(await this.callApi(params, req, runtime), new CreateScheduleTaskResponse({}));
  }

  async createScheduleTask(request: CreateScheduleTaskRequest): Promise<CreateScheduleTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateScheduleTaskHeaders({ });
    return await this.createScheduleTaskWithOptions(request, headers, runtime);
  }

  async deleteAlarmsWithOptions(tmpReq: DeleteAlarmsRequest, headers: DeleteAlarmsHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAlarmsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAlarmsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlarms",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/deleteAlarms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlarmsResponse>(await this.callApi(params, req, runtime), new DeleteAlarmsResponse({}));
  }

  async deleteAlarms(request: DeleteAlarmsRequest): Promise<DeleteAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAlarmsHeaders({ });
    return await this.deleteAlarmsWithOptions(request, headers, runtime);
  }

  async deleteScheduleTaskWithOptions(tmpReq: DeleteScheduleTaskRequest, headers: DeleteScheduleTaskHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/DeleteScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduleTaskResponse>(await this.callApi(params, req, runtime), new DeleteScheduleTaskResponse({}));
  }

  async deleteScheduleTask(request: DeleteScheduleTaskRequest): Promise<DeleteScheduleTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteScheduleTaskHeaders({ });
    return await this.deleteScheduleTaskWithOptions(request, headers, runtime);
  }

  async deleteSubWithOptions(request: DeleteSubRequest, headers: DeleteSubHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteSubResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subId)) {
      query["SubId"] = request.subId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/deleteSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubResponse>(await this.callApi(params, req, runtime), new DeleteSubResponse({}));
  }

  async deleteSub(request: DeleteSubRequest): Promise<DeleteSubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteSubHeaders({ });
    return await this.deleteSubWithOptions(request, headers, runtime);
  }

  async deviceControlWithOptions(tmpReq: DeviceControlRequest, headers: DeviceControlHeaders, runtime: $Util.RuntimeOptions): Promise<DeviceControlResponse> {
    Util.validateModel(tmpReq);
    let request = new DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.controlRequest)) {
      request.controlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.controlRequest, "ControlRequest", "json");
    }

    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.controlRequestShrink)) {
      body["ControlRequest"] = request.controlRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeviceControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/control`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeviceControlResponse>(await this.callApi(params, req, runtime), new DeviceControlResponse({}));
  }

  async deviceControl(request: DeviceControlRequest): Promise<DeviceControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  async ecologyOpennessAuthenticateWithOptions(request: EcologyOpennessAuthenticateRequest, headers: EcologyOpennessAuthenticateHeaders, runtime: $Util.RuntimeOptions): Promise<EcologyOpennessAuthenticateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeKey)) {
      body["EncodeKey"] = request.encodeKey;
    }

    if (!Util.isUnset(request.encodeType)) {
      body["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.loginStateAccessToken)) {
      body["LoginStateAccessToken"] = request.loginStateAccessToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EcologyOpennessAuthenticate",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ecologyOpennessAuthenticate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EcologyOpennessAuthenticateResponse>(await this.callApi(params, req, runtime), new EcologyOpennessAuthenticateResponse({}));
  }

  async ecologyOpennessAuthenticate(request: EcologyOpennessAuthenticateRequest): Promise<EcologyOpennessAuthenticateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EcologyOpennessAuthenticateHeaders({ });
    return await this.ecologyOpennessAuthenticateWithOptions(request, headers, runtime);
  }

  async ecologyOpennessSendVerificationCodeWithOptions(request: EcologyOpennessSendVerificationCodeRequest, headers: EcologyOpennessSendVerificationCodeHeaders, runtime: $Util.RuntimeOptions): Promise<EcologyOpennessSendVerificationCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EcologyOpennessSendVerificationCode",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ecologyOpennessSendVerificationCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EcologyOpennessSendVerificationCodeResponse>(await this.callApi(params, req, runtime), new EcologyOpennessSendVerificationCodeResponse({}));
  }

  async ecologyOpennessSendVerificationCode(request: EcologyOpennessSendVerificationCodeRequest): Promise<EcologyOpennessSendVerificationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EcologyOpennessSendVerificationCodeHeaders({ });
    return await this.ecologyOpennessSendVerificationCodeWithOptions(request, headers, runtime);
  }

  async findUserlistToAuthLoginWithPhoneNumberWithOptions(request: FindUserlistToAuthLoginWithPhoneNumberRequest, headers: FindUserlistToAuthLoginWithPhoneNumberHeaders, runtime: $Util.RuntimeOptions): Promise<FindUserlistToAuthLoginWithPhoneNumberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FindUserlistToAuthLoginWithPhoneNumber",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/findUserlistToAuthLoginWithPhoneNumber`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FindUserlistToAuthLoginWithPhoneNumberResponse>(await this.callApi(params, req, runtime), new FindUserlistToAuthLoginWithPhoneNumberResponse({}));
  }

  async findUserlistToAuthLoginWithPhoneNumber(request: FindUserlistToAuthLoginWithPhoneNumberRequest): Promise<FindUserlistToAuthLoginWithPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FindUserlistToAuthLoginWithPhoneNumberHeaders({ });
    return await this.findUserlistToAuthLoginWithPhoneNumberWithOptions(request, headers, runtime);
  }

  async getAlarmWithOptions(tmpReq: GetAlarmRequest, headers: GetAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<GetAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlarmResponse>(await this.callApi(params, req, runtime), new GetAlarmResponse({}));
  }

  async getAlarm(request: GetAlarmRequest): Promise<GetAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAlarmHeaders({ });
    return await this.getAlarmWithOptions(request, headers, runtime);
  }

  async getAlbumWithOptions(request: GetAlbumRequest, headers: GetAlbumHeaders, runtime: $Util.RuntimeOptions): Promise<GetAlbumResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlbum",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetAlbum`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlbumResponse>(await this.callApi(params, req, runtime), new GetAlbumResponse({}));
  }

  async getAlbum(request: GetAlbumRequest): Promise<GetAlbumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAlbumHeaders({ });
    return await this.getAlbumWithOptions(request, headers, runtime);
  }

  async getAlbumDetailByIdWithOptions(request: GetAlbumDetailByIdRequest, headers: GetAlbumDetailByIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetAlbumDetailByIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.albumId)) {
      query["AlbumId"] = request.albumId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlbumDetailById",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAlbumDetailById`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlbumDetailByIdResponse>(await this.callApi(params, req, runtime), new GetAlbumDetailByIdResponse({}));
  }

  async getAlbumDetailById(request: GetAlbumDetailByIdRequest): Promise<GetAlbumDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAlbumDetailByIdHeaders({ });
    return await this.getAlbumDetailByIdWithOptions(request, headers, runtime);
  }

  async getAligenieUserInfoWithOptions(request: GetAligenieUserInfoRequest, headers: GetAligenieUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetAligenieUserInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loginStateAccessToken)) {
      query["LoginStateAccessToken"] = request.loginStateAccessToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAligenieUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAligenieUserInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAligenieUserInfoResponse>(await this.callApi(params, req, runtime), new GetAligenieUserInfoResponse({}));
  }

  async getAligenieUserInfo(request: GetAligenieUserInfoRequest): Promise<GetAligenieUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAligenieUserInfoHeaders({ });
    return await this.getAligenieUserInfoWithOptions(request, headers, runtime);
  }

  async getCodeEnhanceWithOptions(tmpReq: GetCodeEnhanceRequest, headers: GetCodeEnhanceHeaders, runtime: $Util.RuntimeOptions): Promise<GetCodeEnhanceResponse> {
    Util.validateModel(tmpReq);
    let request = new GetCodeEnhanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.channelInfo)) {
      request.channelInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelInfo, "ChannelInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelInfoShrink)) {
      query["ChannelInfo"] = request.channelInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCodeEnhance",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getCodeEnhance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCodeEnhanceResponse>(await this.callApi(params, req, runtime), new GetCodeEnhanceResponse({}));
  }

  async getCodeEnhance(request: GetCodeEnhanceRequest): Promise<GetCodeEnhanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCodeEnhanceHeaders({ });
    return await this.getCodeEnhanceWithOptions(request, headers, runtime);
  }

  async getContentWithOptions(request: GetContentRequest, headers: GetContentHeaders, runtime: $Util.RuntimeOptions): Promise<GetContentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetContentResponse>(await this.callApi(params, req, runtime), new GetContentResponse({}));
  }

  async getContent(request: GetContentRequest): Promise<GetContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetContentHeaders({ });
    return await this.getContentWithOptions(request, headers, runtime);
  }

  async getCurrentPlayingItemWithOptions(tmpReq: GetCurrentPlayingItemRequest, headers: GetCurrentPlayingItemHeaders, runtime: $Util.RuntimeOptions): Promise<GetCurrentPlayingItemResponse> {
    Util.validateModel(tmpReq);
    let request = new GetCurrentPlayingItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCurrentPlayingItem",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetCurrentPlayingItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCurrentPlayingItemResponse>(await this.callApi(params, req, runtime), new GetCurrentPlayingItemResponse({}));
  }

  async getCurrentPlayingItem(request: GetCurrentPlayingItemRequest): Promise<GetCurrentPlayingItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCurrentPlayingItemHeaders({ });
    return await this.getCurrentPlayingItemWithOptions(request, headers, runtime);
  }

  async getCurrentPlayingListWithOptions(tmpReq: GetCurrentPlayingListRequest, headers: GetCurrentPlayingListHeaders, runtime: $Util.RuntimeOptions): Promise<GetCurrentPlayingListResponse> {
    Util.validateModel(tmpReq);
    let request = new GetCurrentPlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openQueryPlayListRequest)) {
      request.openQueryPlayListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openQueryPlayListRequest, "OpenQueryPlayListRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openQueryPlayListRequestShrink)) {
      body["OpenQueryPlayListRequest"] = request.openQueryPlayListRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCurrentPlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetCurrentPlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCurrentPlayingListResponse>(await this.callApi(params, req, runtime), new GetCurrentPlayingListResponse({}));
  }

  async getCurrentPlayingList(request: GetCurrentPlayingListRequest): Promise<GetCurrentPlayingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCurrentPlayingListHeaders({ });
    return await this.getCurrentPlayingListWithOptions(request, headers, runtime);
  }

  async getDeviceBasicInfoWithOptions(tmpReq: GetDeviceBasicInfoRequest, headers: GetDeviceBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceBasicInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceBasicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceBasicInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceBasicInfoResponse({}));
  }

  async getDeviceBasicInfo(request: GetDeviceBasicInfoRequest): Promise<GetDeviceBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceBasicInfoHeaders({ });
    return await this.getDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  async getDeviceIdByIdentityWithOptions(request: GetDeviceIdByIdentityRequest, headers: GetDeviceIdByIdentityHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceIdByIdentityResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.identityId)) {
      query["IdentityId"] = request.identityId;
    }

    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceIdByIdentity",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceIdByIdentity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceIdByIdentityResponse>(await this.callApi(params, req, runtime), new GetDeviceIdByIdentityResponse({}));
  }

  async getDeviceIdByIdentity(request: GetDeviceIdByIdentityRequest): Promise<GetDeviceIdByIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceIdByIdentityHeaders({ });
    return await this.getDeviceIdByIdentityWithOptions(request, headers, runtime);
  }

  async getDeviceSettingWithOptions(tmpReq: GetDeviceSettingRequest, headers: GetDeviceSettingHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceSettingResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceSetting",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceSetting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceSettingResponse>(await this.callApi(params, req, runtime), new GetDeviceSettingResponse({}));
  }

  async getDeviceSetting(request: GetDeviceSettingRequest): Promise<GetDeviceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceSettingHeaders({ });
    return await this.getDeviceSettingWithOptions(request, headers, runtime);
  }

  async getDeviceStatusDetailWithOptions(tmpReq: GetDeviceStatusDetailRequest, headers: GetDeviceStatusDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceStatusDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceStatusDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceStatusDetail",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceStatusDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceStatusDetailResponse>(await this.callApi(params, req, runtime), new GetDeviceStatusDetailResponse({}));
  }

  async getDeviceStatusDetail(request: GetDeviceStatusDetailRequest): Promise<GetDeviceStatusDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceStatusDetailHeaders({ });
    return await this.getDeviceStatusDetailWithOptions(request, headers, runtime);
  }

  async getDeviceStatusInfoWithOptions(tmpReq: GetDeviceStatusInfoRequest, headers: GetDeviceStatusInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceStatusInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceStatusInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceStatusInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceStatusInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceStatusInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceStatusInfoResponse({}));
  }

  async getDeviceStatusInfo(request: GetDeviceStatusInfoRequest): Promise<GetDeviceStatusInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceStatusInfoHeaders({ });
    return await this.getDeviceStatusInfoWithOptions(request, headers, runtime);
  }

  async getDeviceTagWithOptions(tmpReq: GetDeviceTagRequest, headers: GetDeviceTagHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceTagResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceTag",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceTag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceTagResponse>(await this.callApi(params, req, runtime), new GetDeviceTagResponse({}));
  }

  async getDeviceTag(request: GetDeviceTagRequest): Promise<GetDeviceTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceTagHeaders({ });
    return await this.getDeviceTagWithOptions(request, headers, runtime);
  }

  async getScheduleTaskWithOptions(tmpReq: GetScheduleTaskRequest, headers: GetScheduleTaskHeaders, runtime: $Util.RuntimeOptions): Promise<GetScheduleTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new GetScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScheduleTaskResponse>(await this.callApi(params, req, runtime), new GetScheduleTaskResponse({}));
  }

  async getScheduleTask(request: GetScheduleTaskRequest): Promise<GetScheduleTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetScheduleTaskHeaders({ });
    return await this.getScheduleTaskWithOptions(request, headers, runtime);
  }

  async getUnreadMessageCountWithOptions(tmpReq: GetUnreadMessageCountRequest, headers: GetUnreadMessageCountHeaders, runtime: $Util.RuntimeOptions): Promise<GetUnreadMessageCountResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUnreadMessageCountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUnreadMessageCount",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getUnreadMessageCount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUnreadMessageCountResponse>(await this.callApi(params, req, runtime), new GetUnreadMessageCountResponse({}));
  }

  async getUnreadMessageCount(request: GetUnreadMessageCountRequest): Promise<GetUnreadMessageCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUnreadMessageCountHeaders({ });
    return await this.getUnreadMessageCountWithOptions(request, headers, runtime);
  }

  async getUserByDeviceIdWithOptions(tmpReq: GetUserByDeviceIdRequest, headers: GetUserByDeviceIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserByDeviceIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUserByDeviceIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserByDeviceId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getUserByDeviceId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserByDeviceIdResponse>(await this.callApi(params, req, runtime), new GetUserByDeviceIdResponse({}));
  }

  async getUserByDeviceId(request: GetUserByDeviceIdRequest): Promise<GetUserByDeviceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserByDeviceIdHeaders({ });
    return await this.getUserByDeviceIdWithOptions(request, headers, runtime);
  }

  async getWeatherWithOptions(tmpReq: GetWeatherRequest, headers: GetWeatherHeaders, runtime: $Util.RuntimeOptions): Promise<GetWeatherResponse> {
    Util.validateModel(tmpReq);
    let request = new GetWeatherShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeather",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetWeather`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeatherResponse>(await this.callApi(params, req, runtime), new GetWeatherResponse({}));
  }

  async getWeather(request: GetWeatherRequest): Promise<GetWeatherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetWeatherHeaders({ });
    return await this.getWeatherWithOptions(request, headers, runtime);
  }

  async indexControlPlayingListWithOptions(tmpReq: IndexControlPlayingListRequest, headers: IndexControlPlayingListHeaders, runtime: $Util.RuntimeOptions): Promise<IndexControlPlayingListResponse> {
    Util.validateModel(tmpReq);
    let request = new IndexControlPlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openIndexControlRequest)) {
      request.openIndexControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openIndexControlRequest, "OpenIndexControlRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openIndexControlRequestShrink)) {
      body["OpenIndexControlRequest"] = request.openIndexControlRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IndexControlPlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/IndexControlPlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IndexControlPlayingListResponse>(await this.callApi(params, req, runtime), new IndexControlPlayingListResponse({}));
  }

  async indexControlPlayingList(request: IndexControlPlayingListRequest): Promise<IndexControlPlayingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new IndexControlPlayingListHeaders({ });
    return await this.indexControlPlayingListWithOptions(request, headers, runtime);
  }

  async listAlarmsWithOptions(tmpReq: ListAlarmsRequest, headers: ListAlarmsHeaders, runtime: $Util.RuntimeOptions): Promise<ListAlarmsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAlarmsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarms",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmsResponse>(await this.callApi(params, req, runtime), new ListAlarmsResponse({}));
  }

  async listAlarms(request: ListAlarmsRequest): Promise<ListAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAlarmsHeaders({ });
    return await this.listAlarmsWithOptions(request, headers, runtime);
  }

  async listAlbumDetailWithOptions(request: ListAlbumDetailRequest, headers: ListAlbumDetailHeaders, runtime: $Util.RuntimeOptions): Promise<ListAlbumDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlbumDetail",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListAlbumDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlbumDetailResponse>(await this.callApi(params, req, runtime), new ListAlbumDetailResponse({}));
  }

  async listAlbumDetail(request: ListAlbumDetailRequest): Promise<ListAlbumDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAlbumDetailHeaders({ });
    return await this.listAlbumDetailWithOptions(request, headers, runtime);
  }

  async listAlbumIsAddedWithOptions(tmpReq: ListAlbumIsAddedRequest, headers: ListAlbumIsAddedHeaders, runtime: $Util.RuntimeOptions): Promise<ListAlbumIsAddedResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAlbumIsAddedShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.albumIdList)) {
      request.albumIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.albumIdList, "AlbumIdList", "json");
    }

    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.albumIdListShrink)) {
      query["AlbumIdList"] = request.albumIdListShrink;
    }

    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlbumIsAdded",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listAlbumIsAdded`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlbumIsAddedResponse>(await this.callApi(params, req, runtime), new ListAlbumIsAddedResponse({}));
  }

  async listAlbumIsAdded(request: ListAlbumIsAddedRequest): Promise<ListAlbumIsAddedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAlbumIsAddedHeaders({ });
    return await this.listAlbumIsAddedWithOptions(request, headers, runtime);
  }

  async listCateContentWithOptions(tmpReq: ListCateContentRequest, headers: ListCateContentHeaders, runtime: $Util.RuntimeOptions): Promise<ListCateContentResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCateContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCateContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCateContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCateContentResponse>(await this.callApi(params, req, runtime), new ListCateContentResponse({}));
  }

  async listCateContent(request: ListCateContentRequest): Promise<ListCateContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCateContentHeaders({ });
    return await this.listCateContentWithOptions(request, headers, runtime);
  }

  async listCateInfoWithOptions(request: ListCateInfoRequest, headers: ListCateInfoHeaders, runtime: $Util.RuntimeOptions): Promise<ListCateInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCateInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCateInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCateInfoResponse>(await this.callApi(params, req, runtime), new ListCateInfoResponse({}));
  }

  async listCateInfo(request: ListCateInfoRequest): Promise<ListCateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCateInfoHeaders({ });
    return await this.listCateInfoWithOptions(request, headers, runtime);
  }

  async listCommonCateFirstFloorWithOptions(request: ListCommonCateFirstFloorRequest, headers: ListCommonCateFirstFloorHeaders, runtime: $Util.RuntimeOptions): Promise<ListCommonCateFirstFloorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommonCateFirstFloor",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCommonCateFirstFloor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCommonCateFirstFloorResponse>(await this.callApi(params, req, runtime), new ListCommonCateFirstFloorResponse({}));
  }

  async listCommonCateFirstFloor(request: ListCommonCateFirstFloorRequest): Promise<ListCommonCateFirstFloorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCommonCateFirstFloorHeaders({ });
    return await this.listCommonCateFirstFloorWithOptions(request, headers, runtime);
  }

  async listCommonCateSecondFloorWithOptions(request: ListCommonCateSecondFloorRequest, headers: ListCommonCateSecondFloorHeaders, runtime: $Util.RuntimeOptions): Promise<ListCommonCateSecondFloorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parentCateId)) {
      query["ParentCateId"] = request.parentCateId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommonCateSecondFloor",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCommonCateSecondFloor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCommonCateSecondFloorResponse>(await this.callApi(params, req, runtime), new ListCommonCateSecondFloorResponse({}));
  }

  async listCommonCateSecondFloor(request: ListCommonCateSecondFloorRequest): Promise<ListCommonCateSecondFloorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCommonCateSecondFloorHeaders({ });
    return await this.listCommonCateSecondFloorWithOptions(request, headers, runtime);
  }

  async listDeviceBasicInfoWithOptions(tmpReq: ListDeviceBasicInfoRequest, headers: ListDeviceBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfos)) {
      request.deviceInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfos, "DeviceInfos", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfosShrink)) {
      query["DeviceInfos"] = request.deviceInfosShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceBasicInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceBasicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceBasicInfoResponse>(await this.callApi(params, req, runtime), new ListDeviceBasicInfoResponse({}));
  }

  async listDeviceBasicInfo(request: ListDeviceBasicInfoRequest): Promise<ListDeviceBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceBasicInfoHeaders({ });
    return await this.listDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  async listDeviceByUserIdWithOptions(tmpReq: ListDeviceByUserIdRequest, headers: ListDeviceByUserIdHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceByUserIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceByUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceByUserId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceByUserId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceByUserIdResponse>(await this.callApi(params, req, runtime), new ListDeviceByUserIdResponse({}));
  }

  async listDeviceByUserId(request: ListDeviceByUserIdRequest): Promise<ListDeviceByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceByUserIdHeaders({ });
    return await this.listDeviceByUserIdWithOptions(request, headers, runtime);
  }

  async listDeviceByUserIdAndChanelWithOptions(tmpReq: ListDeviceByUserIdAndChanelRequest, headers: ListDeviceByUserIdAndChanelHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceByUserIdAndChanelResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceByUserIdAndChanelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.channelInfo)) {
      request.channelInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelInfo, "ChannelInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelInfoShrink)) {
      query["ChannelInfo"] = request.channelInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceByUserIdAndChanel",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceByUserIdAndChanel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceByUserIdAndChanelResponse>(await this.callApi(params, req, runtime), new ListDeviceByUserIdAndChanelResponse({}));
  }

  async listDeviceByUserIdAndChanel(request: ListDeviceByUserIdAndChanelRequest): Promise<ListDeviceByUserIdAndChanelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceByUserIdAndChanelHeaders({ });
    return await this.listDeviceByUserIdAndChanelWithOptions(request, headers, runtime);
  }

  async listDeviceIdByIdentitiesWithOptions(tmpReq: ListDeviceIdByIdentitiesRequest, headers: ListDeviceIdByIdentitiesHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceIdByIdentitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceIdByIdentitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.identityIds)) {
      request.identityIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.identityIds, "IdentityIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.identityIdsShrink)) {
      query["IdentityIds"] = request.identityIdsShrink;
    }

    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceIdByIdentities",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceIdByIdentities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceIdByIdentitiesResponse>(await this.callApi(params, req, runtime), new ListDeviceIdByIdentitiesResponse({}));
  }

  async listDeviceIdByIdentities(request: ListDeviceIdByIdentitiesRequest): Promise<ListDeviceIdByIdentitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceIdByIdentitiesHeaders({ });
    return await this.listDeviceIdByIdentitiesWithOptions(request, headers, runtime);
  }

  async listMusicWithOptions(tmpReq: ListMusicRequest, headers: ListMusicHeaders, runtime: $Util.RuntimeOptions): Promise<ListMusicResponse> {
    Util.validateModel(tmpReq);
    let request = new ListMusicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMusic",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMusicResponse>(await this.callApi(params, req, runtime), new ListMusicResponse({}));
  }

  async listMusic(request: ListMusicRequest): Promise<ListMusicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMusicHeaders({ });
    return await this.listMusicWithOptions(request, headers, runtime);
  }

  async listPlayHistoryWithOptions(tmpReq: ListPlayHistoryRequest, headers: ListPlayHistoryHeaders, runtime: $Util.RuntimeOptions): Promise<ListPlayHistoryResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPlayHistoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPlayHistory",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListPlayHistory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPlayHistoryResponse>(await this.callApi(params, req, runtime), new ListPlayHistoryResponse({}));
  }

  async listPlayHistory(request: ListPlayHistoryRequest): Promise<ListPlayHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListPlayHistoryHeaders({ });
    return await this.listPlayHistoryWithOptions(request, headers, runtime);
  }

  async listRecommendContentWithOptions(tmpReq: ListRecommendContentRequest, headers: ListRecommendContentHeaders, runtime: $Util.RuntimeOptions): Promise<ListRecommendContentResponse> {
    Util.validateModel(tmpReq);
    let request = new ListRecommendContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRecommendContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListRecommendContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRecommendContentResponse>(await this.callApi(params, req, runtime), new ListRecommendContentResponse({}));
  }

  async listRecommendContent(request: ListRecommendContentRequest): Promise<ListRecommendContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListRecommendContentHeaders({ });
    return await this.listRecommendContentWithOptions(request, headers, runtime);
  }

  async listSubWithOptions(tmpReq: ListSubRequest, headers: ListSubHeaders, runtime: $Util.RuntimeOptions): Promise<ListSubResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSubShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubResponse>(await this.callApi(params, req, runtime), new ListSubResponse({}));
  }

  async listSub(request: ListSubRequest): Promise<ListSubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSubHeaders({ });
    return await this.listSubWithOptions(request, headers, runtime);
  }

  async listSubAlbumWithOptions(tmpReq: ListSubAlbumRequest, headers: ListSubAlbumHeaders, runtime: $Util.RuntimeOptions): Promise<ListSubAlbumResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSubAlbumShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.querySubscriptionAlbumRequest)) {
      request.querySubscriptionAlbumRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.querySubscriptionAlbumRequest, "QuerySubscriptionAlbumRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.querySubscriptionAlbumRequestShrink)) {
      query["QuerySubscriptionAlbumRequest"] = request.querySubscriptionAlbumRequestShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubAlbum",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSubAlbum`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubAlbumResponse>(await this.callApi(params, req, runtime), new ListSubAlbumResponse({}));
  }

  async listSubAlbum(request: ListSubAlbumRequest): Promise<ListSubAlbumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSubAlbumHeaders({ });
    return await this.listSubAlbumWithOptions(request, headers, runtime);
  }

  async listSubscriptionAlbumCategoryWithOptions(request: ListSubscriptionAlbumCategoryRequest, headers: ListSubscriptionAlbumCategoryHeaders, runtime: $Util.RuntimeOptions): Promise<ListSubscriptionAlbumCategoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscriptionAlbumCategory",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSubscriptionAlbumCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubscriptionAlbumCategoryResponse>(await this.callApi(params, req, runtime), new ListSubscriptionAlbumCategoryResponse({}));
  }

  async listSubscriptionAlbumCategory(request: ListSubscriptionAlbumCategoryRequest): Promise<ListSubscriptionAlbumCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSubscriptionAlbumCategoryHeaders({ });
    return await this.listSubscriptionAlbumCategoryWithOptions(request, headers, runtime);
  }

  async listUserMessageWithOptions(tmpReq: ListUserMessageRequest, headers: ListUserMessageHeaders, runtime: $Util.RuntimeOptions): Promise<ListUserMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new ListUserMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listUserMessage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserMessageResponse>(await this.callApi(params, req, runtime), new ListUserMessageResponse({}));
  }

  async listUserMessage(request: ListUserMessageRequest): Promise<ListUserMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListUserMessageHeaders({ });
    return await this.listUserMessageWithOptions(request, headers, runtime);
  }

  async playAndPauseControlWithOptions(tmpReq: PlayAndPauseControlRequest, headers: PlayAndPauseControlHeaders, runtime: $Util.RuntimeOptions): Promise<PlayAndPauseControlResponse> {
    Util.validateModel(tmpReq);
    let request = new PlayAndPauseControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openPlayAndPauseControlParam)) {
      request.openPlayAndPauseControlParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openPlayAndPauseControlParam, "OpenPlayAndPauseControlParam", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openPlayAndPauseControlParamShrink)) {
      body["OpenPlayAndPauseControlParam"] = request.openPlayAndPauseControlParamShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PlayAndPauseControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PlayAndPauseControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PlayAndPauseControlResponse>(await this.callApi(params, req, runtime), new PlayAndPauseControlResponse({}));
  }

  async playAndPauseControl(request: PlayAndPauseControlRequest): Promise<PlayAndPauseControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PlayAndPauseControlHeaders({ });
    return await this.playAndPauseControlWithOptions(request, headers, runtime);
  }

  async playModeControlWithOptions(tmpReq: PlayModeControlRequest, headers: PlayModeControlHeaders, runtime: $Util.RuntimeOptions): Promise<PlayModeControlResponse> {
    Util.validateModel(tmpReq);
    let request = new PlayModeControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openPlayModeControlRequest)) {
      request.openPlayModeControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openPlayModeControlRequest, "OpenPlayModeControlRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openPlayModeControlRequestShrink)) {
      body["OpenPlayModeControlRequest"] = request.openPlayModeControlRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PlayModeControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PlayModeControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PlayModeControlResponse>(await this.callApi(params, req, runtime), new PlayModeControlResponse({}));
  }

  async playModeControl(request: PlayModeControlRequest): Promise<PlayModeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PlayModeControlHeaders({ });
    return await this.playModeControlWithOptions(request, headers, runtime);
  }

  async previousAndNextControlWithOptions(tmpReq: PreviousAndNextControlRequest, headers: PreviousAndNextControlHeaders, runtime: $Util.RuntimeOptions): Promise<PreviousAndNextControlResponse> {
    Util.validateModel(tmpReq);
    let request = new PreviousAndNextControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openControlPlayingListRequest)) {
      request.openControlPlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openControlPlayingListRequest, "OpenControlPlayingListRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openControlPlayingListRequestShrink)) {
      body["OpenControlPlayingListRequest"] = request.openControlPlayingListRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PreviousAndNextControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PreviousAndNextControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreviousAndNextControlResponse>(await this.callApi(params, req, runtime), new PreviousAndNextControlResponse({}));
  }

  async previousAndNextControl(request: PreviousAndNextControlRequest): Promise<PreviousAndNextControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PreviousAndNextControlHeaders({ });
    return await this.previousAndNextControlWithOptions(request, headers, runtime);
  }

  async progressControlWithOptions(tmpReq: ProgressControlRequest, headers: ProgressControlHeaders, runtime: $Util.RuntimeOptions): Promise<ProgressControlResponse> {
    Util.validateModel(tmpReq);
    let request = new ProgressControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.openProgressControlRequest)) {
      request.openProgressControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openProgressControlRequest, "OpenProgressControlRequest", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openProgressControlRequestShrink)) {
      body["OpenProgressControlRequest"] = request.openProgressControlRequestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ProgressControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ProgressControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProgressControlResponse>(await this.callApi(params, req, runtime), new ProgressControlResponse({}));
  }

  async progressControl(request: ProgressControlRequest): Promise<ProgressControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ProgressControlHeaders({ });
    return await this.progressControlWithOptions(request, headers, runtime);
  }

  async queryMusicTypeWithOptions(tmpReq: QueryMusicTypeRequest, headers: QueryMusicTypeHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMusicTypeResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryMusicTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMusicType",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/queryMusicType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMusicTypeResponse>(await this.callApi(params, req, runtime), new QueryMusicTypeResponse({}));
  }

  async queryMusicType(request: QueryMusicTypeRequest): Promise<QueryMusicTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMusicTypeHeaders({ });
    return await this.queryMusicTypeWithOptions(request, headers, runtime);
  }

  async queryUserDeviceListByTmeUserIdWithOptions(request: QueryUserDeviceListByTmeUserIdRequest, headers: QueryUserDeviceListByTmeUserIdHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUserDeviceListByTmeUserIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sp)) {
      query["Sp"] = request.sp;
    }

    if (!Util.isUnset(request.tmeUserId)) {
      query["TmeUserId"] = request.tmeUserId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserDeviceListByTmeUserId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/queryUserDeviceListByTmeUserId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryUserDeviceListByTmeUserIdResponse>(await this.callApi(params, req, runtime), new QueryUserDeviceListByTmeUserIdResponse({}));
  }

  async queryUserDeviceListByTmeUserId(request: QueryUserDeviceListByTmeUserIdRequest): Promise<QueryUserDeviceListByTmeUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUserDeviceListByTmeUserIdHeaders({ });
    return await this.queryUserDeviceListByTmeUserIdWithOptions(request, headers, runtime);
  }

  async readMessageWithOptions(tmpReq: ReadMessageRequest, headers: ReadMessageHeaders, runtime: $Util.RuntimeOptions): Promise<ReadMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new ReadMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReadMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/readMessage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReadMessageResponse>(await this.callApi(params, req, runtime), new ReadMessageResponse({}));
  }

  async readMessage(request: ReadMessageRequest): Promise<ReadMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ReadMessageHeaders({ });
    return await this.readMessageWithOptions(request, headers, runtime);
  }

  async scanCodeBindWithOptions(tmpReq: ScanCodeBindRequest, headers: ScanCodeBindHeaders, runtime: $Util.RuntimeOptions): Promise<ScanCodeBindResponse> {
    Util.validateModel(tmpReq);
    let request = new ScanCodeBindShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.bindReq)) {
      request.bindReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bindReq, "BindReq", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bindReqShrink)) {
      body["BindReq"] = request.bindReqShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScanCodeBind",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/scanCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScanCodeBindResponse>(await this.callApi(params, req, runtime), new ScanCodeBindResponse({}));
  }

  async scanCodeBind(request: ScanCodeBindRequest): Promise<ScanCodeBindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ScanCodeBindHeaders({ });
    return await this.scanCodeBindWithOptions(request, headers, runtime);
  }

  async scgSearchWithOptions(tmpReq: ScgSearchRequest, headers: ScgSearchHeaders, runtime: $Util.RuntimeOptions): Promise<ScgSearchResponse> {
    Util.validateModel(tmpReq);
    let request = new ScgSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.scgFilter)) {
      request.scgFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scgFilter, "ScgFilter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scgFilterShrink)) {
      query["ScgFilter"] = request.scgFilterShrink;
    }

    if (!Util.isUnset(request.topicId)) {
      query["TopicId"] = request.topicId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScgSearch",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/scgSearch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScgSearchResponse>(await this.callApi(params, req, runtime), new ScgSearchResponse({}));
  }

  async scgSearch(request: ScgSearchRequest): Promise<ScgSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ScgSearchHeaders({ });
    return await this.scgSearchWithOptions(request, headers, runtime);
  }

  async searchContentWithOptions(tmpReq: SearchContentRequest, headers: SearchContentHeaders, runtime: $Util.RuntimeOptions): Promise<SearchContentResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/SearchContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchContentResponse>(await this.callApi(params, req, runtime), new SearchContentResponse({}));
  }

  async searchContent(request: SearchContentRequest): Promise<SearchContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchContentHeaders({ });
    return await this.searchContentWithOptions(request, headers, runtime);
  }

  async sendMessageWithOptions(tmpReq: SendMessageRequest, headers: SendMessageHeaders, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SendMessageHeaders({ });
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  async setDeviceSettingWithOptions(tmpReq: SetDeviceSettingRequest, headers: SetDeviceSettingHeaders, runtime: $Util.RuntimeOptions): Promise<SetDeviceSettingResponse> {
    Util.validateModel(tmpReq);
    let request = new SetDeviceSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDeviceSetting",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/setDeviceSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeviceSettingResponse>(await this.callApi(params, req, runtime), new SetDeviceSettingResponse({}));
  }

  async setDeviceSetting(request: SetDeviceSettingRequest): Promise<SetDeviceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SetDeviceSettingHeaders({ });
    return await this.setDeviceSettingWithOptions(request, headers, runtime);
  }

  async unbindAligenieUserWithOptions(request: UnbindAligenieUserRequest, headers: UnbindAligenieUserHeaders, runtime: $Util.RuntimeOptions): Promise<UnbindAligenieUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loginStateAccessToken)) {
      body["LoginStateAccessToken"] = request.loginStateAccessToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindAligenieUser",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/unbindAligenieUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindAligenieUserResponse>(await this.callApi(params, req, runtime), new UnbindAligenieUserResponse({}));
  }

  async unbindAligenieUser(request: UnbindAligenieUserRequest): Promise<UnbindAligenieUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UnbindAligenieUserHeaders({ });
    return await this.unbindAligenieUserWithOptions(request, headers, runtime);
  }

  async unbindDeviceWithOptions(tmpReq: UnbindDeviceRequest, headers: UnbindDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new UnbindDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindDevice",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/unbindDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDeviceResponse>(await this.callApi(params, req, runtime), new UnbindDeviceResponse({}));
  }

  async unbindDevice(request: UnbindDeviceRequest): Promise<UnbindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UnbindDeviceHeaders({ });
    return await this.unbindDeviceWithOptions(request, headers, runtime);
  }

  async updateAlarmWithOptions(tmpReq: UpdateAlarmRequest, headers: UpdateAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/updateAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlarmResponse>(await this.callApi(params, req, runtime), new UpdateAlarmResponse({}));
  }

  async updateAlarm(request: UpdateAlarmRequest): Promise<UpdateAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAlarmHeaders({ });
    return await this.updateAlarmWithOptions(request, headers, runtime);
  }

}

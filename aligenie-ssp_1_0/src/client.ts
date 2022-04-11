// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: GetDeviceBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetDeviceIdByIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceIdByIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdentityHeaders extends $tea.Model {
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

export class GetDeviceIdentityRequest extends $tea.Model {
  deviceInfo?: GetDeviceIdentityRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceIdentityRequestDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdentityShrinkRequest extends $tea.Model {
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

export class GetDeviceIdentityResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetDeviceIdentityResponseBodyResult;
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
      result: GetDeviceIdentityResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceIdentityResponseBody,
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
  body: GetDeviceStatusInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetDeviceTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceTagResponseBody,
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
  body: GetUserByDeviceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserByDeviceIdResponseBody,
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
  body: ListDeviceBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListDeviceByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceByUserIdResponseBody,
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
  body: ListDeviceIdByIdentitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceIdByIdentitiesResponseBody,
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
  body: UnbindDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDeviceResponseBody,
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

export class ResultValueValue extends $tea.Model {
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

export class GetDeviceIdentityRequestDeviceInfo extends $tea.Model {
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

export class GetDeviceIdentityResponseBodyResult extends $tea.Model {
  firmwareVersion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      name: 'string',
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

  async getDeviceBasicInfo(request: GetDeviceBasicInfoRequest): Promise<GetDeviceBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceBasicInfoHeaders({ });
    return await this.getDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  async getDeviceBasicInfoWithOptions(tmpReq: GetDeviceBasicInfoRequest, headers: GetDeviceBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
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

  async getDeviceIdByIdentity(request: GetDeviceIdByIdentityRequest): Promise<GetDeviceIdByIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceIdByIdentityHeaders({ });
    return await this.getDeviceIdByIdentityWithOptions(request, headers, runtime);
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

  async getDeviceIdentity(request: GetDeviceIdentityRequest): Promise<GetDeviceIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceIdentityHeaders({ });
    return await this.getDeviceIdentityWithOptions(request, headers, runtime);
  }

  async getDeviceIdentityWithOptions(tmpReq: GetDeviceIdentityRequest, headers: GetDeviceIdentityHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceIdentityResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceIdentityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
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
      action: "GetDeviceIdentity",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceIdentity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceIdentityResponse>(await this.callApi(params, req, runtime), new GetDeviceIdentityResponse({}));
  }

  async getDeviceStatusInfo(request: GetDeviceStatusInfoRequest): Promise<GetDeviceStatusInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceStatusInfoHeaders({ });
    return await this.getDeviceStatusInfoWithOptions(request, headers, runtime);
  }

  async getDeviceStatusInfoWithOptions(tmpReq: GetDeviceStatusInfoRequest, headers: GetDeviceStatusInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceStatusInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceStatusInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
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

  async getDeviceTag(request: GetDeviceTagRequest): Promise<GetDeviceTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceTagHeaders({ });
    return await this.getDeviceTagWithOptions(request, headers, runtime);
  }

  async getDeviceTagWithOptions(tmpReq: GetDeviceTagRequest, headers: GetDeviceTagHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceTagResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeviceTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
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

  async getUserByDeviceId(request: GetUserByDeviceIdRequest): Promise<GetUserByDeviceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserByDeviceIdHeaders({ });
    return await this.getUserByDeviceIdWithOptions(request, headers, runtime);
  }

  async getUserByDeviceIdWithOptions(tmpReq: GetUserByDeviceIdRequest, headers: GetUserByDeviceIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserByDeviceIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUserByDeviceIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
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

  async listDeviceBasicInfo(request: ListDeviceBasicInfoRequest): Promise<ListDeviceBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceBasicInfoHeaders({ });
    return await this.listDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  async listDeviceBasicInfoWithOptions(tmpReq: ListDeviceBasicInfoRequest, headers: ListDeviceBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfos))) {
      request.deviceInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfos), "DeviceInfos", "json");
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

  async listDeviceByUserId(request: ListDeviceByUserIdRequest): Promise<ListDeviceByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceByUserIdHeaders({ });
    return await this.listDeviceByUserIdWithOptions(request, headers, runtime);
  }

  async listDeviceByUserIdWithOptions(tmpReq: ListDeviceByUserIdRequest, headers: ListDeviceByUserIdHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceByUserIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDeviceByUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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

  async listDeviceIdByIdentities(request: ListDeviceIdByIdentitiesRequest): Promise<ListDeviceIdByIdentitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceIdByIdentitiesHeaders({ });
    return await this.listDeviceIdByIdentitiesWithOptions(request, headers, runtime);
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

  async unbindDevice(request: UnbindDeviceRequest): Promise<UnbindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UnbindDeviceHeaders({ });
    return await this.unbindDeviceWithOptions(request, headers, runtime);
  }

  async unbindDeviceWithOptions(tmpReq: UnbindDeviceRequest, headers: UnbindDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new UnbindDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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

}

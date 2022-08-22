// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  payload?: DeviceControlRequestPayload;
  userInfo?: DeviceControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: DeviceControlRequestPayload,
      userInfo: DeviceControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
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
  result?: DeviceControlResponseBodyResult;
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
      result: DeviceControlResponseBodyResult,
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

export class GetHotelHomeBackImageAndModesHeaders extends $tea.Model {
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

export class GetHotelHomeBackImageAndModesRequest extends $tea.Model {
  userInfo?: GetHotelHomeBackImageAndModesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelHomeBackImageAndModesRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesShrinkRequest extends $tea.Model {
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

export class GetHotelHomeBackImageAndModesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetHotelHomeBackImageAndModesResponseBodyResult;
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
      result: GetHotelHomeBackImageAndModesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotelHomeBackImageAndModesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelHomeBackImageAndModesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailHeaders extends $tea.Model {
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

export class GetHotelOrderDetailRequest extends $tea.Model {
  payload?: GetHotelOrderDetailRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: GetHotelOrderDetailRequestPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetHotelOrderDetailResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': GetHotelOrderDetailResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotelOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesHeaders extends $tea.Model {
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

export class GetHotelSampleUtterancesRequest extends $tea.Model {
  userInfo?: GetHotelSampleUtterancesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelSampleUtterancesRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesShrinkRequest extends $tea.Model {
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

export class GetHotelSampleUtterancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: string[];
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
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotelSampleUtterancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelSampleUtterancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverHeaders extends $tea.Model {
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

export class GetHotelScreenSaverRequest extends $tea.Model {
  userInfo?: GetHotelScreenSaverRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelScreenSaverRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverShrinkRequest extends $tea.Model {
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

export class GetHotelScreenSaverResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: GetHotelScreenSaverResponseBodyResult;
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
      result: GetHotelScreenSaverResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotelScreenSaverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelScreenSaverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceHeaders extends $tea.Model {
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

export class ListHotelControlDeviceRequest extends $tea.Model {
  userInfo?: ListHotelControlDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: ListHotelControlDeviceRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceShrinkRequest extends $tea.Model {
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

export class ListHotelControlDeviceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: string }[];
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
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotelControlDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelControlDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderHeaders extends $tea.Model {
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

export class ListHotelOrderRequest extends $tea.Model {
  payload?: ListHotelOrderRequestPayload;
  userInfo?: ListHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelOrderRequestPayload,
      userInfo: ListHotelOrderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  page?: ListHotelOrderResponseBodyPage;
  requestId?: string;
  result?: ListHotelOrderResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelOrderResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelOrderResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemHeaders extends $tea.Model {
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

export class ListHotelSceneItemRequest extends $tea.Model {
  payload?: ListHotelSceneItemRequestPayload;
  userInfo?: ListHotelSceneItemRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelSceneItemRequestPayload,
      userInfo: ListHotelSceneItemRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  page?: ListHotelSceneItemResponseBodyPage;
  requestId?: string;
  result?: ListHotelSceneItemResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelSceneItemResponseBodyPage,
      requestId: 'string',
      result: ListHotelSceneItemResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotelSceneItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelSceneItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryHeaders extends $tea.Model {
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

export class ListHotelServiceCategoryRequest extends $tea.Model {
  payload?: ListHotelServiceCategoryRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelServiceCategoryRequestPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListHotelServiceCategoryResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListHotelServiceCategoryResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotelServiceCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelServiceCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusHeaders extends $tea.Model {
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

export class QueryDeviceStatusRequest extends $tea.Model {
  payload?: QueryDeviceStatusRequestPayload;
  userInfo?: QueryDeviceStatusRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: QueryDeviceStatusRequestPayload,
      userInfo: QueryDeviceStatusRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: string }[];
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
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelProductHeaders extends $tea.Model {
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

export class QueryHotelProductRequest extends $tea.Model {
  userInfo?: QueryHotelProductRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: QueryHotelProductRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelProductShrinkRequest extends $tea.Model {
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

export class QueryHotelProductResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: QueryHotelProductResponseBodyResult;
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
      result: QueryHotelProductResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHotelProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHotelProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutHeaders extends $tea.Model {
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

export class RoomCheckOutRequest extends $tea.Model {
  deviceInfo?: RoomCheckOutRequestDeviceInfo;
  userInfo?: RoomCheckOutRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: RoomCheckOutRequestDeviceInfo,
      userInfo: RoomCheckOutRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutShrinkRequest extends $tea.Model {
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

export class RoomCheckOutResponseBody extends $tea.Model {
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

export class RoomCheckOutResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RoomCheckOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RoomCheckOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderHeaders extends $tea.Model {
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

export class SubmitHotelOrderRequest extends $tea.Model {
  payload?: SubmitHotelOrderRequestPayload;
  userInfo?: SubmitHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: SubmitHotelOrderRequestPayload,
      userInfo: SubmitHotelOrderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderResponseBody extends $tea.Model {
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

export class SubmitHotelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitHotelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitHotelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestPayload extends $tea.Model {
  category?: string;
  cmd?: string;
  current?: string;
  device?: string;
  deviceNumber?: string;
  extendInfo?: string;
  location?: string;
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cmd: 'Cmd',
      current: 'Current',
      device: 'Device',
      deviceNumber: 'DeviceNumber',
      extendInfo: 'ExtendInfo',
      location: 'Location',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cmd: 'string',
      current: 'string',
      device: 'string',
      deviceNumber: 'string',
      extendInfo: 'string',
      location: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestUserInfo extends $tea.Model {
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

export class DeviceControlResponseBodyResult extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesRequestUserInfo extends $tea.Model {
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

export class GetHotelHomeBackImageAndModesResponseBodyResultModeList extends $tea.Model {
  cnName?: string;
  code?: string;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBodyResult extends $tea.Model {
  backgroundImage?: string;
  hotelName?: string;
  modeList?: GetHotelHomeBackImageAndModesResponseBodyResultModeList[];
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      hotelName: 'HotelName',
      modeList: 'ModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      hotelName: 'string',
      modeList: { 'type': 'array', 'itemType': GetHotelHomeBackImageAndModesResponseBodyResultModeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequestPayload extends $tea.Model {
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBodyResult extends $tea.Model {
  applyAmt?: number;
  gmtCreate?: number;
  itemUrl?: string;
  name?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      itemUrl: 'ItemUrl',
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      itemUrl: 'string',
      name: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesRequestUserInfo extends $tea.Model {
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

export class GetHotelScreenSaverRequestUserInfo extends $tea.Model {
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

export class GetHotelScreenSaverResponseBodyResult extends $tea.Model {
  picUrl?: string;
  styleCode?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      styleCode: 'StyleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      styleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceRequestUserInfo extends $tea.Model {
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

export class ListHotelOrderRequestPayloadPage extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestPayload extends $tea.Model {
  page?: ListHotelOrderRequestPayloadPage;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelOrderRequestPayloadPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestUserInfo extends $tea.Model {
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

export class ListHotelOrderResponseBodyPage extends $tea.Model {
  hasNext?: boolean;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBodyResult extends $tea.Model {
  applyAmt?: number;
  gmtCreate?: number;
  orderNo?: string;
  quantity?: number;
  roomNo?: string;
  status?: string;
  type?: string;
  typeIconUrl?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      orderNo: 'OrderNo',
      quantity: 'Quantity',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
      typeIconUrl: 'TypeIconUrl',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      orderNo: 'string',
      quantity: 'number',
      roomNo: 'string',
      status: 'string',
      type: 'string',
      typeIconUrl: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequestPayload extends $tea.Model {
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

export class ListHotelSceneItemRequestUserInfo extends $tea.Model {
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

export class ListHotelSceneItemResponseBodyPage extends $tea.Model {
  hasNext?: boolean;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryListItemList extends $tea.Model {
  category?: string;
  icon?: string;
  id?: string;
  name?: string;
  price?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      icon: 'string',
      id: 'string',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryList extends $tea.Model {
  itemList?: ListHotelSceneItemResponseBodyResultSecondCategoryListItemList[];
  secondCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      secondCategoryName: 'SecondCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryListItemList },
      secondCategoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResult extends $tea.Model {
  secondCategoryList?: ListHotelSceneItemResponseBodyResultSecondCategoryList[];
  static names(): { [key: string]: string } {
    return {
      secondCategoryList: 'SecondCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondCategoryList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequestPayload extends $tea.Model {
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

export class ListHotelServiceCategoryResponseBodyResult extends $tea.Model {
  code?: string;
  desc?: string;
  icon?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      icon: 'Icon',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      icon: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayloadLocationDevices extends $tea.Model {
  deviceNumber?: string;
  deviceType?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      deviceType: 'DeviceType',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      deviceType: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayload extends $tea.Model {
  locationDevices?: QueryDeviceStatusRequestPayloadLocationDevices[];
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      locationDevices: 'LocationDevices',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDevices: { 'type': 'array', 'itemType': QueryDeviceStatusRequestPayloadLocationDevices },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestUserInfo extends $tea.Model {
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

export class QueryHotelProductRequestUserInfo extends $tea.Model {
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

export class QueryHotelProductResponseBodyResult extends $tea.Model {
  hotelId?: string;
  hotelName?: string;
  productKey?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      productKey: 'ProductKey',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelName: 'string',
      productKey: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequestDeviceInfo extends $tea.Model {
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

export class RoomCheckOutRequestUserInfo extends $tea.Model {
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

export class SubmitHotelOrderRequestPayloadItemList extends $tea.Model {
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestPayload extends $tea.Model {
  itemList?: SubmitHotelOrderRequestPayloadItemList[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': SubmitHotelOrderRequestPayloadItemList },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestUserInfo extends $tea.Model {
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

  async deviceControl(request: DeviceControlRequest): Promise<DeviceControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  async deviceControlWithOptions(tmpReq: DeviceControlRequest, headers: DeviceControlHeaders, runtime: $Util.RuntimeOptions): Promise<DeviceControlResponse> {
    Util.validateModel(tmpReq);
    let request = new DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "DeviceControl",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deviceControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeviceControlResponse>(await this.callApi(params, req, runtime), new DeviceControlResponse({}));
  }

  async getHotelHomeBackImageAndModes(request: GetHotelHomeBackImageAndModesRequest): Promise<GetHotelHomeBackImageAndModesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelHomeBackImageAndModesHeaders({ });
    return await this.getHotelHomeBackImageAndModesWithOptions(request, headers, runtime);
  }

  async getHotelHomeBackImageAndModesWithOptions(tmpReq: GetHotelHomeBackImageAndModesRequest, headers: GetHotelHomeBackImageAndModesHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelHomeBackImageAndModesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelHomeBackImageAndModesShrinkRequest({ });
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
      action: "GetHotelHomeBackImageAndModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelHomeBackImageAndModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelHomeBackImageAndModesResponse>(await this.callApi(params, req, runtime), new GetHotelHomeBackImageAndModesResponse({}));
  }

  async getHotelOrderDetail(request: GetHotelOrderDetailRequest): Promise<GetHotelOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelOrderDetailHeaders({ });
    return await this.getHotelOrderDetailWithOptions(request, headers, runtime);
  }

  async getHotelOrderDetailWithOptions(tmpReq: GetHotelOrderDetailRequest, headers: GetHotelOrderDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelOrderDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelOrderDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "GetHotelOrderDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelOrderDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelOrderDetailResponse>(await this.callApi(params, req, runtime), new GetHotelOrderDetailResponse({}));
  }

  async getHotelSampleUtterances(request: GetHotelSampleUtterancesRequest): Promise<GetHotelSampleUtterancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelSampleUtterancesHeaders({ });
    return await this.getHotelSampleUtterancesWithOptions(request, headers, runtime);
  }

  async getHotelSampleUtterancesWithOptions(tmpReq: GetHotelSampleUtterancesRequest, headers: GetHotelSampleUtterancesHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelSampleUtterancesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelSampleUtterancesShrinkRequest({ });
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
      action: "GetHotelSampleUtterances",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSampleUtterances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelSampleUtterancesResponse>(await this.callApi(params, req, runtime), new GetHotelSampleUtterancesResponse({}));
  }

  async getHotelScreenSaver(request: GetHotelScreenSaverRequest): Promise<GetHotelScreenSaverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelScreenSaverHeaders({ });
    return await this.getHotelScreenSaverWithOptions(request, headers, runtime);
  }

  async getHotelScreenSaverWithOptions(tmpReq: GetHotelScreenSaverRequest, headers: GetHotelScreenSaverHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelScreenSaverResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelScreenSaverShrinkRequest({ });
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
      action: "GetHotelScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelScreenSaverResponse>(await this.callApi(params, req, runtime), new GetHotelScreenSaverResponse({}));
  }

  async listHotelControlDevice(request: ListHotelControlDeviceRequest): Promise<ListHotelControlDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelControlDeviceHeaders({ });
    return await this.listHotelControlDeviceWithOptions(request, headers, runtime);
  }

  async listHotelControlDeviceWithOptions(tmpReq: ListHotelControlDeviceRequest, headers: ListHotelControlDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelControlDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelControlDeviceShrinkRequest({ });
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
      action: "ListHotelControlDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelControlDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelControlDeviceResponse>(await this.callApi(params, req, runtime), new ListHotelControlDeviceResponse({}));
  }

  async listHotelOrder(request: ListHotelOrderRequest): Promise<ListHotelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelOrderHeaders({ });
    return await this.listHotelOrderWithOptions(request, headers, runtime);
  }

  async listHotelOrderWithOptions(tmpReq: ListHotelOrderRequest, headers: ListHotelOrderHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "ListHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelOrderResponse>(await this.callApi(params, req, runtime), new ListHotelOrderResponse({}));
  }

  async listHotelSceneItem(request: ListHotelSceneItemRequest): Promise<ListHotelSceneItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelSceneItemHeaders({ });
    return await this.listHotelSceneItemWithOptions(request, headers, runtime);
  }

  async listHotelSceneItemWithOptions(tmpReq: ListHotelSceneItemRequest, headers: ListHotelSceneItemHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelSceneItemResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "ListHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelSceneItemResponse>(await this.callApi(params, req, runtime), new ListHotelSceneItemResponse({}));
  }

  async listHotelServiceCategory(request: ListHotelServiceCategoryRequest): Promise<ListHotelServiceCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelServiceCategoryHeaders({ });
    return await this.listHotelServiceCategoryWithOptions(request, headers, runtime);
  }

  async listHotelServiceCategoryWithOptions(tmpReq: ListHotelServiceCategoryRequest, headers: ListHotelServiceCategoryHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelServiceCategoryResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelServiceCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "ListHotelServiceCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelServiceCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelServiceCategoryResponse>(await this.callApi(params, req, runtime), new ListHotelServiceCategoryResponse({}));
  }

  async queryDeviceStatus(request: QueryDeviceStatusRequest): Promise<QueryDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryDeviceStatusHeaders({ });
    return await this.queryDeviceStatusWithOptions(request, headers, runtime);
  }

  async queryDeviceStatusWithOptions(tmpReq: QueryDeviceStatusRequest, headers: QueryDeviceStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryDeviceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "QueryDeviceStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryDeviceStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceStatusResponse>(await this.callApi(params, req, runtime), new QueryDeviceStatusResponse({}));
  }

  async queryHotelProduct(request: QueryHotelProductRequest): Promise<QueryHotelProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryHotelProductHeaders({ });
    return await this.queryHotelProductWithOptions(request, headers, runtime);
  }

  async queryHotelProductWithOptions(tmpReq: QueryHotelProductRequest, headers: QueryHotelProductHeaders, runtime: $Util.RuntimeOptions): Promise<QueryHotelProductResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryHotelProductShrinkRequest({ });
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
      action: "QueryHotelProduct",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryHotelProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryHotelProductResponse>(await this.callApi(params, req, runtime), new QueryHotelProductResponse({}));
  }

  async roomCheckOut(request: RoomCheckOutRequest): Promise<RoomCheckOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RoomCheckOutHeaders({ });
    return await this.roomCheckOutWithOptions(request, headers, runtime);
  }

  async roomCheckOutWithOptions(tmpReq: RoomCheckOutRequest, headers: RoomCheckOutHeaders, runtime: $Util.RuntimeOptions): Promise<RoomCheckOutResponse> {
    Util.validateModel(tmpReq);
    let request = new RoomCheckOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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
      action: "RoomCheckOut",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/roomCheckOut`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RoomCheckOutResponse>(await this.callApi(params, req, runtime), new RoomCheckOutResponse({}));
  }

  async submitHotelOrder(request: SubmitHotelOrderRequest): Promise<SubmitHotelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SubmitHotelOrderHeaders({ });
    return await this.submitHotelOrderWithOptions(request, headers, runtime);
  }

  async submitHotelOrderWithOptions(tmpReq: SubmitHotelOrderRequest, headers: SubmitHotelOrderHeaders, runtime: $Util.RuntimeOptions): Promise<SubmitHotelOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "SubmitHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/submitHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotelOrderResponse>(await this.callApi(params, req, runtime), new SubmitHotelOrderResponse({}));
  }

}

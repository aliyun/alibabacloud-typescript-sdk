// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AppUseTimeReportHeaders extends $tea.Model {
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

export class AppUseTimeReportRequest extends $tea.Model {
  deviceInfo?: AppUseTimeReportRequestDeviceInfo;
  payload?: AppUseTimeReportRequestPayload;
  userInfo?: AppUseTimeReportRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: AppUseTimeReportRequestDeviceInfo,
      payload: AppUseTimeReportRequestPayload,
      userInfo: AppUseTimeReportRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportShrinkRequest extends $tea.Model {
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

export class AppUseTimeReportResponseBody extends $tea.Model {
  retCode?: number;
  retMsg?: string;
  retValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AppUseTimeReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AppUseTimeReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReminderHeaders extends $tea.Model {
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

export class CreateReminderRequest extends $tea.Model {
  deviceInfo?: CreateReminderRequestDeviceInfo;
  payload?: CreateReminderRequestPayload;
  userInfo?: CreateReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateReminderRequestDeviceInfo,
      payload: CreateReminderRequestPayload,
      userInfo: CreateReminderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReminderShrinkRequest extends $tea.Model {
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

export class CreateReminderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  model?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      model: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReminderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateReminderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateReminderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReminderHeaders extends $tea.Model {
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

export class DeleteReminderRequest extends $tea.Model {
  deviceInfo?: DeleteReminderRequestDeviceInfo;
  payload?: DeleteReminderRequestPayload;
  userInfo?: DeleteReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: DeleteReminderRequestDeviceInfo,
      payload: DeleteReminderRequestPayload,
      userInfo: DeleteReminderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReminderShrinkRequest extends $tea.Model {
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

export class DeleteReminderResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReminderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteReminderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteReminderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountForAppHeaders extends $tea.Model {
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

export class GetAccountForAppRequest extends $tea.Model {
  deviceInfo?: GetAccountForAppRequestDeviceInfo;
  payload?: GetAccountForAppRequestPayload;
  userInfo?: GetAccountForAppRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetAccountForAppRequestDeviceInfo,
      payload: GetAccountForAppRequestPayload,
      userInfo: GetAccountForAppRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountForAppShrinkRequest extends $tea.Model {
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

export class GetAccountForAppResponseBody extends $tea.Model {
  retCode?: number;
  retMsg?: string;
  retValue?: GetAccountForAppResponseBodyRetValue;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: GetAccountForAppResponseBodyRetValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountForAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountForAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountForAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberHeaders extends $tea.Model {
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

export class GetPhoneNumberRequest extends $tea.Model {
  deviceInfo?: GetPhoneNumberRequestDeviceInfo;
  userInfo?: GetPhoneNumberRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetPhoneNumberRequestDeviceInfo,
      userInfo: GetPhoneNumberRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberShrinkRequest extends $tea.Model {
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

export class GetPhoneNumberResponseBody extends $tea.Model {
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'phoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderHeaders extends $tea.Model {
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

export class GetReminderRequest extends $tea.Model {
  deviceInfo?: GetReminderRequestDeviceInfo;
  payload?: GetReminderRequestPayload;
  userInfo?: GetReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetReminderRequestDeviceInfo,
      payload: GetReminderRequestPayload,
      userInfo: GetReminderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderShrinkRequest extends $tea.Model {
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

export class GetReminderResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  model?: GetReminderResponseBodyModel;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      model: GetReminderResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetReminderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetReminderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersHeaders extends $tea.Model {
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

export class ListRemindersRequest extends $tea.Model {
  deviceInfo?: ListRemindersRequestDeviceInfo;
  payload?: ListRemindersRequestPayload;
  userInfo?: ListRemindersRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListRemindersRequestDeviceInfo,
      payload: ListRemindersRequestPayload,
      userInfo: ListRemindersRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersShrinkRequest extends $tea.Model {
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

export class ListRemindersResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  model?: ListRemindersResponseBodyModel;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      model: ListRemindersResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRemindersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRemindersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullCashierHeaders extends $tea.Model {
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

export class PullCashierRequest extends $tea.Model {
  deviceInfo?: PullCashierRequestDeviceInfo;
  payload?: PullCashierRequestPayload;
  userInfo?: PullCashierRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: PullCashierRequestDeviceInfo,
      payload: PullCashierRequestPayload,
      userInfo: PullCashierRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullCashierShrinkRequest extends $tea.Model {
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

export class PullCashierResponseBody extends $tea.Model {
  retCode?: number;
  retMsg?: string;
  retValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullCashierResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PullCashierResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PullCashierResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsHeaders extends $tea.Model {
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

export class PushNotificationsRequest extends $tea.Model {
  notificationUnicastRequest?: PushNotificationsRequestNotificationUnicastRequest;
  tenantInfo?: PushNotificationsRequestTenantInfo;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequest: 'NotificationUnicastRequest',
      tenantInfo: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequest: PushNotificationsRequestNotificationUnicastRequest,
      tenantInfo: PushNotificationsRequestTenantInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsShrinkRequest extends $tea.Model {
  notificationUnicastRequestShrink?: string;
  tenantInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequestShrink: 'NotificationUnicastRequest',
      tenantInfoShrink: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequestShrink: 'string',
      tenantInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsHeaders extends $tea.Model {
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

export class SendNotificationsRequest extends $tea.Model {
  deviceInfo?: SendNotificationsRequestDeviceInfo;
  notificationUnicastRequest?: SendNotificationsRequestNotificationUnicastRequest;
  tenantInfo?: SendNotificationsRequestTenantInfo;
  userInfo?: SendNotificationsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      notificationUnicastRequest: 'NotificationUnicastRequest',
      tenantInfo: 'TenantInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SendNotificationsRequestDeviceInfo,
      notificationUnicastRequest: SendNotificationsRequestNotificationUnicastRequest,
      tenantInfo: SendNotificationsRequestTenantInfo,
      userInfo: SendNotificationsRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  notificationUnicastRequestShrink?: string;
  tenantInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      notificationUnicastRequestShrink: 'NotificationUnicastRequest',
      tenantInfoShrink: 'TenantInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      notificationUnicastRequestShrink: 'string',
      tenantInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderHeaders extends $tea.Model {
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

export class UpdateReminderRequest extends $tea.Model {
  deviceInfo?: UpdateReminderRequestDeviceInfo;
  payload?: UpdateReminderRequestPayload;
  userInfo?: UpdateReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UpdateReminderRequestDeviceInfo,
      payload: UpdateReminderRequestPayload,
      userInfo: UpdateReminderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderShrinkRequest extends $tea.Model {
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

export class UpdateReminderResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  model?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      model: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateReminderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateReminderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAppReportHeaders extends $tea.Model {
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

export class VideoAppReportRequest extends $tea.Model {
  deviceInfo?: VideoAppReportRequestDeviceInfo;
  payload?: VideoAppReportRequestPayload;
  userInfo?: VideoAppReportRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: VideoAppReportRequestDeviceInfo,
      payload: VideoAppReportRequestPayload,
      userInfo: VideoAppReportRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAppReportShrinkRequest extends $tea.Model {
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

export class VideoAppReportResponseBody extends $tea.Model {
  retCode?: number;
  retMsg?: string;
  retValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAppReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VideoAppReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VideoAppReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppHeaders extends $tea.Model {
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

export class WakeUpAppRequest extends $tea.Model {
  isDebug?: boolean;
  path?: string;
  targetInfo?: WakeUpAppRequestTargetInfo;
  static names(): { [key: string]: string } {
    return {
      isDebug: 'IsDebug',
      path: 'Path',
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebug: 'boolean',
      path: 'string',
      targetInfo: WakeUpAppRequestTargetInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportRequestDeviceInfo extends $tea.Model {
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

export class AppUseTimeReportRequestPayload extends $tea.Model {
  action?: string;
  isPrivilege?: number;
  resourceId?: string;
  resourceType?: number;
  stepCode?: string;
  vipType?: number;
  originUuid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      isPrivilege: 'IsPrivilege',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      stepCode: 'StepCode',
      vipType: 'VipType',
      originUuid: 'originUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      isPrivilege: 'number',
      resourceId: 'string',
      resourceType: 'number',
      stepCode: 'string',
      vipType: 'number',
      originUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportRequestUserInfo extends $tea.Model {
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

export class CreateReminderRequestDeviceInfo extends $tea.Model {
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

export class CreateReminderRequestPayloadRecurrenceRule extends $tea.Model {
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  endDateTime?: number;
  freq?: string;
  hour?: number;
  minute?: number;
  month?: number;
  second?: number;
  startDateTime?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'number',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReminderRequestPayload extends $tea.Model {
  content?: string;
  isDebug?: boolean;
  recurrenceRule?: CreateReminderRequestPayloadRecurrenceRule;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      isDebug: 'IsDebug',
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isDebug: 'boolean',
      recurrenceRule: CreateReminderRequestPayloadRecurrenceRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReminderRequestUserInfo extends $tea.Model {
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

export class DeleteReminderRequestDeviceInfo extends $tea.Model {
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

export class DeleteReminderRequestPayload extends $tea.Model {
  id?: number;
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isDebug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReminderRequestUserInfo extends $tea.Model {
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

export class GetAccountForAppRequestDeviceInfo extends $tea.Model {
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

export class GetAccountForAppRequestPayload extends $tea.Model {
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountForAppRequestUserInfo extends $tea.Model {
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

export class GetAccountForAppResponseBodyRetValue extends $tea.Model {
  isVip?: boolean;
  strVipExpire?: string;
  vipExpireAt?: number;
  static names(): { [key: string]: string } {
    return {
      isVip: 'IsVip',
      strVipExpire: 'StrVipExpire',
      vipExpireAt: 'VipExpireAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVip: 'boolean',
      strVipExpire: 'string',
      vipExpireAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberRequestDeviceInfo extends $tea.Model {
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

export class GetPhoneNumberRequestUserInfo extends $tea.Model {
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

export class GetReminderRequestDeviceInfo extends $tea.Model {
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

export class GetReminderRequestPayload extends $tea.Model {
  id?: number;
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isDebug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderRequestUserInfo extends $tea.Model {
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

export class GetReminderResponseBodyModelRemindResponsesRecurrenceRule extends $tea.Model {
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  endDateTime?: string;
  freq?: string;
  hour?: number;
  minute?: number;
  month?: number;
  second?: number;
  startDateTime?: string;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'string',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponseBodyModelRemindResponses extends $tea.Model {
  actionTopic?: string;
  dayDesc?: string;
  recurrenceRule?: GetReminderResponseBodyModelRemindResponsesRecurrenceRule;
  remindId?: number;
  remindTime?: string;
  repeatCount?: number;
  week?: string;
  static names(): { [key: string]: string } {
    return {
      actionTopic: 'ActionTopic',
      dayDesc: 'DayDesc',
      recurrenceRule: 'RecurrenceRule',
      remindId: 'RemindId',
      remindTime: 'RemindTime',
      repeatCount: 'RepeatCount',
      week: 'Week',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTopic: 'string',
      dayDesc: 'string',
      recurrenceRule: GetReminderResponseBodyModelRemindResponsesRecurrenceRule,
      remindId: 'number',
      remindTime: 'string',
      repeatCount: 'number',
      week: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponseBodyModel extends $tea.Model {
  remindResponses?: GetReminderResponseBodyModelRemindResponses[];
  static names(): { [key: string]: string } {
    return {
      remindResponses: 'RemindResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindResponses: { 'type': 'array', 'itemType': GetReminderResponseBodyModelRemindResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersRequestDeviceInfo extends $tea.Model {
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

export class ListRemindersRequestPayload extends $tea.Model {
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersRequestUserInfo extends $tea.Model {
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

export class ListRemindersResponseBodyModelRemindResponsesRecurrenceRule extends $tea.Model {
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  endDateTime?: string;
  freq?: string;
  hour?: number;
  minute?: number;
  month?: number;
  second?: number;
  startDateTime?: string;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'string',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersResponseBodyModelRemindResponses extends $tea.Model {
  actionTopic?: string;
  dayDesc?: string;
  recurrenceRule?: ListRemindersResponseBodyModelRemindResponsesRecurrenceRule;
  remindId?: number;
  remindTime?: string;
  repeatCount?: number;
  week?: string;
  static names(): { [key: string]: string } {
    return {
      actionTopic: 'ActionTopic',
      dayDesc: 'DayDesc',
      recurrenceRule: 'RecurrenceRule',
      remindId: 'RemindId',
      remindTime: 'RemindTime',
      repeatCount: 'RepeatCount',
      week: 'Week',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTopic: 'string',
      dayDesc: 'string',
      recurrenceRule: ListRemindersResponseBodyModelRemindResponsesRecurrenceRule,
      remindId: 'number',
      remindTime: 'string',
      repeatCount: 'number',
      week: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindersResponseBodyModel extends $tea.Model {
  remindResponses?: ListRemindersResponseBodyModelRemindResponses[];
  static names(): { [key: string]: string } {
    return {
      remindResponses: 'RemindResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindResponses: { 'type': 'array', 'itemType': ListRemindersResponseBodyModelRemindResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullCashierRequestDeviceInfo extends $tea.Model {
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

export class PullCashierRequestPayload extends $tea.Model {
  originUuid?: string;
  static names(): { [key: string]: string } {
    return {
      originUuid: 'originUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullCashierRequestUserInfo extends $tea.Model {
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

export class PushNotificationsRequestNotificationUnicastRequestSendTarget extends $tea.Model {
  targetIdentity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestNotificationUnicastRequest extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  isDebug?: boolean;
  messageTemplateId?: string;
  organizationId?: string;
  placeHolder?: { [key: string]: string };
  sendTarget?: PushNotificationsRequestNotificationUnicastRequestSendTarget;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      organizationId: 'OrganizationId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      isDebug: 'boolean',
      messageTemplateId: 'string',
      organizationId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: PushNotificationsRequestNotificationUnicastRequestSendTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestTenantInfo extends $tea.Model {
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

export class SendNotificationsRequestDeviceInfo extends $tea.Model {
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

export class SendNotificationsRequestNotificationUnicastRequestSendTarget extends $tea.Model {
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

export class SendNotificationsRequestNotificationUnicastRequest extends $tea.Model {
  isDebug?: boolean;
  messageTemplateId?: string;
  placeHolder?: { [key: string]: string };
  sendTarget?: SendNotificationsRequestNotificationUnicastRequestSendTarget;
  static names(): { [key: string]: string } {
    return {
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebug: 'boolean',
      messageTemplateId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: SendNotificationsRequestNotificationUnicastRequestSendTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNotificationsRequestTenantInfo extends $tea.Model {
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

export class SendNotificationsRequestUserInfo extends $tea.Model {
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

export class UpdateReminderRequestDeviceInfo extends $tea.Model {
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

export class UpdateReminderRequestPayloadRecurrenceRule extends $tea.Model {
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  endDateTime?: number;
  freq?: string;
  hour?: number;
  minute?: number;
  month?: number;
  second?: number;
  startDateTime?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'number',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequestPayload extends $tea.Model {
  content?: string;
  id?: number;
  isDebug?: boolean;
  recurrenceRule?: UpdateReminderRequestPayloadRecurrenceRule;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      isDebug: 'IsDebug',
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      isDebug: 'boolean',
      recurrenceRule: UpdateReminderRequestPayloadRecurrenceRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequestUserInfo extends $tea.Model {
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

export class VideoAppReportRequestDeviceInfo extends $tea.Model {
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

export class VideoAppReportRequestPayload extends $tea.Model {
  endTime?: number;
  isLogin?: boolean;
  isVip?: boolean;
  loginNick?: string;
  originUuid?: string;
  phone?: string;
  pkgName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      isLogin: 'isLogin',
      isVip: 'isVip',
      loginNick: 'loginNick',
      originUuid: 'originUuid',
      phone: 'phone',
      pkgName: 'pkgName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      isLogin: 'boolean',
      isVip: 'boolean',
      loginNick: 'string',
      originUuid: 'string',
      phone: 'string',
      pkgName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAppReportRequestUserInfo extends $tea.Model {
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

export class WakeUpAppRequestTargetInfo extends $tea.Model {
  encodeKey?: string;
  encodeType?: string;
  organizationId?: string;
  targetIdentity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      organizationId: 'OrganizationId',
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      organizationId: 'string',
      targetIdentity: 'string',
      targetType: 'string',
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

  async appUseTimeReport(request: AppUseTimeReportRequest): Promise<AppUseTimeReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppUseTimeReportHeaders({ });
    return await this.appUseTimeReportWithOptions(request, headers, runtime);
  }

  async appUseTimeReportWithOptions(tmpReq: AppUseTimeReportRequest, headers: AppUseTimeReportHeaders, runtime: $Util.RuntimeOptions): Promise<AppUseTimeReportResponse> {
    Util.validateModel(tmpReq);
    let request = new AppUseTimeReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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
      action: "AppUseTimeReport",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/use/time/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppUseTimeReportResponse>(await this.callApi(params, req, runtime), new AppUseTimeReportResponse({}));
  }

  async createReminder(request: CreateReminderRequest): Promise<CreateReminderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateReminderHeaders({ });
    return await this.createReminderWithOptions(request, headers, runtime);
  }

  async createReminderWithOptions(tmpReq: CreateReminderRequest, headers: CreateReminderHeaders, runtime: $Util.RuntimeOptions): Promise<CreateReminderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateReminderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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
      action: "CreateReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReminderResponse>(await this.callApi(params, req, runtime), new CreateReminderResponse({}));
  }

  async deleteReminder(request: DeleteReminderRequest): Promise<DeleteReminderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteReminderHeaders({ });
    return await this.deleteReminderWithOptions(request, headers, runtime);
  }

  async deleteReminderWithOptions(tmpReq: DeleteReminderRequest, headers: DeleteReminderHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteReminderResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteReminderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

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
      action: "DeleteReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteReminderResponse>(await this.callApi(params, req, runtime), new DeleteReminderResponse({}));
  }

  async getAccountForApp(request: GetAccountForAppRequest): Promise<GetAccountForAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAccountForAppHeaders({ });
    return await this.getAccountForAppWithOptions(request, headers, runtime);
  }

  async getAccountForAppWithOptions(tmpReq: GetAccountForAppRequest, headers: GetAccountForAppHeaders, runtime: $Util.RuntimeOptions): Promise<GetAccountForAppResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAccountForAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

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
      action: "GetAccountForApp",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/account/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAccountForAppResponse>(await this.callApi(params, req, runtime), new GetAccountForAppResponse({}));
  }

  async getPhoneNumber(request: GetPhoneNumberRequest): Promise<GetPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetPhoneNumberHeaders({ });
    return await this.getPhoneNumberWithOptions(request, headers, runtime);
  }

  async getPhoneNumberWithOptions(tmpReq: GetPhoneNumberRequest, headers: GetPhoneNumberHeaders, runtime: $Util.RuntimeOptions): Promise<GetPhoneNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPhoneNumberShrinkRequest({ });
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
      action: "GetPhoneNumber",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/profile/phoneNumber`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPhoneNumberResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberResponse({}));
  }

  async getReminder(request: GetReminderRequest): Promise<GetReminderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetReminderHeaders({ });
    return await this.getReminderWithOptions(request, headers, runtime);
  }

  async getReminderWithOptions(tmpReq: GetReminderRequest, headers: GetReminderHeaders, runtime: $Util.RuntimeOptions): Promise<GetReminderResponse> {
    Util.validateModel(tmpReq);
    let request = new GetReminderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

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
      action: "GetReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetReminderResponse>(await this.callApi(params, req, runtime), new GetReminderResponse({}));
  }

  async listReminders(request: ListRemindersRequest): Promise<ListRemindersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListRemindersHeaders({ });
    return await this.listRemindersWithOptions(request, headers, runtime);
  }

  async listRemindersWithOptions(tmpReq: ListRemindersRequest, headers: ListRemindersHeaders, runtime: $Util.RuntimeOptions): Promise<ListRemindersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListRemindersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

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
      action: "ListReminders",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRemindersResponse>(await this.callApi(params, req, runtime), new ListRemindersResponse({}));
  }

  async pullCashier(request: PullCashierRequest): Promise<PullCashierResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PullCashierHeaders({ });
    return await this.pullCashierWithOptions(request, headers, runtime);
  }

  async pullCashierWithOptions(tmpReq: PullCashierRequest, headers: PullCashierHeaders, runtime: $Util.RuntimeOptions): Promise<PullCashierResponse> {
    Util.validateModel(tmpReq);
    let request = new PullCashierShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

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
      action: "PullCashier",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/pull/cashier/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PullCashierResponse>(await this.callApi(params, req, runtime), new PullCashierResponse({}));
  }

  async pushNotifications(request: PushNotificationsRequest): Promise<PushNotificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushNotificationsHeaders({ });
    return await this.pushNotificationsWithOptions(request, headers, runtime);
  }

  async pushNotificationsWithOptions(tmpReq: PushNotificationsRequest, headers: PushNotificationsHeaders, runtime: $Util.RuntimeOptions): Promise<PushNotificationsResponse> {
    Util.validateModel(tmpReq);
    let request = new PushNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.notificationUnicastRequest))) {
      request.notificationUnicastRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.notificationUnicastRequest), "NotificationUnicastRequest", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.tenantInfo))) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.tenantInfo), "TenantInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.notificationUnicastRequestShrink)) {
      body["NotificationUnicastRequest"] = request.notificationUnicastRequestShrink;
    }

    if (!Util.isUnset(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
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
      action: "PushNotifications",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/notifications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<PushNotificationsResponse>(await this.callApi(params, req, runtime), new PushNotificationsResponse({}));
  }

  async sendNotifications(request: SendNotificationsRequest): Promise<SendNotificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SendNotificationsHeaders({ });
    return await this.sendNotificationsWithOptions(request, headers, runtime);
  }

  async sendNotificationsWithOptions(tmpReq: SendNotificationsRequest, headers: SendNotificationsHeaders, runtime: $Util.RuntimeOptions): Promise<SendNotificationsResponse> {
    Util.validateModel(tmpReq);
    let request = new SendNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.notificationUnicastRequest))) {
      request.notificationUnicastRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.notificationUnicastRequest), "NotificationUnicastRequest", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.tenantInfo))) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.tenantInfo), "TenantInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.notificationUnicastRequestShrink)) {
      body["NotificationUnicastRequest"] = request.notificationUnicastRequestShrink;
    }

    if (!Util.isUnset(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
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
      action: "SendNotifications",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/general/notifications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<SendNotificationsResponse>(await this.callApi(params, req, runtime), new SendNotificationsResponse({}));
  }

  async updateReminder(request: UpdateReminderRequest): Promise<UpdateReminderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateReminderHeaders({ });
    return await this.updateReminderWithOptions(request, headers, runtime);
  }

  async updateReminderWithOptions(tmpReq: UpdateReminderRequest, headers: UpdateReminderHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateReminderResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateReminderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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
      action: "UpdateReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateReminderResponse>(await this.callApi(params, req, runtime), new UpdateReminderResponse({}));
  }

  async videoAppReport(request: VideoAppReportRequest): Promise<VideoAppReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new VideoAppReportHeaders({ });
    return await this.videoAppReportWithOptions(request, headers, runtime);
  }

  async videoAppReportWithOptions(tmpReq: VideoAppReportRequest, headers: VideoAppReportHeaders, runtime: $Util.RuntimeOptions): Promise<VideoAppReportResponse> {
    Util.validateModel(tmpReq);
    let request = new VideoAppReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.deviceInfo))) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deviceInfo), "DeviceInfo", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.payload))) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.payload), "Payload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.userInfo))) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.userInfo), "UserInfo", "json");
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
      action: "VideoAppReport",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/use/video/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VideoAppReportResponse>(await this.callApi(params, req, runtime), new VideoAppReportResponse({}));
  }

  async wakeUpApp(request: WakeUpAppRequest): Promise<WakeUpAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new WakeUpAppHeaders({ });
    return await this.wakeUpAppWithOptions(request, headers, runtime);
  }

  async wakeUpAppWithOptions(request: WakeUpAppRequest, headers: WakeUpAppHeaders, runtime: $Util.RuntimeOptions): Promise<WakeUpAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isDebug)) {
      body["IsDebug"] = request.isDebug;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset($tea.toMap(request.targetInfo))) {
      body["TargetInfo"] = request.targetInfo;
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
      action: "WakeUpApp",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/wakeup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<WakeUpAppResponse>(await this.callApi(params, req, runtime), new WakeUpAppResponse({}));
  }

}

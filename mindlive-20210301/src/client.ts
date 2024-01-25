// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class LoginDeviceRequest extends $tea.Model {
  userId?: string;
  userSource?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userSource: 'UserSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginDeviceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoginDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoginDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogoutDeviceRequest extends $tea.Model {
  userId?: string;
  userSource?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userSource: 'UserSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogoutDeviceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogoutDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogoutDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LogoutDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemBackgroundsRequest extends $tea.Model {
  itemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemBackgroundsShrinkRequest extends $tea.Model {
  itemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      itemIdsShrink: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemBackgroundsResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemBackgroundsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryItemBackgroundsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryItemBackgroundsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportCurrentBackgroundRequest extends $tea.Model {
  bgConfig?: { [key: string]: any };
  mode?: string;
  open?: boolean;
  resourceUuid?: string;
  static names(): { [key: string]: string } {
    return {
      bgConfig: 'BgConfig',
      mode: 'Mode',
      open: 'Open',
      resourceUuid: 'ResourceUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mode: 'string',
      open: 'boolean',
      resourceUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportCurrentBackgroundShrinkRequest extends $tea.Model {
  bgConfigShrink?: string;
  mode?: string;
  open?: boolean;
  resourceUuid?: string;
  static names(): { [key: string]: string } {
    return {
      bgConfigShrink: 'BgConfig',
      mode: 'Mode',
      open: 'Open',
      resourceUuid: 'ResourceUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgConfigShrink: 'string',
      mode: 'string',
      open: 'boolean',
      resourceUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportCurrentBackgroundResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportCurrentBackgroundResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportCurrentBackgroundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportCurrentBackgroundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDevConfigRequest extends $tea.Model {
  configs?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDevConfigResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDevConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportDevConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportDevConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLiveStateRequest extends $tea.Model {
  anchorId?: string;
  id?: string;
  liveMode?: string;
  liveState?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      id: 'Id',
      liveMode: 'LiveMode',
      liveState: 'LiveState',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      id: 'string',
      liveMode: 'string',
      liveState: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLiveStateResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLiveStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportLiveStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportLiveStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportScreenRequest extends $tea.Model {
  ossBucketName?: string;
  ossObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'OssBucketName',
      ossObjectKey: 'OssObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossObjectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportScreenResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportScreenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportScreenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportScreenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserConfigRequest extends $tea.Model {
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

export class ReportUserConfigResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestAuthorizationDataResponseBody extends $tea.Model {
  data?: RequestAuthorizationDataResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestAuthorizationDataResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestAuthorizationDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestAuthorizationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestAuthorizationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBackgroundResponseBody extends $tea.Model {
  data?: RequestBackgroundResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestBackgroundResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBackgroundResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestBackgroundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestBackgroundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindDataRequest extends $tea.Model {
  liveSource?: string;
  static names(): { [key: string]: string } {
    return {
      liveSource: 'LiveSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindDataResponseBody extends $tea.Model {
  data?: RequestBindDataResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestBindDataResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestBindDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestBindDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindingStateResponseBody extends $tea.Model {
  data?: RequestBindingStateResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestBindingStateResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindingStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestBindingStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestBindingStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDeviceInfoResponseBody extends $tea.Model {
  data?: RequestDeviceInfoResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestDeviceInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDeviceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestIotTriadResponseBody extends $tea.Model {
  data?: RequestIotTriadResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestIotTriadResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestIotTriadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestIotTriadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestIotTriadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveSellPointStateResponseBody extends $tea.Model {
  data?: RequestLiveSellPointStateResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestLiveSellPointStateResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveSellPointStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestLiveSellPointStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestLiveSellPointStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveTeleprompterStateResponseBody extends $tea.Model {
  data?: RequestLiveTeleprompterStateResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestLiveTeleprompterStateResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveTeleprompterStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestLiveTeleprompterStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestLiveTeleprompterStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestOssStsRequest extends $tea.Model {
  appCode?: string;
  expireSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      expireSeconds: 'ExpireSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      expireSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestOssStsResponseBody extends $tea.Model {
  data?: RequestOssStsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestOssStsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestOssStsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestOssStsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestOssStsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPasterResponseBody extends $tea.Model {
  data?: RequestPasterResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RequestPasterResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPasterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestPasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestPasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestResetDataRequest extends $tea.Model {
  liveSource?: string;
  static names(): { [key: string]: string } {
    return {
      liveSource: 'LiveSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestResetDataResponseBody extends $tea.Model {
  data?: RequestResetDataResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestResetDataResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestResetDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestResetDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestResetDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestServiceInfoResponseBody extends $tea.Model {
  data?: RequestServiceInfoResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestServiceInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestServiceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestServiceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestServiceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserConfigRequest extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserConfigResponseBody extends $tea.Model {
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserSellPointTemplateResponseBody extends $tea.Model {
  data?: RequestUserSellPointTemplateResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RequestUserSellPointTemplateResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserSellPointTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestUserSellPointTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RequestUserSellPointTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceRequest extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCurrentItemRequest extends $tea.Model {
  itemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCurrentItemResponseBody extends $tea.Model {
  data?: UpdateCurrentItemResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateCurrentItemResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCurrentItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCurrentItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCurrentItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSellPointStateRequest extends $tea.Model {
  display?: boolean;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSellPointStateResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSellPointStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLiveSellPointStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveSellPointStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTeleprompterStateRequest extends $tea.Model {
  display?: boolean;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTeleprompterStateResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTeleprompterStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLiveTeleprompterStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveTeleprompterStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestAuthorizationDataResponseBodyData extends $tea.Model {
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

export class RequestBackgroundResponseBodyData extends $tea.Model {
  bgConfig?: { [key: string]: any };
  downloadUrl?: string;
  fileType?: string;
  mode?: string;
  open?: boolean;
  resourceUuid?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      bgConfig: 'BgConfig',
      downloadUrl: 'DownloadUrl',
      fileType: 'FileType',
      mode: 'Mode',
      open: 'Open',
      resourceUuid: 'ResourceUuid',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      downloadUrl: 'string',
      fileType: 'string',
      mode: 'string',
      open: 'boolean',
      resourceUuid: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindDataResponseBodyData extends $tea.Model {
  code?: string;
  maxKeepSeconds?: number;
  shortUrl?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxKeepSeconds: 'MaxKeepSeconds',
      shortUrl: 'ShortUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxKeepSeconds: 'number',
      shortUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestBindingStateResponseBodyData extends $tea.Model {
  bindAt?: number;
  deviceId?: string;
  userAvatar?: string;
  userId?: string;
  userNick?: string;
  userSource?: string;
  static names(): { [key: string]: string } {
    return {
      bindAt: 'BindAt',
      deviceId: 'DeviceId',
      userAvatar: 'UserAvatar',
      userId: 'UserId',
      userNick: 'UserNick',
      userSource: 'UserSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAt: 'number',
      deviceId: 'string',
      userAvatar: 'string',
      userId: 'string',
      userNick: 'string',
      userSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDeviceInfoResponseBodyData extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  deviceSn?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      publicIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestIotTriadResponseBodyData extends $tea.Model {
  deviceName?: string;
  deviceSecret?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceSecret: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveSellPointStateResponseBodyData extends $tea.Model {
  display?: boolean;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestLiveTeleprompterStateResponseBodyData extends $tea.Model {
  display?: boolean;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestOssStsResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  endPoint?: string;
  expire?: string;
  objectKeyPrefix?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      expire: 'Expire',
      objectKeyPrefix: 'ObjectKeyPrefix',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endPoint: 'string',
      expire: 'string',
      objectKeyPrefix: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPasterResponseBodyData extends $tea.Model {
  configs?: { [key: string]: any };
  downloadUrl?: string;
  resourceUuid?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      downloadUrl: 'DownloadUrl',
      resourceUuid: 'ResourceUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      downloadUrl: 'string',
      resourceUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestResetDataResponseBodyData extends $tea.Model {
  fullUrl?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fullUrl: 'FullUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestServiceInfoResponseBodyData extends $tea.Model {
  serviceEffectAt?: number;
  serviceExpireAt?: number;
  servicePackName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceEffectAt: 'ServiceEffectAt',
      serviceExpireAt: 'ServiceExpireAt',
      servicePackName: 'ServicePackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEffectAt: 'number',
      serviceExpireAt: 'number',
      servicePackName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUserSellPointTemplateResponseBodyData extends $tea.Model {
  displayConfig?: { [key: string]: any };
  templateConfig?: { [key: string]: any };
  templateUuid?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      displayConfig: 'DisplayConfig',
      templateConfig: 'TemplateConfig',
      templateUuid: 'TemplateUuid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateUuid: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCurrentItemResponseBodyDataItemBackground extends $tea.Model {
  downloadUrl?: string;
  fileType?: string;
  itemId?: string;
  resourceUuid?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      fileType: 'FileType',
      itemId: 'ItemId',
      resourceUuid: 'ResourceUuid',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileType: 'string',
      itemId: 'string',
      resourceUuid: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCurrentItemResponseBodyData extends $tea.Model {
  itemBackground?: UpdateCurrentItemResponseBodyDataItemBackground;
  static names(): { [key: string]: string } {
    return {
      itemBackground: 'ItemBackground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemBackground: UpdateCurrentItemResponseBodyDataItemBackground,
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
    this._endpoint = this.getEndpoint("mindlive", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async loginDeviceWithOptions(request: LoginDeviceRequest, runtime: $Util.RuntimeOptions): Promise<LoginDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userSource)) {
      query["UserSource"] = request.userSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LoginDevice",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoginDeviceResponse>(await this.callApi(params, req, runtime), new LoginDeviceResponse({}));
  }

  async loginDevice(request: LoginDeviceRequest): Promise<LoginDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loginDeviceWithOptions(request, runtime);
  }

  async logoutDeviceWithOptions(request: LogoutDeviceRequest, runtime: $Util.RuntimeOptions): Promise<LogoutDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userSource)) {
      query["UserSource"] = request.userSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LogoutDevice",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LogoutDeviceResponse>(await this.callApi(params, req, runtime), new LogoutDeviceResponse({}));
  }

  async logoutDevice(request: LogoutDeviceRequest): Promise<LogoutDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.logoutDeviceWithOptions(request, runtime);
  }

  async queryItemBackgroundsWithOptions(tmpReq: QueryItemBackgroundsRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemBackgroundsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryItemBackgroundsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemBackgrounds",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemBackgroundsResponse>(await this.callApi(params, req, runtime), new QueryItemBackgroundsResponse({}));
  }

  async queryItemBackgrounds(request: QueryItemBackgroundsRequest): Promise<QueryItemBackgroundsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemBackgroundsWithOptions(request, runtime);
  }

  async reportCurrentBackgroundWithOptions(tmpReq: ReportCurrentBackgroundRequest, runtime: $Util.RuntimeOptions): Promise<ReportCurrentBackgroundResponse> {
    Util.validateModel(tmpReq);
    let request = new ReportCurrentBackgroundShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.bgConfig)) {
      request.bgConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bgConfig, "BgConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bgConfigShrink)) {
      query["BgConfig"] = request.bgConfigShrink;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.open)) {
      query["Open"] = request.open;
    }

    if (!Util.isUnset(request.resourceUuid)) {
      query["ResourceUuid"] = request.resourceUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportCurrentBackground",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportCurrentBackgroundResponse>(await this.callApi(params, req, runtime), new ReportCurrentBackgroundResponse({}));
  }

  async reportCurrentBackground(request: ReportCurrentBackgroundRequest): Promise<ReportCurrentBackgroundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportCurrentBackgroundWithOptions(request, runtime);
  }

  async reportDevConfigWithOptions(request: ReportDevConfigRequest, runtime: $Util.RuntimeOptions): Promise<ReportDevConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configs)) {
      query["Configs"] = request.configs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportDevConfig",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportDevConfigResponse>(await this.callApi(params, req, runtime), new ReportDevConfigResponse({}));
  }

  async reportDevConfig(request: ReportDevConfigRequest): Promise<ReportDevConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportDevConfigWithOptions(request, runtime);
  }

  async reportLiveStateWithOptions(request: ReportLiveStateRequest, runtime: $Util.RuntimeOptions): Promise<ReportLiveStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anchorId)) {
      query["AnchorId"] = request.anchorId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.liveMode)) {
      query["LiveMode"] = request.liveMode;
    }

    if (!Util.isUnset(request.liveState)) {
      query["LiveState"] = request.liveState;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportLiveState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportLiveStateResponse>(await this.callApi(params, req, runtime), new ReportLiveStateResponse({}));
  }

  async reportLiveState(request: ReportLiveStateRequest): Promise<ReportLiveStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportLiveStateWithOptions(request, runtime);
  }

  async reportScreenWithOptions(request: ReportScreenRequest, runtime: $Util.RuntimeOptions): Promise<ReportScreenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossObjectKey)) {
      query["OssObjectKey"] = request.ossObjectKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportScreen",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportScreenResponse>(await this.callApi(params, req, runtime), new ReportScreenResponse({}));
  }

  async reportScreen(request: ReportScreenRequest): Promise<ReportScreenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportScreenWithOptions(request, runtime);
  }

  async reportUserConfigWithOptions(request: ReportUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<ReportUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportUserConfig",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUserConfigResponse>(await this.callApi(params, req, runtime), new ReportUserConfigResponse({}));
  }

  async reportUserConfig(request: ReportUserConfigRequest): Promise<ReportUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUserConfigWithOptions(request, runtime);
  }

  async requestAuthorizationDataWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestAuthorizationDataResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestAuthorizationData",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestAuthorizationDataResponse>(await this.callApi(params, req, runtime), new RequestAuthorizationDataResponse({}));
  }

  async requestAuthorizationData(): Promise<RequestAuthorizationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestAuthorizationDataWithOptions(runtime);
  }

  async requestBackgroundWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestBackgroundResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestBackground",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestBackgroundResponse>(await this.callApi(params, req, runtime), new RequestBackgroundResponse({}));
  }

  async requestBackground(): Promise<RequestBackgroundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestBackgroundWithOptions(runtime);
  }

  async requestBindDataWithOptions(request: RequestBindDataRequest, runtime: $Util.RuntimeOptions): Promise<RequestBindDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.liveSource)) {
      query["LiveSource"] = request.liveSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RequestBindData",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestBindDataResponse>(await this.callApi(params, req, runtime), new RequestBindDataResponse({}));
  }

  async requestBindData(request: RequestBindDataRequest): Promise<RequestBindDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestBindDataWithOptions(request, runtime);
  }

  async requestBindingStateWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestBindingStateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestBindingState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestBindingStateResponse>(await this.callApi(params, req, runtime), new RequestBindingStateResponse({}));
  }

  async requestBindingState(): Promise<RequestBindingStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestBindingStateWithOptions(runtime);
  }

  async requestDeviceInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestDeviceInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestDeviceInfo",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestDeviceInfoResponse>(await this.callApi(params, req, runtime), new RequestDeviceInfoResponse({}));
  }

  async requestDeviceInfo(): Promise<RequestDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestDeviceInfoWithOptions(runtime);
  }

  async requestIotTriadWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestIotTriadResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestIotTriad",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestIotTriadResponse>(await this.callApi(params, req, runtime), new RequestIotTriadResponse({}));
  }

  async requestIotTriad(): Promise<RequestIotTriadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestIotTriadWithOptions(runtime);
  }

  async requestLiveSellPointStateWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestLiveSellPointStateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestLiveSellPointState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestLiveSellPointStateResponse>(await this.callApi(params, req, runtime), new RequestLiveSellPointStateResponse({}));
  }

  async requestLiveSellPointState(): Promise<RequestLiveSellPointStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestLiveSellPointStateWithOptions(runtime);
  }

  async requestLiveTeleprompterStateWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestLiveTeleprompterStateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestLiveTeleprompterState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestLiveTeleprompterStateResponse>(await this.callApi(params, req, runtime), new RequestLiveTeleprompterStateResponse({}));
  }

  async requestLiveTeleprompterState(): Promise<RequestLiveTeleprompterStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestLiveTeleprompterStateWithOptions(runtime);
  }

  async requestOssStsWithOptions(request: RequestOssStsRequest, runtime: $Util.RuntimeOptions): Promise<RequestOssStsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RequestOssSts",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestOssStsResponse>(await this.callApi(params, req, runtime), new RequestOssStsResponse({}));
  }

  async requestOssSts(request: RequestOssStsRequest): Promise<RequestOssStsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestOssStsWithOptions(request, runtime);
  }

  async requestPasterWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestPasterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestPaster",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestPasterResponse>(await this.callApi(params, req, runtime), new RequestPasterResponse({}));
  }

  async requestPaster(): Promise<RequestPasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestPasterWithOptions(runtime);
  }

  async requestResetDataWithOptions(request: RequestResetDataRequest, runtime: $Util.RuntimeOptions): Promise<RequestResetDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.liveSource)) {
      query["LiveSource"] = request.liveSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RequestResetData",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestResetDataResponse>(await this.callApi(params, req, runtime), new RequestResetDataResponse({}));
  }

  async requestResetData(request: RequestResetDataRequest): Promise<RequestResetDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestResetDataWithOptions(request, runtime);
  }

  async requestServiceInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestServiceInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestServiceInfo",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestServiceInfoResponse>(await this.callApi(params, req, runtime), new RequestServiceInfoResponse({}));
  }

  async requestServiceInfo(): Promise<RequestServiceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestServiceInfoWithOptions(runtime);
  }

  async requestUserConfigWithOptions(request: RequestUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<RequestUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RequestUserConfig",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestUserConfigResponse>(await this.callApi(params, req, runtime), new RequestUserConfigResponse({}));
  }

  async requestUserConfig(request: RequestUserConfigRequest): Promise<RequestUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestUserConfigWithOptions(request, runtime);
  }

  async requestUserSellPointTemplateWithOptions(runtime: $Util.RuntimeOptions): Promise<RequestUserSellPointTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RequestUserSellPointTemplate",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestUserSellPointTemplateResponse>(await this.callApi(params, req, runtime), new RequestUserSellPointTemplateResponse({}));
  }

  async requestUserSellPointTemplate(): Promise<RequestUserSellPointTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestUserSellPointTemplateWithOptions(runtime);
  }

  async resetDeviceWithOptions(request: ResetDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ResetDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDevice",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDeviceResponse>(await this.callApi(params, req, runtime), new ResetDeviceResponse({}));
  }

  async resetDevice(request: ResetDeviceRequest): Promise<ResetDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDeviceWithOptions(request, runtime);
  }

  async updateCurrentItemWithOptions(request: UpdateCurrentItemRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCurrentItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCurrentItem",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCurrentItemResponse>(await this.callApi(params, req, runtime), new UpdateCurrentItemResponse({}));
  }

  async updateCurrentItem(request: UpdateCurrentItemRequest): Promise<UpdateCurrentItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCurrentItemWithOptions(request, runtime);
  }

  async updateLiveSellPointStateWithOptions(request: UpdateLiveSellPointStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveSellPointStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.display)) {
      query["Display"] = request.display;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveSellPointState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveSellPointStateResponse>(await this.callApi(params, req, runtime), new UpdateLiveSellPointStateResponse({}));
  }

  async updateLiveSellPointState(request: UpdateLiveSellPointStateRequest): Promise<UpdateLiveSellPointStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveSellPointStateWithOptions(request, runtime);
  }

  async updateLiveTeleprompterStateWithOptions(request: UpdateLiveTeleprompterStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveTeleprompterStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.display)) {
      query["Display"] = request.display;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveTeleprompterState",
      version: "2021-03-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveTeleprompterStateResponse>(await this.callApi(params, req, runtime), new UpdateLiveTeleprompterStateResponse({}));
  }

  async updateLiveTeleprompterState(request: UpdateLiveTeleprompterStateRequest): Promise<UpdateLiveTeleprompterStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveTeleprompterStateWithOptions(request, runtime);
  }

}

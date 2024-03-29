// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  requestId?: string;
  code?: string;
  message?: string;
  result?: GetLoginTokenResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      result: GetLoginTokenResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoginTokenResponseBody,
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
  result?: CreateRoomResponseBodyResult;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateRoomResponseBodyResult,
      responseSuccess: 'boolean',
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
  body: CreateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoomResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DestroyRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DestroyRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  request?: CreateInstanceRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: CreateInstanceRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateInstanceResponseBodyResult;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInstanceResponseBodyResult,
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomDetailRequest extends $tea.Model {
  request?: GetRoomDetailRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: GetRoomDetailRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomDetailResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetRoomDetailResponseBodyResult;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRoomDetailResponseBodyResult,
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRoomDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRoomDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListRequest extends $tea.Model {
  request?: GetRoomListRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: GetRoomListRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetRoomListResponseBodyResult;
  responseSuccess?: boolean;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      responseSuccess: 'ResponseSuccess',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRoomListResponseBodyResult,
      responseSuccess: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRoomListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRoomListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequestRequestParams extends $tea.Model {
  appUid?: string;
  appKey?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      appKey: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyResult extends $tea.Model {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      refreshToken: 'string',
      accessTokenExpiredTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequestRequest extends $tea.Model {
  domain?: string;
  bizType?: string;
  templateId?: string;
  roomId?: string;
  title?: string;
  notice?: string;
  ownerId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      bizType: 'BizType',
      templateId: 'TemplateId',
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      ownerId: 'OwnerId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      bizType: 'string',
      templateId: 'string',
      roomId: 'string',
      title: 'string',
      notice: 'string',
      ownerId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
      roomId: 'RoomId',
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

export class CreateInstanceRequestRequest extends $tea.Model {
  domain?: string;
  roomId?: string;
  pluginId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      roomId: 'RoomId',
      pluginId: 'PluginId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      roomId: 'string',
      pluginId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $tea.Model {
  instanceId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomDetailRequestRequest extends $tea.Model {
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

export class GetRoomDetailResponseBodyResultPluginInstanceInfoList extends $tea.Model {
  pluginId?: string;
  instanceId?: string;
  createTime?: number;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      instanceId: 'string',
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomDetailResponseBodyResult extends $tea.Model {
  roomId?: string;
  title?: string;
  notice?: string;
  ownerId?: string;
  uv?: number;
  onlineCount?: number;
  pluginInstanceInfoList?: GetRoomDetailResponseBodyResultPluginInstanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      ownerId: 'OwnerId',
      uv: 'Uv',
      onlineCount: 'OnlineCount',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      title: 'string',
      notice: 'string',
      ownerId: 'string',
      uv: 'number',
      onlineCount: 'number',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': GetRoomDetailResponseBodyResultPluginInstanceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListRequestRequest extends $tea.Model {
  domain?: string;
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListResponseBodyResultRoomInfoList extends $tea.Model {
  roomId?: string;
  title?: string;
  ownerId?: string;
  bizType?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      title: 'Title',
      ownerId: 'OwnerId',
      bizType: 'BizType',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      title: 'string',
      ownerId: 'string',
      bizType: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomListResponseBodyResult extends $tea.Model {
  total?: number;
  hasMore?: boolean;
  roomInfoList?: GetRoomListResponseBodyResultRoomInfoList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      hasMore: 'HasMore',
      roomInfoList: 'RoomInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      hasMore: 'boolean',
      roomInfoList: { 'type': 'array', 'itemType': GetRoomListResponseBodyResultRoomInfoList },
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
    this._endpoint = this.getEndpoint("imp-room", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getLoginTokenWithOptions(tmpReq: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.requestParams))) {
      request.requestParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.requestParams), "RequestParams", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoginTokenResponse>(await this.doRPCRequest("GetLoginToken", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginTokenResponse({}));
  }

  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoomResponse>(await this.doRPCRequest("CreateRoom", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async destroyRoomWithOptions(request: DestroyRoomRequest, runtime: $Util.RuntimeOptions): Promise<DestroyRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DestroyRoomResponse>(await this.doRPCRequest("DestroyRoom", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DestroyRoomResponse({}));
  }

  async destroyRoom(request: DestroyRoomRequest): Promise<DestroyRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyRoomWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async getRoomDetailWithOptions(request: GetRoomDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetRoomDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoomDetailResponse>(await this.doRPCRequest("GetRoomDetail", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoomDetailResponse({}));
  }

  async getRoomDetail(request: GetRoomDetailRequest): Promise<GetRoomDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoomDetailWithOptions(request, runtime);
  }

  async getRoomListWithOptions(request: GetRoomListRequest, runtime: $Util.RuntimeOptions): Promise<GetRoomListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoomListResponse>(await this.doRPCRequest("GetRoomList", "2021-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoomListResponse({}));
  }

  async getRoomList(request: GetRoomListRequest): Promise<GetRoomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoomListWithOptions(request, runtime);
  }

}

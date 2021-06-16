// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteSessionResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteSessionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeartBeatRequest extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      sessionStatus: 'sessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      sessionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeartBeatResponseBody extends $tea.Model {
  code?: string;
  data?: HeartBeatResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HeartBeatResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeartBeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HeartBeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HeartBeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: UnRegisterInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UnRegisterInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnRegisterInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnRegisterInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionRequest extends $tea.Model {
  sessionName?: string;
  static names(): { [key: string]: string } {
    return {
      sessionName: 'sessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSessionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceRequest extends $tea.Model {
  instanceId?: string;
  sessionId?: string;
  instanceType?: string;
  source?: string;
  description?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      sessionId: 'sessionId',
      instanceType: 'instanceType',
      source: 'source',
      description: 'description',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
      instanceType: 'string',
      source: 'string',
      description: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: RegisterInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RegisterInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponseBody extends $tea.Model {
  code?: string;
  data?: GetSessionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
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

export class ListSessionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListSessionsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSessionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionResponseBodyData extends $tea.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
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

export class GetInstanceResponseBodyData extends $tea.Model {
  desc?: string;
  instanceId?: string;
  params?: string;
  proxyIp?: string;
  proxyPrivateKey?: string;
  proxyRemotePort?: string;
  remotePrivateKey?: string;
  remotePubKey?: string;
  sessionId?: string;
  source?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      instanceId: 'instanceId',
      params: 'params',
      proxyIp: 'proxyIp',
      proxyPrivateKey: 'proxyPrivateKey',
      proxyRemotePort: 'proxyRemotePort',
      remotePrivateKey: 'remotePrivateKey',
      remotePubKey: 'remotePubKey',
      sessionId: 'sessionId',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      instanceId: 'string',
      params: 'string',
      proxyIp: 'string',
      proxyPrivateKey: 'string',
      proxyRemotePort: 'string',
      remotePrivateKey: 'string',
      remotePubKey: 'string',
      sessionId: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeartBeatResponseBodyData extends $tea.Model {
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      sessionStatus: 'sessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterInstanceResponseBodyData extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponseBodyData extends $tea.Model {
  localInstanceId?: string;
  remoteInstanceId?: string;
  sessionId?: string;
  sessionName?: string;
  static names(): { [key: string]: string } {
    return {
      localInstanceId: 'localInstanceId',
      remoteInstanceId: 'remoteInstanceId',
      sessionId: 'sessionId',
      sessionName: 'sessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localInstanceId: 'string',
      remoteInstanceId: 'string',
      sessionId: 'string',
      sessionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponseBodyData extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponseBodyData extends $tea.Model {
  localInstanceId?: string;
  proxyId?: string;
  proxyIp?: string;
  proxyRemotePort?: string;
  remoteInstanceId?: string;
  sessionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      localInstanceId: 'localInstanceId',
      proxyId: 'proxyId',
      proxyIp: 'proxyIp',
      proxyRemotePort: 'proxyRemotePort',
      remoteInstanceId: 'remoteInstanceId',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localInstanceId: 'string',
      proxyId: 'string',
      proxyIp: 'string',
      proxyRemotePort: 'string',
      remoteInstanceId: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsResponseBodyDataSessions extends $tea.Model {
  localInstanceId?: string;
  proxyId?: string;
  proxyIp?: string;
  proxyRemotePort?: string;
  remoteInstanceId?: string;
  sessionId?: string;
  status?: string;
  sessionName?: string;
  static names(): { [key: string]: string } {
    return {
      localInstanceId: 'localInstanceId',
      proxyId: 'proxyId',
      proxyIp: 'proxyIp',
      proxyRemotePort: 'proxyRemotePort',
      remoteInstanceId: 'remoteInstanceId',
      sessionId: 'sessionId',
      status: 'status',
      sessionName: 'sessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localInstanceId: 'string',
      proxyId: 'string',
      proxyIp: 'string',
      proxyRemotePort: 'string',
      remoteInstanceId: 'string',
      sessionId: 'string',
      status: 'string',
      sessionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsResponseBodyData extends $tea.Model {
  hasNextPage?: boolean;
  nextPageNum?: number;
  nextPageSize?: number;
  sessions?: ListSessionsResponseBodyDataSessions[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasNextPage: 'hasNextPage',
      nextPageNum: 'nextPageNum',
      nextPageSize: 'nextPageSize',
      sessions: 'sessions',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNextPage: 'boolean',
      nextPageNum: 'number',
      nextPageSize: 'number',
      sessions: { 'type': 'array', 'itemType': ListSessionsResponseBodyDataSessions },
      total: 'number',
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
    this._endpoint = this.getEndpoint("tunnel-service", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async deleteSession(sessionId: string): Promise<DeleteSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSessionWithOptions(sessionId, headers, runtime);
  }

  async deleteSessionWithOptions(sessionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSessionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteSessionResponse>(await this.doROARequest("DeleteSession", "2021-05-09", "HTTPS", "DELETE", "AK", `/v1/sessions/${sessionId}`, "json", req, runtime), new DeleteSessionResponse({}));
  }

  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceResponse>(await this.doROARequest("GetInstance", "2021-05-09", "HTTPS", "GET", "AK", `/v1/instances/${instanceId}`, "json", req, runtime), new GetInstanceResponse({}));
  }

  async heartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.heartBeatWithOptions(request, headers, runtime);
  }

  async heartBeatWithOptions(request: HeartBeatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<HeartBeatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.sessionStatus)) {
      body["sessionStatus"] = request.sessionStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<HeartBeatResponse>(await this.doROARequest("HeartBeat", "2021-05-09", "HTTPS", "PUT", "AK", `/v1/sessions/`, "json", req, runtime), new HeartBeatResponse({}));
  }

  async unRegisterInstance(instanceId: string): Promise<UnRegisterInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unRegisterInstanceWithOptions(instanceId, headers, runtime);
  }

  async unRegisterInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnRegisterInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UnRegisterInstanceResponse>(await this.doROARequest("UnRegisterInstance", "2021-05-09", "HTTPS", "PUT", "AK", `/v1/instances/${instanceId}`, "json", req, runtime), new UnRegisterInstanceResponse({}));
  }

  async createSession(request: CreateSessionRequest): Promise<CreateSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSessionWithOptions(request, headers, runtime);
  }

  async createSessionWithOptions(request: CreateSessionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sessionName)) {
      body["sessionName"] = request.sessionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateSessionResponse>(await this.doROARequest("CreateSession", "2021-05-09", "HTTPS", "POST", "AK", `/v1/sessions/`, "json", req, runtime), new CreateSessionResponse({}));
  }

  async registerInstance(request: RegisterInstanceRequest): Promise<RegisterInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.registerInstanceWithOptions(request, headers, runtime);
  }

  async registerInstanceWithOptions(request: RegisterInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RegisterInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<RegisterInstanceResponse>(await this.doROARequest("RegisterInstance", "2021-05-09", "HTTPS", "POST", "AK", `/v1/instances/`, "json", req, runtime), new RegisterInstanceResponse({}));
  }

  async getSession(sessionId: string): Promise<GetSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionWithOptions(sessionId, headers, runtime);
  }

  async getSessionWithOptions(sessionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSessionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSessionResponse>(await this.doROARequest("GetSession", "2021-05-09", "HTTPS", "GET", "AK", `/v1/sessions/${sessionId}`, "json", req, runtime), new GetSessionResponse({}));
  }

  async listSessions(request: ListSessionsRequest): Promise<ListSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionsWithOptions(request, headers, runtime);
  }

  async listSessionsWithOptions(request: ListSessionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSessionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSessionsResponse>(await this.doROARequest("ListSessions", "2021-05-09", "HTTPS", "GET", "AK", `/v1/sessions/`, "json", req, runtime), new ListSessionsResponse({}));
  }

}

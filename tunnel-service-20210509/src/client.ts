// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
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

export class HeartBeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
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

export class CreateSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
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

export class RegisterInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
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

export class ListSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
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
    return $tea.cast<DeleteSessionResponse>(await this.doROARequest("DeleteSession", "2021-05-09", "HTTPS", "DELETE", "AK", `/v1/sessions/${sessionId}`, "string", req, runtime), new DeleteSessionResponse({}));
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
    return $tea.cast<GetInstanceResponse>(await this.doROARequest("GetInstance", "2021-05-09", "HTTPS", "GET", "AK", `/v1/instances/${instanceId}`, "string", req, runtime), new GetInstanceResponse({}));
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
    return $tea.cast<HeartBeatResponse>(await this.doROARequest("HeartBeat", "2021-05-09", "HTTPS", "PUT", "AK", `/v1/sessions/`, "string", req, runtime), new HeartBeatResponse({}));
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
    return $tea.cast<UnRegisterInstanceResponse>(await this.doROARequest("UnRegisterInstance", "2021-05-09", "HTTPS", "PUT", "AK", `/v1/instances/${instanceId}`, "string", req, runtime), new UnRegisterInstanceResponse({}));
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
    return $tea.cast<CreateSessionResponse>(await this.doROARequest("CreateSession", "2021-05-09", "HTTPS", "POST", "AK", `/v1/sessions/`, "string", req, runtime), new CreateSessionResponse({}));
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
    return $tea.cast<RegisterInstanceResponse>(await this.doROARequest("RegisterInstance", "2021-05-09", "HTTPS", "POST", "AK", `/v1/instances/`, "string", req, runtime), new RegisterInstanceResponse({}));
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
    return $tea.cast<GetSessionResponse>(await this.doROARequest("GetSession", "2021-05-09", "HTTPS", "GET", "AK", `/v1/sessions/${sessionId}`, "string", req, runtime), new GetSessionResponse({}));
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
    return $tea.cast<ListSessionsResponse>(await this.doROARequest("ListSessions", "2021-05-09", "HTTPS", "GET", "AK", `/v1/sessions/`, "string", req, runtime), new ListSessionsResponse({}));
  }

}

// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuthDiagnosisRequest extends $tea.Model {
  instances?: AuthDiagnosisRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': AuthDiagnosisRequestInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponseBody extends $tea.Model {
  code?: string;
  data?: any;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthDiagnosisResponseBody;
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
      body: AuthDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseRequest extends $tea.Model {
  llmParamString?: string;
  static names(): { [key: string]: string } {
    return {
      llmParamString: 'llmParamString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmParamString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  massage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      massage: 'massage',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      massage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCopilotResponseResponseBody;
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
      body: GenerateCopilotResponseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetDiagnosisResultResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDiagnosisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagnosisResultResponseBody;
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
      body: GetDiagnosisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisRequest extends $tea.Model {
  channel?: string;
  params?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBody extends $tea.Model {
  code?: string;
  data?: InvokeDiagnosisResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InvokeDiagnosisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeDiagnosisResponseBody;
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
      body: InvokeDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisRequestInstances extends $tea.Model {
  instance?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBodyData extends $tea.Model {
  code?: number;
  command?: any;
  errMsg?: string;
  params?: any;
  result?: any;
  serviceName?: string;
  status?: string;
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      command: 'command',
      errMsg: 'err_msg',
      params: 'params',
      result: 'result',
      serviceName: 'service_name',
      status: 'status',
      taskId: 'task_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      command: 'any',
      errMsg: 'string',
      params: 'any',
      result: 'any',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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
    this._endpoint = this.getEndpoint("sysom", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async authDiagnosisWithOptions(request: AuthDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthDiagnosisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/auth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuthDiagnosisResponse>(await this.callApi(params, req, runtime), new AuthDiagnosisResponse({}));
  }

  async authDiagnosis(request: AuthDiagnosisRequest): Promise<AuthDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authDiagnosisWithOptions(request, headers, runtime);
  }

  async generateCopilotResponseWithOptions(request: GenerateCopilotResponseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateCopilotResponseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateCopilotResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateCopilotResponseResponse>(await this.callApi(params, req, runtime), new GenerateCopilotResponseResponse({}));
  }

  async generateCopilotResponse(request: GenerateCopilotResponseRequest): Promise<GenerateCopilotResponseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotResponseWithOptions(request, headers, runtime);
  }

  async getDiagnosisResultWithOptions(request: GetDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnosisResult",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/get_diagnosis_results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetDiagnosisResultResponse({}));
  }

  async getDiagnosisResult(request: GetDiagnosisResultRequest): Promise<GetDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDiagnosisResultWithOptions(request, headers, runtime);
  }

  async invokeDiagnosisWithOptions(request: InvokeDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InvokeDiagnosisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["service_name"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvokeDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/invoke_diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvokeDiagnosisResponse>(await this.callApi(params, req, runtime), new InvokeDiagnosisResponse({}));
  }

  async invokeDiagnosis(request: InvokeDiagnosisRequest): Promise<InvokeDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeDiagnosisWithOptions(request, headers, runtime);
  }

}

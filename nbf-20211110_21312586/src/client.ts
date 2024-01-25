// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApiTestRequest extends $tea.Model {
  testCmd?: string;
  static names(): { [key: string]: string } {
    return {
      testCmd: 'testCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiTestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildSdkRequest extends $tea.Model {
  buildCmd?: string;
  static names(): { [key: string]: string } {
    return {
      buildCmd: 'buildCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildSdkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndReleaseApiRequest extends $tea.Model {
  creatApiCmd?: string;
  static names(): { [key: string]: string } {
    return {
      creatApiCmd: 'creatApiCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatApiCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndReleaseApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSdkVersionRequest extends $tea.Model {
  createSdkCmd?: string;
  static names(): { [key: string]: string } {
    return {
      createSdkCmd: 'createSdkCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSdkCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSdkVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiRequest extends $tea.Model {
  apiExternalId?: string;
  static names(): { [key: string]: string } {
    return {
      apiExternalId: 'apiExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiExternalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class GetResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiGenericProxyResponseBody extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiGenericProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenApiGenericProxyResponseBody;
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
      body: OpenApiGenericProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckRequest extends $tea.Model {
  apiSchemaDTO?: string;
  groupVersionExtraInfo?: string;
  namespaceExternalId?: string;
  static names(): { [key: string]: string } {
    return {
      apiSchemaDTO: 'apiSchemaDTO',
      groupVersionExtraInfo: 'groupVersionExtraInfo',
      namespaceExternalId: 'namespaceExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchemaDTO: 'string',
      groupVersionExtraInfo: 'string',
      namespaceExternalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSdkRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class PublishSdkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SerializeApiRequest extends $tea.Model {
  apiSchemaDTO?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiSchemaDTO: 'apiSchemaDTO',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchemaDTO: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SerializeApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndReleaseApiRequest extends $tea.Model {
  updateApiCmd?: string;
  static names(): { [key: string]: string } {
    return {
      updateApiCmd: 'updateApiCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateApiCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndReleaseApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
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
    this._endpoint = this.getEndpoint("nbf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async apiTestWithOptions(request: ApiTestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ApiTestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.testCmd)) {
      query["testCmd"] = request.testCmd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApiTest",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/apiTest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<ApiTestResponse>(await this.callApi(params, req, runtime), new ApiTestResponse({}));
  }

  async apiTest(request: ApiTestRequest): Promise<ApiTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.apiTestWithOptions(request, headers, runtime);
  }

  async buildSdkWithOptions(request: BuildSdkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BuildSdkResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildCmd)) {
      query["buildCmd"] = request.buildCmd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BuildSdk",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/buildSdk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<BuildSdkResponse>(await this.callApi(params, req, runtime), new BuildSdkResponse({}));
  }

  async buildSdk(request: BuildSdkRequest): Promise<BuildSdkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildSdkWithOptions(request, headers, runtime);
  }

  async createAndReleaseApiWithOptions(request: CreateAndReleaseApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAndReleaseApiResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creatApiCmd)) {
      query["creatApiCmd"] = request.creatApiCmd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndReleaseApi",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/createAndReleaseApi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<CreateAndReleaseApiResponse>(await this.callApi(params, req, runtime), new CreateAndReleaseApiResponse({}));
  }

  async createAndReleaseApi(request: CreateAndReleaseApiRequest): Promise<CreateAndReleaseApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndReleaseApiWithOptions(request, headers, runtime);
  }

  async createSdkVersionWithOptions(request: CreateSdkVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSdkVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createSdkCmd)) {
      query["createSdkCmd"] = request.createSdkCmd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSdkVersion",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/createSdkVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<CreateSdkVersionResponse>(await this.callApi(params, req, runtime), new CreateSdkVersionResponse({}));
  }

  async createSdkVersion(request: CreateSdkVersionRequest): Promise<CreateSdkVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSdkVersionWithOptions(request, headers, runtime);
  }

  async deleteApiWithOptions(request: DeleteApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApiResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiExternalId)) {
      query["apiExternalId"] = request.apiExternalId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApi",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/deleteApi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<DeleteApiResponse>(await this.callApi(params, req, runtime), new DeleteApiResponse({}));
  }

  async deleteApi(request: DeleteApiRequest): Promise<DeleteApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiWithOptions(request, headers, runtime);
  }

  async getResultWithOptions(request: GetResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResult",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/getResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetResultResponse>(await this.callApi(params, req, runtime), new GetResultResponse({}));
  }

  async getResult(request: GetResultRequest): Promise<GetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResultWithOptions(request, headers, runtime);
  }

  async openApiGenericProxyWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenApiGenericProxyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OpenApiGenericProxy",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/openApiGenericProxy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OpenApiGenericProxyResponse>(await this.callApi(params, req, runtime), new OpenApiGenericProxyResponse({}));
  }

  async openApiGenericProxy(): Promise<OpenApiGenericProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openApiGenericProxyWithOptions(headers, runtime);
  }

  async preCheckWithOptions(request: PreCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreCheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiSchemaDTO)) {
      query["apiSchemaDTO"] = request.apiSchemaDTO;
    }

    if (!Util.isUnset(request.groupVersionExtraInfo)) {
      query["groupVersionExtraInfo"] = request.groupVersionExtraInfo;
    }

    if (!Util.isUnset(request.namespaceExternalId)) {
      query["namespaceExternalId"] = request.namespaceExternalId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreCheck",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/preCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<PreCheckResponse>(await this.callApi(params, req, runtime), new PreCheckResponse({}));
  }

  async preCheck(request: PreCheckRequest): Promise<PreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.preCheckWithOptions(request, headers, runtime);
  }

  async publishSdkWithOptions(request: PublishSdkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishSdkResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishSdk",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/publishSdk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<PublishSdkResponse>(await this.callApi(params, req, runtime), new PublishSdkResponse({}));
  }

  async publishSdk(request: PublishSdkRequest): Promise<PublishSdkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishSdkWithOptions(request, headers, runtime);
  }

  async serializeApiWithOptions(request: SerializeApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SerializeApiResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiSchemaDTO)) {
      query["apiSchemaDTO"] = request.apiSchemaDTO;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SerializeApi",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/serializeApi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<SerializeApiResponse>(await this.callApi(params, req, runtime), new SerializeApiResponse({}));
  }

  async serializeApi(request: SerializeApiRequest): Promise<SerializeApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.serializeApiWithOptions(request, headers, runtime);
  }

  async updateAndReleaseApiWithOptions(request: UpdateAndReleaseApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAndReleaseApiResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateApiCmd)) {
      query["updateApiCmd"] = request.updateApiCmd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAndReleaseApi",
      version: "2021-11-10_21-31-25-86",
      protocol: "HTTPS",
      pathname: `/nbf_gateway_inner/1_0_0/updateAndReleaseApi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<UpdateAndReleaseApiResponse>(await this.callApi(params, req, runtime), new UpdateAndReleaseApiResponse({}));
  }

  async updateAndReleaseApi(request: UpdateAndReleaseApiRequest): Promise<UpdateAndReleaseApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndReleaseApiWithOptions(request, headers, runtime);
  }

}

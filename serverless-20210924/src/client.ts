// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Environment extends $tea.Model {
  creationTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  name?: string;
  spec?: EnvironmentSpec;
  status?: EnvironmentStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creationTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      name: 'string',
      spec: EnvironmentSpec,
      status: EnvironmentStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $tea.Model {
  creationTime?: string;
  description?: string;
  generation?: number;
  kind?: string;
  name?: string;
  spec?: ServiceSpec;
  status?: ServiceStatus;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creationTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      name: 'string',
      spec: ServiceSpec,
      status: ServiceStatus,
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StsCredentials extends $tea.Model {
  accessKeyId?: string;
  expirationTime?: string;
  kind?: string;
  secretAccessKey?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      expirationTime: 'expirationTime',
      kind: 'kind',
      secretAccessKey: 'secretAccessKey',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expirationTime: 'string',
      kind: 'string',
      secretAccessKey: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Environment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Service;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Environment[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': Environment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Service[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': Service },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentRequest extends $tea.Model {
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Environment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Environment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutServiceRequest extends $tea.Model {
  body?: Service;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Service;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentSpec extends $tea.Model {
  region?: string;
  roleArn?: string;
  template?: string;
  templateVariables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      roleArn: 'roleArn',
      template: 'template',
      templateVariables: 'templateVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      roleArn: 'string',
      template: 'string',
      templateVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentStatus extends $tea.Model {
  credentials?: StsCredentials;
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  output?: { [key: string]: any };
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      output: 'output',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: StsCredentials,
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceSpec extends $tea.Model {
  environment?: string;
  roleArn?: string;
  template?: string;
  templateVariables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      roleArn: 'roleArn',
      template: 'template',
      templateVariables: 'templateVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      roleArn: 'string',
      template: 'string',
      templateVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceStatus extends $tea.Model {
  credentials?: StsCredentials;
  message?: string;
  observedGeneration?: number;
  observedTime?: string;
  output?: { [key: string]: any };
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
      message: 'message',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      output: 'output',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: StsCredentials,
      message: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phase: 'string',
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
    this._endpoint = this.getEndpoint("serverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getEnvironment(name: string): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(name, headers, runtime);
  }

  async getEnvironmentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  async getService(name: string): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(name, headers, runtime);
  }

  async getServiceWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async listEnvironments(): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(headers, runtime);
  }

  async listEnvironmentsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  async listServices(): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(headers, runtime);
  }

  async listServicesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async putEnvironment(name: string, request: PutEnvironmentRequest): Promise<PutEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putEnvironmentWithOptions(name, request, headers, runtime);
  }

  async putEnvironmentWithOptions(name: string, request: PutEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutEnvironmentResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "PutEnvironment",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/environments/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutEnvironmentResponse>(await this.callApi(params, req, runtime), new PutEnvironmentResponse({}));
  }

  async putService(name: string, request: PutServiceRequest): Promise<PutServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putServiceWithOptions(name, request, headers, runtime);
  }

  async putServiceWithOptions(name: string, request: PutServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutServiceResponse> {
    Util.validateModel(request);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap($tea.toMap(request.body)),
    });
    let params = new $OpenApi.Params({
      action: "PutService",
      version: "2021-09-24",
      protocol: "HTTPS",
      pathname: `/apis/serverlessdeployment/v1/services/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutServiceResponse>(await this.callApi(params, req, runtime), new PutServiceResponse({}));
  }

}

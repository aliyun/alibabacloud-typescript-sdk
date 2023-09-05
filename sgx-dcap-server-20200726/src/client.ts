// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetQeIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class GetQveIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class GetTcbInfoRequest extends $tea.Model {
  fmspc?: string;
  static names(): { [key: string]: string } {
    return {
      fmspc: 'fmspc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fmspc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcbInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class PckCrlRequest extends $tea.Model {
  ca?: string;
  static names(): { [key: string]: string } {
    return {
      ca: 'ca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ca: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PckCrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class RootCaCrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class SimplePackagePckCertRequest extends $tea.Model {
  cpusvn?: string;
  encryptedPpid?: string;
  pceid?: string;
  pcesvn?: string;
  qeid?: string;
  static names(): { [key: string]: string } {
    return {
      cpusvn: 'cpusvn',
      encryptedPpid: 'encrypted_ppid',
      pceid: 'pceid',
      pcesvn: 'pcesvn',
      qeid: 'qeid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpusvn: 'string',
      encryptedPpid: 'string',
      pceid: 'string',
      pcesvn: 'string',
      qeid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimplePackagePckCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sgx-dcap-server", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getQeIdentityWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQeIdentityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetQeIdentity",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/qe/identity`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetQeIdentityResponse>(await this.callApi(params, req, runtime), new GetQeIdentityResponse({}));
  }

  async getQeIdentity(): Promise<GetQeIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQeIdentityWithOptions(headers, runtime);
  }

  async getQveIdentityWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQveIdentityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetQveIdentity",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/qve/identity`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetQveIdentityResponse>(await this.callApi(params, req, runtime), new GetQveIdentityResponse({}));
  }

  async getQveIdentity(): Promise<GetQveIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQveIdentityWithOptions(headers, runtime);
  }

  async getTcbInfoWithOptions(request: GetTcbInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTcbInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fmspc)) {
      query["fmspc"] = request.fmspc;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTcbInfo",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/tcb`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetTcbInfoResponse>(await this.callApi(params, req, runtime), new GetTcbInfoResponse({}));
  }

  async getTcbInfo(request: GetTcbInfoRequest): Promise<GetTcbInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTcbInfoWithOptions(request, headers, runtime);
  }

  async pckCrlWithOptions(request: PckCrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PckCrlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ca)) {
      query["ca"] = request.ca;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PckCrl",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/pckcrl`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<PckCrlResponse>(await this.callApi(params, req, runtime), new PckCrlResponse({}));
  }

  async pckCrl(request: PckCrlRequest): Promise<PckCrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pckCrlWithOptions(request, headers, runtime);
  }

  async rootCaCrlWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RootCaCrlResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RootCaCrl",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/rootcacrl`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<RootCaCrlResponse>(await this.callApi(params, req, runtime), new RootCaCrlResponse({}));
  }

  async rootCaCrl(): Promise<RootCaCrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rootCaCrlWithOptions(headers, runtime);
  }

  async simplePackagePckCertWithOptions(request: SimplePackagePckCertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SimplePackagePckCertResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpusvn)) {
      query["cpusvn"] = request.cpusvn;
    }

    if (!Util.isUnset(request.encryptedPpid)) {
      query["encrypted_ppid"] = request.encryptedPpid;
    }

    if (!Util.isUnset(request.pceid)) {
      query["pceid"] = request.pceid;
    }

    if (!Util.isUnset(request.pcesvn)) {
      query["pcesvn"] = request.pcesvn;
    }

    if (!Util.isUnset(request.qeid)) {
      query["qeid"] = request.qeid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SimplePackagePckCert",
      version: "2020-07-26",
      protocol: "HTTPS",
      pathname: `/sgx/certification/v3/pckcert`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<SimplePackagePckCertResponse>(await this.callApi(params, req, runtime), new SimplePackagePckCertResponse({}));
  }

  async simplePackagePckCert(request: SimplePackagePckCertRequest): Promise<SimplePackagePckCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.simplePackagePckCertWithOptions(request, headers, runtime);
  }

}

// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeDomainReportRequest extends $tea.Model {
  domain?: string;
  field?: string;
  serviceLang?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      field: 'Field',
      serviceLang: 'ServiceLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      field: 'string',
      serviceLang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReportResponseBody extends $tea.Model {
  attackCntByThreatType?: string;
  attackPreferenceTop5?: string;
  basic?: string;
  confidence?: string;
  context?: string;
  domain?: string;
  group?: string;
  intelligences?: string;
  requestId?: string;
  scenario?: string;
  sslCert?: string;
  threatLevel?: string;
  threatTypes?: string;
  whois?: string;
  static names(): { [key: string]: string } {
    return {
      attackCntByThreatType: 'AttackCntByThreatType',
      attackPreferenceTop5: 'AttackPreferenceTop5',
      basic: 'Basic',
      confidence: 'Confidence',
      context: 'Context',
      domain: 'Domain',
      group: 'Group',
      intelligences: 'Intelligences',
      requestId: 'RequestId',
      scenario: 'Scenario',
      sslCert: 'SslCert',
      threatLevel: 'ThreatLevel',
      threatTypes: 'ThreatTypes',
      whois: 'Whois',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCntByThreatType: 'string',
      attackPreferenceTop5: 'string',
      basic: 'string',
      confidence: 'string',
      context: 'string',
      domain: 'string',
      group: 'string',
      intelligences: 'string',
      requestId: 'string',
      scenario: 'string',
      sslCert: 'string',
      threatLevel: 'string',
      threatTypes: 'string',
      whois: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainReportResponseBody;
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
      body: DescribeDomainReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileReportRequest extends $tea.Model {
  field?: string;
  fileHash?: string;
  serviceLang?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      fileHash: 'FileHash',
      serviceLang: 'ServiceLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      fileHash: 'string',
      serviceLang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileReportResponseBody extends $tea.Model {
  basic?: string;
  fileHash?: string;
  intelligences?: string;
  requestId?: string;
  sandbox?: string;
  threatLevel?: string;
  threatTypes?: string;
  static names(): { [key: string]: string } {
    return {
      basic: 'Basic',
      fileHash: 'FileHash',
      intelligences: 'Intelligences',
      requestId: 'RequestId',
      sandbox: 'Sandbox',
      threatLevel: 'ThreatLevel',
      threatTypes: 'ThreatTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: 'string',
      fileHash: 'string',
      intelligences: 'string',
      requestId: 'string',
      sandbox: 'string',
      threatLevel: 'string',
      threatTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileReportResponseBody;
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
      body: DescribeFileReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpReportRequest extends $tea.Model {
  field?: string;
  ip?: string;
  serviceLang?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      ip: 'Ip',
      serviceLang: 'ServiceLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      ip: 'string',
      serviceLang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpReportResponseBody extends $tea.Model {
  attackCntByThreatType?: string;
  attackPreferenceTop5?: string;
  confidence?: string;
  context?: string;
  group?: string;
  intelligences?: string;
  ip?: string;
  requestId?: string;
  scenario?: string;
  threatLevel?: string;
  threatTypes?: string;
  whois?: string;
  static names(): { [key: string]: string } {
    return {
      attackCntByThreatType: 'AttackCntByThreatType',
      attackPreferenceTop5: 'AttackPreferenceTop5',
      confidence: 'Confidence',
      context: 'Context',
      group: 'Group',
      intelligences: 'Intelligences',
      ip: 'Ip',
      requestId: 'RequestId',
      scenario: 'Scenario',
      threatLevel: 'ThreatLevel',
      threatTypes: 'ThreatTypes',
      whois: 'Whois',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCntByThreatType: 'string',
      attackPreferenceTop5: 'string',
      confidence: 'string',
      context: 'string',
      group: 'string',
      intelligences: 'string',
      ip: 'string',
      requestId: 'string',
      scenario: 'string',
      threatLevel: 'string',
      threatTypes: 'string',
      whois: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpReportResponseBody;
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
      body: DescribeIpReportResponseBody,
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
    this._endpoint = this.getEndpoint("sasti", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeDomainReportWithOptions(request: DescribeDomainReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.serviceLang)) {
      query["ServiceLang"] = request.serviceLang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainReport",
      version: "2020-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainReportResponse>(await this.callApi(params, req, runtime), new DescribeDomainReportResponse({}));
  }

  async describeDomainReport(request: DescribeDomainReportRequest): Promise<DescribeDomainReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainReportWithOptions(request, runtime);
  }

  async describeFileReportWithOptions(request: DescribeFileReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.fileHash)) {
      query["FileHash"] = request.fileHash;
    }

    if (!Util.isUnset(request.serviceLang)) {
      query["ServiceLang"] = request.serviceLang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFileReport",
      version: "2020-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFileReportResponse>(await this.callApi(params, req, runtime), new DescribeFileReportResponse({}));
  }

  async describeFileReport(request: DescribeFileReportRequest): Promise<DescribeFileReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileReportWithOptions(request, runtime);
  }

  async describeIpReportWithOptions(request: DescribeIpReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.serviceLang)) {
      query["ServiceLang"] = request.serviceLang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpReport",
      version: "2020-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpReportResponse>(await this.callApi(params, req, runtime), new DescribeIpReportResponse({}));
  }

  async describeIpReport(request: DescribeIpReportRequest): Promise<DescribeIpReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpReportWithOptions(request, runtime);
  }

}

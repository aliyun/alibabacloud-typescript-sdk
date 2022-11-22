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
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      field: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainReportResponseBody;
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

}

// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class NlpAddressNormalizationRequest extends $tea.Model {
  cityStdManual?: string;
  /**
   * @example
   * BACOLOR
   */
  cityStr?: string;
  clientToken?: string;
  districtStdManual?: string;
  /**
   * @example
   * 10671
   */
  instanceId?: string;
  provinceStdManual?: string;
  /**
   * @example
   * PAMPANGA
   */
  provinceStr?: string;
  /**
   * @example
   * 350 Magliman, Bacolor, Pampanga AQUA MALTA Refilling Station
   */
  queryStr?: string;
  static names(): { [key: string]: string } {
    return {
      cityStdManual: 'CityStdManual',
      cityStr: 'CityStr',
      clientToken: 'ClientToken',
      districtStdManual: 'DistrictStdManual',
      instanceId: 'InstanceId',
      provinceStdManual: 'ProvinceStdManual',
      provinceStr: 'ProvinceStr',
      queryStr: 'QueryStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityStdManual: 'string',
      cityStr: 'string',
      clientToken: 'string',
      districtStdManual: 'string',
      instanceId: 'string',
      provinceStdManual: 'string',
      provinceStr: 'string',
      queryStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NlpAddressNormalizationResponseBody extends $tea.Model {
  code?: string;
  data?: NlpAddressNormalizationResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 99540D1A-9112-56E5-8DCC-1A2603F4C500
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1701051540592
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: NlpAddressNormalizationResponseBodyData,
      message: 'string',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NlpAddressNormalizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NlpAddressNormalizationResponseBody;
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
      body: NlpAddressNormalizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NlpAddressNormalizationResponseBodyData extends $tea.Model {
  cityStd?: string;
  districtStd?: string;
  provinceStd?: string;
  results?: string[];
  statusEs?: string;
  static names(): { [key: string]: string } {
    return {
      cityStd: 'CityStd',
      districtStd: 'DistrictStd',
      provinceStd: 'ProvinceStd',
      results: 'Results',
      statusEs: 'StatusEs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityStd: 'string',
      districtStd: 'string',
      provinceStd: 'string',
      results: { 'type': 'array', 'itemType': 'string' },
      statusEs: 'string',
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
    this._endpoint = this.getEndpoint("superappnlp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 地址解析
   * 
   * @param request - NlpAddressNormalizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NlpAddressNormalizationResponse
   */
  async nlpAddressNormalizationWithOptions(request: NlpAddressNormalizationRequest, runtime: $Util.RuntimeOptions): Promise<NlpAddressNormalizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cityStdManual)) {
      query["CityStdManual"] = request.cityStdManual;
    }

    if (!Util.isUnset(request.cityStr)) {
      query["CityStr"] = request.cityStr;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.districtStdManual)) {
      query["DistrictStdManual"] = request.districtStdManual;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.provinceStdManual)) {
      query["ProvinceStdManual"] = request.provinceStdManual;
    }

    if (!Util.isUnset(request.provinceStr)) {
      query["ProvinceStr"] = request.provinceStr;
    }

    if (!Util.isUnset(request.queryStr)) {
      query["QueryStr"] = request.queryStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NlpAddressNormalization",
      version: "2024-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NlpAddressNormalizationResponse>(await this.callApi(params, req, runtime), new NlpAddressNormalizationResponse({}));
  }

  /**
   * 地址解析
   * 
   * @param request - NlpAddressNormalizationRequest
   * @returns NlpAddressNormalizationResponse
   */
  async nlpAddressNormalization(request: NlpAddressNormalizationRequest): Promise<NlpAddressNormalizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.nlpAddressNormalizationWithOptions(request, runtime);
  }

}

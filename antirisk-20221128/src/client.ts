// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetRealTimeRiskInfoRequest extends $tea.Model {
  atoken?: string;
  dataSourceId?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      atoken: 'atoken',
      dataSourceId: 'dataSourceId',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atoken: 'string',
      dataSourceId: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealTimeRiskInfoResponseBody extends $tea.Model {
  msg?: string;
  code?: number;
  data?: GetRealTimeRiskInfoResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      code: 'number',
      data: GetRealTimeRiskInfoResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealTimeRiskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRealTimeRiskInfoResponseBody;
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
      body: GetRealTimeRiskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagByAtokenRequest extends $tea.Model {
  atoken?: string;
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      atoken: 'atoken',
      dataSourceId: 'dataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atoken: 'string',
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagByAtokenResponseBody extends $tea.Model {
  msg?: string;
  code?: number;
  data?: GetZidTagByAtokenResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      code: 'number',
      data: GetZidTagByAtokenResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagByAtokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetZidTagByAtokenResponseBody;
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
      body: GetZidTagByAtokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagScoreByAtokenRequest extends $tea.Model {
  atoken?: string;
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      atoken: 'atoken',
      dataSourceId: 'dataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atoken: 'string',
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagScoreByAtokenResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  data?: GetZidTagScoreByAtokenResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      data: GetZidTagScoreByAtokenResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagScoreByAtokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetZidTagScoreByAtokenResponseBody;
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
      body: GetZidTagScoreByAtokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsRequest extends $tea.Model {
  channel?: string;
  dataSourceId?: string;
  end?: string;
  isAllChannel?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      dataSourceId: 'dataSourceId',
      end: 'end',
      isAllChannel: 'isAllChannel',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      dataSourceId: 'string',
      end: 'string',
      isAllChannel: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsResponseBody extends $tea.Model {
  msg?: string;
  code?: number;
  data?: ListChannelRiskDetailsResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      code: 'number',
      data: ListChannelRiskDetailsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChannelRiskDetailsResponseBody;
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
      body: ListChannelRiskDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealTimeRiskInfoResponseBodyData extends $tea.Model {
  appChannel?: string;
  fakeDevice?: string;
  idfa?: string;
  oaid?: string;
  proxyDevice?: string;
  riskLevel?: string;
  riskScore?: string;
  zid?: string;
  static names(): { [key: string]: string } {
    return {
      appChannel: 'appChannel',
      fakeDevice: 'fakeDevice',
      idfa: 'idfa',
      oaid: 'oaid',
      proxyDevice: 'proxyDevice',
      riskLevel: 'riskLevel',
      riskScore: 'riskScore',
      zid: 'zid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appChannel: 'string',
      fakeDevice: 'string',
      idfa: 'string',
      oaid: 'string',
      proxyDevice: 'string',
      riskLevel: 'string',
      riskScore: 'string',
      zid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagByAtokenResponseBodyData extends $tea.Model {
  aHook?: string;
  debug?: string;
  doubleOpen?: string;
  javaHook?: string;
  nativeHook?: string;
  root?: string;
  simulator?: string;
  vpnProxy?: string;
  wifiProxy?: string;
  zid?: string;
  static names(): { [key: string]: string } {
    return {
      aHook: 'aHook',
      debug: 'debug',
      doubleOpen: 'doubleOpen',
      javaHook: 'javaHook',
      nativeHook: 'nativeHook',
      root: 'root',
      simulator: 'simulator',
      vpnProxy: 'vpnProxy',
      wifiProxy: 'wifiProxy',
      zid: 'zid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aHook: 'string',
      debug: 'string',
      doubleOpen: 'string',
      javaHook: 'string',
      nativeHook: 'string',
      root: 'string',
      simulator: 'string',
      vpnProxy: 'string',
      wifiProxy: 'string',
      zid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZidTagScoreByAtokenResponseBodyData extends $tea.Model {
  aHook?: string;
  debug?: string;
  doubleOpen?: string;
  javaHook?: string;
  nativeHook?: string;
  riskLevel?: string;
  riskScore?: string;
  root?: string;
  simulator?: string;
  vpnProxy?: string;
  wifiProxy?: string;
  zid?: string;
  static names(): { [key: string]: string } {
    return {
      aHook: 'aHook',
      debug: 'debug',
      doubleOpen: 'doubleOpen',
      javaHook: 'javaHook',
      nativeHook: 'nativeHook',
      riskLevel: 'riskLevel',
      riskScore: 'riskScore',
      root: 'root',
      simulator: 'simulator',
      vpnProxy: 'vpnProxy',
      wifiProxy: 'wifiProxy',
      zid: 'zid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aHook: 'string',
      debug: 'string',
      doubleOpen: 'string',
      javaHook: 'string',
      nativeHook: 'string',
      riskLevel: 'string',
      riskScore: 'string',
      root: 'string',
      simulator: 'string',
      vpnProxy: 'string',
      wifiProxy: 'string',
      zid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsResponseBodyDataRiskDetails extends $tea.Model {
  an?: string;
  av?: string;
  bn?: string;
  c?: string;
  date?: string;
  fd?: string;
  idfa?: string;
  jb?: string;
  oaid?: string;
  py?: string;
  rl?: string;
  rs?: string;
  zid?: string;
  static names(): { [key: string]: string } {
    return {
      an: 'an',
      av: 'av',
      bn: 'bn',
      c: 'c',
      date: 'date',
      fd: 'fd',
      idfa: 'idfa',
      jb: 'jb',
      oaid: 'oaid',
      py: 'py',
      rl: 'rl',
      rs: 'rs',
      zid: 'zid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      an: 'string',
      av: 'string',
      bn: 'string',
      c: 'string',
      date: 'string',
      fd: 'string',
      idfa: 'string',
      jb: 'string',
      oaid: 'string',
      py: 'string',
      rl: 'string',
      rs: 'string',
      zid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsResponseBodyDataRiskSumary extends $tea.Model {
  date?: string;
  riskZidEmuDistinctNew?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      riskZidEmuDistinctNew: 'riskZidEmuDistinctNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      riskZidEmuDistinctNew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChannelRiskDetailsResponseBodyData extends $tea.Model {
  riskDetails?: ListChannelRiskDetailsResponseBodyDataRiskDetails[];
  riskSumary?: ListChannelRiskDetailsResponseBodyDataRiskSumary[];
  static names(): { [key: string]: string } {
    return {
      riskDetails: 'riskDetails',
      riskSumary: 'riskSumary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskDetails: { 'type': 'array', 'itemType': ListChannelRiskDetailsResponseBodyDataRiskDetails },
      riskSumary: { 'type': 'array', 'itemType': ListChannelRiskDetailsResponseBodyDataRiskSumary },
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
    this._endpoint = this.getEndpoint("antirisk", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getRealTimeRiskInfoWithOptions(request: GetRealTimeRiskInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRealTimeRiskInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.atoken)) {
      query["atoken"] = request.atoken;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.extra)) {
      query["extra"] = request.extra;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealTimeRiskInfo",
      version: "2022-11-28",
      protocol: "HTTPS",
      pathname: `/anti/getRealTimeRiskInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRealTimeRiskInfoResponse>(await this.callApi(params, req, runtime), new GetRealTimeRiskInfoResponse({}));
  }

  async getRealTimeRiskInfo(request: GetRealTimeRiskInfoRequest): Promise<GetRealTimeRiskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRealTimeRiskInfoWithOptions(request, headers, runtime);
  }

  async getZidTagByAtokenWithOptions(request: GetZidTagByAtokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetZidTagByAtokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.atoken)) {
      query["atoken"] = request.atoken;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetZidTagByAtoken",
      version: "2022-11-28",
      protocol: "HTTPS",
      pathname: `/anti/getZidTagByAtoken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetZidTagByAtokenResponse>(await this.callApi(params, req, runtime), new GetZidTagByAtokenResponse({}));
  }

  async getZidTagByAtoken(request: GetZidTagByAtokenRequest): Promise<GetZidTagByAtokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getZidTagByAtokenWithOptions(request, headers, runtime);
  }

  async getZidTagScoreByAtokenWithOptions(request: GetZidTagScoreByAtokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetZidTagScoreByAtokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.atoken)) {
      query["atoken"] = request.atoken;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetZidTagScoreByAtoken",
      version: "2022-11-28",
      protocol: "HTTPS",
      pathname: `/anti/getZidTagScoreByAtoken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetZidTagScoreByAtokenResponse>(await this.callApi(params, req, runtime), new GetZidTagScoreByAtokenResponse({}));
  }

  async getZidTagScoreByAtoken(request: GetZidTagScoreByAtokenRequest): Promise<GetZidTagScoreByAtokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getZidTagScoreByAtokenWithOptions(request, headers, runtime);
  }

  async listChannelRiskDetailsWithOptions(request: ListChannelRiskDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChannelRiskDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.isAllChannel)) {
      query["isAllChannel"] = request.isAllChannel;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChannelRiskDetails",
      version: "2022-11-28",
      protocol: "HTTPS",
      pathname: `/anti/listChannelRiskDetails`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChannelRiskDetailsResponse>(await this.callApi(params, req, runtime), new ListChannelRiskDetailsResponse({}));
  }

  async listChannelRiskDetails(request: ListChannelRiskDetailsRequest): Promise<ListChannelRiskDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChannelRiskDetailsWithOptions(request, headers, runtime);
  }

}

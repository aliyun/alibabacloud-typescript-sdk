// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetDeviceInfoRequest extends $tea.Model {
  deviceId?: string;
  ds?: string;
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      ds: 'ds',
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ds: 'string',
      factoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceInfoResponseBodyData;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceInfoResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceInfoResponseBody;
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
      body: GetDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListRequest extends $tea.Model {
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceListResponseBodyData;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceListResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceListResponseBody;
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
      body: GetDeviceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetOrgAndFactoryResponseBodyData[];
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyData },
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOrgAndFactoryResponseBody;
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
      body: GetOrgAndFactoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyDataRecordList extends $tea.Model {
  identifier?: string;
  paramName?: string;
  statisticsDate?: string;
  type?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      paramName: 'paramName',
      statisticsDate: 'statisticsDate',
      type: 'type',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      paramName: 'string',
      statisticsDate: 'string',
      type: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyData extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  firstTypeName?: string;
  recordList?: GetDeviceInfoResponseBodyDataRecordList[];
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      recordList: 'recordList',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      recordList: { 'type': 'array', 'itemType': GetDeviceInfoResponseBodyDataRecordList },
      secondTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyDataDeviceListInfo extends $tea.Model {
  constKva?: number;
  ct?: number;
  magnification?: number;
  pressure?: number;
  pt?: number;
  static names(): { [key: string]: string } {
    return {
      constKva: 'constKva',
      ct: 'ct',
      magnification: 'magnification',
      pressure: 'pressure',
      pt: 'pt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constKva: 'number',
      ct: 'number',
      magnification: 'number',
      pressure: 'number',
      pt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyDataDeviceList extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  firstTypeName?: string;
  info?: GetDeviceListResponseBodyDataDeviceListInfo;
  parentDevice?: string;
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      info: 'info',
      parentDevice: 'parentDevice',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      info: GetDeviceListResponseBodyDataDeviceListInfo,
      parentDevice: 'string',
      secondTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyData extends $tea.Model {
  code?: string;
  deviceList?: GetDeviceListResponseBodyDataDeviceList[];
  factoryId?: string;
  httpCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deviceList: 'deviceList',
      factoryId: 'factoryId',
      httpCode: 'httpCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceList: { 'type': 'array', 'itemType': GetDeviceListResponseBodyDataDeviceList },
      factoryId: 'string',
      httpCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBodyDataFactoryList extends $tea.Model {
  factoryId?: string;
  factoryName?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      factoryName: 'factoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      factoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBodyData extends $tea.Model {
  aliyunPk?: string;
  factoryList?: GetOrgAndFactoryResponseBodyDataFactoryList[];
  organizationId?: string;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      factoryList: 'factoryList',
      organizationId: 'organizationId',
      organizationName: 'organizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      factoryList: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyDataFactoryList },
      organizationId: 'string',
      organizationName: 'string',
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
    this._endpoint = this.getEndpoint("energyexpertexternal", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getDeviceInfoWithOptions(request: GetDeviceInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeviceInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      query["deviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ds)) {
      query["ds"] = request.ds;
    }

    if (!Util.isUnset(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceInfo",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceInfoResponse({}));
  }

  async getDeviceInfo(request: GetDeviceInfoRequest): Promise<GetDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceInfoWithOptions(request, headers, runtime);
  }

  async getDeviceListWithOptions(request: GetDeviceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeviceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceListResponse>(await this.callApi(params, req, runtime), new GetDeviceListResponse({}));
  }

  async getDeviceList(request: GetDeviceListRequest): Promise<GetDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceListWithOptions(request, headers, runtime);
  }

  async getOrgAndFactoryWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrgAndFactoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOrgAndFactory",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getOrgAndFactory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrgAndFactoryResponse>(await this.callApi(params, req, runtime), new GetOrgAndFactoryResponse({}));
  }

  async getOrgAndFactory(): Promise<GetOrgAndFactoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgAndFactoryWithOptions(headers, runtime);
  }

}

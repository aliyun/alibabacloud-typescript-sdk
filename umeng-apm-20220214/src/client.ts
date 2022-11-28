// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetStatTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetStatTrendResponseBodyData[];
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetStatTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStatTrendResponseBody;
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
      body: GetStatTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  fileName?: string;
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      fileName: 'fileName',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      fileName: 'string',
      fileType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBody extends $tea.Model {
  code?: number;
  data?: GetSymUploadParamResponseBodyData;
  msg?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetSymUploadParamResponseBodyData,
      msg: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSymUploadParamResponseBody;
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
      body: GetSymUploadParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetTodayStatTrendResponseBodyData[];
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetTodayStatTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTodayStatTrendResponseBody;
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
      body: GetTodayStatTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanRequest extends $tea.Model {
  dataSourceId?: string;
  planId?: number;
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
      planId: 'planId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      planId: 'number',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlertPlanResponseBody;
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
      body: UpdateAlertPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBodyData extends $tea.Model {
  affectedUserCount?: number;
  affectedUserRate?: number;
  errorCount?: number;
  errorRate?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'affectedUserCount',
      affectedUserRate: 'affectedUserRate',
      errorCount: 'errorCount',
      errorRate: 'errorRate',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      affectedUserRate: 'number',
      errorCount: 'number',
      errorRate: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  callback?: string;
  key?: string;
  policy?: string;
  signature?: string;
  uploadAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      callback: 'callback',
      key: 'key',
      policy: 'policy',
      signature: 'signature',
      uploadAddress: 'uploadAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      callback: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      uploadAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBodyData extends $tea.Model {
  affectedUserCount?: number;
  affectedUserRate?: number;
  errorCount?: number;
  errorRate?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'affectedUserCount',
      affectedUserRate: 'affectedUserRate',
      errorCount: 'errorCount',
      errorRate: 'errorRate',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      affectedUserRate: 'number',
      errorCount: 'number',
      errorRate: 'number',
      timePoint: 'string',
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
    this._endpoint = this.getEndpoint("umeng-apm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getStatTrend(request: GetStatTrendRequest): Promise<GetStatTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStatTrendWithOptions(request, headers, runtime);
  }

  async getStatTrendWithOptions(request: GetStatTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStatTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStatTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getStatTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetStatTrendResponse>(await this.callApi(params, req, runtime), new GetStatTrendResponse({}));
  }

  async getSymUploadParam(request: GetSymUploadParamRequest): Promise<GetSymUploadParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSymUploadParamWithOptions(request, headers, runtime);
  }

  async getSymUploadParamWithOptions(request: GetSymUploadParamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSymUploadParamResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSymUploadParam",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/getSymUploadParam`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSymUploadParamResponse>(await this.callApi(params, req, runtime), new GetSymUploadParamResponse({}));
  }

  async getTodayStatTrend(request: GetTodayStatTrendRequest): Promise<GetTodayStatTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTodayStatTrendWithOptions(request, headers, runtime);
  }

  async getTodayStatTrendWithOptions(request: GetTodayStatTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTodayStatTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTodayStatTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getTodayStatTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTodayStatTrendResponse>(await this.callApi(params, req, runtime), new GetTodayStatTrendResponse({}));
  }

  async updateAlertPlan(request: UpdateAlertPlanRequest): Promise<UpdateAlertPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertPlanWithOptions(request, headers, runtime);
  }

  async updateAlertPlanWithOptions(request: UpdateAlertPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAlertPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.planId)) {
      query["planId"] = request.planId;
    }

    if (!Util.isUnset(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlertPlan",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/updateAlertPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlertPlanResponse>(await this.callApi(params, req, runtime), new UpdateAlertPlanResponse({}));
  }

}

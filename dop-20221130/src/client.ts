// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetOssMetaDownloadRequest extends $tea.Model {
  ds?: string;
  expire?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      ds: 'ds',
      expire: 'expire',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ds: 'string',
      expire: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaDownloadResponseBody extends $tea.Model {
  code?: number;
  data?: string[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOssMetaDownloadResponseBody;
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
      body: GetOssMetaDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaListRequest extends $tea.Model {
  end?: string;
  start?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaListResponseBody extends $tea.Model {
  code?: number;
  data?: GetOssMetaListResponseBodyData[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetOssMetaListResponseBodyData },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOssMetaListResponseBody;
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
      body: GetOssMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBackfill4ApiRequest extends $tea.Model {
  end?: string;
  packageId?: number;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      packageId: 'packageId',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      packageId: 'number',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBackfill4ApiResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  dyCode?: string;
  dyMessage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      dyCode: 'dyCode',
      dyMessage: 'dyMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      dyCode: 'string',
      dyMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBackfill4ApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitBackfill4ApiResponseBody;
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
      body: SubmitBackfill4ApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssMetaListResponseBodyData extends $tea.Model {
  ds?: string;
  fileNames?: string[];
  fileSize?: string;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      ds: 'ds',
      fileNames: 'fileNames',
      fileSize: 'fileSize',
      rows: 'rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ds: 'string',
      fileNames: { 'type': 'array', 'itemType': 'string' },
      fileSize: 'string',
      rows: 'string',
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
    this._endpoint = this.getEndpoint("dop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getOssMetaDownloadWithOptions(request: GetOssMetaDownloadRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOssMetaDownloadResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ds)) {
      query["ds"] = request.ds;
    }

    if (!Util.isUnset(request.expire)) {
      query["expire"] = request.expire;
    }

    if (!Util.isUnset(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssMetaDownload",
      version: "2022-11-30",
      protocol: "HTTPS",
      pathname: `/dop/getOssMetaDownload`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOssMetaDownloadResponse>(await this.callApi(params, req, runtime), new GetOssMetaDownloadResponse({}));
  }

  async getOssMetaDownload(request: GetOssMetaDownloadRequest): Promise<GetOssMetaDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssMetaDownloadWithOptions(request, headers, runtime);
  }

  async getOssMetaListWithOptions(request: GetOssMetaListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOssMetaListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    if (!Util.isUnset(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssMetaList",
      version: "2022-11-30",
      protocol: "HTTPS",
      pathname: `/dop/getOssMetaList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOssMetaListResponse>(await this.callApi(params, req, runtime), new GetOssMetaListResponse({}));
  }

  async getOssMetaList(request: GetOssMetaListRequest): Promise<GetOssMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssMetaListWithOptions(request, headers, runtime);
  }

  async submitBackfill4ApiWithOptions(request: SubmitBackfill4ApiRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitBackfill4ApiResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.packageId)) {
      query["packageId"] = request.packageId;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitBackfill4Api",
      version: "2022-11-30",
      protocol: "HTTPS",
      pathname: `/dop/submitBackfill4Api`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitBackfill4ApiResponse>(await this.callApi(params, req, runtime), new SubmitBackfill4ApiResponse({}));
  }

  async submitBackfill4Api(request: SubmitBackfill4ApiRequest): Promise<SubmitBackfill4ApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitBackfill4ApiWithOptions(request, headers, runtime);
  }

}

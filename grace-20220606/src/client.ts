// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AnalysisConfig extends $tea.Model {
  badThroughputThreshold?: number;
  fullGCFrequentIntervalThreshold?: number;
  highHeapUsageThreshold?: number;
  highHumongousUsageThreshold?: number;
  highMetaspaceUsageThreshold?: number;
  highOldUsageThreshold?: number;
  highPromotionThreshold?: number;
  highSysThreshold?: number;
  longConcurrentThreshold?: number;
  longPauseThreshold?: number;
  lowUsrThreshold?: number;
  oldGCFrequentIntervalThreshold?: number;
  smallGenerationThreshold?: number;
  timeRange?: AnalysisConfigTimeRange;
  tooManyOldGCThreshold?: number;
  youngGCFrequentIntervalThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      badThroughputThreshold: 'badThroughputThreshold',
      fullGCFrequentIntervalThreshold: 'fullGCFrequentIntervalThreshold',
      highHeapUsageThreshold: 'highHeapUsageThreshold',
      highHumongousUsageThreshold: 'highHumongousUsageThreshold',
      highMetaspaceUsageThreshold: 'highMetaspaceUsageThreshold',
      highOldUsageThreshold: 'highOldUsageThreshold',
      highPromotionThreshold: 'highPromotionThreshold',
      highSysThreshold: 'highSysThreshold',
      longConcurrentThreshold: 'longConcurrentThreshold',
      longPauseThreshold: 'longPauseThreshold',
      lowUsrThreshold: 'lowUsrThreshold',
      oldGCFrequentIntervalThreshold: 'oldGCFrequentIntervalThreshold',
      smallGenerationThreshold: 'smallGenerationThreshold',
      timeRange: 'timeRange',
      tooManyOldGCThreshold: 'tooManyOldGCThreshold',
      youngGCFrequentIntervalThreshold: 'youngGCFrequentIntervalThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      badThroughputThreshold: 'number',
      fullGCFrequentIntervalThreshold: 'number',
      highHeapUsageThreshold: 'number',
      highHumongousUsageThreshold: 'number',
      highMetaspaceUsageThreshold: 'number',
      highOldUsageThreshold: 'number',
      highPromotionThreshold: 'number',
      highSysThreshold: 'number',
      longConcurrentThreshold: 'number',
      longPauseThreshold: 'number',
      lowUsrThreshold: 'number',
      oldGCFrequentIntervalThreshold: 'number',
      smallGenerationThreshold: 'number',
      timeRange: AnalysisConfigTimeRange,
      tooManyOldGCThreshold: 'number',
      youngGCFrequentIntervalThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileInfo extends $tea.Model {
  analyzeProgress?: FileInfoAnalyzeProgress;
  creationTime?: number;
  displayName?: string;
  labels?: string;
  name?: string;
  requestId?: string;
  shared?: boolean;
  size?: number;
  transferProgress?: FileInfoTransferProgress;
  transferState?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      analyzeProgress: 'analyzeProgress',
      creationTime: 'creationTime',
      displayName: 'displayName',
      labels: 'labels',
      name: 'name',
      requestId: 'requestId',
      shared: 'shared',
      size: 'size',
      transferProgress: 'transferProgress',
      transferState: 'transferState',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeProgress: FileInfoAnalyzeProgress,
      creationTime: 'number',
      displayName: 'string',
      labels: 'string',
      name: 'string',
      requestId: 'string',
      shared: 'boolean',
      size: 'number',
      transferProgress: FileInfoTransferProgress,
      transferState: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhaseStatisticItem extends $tea.Model {
  count?: number;
  durationAvg?: number;
  durationMax?: number;
  durationTotal?: number;
  intervalAvg?: number;
  intervalMin?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      durationAvg: 'durationAvg',
      durationMax: 'durationMax',
      durationTotal: 'durationTotal',
      intervalAvg: 'intervalAvg',
      intervalMin: 'intervalMin',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      durationAvg: 'number',
      durationMax: 'number',
      durationTotal: 'number',
      intervalAvg: 'number',
      intervalMin: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeFileRequest extends $tea.Model {
  keepUnreachableObjects?: boolean;
  name?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      keepUnreachableObjects: 'keepUnreachableObjects',
      name: 'name',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepUnreachableObjects: 'boolean',
      name: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeFileResponseBody extends $tea.Model {
  fileName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AnalyzeFileResponseBody;
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
      body: AnalyzeFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $tea.Model {
  name?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FileInfo;
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
      body: FileInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByOSSRequest extends $tea.Model {
  bucketName?: string;
  displayName?: string;
  endpoint?: string;
  objectName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      displayName: 'displayName',
      endpoint: 'endpoint',
      objectName: 'objectName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      displayName: 'string',
      endpoint: 'string',
      objectName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByOSSResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByOSSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadFileByOSSResponseBody;
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
      body: UploadFileByOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByURLRequest extends $tea.Model {
  displayName?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByURLResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileByURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadFileByURLResponseBody;
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
      body: UploadFileByURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisConfigTimeRange extends $tea.Model {
  end?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileInfoAnalyzeProgress extends $tea.Model {
  message?: string;
  percent?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      percent: 'percent',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileInfoTransferProgress extends $tea.Model {
  totalSize?: number;
  transferredSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalSize: 'totalSize',
      transferredSize: 'transferredSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalSize: 'number',
      transferredSize: 'number',
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
    this._endpoint = this.getEndpoint("grace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async analyzeFileWithOptions(request: AnalyzeFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AnalyzeFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keepUnreachableObjects)) {
      query["keepUnreachableObjects"] = request.keepUnreachableObjects;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AnalyzeFile",
      version: "2022-06-06",
      protocol: "HTTPS",
      pathname: `/AnalyzeFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AnalyzeFileResponse>(await this.callApi(params, req, runtime), new AnalyzeFileResponse({}));
  }

  async analyzeFile(request: AnalyzeFileRequest): Promise<AnalyzeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeFileWithOptions(request, headers, runtime);
  }

  async getFileWithOptions(request: GetFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFile",
      version: "2022-06-06",
      protocol: "HTTPS",
      pathname: `/GetFile`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileResponse>(await this.callApi(params, req, runtime), new GetFileResponse({}));
  }

  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(request, headers, runtime);
  }

  async uploadFileByOSSWithOptions(request: UploadFileByOSSRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadFileByOSSResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.objectName)) {
      query["objectName"] = request.objectName;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadFileByOSS",
      version: "2022-06-06",
      protocol: "HTTPS",
      pathname: `/UploadFileByOSS`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadFileByOSSResponse>(await this.callApi(params, req, runtime), new UploadFileByOSSResponse({}));
  }

  async uploadFileByOSS(request: UploadFileByOSSRequest): Promise<UploadFileByOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadFileByOSSWithOptions(request, headers, runtime);
  }

  async uploadFileByURLWithOptions(request: UploadFileByURLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadFileByURLResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.url)) {
      query["url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadFileByURL",
      version: "2022-06-06",
      protocol: "HTTPS",
      pathname: `/UploadFileByURL`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadFileByURLResponse>(await this.callApi(params, req, runtime), new UploadFileByURLResponse({}));
  }

  async uploadFileByURL(request: UploadFileByURLRequest): Promise<UploadFileByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadFileByURLWithOptions(request, headers, runtime);
  }

}

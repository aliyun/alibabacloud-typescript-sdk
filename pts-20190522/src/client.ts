// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetAliwareReportRequest extends $tea.Model {
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliwareReportResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  snapshot?: string;
  success?: boolean;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      snapshot: 'Snapshot',
      success: 'Success',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      snapshot: 'string',
      success: 'boolean',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliwareReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAliwareReportResponseBody;
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
      body: GetAliwareReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportRequest extends $tea.Model {
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  snapshot?: string;
  success?: boolean;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      snapshot: 'Snapshot',
      success: 'Success',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      snapshot: 'string',
      success: 'boolean',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReportResponseBody;
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
      body: GetReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSceneRequest extends $tea.Model {
  sceneId?: number;
  taskId?: number;
  teamId?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      taskId: 'TaskId',
      teamId: 'TeamId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      taskId: 'number',
      teamId: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  reportId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      reportId: 'ReportId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      reportId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSceneResponseBody;
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
      body: StartSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * @deprecated
    *
    * @param request GetAliwareReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAliwareReportResponse
   */
  // Deprecated
  async getAliwareReportWithOptions(request: GetAliwareReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAliwareReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAliwareReport",
      version: "2019-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAliwareReportResponse>(await this.callApi(params, req, runtime), new GetAliwareReportResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetAliwareReportRequest
    * @return GetAliwareReportResponse
   */
  // Deprecated
  async getAliwareReport(request: GetAliwareReportRequest): Promise<GetAliwareReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAliwareReportWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetReportResponse
   */
  // Deprecated
  async getReportWithOptions(request: GetReportRequest, runtime: $Util.RuntimeOptions): Promise<GetReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetReport",
      version: "2019-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetReportResponse>(await this.callApi(params, req, runtime), new GetReportResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetReportRequest
    * @return GetReportResponse
   */
  // Deprecated
  async getReport(request: GetReportRequest): Promise<GetReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReportWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request StartSceneRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartSceneResponse
   */
  // Deprecated
  async startSceneWithOptions(request: StartSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.teamId)) {
      query["TeamId"] = request.teamId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartScene",
      version: "2019-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSceneResponse>(await this.callApi(params, req, runtime), new StartSceneResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request StartSceneRequest
    * @return StartSceneResponse
   */
  // Deprecated
  async startScene(request: StartSceneRequest): Promise<StartSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSceneWithOptions(request, runtime);
  }

}

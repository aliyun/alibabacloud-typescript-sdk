// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class ListRunnableScenesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunnableScenesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scenes?: ListRunnableScenesResponseBodyScenes;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scenes: 'Scenes',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scenes: ListRunnableScenesResponseBodyScenes,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunnableScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunnableScenesResponseBody;
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
      body: ListRunnableScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPlanStatusRequest extends $tea.Model {
  reportId?: number;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPlanStatusResponseBody extends $tea.Model {
  agentLocations?: QueryPlanStatusResponseBodyAgentLocations;
  aliveAgentCount?: number;
  averageRt?: number;
  bpsRequest?: string;
  bpsResponse?: string;
  code?: string;
  concurrency?: number;
  concurrencyLimit?: number;
  currentTime?: number;
  failedBusinessCount?: number;
  failedRequestCount?: number;
  message?: string;
  monitorData?: QueryPlanStatusResponseBodyMonitorData;
  reportId?: number;
  requestCount?: string;
  requestId?: string;
  seg90Rt?: number;
  startTime?: number;
  success?: boolean;
  tips?: string;
  totalAgentCount?: number;
  tps?: number;
  tpsLimit?: number;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      agentLocations: 'AgentLocations',
      aliveAgentCount: 'AliveAgentCount',
      averageRt: 'AverageRt',
      bpsRequest: 'BpsRequest',
      bpsResponse: 'BpsResponse',
      code: 'Code',
      concurrency: 'Concurrency',
      concurrencyLimit: 'ConcurrencyLimit',
      currentTime: 'CurrentTime',
      failedBusinessCount: 'FailedBusinessCount',
      failedRequestCount: 'FailedRequestCount',
      message: 'Message',
      monitorData: 'MonitorData',
      reportId: 'ReportId',
      requestCount: 'RequestCount',
      requestId: 'RequestId',
      seg90Rt: 'Seg90Rt',
      startTime: 'StartTime',
      success: 'Success',
      tips: 'Tips',
      totalAgentCount: 'TotalAgentCount',
      tps: 'Tps',
      tpsLimit: 'TpsLimit',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentLocations: QueryPlanStatusResponseBodyAgentLocations,
      aliveAgentCount: 'number',
      averageRt: 'number',
      bpsRequest: 'string',
      bpsResponse: 'string',
      code: 'string',
      concurrency: 'number',
      concurrencyLimit: 'number',
      currentTime: 'number',
      failedBusinessCount: 'number',
      failedRequestCount: 'number',
      message: 'string',
      monitorData: QueryPlanStatusResponseBodyMonitorData,
      reportId: 'number',
      requestCount: 'string',
      requestId: 'string',
      seg90Rt: 'number',
      startTime: 'number',
      success: 'boolean',
      tips: 'string',
      totalAgentCount: 'number',
      tps: 'number',
      tpsLimit: 'number',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPlanStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPlanStatusResponseBody;
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
      body: QueryPlanStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSceneRequest extends $tea.Model {
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
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

export class StopSceneRequest extends $tea.Model {
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopSceneResponseBody;
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
      body: StopSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunnableScenesResponseBodyScenesScene extends $tea.Model {
  duration?: number;
  modifiedTime?: number;
  sceneId?: number;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      modifiedTime: 'ModifiedTime',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      modifiedTime: 'number',
      sceneId: 'number',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunnableScenesResponseBodyScenes extends $tea.Model {
  scene?: ListRunnableScenesResponseBodyScenesScene[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': ListRunnableScenesResponseBodyScenesScene },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPlanStatusResponseBodyAgentLocations extends $tea.Model {
  agentLocation?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      agentLocation: 'AgentLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentLocation: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPlanStatusResponseBodyMonitorData extends $tea.Model {
  data?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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
      version: "2018-11-11",
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
    * @param request ListRunnableScenesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListRunnableScenesResponse
   */
  // Deprecated
  async listRunnableScenesWithOptions(request: ListRunnableScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListRunnableScenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRunnableScenes",
      version: "2018-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRunnableScenesResponse>(await this.callApi(params, req, runtime), new ListRunnableScenesResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ListRunnableScenesRequest
    * @return ListRunnableScenesResponse
   */
  // Deprecated
  async listRunnableScenes(request: ListRunnableScenesRequest): Promise<ListRunnableScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRunnableScenesWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request QueryPlanStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryPlanStatusResponse
   */
  // Deprecated
  async queryPlanStatusWithOptions(request: QueryPlanStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryPlanStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPlanStatus",
      version: "2018-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPlanStatusResponse>(await this.callApi(params, req, runtime), new QueryPlanStatusResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request QueryPlanStatusRequest
    * @return QueryPlanStatusResponse
   */
  // Deprecated
  async queryPlanStatus(request: QueryPlanStatusRequest): Promise<QueryPlanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPlanStatusWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartScene",
      version: "2018-11-11",
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

  /**
    * @deprecated
    *
    * @param request StopSceneRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopSceneResponse
   */
  // Deprecated
  async stopSceneWithOptions(request: StopSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopScene",
      version: "2018-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopSceneResponse>(await this.callApi(params, req, runtime), new StopSceneResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request StopSceneRequest
    * @return StopSceneResponse
   */
  // Deprecated
  async stopScene(request: StopSceneRequest): Promise<StopSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopSceneWithOptions(request, runtime);
  }

}

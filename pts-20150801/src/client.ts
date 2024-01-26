// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateTransactionRequest extends $tea.Model {
  scriptId?: number;
  transactionName?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      transactionName: 'TransactionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'number',
      transactionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponseBody extends $tea.Model {
  requestId?: string;
  transactionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transactionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransactionResponseBody;
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
      body: CreateTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeySecretResponseBody extends $tea.Model {
  key?: string;
  requestId?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      requestId: 'RequestId',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      requestId: 'string',
      secret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeySecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeySecretResponseBody;
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
      body: GetKeySecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptRequest extends $tea.Model {
  scriptId?: number;
  tfsname?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tfsname: 'Tfsname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'number',
      tfsname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBody extends $tea.Model {
  requestId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScriptResponseBody;
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
      body: GetScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTasksRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTasksResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTasksResponseBody;
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
      body: GetTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLogSampleRequest extends $tea.Model {
  logSample?: string;
  scenarioId?: number;
  wskey?: string;
  static names(): { [key: string]: string } {
    return {
      logSample: 'LogSample',
      scenarioId: 'ScenarioId',
      wskey: 'Wskey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSample: 'string',
      scenarioId: 'number',
      wskey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLogSampleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportLogSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportLogSampleResponseBody;
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
      body: ReportLogSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTestSampleRequest extends $tea.Model {
  testSample?: string;
  static names(): { [key: string]: string } {
    return {
      testSample: 'TestSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTestSampleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportTestSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportTestSampleResponseBody;
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
      body: ReportTestSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportVuserRequest extends $tea.Model {
  gmtCreated?: number;
  scenarioId?: number;
  vuser?: number;
  wskey?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      scenarioId: 'ScenarioId',
      vuser: 'Vuser',
      wskey: 'Wskey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'number',
      scenarioId: 'number',
      vuser: 'number',
      wskey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportVuserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportVuserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportVuserResponseBody;
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
      body: ReportVuserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWangWangRequest extends $tea.Model {
  msg?: string;
  title?: string;
  to?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      title: 'Title',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      title: 'string',
      to: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWangWangShrinkRequest extends $tea.Model {
  msg?: string;
  title?: string;
  toShrink?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      title: 'Title',
      toShrink: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      title: 'string',
      toShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWangWangResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWangWangResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendWangWangResponseBody;
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
      body: SendWangWangResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScenarioStatusRequest extends $tea.Model {
  nodeIp?: string;
  scenarioId?: number;
  status?: number;
  wskey?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIp: 'NodeIp',
      scenarioId: 'ScenarioId',
      status: 'Status',
      wskey: 'Wskey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIp: 'string',
      scenarioId: 'number',
      status: 'number',
      wskey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScenarioStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScenarioStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetScenarioStatusResponseBody;
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
      body: SetScenarioStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTaskStatusRequest extends $tea.Model {
  status?: string;
  wskey?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wskey: 'Wskey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      wskey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetTaskStatusResponseBody;
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
      body: SetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskRequest extends $tea.Model {
  msg?: string;
  taskId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      taskId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTaskResponseBody;
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
      body: StopTaskResponseBody,
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
    * @param request CreateTransactionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransactionResponse
   */
  // Deprecated
  async createTransactionWithOptions(request: CreateTransactionRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransactionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.transactionName)) {
      query["TransactionName"] = request.transactionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransaction",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransactionResponse>(await this.callApi(params, req, runtime), new CreateTransactionResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request CreateTransactionRequest
    * @return CreateTransactionResponse
   */
  // Deprecated
  async createTransaction(request: CreateTransactionRequest): Promise<CreateTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransactionWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetKeySecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetKeySecretResponse
   */
  // Deprecated
  async getKeySecretWithOptions(runtime: $Util.RuntimeOptions): Promise<GetKeySecretResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetKeySecret",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKeySecretResponse>(await this.callApi(params, req, runtime), new GetKeySecretResponse({}));
  }

  /**
    * @deprecated
    *
    * @return GetKeySecretResponse
   */
  // Deprecated
  async getKeySecret(): Promise<GetKeySecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeySecretWithOptions(runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetScriptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetScriptResponse
   */
  // Deprecated
  async getScriptWithOptions(request: GetScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.tfsname)) {
      query["Tfsname"] = request.tfsname;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScript",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScriptResponse>(await this.callApi(params, req, runtime), new GetScriptResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetScriptRequest
    * @return GetScriptResponse
   */
  // Deprecated
  async getScript(request: GetScriptRequest): Promise<GetScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScriptWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTasksResponse
   */
  // Deprecated
  async getTasksWithOptions(request: GetTasksRequest, runtime: $Util.RuntimeOptions): Promise<GetTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTasks",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTasksResponse>(await this.callApi(params, req, runtime), new GetTasksResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetTasksRequest
    * @return GetTasksResponse
   */
  // Deprecated
  async getTasks(request: GetTasksRequest): Promise<GetTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTasksWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request ReportLogSampleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReportLogSampleResponse
   */
  // Deprecated
  async reportLogSampleWithOptions(request: ReportLogSampleRequest, runtime: $Util.RuntimeOptions): Promise<ReportLogSampleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logSample)) {
      query["LogSample"] = request.logSample;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.wskey)) {
      query["Wskey"] = request.wskey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportLogSample",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportLogSampleResponse>(await this.callApi(params, req, runtime), new ReportLogSampleResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ReportLogSampleRequest
    * @return ReportLogSampleResponse
   */
  // Deprecated
  async reportLogSample(request: ReportLogSampleRequest): Promise<ReportLogSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportLogSampleWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request ReportTestSampleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReportTestSampleResponse
   */
  // Deprecated
  async reportTestSampleWithOptions(request: ReportTestSampleRequest, runtime: $Util.RuntimeOptions): Promise<ReportTestSampleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.testSample)) {
      query["TestSample"] = request.testSample;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportTestSample",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportTestSampleResponse>(await this.callApi(params, req, runtime), new ReportTestSampleResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ReportTestSampleRequest
    * @return ReportTestSampleResponse
   */
  // Deprecated
  async reportTestSample(request: ReportTestSampleRequest): Promise<ReportTestSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportTestSampleWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request ReportVuserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReportVuserResponse
   */
  // Deprecated
  async reportVuserWithOptions(request: ReportVuserRequest, runtime: $Util.RuntimeOptions): Promise<ReportVuserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gmtCreated)) {
      query["GmtCreated"] = request.gmtCreated;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.vuser)) {
      query["Vuser"] = request.vuser;
    }

    if (!Util.isUnset(request.wskey)) {
      query["Wskey"] = request.wskey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportVuser",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportVuserResponse>(await this.callApi(params, req, runtime), new ReportVuserResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ReportVuserRequest
    * @return ReportVuserResponse
   */
  // Deprecated
  async reportVuser(request: ReportVuserRequest): Promise<ReportVuserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportVuserWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param tmpReq SendWangWangRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SendWangWangResponse
   */
  // Deprecated
  async sendWangWangWithOptions(tmpReq: SendWangWangRequest, runtime: $Util.RuntimeOptions): Promise<SendWangWangResponse> {
    Util.validateModel(tmpReq);
    let request = new SendWangWangShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.to)) {
      request.toShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.to, "To", "json");
    }

    let query = { };
    if (!Util.isUnset(request.msg)) {
      query["Msg"] = request.msg;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.toShrink)) {
      query["To"] = request.toShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendWangWang",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendWangWangResponse>(await this.callApi(params, req, runtime), new SendWangWangResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request SendWangWangRequest
    * @return SendWangWangResponse
   */
  // Deprecated
  async sendWangWang(request: SendWangWangRequest): Promise<SendWangWangResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendWangWangWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request SetScenarioStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetScenarioStatusResponse
   */
  // Deprecated
  async setScenarioStatusWithOptions(request: SetScenarioStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetScenarioStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nodeIp)) {
      query["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.wskey)) {
      query["Wskey"] = request.wskey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetScenarioStatus",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetScenarioStatusResponse>(await this.callApi(params, req, runtime), new SetScenarioStatusResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request SetScenarioStatusRequest
    * @return SetScenarioStatusResponse
   */
  // Deprecated
  async setScenarioStatus(request: SetScenarioStatusRequest): Promise<SetScenarioStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScenarioStatusWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request SetTaskStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetTaskStatusResponse
   */
  // Deprecated
  async setTaskStatusWithOptions(request: SetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.wskey)) {
      query["Wskey"] = request.wskey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTaskStatus",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTaskStatusResponse>(await this.callApi(params, req, runtime), new SetTaskStatusResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request SetTaskStatusRequest
    * @return SetTaskStatusResponse
   */
  // Deprecated
  async setTaskStatus(request: SetTaskStatusRequest): Promise<SetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTaskStatusWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request StopTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopTaskResponse
   */
  // Deprecated
  async stopTaskWithOptions(request: StopTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.msg)) {
      query["Msg"] = request.msg;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopTask",
      version: "2015-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopTaskResponse>(await this.callApi(params, req, runtime), new StopTaskResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request StopTaskRequest
    * @return StopTaskResponse
   */
  // Deprecated
  async stopTask(request: StopTaskRequest): Promise<StopTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTaskWithOptions(request, runtime);
  }

}

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sysom", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosisWithOptions(request: $_model.AuthDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCreateRole)) {
      body["autoCreateRole"] = request.autoCreateRole;
    }

    if (!$dara.isNull(request.autoInstallAgent)) {
      body["autoInstallAgent"] = request.autoInstallAgent;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/auth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.AuthDiagnosisResponse({}));
  }

  /**
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosis(request: $_model.AuthDiagnosisRequest): Promise<$_model.AuthDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 检查目标实例是否被 SysOM 支持
   * 
   * @param request - CheckInstanceSupportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceSupportResponse
   */
  async checkInstanceSupportWithOptions(request: $_model.CheckInstanceSupportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceSupportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceSupport",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/supportInstanceList/checkInstanceSupport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceSupportResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceSupportResponse({}));
  }

  /**
   * 检查目标实例是否被 SysOM 支持
   * 
   * @param request - CheckInstanceSupportRequest
   * @returns CheckInstanceSupportResponse
   */
  async checkInstanceSupport(request: $_model.CheckInstanceSupportRequest): Promise<$_model.CheckInstanceSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceSupportWithOptions(request, headers, runtime);
  }

  /**
   * 新增推送告警的策略
   * 
   * @param request - CreateAlertStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertStrategyResponse
   */
  async createAlertStrategyWithOptions(request: $_model.CreateAlertStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.k8sLabel)) {
      body["k8sLabel"] = request.k8sLabel;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertStrategy",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/createStrategy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertStrategyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertStrategyResponse({}));
  }

  /**
   * 新增推送告警的策略
   * 
   * @param request - CreateAlertStrategyRequest
   * @returns CreateAlertStrategyResponse
   */
  async createAlertStrategy(request: $_model.CreateAlertStrategyRequest): Promise<$_model.CreateAlertStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertStrategyWithOptions(request, headers, runtime);
  }

  /**
   * 用户删除推送告警的策略
   * 
   * @param request - DeleteAlertStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertStrategyResponse
   */
  async deleteAlertStrategyWithOptions(request: $_model.DeleteAlertStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertStrategyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertStrategy",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/deleteStrategy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertStrategyResponse({}));
  }

  /**
   * 用户删除推送告警的策略
   * 
   * @param request - DeleteAlertStrategyRequest
   * @returns DeleteAlertStrategyResponse
   */
  async deleteAlertStrategy(request: $_model.DeleteAlertStrategyRequest): Promise<$_model.DeleteAlertStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertStrategyWithOptions(request, headers, runtime);
  }

  /**
   * 获取copilot服务的返回结果
   * 
   * @param request - GenerateCopilotResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCopilotResponseResponse
   */
  async generateCopilotResponseWithOptions(request: $_model.GenerateCopilotResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCopilotResponseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCopilotResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCopilotResponseResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCopilotResponseResponse({}));
  }

  /**
   * 获取copilot服务的返回结果
   * 
   * @param request - GenerateCopilotResponseRequest
   * @returns GenerateCopilotResponseResponse
   */
  async generateCopilotResponse(request: $_model.GenerateCopilotResponseRequest): Promise<$_model.GenerateCopilotResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotResponseWithOptions(request, headers, runtime);
  }

  /**
   * 流式copilot服务接口
   * 
   * @param request - GenerateCopilotStreamResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCopilotStreamResponseResponse
   */
  async *generateCopilotStreamResponseWithSSE(request: $_model.GenerateCopilotStreamResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GenerateCopilotStreamResponseResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCopilotStreamResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_stream_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.GenerateCopilotStreamResponseResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.GenerateCopilotStreamResponseResponse({}));
    }
  }

  /**
   * 流式copilot服务接口
   * 
   * @param request - GenerateCopilotStreamResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCopilotStreamResponseResponse
   */
  async generateCopilotStreamResponseWithOptions(request: $_model.GenerateCopilotStreamResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCopilotStreamResponseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCopilotStreamResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_stream_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCopilotStreamResponseResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCopilotStreamResponseResponse({}));
  }

  /**
   * 流式copilot服务接口
   * 
   * @param request - GenerateCopilotStreamResponseRequest
   * @returns GenerateCopilotStreamResponseResponse
   */
  async generateCopilotStreamResponse(request: $_model.GenerateCopilotStreamResponseRequest): Promise<$_model.GenerateCopilotStreamResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotStreamResponseWithOptions(request, headers, runtime);
  }

  /**
   * 查看AI Infra分析结果
   * 
   * @param request - GetAIQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIQueryResultResponse
   */
  async getAIQueryResultWithOptions(request: $_model.GetAIQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIQueryResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisId)) {
      body["analysisId"] = request.analysisId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIQueryResult",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/app_observ/aiAnalysis/query_result`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIQueryResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAIQueryResultResponse({}));
  }

  /**
   * 查看AI Infra分析结果
   * 
   * @param request - GetAIQueryResultRequest
   * @returns GetAIQueryResultResponse
   */
  async getAIQueryResult(request: $_model.GetAIQueryResultRequest): Promise<$_model.GetAIQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAIQueryResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCountWithOptions(request: $_model.GetAbnormalEventsCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAbnormalEventsCountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pod)) {
      query["pod"] = request.pod;
    }

    if (!$dara.isNull(request.showPod)) {
      query["showPod"] = request.showPod;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAbnormalEventsCount",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/abnormaly_events_count`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAbnormalEventsCountResponse>(await this.callApi(params, req, runtime), new $_model.GetAbnormalEventsCountResponse({}));
  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCount(request: $_model.GetAbnormalEventsCountRequest): Promise<$_model.GetAbnormalEventsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAbnormalEventsCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取某个组件的详情
   * 
   * @param request - GetAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      query["agent_id"] = request.agentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/get_agent`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * 获取某个组件的详情
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agent安装任务执行状态
   * 
   * @param request - GetAgentTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentTaskResponse
   */
  async getAgentTaskWithOptions(request: $_model.GetAgentTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentTask",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/get_agent_task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentTaskResponse({}));
  }

  /**
   * 获取Agent安装任务执行状态
   * 
   * @param request - GetAgentTaskRequest
   * @returns GetAgentTaskResponse
   */
  async getAgentTask(request: $_model.GetAgentTaskRequest): Promise<$_model.GetAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentTaskWithOptions(request, headers, runtime);
  }

  /**
   * 根据策略id，获取用户的一条告警
   * 
   * @param request - GetAlertStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertStrategyResponse
   */
  async getAlertStrategyWithOptions(request: $_model.GetAlertStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertStrategyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertStrategy",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/getStrategy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertStrategyResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertStrategyResponse({}));
  }

  /**
   * 根据策略id，获取用户的一条告警
   * 
   * @param request - GetAlertStrategyRequest
   * @returns GetAlertStrategyResponse
   */
  async getAlertStrategy(request: $_model.GetAlertStrategyRequest): Promise<$_model.GetAlertStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlertStrategyWithOptions(request, headers, runtime);
  }

  /**
   * 获取copilot历史聊天记录
   * 
   * @param request - GetCopilotHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCopilotHistoryResponse
   */
  async getCopilotHistoryWithOptions(request: $_model.GetCopilotHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCopilotHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCopilotHistory",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/get_copilot_history`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCopilotHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetCopilotHistoryResponse({}));
  }

  /**
   * 获取copilot历史聊天记录
   * 
   * @param request - GetCopilotHistoryRequest
   * @returns GetCopilotHistoryResponse
   */
  async getCopilotHistory(request: $_model.GetCopilotHistoryRequest): Promise<$_model.GetCopilotHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCopilotHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResultWithOptions(request: $_model.GetDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDiagnosisResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDiagnosisResult",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/get_diagnosis_results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDiagnosisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDiagnosisResultResponse({}));
  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResult(request: $_model.GetDiagnosisResultRequest): Promise<$_model.GetDiagnosisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDiagnosisResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取一段时间的节点/pod健康度比例
   * 
   * @param request - GetHealthPercentageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHealthPercentageResponse
   */
  async getHealthPercentageWithOptions(request: $_model.GetHealthPercentageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHealthPercentageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHealthPercentage",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/health_percentage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHealthPercentageResponse>(await this.callApi(params, req, runtime), new $_model.GetHealthPercentageResponse({}));
  }

  /**
   * 获取一段时间的节点/pod健康度比例
   * 
   * @param request - GetHealthPercentageRequest
   * @returns GetHealthPercentageResponse
   */
  async getHealthPercentage(request: $_model.GetHealthPercentageRequest): Promise<$_model.GetHealthPercentageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHealthPercentageWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群节点数量
   * 
   * @param request - GetHostCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostCountResponse
   */
  async getHostCountWithOptions(request: $_model.GetHostCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostCountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostCount",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/host_count`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostCountResponse>(await this.callApi(params, req, runtime), new $_model.GetHostCountResponse({}));
  }

  /**
   * 获取集群节点数量
   * 
   * @param request - GetHostCountRequest
   * @returns GetHostCountResponse
   */
  async getHostCount(request: $_model.GetHostCountRequest): Promise<$_model.GetHostCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHostCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例下的某个字段列表
   * 
   * @param request - GetHotSpotUniqListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotSpotUniqListResponse
   */
  async getHotSpotUniqListWithOptions(request: $_model.GetHotSpotUniqListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotSpotUniqListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    if (!$dara.isNull(request.uniq)) {
      body["uniq"] = request.uniq;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotSpotUniqList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/livetrace_proxy/hotspot_uniq_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotSpotUniqListResponse>(await this.callApi(params, req, runtime), new $_model.GetHotSpotUniqListResponse({}));
  }

  /**
   * 获取实例下的某个字段列表
   * 
   * @param request - GetHotSpotUniqListRequest
   * @returns GetHotSpotUniqListResponse
   */
  async getHotSpotUniqList(request: $_model.GetHotSpotUniqListRequest): Promise<$_model.GetHotSpotUniqListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotSpotUniqListWithOptions(request, headers, runtime);
  }

  /**
   * 获取热定分析结果
   * 
   * @param request - GetHotspotAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotAnalysisResponse
   */
  async getHotspotAnalysisWithOptions(request: $_model.GetHotspotAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotAnalysis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotAnalysisResponse({}));
  }

  /**
   * 获取热定分析结果
   * 
   * @param request - GetHotspotAnalysisRequest
   * @returns GetHotspotAnalysisResponse
   */
  async getHotspotAnalysis(request: $_model.GetHotspotAnalysisRequest): Promise<$_model.GetHotspotAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * 热点对比
   * 
   * @param request - GetHotspotCompareRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotCompareResponse
   */
  async getHotspotCompareWithOptions(request: $_model.GetHotspotCompareRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotCompareResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beg1End)) {
      body["beg1_end"] = request.beg1End;
    }

    if (!$dara.isNull(request.beg1Start)) {
      body["beg1_start"] = request.beg1Start;
    }

    if (!$dara.isNull(request.beg2End)) {
      body["beg2_end"] = request.beg2End;
    }

    if (!$dara.isNull(request.beg2Start)) {
      body["beg2_start"] = request.beg2Start;
    }

    if (!$dara.isNull(request.hotType)) {
      body["hot_type"] = request.hotType;
    }

    if (!$dara.isNull(request.instance1)) {
      body["instance1"] = request.instance1;
    }

    if (!$dara.isNull(request.instance2)) {
      body["instance2"] = request.instance2;
    }

    if (!$dara.isNull(request.pid1)) {
      body["pid1"] = request.pid1;
    }

    if (!$dara.isNull(request.pid2)) {
      body["pid2"] = request.pid2;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotCompare",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_compare`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotCompareResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotCompareResponse({}));
  }

  /**
   * 热点对比
   * 
   * @param request - GetHotspotCompareRequest
   * @returns GetHotspotCompareResponse
   */
  async getHotspotCompare(request: $_model.GetHotspotCompareRequest): Promise<$_model.GetHotspotCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotCompareWithOptions(request, headers, runtime);
  }

  /**
   * 获取热点实例列表
   * 
   * @param request - GetHotspotInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotInstanceListResponse
   */
  async getHotspotInstanceListWithOptions(request: $_model.GetHotspotInstanceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotInstanceListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotInstanceList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_instance_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotInstanceListResponse({}));
  }

  /**
   * 获取热点实例列表
   * 
   * @param request - GetHotspotInstanceListRequest
   * @returns GetHotspotInstanceListResponse
   */
  async getHotspotInstanceList(request: $_model.GetHotspotInstanceListRequest): Promise<$_model.GetHotspotInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * 获取某个实例的pid列表
   * 
   * @param request - GetHotspotPidListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotPidListResponse
   */
  async getHotspotPidListWithOptions(request: $_model.GetHotspotPidListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotPidListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotPidList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_pid_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotPidListResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotPidListResponse({}));
  }

  /**
   * 获取某个实例的pid列表
   * 
   * @param request - GetHotspotPidListRequest
   * @returns GetHotspotPidListResponse
   */
  async getHotspotPidList(request: $_model.GetHotspotPidListRequest): Promise<$_model.GetHotspotPidListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotPidListWithOptions(request, headers, runtime);
  }

  /**
   * 发起热点追踪
   * 
   * @param request - GetHotspotTrackingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotTrackingResponse
   */
  async getHotspotTrackingWithOptions(request: $_model.GetHotspotTrackingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotTrackingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.hotType)) {
      body["hot_type"] = request.hotType;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotTracking",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_tracking`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotTrackingResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotTrackingResponse({}));
  }

  /**
   * 发起热点追踪
   * 
   * @param request - GetHotspotTrackingRequest
   * @returns GetHotspotTrackingResponse
   */
  async getHotspotTracking(request: $_model.GetHotspotTrackingRequest): Promise<$_model.GetHotspotTrackingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotTrackingWithOptions(request, headers, runtime);
  }

  /**
   * 获取实时集群/节点健康度分数
   * 
   * @param request - GetInstantScoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstantScoreResponse
   */
  async getInstantScoreWithOptions(request: $_model.GetInstantScoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstantScoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstantScore",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/instant/score`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstantScoreResponse>(await this.callApi(params, req, runtime), new $_model.GetInstantScoreResponse({}));
  }

  /**
   * 获取实时集群/节点健康度分数
   * 
   * @param request - GetInstantScoreRequest
   * @returns GetInstantScoreResponse
   */
  async getInstantScore(request: $_model.GetInstantScoreRequest): Promise<$_model.GetInstantScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstantScoreWithOptions(request, headers, runtime);
  }

  /**
   * AI Infra获取分析记录列表
   * 
   * @param request - GetListRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListRecordResponse
   */
  async getListRecordWithOptions(request: $_model.GetListRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetListRecordResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetListRecord",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/app_observ/aiAnalysis/list_record`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetListRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetListRecordResponse({}));
  }

  /**
   * AI Infra获取分析记录列表
   * 
   * @param request - GetListRecordRequest
   * @returns GetListRecordResponse
   */
  async getListRecord(request: $_model.GetListRecordRequest): Promise<$_model.GetListRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getListRecordWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间内集群中节点/节点中pod异常问题占比
   * 
   * @param request - GetProblemPercentageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemPercentageResponse
   */
  async getProblemPercentageWithOptions(request: $_model.GetProblemPercentageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProblemPercentageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProblemPercentage",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/problem_percentage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProblemPercentageResponse>(await this.callApi(params, req, runtime), new $_model.GetProblemPercentageResponse({}));
  }

  /**
   * 获取一定时间内集群中节点/节点中pod异常问题占比
   * 
   * @param request - GetProblemPercentageRequest
   * @returns GetProblemPercentageResponse
   */
  async getProblemPercentage(request: $_model.GetProblemPercentageRequest): Promise<$_model.GetProblemPercentageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemPercentageWithOptions(request, headers, runtime);
  }

  /**
   * 获取健康分趋势
   * 
   * @param request - GetRangeScoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRangeScoreResponse
   */
  async getRangeScoreWithOptions(request: $_model.GetRangeScoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRangeScoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRangeScore",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/score`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRangeScoreResponse>(await this.callApi(params, req, runtime), new $_model.GetRangeScoreResponse({}));
  }

  /**
   * 获取健康分趋势
   * 
   * @param request - GetRangeScoreRequest
   * @returns GetRangeScoreResponse
   */
  async getRangeScore(request: $_model.GetRangeScoreRequest): Promise<$_model.GetRangeScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRangeScoreWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群/节点资源实时使用情况
   * 
   * @param request - GetResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcesResponse
   */
  async getResourcesWithOptions(request: $_model.GetResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResources",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/instant/resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourcesResponse>(await this.callApi(params, req, runtime), new $_model.GetResourcesResponse({}));
  }

  /**
   * 获取集群/节点资源实时使用情况
   * 
   * @param request - GetResourcesRequest
   * @returns GetResourcesResponse
   */
  async getResources(request: $_model.GetResourcesRequest): Promise<$_model.GetResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取功能模块配置
   * 
   * @param tmpReq - GetServiceFuncStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceFuncStatusResponse
   */
  async getServiceFuncStatusWithOptions(tmpReq: $_model.GetServiceFuncStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceFuncStatusResponse> {
    tmpReq.validate();
    let request = new $_model.GetServiceFuncStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "params", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceFuncStatus",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/func-switch/get-service-func-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceFuncStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceFuncStatusResponse({}));
  }

  /**
   * 获取功能模块配置
   * 
   * @param request - GetServiceFuncStatusRequest
   * @returns GetServiceFuncStatusResponse
   */
  async getServiceFuncStatus(request: $_model.GetServiceFuncStatusRequest): Promise<$_model.GetServiceFuncStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceFuncStatusWithOptions(request, headers, runtime);
  }

  /**
   * 初始化SysOM，确保角色存在
   * 
   * @param request - InitialSysomRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitialSysomResponse
   */
  async initialSysomWithOptions(request: $_model.InitialSysomRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InitialSysomResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkOnly)) {
      body["check_only"] = request.checkOnly;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitialSysom",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/initial`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitialSysomResponse>(await this.callApi(params, req, runtime), new $_model.InitialSysomResponse({}));
  }

  /**
   * 初始化SysOM，确保角色存在
   * 
   * @param request - InitialSysomRequest
   * @returns InitialSysomResponse
   */
  async initialSysom(request: $_model.InitialSysomRequest): Promise<$_model.InitialSysomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initialSysomWithOptions(request, headers, runtime);
  }

  /**
   * 在指定的实例上安装 Agent
   * 
   * @param request - InstallAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAgentResponse
   */
  async installAgentWithOptions(request: $_model.InstallAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.installType)) {
      body["install_type"] = request.installType;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/install_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAgentResponse>(await this.callApi(params, req, runtime), new $_model.InstallAgentResponse({}));
  }

  /**
   * 在指定的实例上安装 Agent
   * 
   * @param request - InstallAgentRequest
   * @returns InstallAgentResponse
   */
  async installAgent(request: $_model.InstallAgentRequest): Promise<$_model.InstallAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群安装组件
   * 
   * @param request - InstallAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAgentForClusterResponse
   */
  async installAgentForClusterWithOptions(request: $_model.InstallAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.configId)) {
      body["config_id"] = request.configId;
    }

    if (!$dara.isNull(request.grayscaleConfig)) {
      body["grayscale_config"] = request.grayscaleConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/install_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAgentForClusterResponse>(await this.callApi(params, req, runtime), new $_model.InstallAgentForClusterResponse({}));
  }

  /**
   * 给集群安装组件
   * 
   * @param request - InstallAgentForClusterRequest
   * @returns InstallAgentForClusterResponse
   */
  async installAgentForCluster(request: $_model.InstallAgentForClusterRequest): Promise<$_model.InstallAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentForClusterWithOptions(request, headers, runtime);
  }

  /**
   * 异常项诊断跳转
   * 
   * @param request - InvokeAnomalyDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeAnomalyDiagnosisResponse
   */
  async invokeAnomalyDiagnosisWithOptions(request: $_model.InvokeAnomalyDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeAnomalyDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuid)) {
      query["uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAnomalyDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/diagnosis/invoke_anomaly_diagnose`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeAnomalyDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.InvokeAnomalyDiagnosisResponse({}));
  }

  /**
   * 异常项诊断跳转
   * 
   * @param request - InvokeAnomalyDiagnosisRequest
   * @returns InvokeAnomalyDiagnosisResponse
   */
  async invokeAnomalyDiagnosis(request: $_model.InvokeAnomalyDiagnosisRequest): Promise<$_model.InvokeAnomalyDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeAnomalyDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosisWithOptions(request: $_model.InvokeDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/invoke_diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.InvokeDiagnosisResponse({}));
  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosis(request: $_model.InvokeDiagnosisRequest): Promise<$_model.InvokeDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间段内的异常事件
   * 
   * @param request - ListAbnormalyEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAbnormalyEventsResponse
   */
  async listAbnormalyEventsWithOptions(request: $_model.ListAbnormalyEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAbnormalyEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.event)) {
      query["event"] = request.event;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pod)) {
      query["pod"] = request.pod;
    }

    if (!$dara.isNull(request.showPod)) {
      query["showPod"] = request.showPod;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAbnormalyEvents",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/abnormaly_events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAbnormalyEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAbnormalyEventsResponse({}));
  }

  /**
   * 获取一定时间段内的异常事件
   * 
   * @param request - ListAbnormalyEventsRequest
   * @returns ListAbnormalyEventsResponse
   */
  async listAbnormalyEvents(request: $_model.ListAbnormalyEventsRequest): Promise<$_model.ListAbnormalyEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAbnormalyEventsWithOptions(request, headers, runtime);
  }

  /**
   * 列出 Agent 的安装记录
   * 
   * @param request - ListAgentInstallRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentInstallRecordsResponse
   */
  async listAgentInstallRecordsWithOptions(request: $_model.ListAgentInstallRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentInstallRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["plugin_version"] = request.pluginVersion;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentInstallRecords",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_agent_install_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentInstallRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentInstallRecordsResponse({}));
  }

  /**
   * 列出 Agent 的安装记录
   * 
   * @param request - ListAgentInstallRecordsRequest
   * @returns ListAgentInstallRecordsResponse
   */
  async listAgentInstallRecords(request: $_model.ListAgentInstallRecordsRequest): Promise<$_model.ListAgentInstallRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentInstallRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取 Agent 列表
   * 
   * @param request - ListAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: $_model.ListAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentsResponse({}));
  }

  /**
   * 获取 Agent 列表
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取所有告警项
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertItemsResponse
   */
  async listAlertItemsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertItemsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertItems",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/listItems`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertItemsResponse({}));
  }

  /**
   * 获取所有告警项
   * @returns ListAlertItemsResponse
   */
  async listAlertItems(): Promise<$_model.ListAlertItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertItemsWithOptions(headers, runtime);
  }

  /**
   * 用于获取用户所有推送告警的策略
   * 
   * @param request - ListAlertStrategiesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertStrategiesResponse
   */
  async listAlertStrategiesWithOptions(request: $_model.ListAlertStrategiesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertStrategiesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertStrategies",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/listStrategies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertStrategiesResponse({}));
  }

  /**
   * 用于获取用户所有推送告警的策略
   * 
   * @param request - ListAlertStrategiesRequest
   * @returns ListAlertStrategiesResponse
   */
  async listAlertStrategies(request: $_model.ListAlertStrategiesRequest): Promise<$_model.ListAlertStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertStrategiesWithOptions(request, headers, runtime);
  }

  /**
   * 此接口用于获取已纳管/未纳管实例列表并带有实例信息
   * 
   * @param request - ListAllInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllInstancesResponse
   */
  async listAllInstancesWithOptions(request: $_model.ListAllInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.filters)) {
      query["filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["instanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.managedType)) {
      query["managedType"] = request.managedType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["pluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllInstances",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/listAllInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListAllInstancesResponse({}));
  }

  /**
   * 此接口用于获取已纳管/未纳管实例列表并带有实例信息
   * 
   * @param request - ListAllInstancesRequest
   * @returns ListAllInstancesResponse
   */
  async listAllInstances(request: $_model.ListAllInstancesRequest): Promise<$_model.ListAllInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群组件安装记录
   * 
   * @param request - ListClusterAgentInstallRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAgentInstallRecordsResponse
   */
  async listClusterAgentInstallRecordsWithOptions(request: $_model.ListClusterAgentInstallRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterAgentInstallRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentConfigId)) {
      query["agent_config_id"] = request.agentConfigId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["plugin_version"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterAgentInstallRecords",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_cluster_agent_install_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterAgentInstallRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterAgentInstallRecordsResponse({}));
  }

  /**
   * 获取集群组件安装记录
   * 
   * @param request - ListClusterAgentInstallRecordsRequest
   * @returns ListClusterAgentInstallRecordsResponse
   */
  async listClusterAgentInstallRecords(request: $_model.ListClusterAgentInstallRecordsRequest): Promise<$_model.ListClusterAgentInstallRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAgentInstallRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前用户的所有集群
   * 
   * @param request - ListClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterStatus)) {
      query["cluster_status"] = request.clusterStatus;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/cluster/list_clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * 获取当前用户的所有集群
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClustersWithOptions(request, headers, runtime);
  }

  /**
   * 获取诊断历史记录列表
   * 
   * @param request - ListDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosisResponse
   */
  async listDiagnosisWithOptions(request: $_model.ListDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/list_diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnosisResponse({}));
  }

  /**
   * 获取诊断历史记录列表
   * 
   * @param request - ListDiagnosisRequest
   * @returns ListDiagnosisResponse
   */
  async listDiagnosis(request: $_model.ListDiagnosisRequest): Promise<$_model.ListDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间内集群节点/Pod健康度列表
   * 
   * @param request - ListInstanceHealthRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceHealthResponse
   */
  async listInstanceHealthWithOptions(request: $_model.ListInstanceHealthRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceHealthResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceHealth",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/instance_health_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceHealthResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceHealthResponse({}));
  }

  /**
   * 获取一定时间内集群节点/Pod健康度列表
   * 
   * @param request - ListInstanceHealthRequest
   * @returns ListInstanceHealthResponse
   */
  async listInstanceHealth(request: $_model.ListInstanceHealthRequest): Promise<$_model.ListInstanceHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceHealthWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例状态
   * 
   * @param request - ListInstanceStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatusWithOptions(request: $_model.ListInstanceStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatus",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_instance_status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceStatusResponse({}));
  }

  /**
   * 获取实例状态
   * 
   * @param request - ListInstanceStatusRequest
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatus(request: $_model.ListInstanceStatusRequest): Promise<$_model.ListInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取ecs信息的列表，如标签列表，公网ip列表等
   * 
   * @param request - ListInstancesEcsInfoListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesEcsInfoListResponse
   */
  async listInstancesEcsInfoListWithOptions(request: $_model.ListInstancesEcsInfoListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesEcsInfoListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.infoType)) {
      query["info_type"] = request.infoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.managedType)) {
      query["managed_type"] = request.managedType;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesEcsInfoList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/listInstancesEcsInfoList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesEcsInfoListResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesEcsInfoListResponse({}));
  }

  /**
   * 获取ecs信息的列表，如标签列表，公网ip列表等
   * 
   * @param request - ListInstancesEcsInfoListRequest
   * @returns ListInstancesEcsInfoListResponse
   */
  async listInstancesEcsInfoList(request: $_model.ListInstancesEcsInfoListRequest): Promise<$_model.ListInstancesEcsInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesEcsInfoListWithOptions(request, headers, runtime);
  }

  /**
   * 获取已纳管/未纳管实例信息，信息中包含ECS信息
   * 
   * @param tmpReq - ListInstancesWithEcsInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesWithEcsInfoResponse
   */
  async listInstancesWithEcsInfoWithOptions(tmpReq: $_model.ListInstancesWithEcsInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesWithEcsInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesWithEcsInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceTag)) {
      request.instanceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceTag, "instance_tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["health_status"] = request.healthStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdName)) {
      query["instance_id_name"] = request.instanceIdName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceTagShrink)) {
      query["instance_tag"] = request.instanceTagShrink;
    }

    if (!$dara.isNull(request.isManaged)) {
      query["is_managed"] = request.isManaged;
    }

    if (!$dara.isNull(request.osName)) {
      query["os_name"] = request.osName;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIp)) {
      query["private_ip"] = request.privateIp;
    }

    if (!$dara.isNull(request.publicIp)) {
      query["public_ip"] = request.publicIp;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resource_group_id"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIdName)) {
      query["resource_group_id_name"] = request.resourceGroupIdName;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["resource_group_name"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesWithEcsInfo",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/listInstancesWithEcsInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesWithEcsInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesWithEcsInfoResponse({}));
  }

  /**
   * 获取已纳管/未纳管实例信息，信息中包含ECS信息
   * 
   * @param request - ListInstancesWithEcsInfoRequest
   * @returns ListInstancesWithEcsInfoResponse
   */
  async listInstancesWithEcsInfo(request: $_model.ListInstancesWithEcsInfoRequest): Promise<$_model.ListInstancesWithEcsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithEcsInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取插件的安装/更新/卸载实例列表
   * 
   * @param request - ListPluginsInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginsInstancesResponse
   */
  async listPluginsInstancesWithOptions(request: $_model.ListPluginsInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginsInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instanceIdName)) {
      query["instance_id_name"] = request.instanceIdName;
    }

    if (!$dara.isNull(request.instanceTag)) {
      query["instance_tag"] = request.instanceTag;
    }

    if (!$dara.isNull(request.operationType)) {
      query["operation_type"] = request.operationType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPluginsInstances",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/listPluginsInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginsInstancesResponse({}));
  }

  /**
   * 获取插件的安装/更新/卸载实例列表
   * 
   * @param request - ListPluginsInstancesRequest
   * @returns ListPluginsInstancesResponse
   */
  async listPluginsInstances(request: $_model.ListPluginsInstancesRequest): Promise<$_model.ListPluginsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例中的pod列表
   * 
   * @param request - ListPodsOfInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPodsOfInstanceResponse
   */
  async listPodsOfInstanceWithOptions(request: $_model.ListPodsOfInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPodsOfInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPodsOfInstance",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_pod_of_instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPodsOfInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListPodsOfInstanceResponse({}));
  }

  /**
   * 获取实例中的pod列表
   * 
   * @param request - ListPodsOfInstanceRequest
   * @returns ListPodsOfInstanceResponse
   */
  async listPodsOfInstance(request: $_model.ListPodsOfInstanceRequest): Promise<$_model.ListPodsOfInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPodsOfInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 列出所有纳管了机器的区域
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * 列出所有纳管了机器的区域
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * 启动AI作业分析
   * 
   * @param request - StartAIAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIAnalysisResponse
   */
  async startAIAnalysisWithOptions(request: $_model.StartAIAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartAIAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisTool)) {
      body["analysisTool"] = request.analysisTool;
    }

    if (!$dara.isNull(request.analysisParams)) {
      body["analysis_params"] = request.analysisParams;
    }

    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.comms)) {
      body["comms"] = request.comms;
    }

    if (!$dara.isNull(request.createdBy)) {
      body["created_by"] = request.createdBy;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["instance_type"] = request.instanceType;
    }

    if (!$dara.isNull(request.iterationFunc)) {
      body["iteration_func"] = request.iterationFunc;
    }

    if (!$dara.isNull(request.iterationMod)) {
      body["iteration_mod"] = request.iterationMod;
    }

    if (!$dara.isNull(request.iterationRange)) {
      body["iteration_range"] = request.iterationRange;
    }

    if (!$dara.isNull(request.pids)) {
      body["pids"] = request.pids;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAIAnalysis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/start_ai_analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAIAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.StartAIAnalysisResponse({}));
  }

  /**
   * 启动AI作业分析
   * 
   * @param request - StartAIAnalysisRequest
   * @returns StartAIAnalysisResponse
   */
  async startAIAnalysis(request: $_model.StartAIAnalysisRequest): Promise<$_model.StartAIAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAIAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * 查看AI Infra差分分析结果
   * 
   * @param request - StartAIDiffAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIDiffAnalysisResponse
   */
  async startAIDiffAnalysisWithOptions(request: $_model.StartAIDiffAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartAIDiffAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.task1)) {
      body["task1"] = request.task1;
    }

    if (!$dara.isNull(request.task2)) {
      body["task2"] = request.task2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAIDiffAnalysis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/appObserv/aiAnalysis/diffAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAIDiffAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.StartAIDiffAnalysisResponse({}));
  }

  /**
   * 查看AI Infra差分分析结果
   * 
   * @param request - StartAIDiffAnalysisRequest
   * @returns StartAIDiffAnalysisResponse
   */
  async startAIDiffAnalysis(request: $_model.StartAIDiffAnalysisRequest): Promise<$_model.StartAIDiffAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAIDiffAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * 卸载 SysOM Agent
   * 
   * @param request - UninstallAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAgentResponse
   */
  async uninstallAgentWithOptions(request: $_model.UninstallAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/uninstall_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallAgentResponse>(await this.callApi(params, req, runtime), new $_model.UninstallAgentResponse({}));
  }

  /**
   * 卸载 SysOM Agent
   * 
   * @param request - UninstallAgentRequest
   * @returns UninstallAgentResponse
   */
  async uninstallAgent(request: $_model.UninstallAgentRequest): Promise<$_model.UninstallAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群卸载组件
   * 
   * @param request - UninstallAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAgentForClusterResponse
   */
  async uninstallAgentForClusterWithOptions(request: $_model.UninstallAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/uninstall_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallAgentForClusterResponse>(await this.callApi(params, req, runtime), new $_model.UninstallAgentForClusterResponse({}));
  }

  /**
   * 给集群卸载组件
   * 
   * @param request - UninstallAgentForClusterRequest
   * @returns UninstallAgentForClusterResponse
   */
  async uninstallAgentForCluster(request: $_model.UninstallAgentForClusterRequest): Promise<$_model.UninstallAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallAgentForClusterWithOptions(request, headers, runtime);
  }

  /**
   * 用户更新推送告警策略的状态
   * 
   * @param request - UpdateAlertEnabledRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertEnabledResponse
   */
  async updateAlertEnabledWithOptions(request: $_model.UpdateAlertEnabledRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertEnabledResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertEnabled",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/updateEnabled`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertEnabledResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertEnabledResponse({}));
  }

  /**
   * 用户更新推送告警策略的状态
   * 
   * @param request - UpdateAlertEnabledRequest
   * @returns UpdateAlertEnabledResponse
   */
  async updateAlertEnabled(request: $_model.UpdateAlertEnabledRequest): Promise<$_model.UpdateAlertEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertEnabledWithOptions(request, headers, runtime);
  }

  /**
   * 更新推送告警策略
   * 
   * @param request - UpdateAlertStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertStrategyResponse
   */
  async updateAlertStrategyWithOptions(request: $_model.UpdateAlertStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.k8sLabel)) {
      body["k8sLabel"] = request.k8sLabel;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertStrategy",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/updateStrategy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertStrategyResponse({}));
  }

  /**
   * 更新推送告警策略
   * 
   * @param request - UpdateAlertStrategyRequest
   * @returns UpdateAlertStrategyResponse
   */
  async updateAlertStrategy(request: $_model.UpdateAlertStrategyRequest): Promise<$_model.UpdateAlertStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertStrategyWithOptions(request, headers, runtime);
  }

  /**
   * 异常项关注度更新
   * 
   * @param request - UpdateEventsAttentionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventsAttentionResponse
   */
  async updateEventsAttentionWithOptions(request: $_model.UpdateEventsAttentionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventsAttentionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.range)) {
      body["range"] = request.range;
    }

    if (!$dara.isNull(request.uuid)) {
      body["uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventsAttention",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/cluster_update_events_attention`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventsAttentionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventsAttentionResponse({}));
  }

  /**
   * 异常项关注度更新
   * 
   * @param request - UpdateEventsAttentionRequest
   * @returns UpdateEventsAttentionResponse
   */
  async updateEventsAttention(request: $_model.UpdateEventsAttentionRequest): Promise<$_model.UpdateEventsAttentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEventsAttentionWithOptions(request, headers, runtime);
  }

  /**
   * 获取功能模块配置
   * 
   * @param tmpReq - UpdateFuncSwitchRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFuncSwitchRecordResponse
   */
  async updateFuncSwitchRecordWithOptions(tmpReq: $_model.UpdateFuncSwitchRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFuncSwitchRecordResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFuncSwitchRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "params", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFuncSwitchRecord",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/func-switch/update-service-func-switch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFuncSwitchRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFuncSwitchRecordResponse({}));
  }

  /**
   * 获取功能模块配置
   * 
   * @param request - UpdateFuncSwitchRecordRequest
   * @returns UpdateFuncSwitchRecordResponse
   */
  async updateFuncSwitchRecord(request: $_model.UpdateFuncSwitchRecordRequest): Promise<$_model.UpdateFuncSwitchRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFuncSwitchRecordWithOptions(request, headers, runtime);
  }

  /**
   * 更新 SysOM Agent
   * 
   * @param request - UpgradeAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAgentResponse
   */
  async upgradeAgentWithOptions(request: $_model.UpgradeAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/upgrade_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeAgentResponse({}));
  }

  /**
   * 更新 SysOM Agent
   * 
   * @param request - UpgradeAgentRequest
   * @returns UpgradeAgentResponse
   */
  async upgradeAgent(request: $_model.UpgradeAgentRequest): Promise<$_model.UpgradeAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群更新组件
   * 
   * @param request - UpgradeAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAgentForClusterResponse
   */
  async upgradeAgentForClusterWithOptions(request: $_model.UpgradeAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/upgrade_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeAgentForClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeAgentForClusterResponse({}));
  }

  /**
   * 给集群更新组件
   * 
   * @param request - UpgradeAgentForClusterRequest
   * @returns UpgradeAgentForClusterResponse
   */
  async upgradeAgentForCluster(request: $_model.UpgradeAgentForClusterRequest): Promise<$_model.UpgradeAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeAgentForClusterWithOptions(request, headers, runtime);
  }

}

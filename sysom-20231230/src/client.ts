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
   * This API is used to authorize SysOM to diagnose ECS instances under your account. You can only invoke the InvokeDiagnosis API to initiate diagnosis on a specific ECS instance after authorizing it through this API.
   * 
   * @remarks
   * >Notice: The diagnosis feature requires a service-linked role to be created under a Resource Access Management (RAM) user. When you call this API, it automatically checks whether the service-linked role exists. If the role does not exist, the API automatically creates it. This requires the RAM user invoking this API to have the ram:CreateServiceLinkedRole permission.</notice>
   * When calling this API to authorize SysOM to diagnose ECS instances, note the following:
   * - Each authorization is valid for 7 days. After 7 days, the authorization expires, and you must call this API again to re-authorize.
   * - If the SysOM service-linked role (AliyunServiceRoleForSysom) does not exist when you call this API, it will be automatically created. This requires the RAM user invoking this API to have the `ram:CreateServiceLinkedRole` permission.
   * - When you authorize a specific instance through this API, the system automatically adds the label `sysom:diagnosis` to the target ECS instance. SysOM can only diagnose instances that have this label.
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
   * This API is used to authorize SysOM to diagnose ECS instances under your account. You can only invoke the InvokeDiagnosis API to initiate diagnosis on a specific ECS instance after authorizing it through this API.
   * 
   * @remarks
   * >Notice: The diagnosis feature requires a service-linked role to be created under a Resource Access Management (RAM) user. When you call this API, it automatically checks whether the service-linked role exists. If the role does not exist, the API automatically creates it. This requires the RAM user invoking this API to have the ram:CreateServiceLinkedRole permission.</notice>
   * When calling this API to authorize SysOM to diagnose ECS instances, note the following:
   * - Each authorization is valid for 7 days. After 7 days, the authorization expires, and you must call this API again to re-authorize.
   * - If the SysOM service-linked role (AliyunServiceRoleForSysom) does not exist when you call this API, it will be automatically created. This requires the RAM user invoking this API to have the `ram:CreateServiceLinkedRole` permission.
   * - When you authorize a specific instance through this API, the system automatically adds the label `sysom:diagnosis` to the target ECS instance. SysOM can only diagnose instances that have this label.
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
   * Check whether the target instance is supported by SysOM
   * 
   * @remarks
   * The instance list returned by this API includes only machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * Check whether the target instance is supported by SysOM
   * 
   * @remarks
   * The instance list returned by this API includes only machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * High-CPU agent streaming API
   * 
   * @param request - CpuHighAgentStreamResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CpuHighAgentStreamResponseResponse
   */
  async *cpuHighAgentStreamResponseWithSSE(request: $_model.CpuHighAgentStreamResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CpuHighAgentStreamResponseResponse, any, unknown> {
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
      action: "CpuHighAgentStreamResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/highCpuAgent/streamResponse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CpuHighAgentStreamResponseResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CpuHighAgentStreamResponseResponse({}));
      }

    }
  }

  /**
   * High-CPU agent streaming API
   * 
   * @param request - CpuHighAgentStreamResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CpuHighAgentStreamResponseResponse
   */
  async cpuHighAgentStreamResponseWithOptions(request: $_model.CpuHighAgentStreamResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CpuHighAgentStreamResponseResponse> {
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
      action: "CpuHighAgentStreamResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/highCpuAgent/streamResponse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CpuHighAgentStreamResponseResponse>(await this.callApi(params, req, runtime), new $_model.CpuHighAgentStreamResponseResponse({}));
  }

  /**
   * High-CPU agent streaming API
   * 
   * @param request - CpuHighAgentStreamResponseRequest
   * @returns CpuHighAgentStreamResponseResponse
   */
  async cpuHighAgentStreamResponse(request: $_model.CpuHighAgentStreamResponseRequest): Promise<$_model.CpuHighAgentStreamResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cpuHighAgentStreamResponseWithOptions(request, headers, runtime);
  }

  /**
   * This API is used to create an alert contact for push notifications.
   * 
   * @param request - CreateAlertDestinationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertDestinationResponse
   */
  async createAlertDestinationWithOptions(request: $_model.CreateAlertDestinationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertDestinationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.target)) {
      body["target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertDestination",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/createDestination`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertDestinationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertDestinationResponse({}));
  }

  /**
   * This API is used to create an alert contact for push notifications.
   * 
   * @param request - CreateAlertDestinationRequest
   * @returns CreateAlertDestinationResponse
   */
  async createAlertDestination(request: $_model.CreateAlertDestinationRequest): Promise<$_model.CreateAlertDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertDestinationWithOptions(request, headers, runtime);
  }

  /**
   * Create an alert policy for push notifications
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
   * Create an alert policy for push notifications
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
   * 创建集群Vpc端点连接
   * 
   * @remarks
   * - 需配合aliyun-tea-openapi-inner包的call_sseapi接口使用
   * - 需要按通用LLM服务输入参数填充参数，转为string后赋给llmParamString
   * - 返回数据需将string转为dict后使用，参考通用LLM服务返回格式
   * 
   * @param request - CreateClusterVpcEndpointConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterVpcEndpointConnectionResponse
   */
  async createClusterVpcEndpointConnectionWithOptions(request: $_model.CreateClusterVpcEndpointConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterVpcEndpointConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["clusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClusterVpcEndpointConnection",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/k8sProxy/access/createClusterVpcEndpointConnection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterVpcEndpointConnectionResponse({}));
  }

  /**
   * 创建集群Vpc端点连接
   * 
   * @remarks
   * - 需配合aliyun-tea-openapi-inner包的call_sseapi接口使用
   * - 需要按通用LLM服务输入参数填充参数，转为string后赋给llmParamString
   * - 返回数据需将string转为dict后使用，参考通用LLM服务返回格式
   * 
   * @param request - CreateClusterVpcEndpointConnectionRequest
   * @returns CreateClusterVpcEndpointConnectionResponse
   */
  async createClusterVpcEndpointConnection(request: $_model.CreateClusterVpcEndpointConnectionRequest): Promise<$_model.CreateClusterVpcEndpointConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterVpcEndpointConnectionWithOptions(request, headers, runtime);
  }

  /**
   * 创建实例巡检
   * 
   * @param request - CreateInstanceInspectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceInspectionResponse
   */
  async createInstanceInspectionWithOptions(request: $_model.CreateInstanceInspectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceInspectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.items)) {
      body["items"] = request.items;
    }

    if (!$dara.isNull(request.metricSource)) {
      body["metricSource"] = request.metricSource;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceInspection",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/inspection/createInstanceInspection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceInspectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceInspectionResponse({}));
  }

  /**
   * 创建实例巡检
   * 
   * @param request - CreateInstanceInspectionRequest
   * @returns CreateInstanceInspectionResponse
   */
  async createInstanceInspection(request: $_model.CreateInstanceInspectionRequest): Promise<$_model.CreateInstanceInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceInspectionWithOptions(request, headers, runtime);
  }

  /**
   * This API creates an intelligent breakdown diagnosis task to diagnose the vmcore or dmesg log file provided in the parameters.
   * 
   * @param request - CreateVmcoreDiagnosisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVmcoreDiagnosisTaskResponse
   */
  async createVmcoreDiagnosisTaskWithOptions(request: $_model.CreateVmcoreDiagnosisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVmcoreDiagnosisTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.debuginfoCommonUrl)) {
      body["debuginfoCommonUrl"] = request.debuginfoCommonUrl;
    }

    if (!$dara.isNull(request.debuginfoUrl)) {
      body["debuginfoUrl"] = request.debuginfoUrl;
    }

    if (!$dara.isNull(request.dmesgUrl)) {
      body["dmesgUrl"] = request.dmesgUrl;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.vmcoreUrl)) {
      body["vmcoreUrl"] = request.vmcoreUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVmcoreDiagnosisTask",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/crashAgent/diagnosis/createDiagnosisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVmcoreDiagnosisTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVmcoreDiagnosisTaskResponse({}));
  }

  /**
   * This API creates an intelligent breakdown diagnosis task to diagnose the vmcore or dmesg log file provided in the parameters.
   * 
   * @param request - CreateVmcoreDiagnosisTaskRequest
   * @returns CreateVmcoreDiagnosisTaskResponse
   */
  async createVmcoreDiagnosisTask(request: $_model.CreateVmcoreDiagnosisTaskRequest): Promise<$_model.CreateVmcoreDiagnosisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVmcoreDiagnosisTaskWithOptions(request, headers, runtime);
  }

  /**
   * This API is used to delete an alert contact.
   * 
   * @param request - DeleteAlertDestinationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertDestinationResponse
   */
  async deleteAlertDestinationWithOptions(request: $_model.DeleteAlertDestinationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertDestinationResponse> {
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
      action: "DeleteAlertDestination",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/deleteDestination`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertDestinationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertDestinationResponse({}));
  }

  /**
   * This API is used to delete an alert contact.
   * 
   * @param request - DeleteAlertDestinationRequest
   * @returns DeleteAlertDestinationResponse
   */
  async deleteAlertDestination(request: $_model.DeleteAlertDestinationRequest): Promise<$_model.DeleteAlertDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertDestinationWithOptions(request, headers, runtime);
  }

  /**
   * User deletes the alert policy for push notifications.
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
   * User deletes the alert policy for push notifications.
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
   * Query metrics
   * 
   * @remarks
   * The instance list obtained by this API includes only the machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
   * 
   * @param request - DescribeMetricListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: $_model.DescribeMetricListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.metricName)) {
      query["metricName"] = request.metricName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/get/describeMetricList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricListResponse({}));
  }

  /**
   * Query metrics
   * 
   * @remarks
   * The instance list obtained by this API includes only the machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
   * 
   * @param request - DescribeMetricListRequest
   * @returns DescribeMetricListResponse
   */
  async describeMetricList(request: $_model.DescribeMetricListRequest): Promise<$_model.DescribeMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMetricListWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the Return Result of the copilot service
   * 
   * @remarks
   * - You must fill in the input parameters according to the standard LLM service input parameters, convert them into a string, and assign the result to llmParamString.  
   * - The returned data must be converted from a string to a dict before use. Refer to the standard LLM service return format.
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
   * Obtain the Return Result of the copilot service
   * 
   * @remarks
   * - You must fill in the input parameters according to the standard LLM service input parameters, convert them into a string, and assign the result to llmParamString.  
   * - The returned data must be converted from a string to a dict before use. Refer to the standard LLM service return format.
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
   * Stream Copilot service API
   * 
   * @remarks
   * - Must be used together with the call_sseapi API of the aliyun-tea-openapi-inner package.  
   * - You must populate the input parameters according to the standard LLM service input parameters, convert them into a string, and assign the result to llmParamString.  
   * - The returned data is a string that you must convert into a dictionary for use, following the standard LLM service response format.
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.GenerateCopilotStreamResponseResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GenerateCopilotStreamResponseResponse({}));
      }

    }
  }

  /**
   * Stream Copilot service API
   * 
   * @remarks
   * - Must be used together with the call_sseapi API of the aliyun-tea-openapi-inner package.  
   * - You must populate the input parameters according to the standard LLM service input parameters, convert them into a string, and assign the result to llmParamString.  
   * - The returned data is a string that you must convert into a dictionary for use, following the standard LLM service response format.
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
   * Stream Copilot service API
   * 
   * @remarks
   * - Must be used together with the call_sseapi API of the aliyun-tea-openapi-inner package.  
   * - You must populate the input parameters according to the standard LLM service input parameters, convert them into a string, and assign the result to llmParamString.  
   * - The returned data is a string that you must convert into a dictionary for use, following the standard LLM service response format.
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
   * View AI Infra Analysis Result
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
   * View AI Infra Analysis Result
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
   * Obtain the quantity of unprocessed (undiagnosed) anomalous activity at different Levels for edge zones/pods.
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
   * Obtain the quantity of unprocessed (undiagnosed) anomalous activity at different Levels for edge zones/pods.
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
   * Retrieve the details of a widget
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
   * Retrieve the details of a widget
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
   * Obtain the task execution status of Agent installation
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
   * Obtain the task execution status of Agent installation
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
   * This API is used to obtain the specified alert contact information.
   * 
   * @param request - GetAlertDestinationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertDestinationResponse
   */
  async getAlertDestinationWithOptions(request: $_model.GetAlertDestinationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertDestinationResponse> {
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
      action: "GetAlertDestination",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/getDestination`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertDestinationResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertDestinationResponse({}));
  }

  /**
   * This API is used to obtain the specified alert contact information.
   * 
   * @param request - GetAlertDestinationRequest
   * @returns GetAlertDestinationResponse
   */
  async getAlertDestination(request: $_model.GetAlertDestinationRequest): Promise<$_model.GetAlertDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlertDestinationWithOptions(request, headers, runtime);
  }

  /**
   * Obtain an alert for a user by policy ID.
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
   * Obtain an alert for a user by policy ID.
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
   * Retrieve copilot chat history
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
   * Retrieve copilot chat history
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
   * Obtain the diagnosis result.
   * 
   * @remarks
   * The diagnosis flow is asynchronous. Therefore, when you invoke this API, the diagnosis may still be executing and not yet ended. You can check the `data.status` field in the returned data to determine the status. When `data.status == "Success"`, it indicates that the diagnosis succeeded, and you can read the diagnosis result from `data.result`.
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
   * Obtain the diagnosis result.
   * 
   * @remarks
   * The diagnosis flow is asynchronous. Therefore, when you invoke this API, the diagnosis may still be executing and not yet ended. You can check the `data.status` field in the returned data to determine the status. When `data.status == "Success"`, it indicates that the diagnosis succeeded, and you can read the diagnosis result from `data.result`.
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
   * Obtain the proportion of edge zone/pod health statuses over a period of time
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
   * Obtain the proportion of edge zone/pod health statuses over a period of time
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
   * Obtain the number of edge zones in a cluster or the number of pods in an edge zone
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
   * Obtain the number of edge zones in a cluster or the number of pods in an edge zone
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
   * Obtain the list of a specific field under an instance.
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
   * Obtain the list of a specific field under an instance.
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
   * Obtain hot spot analysis results
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
   * Obtain hot spot analysis results
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
   * Obtain hot spot comparison tracing results
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
   * Obtain hot spot comparison tracing results
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
   * Obtain the hot spot instance list
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
   * Obtain the hot spot instance list
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
   * Obtain the PID list of a specific instance
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
   * Obtain the PID list of a specific instance
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
   * Obtain hot spot tracing results
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
   * Obtain hot spot tracing results
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
   * 获取巡检报告
   * 
   * @param request - GetInspectionReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInspectionReportResponse
   */
  async getInspectionReportWithOptions(request: $_model.GetInspectionReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInspectionReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportId)) {
      query["reportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInspectionReport",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/inspection/getInspectionReport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInspectionReportResponse>(await this.callApi(params, req, runtime), new $_model.GetInspectionReportResponse({}));
  }

  /**
   * 获取巡检报告
   * 
   * @param request - GetInspectionReportRequest
   * @returns GetInspectionReportResponse
   */
  async getInspectionReport(request: $_model.GetInspectionReportRequest): Promise<$_model.GetInspectionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInspectionReportWithOptions(request, headers, runtime);
  }

  /**
   * Obtain real-time cluster/edge zone health degree score
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
   * Obtain real-time cluster/edge zone health degree score
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
   * AI Infra retrieves the list of analysis records
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
   * AI Infra retrieves the list of analysis records
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
   * Obtain the proportion of abnormal issues in pods within edge zones or in an edge zone within a cluster over a specified period of time.
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
   * Obtain the proportion of abnormal issues in pods within edge zones or in an edge zone within a cluster over a specified period of time.
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
   * Retrieve the health score trend
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
   * Retrieve the health score trend
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
   * Obtain real-time resource usage of clusters or edge zones
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
   * Obtain real-time resource usage of clusters or edge zones
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
   * Obtain Function Modules Configuration
   * 
   * @remarks
   * This API is used to retrieve the service configuration status.
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
   * Obtain Function Modules Configuration
   * 
   * @remarks
   * This API is used to retrieve the service configuration status.
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
   * This API queries the task execution status and diagnosis result based on the job ID.
   * 
   * @param request - GetVmcoreDiagnosisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVmcoreDiagnosisTaskResponse
   */
  async getVmcoreDiagnosisTaskWithOptions(request: $_model.GetVmcoreDiagnosisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVmcoreDiagnosisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVmcoreDiagnosisTask",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/crashAgent/diagnosis/queryTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVmcoreDiagnosisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetVmcoreDiagnosisTaskResponse({}));
  }

  /**
   * This API queries the task execution status and diagnosis result based on the job ID.
   * 
   * @param request - GetVmcoreDiagnosisTaskRequest
   * @returns GetVmcoreDiagnosisTaskResponse
   */
  async getVmcoreDiagnosisTask(request: $_model.GetVmcoreDiagnosisTaskRequest): Promise<$_model.GetVmcoreDiagnosisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVmcoreDiagnosisTaskWithOptions(request, headers, runtime);
  }

  /**
   * Initialize SysOM and ensure that the service role exists.
   * 
   * @remarks
   * Some SysOM APIs require role assumption based on the `AliyunServiceRoleForSysom` service role. Therefore, before using SysOM features, you must invoke this API to perform initialization and ensure that the service role has been created.  
   * - `check_only`: If this parameter is set to True, the API only checks whether the service role exists and does not create it. If this parameter is set to False or omitted, the API automatically creates the service role if it does not exist.
   * >  
   * > Note: When you invoke this API to initialize the role, you are deemed to have accepted the User Agreement of the operating system console by default. For more information, see [Overview of the Operating System Console](https://help.aliyun.com/zh/alinux/product-overview/os-console-overview?spm=a2c4g.11186623.help-menu-2632541.d_0_7.35a829ffLjQtgg) and [Alibaba Cloud Service Trial Terms](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202001091714_51956.html).
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
   * Initialize SysOM and ensure that the service role exists.
   * 
   * @remarks
   * Some SysOM APIs require role assumption based on the `AliyunServiceRoleForSysom` service role. Therefore, before using SysOM features, you must invoke this API to perform initialization and ensure that the service role has been created.  
   * - `check_only`: If this parameter is set to True, the API only checks whether the service role exists and does not create it. If this parameter is set to False or omitted, the API automatically creates the service role if it does not exist.
   * >  
   * > Note: When you invoke this API to initialize the role, you are deemed to have accepted the User Agreement of the operating system console by default. For more information, see [Overview of the Operating System Console](https://help.aliyun.com/zh/alinux/product-overview/os-console-overview?spm=a2c4g.11186623.help-menu-2632541.d_0_7.35a829ffLjQtgg) and [Alibaba Cloud Service Trial Terms](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202001091714_51956.html).
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
   * Install an agent on the specified instance
   * 
   * @remarks
   * The API call to install an agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the job execution status.
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
   * Install an agent on the specified instance
   * 
   * @remarks
   * The API call to install an agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the job execution status.
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
   * Install widgets on a cluster
   * 
   * @remarks
   * After you install widgets on the specified ACK cluster:  
   * 1. When the cluster is first enrolled, widgets are installed on all ECS instances in the cluster (if the cluster contains more than 50 nodes, widgets are installed on only 50 nodes in the first batch).  
   * 2. The operating system console periodically checks for scale-in or scale-out events in the enrolled cluster. Whenever new ECS instances are added to the cluster, the operating system console automatically installs widgets on them without requiring user intervention.
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
   * Install widgets on a cluster
   * 
   * @remarks
   * After you install widgets on the specified ACK cluster:  
   * 1. When the cluster is first enrolled, widgets are installed on all ECS instances in the cluster (if the cluster contains more than 50 nodes, widgets are installed on only 50 nodes in the first batch).  
   * 2. The operating system console periodically checks for scale-in or scale-out events in the enrolled cluster. Whenever new ECS instances are added to the cluster, the operating system console automatically installs widgets on them without requiring user intervention.
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
   * Initiate diagnosis for anomalous activity
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
   * Initiate diagnosis for anomalous activity
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
   * Initiate a diagnosis.
   * 
   * @remarks
   * Diagnosing the target ECS instance has the following requirements:  
   * - The instance status of the target ECS instance must be running.  
   * - The Cloud Assistant Agent must already be installed on the target ECS instance. If it is not installed, install it by referring to [Install the Cloud Assistant Agent](https://help.aliyun.com/zh/ecs/user-guide/install-the-cloud-assistant-agent).  
   * - You must invoke the AuthDiagnosis API to authorize SysOM to diagnose the target ECS instance. If this authorization is not granted, the API call will fail immediately.  
   * - This API depends on the existence of the SysOM service-linked role (AliyunServiceRoleForSysom). This API does not create the service-linked role automatically. If the service-linked role does not exist, you must first call AuthDiagnosis to perform authorization, which will create the aforementioned service-linked role.
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
   * Initiate a diagnosis.
   * 
   * @remarks
   * Diagnosing the target ECS instance has the following requirements:  
   * - The instance status of the target ECS instance must be running.  
   * - The Cloud Assistant Agent must already be installed on the target ECS instance. If it is not installed, install it by referring to [Install the Cloud Assistant Agent](https://help.aliyun.com/zh/ecs/user-guide/install-the-cloud-assistant-agent).  
   * - You must invoke the AuthDiagnosis API to authorize SysOM to diagnose the target ECS instance. If this authorization is not granted, the API call will fail immediately.  
   * - This API depends on the existence of the SysOM service-linked role (AliyunServiceRoleForSysom). This API does not create the service-linked role automatically. If the service-linked role does not exist, you must first call AuthDiagnosis to perform authorization, which will create the aforementioned service-linked role.
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
   * Obtain anomalous activity information for clusters, edge zones, or pods within a specified time period.
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
   * Obtain anomalous activity information for clusters, edge zones, or pods within a specified time period.
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
   * List installation records of the agent
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
   * List installation records of the agent
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
   * Retrieve the Agent List
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
   * Retrieve the Agent List
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
   * This API is used to obtain the alert contact list.
   * 
   * @param request - ListAlertDestinationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertDestinationsResponse
   */
  async listAlertDestinationsWithOptions(request: $_model.ListAlertDestinationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertDestinationsResponse> {
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
      action: "ListAlertDestinations",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/listDestinations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertDestinationsResponse({}));
  }

  /**
   * This API is used to obtain the alert contact list.
   * 
   * @param request - ListAlertDestinationsRequest
   * @returns ListAlertDestinationsResponse
   */
  async listAlertDestinations(request: $_model.ListAlertDestinationsRequest): Promise<$_model.ListAlertDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertDestinationsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve all alerting items
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
   * Retrieve all alerting items
   * @returns ListAlertItemsResponse
   */
  async listAlertItems(): Promise<$_model.ListAlertItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertItemsWithOptions(headers, runtime);
  }

  /**
   * Used to obtain all alert policies for push notifications of a user
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
   * Used to obtain all alert policies for push notifications of a user
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
   * This API is used to obtain a list of managed or unmanaged instances along with instance information.
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
   * This API is used to obtain a list of managed or unmanaged instances along with instance information.
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
   * Obtain cluster widget installation records
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
   * Obtain cluster widget installation records
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
   * Retrieve all clusters managed by the current user
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
   * Retrieve all clusters managed by the current user
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
   * Obtain the diagnosis history list.
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
   * Obtain the diagnosis history list.
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
   * Obtain a list of cluster node or pod health scores within a specified time period.
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
   * Obtain a list of cluster node or pod health scores within a specified time period.
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
   * Obtain instance status
   * 
   * @remarks
   * This API is used to obtain the list of machines managed by SysOM.
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
   * Obtain instance status
   * 
   * @remarks
   * This API is used to obtain the list of machines managed by SysOM.
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
   * Obtain the instance list
   * 
   * @remarks
   * The instance list returned by this API includes only the machines that have been managed by SysOM. If an ECS instance exists but has not been managed by SysOM, it will not appear in the list.
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
   * Obtain the instance list
   * 
   * @remarks
   * The instance list returned by this API includes only the machines that have been managed by SysOM. If an ECS instance exists but has not been managed by SysOM, it will not appear in the list.
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
   * Obtain a list of ECS information, such as the tag list, public IP address list, and so on.
   * 
   * @remarks
   * The instance list returned by this API includes only machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * Obtain a list of ECS information, such as the tag list, public IP address list, and so on.
   * 
   * @remarks
   * The instance list returned by this API includes only machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * Obtain information about managed or unmanaged instances, including ECS information.
   * 
   * @remarks
   * The current API returns a list of instances that have already been managed by SysOM. If an ECS instance exists but has not been managed by SysOM, it will not appear in the list.
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
   * Obtain information about managed or unmanaged instances, including ECS information.
   * 
   * @remarks
   * The current API returns a list of instances that have already been managed by SysOM. If an ECS instance exists but has not been managed by SysOM, it will not appear in the list.
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
   * Obtain the list of instances for plugin installation, update, or uninstallation
   * 
   * @remarks
   * The instance list returned by this API consists of machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * Obtain the list of instances for plugin installation, update, or uninstallation
   * 
   * @remarks
   * The instance list returned by this API consists of machines that are already managed by SysOM. If an ECS instance exists but is not managed by SysOM, it will not appear in the list.
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
   * Retrieve the list of pods in a cluster or instance
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
   * Retrieve the list of pods in a cluster or instance
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
   * List all areas where machines are managed
   * 
   * @remarks
   * This API retrieves the list of areas where the current user has machines managed by SysOM. If the user has ECS instances in an area but those instances are not managed by SysOM, that area will not appear in the API response.
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
   * List all areas where machines are managed
   * 
   * @remarks
   * This API retrieves the list of areas where the current user has machines managed by SysOM. If the user has ECS instances in an area but those instances are not managed by SysOM, that area will not appear in the API response.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * Query the history list of breakdown diagnosis jobs.
   * 
   * @param request - ListVmcoreDiagnosisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVmcoreDiagnosisTaskResponse
   */
  async listVmcoreDiagnosisTaskWithOptions(request: $_model.ListVmcoreDiagnosisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVmcoreDiagnosisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.days)) {
      query["days"] = request.days;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVmcoreDiagnosisTask",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/crashAgent/diagnosis/queryTaskList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVmcoreDiagnosisTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListVmcoreDiagnosisTaskResponse({}));
  }

  /**
   * Query the history list of breakdown diagnosis jobs.
   * 
   * @param request - ListVmcoreDiagnosisTaskRequest
   * @returns ListVmcoreDiagnosisTaskResponse
   */
  async listVmcoreDiagnosisTask(request: $_model.ListVmcoreDiagnosisTaskRequest): Promise<$_model.ListVmcoreDiagnosisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVmcoreDiagnosisTaskWithOptions(request, headers, runtime);
  }

  /**
   * Start an AI job analysis.
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
   * Start an AI job analysis.
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
   * Start AI Infra differential analysis.
   * 
   * @remarks
   * Currently, only comparative analysis between different steps under the same AI Infra analysis record and the same pid is supported.
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
   * Start AI Infra differential analysis.
   * 
   * @remarks
   * Currently, only comparative analysis between different steps under the same AI Infra analysis record and the same pid is supported.
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
   * Uninstall a specified version of the widget
   * 
   * @remarks
   * The API call to uninstall an Agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the execution status of the job.
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
   * Uninstall a specified version of the widget
   * 
   * @remarks
   * The API call to uninstall an Agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the execution status of the job.
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
   * Uninstall a widget from a cluster
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
   * Uninstall a widget from a cluster
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
   * This API is used to update an alert contact.
   * 
   * @remarks
   * 、
   * 
   * @param request - UpdateAlertDestinationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertDestinationResponse
   */
  async updateAlertDestinationWithOptions(request: $_model.UpdateAlertDestinationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertDestinationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.target)) {
      body["target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertDestination",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/alertPusher/alert/updateDestination`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertDestinationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertDestinationResponse({}));
  }

  /**
   * This API is used to update an alert contact.
   * 
   * @remarks
   * 、
   * 
   * @param request - UpdateAlertDestinationRequest
   * @returns UpdateAlertDestinationResponse
   */
  async updateAlertDestination(request: $_model.UpdateAlertDestinationRequest): Promise<$_model.UpdateAlertDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertDestinationWithOptions(request, headers, runtime);
  }

  /**
   * User updates the status of a push alert policy
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
   * User updates the status of a push alert policy
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
   * Update push alert policy
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
   * Update push alert policy
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
   * Update the follow level of an anomalous activity to adjust the sensitivity of the anomaly detection algorithm by modifying the follow level.
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
   * Update the follow level of an anomalous activity to adjust the sensitivity of the anomaly detection algorithm by modifying the follow level.
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
   * Update the service function module configuration.
   * 
   * @remarks
   * - You must fill in the parameters according to the input parameters of the general LLM service, convert them to a string, and assign the result to `llmParamString`.  
   * - To use the returned data, convert the string back to a dictionary, following the response format of the general LLM service.
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
   * Update the service function module configuration.
   * 
   * @remarks
   * - You must fill in the parameters according to the input parameters of the general LLM service, convert them to a string, and assign the result to `llmParamString`.  
   * - To use the returned data, convert the string back to a dictionary, following the response format of the general LLM service.
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
   * Update the version of the installed widget to the specified version.
   * 
   * @remarks
   * The API call to update the Agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the execution status of the job.
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
   * Update the version of the installed widget to the specified version.
   * 
   * @remarks
   * The API call to update the Agent is asynchronous. After invoking this API, a task_id is returned. You can use this ID to invoke the GetAgentTask API to retrieve the execution status of the job.
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
   * Update widget for cluster
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
   * Update widget for cluster
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

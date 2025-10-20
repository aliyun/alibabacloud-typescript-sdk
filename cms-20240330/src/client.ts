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
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 安装接入组件，代表进行一次接入
   * 
   * @param request - CreateAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAddonReleaseResponse
   */
  async createAddonReleaseWithOptions(policyId: string, request: $_model.CreateAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAddonReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      body["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      body["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.entityRules)) {
      body["entityRules"] = request.entityRules;
    }

    if (!$dara.isNull(request.envType)) {
      body["envType"] = request.envType;
    }

    if (!$dara.isNull(request.parentAddonReleaseId)) {
      body["parentAddonReleaseId"] = request.parentAddonReleaseId;
    }

    if (!$dara.isNull(request.releaseName)) {
      body["releaseName"] = request.releaseName;
    }

    if (!$dara.isNull(request.values)) {
      body["values"] = request.values;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateAddonReleaseResponse({}));
  }

  /**
   * 安装接入组件，代表进行一次接入
   * 
   * @param request - CreateAddonReleaseRequest
   * @returns CreateAddonReleaseResponse
   */
  async createAddonRelease(policyId: string, request: $_model.CreateAddonReleaseRequest): Promise<$_model.CreateAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAddonReleaseWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 创建聚合任务组
   * 
   * @param request - CreateAggTaskGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggTaskGroupResponse
   */
  async createAggTaskGroupWithOptions(instanceId: string, request: $_model.CreateAggTaskGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggTaskGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.overrideIfExists)) {
      query["overrideIfExists"] = request.overrideIfExists;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggTaskGroupConfig)) {
      body["aggTaskGroupConfig"] = request.aggTaskGroupConfig;
    }

    if (!$dara.isNull(request.aggTaskGroupConfigType)) {
      body["aggTaskGroupConfigType"] = request.aggTaskGroupConfigType;
    }

    if (!$dara.isNull(request.aggTaskGroupName)) {
      body["aggTaskGroupName"] = request.aggTaskGroupName;
    }

    if (!$dara.isNull(request.cronExpr)) {
      body["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.delay)) {
      body["delay"] = request.delay;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.fromTime)) {
      body["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.maxRetries)) {
      body["maxRetries"] = request.maxRetries;
    }

    if (!$dara.isNull(request.maxRunTimeInSeconds)) {
      body["maxRunTimeInSeconds"] = request.maxRunTimeInSeconds;
    }

    if (!$dara.isNull(request.precheckString)) {
      body["precheckString"] = request.precheckString;
    }

    if (!$dara.isNull(request.scheduleMode)) {
      body["scheduleMode"] = request.scheduleMode;
    }

    if (!$dara.isNull(request.scheduleTimeExpr)) {
      body["scheduleTimeExpr"] = request.scheduleTimeExpr;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      body["targetPrometheusId"] = request.targetPrometheusId;
    }

    if (!$dara.isNull(request.toTime)) {
      body["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggTaskGroupResponse({}));
  }

  /**
   * 创建聚合任务组
   * 
   * @param request - CreateAggTaskGroupRequest
   * @returns CreateAggTaskGroupResponse
   */
  async createAggTaskGroup(instanceId: string, request: $_model.CreateAggTaskGroupRequest): Promise<$_model.CreateAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAggTaskGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建EntityStore相关存储
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEntityStoreResponse
   */
  async createEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateEntityStoreResponse({}));
  }

  /**
   * 创建EntityStore相关存储
   * @returns CreateEntityStoreResponse
   */
  async createEntityStore(workspaceName: string): Promise<$_model.CreateEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 创建接入中心策略
   * 
   * @param request - CreateIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntegrationPolicyResponse
   */
  async createIntegrationPolicyWithOptions(request: $_model.CreateIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntegrationPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityGroup)) {
      body["entityGroup"] = request.entityGroup;
    }

    if (!$dara.isNull(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["policyType"] = request.policyType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntegrationPolicyResponse({}));
  }

  /**
   * 创建接入中心策略
   * 
   * @param request - CreateIntegrationPolicyRequest
   * @returns CreateIntegrationPolicyResponse
   */
  async createIntegrationPolicy(request: $_model.CreateIntegrationPolicyRequest): Promise<$_model.CreateIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIntegrationPolicyWithOptions(request, headers, runtime);
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstanceWithOptions(request: $_model.CreatePrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.archiveDuration)) {
      body["archiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      body["authFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      body["enableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      body["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.storageDuration)) {
      body["storageDuration"] = request.storageDuration;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusInstanceResponse({}));
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstance(request: $_model.CreatePrometheusInstanceRequest): Promise<$_model.CreatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建prometheus视图
   * 
   * @param request - CreatePrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusViewResponse
   */
  async createPrometheusViewWithOptions(request: $_model.CreatePrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusViewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.prometheusInstances)) {
      body["prometheusInstances"] = request.prometheusInstances;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      body["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusViewResponse({}));
  }

  /**
   * 创建prometheus视图
   * 
   * @param request - CreatePrometheusViewRequest
   * @returns CreatePrometheusViewResponse
   */
  async createPrometheusView(request: $_model.CreatePrometheusViewRequest): Promise<$_model.CreatePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusViewWithOptions(request, headers, runtime);
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusVirtualInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusVirtualInstanceResponse
   */
  async createPrometheusVirtualInstanceWithOptions(request: $_model.CreatePrometheusVirtualInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusVirtualInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusVirtualInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/virtual-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusVirtualInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusVirtualInstanceResponse({}));
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusVirtualInstanceRequest
   * @returns CreatePrometheusVirtualInstanceResponse
   */
  async createPrometheusVirtualInstance(request: $_model.CreatePrometheusVirtualInstanceRequest): Promise<$_model.CreatePrometheusVirtualInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusVirtualInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建Service
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(workspace: string, request: $_model.CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      body["serviceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * 创建Service
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(workspace: string, request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 创建票据
   * 
   * @param request - CreateTicketRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["expirationTime"] = request.expirationTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/tickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * 创建票据
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTicketWithOptions(request, headers, runtime);
  }

  /**
   * 创建Umodel配置
   * 
   * @param request - CreateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUmodelResponse
   */
  async createUmodelWithOptions(workspace: string, request: $_model.CreateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.CreateUmodelResponse({}));
  }

  /**
   * 创建Umodel配置
   * 
   * @param request - CreateUmodelRequest
   * @returns CreateUmodelResponse
   */
  async createUmodel(workspace: string, request: $_model.CreateUmodelRequest): Promise<$_model.CreateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 删除addon release信息
   * 
   * @param request - DeleteAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonReleaseWithOptions(policyId: string, request: $_model.DeleteAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAddonReleaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["releaseName"] = request.releaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAddonReleaseResponse({}));
  }

  /**
   * 删除addon release信息
   * 
   * @param request - DeleteAddonReleaseRequest
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonRelease(policyId: string, request: $_model.DeleteAddonReleaseRequest): Promise<$_model.DeleteAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAddonReleaseWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 删除聚合任务组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggTaskGroupResponse
   */
  async deleteAggTaskGroupWithOptions(instanceId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggTaskGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggTaskGroupResponse({}));
  }

  /**
   * 删除聚合任务组
   * @returns DeleteAggTaskGroupResponse
   */
  async deleteAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.DeleteAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * 删除EntityStore相关存储
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEntityStoreResponse({}));
  }

  /**
   * 删除EntityStore相关存储
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStore(workspaceName: string): Promise<$_model.DeleteEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 删除接入中心策略
   * 
   * @param request - DeleteIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntegrationPolicyResponse
   */
  async deleteIntegrationPolicyWithOptions(policyId: string, request: $_model.DeleteIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntegrationPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntegrationPolicyResponse({}));
  }

  /**
   * 删除接入中心策略
   * 
   * @param request - DeleteIntegrationPolicyRequest
   * @returns DeleteIntegrationPolicyResponse
   */
  async deleteIntegrationPolicy(policyId: string, request: $_model.DeleteIntegrationPolicyRequest): Promise<$_model.DeleteIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIntegrationPolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 删除prom实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusInstanceResponse
   */
  async deletePrometheusInstanceWithOptions(prometheusInstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusInstanceResponse({}));
  }

  /**
   * 删除prom实例
   * @returns DeletePrometheusInstanceResponse
   */
  async deletePrometheusInstance(prometheusInstanceId: string): Promise<$_model.DeletePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusInstanceWithOptions(prometheusInstanceId, headers, runtime);
  }

  /**
   * 删除prometheus视图实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusViewResponse
   */
  async deletePrometheusViewWithOptions(prometheusViewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusViewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusViewResponse({}));
  }

  /**
   * 删除prometheus视图实例
   * @returns DeletePrometheusViewResponse
   */
  async deletePrometheusView(prometheusViewId: string): Promise<$_model.DeletePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusViewWithOptions(prometheusViewId, headers, runtime);
  }

  /**
   * 删除Service
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(workspace: string, serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * 删除Service
   * @returns DeleteServiceResponse
   */
  async deleteService(workspace: string, serviceId: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * 删除Umodel配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelResponse
   */
  async deleteUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelResponse({}));
  }

  /**
   * 删除Umodel配置信息
   * @returns DeleteUmodelResponse
   */
  async deleteUmodel(workspace: string): Promise<$_model.DeleteUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 删除 Umodel Elements
   * 
   * @param request - DeleteUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelDataWithOptions(workspace: string, request: $_model.DeleteUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelDataResponse({}));
  }

  /**
   * 删除 Umodel Elements
   * 
   * @param request - DeleteUmodelDataRequest
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelData(workspace: string, request: $_model.DeleteUmodelDataRequest): Promise<$_model.DeleteUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * 删除工作空间
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceName: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 查看addon release(查看接入状态)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonReleaseResponse
   */
  async getAddonReleaseWithOptions(releaseName: string, policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonReleaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases/${$dara.URL.percentEncode(releaseName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonReleaseResponse({}));
  }

  /**
   * 查看addon release(查看接入状态)
   * @returns GetAddonReleaseResponse
   */
  async getAddonRelease(releaseName: string, policyId: string): Promise<$_model.GetAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonReleaseWithOptions(releaseName, policyId, headers, runtime);
  }

  /**
   * 描述聚合任务组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggTaskGroupResponse
   */
  async getAggTaskGroupWithOptions(instanceId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggTaskGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetAggTaskGroupResponse({}));
  }

  /**
   * 描述聚合任务组
   * @returns GetAggTaskGroupResponse
   */
  async getAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.GetAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * 获取EntityStore相关存储信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreResponse
   */
  async getEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreResponse({}));
  }

  /**
   * 获取EntityStore相关存储信息
   * @returns GetEntityStoreResponse
   */
  async getEntityStore(workspaceName: string): Promise<$_model.GetEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 查询指定Workspace下的实体和关系数据，返回结果显示某时间区间中的实体数据（返回结果压缩后传输）。
   * 
   * @param request - GetEntityStoreDataRequest
   * @param headers - GetEntityStoreDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreDataWithOptions(workspace: string, request: $_model.GetEntityStoreDataRequest, headers: $_model.GetEntityStoreDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["acceptEncoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStoreData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/entitiesAndRelations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreDataResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreDataResponse({}));
  }

  /**
   * 查询指定Workspace下的实体和关系数据，返回结果显示某时间区间中的实体数据（返回结果压缩后传输）。
   * 
   * @param request - GetEntityStoreDataRequest
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreData(workspace: string, request: $_model.GetEntityStoreDataRequest): Promise<$_model.GetEntityStoreDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetEntityStoreDataHeaders({ });
    return await this.getEntityStoreDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 查询接入中心策略列表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationPolicyResponse
   */
  async getIntegrationPolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegrationPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegrationPolicyResponse({}));
  }

  /**
   * 查询接入中心策略列表信息
   * @returns GetIntegrationPolicyResponse
   */
  async getIntegrationPolicy(policyId: string): Promise<$_model.GetIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * 查询指定环境实例
   * 
   * @param request - GetPrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstanceWithOptions(prometheusInstanceId: string, request: $_model.GetPrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusInstanceResponse({}));
  }

  /**
   * 查询指定环境实例
   * 
   * @param request - GetPrometheusInstanceRequest
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstance(prometheusInstanceId: string, request: $_model.GetPrometheusInstanceRequest): Promise<$_model.GetPrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPrometheusInstanceWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * 查询指定Prometheus视图实例
   * 
   * @param request - GetPrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusViewResponse
   */
  async getPrometheusViewWithOptions(prometheusViewId: string, request: $_model.GetPrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusViewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusViewResponse({}));
  }

  /**
   * 查询指定Prometheus视图实例
   * 
   * @param request - GetPrometheusViewRequest
   * @returns GetPrometheusViewResponse
   */
  async getPrometheusView(prometheusViewId: string, request: $_model.GetPrometheusViewRequest): Promise<$_model.GetPrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPrometheusViewWithOptions(prometheusViewId, request, headers, runtime);
  }

  /**
   * 查询 Service
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(workspace: string, serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * 查询 Service
   * @returns GetServiceResponse
   */
  async getService(workspace: string, serviceId: string): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * 获取应用可观测实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservabilityWithOptions(workspace: string, type: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceObservabilityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceObservability",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service-observability/${$dara.URL.percentEncode(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceObservabilityResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceObservabilityResponse({}));
  }

  /**
   * 获取应用可观测实例
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservability(workspace: string, type: string): Promise<$_model.GetServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * 获取Umodel配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelResponse
   */
  async getUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelResponse({}));
  }

  /**
   * 获取Umodel配置信息
   * @returns GetUmodelResponse
   */
  async getUmodel(workspace: string): Promise<$_model.GetUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 获取相关联的 Umodel 图数据
   * 
   * @param request - GetUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelDataResponse
   */
  async getUmodelDataWithOptions(workspace: string, request: $_model.GetUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/graph`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelDataResponse({}));
  }

  /**
   * 获取相关联的 Umodel 图数据
   * 
   * @param request - GetUmodelDataRequest
   * @returns GetUmodelDataResponse
   */
  async getUmodelData(workspace: string, request: $_model.GetUmodelDataRequest): Promise<$_model.GetUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 获取工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * 获取工作空间
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceName: string): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * addon的release列表
   * 
   * @param request - ListAddonReleasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleasesWithOptions(policyId: string, request: $_model.ListAddonReleasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonReleasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.parentAddonReleaseId)) {
      query["parentAddonReleaseId"] = request.parentAddonReleaseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddonReleases",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonReleasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonReleasesResponse({}));
  }

  /**
   * addon的release列表
   * 
   * @param request - ListAddonReleasesRequest
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleases(policyId: string, request: $_model.ListAddonReleasesRequest): Promise<$_model.ListAddonReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonReleasesWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 列举聚合任务组
   * 
   * @param tmpReq - ListAggTaskGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggTaskGroupsResponse
   */
  async listAggTaskGroupsWithOptions(instanceId: string, tmpReq: $_model.ListAggTaskGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggTaskGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAggTaskGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterAggTaskGroupIds)) {
      query["filterAggTaskGroupIds"] = request.filterAggTaskGroupIds;
    }

    if (!$dara.isNull(request.filterAggTaskGroupNames)) {
      query["filterAggTaskGroupNames"] = request.filterAggTaskGroupNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      query["targetPrometheusId"] = request.targetPrometheusId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggTaskGroups",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggTaskGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggTaskGroupsResponse({}));
  }

  /**
   * 列举聚合任务组
   * 
   * @param request - ListAggTaskGroupsRequest
   * @returns ListAggTaskGroupsResponse
   */
  async listAggTaskGroups(instanceId: string, request: $_model.ListAggTaskGroupsRequest): Promise<$_model.ListAggTaskGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAggTaskGroupsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询告警动作
   * 
   * @param tmpReq - ListAlertActionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertActionsResponse
   */
  async listAlertActionsWithOptions(tmpReq: $_model.ListAlertActionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertActionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertActionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertActionIds)) {
      request.alertActionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertActionIds, "alertActionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertActionIdsShrink)) {
      query["alertActionIds"] = request.alertActionIdsShrink;
    }

    if (!$dara.isNull(request.alertActionName)) {
      query["alertActionName"] = request.alertActionName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
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
      action: "ListAlertActions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/alertActions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertActionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertActionsResponse({}));
  }

  /**
   * 查询告警动作
   * 
   * @param request - ListAlertActionsRequest
   * @returns ListAlertActionsResponse
   */
  async listAlertActions(request: $_model.ListAlertActionsRequest): Promise<$_model.ListAlertActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertActionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询接入中心策略列表信息
   * 
   * @param tmpReq - ListIntegrationPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPoliciesResponse
   */
  async listIntegrationPoliciesWithOptions(tmpReq: $_model.ListIntegrationPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPoliciesResponse> {
    tmpReq.validate();
    let request = new $_model.ListIntegrationPoliciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.bindResourceId)) {
      query["bindResourceId"] = request.bindResourceId;
    }

    if (!$dara.isNull(request.entityGroupIds)) {
      query["entityGroupIds"] = request.entityGroupIds;
    }

    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      query["policyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["policyType"] = request.policyType;
    }

    if (!$dara.isNull(request.prometheusInstanceId)) {
      query["prometheusInstanceId"] = request.prometheusInstanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicies",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPoliciesResponse({}));
  }

  /**
   * 查询接入中心策略列表信息
   * 
   * @param request - ListIntegrationPoliciesRequest
   * @returns ListIntegrationPoliciesResponse
   */
  async listIntegrationPolicies(request: $_model.ListIntegrationPoliciesRequest): Promise<$_model.ListIntegrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyCustomScrapeJobRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyCustomScrapeJobRulesResponse
   */
  async listIntegrationPolicyCustomScrapeJobRulesWithOptions(policyId: string, request: $_model.ListIntegrationPolicyCustomScrapeJobRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["encryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyCustomScrapeJobRules",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/custom-scrape-job-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyCustomScrapeJobRulesResponse({}));
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyCustomScrapeJobRulesRequest
   * @returns ListIntegrationPolicyCustomScrapeJobRulesResponse
   */
  async listIntegrationPolicyCustomScrapeJobRules(policyId: string, request: $_model.ListIntegrationPolicyCustomScrapeJobRulesRequest): Promise<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyCustomScrapeJobRulesWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 策略大盘列表
   * 
   * @param request - ListIntegrationPolicyDashboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyDashboardsResponse
   */
  async listIntegrationPolicyDashboardsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyDashboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyDashboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyDashboards",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyDashboardsResponse({}));
  }

  /**
   * 策略大盘列表
   * 
   * @param request - ListIntegrationPolicyDashboardsRequest
   * @returns ListIntegrationPolicyDashboardsResponse
   */
  async listIntegrationPolicyDashboards(policyId: string, request: $_model.ListIntegrationPolicyDashboardsRequest): Promise<$_model.ListIntegrationPolicyDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyDashboardsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 获取接入中心策略的PodMonitor资源
   * 
   * @param request - ListIntegrationPolicyPodMonitorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyPodMonitorsResponse
   */
  async listIntegrationPolicyPodMonitorsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyPodMonitorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyPodMonitorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["encryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyPodMonitors",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/pod-monitors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyPodMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyPodMonitorsResponse({}));
  }

  /**
   * 获取接入中心策略的PodMonitor资源
   * 
   * @param request - ListIntegrationPolicyPodMonitorsRequest
   * @returns ListIntegrationPolicyPodMonitorsResponse
   */
  async listIntegrationPolicyPodMonitors(policyId: string, request: $_model.ListIntegrationPolicyPodMonitorsRequest): Promise<$_model.ListIntegrationPolicyPodMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyPodMonitorsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyStorageRequirementsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyStorageRequirementsResponse
   */
  async listIntegrationPolicyStorageRequirementsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyStorageRequirementsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyStorageRequirementsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.storageType)) {
      query["storageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyStorageRequirements",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/storage-requirements`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyStorageRequirementsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyStorageRequirementsResponse({}));
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyStorageRequirementsRequest
   * @returns ListIntegrationPolicyStorageRequirementsResponse
   */
  async listIntegrationPolicyStorageRequirements(policyId: string, request: $_model.ListIntegrationPolicyStorageRequirementsRequest): Promise<$_model.ListIntegrationPolicyStorageRequirementsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyStorageRequirementsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 获取Prometheus实例大盘列表
   * 
   * @param request - ListPrometheusDashboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusDashboardsResponse
   */
  async listPrometheusDashboardsWithOptions(prometheusInstanceId: string, request: $_model.ListPrometheusDashboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusDashboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusDashboards",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusDashboardsResponse({}));
  }

  /**
   * 获取Prometheus实例大盘列表
   * 
   * @param request - ListPrometheusDashboardsRequest
   * @returns ListPrometheusDashboardsResponse
   */
  async listPrometheusDashboards(prometheusInstanceId: string, request: $_model.ListPrometheusDashboardsRequest): Promise<$_model.ListPrometheusDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusDashboardsWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * 获取Prometheus实例信息列表
   * 
   * @param tmpReq - ListPrometheusInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstancesWithOptions(tmpReq: $_model.ListPrometheusInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPrometheusInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prometheusInstanceIds)) {
      query["prometheusInstanceIds"] = request.prometheusInstanceIds;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      query["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusInstances",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusInstancesResponse({}));
  }

  /**
   * 获取Prometheus实例信息列表
   * 
   * @param request - ListPrometheusInstancesRequest
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstances(request: $_model.ListPrometheusInstancesRequest): Promise<$_model.ListPrometheusInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Prometheus视图实例信息列表
   * 
   * @param tmpReq - ListPrometheusViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusViewsResponse
   */
  async listPrometheusViewsWithOptions(tmpReq: $_model.ListPrometheusViewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusViewsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPrometheusViewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prometheusViewIds)) {
      query["prometheusViewIds"] = request.prometheusViewIds;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      query["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusViews",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusViewsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusViewsResponse({}));
  }

  /**
   * 获取Prometheus视图实例信息列表
   * 
   * @param request - ListPrometheusViewsRequest
   * @returns ListPrometheusViewsResponse
   */
  async listPrometheusViews(request: $_model.ListPrometheusViewsRequest): Promise<$_model.ListPrometheusViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusViewsWithOptions(request, headers, runtime);
  }

  /**
   * 获取Prometheus虚拟实例
   * 
   * @param request - ListPrometheusVirtualInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusVirtualInstancesResponse
   */
  async listPrometheusVirtualInstancesWithOptions(request: $_model.ListPrometheusVirtualInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusVirtualInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusVirtualInstances",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/virtual-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusVirtualInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusVirtualInstancesResponse({}));
  }

  /**
   * 获取Prometheus虚拟实例
   * 
   * @param request - ListPrometheusVirtualInstancesRequest
   * @returns ListPrometheusVirtualInstancesResponse
   */
  async listPrometheusVirtualInstances(request: $_model.ListPrometheusVirtualInstancesRequest): Promise<$_model.ListPrometheusVirtualInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusVirtualInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 列出资源Service
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(workspace: string, request: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * 列出资源Service
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(workspace: string, request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 获取工作空间列表
   * 
   * @param tmpReq - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(tmpReq: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workspaceNameList)) {
      request.workspaceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workspaceNameList, "workspaceNameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    if (!$dara.isNull(request.workspaceNameListShrink)) {
      query["workspaceNameList"] = request.workspaceNameListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * 获取工作空间列表
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - PutWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWorkspaceResponse
   */
  async putWorkspaceWithOptions(workspaceName: string, request: $_model.PutWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.PutWorkspaceResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - PutWorkspaceRequest
   * @returns PutWorkspaceResponse
   */
  async putWorkspace(workspaceName: string, request: $_model.PutWorkspaceRequest): Promise<$_model.PutWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * 升级接入组件
   * 
   * @param request - UpdateAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAddonReleaseResponse
   */
  async updateAddonReleaseWithOptions(releaseName: string, policyId: string, request: $_model.UpdateAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAddonReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonVersion)) {
      body["addonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.entityRules)) {
      body["entityRules"] = request.entityRules;
    }

    if (!$dara.isNull(request.values)) {
      body["values"] = request.values;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases/${$dara.URL.percentEncode(releaseName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAddonReleaseResponse({}));
  }

  /**
   * 升级接入组件
   * 
   * @param request - UpdateAddonReleaseRequest
   * @returns UpdateAddonReleaseResponse
   */
  async updateAddonRelease(releaseName: string, policyId: string, request: $_model.UpdateAddonReleaseRequest): Promise<$_model.UpdateAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAddonReleaseWithOptions(releaseName, policyId, request, headers, runtime);
  }

  /**
   * 应用聚合任务组
   * 
   * @param request - UpdateAggTaskGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggTaskGroupResponse
   */
  async updateAggTaskGroupWithOptions(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggTaskGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggTaskGroupConfig)) {
      body["aggTaskGroupConfig"] = request.aggTaskGroupConfig;
    }

    if (!$dara.isNull(request.aggTaskGroupConfigType)) {
      body["aggTaskGroupConfigType"] = request.aggTaskGroupConfigType;
    }

    if (!$dara.isNull(request.aggTaskGroupName)) {
      body["aggTaskGroupName"] = request.aggTaskGroupName;
    }

    if (!$dara.isNull(request.cronExpr)) {
      body["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.delay)) {
      body["delay"] = request.delay;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.fromTime)) {
      body["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.maxRetries)) {
      body["maxRetries"] = request.maxRetries;
    }

    if (!$dara.isNull(request.maxRunTimeInSeconds)) {
      body["maxRunTimeInSeconds"] = request.maxRunTimeInSeconds;
    }

    if (!$dara.isNull(request.precheckString)) {
      body["precheckString"] = request.precheckString;
    }

    if (!$dara.isNull(request.scheduleMode)) {
      body["scheduleMode"] = request.scheduleMode;
    }

    if (!$dara.isNull(request.scheduleTimeExpr)) {
      body["scheduleTimeExpr"] = request.scheduleTimeExpr;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      body["targetPrometheusId"] = request.targetPrometheusId;
    }

    if (!$dara.isNull(request.toTime)) {
      body["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggTaskGroupResponse({}));
  }

  /**
   * 应用聚合任务组
   * 
   * @param request - UpdateAggTaskGroupRequest
   * @returns UpdateAggTaskGroupResponse
   */
  async updateAggTaskGroup(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupRequest): Promise<$_model.UpdateAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAggTaskGroupWithOptions(instanceId, groupId, request, headers, runtime);
  }

  /**
   * 更新聚合任务组状态
   * 
   * @param request - UpdateAggTaskGroupStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggTaskGroupStatusResponse
   */
  async updateAggTaskGroupStatusWithOptions(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggTaskGroupStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggTaskGroupStatus",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggTaskGroupStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggTaskGroupStatusResponse({}));
  }

  /**
   * 更新聚合任务组状态
   * 
   * @param request - UpdateAggTaskGroupStatusRequest
   * @returns UpdateAggTaskGroupStatusResponse
   */
  async updateAggTaskGroupStatus(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupStatusRequest): Promise<$_model.UpdateAggTaskGroupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAggTaskGroupStatusWithOptions(instanceId, groupId, request, headers, runtime);
  }

  /**
   * 更新指定策略
   * 
   * @param request - UpdateIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntegrationPolicyResponse
   */
  async updateIntegrationPolicyWithOptions(integrationPolicyId: string, request: $_model.UpdateIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntegrationPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feePackage)) {
      body["feePackage"] = request.feePackage;
    }

    if (!$dara.isNull(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(integrationPolicyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntegrationPolicyResponse({}));
  }

  /**
   * 更新指定策略
   * 
   * @param request - UpdateIntegrationPolicyRequest
   * @returns UpdateIntegrationPolicyResponse
   */
  async updateIntegrationPolicy(integrationPolicyId: string, request: $_model.UpdateIntegrationPolicyRequest): Promise<$_model.UpdateIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIntegrationPolicyWithOptions(integrationPolicyId, request, headers, runtime);
  }

  /**
   * 更新Prom实例信息
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstanceWithOptions(prometheusInstanceId: string, request: $_model.UpdatePrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.archiveDuration)) {
      body["archiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      body["authFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      body["enableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      body["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.storageDuration)) {
      body["storageDuration"] = request.storageDuration;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusInstanceResponse({}));
  }

  /**
   * 更新Prom实例信息
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstance(prometheusInstanceId: string, request: $_model.UpdatePrometheusInstanceRequest): Promise<$_model.UpdatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrometheusInstanceWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * 更新Prom视图实例信息
   * 
   * @param request - UpdatePrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusViewResponse
   */
  async updatePrometheusViewWithOptions(prometheusViewId: string, request: $_model.UpdatePrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusViewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.prometheusInstances)) {
      body["prometheusInstances"] = request.prometheusInstances;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      body["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusViewResponse({}));
  }

  /**
   * 更新Prom视图实例信息
   * 
   * @param request - UpdatePrometheusViewRequest
   * @returns UpdatePrometheusViewResponse
   */
  async updatePrometheusView(prometheusViewId: string, request: $_model.UpdatePrometheusViewRequest): Promise<$_model.UpdatePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrometheusViewWithOptions(prometheusViewId, request, headers, runtime);
  }

  /**
   * 更新UpdateService
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(workspace: string, serviceId: string, request: $_model.UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      body["serviceStatus"] = request.serviceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceResponse({}));
  }

  /**
   * 更新UpdateService
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(workspace: string, serviceId: string, request: $_model.UpdateServiceRequest): Promise<$_model.UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(workspace, serviceId, request, headers, runtime);
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpdateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUmodelResponse
   */
  async updateUmodelWithOptions(workspace: string, request: $_model.UpdateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUmodelResponse({}));
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpdateUmodelRequest
   * @returns UpdateUmodelResponse
   */
  async updateUmodel(workspace: string, request: $_model.UpdateUmodelRequest): Promise<$_model.UpdateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 写入 Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelDataWithOptions(workspace: string, request: $_model.UpsertUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elements)) {
      body["elements"] = request.elements;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.UpsertUmodelDataResponse({}));
  }

  /**
   * 写入 Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelData(workspace: string, request: $_model.UpsertUmodelDataRequest): Promise<$_model.UpsertUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertUmodelDataWithOptions(workspace, request, headers, runtime);
  }

}

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "mpaas.aliyuncs.com",
      'ap-northeast-1': "mpaas.aliyuncs.com",
      'ap-northeast-2-pop': "mpaas.aliyuncs.com",
      'ap-south-1': "mpaas.aliyuncs.com",
      'ap-southeast-1': "mpaas.aliyuncs.com",
      'ap-southeast-2': "mpaas.aliyuncs.com",
      'ap-southeast-3': "mpaas.aliyuncs.com",
      'ap-southeast-5': "mpaas.aliyuncs.com",
      'cn-beijing': "mpaas.aliyuncs.com",
      'cn-beijing-finance-1': "mpaas.aliyuncs.com",
      'cn-beijing-finance-pop': "mpaas.aliyuncs.com",
      'cn-beijing-gov-1': "mpaas.aliyuncs.com",
      'cn-beijing-nu16-b01': "mpaas.aliyuncs.com",
      'cn-chengdu': "mpaas.aliyuncs.com",
      'cn-edge-1': "mpaas.aliyuncs.com",
      'cn-fujian': "mpaas.aliyuncs.com",
      'cn-haidian-cm12-c01': "mpaas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mpaas.aliyuncs.com",
      'cn-hangzhou-finance': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mpaas.aliyuncs.com",
      'cn-hangzhou-test-306': "mpaas.aliyuncs.com",
      'cn-hongkong': "mpaas.aliyuncs.com",
      'cn-hongkong-finance-pop': "mpaas.aliyuncs.com",
      'cn-huhehaote': "mpaas.aliyuncs.com",
      'cn-north-2-gov-1': "mpaas.aliyuncs.com",
      'cn-qingdao': "mpaas.aliyuncs.com",
      'cn-qingdao-nebula': "mpaas.aliyuncs.com",
      'cn-shanghai': "mpaas.aliyuncs.com",
      'cn-shanghai-et15-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-et2-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-finance-1': "mpaas.aliyuncs.com",
      'cn-shanghai-inner': "mpaas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mpaas.aliyuncs.com",
      'cn-shenzhen': "mpaas.aliyuncs.com",
      'cn-shenzhen-finance-1': "mpaas.aliyuncs.com",
      'cn-shenzhen-inner': "mpaas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mpaas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mpaas.aliyuncs.com",
      'cn-wuhan': "mpaas.aliyuncs.com",
      'cn-yushanfang': "mpaas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mpaas.aliyuncs.com",
      'cn-zhangjiakou': "mpaas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mpaas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mpaas.aliyuncs.com",
      'eu-central-1': "mpaas.aliyuncs.com",
      'eu-west-1': "mpaas.aliyuncs.com",
      'eu-west-1-oxs': "mpaas.aliyuncs.com",
      'me-east-1': "mpaas.aliyuncs.com",
      'rus-west-1-pop': "mpaas.aliyuncs.com",
      'us-east-1': "mpaas.aliyuncs.com",
      'us-west-1': "mpaas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mpaas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddMdsMiniConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMdsMiniConfigResponse
   */
  async addMdsMiniConfigWithOptions(request: $_model.AddMdsMiniConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMdsMiniConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMiniConfigAddJsonStr)) {
      body["MpaasMappcenterMiniConfigAddJsonStr"] = request.mpaasMappcenterMiniConfigAddJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMdsMiniConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMdsMiniConfigResponse>(await this.callApi(params, req, runtime), new $_model.AddMdsMiniConfigResponse({}));
  }

  /**
   * @param request - AddMdsMiniConfigRequest
   * @returns AddMdsMiniConfigResponse
   */
  async addMdsMiniConfig(request: $_model.AddMdsMiniConfigRequest): Promise<$_model.AddMdsMiniConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMdsMiniConfigWithOptions(request, runtime);
  }

  /**
   * @param request - CancelPushSchedulerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPushSchedulerResponse
   */
  async cancelPushSchedulerWithOptions(request: $_model.CancelPushSchedulerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPushSchedulerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uniqueIds)) {
      body["UniqueIds"] = request.uniqueIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPushScheduler",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPushSchedulerResponse>(await this.callApi(params, req, runtime), new $_model.CancelPushSchedulerResponse({}));
  }

  /**
   * @param request - CancelPushSchedulerRequest
   * @returns CancelPushSchedulerResponse
   */
  async cancelPushScheduler(request: $_model.CancelPushSchedulerRequest): Promise<$_model.CancelPushSchedulerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPushSchedulerWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeMcubeMiniTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMcubeMiniTaskStatusResponse
   */
  async changeMcubeMiniTaskStatusWithOptions(request: $_model.ChangeMcubeMiniTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMcubeMiniTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMcubeMiniTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMcubeMiniTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeMcubeMiniTaskStatusResponse({}));
  }

  /**
   * @param request - ChangeMcubeMiniTaskStatusRequest
   * @returns ChangeMcubeMiniTaskStatusResponse
   */
  async changeMcubeMiniTaskStatus(request: $_model.ChangeMcubeMiniTaskStatusRequest): Promise<$_model.ChangeMcubeMiniTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeMcubeMiniTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeMcubeNebulaTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMcubeNebulaTaskStatusResponse
   */
  async changeMcubeNebulaTaskStatusWithOptions(request: $_model.ChangeMcubeNebulaTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMcubeNebulaTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMcubeNebulaTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMcubeNebulaTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeMcubeNebulaTaskStatusResponse({}));
  }

  /**
   * @param request - ChangeMcubeNebulaTaskStatusRequest
   * @returns ChangeMcubeNebulaTaskStatusResponse
   */
  async changeMcubeNebulaTaskStatus(request: $_model.ChangeMcubeNebulaTaskStatusRequest): Promise<$_model.ChangeMcubeNebulaTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeMcubeNebulaTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeMcubePublicTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMcubePublicTaskStatusResponse
   */
  async changeMcubePublicTaskStatusWithOptions(request: $_model.ChangeMcubePublicTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMcubePublicTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMcubePublicTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMcubePublicTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeMcubePublicTaskStatusResponse({}));
  }

  /**
   * @param request - ChangeMcubePublicTaskStatusRequest
   * @returns ChangeMcubePublicTaskStatusResponse
   */
  async changeMcubePublicTaskStatus(request: $_model.ChangeMcubePublicTaskStatusRequest): Promise<$_model.ChangeMcubePublicTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeMcubePublicTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeMdsCubeTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMdsCubeTaskStatusResponse
   */
  async changeMdsCubeTaskStatusWithOptions(request: $_model.ChangeMdsCubeTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMdsCubeTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.templateResourceId)) {
      body["TemplateResourceId"] = request.templateResourceId;
    }

    if (!$dara.isNull(request.templateTaskId)) {
      body["TemplateTaskId"] = request.templateTaskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMdsCubeTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMdsCubeTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeMdsCubeTaskStatusResponse({}));
  }

  /**
   * @param request - ChangeMdsCubeTaskStatusRequest
   * @returns ChangeMdsCubeTaskStatusResponse
   */
  async changeMdsCubeTaskStatus(request: $_model.ChangeMdsCubeTaskStatusRequest): Promise<$_model.ChangeMdsCubeTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeMdsCubeTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CopyMcdpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyMcdpGroupResponse
   */
  async copyMcdpGroupWithOptions(request: $_model.CopyMcdpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyMcdpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpGroupCopyJsonStr)) {
      body["MpaasMappcenterMcdpGroupCopyJsonStr"] = request.mpaasMappcenterMcdpGroupCopyJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyMcdpGroup",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyMcdpGroupResponse>(await this.callApi(params, req, runtime), new $_model.CopyMcdpGroupResponse({}));
  }

  /**
   * @param request - CopyMcdpGroupRequest
   * @returns CopyMcdpGroupResponse
   */
  async copyMcdpGroup(request: $_model.CopyMcdpGroupRequest): Promise<$_model.CopyMcdpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyMcdpGroupWithOptions(request, runtime);
  }

  /**
   * 创建短链
   * 
   * @param request - CreateLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLinkResponse
   */
  async createLinkWithOptions(request: $_model.CreateLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cors)) {
      body["Cors"] = request.cors;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.dynamicfield)) {
      body["Dynamicfield"] = request.dynamicfield;
    }

    if (!$dara.isNull(request.targetUrl)) {
      body["TargetUrl"] = request.targetUrl;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLink",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateLinkResponse({}));
  }

  /**
   * 创建短链
   * 
   * @param request - CreateLinkRequest
   * @returns CreateLinkResponse
   */
  async createLink(request: $_model.CreateLinkRequest): Promise<$_model.CreateLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLinkWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcdpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcdpGroupResponse
   */
  async createMcdpGroupWithOptions(request: $_model.CreateMcdpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcdpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpGroupCreateJsonStr)) {
      body["MpaasMappcenterMcdpGroupCreateJsonStr"] = request.mpaasMappcenterMcdpGroupCreateJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcdpGroup",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcdpGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcdpGroupResponse({}));
  }

  /**
   * @param request - CreateMcdpGroupRequest
   * @returns CreateMcdpGroupResponse
   */
  async createMcdpGroup(request: $_model.CreateMcdpGroupRequest): Promise<$_model.CreateMcdpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcdpGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcdpMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcdpMaterialResponse
   */
  async createMcdpMaterialWithOptions(request: $_model.CreateMcdpMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcdpMaterialResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpMaterialCreateJsonStr)) {
      body["MpaasMappcenterMcdpMaterialCreateJsonStr"] = request.mpaasMappcenterMcdpMaterialCreateJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcdpMaterial",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcdpMaterialResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcdpMaterialResponse({}));
  }

  /**
   * @param request - CreateMcdpMaterialRequest
   * @returns CreateMcdpMaterialResponse
   */
  async createMcdpMaterial(request: $_model.CreateMcdpMaterialRequest): Promise<$_model.CreateMcdpMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcdpMaterialWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcdpZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcdpZoneResponse
   */
  async createMcdpZoneWithOptions(request: $_model.CreateMcdpZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcdpZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpZoneCreateJsonStr)) {
      body["MpaasMappcenterMcdpZoneCreateJsonStr"] = request.mpaasMappcenterMcdpZoneCreateJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcdpZoneResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcdpZoneResponse({}));
  }

  /**
   * @param request - CreateMcdpZoneRequest
   * @returns CreateMcdpZoneResponse
   */
  async createMcdpZone(request: $_model.CreateMcdpZoneRequest): Promise<$_model.CreateMcdpZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcdpZoneWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeMiniAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeMiniAppResponse
   */
  async createMcubeMiniAppWithOptions(request: $_model.CreateMcubeMiniAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeMiniAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeMiniApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeMiniAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeMiniAppResponse({}));
  }

  /**
   * @param request - CreateMcubeMiniAppRequest
   * @returns CreateMcubeMiniAppResponse
   */
  async createMcubeMiniApp(request: $_model.CreateMcubeMiniAppRequest): Promise<$_model.CreateMcubeMiniAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeMiniAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeMiniTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeMiniTaskResponse
   */
  async createMcubeMiniTaskWithOptions(request: $_model.CreateMcubeMiniTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeMiniTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!$dara.isNull(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!$dara.isNull(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!$dara.isNull(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!$dara.isNull(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeMiniTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeMiniTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeMiniTaskResponse({}));
  }

  /**
   * @param request - CreateMcubeMiniTaskRequest
   * @returns CreateMcubeMiniTaskResponse
   */
  async createMcubeMiniTask(request: $_model.CreateMcubeMiniTaskRequest): Promise<$_model.CreateMcubeMiniTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeMiniTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeNebulaAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeNebulaAppResponse
   */
  async createMcubeNebulaAppWithOptions(request: $_model.CreateMcubeNebulaAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeNebulaAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeNebulaApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeNebulaAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeNebulaAppResponse({}));
  }

  /**
   * @param request - CreateMcubeNebulaAppRequest
   * @returns CreateMcubeNebulaAppResponse
   */
  async createMcubeNebulaApp(request: $_model.CreateMcubeNebulaAppRequest): Promise<$_model.CreateMcubeNebulaAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeNebulaAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeNebulaResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeNebulaResourceResponse
   */
  async createMcubeNebulaResourceWithOptions(request: $_model.CreateMcubeNebulaResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeNebulaResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoInstall)) {
      body["AutoInstall"] = request.autoInstall;
    }

    if (!$dara.isNull(request.clientVersionMax)) {
      body["ClientVersionMax"] = request.clientVersionMax;
    }

    if (!$dara.isNull(request.clientVersionMin)) {
      body["ClientVersionMin"] = request.clientVersionMin;
    }

    if (!$dara.isNull(request.customDomainName)) {
      body["CustomDomainName"] = request.customDomainName;
    }

    if (!$dara.isNull(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!$dara.isNull(request.h5Version)) {
      body["H5Version"] = request.h5Version;
    }

    if (!$dara.isNull(request.installType)) {
      body["InstallType"] = request.installType;
    }

    if (!$dara.isNull(request.mainUrl)) {
      body["MainUrl"] = request.mainUrl;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.repeatNebula)) {
      body["RepeatNebula"] = request.repeatNebula;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.subUrl)) {
      body["SubUrl"] = request.subUrl;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeNebulaResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeNebulaResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeNebulaResourceResponse({}));
  }

  /**
   * @param request - CreateMcubeNebulaResourceRequest
   * @returns CreateMcubeNebulaResourceResponse
   */
  async createMcubeNebulaResource(request: $_model.CreateMcubeNebulaResourceRequest): Promise<$_model.CreateMcubeNebulaResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeNebulaResourceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeNebulaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeNebulaTaskResponse
   */
  async createMcubeNebulaTaskWithOptions(request: $_model.CreateMcubeNebulaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeNebulaTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      body["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.gmtModified)) {
      body["GmtModified"] = request.gmtModified;
    }

    if (!$dara.isNull(request.gmtModifiedStr)) {
      body["GmtModifiedStr"] = request.gmtModifiedStr;
    }

    if (!$dara.isNull(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!$dara.isNull(request.greyEndtime)) {
      body["GreyEndtime"] = request.greyEndtime;
    }

    if (!$dara.isNull(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!$dara.isNull(request.greyEndtimeStr)) {
      body["GreyEndtimeStr"] = request.greyEndtimeStr;
    }

    if (!$dara.isNull(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!$dara.isNull(request.greyUrl)) {
      body["GreyUrl"] = request.greyUrl;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.modifier)) {
      body["Modifier"] = request.modifier;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.percent)) {
      body["Percent"] = request.percent;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersion)) {
      body["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!$dara.isNull(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.resIds)) {
      body["ResIds"] = request.resIds;
    }

    if (!$dara.isNull(request.serialVersionUID)) {
      body["SerialVersionUID"] = request.serialVersionUID;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.syncMode)) {
      body["SyncMode"] = request.syncMode;
    }

    if (!$dara.isNull(request.syncResult)) {
      body["SyncResult"] = request.syncResult;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.taskVersion)) {
      body["TaskVersion"] = request.taskVersion;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.upgradeNoticeNum)) {
      body["UpgradeNoticeNum"] = request.upgradeNoticeNum;
    }

    if (!$dara.isNull(request.upgradeProgress)) {
      body["UpgradeProgress"] = request.upgradeProgress;
    }

    if (!$dara.isNull(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeNebulaTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeNebulaTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeNebulaTaskResponse({}));
  }

  /**
   * @param request - CreateMcubeNebulaTaskRequest
   * @returns CreateMcubeNebulaTaskResponse
   */
  async createMcubeNebulaTask(request: $_model.CreateMcubeNebulaTaskRequest): Promise<$_model.CreateMcubeNebulaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeNebulaTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeUpgradePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeUpgradePackageResponse
   */
  async createMcubeUpgradePackageWithOptions(request: $_model.CreateMcubeUpgradePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeUpgradePackageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.appstoreUrl)) {
      body["AppstoreUrl"] = request.appstoreUrl;
    }

    if (!$dara.isNull(request.bundleId)) {
      body["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.customDomainName)) {
      body["CustomDomainName"] = request.customDomainName;
    }

    if (!$dara.isNull(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      body["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.harmonyLabel)) {
      body["HarmonyLabel"] = request.harmonyLabel;
    }

    if (!$dara.isNull(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!$dara.isNull(request.installAmount)) {
      body["InstallAmount"] = request.installAmount;
    }

    if (!$dara.isNull(request.iosSymbolfileUrl)) {
      body["IosSymbolfileUrl"] = request.iosSymbolfileUrl;
    }

    if (!$dara.isNull(request.isEnterprise)) {
      body["IsEnterprise"] = request.isEnterprise;
    }

    if (!$dara.isNull(request.largeIconUrl)) {
      body["LargeIconUrl"] = request.largeIconUrl;
    }

    if (!$dara.isNull(request.needCheck)) {
      body["NeedCheck"] = request.needCheck;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.validDays)) {
      body["ValidDays"] = request.validDays;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeUpgradePackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeUpgradePackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeUpgradePackageResponse({}));
  }

  /**
   * @param request - CreateMcubeUpgradePackageRequest
   * @returns CreateMcubeUpgradePackageResponse
   */
  async createMcubeUpgradePackage(request: $_model.CreateMcubeUpgradePackageRequest): Promise<$_model.CreateMcubeUpgradePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeUpgradePackageWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeUpgradeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeUpgradeTaskResponse
   */
  async createMcubeUpgradeTaskWithOptions(request: $_model.CreateMcubeUpgradeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeUpgradeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!$dara.isNull(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!$dara.isNull(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!$dara.isNull(request.historyForce)) {
      body["HistoryForce"] = request.historyForce;
    }

    if (!$dara.isNull(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.packageInfoId)) {
      body["PackageInfoId"] = request.packageInfoId;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!$dara.isNull(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.upgradeContent)) {
      body["UpgradeContent"] = request.upgradeContent;
    }

    if (!$dara.isNull(request.upgradeType)) {
      body["UpgradeType"] = request.upgradeType;
    }

    if (!$dara.isNull(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeUpgradeTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeUpgradeTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeUpgradeTaskResponse({}));
  }

  /**
   * @param request - CreateMcubeUpgradeTaskRequest
   * @returns CreateMcubeUpgradeTaskResponse
   */
  async createMcubeUpgradeTask(request: $_model.CreateMcubeUpgradeTaskRequest): Promise<$_model.CreateMcubeUpgradeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeUpgradeTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeVhostResponse
   */
  async createMcubeVhostWithOptions(request: $_model.CreateMcubeVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeVhostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeVhost",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeVhostResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeVhostResponse({}));
  }

  /**
   * @param request - CreateMcubeVhostRequest
   * @returns CreateMcubeVhostResponse
   */
  async createMcubeVhost(request: $_model.CreateMcubeVhostRequest): Promise<$_model.CreateMcubeVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeVhostWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeWhitelistResponse
   */
  async createMcubeWhitelistWithOptions(request: $_model.CreateMcubeWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whiteListName)) {
      body["WhiteListName"] = request.whiteListName;
    }

    if (!$dara.isNull(request.whitelistType)) {
      body["WhitelistType"] = request.whitelistType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeWhitelistResponse({}));
  }

  /**
   * @param request - CreateMcubeWhitelistRequest
   * @returns CreateMcubeWhitelistResponse
   */
  async createMcubeWhitelist(request: $_model.CreateMcubeWhitelistRequest): Promise<$_model.CreateMcubeWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMcubeWhitelistForIdeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcubeWhitelistForIdeResponse
   */
  async createMcubeWhitelistForIdeWithOptions(request: $_model.CreateMcubeWhitelistForIdeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcubeWhitelistForIdeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcubeWhitelistForIde",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcubeWhitelistForIdeResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcubeWhitelistForIdeResponse({}));
  }

  /**
   * @param request - CreateMcubeWhitelistForIdeRequest
   * @returns CreateMcubeWhitelistForIdeResponse
   */
  async createMcubeWhitelistForIde(request: $_model.CreateMcubeWhitelistForIdeRequest): Promise<$_model.CreateMcubeWhitelistForIdeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcubeWhitelistForIdeWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMdsCubeResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMdsCubeResourceResponse
   */
  async createMdsCubeResourceWithOptions(request: $_model.CreateMdsCubeResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMdsCubeResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidMaxVersion)) {
      body["AndroidMaxVersion"] = request.androidMaxVersion;
    }

    if (!$dara.isNull(request.androidMinVersion)) {
      body["AndroidMinVersion"] = request.androidMinVersion;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.iosMaxVersion)) {
      body["IosMaxVersion"] = request.iosMaxVersion;
    }

    if (!$dara.isNull(request.iosMinVersion)) {
      body["IosMinVersion"] = request.iosMinVersion;
    }

    if (!$dara.isNull(request.mockDataUrl)) {
      body["MockDataUrl"] = request.mockDataUrl;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.previewPictureUrl)) {
      body["PreviewPictureUrl"] = request.previewPictureUrl;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateResourceDesc)) {
      body["TemplateResourceDesc"] = request.templateResourceDesc;
    }

    if (!$dara.isNull(request.templateResourceVersion)) {
      body["TemplateResourceVersion"] = request.templateResourceVersion;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMdsCubeResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMdsCubeResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateMdsCubeResourceResponse({}));
  }

  /**
   * @param request - CreateMdsCubeResourceRequest
   * @returns CreateMdsCubeResourceResponse
   */
  async createMdsCubeResource(request: $_model.CreateMdsCubeResourceRequest): Promise<$_model.CreateMdsCubeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMdsCubeResourceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMdsCubeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMdsCubeTaskResponse
   */
  async createMdsCubeTaskWithOptions(request: $_model.CreateMdsCubeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMdsCubeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!$dara.isNull(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!$dara.isNull(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!$dara.isNull(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.taskDesc)) {
      body["TaskDesc"] = request.taskDesc;
    }

    if (!$dara.isNull(request.templateResourceId)) {
      body["TemplateResourceId"] = request.templateResourceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMdsCubeTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMdsCubeTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMdsCubeTaskResponse({}));
  }

  /**
   * @param request - CreateMdsCubeTaskRequest
   * @returns CreateMdsCubeTaskResponse
   */
  async createMdsCubeTask(request: $_model.CreateMdsCubeTaskRequest): Promise<$_model.CreateMdsCubeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMdsCubeTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMdsCubeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMdsCubeTemplateResponse
   */
  async createMdsCubeTemplateWithOptions(request: $_model.CreateMdsCubeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMdsCubeTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateDesc)) {
      body["TemplateDesc"] = request.templateDesc;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMdsCubeTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMdsCubeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateMdsCubeTemplateResponse({}));
  }

  /**
   * @param request - CreateMdsCubeTemplateRequest
   * @returns CreateMdsCubeTemplateResponse
   */
  async createMdsCubeTemplate(request: $_model.CreateMdsCubeTemplateRequest): Promise<$_model.CreateMdsCubeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMdsCubeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMdsMiniprogramTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMdsMiniprogramTaskResponse
   */
  async createMdsMiniprogramTaskWithOptions(request: $_model.CreateMdsMiniprogramTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMdsMiniprogramTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!$dara.isNull(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!$dara.isNull(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!$dara.isNull(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.syncMode)) {
      body["SyncMode"] = request.syncMode;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMdsMiniprogramTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMdsMiniprogramTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMdsMiniprogramTaskResponse({}));
  }

  /**
   * @param request - CreateMdsMiniprogramTaskRequest
   * @returns CreateMdsMiniprogramTaskResponse
   */
  async createMdsMiniprogramTask(request: $_model.CreateMdsMiniprogramTaskRequest): Promise<$_model.CreateMdsMiniprogramTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMdsMiniprogramTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOpenGlobalDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpenGlobalDataResponse
   */
  async createOpenGlobalDataWithOptions(request: $_model.CreateOpenGlobalDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOpenGlobalDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appMaxVersion)) {
      body["AppMaxVersion"] = request.appMaxVersion;
    }

    if (!$dara.isNull(request.appMinVersion)) {
      body["AppMinVersion"] = request.appMinVersion;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.extAttrStr)) {
      body["ExtAttrStr"] = request.extAttrStr;
    }

    if (!$dara.isNull(request.maxUid)) {
      body["MaxUid"] = request.maxUid;
    }

    if (!$dara.isNull(request.minUid)) {
      body["MinUid"] = request.minUid;
    }

    if (!$dara.isNull(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdMsgId)) {
      body["ThirdMsgId"] = request.thirdMsgId;
    }

    if (!$dara.isNull(request.uids)) {
      body["Uids"] = request.uids;
    }

    if (!$dara.isNull(request.validTimeEnd)) {
      body["ValidTimeEnd"] = request.validTimeEnd;
    }

    if (!$dara.isNull(request.validTimeStart)) {
      body["ValidTimeStart"] = request.validTimeStart;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOpenGlobalData",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOpenGlobalDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateOpenGlobalDataResponse({}));
  }

  /**
   * @param request - CreateOpenGlobalDataRequest
   * @returns CreateOpenGlobalDataResponse
   */
  async createOpenGlobalData(request: $_model.CreateOpenGlobalDataRequest): Promise<$_model.CreateOpenGlobalDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOpenGlobalDataWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOpenSingleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpenSingleDataResponse
   */
  async createOpenSingleDataWithOptions(request: $_model.CreateOpenSingleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOpenSingleDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appMaxVersion)) {
      body["AppMaxVersion"] = request.appMaxVersion;
    }

    if (!$dara.isNull(request.appMinVersion)) {
      body["AppMinVersion"] = request.appMinVersion;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.checkOnline)) {
      body["CheckOnline"] = request.checkOnline;
    }

    if (!$dara.isNull(request.extAttrStr)) {
      body["ExtAttrStr"] = request.extAttrStr;
    }

    if (!$dara.isNull(request.linkToken)) {
      body["LinkToken"] = request.linkToken;
    }

    if (!$dara.isNull(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdMsgId)) {
      body["ThirdMsgId"] = request.thirdMsgId;
    }

    if (!$dara.isNull(request.validTimeEnd)) {
      body["ValidTimeEnd"] = request.validTimeEnd;
    }

    if (!$dara.isNull(request.validTimeStart)) {
      body["ValidTimeStart"] = request.validTimeStart;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOpenSingleData",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOpenSingleDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateOpenSingleDataResponse({}));
  }

  /**
   * @param request - CreateOpenSingleDataRequest
   * @returns CreateOpenSingleDataResponse
   */
  async createOpenSingleData(request: $_model.CreateOpenSingleDataRequest): Promise<$_model.CreateOpenSingleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOpenSingleDataWithOptions(request, runtime);
  }

  /**
   * 创建模版
   * 
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.descInfo)) {
      body["DescInfo"] = request.descInfo;
    }

    if (!$dara.isNull(request.iconUrls)) {
      body["IconUrls"] = request.iconUrls;
    }

    if (!$dara.isNull(request.imageUrls)) {
      body["ImageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.jumpAction)) {
      body["JumpAction"] = request.jumpAction;
    }

    if (!$dara.isNull(request.pushStyle)) {
      body["PushStyle"] = request.pushStyle;
    }

    if (!$dara.isNull(request.showStyle)) {
      body["ShowStyle"] = request.showStyle;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.variables)) {
      body["Variables"] = request.variables;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * 创建模版
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCubecardWhitelistContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCubecardWhitelistContentResponse
   */
  async deleteCubecardWhitelistContentWithOptions(request: $_model.DeleteCubecardWhitelistContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCubecardWhitelistContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistId)) {
      body["WhitelistId"] = request.whitelistId;
    }

    if (!$dara.isNull(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCubecardWhitelistContent",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCubecardWhitelistContentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCubecardWhitelistContentResponse({}));
  }

  /**
   * @param request - DeleteCubecardWhitelistContentRequest
   * @returns DeleteCubecardWhitelistContentResponse
   */
  async deleteCubecardWhitelistContent(request: $_model.DeleteCubecardWhitelistContentRequest): Promise<$_model.DeleteCubecardWhitelistContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCubecardWhitelistContentWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcdpAimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcdpAimResponse
   */
  async deleteMcdpAimWithOptions(request: $_model.DeleteMcdpAimRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcdpAimResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpAimDeleteJsonStr)) {
      body["MpaasMappcenterMcdpAimDeleteJsonStr"] = request.mpaasMappcenterMcdpAimDeleteJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcdpAimResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcdpAimResponse({}));
  }

  /**
   * @param request - DeleteMcdpAimRequest
   * @returns DeleteMcdpAimResponse
   */
  async deleteMcdpAim(request: $_model.DeleteMcdpAimRequest): Promise<$_model.DeleteMcdpAimResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcdpAimWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcdpCrowdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcdpCrowdResponse
   */
  async deleteMcdpCrowdWithOptions(request: $_model.DeleteMcdpCrowdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcdpCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpCrowdDeleteJsonStr)) {
      body["MpaasMappcenterMcdpCrowdDeleteJsonStr"] = request.mpaasMappcenterMcdpCrowdDeleteJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcdpCrowd",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcdpCrowdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcdpCrowdResponse({}));
  }

  /**
   * @param request - DeleteMcdpCrowdRequest
   * @returns DeleteMcdpCrowdResponse
   */
  async deleteMcdpCrowd(request: $_model.DeleteMcdpCrowdRequest): Promise<$_model.DeleteMcdpCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcdpCrowdWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcdpZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcdpZoneResponse
   */
  async deleteMcdpZoneWithOptions(request: $_model.DeleteMcdpZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcdpZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMcdpZoneDeleteJsonStr)) {
      body["MpaasMappcenterMcdpZoneDeleteJsonStr"] = request.mpaasMappcenterMcdpZoneDeleteJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcdpZoneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcdpZoneResponse({}));
  }

  /**
   * @param request - DeleteMcdpZoneRequest
   * @returns DeleteMcdpZoneResponse
   */
  async deleteMcdpZone(request: $_model.DeleteMcdpZoneRequest): Promise<$_model.DeleteMcdpZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcdpZoneWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcubeMiniAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcubeMiniAppResponse
   */
  async deleteMcubeMiniAppWithOptions(request: $_model.DeleteMcubeMiniAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcubeMiniAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcubeMiniApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcubeMiniAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcubeMiniAppResponse({}));
  }

  /**
   * @param request - DeleteMcubeMiniAppRequest
   * @returns DeleteMcubeMiniAppResponse
   */
  async deleteMcubeMiniApp(request: $_model.DeleteMcubeMiniAppRequest): Promise<$_model.DeleteMcubeMiniAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcubeMiniAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcubeNebulaAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcubeNebulaAppResponse
   */
  async deleteMcubeNebulaAppWithOptions(request: $_model.DeleteMcubeNebulaAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcubeNebulaAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcubeNebulaApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcubeNebulaAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcubeNebulaAppResponse({}));
  }

  /**
   * @param request - DeleteMcubeNebulaAppRequest
   * @returns DeleteMcubeNebulaAppResponse
   */
  async deleteMcubeNebulaApp(request: $_model.DeleteMcubeNebulaAppRequest): Promise<$_model.DeleteMcubeNebulaAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcubeNebulaAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcubeUpgradeResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcubeUpgradeResourceResponse
   */
  async deleteMcubeUpgradeResourceWithOptions(request: $_model.DeleteMcubeUpgradeResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcubeUpgradeResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcubeUpgradeResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcubeUpgradeResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcubeUpgradeResourceResponse({}));
  }

  /**
   * @param request - DeleteMcubeUpgradeResourceRequest
   * @returns DeleteMcubeUpgradeResourceResponse
   */
  async deleteMcubeUpgradeResource(request: $_model.DeleteMcubeUpgradeResourceRequest): Promise<$_model.DeleteMcubeUpgradeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcubeUpgradeResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMcubeWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcubeWhitelistResponse
   */
  async deleteMcubeWhitelistWithOptions(request: $_model.DeleteMcubeWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcubeWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcubeWhitelistResponse({}));
  }

  /**
   * @param request - DeleteMcubeWhitelistRequest
   * @returns DeleteMcubeWhitelistResponse
   */
  async deleteMcubeWhitelist(request: $_model.DeleteMcubeWhitelistRequest): Promise<$_model.DeleteMcubeWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcubeWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMdsCubeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMdsCubeTemplateResponse
   */
  async deleteMdsCubeTemplateWithOptions(request: $_model.DeleteMdsCubeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMdsCubeTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMdsCubeTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMdsCubeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMdsCubeTemplateResponse({}));
  }

  /**
   * @param request - DeleteMdsCubeTemplateRequest
   * @returns DeleteMdsCubeTemplateResponse
   */
  async deleteMdsCubeTemplate(request: $_model.DeleteMdsCubeTemplateRequest): Promise<$_model.DeleteMdsCubeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMdsCubeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMdsWhitelistContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMdsWhitelistContentResponse
   */
  async deleteMdsWhitelistContentWithOptions(request: $_model.DeleteMdsWhitelistContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMdsWhitelistContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistId)) {
      body["WhitelistId"] = request.whitelistId;
    }

    if (!$dara.isNull(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMdsWhitelistContent",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMdsWhitelistContentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMdsWhitelistContentResponse({}));
  }

  /**
   * @param request - DeleteMdsWhitelistContentRequest
   * @returns DeleteMdsWhitelistContentResponse
   */
  async deleteMdsWhitelistContent(request: $_model.DeleteMdsWhitelistContentRequest): Promise<$_model.DeleteMdsWhitelistContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMdsWhitelistContentWithOptions(request, runtime);
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ExistMcubeRsaKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExistMcubeRsaKeyResponse
   */
  async existMcubeRsaKeyWithOptions(request: $_model.ExistMcubeRsaKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExistMcubeRsaKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExistMcubeRsaKey",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExistMcubeRsaKeyResponse>(await this.callApi(params, req, runtime), new $_model.ExistMcubeRsaKeyResponse({}));
  }

  /**
   * @param request - ExistMcubeRsaKeyRequest
   * @returns ExistMcubeRsaKeyResponse
   */
  async existMcubeRsaKey(request: $_model.ExistMcubeRsaKeyRequest): Promise<$_model.ExistMcubeRsaKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.existMcubeRsaKeyWithOptions(request, runtime);
  }

  /**
   * @param request - ExportMappCenterAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportMappCenterAppConfigResponse
   */
  async exportMappCenterAppConfigWithOptions(request: $_model.ExportMappCenterAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportMappCenterAppConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apkFileUrl)) {
      body["ApkFileUrl"] = request.apkFileUrl;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.certRsaBase64)) {
      body["CertRsaBase64"] = request.certRsaBase64;
    }

    if (!$dara.isNull(request.identifier)) {
      body["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportMappCenterAppConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportMappCenterAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.ExportMappCenterAppConfigResponse({}));
  }

  /**
   * @param request - ExportMappCenterAppConfigRequest
   * @returns ExportMappCenterAppConfigResponse
   */
  async exportMappCenterAppConfig(request: $_model.ExportMappCenterAppConfigRequest): Promise<$_model.ExportMappCenterAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportMappCenterAppConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetFileTokenForUploadToMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileTokenForUploadToMsaResponse
   */
  async getFileTokenForUploadToMsaWithOptions(request: $_model.GetFileTokenForUploadToMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileTokenForUploadToMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileTokenForUploadToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileTokenForUploadToMsaResponse>(await this.callApi(params, req, runtime), new $_model.GetFileTokenForUploadToMsaResponse({}));
  }

  /**
   * @param request - GetFileTokenForUploadToMsaRequest
   * @returns GetFileTokenForUploadToMsaResponse
   */
  async getFileTokenForUploadToMsa(request: $_model.GetFileTokenForUploadToMsaRequest): Promise<$_model.GetFileTokenForUploadToMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileTokenForUploadToMsaWithOptions(request, runtime);
  }

  /**
   * @param request - GetLogUrlInMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogUrlInMsaResponse
   */
  async getLogUrlInMsaWithOptions(request: $_model.GetLogUrlInMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogUrlInMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogUrlInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogUrlInMsaResponse>(await this.callApi(params, req, runtime), new $_model.GetLogUrlInMsaResponse({}));
  }

  /**
   * @param request - GetLogUrlInMsaRequest
   * @returns GetLogUrlInMsaResponse
   */
  async getLogUrlInMsa(request: $_model.GetLogUrlInMsaRequest): Promise<$_model.GetLogUrlInMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogUrlInMsaWithOptions(request, runtime);
  }

  /**
   * @param request - GetMcubeFileTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcubeFileTokenResponse
   */
  async getMcubeFileTokenWithOptions(request: $_model.GetMcubeFileTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcubeFileTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcubeFileToken",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcubeFileTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetMcubeFileTokenResponse({}));
  }

  /**
   * @param request - GetMcubeFileTokenRequest
   * @returns GetMcubeFileTokenResponse
   */
  async getMcubeFileToken(request: $_model.GetMcubeFileTokenRequest): Promise<$_model.GetMcubeFileTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcubeFileTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GetMcubeNebulaResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcubeNebulaResourceResponse
   */
  async getMcubeNebulaResourceWithOptions(request: $_model.GetMcubeNebulaResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcubeNebulaResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcubeNebulaResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcubeNebulaResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetMcubeNebulaResourceResponse({}));
  }

  /**
   * @param request - GetMcubeNebulaResourceRequest
   * @returns GetMcubeNebulaResourceResponse
   */
  async getMcubeNebulaResource(request: $_model.GetMcubeNebulaResourceRequest): Promise<$_model.GetMcubeNebulaResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcubeNebulaResourceWithOptions(request, runtime);
  }

  /**
   * @param request - GetMcubeNebulaTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcubeNebulaTaskDetailResponse
   */
  async getMcubeNebulaTaskDetailWithOptions(request: $_model.GetMcubeNebulaTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcubeNebulaTaskDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcubeNebulaTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcubeNebulaTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetMcubeNebulaTaskDetailResponse({}));
  }

  /**
   * @param request - GetMcubeNebulaTaskDetailRequest
   * @returns GetMcubeNebulaTaskDetailResponse
   */
  async getMcubeNebulaTaskDetail(request: $_model.GetMcubeNebulaTaskDetailRequest): Promise<$_model.GetMcubeNebulaTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcubeNebulaTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetMcubeUpgradePackageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcubeUpgradePackageInfoResponse
   */
  async getMcubeUpgradePackageInfoWithOptions(request: $_model.GetMcubeUpgradePackageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcubeUpgradePackageInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcubeUpgradePackageInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcubeUpgradePackageInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMcubeUpgradePackageInfoResponse({}));
  }

  /**
   * @param request - GetMcubeUpgradePackageInfoRequest
   * @returns GetMcubeUpgradePackageInfoResponse
   */
  async getMcubeUpgradePackageInfo(request: $_model.GetMcubeUpgradePackageInfoRequest): Promise<$_model.GetMcubeUpgradePackageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcubeUpgradePackageInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetMcubeUpgradeTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcubeUpgradeTaskInfoResponse
   */
  async getMcubeUpgradeTaskInfoWithOptions(request: $_model.GetMcubeUpgradeTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcubeUpgradeTaskInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcubeUpgradeTaskInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcubeUpgradeTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMcubeUpgradeTaskInfoResponse({}));
  }

  /**
   * @param request - GetMcubeUpgradeTaskInfoRequest
   * @returns GetMcubeUpgradeTaskInfoResponse
   */
  async getMcubeUpgradeTaskInfo(request: $_model.GetMcubeUpgradeTaskInfoRequest): Promise<$_model.GetMcubeUpgradeTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcubeUpgradeTaskInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetMdsMiniConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMdsMiniConfigResponse
   */
  async getMdsMiniConfigWithOptions(request: $_model.GetMdsMiniConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMdsMiniConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMdsMiniConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMdsMiniConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetMdsMiniConfigResponse({}));
  }

  /**
   * @param request - GetMdsMiniConfigRequest
   * @returns GetMdsMiniConfigResponse
   */
  async getMdsMiniConfig(request: $_model.GetMdsMiniConfigRequest): Promise<$_model.GetMdsMiniConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMdsMiniConfigWithOptions(request, runtime);
  }

  /**
   * 获取模版
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * 获取模版
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserAppDonwloadUrlInMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAppDonwloadUrlInMsaResponse
   */
  async getUserAppDonwloadUrlInMsaWithOptions(request: $_model.GetUserAppDonwloadUrlInMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAppDonwloadUrlInMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAppDonwloadUrlInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAppDonwloadUrlInMsaResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAppDonwloadUrlInMsaResponse({}));
  }

  /**
   * @param request - GetUserAppDonwloadUrlInMsaRequest
   * @returns GetUserAppDonwloadUrlInMsaResponse
   */
  async getUserAppDonwloadUrlInMsa(request: $_model.GetUserAppDonwloadUrlInMsaRequest): Promise<$_model.GetUserAppDonwloadUrlInMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAppDonwloadUrlInMsaWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserAppEnhanceProcessInMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAppEnhanceProcessInMsaResponse
   */
  async getUserAppEnhanceProcessInMsaWithOptions(request: $_model.GetUserAppEnhanceProcessInMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAppEnhanceProcessInMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAppEnhanceProcessInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAppEnhanceProcessInMsaResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAppEnhanceProcessInMsaResponse({}));
  }

  /**
   * @param request - GetUserAppEnhanceProcessInMsaRequest
   * @returns GetUserAppEnhanceProcessInMsaResponse
   */
  async getUserAppEnhanceProcessInMsa(request: $_model.GetUserAppEnhanceProcessInMsaRequest): Promise<$_model.GetUserAppEnhanceProcessInMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAppEnhanceProcessInMsaWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserAppUploadProcessInMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAppUploadProcessInMsaResponse
   */
  async getUserAppUploadProcessInMsaWithOptions(request: $_model.GetUserAppUploadProcessInMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAppUploadProcessInMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAppUploadProcessInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAppUploadProcessInMsaResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAppUploadProcessInMsaResponse({}));
  }

  /**
   * @param request - GetUserAppUploadProcessInMsaRequest
   * @returns GetUserAppUploadProcessInMsaResponse
   */
  async getUserAppUploadProcessInMsa(request: $_model.GetUserAppUploadProcessInMsaRequest): Promise<$_model.GetUserAppUploadProcessInMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAppUploadProcessInMsaWithOptions(request, runtime);
  }

  /**
   * 查询报表
   * 
   * @param request - ListAnalysisCoreIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnalysisCoreIndexResponse
   */
  async listAnalysisCoreIndexWithOptions(request: $_model.ListAnalysisCoreIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnalysisCoreIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnalysisCoreIndex",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnalysisCoreIndexResponse>(await this.callApi(params, req, runtime), new $_model.ListAnalysisCoreIndexResponse({}));
  }

  /**
   * 查询报表
   * 
   * @param request - ListAnalysisCoreIndexRequest
   * @returns ListAnalysisCoreIndexResponse
   */
  async listAnalysisCoreIndex(request: $_model.ListAnalysisCoreIndexRequest): Promise<$_model.ListAnalysisCoreIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnalysisCoreIndexWithOptions(request, runtime);
  }

  /**
   * @param request - ListCubecardAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCubecardAppsResponse
   */
  async listCubecardAppsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCubecardAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCubecardApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCubecardAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListCubecardAppsResponse({}));
  }

  /**
   * @returns ListCubecardAppsResponse
   */
  async listCubecardApps(): Promise<$_model.ListCubecardAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCubecardAppsWithOptions(runtime);
  }

  /**
   * @param request - ListMappCenterAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMappCenterAppsResponse
   */
  async listMappCenterAppsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListMappCenterAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListMappCenterApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMappCenterAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListMappCenterAppsResponse({}));
  }

  /**
   * @returns ListMappCenterAppsResponse
   */
  async listMappCenterApps(): Promise<$_model.ListMappCenterAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMappCenterAppsWithOptions(runtime);
  }

  /**
   * @param request - ListMappCenterWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMappCenterWorkspacesResponse
   */
  async listMappCenterWorkspacesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListMappCenterWorkspacesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListMappCenterWorkspaces",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMappCenterWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListMappCenterWorkspacesResponse({}));
  }

  /**
   * @returns ListMappCenterWorkspacesResponse
   */
  async listMappCenterWorkspaces(): Promise<$_model.ListMappCenterWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMappCenterWorkspacesWithOptions(runtime);
  }

  /**
   * @param request - ListMcdpAimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcdpAimResponse
   */
  async listMcdpAimWithOptions(request: $_model.ListMcdpAimRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcdpAimResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.emptyTag)) {
      body["EmptyTag"] = request.emptyTag;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcdpAimResponse>(await this.callApi(params, req, runtime), new $_model.ListMcdpAimResponse({}));
  }

  /**
   * @param request - ListMcdpAimRequest
   * @returns ListMcdpAimResponse
   */
  async listMcdpAim(request: $_model.ListMcdpAimRequest): Promise<$_model.ListMcdpAimResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcdpAimWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeMiniAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeMiniAppsResponse
   */
  async listMcubeMiniAppsWithOptions(request: $_model.ListMcubeMiniAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeMiniAppsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeMiniApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeMiniAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeMiniAppsResponse({}));
  }

  /**
   * @param request - ListMcubeMiniAppsRequest
   * @returns ListMcubeMiniAppsResponse
   */
  async listMcubeMiniApps(request: $_model.ListMcubeMiniAppsRequest): Promise<$_model.ListMcubeMiniAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeMiniAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeMiniPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeMiniPackagesResponse
   */
  async listMcubeMiniPackagesWithOptions(request: $_model.ListMcubeMiniPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeMiniPackagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.packageTypes)) {
      body["PackageTypes"] = request.packageTypes;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeMiniPackages",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeMiniPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeMiniPackagesResponse({}));
  }

  /**
   * @param request - ListMcubeMiniPackagesRequest
   * @returns ListMcubeMiniPackagesResponse
   */
  async listMcubeMiniPackages(request: $_model.ListMcubeMiniPackagesRequest): Promise<$_model.ListMcubeMiniPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeMiniPackagesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeMiniTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeMiniTasksResponse
   */
  async listMcubeMiniTasksWithOptions(request: $_model.ListMcubeMiniTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeMiniTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeMiniTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeMiniTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeMiniTasksResponse({}));
  }

  /**
   * @param request - ListMcubeMiniTasksRequest
   * @returns ListMcubeMiniTasksResponse
   */
  async listMcubeMiniTasks(request: $_model.ListMcubeMiniTasksRequest): Promise<$_model.ListMcubeMiniTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeMiniTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeNebulaAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeNebulaAppsResponse
   */
  async listMcubeNebulaAppsWithOptions(request: $_model.ListMcubeNebulaAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeNebulaAppsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeNebulaApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeNebulaAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeNebulaAppsResponse({}));
  }

  /**
   * @param request - ListMcubeNebulaAppsRequest
   * @returns ListMcubeNebulaAppsResponse
   */
  async listMcubeNebulaApps(request: $_model.ListMcubeNebulaAppsRequest): Promise<$_model.ListMcubeNebulaAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeNebulaAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeNebulaResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeNebulaResourcesResponse
   */
  async listMcubeNebulaResourcesWithOptions(request: $_model.ListMcubeNebulaResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeNebulaResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeNebulaResources",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeNebulaResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeNebulaResourcesResponse({}));
  }

  /**
   * @param request - ListMcubeNebulaResourcesRequest
   * @returns ListMcubeNebulaResourcesResponse
   */
  async listMcubeNebulaResources(request: $_model.ListMcubeNebulaResourcesRequest): Promise<$_model.ListMcubeNebulaResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeNebulaResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeNebulaTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeNebulaTasksResponse
   */
  async listMcubeNebulaTasksWithOptions(request: $_model.ListMcubeNebulaTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeNebulaTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeNebulaTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeNebulaTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeNebulaTasksResponse({}));
  }

  /**
   * @param request - ListMcubeNebulaTasksRequest
   * @returns ListMcubeNebulaTasksResponse
   */
  async listMcubeNebulaTasks(request: $_model.ListMcubeNebulaTasksRequest): Promise<$_model.ListMcubeNebulaTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeNebulaTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeUpgradePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeUpgradePackagesResponse
   */
  async listMcubeUpgradePackagesWithOptions(request: $_model.ListMcubeUpgradePackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeUpgradePackagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeUpgradePackages",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeUpgradePackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeUpgradePackagesResponse({}));
  }

  /**
   * @param request - ListMcubeUpgradePackagesRequest
   * @returns ListMcubeUpgradePackagesResponse
   */
  async listMcubeUpgradePackages(request: $_model.ListMcubeUpgradePackagesRequest): Promise<$_model.ListMcubeUpgradePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeUpgradePackagesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeUpgradeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeUpgradeTasksResponse
   */
  async listMcubeUpgradeTasksWithOptions(request: $_model.ListMcubeUpgradeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeUpgradeTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeUpgradeTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeUpgradeTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeUpgradeTasksResponse({}));
  }

  /**
   * @param request - ListMcubeUpgradeTasksRequest
   * @returns ListMcubeUpgradeTasksResponse
   */
  async listMcubeUpgradeTasks(request: $_model.ListMcubeUpgradeTasksRequest): Promise<$_model.ListMcubeUpgradeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeUpgradeTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListMcubeWhitelistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcubeWhitelistsResponse
   */
  async listMcubeWhitelistsWithOptions(request: $_model.ListMcubeWhitelistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcubeWhitelistsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.whitelistName)) {
      body["WhitelistName"] = request.whitelistName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcubeWhitelists",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcubeWhitelistsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcubeWhitelistsResponse({}));
  }

  /**
   * @param request - ListMcubeWhitelistsRequest
   * @returns ListMcubeWhitelistsResponse
   */
  async listMcubeWhitelists(request: $_model.ListMcubeWhitelistsRequest): Promise<$_model.ListMcubeWhitelistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcubeWhitelistsWithOptions(request, runtime);
  }

  /**
   * @param request - ListMdsCubeResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMdsCubeResourcesResponse
   */
  async listMdsCubeResourcesWithOptions(request: $_model.ListMdsCubeResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMdsCubeResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.test)) {
      body["test"] = request.test;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMdsCubeResources",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMdsCubeResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListMdsCubeResourcesResponse({}));
  }

  /**
   * @param request - ListMdsCubeResourcesRequest
   * @returns ListMdsCubeResourcesResponse
   */
  async listMdsCubeResources(request: $_model.ListMdsCubeResourcesRequest): Promise<$_model.ListMdsCubeResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMdsCubeResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMdsCubeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMdsCubeTasksResponse
   */
  async listMdsCubeTasksWithOptions(request: $_model.ListMdsCubeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMdsCubeTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateResourceId)) {
      body["TemplateResourceId"] = request.templateResourceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMdsCubeTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMdsCubeTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMdsCubeTasksResponse({}));
  }

  /**
   * @param request - ListMdsCubeTasksRequest
   * @returns ListMdsCubeTasksResponse
   */
  async listMdsCubeTasks(request: $_model.ListMdsCubeTasksRequest): Promise<$_model.ListMdsCubeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMdsCubeTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListMdsCubeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMdsCubeTemplatesResponse
   */
  async listMdsCubeTemplatesWithOptions(request: $_model.ListMdsCubeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMdsCubeTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMdsCubeTemplates",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMdsCubeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListMdsCubeTemplatesResponse({}));
  }

  /**
   * @param request - ListMdsCubeTemplatesRequest
   * @returns ListMdsCubeTemplatesResponse
   */
  async listMdsCubeTemplates(request: $_model.ListMdsCubeTemplatesRequest): Promise<$_model.ListMdsCubeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMdsCubeTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMgsApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMgsApiResponse
   */
  async listMgsApiWithOptions(request: $_model.ListMgsApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMgsApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiStatus)) {
      body["ApiStatus"] = request.apiStatus;
    }

    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.host)) {
      body["Host"] = request.host;
    }

    if (!$dara.isNull(request.needEncrypt)) {
      body["NeedEncrypt"] = request.needEncrypt;
    }

    if (!$dara.isNull(request.needEtag)) {
      body["NeedEtag"] = request.needEtag;
    }

    if (!$dara.isNull(request.needSign)) {
      body["NeedSign"] = request.needSign;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.optFuzzy)) {
      body["OptFuzzy"] = request.optFuzzy;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sysId)) {
      body["SysId"] = request.sysId;
    }

    if (!$dara.isNull(request.sysName)) {
      body["SysName"] = request.sysName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMgsApi",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMgsApiResponse>(await this.callApi(params, req, runtime), new $_model.ListMgsApiResponse({}));
  }

  /**
   * @param request - ListMgsApiRequest
   * @returns ListMgsApiResponse
   */
  async listMgsApi(request: $_model.ListMgsApiRequest): Promise<$_model.ListMgsApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMgsApiWithOptions(request, runtime);
  }

  /**
   * 分页查询模版列表
   * 
   * @param request - ListTemplatePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatePageResponse
   */
  async listTemplatePageWithOptions(request: $_model.ListTemplatePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplatePage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatePageResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatePageResponse({}));
  }

  /**
   * 分页查询模版列表
   * 
   * @param request - ListTemplatePageRequest
   * @returns ListTemplatePageResponse
   */
  async listTemplatePage(request: $_model.ListTemplatePageRequest): Promise<$_model.ListTemplatePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatePageWithOptions(request, runtime);
  }

  /**
   * OCR通用接口
   * 
   * @param request - MTRSOCRServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MTRSOCRServiceResponse
   */
  async mTRSOCRServiceWithOptions(request: $_model.MTRSOCRServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MTRSOCRServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.imageRaw)) {
      body["ImageRaw"] = request.imageRaw;
    }

    if (!$dara.isNull(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MTRSOCRService",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MTRSOCRServiceResponse>(await this.callApi(params, req, runtime), new $_model.MTRSOCRServiceResponse({}));
  }

  /**
   * OCR通用接口
   * 
   * @param request - MTRSOCRServiceRequest
   * @returns MTRSOCRServiceResponse
   */
  async mTRSOCRService(request: $_model.MTRSOCRServiceRequest): Promise<$_model.MTRSOCRServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mTRSOCRServiceWithOptions(request, runtime);
  }

  /**
   * @param request - PushBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushBindResponse
   */
  async pushBindWithOptions(request: $_model.PushBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushBindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!$dara.isNull(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushBind",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushBindResponse>(await this.callApi(params, req, runtime), new $_model.PushBindResponse({}));
  }

  /**
   * @param request - PushBindRequest
   * @returns PushBindResponse
   */
  async pushBind(request: $_model.PushBindRequest): Promise<$_model.PushBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushBindWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - PushBroadcastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushBroadcastResponse
   */
  async pushBroadcastWithOptions(tmpReq: $_model.PushBroadcastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushBroadcastResponse> {
    tmpReq.validate();
    let request = new $_model.PushBroadcastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notifyLevel)) {
      request.notifyLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyLevel, "NotifyLevel", "json");
    }

    if (!$dara.isNull(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidChannel)) {
      body["AndroidChannel"] = request.androidChannel;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bindEndTime)) {
      body["BindEndTime"] = request.bindEndTime;
    }

    if (!$dara.isNull(request.bindPeriod)) {
      body["BindPeriod"] = request.bindPeriod;
    }

    if (!$dara.isNull(request.bindStartTime)) {
      body["BindStartTime"] = request.bindStartTime;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!$dara.isNull(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!$dara.isNull(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!$dara.isNull(request.msgkey)) {
      body["Msgkey"] = request.msgkey;
    }

    if (!$dara.isNull(request.notifyLevelShrink)) {
      body["NotifyLevel"] = request.notifyLevelShrink;
    }

    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!$dara.isNull(request.pushStatus)) {
      body["PushStatus"] = request.pushStatus;
    }

    if (!$dara.isNull(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!$dara.isNull(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!$dara.isNull(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateKeyValue)) {
      body["TemplateKeyValue"] = request.templateKeyValue;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!$dara.isNull(request.timeMode)) {
      body["TimeMode"] = request.timeMode;
    }

    if (!$dara.isNull(request.transparentMessagePayload)) {
      body["TransparentMessagePayload"] = request.transparentMessagePayload;
    }

    if (!$dara.isNull(request.transparentMessageUrgency)) {
      body["TransparentMessageUrgency"] = request.transparentMessageUrgency;
    }

    if (!$dara.isNull(request.unBindEndTime)) {
      body["UnBindEndTime"] = request.unBindEndTime;
    }

    if (!$dara.isNull(request.unBindPeriod)) {
      body["UnBindPeriod"] = request.unBindPeriod;
    }

    if (!$dara.isNull(request.unBindStartTime)) {
      body["UnBindStartTime"] = request.unBindStartTime;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushBroadcast",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushBroadcastResponse>(await this.callApi(params, req, runtime), new $_model.PushBroadcastResponse({}));
  }

  /**
   * @param request - PushBroadcastRequest
   * @returns PushBroadcastResponse
   */
  async pushBroadcast(request: $_model.PushBroadcastRequest): Promise<$_model.PushBroadcastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushBroadcastWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - PushMultipleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMultipleResponse
   */
  async pushMultipleWithOptions(tmpReq: $_model.PushMultipleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMultipleResponse> {
    tmpReq.validate();
    let request = new $_model.PushMultipleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notifyLevel)) {
      request.notifyLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyLevel, "NotifyLevel", "json");
    }

    if (!$dara.isNull(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activityContentState)) {
      body["ActivityContentState"] = request.activityContentState;
    }

    if (!$dara.isNull(request.activityEvent)) {
      body["ActivityEvent"] = request.activityEvent;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.dismissalDate)) {
      body["DismissalDate"] = request.dismissalDate;
    }

    if (!$dara.isNull(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!$dara.isNull(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!$dara.isNull(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!$dara.isNull(request.notifyLevelShrink)) {
      body["NotifyLevel"] = request.notifyLevelShrink;
    }

    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!$dara.isNull(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!$dara.isNull(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!$dara.isNull(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!$dara.isNull(request.targetMsg)) {
      body["TargetMsg"] = request.targetMsg;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!$dara.isNull(request.transparentMessagePayload)) {
      body["TransparentMessagePayload"] = request.transparentMessagePayload;
    }

    if (!$dara.isNull(request.transparentMessageUrgency)) {
      body["TransparentMessageUrgency"] = request.transparentMessageUrgency;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMultiple",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMultipleResponse>(await this.callApi(params, req, runtime), new $_model.PushMultipleResponse({}));
  }

  /**
   * @param request - PushMultipleRequest
   * @returns PushMultipleResponse
   */
  async pushMultiple(request: $_model.PushMultipleRequest): Promise<$_model.PushMultipleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMultipleWithOptions(request, runtime);
  }

  /**
   * 查询设备状态信息
   * 
   * @param request - PushQueryDeviceStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushQueryDeviceStateResponse
   */
  async pushQueryDeviceStateWithOptions(request: $_model.PushQueryDeviceStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushQueryDeviceStateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetType)) {
      body["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushQueryDeviceState",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushQueryDeviceStateResponse>(await this.callApi(params, req, runtime), new $_model.PushQueryDeviceStateResponse({}));
  }

  /**
   * 查询设备状态信息
   * 
   * @param request - PushQueryDeviceStateRequest
   * @returns PushQueryDeviceStateResponse
   */
  async pushQueryDeviceState(request: $_model.PushQueryDeviceStateRequest): Promise<$_model.PushQueryDeviceStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushQueryDeviceStateWithOptions(request, runtime);
  }

  /**
   * @param request - PushReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushReportResponse
   */
  async pushReportWithOptions(request: $_model.PushReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.connectType)) {
      body["ConnectType"] = request.connectType;
    }

    if (!$dara.isNull(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!$dara.isNull(request.imei)) {
      body["Imei"] = request.imei;
    }

    if (!$dara.isNull(request.imsi)) {
      body["Imsi"] = request.imsi;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.pushVersion)) {
      body["PushVersion"] = request.pushVersion;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdChannel)) {
      body["ThirdChannel"] = request.thirdChannel;
    }

    if (!$dara.isNull(request.thirdChannelDeviceToken)) {
      body["ThirdChannelDeviceToken"] = request.thirdChannelDeviceToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushReport",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushReportResponse>(await this.callApi(params, req, runtime), new $_model.PushReportResponse({}));
  }

  /**
   * @param request - PushReportRequest
   * @returns PushReportResponse
   */
  async pushReport(request: $_model.PushReportRequest): Promise<$_model.PushReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushReportWithOptions(request, runtime);
  }

  /**
   * 极简推送
   * 
   * @param tmpReq - PushSimpleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushSimpleResponse
   */
  async pushSimpleWithOptions(tmpReq: $_model.PushSimpleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushSimpleResponse> {
    tmpReq.validate();
    let request = new $_model.PushSimpleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notifyLevel)) {
      request.notifyLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyLevel, "NotifyLevel", "json");
    }

    if (!$dara.isNull(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activityContentState)) {
      body["ActivityContentState"] = request.activityContentState;
    }

    if (!$dara.isNull(request.activityEvent)) {
      body["ActivityEvent"] = request.activityEvent;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.dismissalDate)) {
      body["DismissalDate"] = request.dismissalDate;
    }

    if (!$dara.isNull(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!$dara.isNull(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!$dara.isNull(request.iconUrls)) {
      body["IconUrls"] = request.iconUrls;
    }

    if (!$dara.isNull(request.imageUrls)) {
      body["ImageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!$dara.isNull(request.notifyLevelShrink)) {
      body["NotifyLevel"] = request.notifyLevelShrink;
    }

    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!$dara.isNull(request.pushStyle)) {
      body["PushStyle"] = request.pushStyle;
    }

    if (!$dara.isNull(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!$dara.isNull(request.smsSignName)) {
      body["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.smsStrategy)) {
      body["SmsStrategy"] = request.smsStrategy;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      body["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParam)) {
      body["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!$dara.isNull(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!$dara.isNull(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!$dara.isNull(request.targetMsgkey)) {
      body["TargetMsgkey"] = request.targetMsgkey;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.transparentMessagePayload)) {
      body["TransparentMessagePayload"] = request.transparentMessagePayload;
    }

    if (!$dara.isNull(request.transparentMessageUrgency)) {
      body["TransparentMessageUrgency"] = request.transparentMessageUrgency;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushSimple",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushSimpleResponse>(await this.callApi(params, req, runtime), new $_model.PushSimpleResponse({}));
  }

  /**
   * 极简推送
   * 
   * @param request - PushSimpleRequest
   * @returns PushSimpleResponse
   */
  async pushSimple(request: $_model.PushSimpleRequest): Promise<$_model.PushSimpleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushSimpleWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - PushTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushTemplateResponse
   */
  async pushTemplateWithOptions(tmpReq: $_model.PushTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.PushTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notifyLevel)) {
      request.notifyLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyLevel, "NotifyLevel", "json");
    }

    if (!$dara.isNull(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activityContentState)) {
      body["ActivityContentState"] = request.activityContentState;
    }

    if (!$dara.isNull(request.activityEvent)) {
      body["ActivityEvent"] = request.activityEvent;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.dismissalDate)) {
      body["DismissalDate"] = request.dismissalDate;
    }

    if (!$dara.isNull(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!$dara.isNull(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!$dara.isNull(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!$dara.isNull(request.notifyLevelShrink)) {
      body["NotifyLevel"] = request.notifyLevelShrink;
    }

    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!$dara.isNull(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!$dara.isNull(request.smsSignName)) {
      body["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.smsStrategy)) {
      body["SmsStrategy"] = request.smsStrategy;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      body["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParam)) {
      body["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!$dara.isNull(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!$dara.isNull(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!$dara.isNull(request.targetMsgkey)) {
      body["TargetMsgkey"] = request.targetMsgkey;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateKeyValue)) {
      body["TemplateKeyValue"] = request.templateKeyValue;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!$dara.isNull(request.transparentMessagePayload)) {
      body["TransparentMessagePayload"] = request.transparentMessagePayload;
    }

    if (!$dara.isNull(request.transparentMessageUrgency)) {
      body["TransparentMessageUrgency"] = request.transparentMessageUrgency;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushTemplateResponse>(await this.callApi(params, req, runtime), new $_model.PushTemplateResponse({}));
  }

  /**
   * @param request - PushTemplateRequest
   * @returns PushTemplateResponse
   */
  async pushTemplate(request: $_model.PushTemplateRequest): Promise<$_model.PushTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - PushUnBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushUnBindResponse
   */
  async pushUnBindWithOptions(request: $_model.PushUnBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushUnBindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushUnBind",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushUnBindResponse>(await this.callApi(params, req, runtime), new $_model.PushUnBindResponse({}));
  }

  /**
   * @param request - PushUnBindRequest
   * @returns PushUnBindResponse
   */
  async pushUnBind(request: $_model.PushUnBindRequest): Promise<$_model.PushUnBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushUnBindWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCubecardFiletokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubecardFiletokenResponse
   */
  async queryCubecardFiletokenWithOptions(request: $_model.QueryCubecardFiletokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCubecardFiletokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCubecardFiletoken",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCubecardFiletokenResponse>(await this.callApi(params, req, runtime), new $_model.QueryCubecardFiletokenResponse({}));
  }

  /**
   * @param request - QueryCubecardFiletokenRequest
   * @returns QueryCubecardFiletokenResponse
   */
  async queryCubecardFiletoken(request: $_model.QueryCubecardFiletokenRequest): Promise<$_model.QueryCubecardFiletokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCubecardFiletokenWithOptions(request, runtime);
  }

  /**
   * 查询Device+服务的
   * 
   * @param request - QueryInfoFromMdpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInfoFromMdpResponse
   */
  async queryInfoFromMdpWithOptions(request: $_model.QueryInfoFromMdpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInfoFromMdpResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.mobileMd5)) {
      body["MobileMd5"] = request.mobileMd5;
    }

    if (!$dara.isNull(request.mobileSha256)) {
      body["MobileSha256"] = request.mobileSha256;
    }

    if (!$dara.isNull(request.mobileSm3)) {
      body["MobileSm3"] = request.mobileSm3;
    }

    if (!$dara.isNull(request.riskScene)) {
      body["RiskScene"] = request.riskScene;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInfoFromMdp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInfoFromMdpResponse>(await this.callApi(params, req, runtime), new $_model.QueryInfoFromMdpResponse({}));
  }

  /**
   * 查询Device+服务的
   * 
   * @param request - QueryInfoFromMdpRequest
   * @returns QueryInfoFromMdpResponse
   */
  async queryInfoFromMdp(request: $_model.QueryInfoFromMdpRequest): Promise<$_model.QueryInfoFromMdpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInfoFromMdpWithOptions(request, runtime);
  }

  /**
   * 查询短链
   * 
   * @param request - QueryLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLinkResponse
   */
  async queryLinkWithOptions(request: $_model.QueryLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLink",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLinkResponse>(await this.callApi(params, req, runtime), new $_model.QueryLinkResponse({}));
  }

  /**
   * 查询短链
   * 
   * @param request - QueryLinkRequest
   * @returns QueryLinkResponse
   */
  async queryLink(request: $_model.QueryLinkRequest): Promise<$_model.QueryLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLinkWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMappCenterAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMappCenterAppResponse
   */
  async queryMappCenterAppWithOptions(request: $_model.QueryMappCenterAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMappCenterAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMappCenterApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMappCenterAppResponse>(await this.callApi(params, req, runtime), new $_model.QueryMappCenterAppResponse({}));
  }

  /**
   * @param request - QueryMappCenterAppRequest
   * @returns QueryMappCenterAppResponse
   */
  async queryMappCenterApp(request: $_model.QueryMappCenterAppRequest): Promise<$_model.QueryMappCenterAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMappCenterAppWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMcdpAimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMcdpAimResponse
   */
  async queryMcdpAimWithOptions(request: $_model.QueryMcdpAimRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMcdpAimResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMcdpAimResponse>(await this.callApi(params, req, runtime), new $_model.QueryMcdpAimResponse({}));
  }

  /**
   * @param request - QueryMcdpAimRequest
   * @returns QueryMcdpAimResponse
   */
  async queryMcdpAim(request: $_model.QueryMcdpAimRequest): Promise<$_model.QueryMcdpAimResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMcdpAimWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMcdpZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMcdpZoneResponse
   */
  async queryMcdpZoneWithOptions(request: $_model.QueryMcdpZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMcdpZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMcdpZoneResponse>(await this.callApi(params, req, runtime), new $_model.QueryMcdpZoneResponse({}));
  }

  /**
   * @param request - QueryMcdpZoneRequest
   * @returns QueryMcdpZoneResponse
   */
  async queryMcdpZone(request: $_model.QueryMcdpZoneRequest): Promise<$_model.QueryMcdpZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMcdpZoneWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMcubeMiniPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMcubeMiniPackageResponse
   */
  async queryMcubeMiniPackageWithOptions(request: $_model.QueryMcubeMiniPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMcubeMiniPackageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMcubeMiniPackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMcubeMiniPackageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMcubeMiniPackageResponse({}));
  }

  /**
   * @param request - QueryMcubeMiniPackageRequest
   * @returns QueryMcubeMiniPackageResponse
   */
  async queryMcubeMiniPackage(request: $_model.QueryMcubeMiniPackageRequest): Promise<$_model.QueryMcubeMiniPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMcubeMiniPackageWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMcubeMiniTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMcubeMiniTaskResponse
   */
  async queryMcubeMiniTaskWithOptions(request: $_model.QueryMcubeMiniTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMcubeMiniTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMcubeMiniTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMcubeMiniTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryMcubeMiniTaskResponse({}));
  }

  /**
   * @param request - QueryMcubeMiniTaskRequest
   * @returns QueryMcubeMiniTaskResponse
   */
  async queryMcubeMiniTask(request: $_model.QueryMcubeMiniTaskRequest): Promise<$_model.QueryMcubeMiniTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMcubeMiniTaskWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMcubeVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMcubeVhostResponse
   */
  async queryMcubeVhostWithOptions(request: $_model.QueryMcubeVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMcubeVhostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMcubeVhost",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMcubeVhostResponse>(await this.callApi(params, req, runtime), new $_model.QueryMcubeVhostResponse({}));
  }

  /**
   * @param request - QueryMcubeVhostRequest
   * @returns QueryMcubeVhostResponse
   */
  async queryMcubeVhost(request: $_model.QueryMcubeVhostRequest): Promise<$_model.QueryMcubeVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMcubeVhostWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMdsUpgradeTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMdsUpgradeTaskDetailResponse
   */
  async queryMdsUpgradeTaskDetailWithOptions(request: $_model.QueryMdsUpgradeTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMdsUpgradeTaskDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMdsUpgradeTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMdsUpgradeTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMdsUpgradeTaskDetailResponse({}));
  }

  /**
   * @param request - QueryMdsUpgradeTaskDetailRequest
   * @returns QueryMdsUpgradeTaskDetailResponse
   */
  async queryMdsUpgradeTaskDetail(request: $_model.QueryMdsUpgradeTaskDetailRequest): Promise<$_model.QueryMdsUpgradeTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMdsUpgradeTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMgsApipageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMgsApipageResponse
   */
  async queryMgsApipageWithOptions(request: $_model.QueryMgsApipageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMgsApipageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiStatus)) {
      body["ApiStatus"] = request.apiStatus;
    }

    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.host)) {
      body["Host"] = request.host;
    }

    if (!$dara.isNull(request.needEncrypt)) {
      body["NeedEncrypt"] = request.needEncrypt;
    }

    if (!$dara.isNull(request.needEtag)) {
      body["NeedEtag"] = request.needEtag;
    }

    if (!$dara.isNull(request.needSign)) {
      body["NeedSign"] = request.needSign;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.optFuzzy)) {
      body["OptFuzzy"] = request.optFuzzy;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sysId)) {
      body["SysId"] = request.sysId;
    }

    if (!$dara.isNull(request.sysName)) {
      body["SysName"] = request.sysName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMgsApipage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMgsApipageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMgsApipageResponse({}));
  }

  /**
   * @param request - QueryMgsApipageRequest
   * @returns QueryMgsApipageResponse
   */
  async queryMgsApipage(request: $_model.QueryMgsApipageRequest): Promise<$_model.QueryMgsApipageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMgsApipageWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMgsApirestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMgsApirestResponse
   */
  async queryMgsApirestWithOptions(request: $_model.QueryMgsApirestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMgsApirestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMgsApirest",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMgsApirestResponse>(await this.callApi(params, req, runtime), new $_model.QueryMgsApirestResponse({}));
  }

  /**
   * @param request - QueryMgsApirestRequest
   * @returns QueryMgsApirestResponse
   */
  async queryMgsApirest(request: $_model.QueryMgsApirestRequest): Promise<$_model.QueryMgsApirestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMgsApirestWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMgsTestreqbodyautogenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMgsTestreqbodyautogenResponse
   */
  async queryMgsTestreqbodyautogenWithOptions(request: $_model.QueryMgsTestreqbodyautogenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMgsTestreqbodyautogenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr)) {
      body["MpaasMappcenterMgsTestreqbodyautogenQueryJsonStr"] = request.mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMgsTestreqbodyautogen",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMgsTestreqbodyautogenResponse>(await this.callApi(params, req, runtime), new $_model.QueryMgsTestreqbodyautogenResponse({}));
  }

  /**
   * @param request - QueryMgsTestreqbodyautogenRequest
   * @returns QueryMgsTestreqbodyautogenResponse
   */
  async queryMgsTestreqbodyautogen(request: $_model.QueryMgsTestreqbodyautogenRequest): Promise<$_model.QueryMgsTestreqbodyautogenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMgsTestreqbodyautogenWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMpsSchedulerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMpsSchedulerListResponse
   */
  async queryMpsSchedulerListWithOptions(request: $_model.QueryMpsSchedulerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMpsSchedulerListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMpsSchedulerList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMpsSchedulerListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMpsSchedulerListResponse({}));
  }

  /**
   * @param request - QueryMpsSchedulerListRequest
   * @returns QueryMpsSchedulerListResponse
   */
  async queryMpsSchedulerList(request: $_model.QueryMpsSchedulerListRequest): Promise<$_model.QueryMpsSchedulerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMpsSchedulerListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushAnalysisCoreIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushAnalysisCoreIndexResponse
   */
  async queryPushAnalysisCoreIndexWithOptions(request: $_model.QueryPushAnalysisCoreIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushAnalysisCoreIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushAnalysisCoreIndex",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushAnalysisCoreIndexResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushAnalysisCoreIndexResponse({}));
  }

  /**
   * @param request - QueryPushAnalysisCoreIndexRequest
   * @returns QueryPushAnalysisCoreIndexResponse
   */
  async queryPushAnalysisCoreIndex(request: $_model.QueryPushAnalysisCoreIndexRequest): Promise<$_model.QueryPushAnalysisCoreIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushAnalysisCoreIndexWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushAnalysisTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushAnalysisTaskDetailResponse
   */
  async queryPushAnalysisTaskDetailWithOptions(request: $_model.QueryPushAnalysisTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushAnalysisTaskDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushAnalysisTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushAnalysisTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushAnalysisTaskDetailResponse({}));
  }

  /**
   * @param request - QueryPushAnalysisTaskDetailRequest
   * @returns QueryPushAnalysisTaskDetailResponse
   */
  async queryPushAnalysisTaskDetail(request: $_model.QueryPushAnalysisTaskDetailRequest): Promise<$_model.QueryPushAnalysisTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushAnalysisTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushAnalysisTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushAnalysisTaskListResponse
   */
  async queryPushAnalysisTaskListWithOptions(request: $_model.QueryPushAnalysisTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushAnalysisTaskListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushAnalysisTaskList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushAnalysisTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushAnalysisTaskListResponse({}));
  }

  /**
   * @param request - QueryPushAnalysisTaskListRequest
   * @returns QueryPushAnalysisTaskListResponse
   */
  async queryPushAnalysisTaskList(request: $_model.QueryPushAnalysisTaskListRequest): Promise<$_model.QueryPushAnalysisTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushAnalysisTaskListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushSchedulerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushSchedulerListResponse
   */
  async queryPushSchedulerListWithOptions(request: $_model.QueryPushSchedulerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushSchedulerListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushSchedulerList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushSchedulerListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushSchedulerListResponse({}));
  }

  /**
   * @param request - QueryPushSchedulerListRequest
   * @returns QueryPushSchedulerListResponse
   */
  async queryPushSchedulerList(request: $_model.QueryPushSchedulerListRequest): Promise<$_model.QueryPushSchedulerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushSchedulerListWithOptions(request, runtime);
  }

  /**
   * @param request - RevokePushMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokePushMessageResponse
   */
  async revokePushMessageWithOptions(request: $_model.RevokePushMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokePushMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.targetId)) {
      body["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokePushMessage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokePushMessageResponse>(await this.callApi(params, req, runtime), new $_model.RevokePushMessageResponse({}));
  }

  /**
   * @param request - RevokePushMessageRequest
   * @returns RevokePushMessageResponse
   */
  async revokePushMessage(request: $_model.RevokePushMessageRequest): Promise<$_model.RevokePushMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokePushMessageWithOptions(request, runtime);
  }

  /**
   * @param request - RevokePushTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokePushTaskResponse
   */
  async revokePushTaskWithOptions(request: $_model.RevokePushTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokePushTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokePushTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokePushTaskResponse>(await this.callApi(params, req, runtime), new $_model.RevokePushTaskResponse({}));
  }

  /**
   * @param request - RevokePushTaskRequest
   * @returns RevokePushTaskResponse
   */
  async revokePushTask(request: $_model.RevokePushTaskRequest): Promise<$_model.RevokePushTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokePushTaskWithOptions(request, runtime);
  }

  /**
   * @param request - RunMsaDiffRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMsaDiffResponse
   */
  async runMsaDiffWithOptions(request: $_model.RunMsaDiffRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunMsaDiffResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMsaDiffRunJsonStr)) {
      body["MpaasMappcenterMsaDiffRunJsonStr"] = request.mpaasMappcenterMsaDiffRunJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMsaDiff",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunMsaDiffResponse>(await this.callApi(params, req, runtime), new $_model.RunMsaDiffResponse({}));
  }

  /**
   * @param request - RunMsaDiffRequest
   * @returns RunMsaDiffResponse
   */
  async runMsaDiff(request: $_model.RunMsaDiffRequest): Promise<$_model.RunMsaDiffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runMsaDiffWithOptions(request, runtime);
  }

  /**
   * @param request - SaveMgsApirestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveMgsApirestResponse
   */
  async saveMgsApirestWithOptions(request: $_model.SaveMgsApirestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveMgsApirestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mpaasMappcenterMgsApirestSaveJsonStr)) {
      body["MpaasMappcenterMgsApirestSaveJsonStr"] = request.mpaasMappcenterMgsApirestSaveJsonStr;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveMgsApirest",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveMgsApirestResponse>(await this.callApi(params, req, runtime), new $_model.SaveMgsApirestResponse({}));
  }

  /**
   * @param request - SaveMgsApirestRequest
   * @returns SaveMgsApirestResponse
   */
  async saveMgsApirest(request: $_model.SaveMgsApirestRequest): Promise<$_model.SaveMgsApirestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveMgsApirestWithOptions(request, runtime);
  }

  /**
   * @param request - StartUserAppAsyncEnhanceInMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartUserAppAsyncEnhanceInMsaResponse
   */
  async startUserAppAsyncEnhanceInMsaWithOptions(request: $_model.StartUserAppAsyncEnhanceInMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartUserAppAsyncEnhanceInMsaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newShieldConfig)) {
      query["NewShieldConfig"] = request.newShieldConfig;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apkProtector)) {
      body["ApkProtector"] = request.apkProtector;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.assetsFileList)) {
      body["AssetsFileList"] = request.assetsFileList;
    }

    if (!$dara.isNull(request.classes)) {
      body["Classes"] = request.classes;
    }

    if (!$dara.isNull(request.dalvikDebugger)) {
      body["DalvikDebugger"] = request.dalvikDebugger;
    }

    if (!$dara.isNull(request.emulatorEnvironment)) {
      body["EmulatorEnvironment"] = request.emulatorEnvironment;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.javaHook)) {
      body["JavaHook"] = request.javaHook;
    }

    if (!$dara.isNull(request.memoryDump)) {
      body["MemoryDump"] = request.memoryDump;
    }

    if (!$dara.isNull(request.nativeDebugger)) {
      body["NativeDebugger"] = request.nativeDebugger;
    }

    if (!$dara.isNull(request.nativeHook)) {
      body["NativeHook"] = request.nativeHook;
    }

    if (!$dara.isNull(request.packageTampered)) {
      body["PackageTampered"] = request.packageTampered;
    }

    if (!$dara.isNull(request.root)) {
      body["Root"] = request.root;
    }

    if (!$dara.isNull(request.runMode)) {
      body["RunMode"] = request.runMode;
    }

    if (!$dara.isNull(request.soFileList)) {
      body["SoFileList"] = request.soFileList;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.totalSwitch)) {
      body["TotalSwitch"] = request.totalSwitch;
    }

    if (!$dara.isNull(request.useAShield)) {
      body["UseAShield"] = request.useAShield;
    }

    if (!$dara.isNull(request.useYShield)) {
      body["UseYShield"] = request.useYShield;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartUserAppAsyncEnhanceInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartUserAppAsyncEnhanceInMsaResponse>(await this.callApi(params, req, runtime), new $_model.StartUserAppAsyncEnhanceInMsaResponse({}));
  }

  /**
   * @param request - StartUserAppAsyncEnhanceInMsaRequest
   * @returns StartUserAppAsyncEnhanceInMsaResponse
   */
  async startUserAppAsyncEnhanceInMsa(request: $_model.StartUserAppAsyncEnhanceInMsaRequest): Promise<$_model.StartUserAppAsyncEnhanceInMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startUserAppAsyncEnhanceInMsaWithOptions(request, runtime);
  }

  /**
   * 更新短链
   * 
   * @param request - UpdateLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLinkResponse
   */
  async updateLinkWithOptions(request: $_model.UpdateLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cors)) {
      body["Cors"] = request.cors;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.dynamicfield)) {
      body["Dynamicfield"] = request.dynamicfield;
    }

    if (!$dara.isNull(request.targetUrl)) {
      body["TargetUrl"] = request.targetUrl;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLink",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLinkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLinkResponse({}));
  }

  /**
   * 更新短链
   * 
   * @param request - UpdateLinkRequest
   * @returns UpdateLinkResponse
   */
  async updateLink(request: $_model.UpdateLinkRequest): Promise<$_model.UpdateLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLinkWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMcubeWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMcubeWhitelistResponse
   */
  async updateMcubeWhitelistWithOptions(request: $_model.UpdateMcubeWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcubeWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.keyIds)) {
      body["KeyIds"] = request.keyIds;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMcubeWhitelistResponse({}));
  }

  /**
   * @param request - UpdateMcubeWhitelistRequest
   * @returns UpdateMcubeWhitelistResponse
   */
  async updateMcubeWhitelist(request: $_model.UpdateMcubeWhitelistRequest): Promise<$_model.UpdateMcubeWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMcubeWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMdsCubeResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMdsCubeResourceResponse
   */
  async updateMdsCubeResourceWithOptions(request: $_model.UpdateMdsCubeResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMdsCubeResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.mockDataUrl)) {
      body["MockDataUrl"] = request.mockDataUrl;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.templateResourceId)) {
      body["TemplateResourceId"] = request.templateResourceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMdsCubeResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMdsCubeResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMdsCubeResourceResponse({}));
  }

  /**
   * @param request - UpdateMdsCubeResourceRequest
   * @returns UpdateMdsCubeResourceResponse
   */
  async updateMdsCubeResource(request: $_model.UpdateMdsCubeResourceRequest): Promise<$_model.UpdateMdsCubeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMdsCubeResourceWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMpaasAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMpaasAppInfoResponse
   */
  async updateMpaasAppInfoWithOptions(request: $_model.UpdateMpaasAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMpaasAppInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!$dara.isNull(request.identifier)) {
      body["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMpaasAppInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMpaasAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMpaasAppInfoResponse({}));
  }

  /**
   * @param request - UpdateMpaasAppInfoRequest
   * @returns UpdateMpaasAppInfoResponse
   */
  async updateMpaasAppInfo(request: $_model.UpdateMpaasAppInfoRequest): Promise<$_model.UpdateMpaasAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMpaasAppInfoWithOptions(request, runtime);
  }

  /**
   * 上传字节码到msa进行加固
   * 
   * @param request - UploadBitcodeToMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadBitcodeToMsaResponse
   */
  async uploadBitcodeToMsaWithOptions(request: $_model.UploadBitcodeToMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadBitcodeToMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bitcode)) {
      body["Bitcode"] = request.bitcode;
    }

    if (!$dara.isNull(request.codeVersion)) {
      body["CodeVersion"] = request.codeVersion;
    }

    if (!$dara.isNull(request.license)) {
      body["License"] = request.license;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadBitcodeToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadBitcodeToMsaResponse>(await this.callApi(params, req, runtime), new $_model.UploadBitcodeToMsaResponse({}));
  }

  /**
   * 上传字节码到msa进行加固
   * 
   * @param request - UploadBitcodeToMsaRequest
   * @returns UploadBitcodeToMsaResponse
   */
  async uploadBitcodeToMsa(request: $_model.UploadBitcodeToMsaRequest): Promise<$_model.UploadBitcodeToMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadBitcodeToMsaWithOptions(request, runtime);
  }

  /**
   * @param request - UploadMcubeMiniPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMcubeMiniPackageResponse
   */
  async uploadMcubeMiniPackageWithOptions(request: $_model.UploadMcubeMiniPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMcubeMiniPackageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoInstall)) {
      body["AutoInstall"] = request.autoInstall;
    }

    if (!$dara.isNull(request.clientVersionMax)) {
      body["ClientVersionMax"] = request.clientVersionMax;
    }

    if (!$dara.isNull(request.clientVersionMin)) {
      body["ClientVersionMin"] = request.clientVersionMin;
    }

    if (!$dara.isNull(request.enableKeepAlive)) {
      body["EnableKeepAlive"] = request.enableKeepAlive;
    }

    if (!$dara.isNull(request.enableOptionMenu)) {
      body["EnableOptionMenu"] = request.enableOptionMenu;
    }

    if (!$dara.isNull(request.enableTabBar)) {
      body["EnableTabBar"] = request.enableTabBar;
    }

    if (!$dara.isNull(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!$dara.isNull(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!$dara.isNull(request.h5Version)) {
      body["H5Version"] = request.h5Version;
    }

    if (!$dara.isNull(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!$dara.isNull(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!$dara.isNull(request.installType)) {
      body["InstallType"] = request.installType;
    }

    if (!$dara.isNull(request.mainUrl)) {
      body["MainUrl"] = request.mainUrl;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceFileUrl)) {
      body["ResourceFileUrl"] = request.resourceFileUrl;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMcubeMiniPackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMcubeMiniPackageResponse>(await this.callApi(params, req, runtime), new $_model.UploadMcubeMiniPackageResponse({}));
  }

  /**
   * @param request - UploadMcubeMiniPackageRequest
   * @returns UploadMcubeMiniPackageResponse
   */
  async uploadMcubeMiniPackage(request: $_model.UploadMcubeMiniPackageRequest): Promise<$_model.UploadMcubeMiniPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMcubeMiniPackageWithOptions(request, runtime);
  }

  /**
   * @param request - UploadMcubeRsaKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMcubeRsaKeyResponse
   */
  async uploadMcubeRsaKeyWithOptions(request: $_model.UploadMcubeRsaKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMcubeRsaKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMcubeRsaKey",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMcubeRsaKeyResponse>(await this.callApi(params, req, runtime), new $_model.UploadMcubeRsaKeyResponse({}));
  }

  /**
   * @param request - UploadMcubeRsaKeyRequest
   * @returns UploadMcubeRsaKeyResponse
   */
  async uploadMcubeRsaKey(request: $_model.UploadMcubeRsaKeyRequest): Promise<$_model.UploadMcubeRsaKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMcubeRsaKeyWithOptions(request, runtime);
  }

  /**
   * @param request - UploadUserAppToMsaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadUserAppToMsaResponse
   */
  async uploadUserAppToMsaWithOptions(request: $_model.UploadUserAppToMsaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadUserAppToMsaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.useYShield)) {
      body["UseYShield"] = request.useYShield;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadUserAppToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadUserAppToMsaResponse>(await this.callApi(params, req, runtime), new $_model.UploadUserAppToMsaResponse({}));
  }

  /**
   * @param request - UploadUserAppToMsaRequest
   * @returns UploadUserAppToMsaResponse
   */
  async uploadUserAppToMsa(request: $_model.UploadUserAppToMsaRequest): Promise<$_model.UploadUserAppToMsaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadUserAppToMsaWithOptions(request, runtime);
  }

}

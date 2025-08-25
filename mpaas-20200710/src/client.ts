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
   * 取消定时任务
   * 
   * @param request - CancelMpsSchedulerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelMpsSchedulerResponse
   */
  async cancelMpsSchedulerWithOptions(request: $_model.CancelMpsSchedulerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelMpsSchedulerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
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
      action: "CancelMpsScheduler",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelMpsSchedulerResponse>(await this.callApi(params, req, runtime), new $_model.CancelMpsSchedulerResponse({}));
  }

  /**
   * 取消定时任务
   * 
   * @param request - CancelMpsSchedulerRequest
   * @returns CancelMpsSchedulerResponse
   */
  async cancelMpsScheduler(request: $_model.CancelMpsSchedulerRequest): Promise<$_model.CancelMpsSchedulerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelMpsSchedulerWithOptions(request, runtime);
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
   * 查询定时任务列表
   * 
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
      version: "2020-07-10",
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
   * 查询定时任务列表
   * 
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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
      version: "2020-07-10",
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

}

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
      'ap-northeast-1': "neuron.aliyuncs.com",
      'ap-northeast-2-pop': "neuron.aliyuncs.com",
      'ap-south-1': "neuron.aliyuncs.com",
      'ap-southeast-1': "neuron.aliyuncs.com",
      'ap-southeast-2': "neuron.aliyuncs.com",
      'ap-southeast-3': "neuron.aliyuncs.com",
      'ap-southeast-5': "neuron.aliyuncs.com",
      'cn-beijing': "neuron.aliyuncs.com",
      'cn-beijing-finance-1': "neuron.aliyuncs.com",
      'cn-beijing-finance-pop': "neuron.aliyuncs.com",
      'cn-beijing-gov-1': "neuron.aliyuncs.com",
      'cn-beijing-nu16-b01': "neuron.aliyuncs.com",
      'cn-chengdu': "neuron.aliyuncs.com",
      'cn-edge-1': "neuron.aliyuncs.com",
      'cn-fujian': "neuron.aliyuncs.com",
      'cn-haidian-cm12-c01': "neuron.aliyuncs.com",
      'cn-hangzhou-bj-b01': "neuron.aliyuncs.com",
      'cn-hangzhou-finance': "neuron.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "neuron.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "neuron.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "neuron.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "neuron.aliyuncs.com",
      'cn-hangzhou-test-306': "neuron.aliyuncs.com",
      'cn-hongkong': "neuron.aliyuncs.com",
      'cn-hongkong-finance-pop': "neuron.aliyuncs.com",
      'cn-huhehaote': "neuron.aliyuncs.com",
      'cn-huhehaote-nebula-1': "neuron.aliyuncs.com",
      'cn-north-2-gov-1': "neuron.aliyuncs.com",
      'cn-qingdao': "neuron.aliyuncs.com",
      'cn-qingdao-nebula': "neuron.aliyuncs.com",
      'cn-shanghai': "neuron.aliyuncs.com",
      'cn-shanghai-et15-b01': "neuron.aliyuncs.com",
      'cn-shanghai-et2-b01': "neuron.aliyuncs.com",
      'cn-shanghai-finance-1': "neuron.aliyuncs.com",
      'cn-shanghai-inner': "neuron.aliyuncs.com",
      'cn-shanghai-internal-test-1': "neuron.aliyuncs.com",
      'cn-shenzhen': "neuron.aliyuncs.com",
      'cn-shenzhen-finance-1': "neuron.aliyuncs.com",
      'cn-shenzhen-inner': "neuron.aliyuncs.com",
      'cn-shenzhen-st4-d01': "neuron.aliyuncs.com",
      'cn-shenzhen-su18-b01': "neuron.aliyuncs.com",
      'cn-wuhan': "neuron.aliyuncs.com",
      'cn-wulanchabu': "neuron.aliyuncs.com",
      'cn-yushanfang': "neuron.aliyuncs.com",
      'cn-zhangbei': "neuron.aliyuncs.com",
      'cn-zhangbei-na61-b01': "neuron.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "neuron.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "neuron.aliyuncs.com",
      'eu-central-1': "neuron.aliyuncs.com",
      'eu-west-1': "neuron.aliyuncs.com",
      'eu-west-1-oxs': "neuron.aliyuncs.com",
      'me-east-1': "neuron.aliyuncs.com",
      'rus-west-1-pop': "neuron.aliyuncs.com",
      'us-east-1': "neuron.aliyuncs.com",
      'us-west-1': "neuron.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("neuron", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 微服务分组加入或退出泳道
   * 
   * @param request - AddOrQuitPdpLaneForServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrQuitPdpLaneForServiceGroupResponse
   */
  async addOrQuitPdpLaneForServiceGroupWithOptions(request: $_model.AddOrQuitPdpLaneForServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrQuitPdpLaneForServiceGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrQuitPdpLaneForServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/commands/add-quit-lane`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrQuitPdpLaneForServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddOrQuitPdpLaneForServiceGroupResponse({}));
  }

  /**
   * 微服务分组加入或退出泳道
   * 
   * @param request - AddOrQuitPdpLaneForServiceGroupRequest
   * @returns AddOrQuitPdpLaneForServiceGroupResponse
   */
  async addOrQuitPdpLaneForServiceGroup(request: $_model.AddOrQuitPdpLaneForServiceGroupRequest): Promise<$_model.AddOrQuitPdpLaneForServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addOrQuitPdpLaneForServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 审批审核记录
   * 
   * @param request - AuditForkReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditForkReviewResponse
   */
  async auditForkReviewWithOptions(reviewId: string, request: $_model.AuditForkReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuditForkReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditForkReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/fork-reviews/${$dara.URL.percentEncode(reviewId)}/commands/audit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuditForkReviewResponse>(await this.callApi(params, req, runtime), new $_model.AuditForkReviewResponse({}));
  }

  /**
   * 审批审核记录
   * 
   * @param request - AuditForkReviewRequest
   * @returns AuditForkReviewResponse
   */
  async auditForkReview(reviewId: string, request: $_model.AuditForkReviewRequest): Promise<$_model.AuditForkReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.auditForkReviewWithOptions(reviewId, request, headers, runtime);
  }

  /**
   * 审批审核记录
   * 
   * @param request - AuditPbcInvokeReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditPbcInvokeReviewResponse
   */
  async auditPbcInvokeReviewWithOptions(reviewId: string, request: $_model.AuditPbcInvokeReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuditPbcInvokeReviewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approve)) {
      body["approve"] = request.approve;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditPbcInvokeReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invoke-reviews/${$dara.URL.percentEncode(reviewId)}/commands/audit`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuditPbcInvokeReviewResponse>(await this.callApi(params, req, runtime), new $_model.AuditPbcInvokeReviewResponse({}));
  }

  /**
   * 审批审核记录
   * 
   * @param request - AuditPbcInvokeReviewRequest
   * @returns AuditPbcInvokeReviewResponse
   */
  async auditPbcInvokeReview(reviewId: string, request: $_model.AuditPbcInvokeReviewRequest): Promise<$_model.AuditPbcInvokeReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.auditPbcInvokeReviewWithOptions(reviewId, request, headers, runtime);
  }

  /**
   * 公司授权产品
   * 
   * @param request - AuthorizeProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeProductsResponse
   */
  async authorizeProductsWithOptions(request: $_model.AuthorizeProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeProductsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeProducts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products/commands/authorize`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeProductsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeProductsResponse({}));
  }

  /**
   * 公司授权产品
   * 
   * @param request - AuthorizeProductsRequest
   * @returns AuthorizeProductsResponse
   */
  async authorizeProducts(request: $_model.AuthorizeProductsRequest): Promise<$_model.AuthorizeProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeProductsWithOptions(request, headers, runtime);
  }

  /**
   * 批量给开发者授权
   * 
   * @param request - BatchGrantRolesToDeveloperRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGrantRolesToDeveloperResponse
   */
  async batchGrantRolesToDeveloperWithOptions(request: $_model.BatchGrantRolesToDeveloperRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGrantRolesToDeveloperResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGrantRolesToDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/commands/batch-grant-roles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.BatchGrantRolesToDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.BatchGrantRolesToDeveloperResponse({}));
  }

  /**
   * 批量给开发者授权
   * 
   * @param request - BatchGrantRolesToDeveloperRequest
   * @returns BatchGrantRolesToDeveloperResponse
   */
  async batchGrantRolesToDeveloper(request: $_model.BatchGrantRolesToDeveloperRequest): Promise<$_model.BatchGrantRolesToDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGrantRolesToDeveloperWithOptions(request, headers, runtime);
  }

  /**
   * 校验用户角色
   * 
   * @param request - CheckDeveloperRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDeveloperRoleResponse
   */
  async checkDeveloperRoleWithOptions(request: $_model.CheckDeveloperRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDeveloperRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.companyId)) {
      body["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!$dara.isNull(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDeveloperRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/commands/check-role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDeveloperRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckDeveloperRoleResponse({}));
  }

  /**
   * 校验用户角色
   * 
   * @param request - CheckDeveloperRoleRequest
   * @returns CheckDeveloperRoleResponse
   */
  async checkDeveloperRole(request: $_model.CheckDeveloperRoleRequest): Promise<$_model.CheckDeveloperRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkDeveloperRoleWithOptions(request, headers, runtime);
  }

  /**
   * 完成二方包注册
   * 
   * @param request - CompleteRegisterLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteRegisterLibraryResponse
   */
  async completeRegisterLibraryWithOptions(id: string, request: $_model.CompleteRegisterLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteRegisterLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dependIntegral)) {
      body["dependIntegral"] = request.dependIntegral;
    }

    if (!$dara.isNull(request.marketId)) {
      body["marketId"] = request.marketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteRegisterLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}/commands/complete-register`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteRegisterLibraryResponse>(await this.callApi(params, req, runtime), new $_model.CompleteRegisterLibraryResponse({}));
  }

  /**
   * 完成二方包注册
   * 
   * @param request - CompleteRegisterLibraryRequest
   * @returns CompleteRegisterLibraryResponse
   */
  async completeRegisterLibrary(id: string, request: $_model.CompleteRegisterLibraryRequest): Promise<$_model.CompleteRegisterLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeRegisterLibraryWithOptions(id, request, headers, runtime);
  }

  /**
   * 完成pbc版本注册
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteRegistrationPbcVersionResponse
   */
  async completeRegistrationPbcVersionWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteRegistrationPbcVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteRegistrationPbcVersion",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(id)}/commands/complete-register`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteRegistrationPbcVersionResponse>(await this.callApi(params, req, runtime), new $_model.CompleteRegistrationPbcVersionResponse({}));
  }

  /**
   * 完成pbc版本注册
   * @returns CompleteRegistrationPbcVersionResponse
   */
  async completeRegistrationPbcVersion(id: string): Promise<$_model.CompleteRegistrationPbcVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeRegistrationPbcVersionWithOptions(id, headers, runtime);
  }

  /**
   * 更新服务信息
   * 
   * @param request - ContinueDeploymentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeploymentResponse
   */
  async continueDeploymentWithOptions(request: $_model.ContinueDeploymentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueDeploymentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueDeployment",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments/commands/continue`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinueDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.ContinueDeploymentResponse({}));
  }

  /**
   * 更新服务信息
   * 
   * @param request - ContinueDeploymentRequest
   * @returns ContinueDeploymentResponse
   */
  async continueDeployment(request: $_model.ContinueDeploymentRequest): Promise<$_model.ContinueDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.continueDeploymentWithOptions(request, headers, runtime);
  }

  /**
   * 关注资产
   * 
   * @param request - CreateAssetWatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssetWatchResponse
   */
  async createAssetWatchWithOptions(request: $_model.CreateAssetWatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAssetWatchResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAssetWatch",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/asset-watchs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAssetWatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateAssetWatchResponse({}));
  }

  /**
   * 关注资产
   * 
   * @param request - CreateAssetWatchRequest
   * @returns CreateAssetWatchResponse
   */
  async createAssetWatch(request: $_model.CreateAssetWatchRequest): Promise<$_model.CreateAssetWatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAssetWatchWithOptions(request, headers, runtime);
  }

  /**
   * 新增组件
   * 
   * @param request - CreateComponentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComponentResponse
   */
  async createComponentWithOptions(request: $_model.CreateComponentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComponentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComponent",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComponentResponse>(await this.callApi(params, req, runtime), new $_model.CreateComponentResponse({}));
  }

  /**
   * 新增组件
   * 
   * @param request - CreateComponentRequest
   * @returns CreateComponentResponse
   */
  async createComponent(request: $_model.CreateComponentRequest): Promise<$_model.CreateComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComponentWithOptions(request, headers, runtime);
  }

  /**
   * 新增组件模板
   * 
   * @param request - CreateComponentTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComponentTemplateResponse
   */
  async createComponentTemplateWithOptions(request: $_model.CreateComponentTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComponentTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComponentTemplate",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/component-templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComponentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateComponentTemplateResponse({}));
  }

  /**
   * 新增组件模板
   * 
   * @param request - CreateComponentTemplateRequest
   * @returns CreateComponentTemplateResponse
   */
  async createComponentTemplate(request: $_model.CreateComponentTemplateRequest): Promise<$_model.CreateComponentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComponentTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 注册开发者
   * 
   * @param request - CreateDeveloperRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeveloperResponse
   */
  async createDeveloperWithOptions(request: $_model.CreateDeveloperRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeveloperResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeveloperResponse({}));
  }

  /**
   * 注册开发者
   * 
   * @param request - CreateDeveloperRequest
   * @returns CreateDeveloperResponse
   */
  async createDeveloper(request: $_model.CreateDeveloperRequest): Promise<$_model.CreateDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeveloperWithOptions(request, headers, runtime);
  }

  /**
   * 创建公司
   * 
   * @param request - CreateEnterpriseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseResponse
   */
  async createEnterpriseWithOptions(request: $_model.CreateEnterpriseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnterpriseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnterpriseResponse({}));
  }

  /**
   * 创建公司
   * 
   * @param request - CreateEnterpriseRequest
   * @returns CreateEnterpriseResponse
   */
  async createEnterprise(request: $_model.CreateEnterpriseRequest): Promise<$_model.CreateEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnterpriseWithOptions(request, headers, runtime);
  }

  /**
   * 申请代码Fork(创建代码Fork的审批流程)
   * 
   * @param request - CreateForkReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateForkReviewResponse
   */
  async createForkReviewWithOptions(request: $_model.CreateForkReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateForkReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateForkReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/fork-reviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateForkReviewResponse>(await this.callApi(params, req, runtime), new $_model.CreateForkReviewResponse({}));
  }

  /**
   * 申请代码Fork(创建代码Fork的审批流程)
   * 
   * @param request - CreateForkReviewRequest
   * @returns CreateForkReviewResponse
   */
  async createForkReview(request: $_model.CreateForkReviewRequest): Promise<$_model.CreateForkReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createForkReviewWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务灰度分组
   * 
   * @param request - CreateGreyPdpServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGreyPdpServiceGroupResponse
   */
  async createGreyPdpServiceGroupWithOptions(request: $_model.CreateGreyPdpServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGreyPdpServiceGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGreyPdpServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups/grey`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGreyPdpServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGreyPdpServiceGroupResponse({}));
  }

  /**
   * 创建服务灰度分组
   * 
   * @param request - CreateGreyPdpServiceGroupRequest
   * @returns CreateGreyPdpServiceGroupResponse
   */
  async createGreyPdpServiceGroup(request: $_model.CreateGreyPdpServiceGroupRequest): Promise<$_model.CreateGreyPdpServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGreyPdpServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建二方包
   * 
   * @param request - CreateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryResponse
   */
  async createLibraryWithOptions(request: $_model.CreateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLibraryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLibraryResponse>(await this.callApi(params, req, runtime), new $_model.CreateLibraryResponse({}));
  }

  /**
   * 创建二方包
   * 
   * @param request - CreateLibraryRequest
   * @returns CreateLibraryResponse
   */
  async createLibrary(request: $_model.CreateLibraryRequest): Promise<$_model.CreateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryWithOptions(request, headers, runtime);
  }

  /**
   * 创建二方包使用说明文档
   * 
   * @param request - CreateLibraryInstructionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryInstructionResponse
   */
  async createLibraryInstructionWithOptions(libraryId: string, request: $_model.CreateLibraryInstructionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLibraryInstructionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      body["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.marketId)) {
      body["marketId"] = request.marketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibraryInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/instructions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLibraryInstructionResponse>(await this.callApi(params, req, runtime), new $_model.CreateLibraryInstructionResponse({}));
  }

  /**
   * 创建二方包使用说明文档
   * 
   * @param request - CreateLibraryInstructionRequest
   * @returns CreateLibraryInstructionResponse
   */
  async createLibraryInstruction(libraryId: string, request: $_model.CreateLibraryInstructionRequest): Promise<$_model.CreateLibraryInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryInstructionWithOptions(libraryId, request, headers, runtime);
  }

  /**
   * 提交审核
   * 
   * @param request - CreateLibraryReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryReviewResponse
   */
  async createLibraryReviewWithOptions(request: $_model.CreateLibraryReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLibraryReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibraryReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/library-reviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLibraryReviewResponse>(await this.callApi(params, req, runtime), new $_model.CreateLibraryReviewResponse({}));
  }

  /**
   * 提交审核
   * 
   * @param request - CreateLibraryReviewRequest
   * @returns CreateLibraryReviewResponse
   */
  async createLibraryReview(request: $_model.CreateLibraryReviewRequest): Promise<$_model.CreateLibraryReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryReviewWithOptions(request, headers, runtime);
  }

  /**
   * 创建二方包规格
   * 
   * @param request - CreateLibrarySchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibrarySchemaResponse
   */
  async createLibrarySchemaWithOptions(request: $_model.CreateLibrarySchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLibrarySchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibrarySchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/schemas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLibrarySchemaResponse>(await this.callApi(params, req, runtime), new $_model.CreateLibrarySchemaResponse({}));
  }

  /**
   * 创建二方包规格
   * 
   * @param request - CreateLibrarySchemaRequest
   * @returns CreateLibrarySchemaResponse
   */
  async createLibrarySchema(request: $_model.CreateLibrarySchemaRequest): Promise<$_model.CreateLibrarySchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibrarySchemaWithOptions(request, headers, runtime);
  }

  /**
   * 创建应用报警任务
   * 
   * @param request - CreateMonitorArmsAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorArmsAlertResponse
   */
  async createMonitorArmsAlertWithOptions(request: $_model.CreateMonitorArmsAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorArmsAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorArmsAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorArmsAlert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorArmsAlertResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorArmsAlertResponse({}));
  }

  /**
   * 创建应用报警任务
   * 
   * @param request - CreateMonitorArmsAlertRequest
   * @returns CreateMonitorArmsAlertResponse
   */
  async createMonitorArmsAlert(request: $_model.CreateMonitorArmsAlertRequest): Promise<$_model.CreateMonitorArmsAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorArmsAlertWithOptions(request, headers, runtime);
  }

  /**
   * 批量新增应用报警任务
   * 
   * @param request - CreateMonitorArmsAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorArmsAlertsResponse
   */
  async createMonitorArmsAlertsWithOptions(request: $_model.CreateMonitorArmsAlertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorArmsAlertsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorArmsAlerts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorArmsAlerts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorArmsAlertsResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorArmsAlertsResponse({}));
  }

  /**
   * 批量新增应用报警任务
   * 
   * @param request - CreateMonitorArmsAlertsRequest
   * @returns CreateMonitorArmsAlertsResponse
   */
  async createMonitorArmsAlerts(request: $_model.CreateMonitorArmsAlertsRequest): Promise<$_model.CreateMonitorArmsAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorArmsAlertsWithOptions(request, headers, runtime);
  }

  /**
   * 创建联系人
   * 
   * @param request - CreateMonitorContactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorContactResponse
   */
  async createMonitorContactWithOptions(request: $_model.CreateMonitorContactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorContactResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorContact",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorContactResponse({}));
  }

  /**
   * 创建联系人
   * 
   * @param request - CreateMonitorContactRequest
   * @returns CreateMonitorContactResponse
   */
  async createMonitorContact(request: $_model.CreateMonitorContactRequest): Promise<$_model.CreateMonitorContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorContactWithOptions(request, headers, runtime);
  }

  /**
   * 创建联系人组
   * 
   * @param request - CreateMonitorContactGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorContactGroupResponse
   */
  async createMonitorContactGroupWithOptions(request: $_model.CreateMonitorContactGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorContactGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorContactGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorContactGroupResponse({}));
  }

  /**
   * 创建联系人组
   * 
   * @param request - CreateMonitorContactGroupRequest
   * @returns CreateMonitorContactGroupResponse
   */
  async createMonitorContactGroup(request: $_model.CreateMonitorContactGroupRequest): Promise<$_model.CreateMonitorContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorContactGroupWithOptions(request, headers, runtime);
  }

  /**
   * 加入联系人
   * 
   * @param request - CreateMonitorGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupMemberResponse
   */
  async createMonitorGroupMemberWithOptions(groupId: string, request: $_model.CreateMonitorGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupMemberResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorGroupMember",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group/${$dara.URL.percentEncode(groupId)}/commands/create-member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateMonitorGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupMemberResponse({}));
  }

  /**
   * 加入联系人
   * 
   * @param request - CreateMonitorGroupMemberRequest
   * @returns CreateMonitorGroupMemberResponse
   */
  async createMonitorGroupMember(groupId: string, request: $_model.CreateMonitorGroupMemberRequest): Promise<$_model.CreateMonitorGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 创建MQ报警任务
   * 
   * @param request - CreateMonitorMqAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorMqAlertResponse
   */
  async createMonitorMqAlertWithOptions(request: $_model.CreateMonitorMqAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorMqAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorMqAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorMqAlert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorMqAlertResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorMqAlertResponse({}));
  }

  /**
   * 创建MQ报警任务
   * 
   * @param request - CreateMonitorMqAlertRequest
   * @returns CreateMonitorMqAlertResponse
   */
  async createMonitorMqAlert(request: $_model.CreateMonitorMqAlertRequest): Promise<$_model.CreateMonitorMqAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorMqAlertWithOptions(request, headers, runtime);
  }

  /**
   * 批量新增MQ报警任务
   * 
   * @param request - CreateMonitorMqAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorMqAlertsResponse
   */
  async createMonitorMqAlertsWithOptions(request: $_model.CreateMonitorMqAlertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorMqAlertsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorMqAlerts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorMqAlerts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorMqAlertsResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorMqAlertsResponse({}));
  }

  /**
   * 批量新增MQ报警任务
   * 
   * @param request - CreateMonitorMqAlertsRequest
   * @returns CreateMonitorMqAlertsResponse
   */
  async createMonitorMqAlerts(request: $_model.CreateMonitorMqAlertsRequest): Promise<$_model.CreateMonitorMqAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorMqAlertsWithOptions(request, headers, runtime);
  }

  /**
   * 创建日志报警任务
   * 
   * @param request - CreateMonitorSlsAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorSlsAlertResponse
   */
  async createMonitorSlsAlertWithOptions(request: $_model.CreateMonitorSlsAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorSlsAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorSlsAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorSlsAlert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorSlsAlertResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorSlsAlertResponse({}));
  }

  /**
   * 创建日志报警任务
   * 
   * @param request - CreateMonitorSlsAlertRequest
   * @returns CreateMonitorSlsAlertResponse
   */
  async createMonitorSlsAlert(request: $_model.CreateMonitorSlsAlertRequest): Promise<$_model.CreateMonitorSlsAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorSlsAlertWithOptions(request, headers, runtime);
  }

  /**
   * 批量新增建报警任务
   * 
   * @param request - CreateMonitorSlsAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorSlsAlertsResponse
   */
  async createMonitorSlsAlertsWithOptions(request: $_model.CreateMonitorSlsAlertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorSlsAlertsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorSlsAlerts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/createMonitorSlsAlerts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorSlsAlertsResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorSlsAlertsResponse({}));
  }

  /**
   * 批量新增建报警任务
   * 
   * @param request - CreateMonitorSlsAlertsRequest
   * @returns CreateMonitorSlsAlertsResponse
   */
  async createMonitorSlsAlerts(request: $_model.CreateMonitorSlsAlertsRequest): Promise<$_model.CreateMonitorSlsAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorSlsAlertsWithOptions(request, headers, runtime);
  }

  /**
   * 创建webhook
   * 
   * @param request - CreateMonitorWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorWebhookResponse
   */
  async createMonitorWebhookWithOptions(request: $_model.CreateMonitorWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorWebhookResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorWebhook",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/webhook`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorWebhookResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorWebhookResponse({}));
  }

  /**
   * 创建webhook
   * 
   * @param request - CreateMonitorWebhookRequest
   * @returns CreateMonitorWebhookResponse
   */
  async createMonitorWebhook(request: $_model.CreateMonitorWebhookRequest): Promise<$_model.CreateMonitorWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMonitorWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 创建Group
   * 
   * @param request - CreateMqGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMqGroupResponse
   */
  async createMqGroupWithOptions(request: $_model.CreateMqGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMqGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMqGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMqGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMqGroupResponse({}));
  }

  /**
   * 创建Group
   * 
   * @param request - CreateMqGroupRequest
   * @returns CreateMqGroupResponse
   */
  async createMqGroup(request: $_model.CreateMqGroupRequest): Promise<$_model.CreateMqGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMqGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建Topic
   * 
   * @param request - CreateMqTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMqTopicResponse
   */
  async createMqTopicWithOptions(request: $_model.CreateMqTopicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMqTopicResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMqTopic",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMqTopicResponse>(await this.callApi(params, req, runtime), new $_model.CreateMqTopicResponse({}));
  }

  /**
   * 创建Topic
   * 
   * @param request - CreateMqTopicRequest
   * @returns CreateMqTopicResponse
   */
  async createMqTopic(request: $_model.CreateMqTopicRequest): Promise<$_model.CreateMqTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMqTopicWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC
   * 
   * @param request - CreatePbcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcResponse
   */
  async createPbcWithOptions(request: $_model.CreatePbcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcResponse({}));
  }

  /**
   * 创建PBC
   * 
   * @param request - CreatePbcRequest
   * @returns CreatePbcResponse
   */
  async createPbc(request: $_model.CreatePbcRequest): Promise<$_model.CreatePbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC的Api规格
   * 
   * @param request - CreatePbcApiSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcApiSchemaResponse
   */
  async createPbcApiSchemaWithOptions(request: $_model.CreatePbcApiSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcApiSchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcApiSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/api-schemas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcApiSchemaResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcApiSchemaResponse({}));
  }

  /**
   * 创建PBC的Api规格
   * 
   * @param request - CreatePbcApiSchemaRequest
   * @returns CreatePbcApiSchemaResponse
   */
  async createPbcApiSchema(request: $_model.CreatePbcApiSchemaRequest): Promise<$_model.CreatePbcApiSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcApiSchemaWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC使用说明文档
   * 
   * @param request - CreatePbcInstructionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcInstructionResponse
   */
  async createPbcInstructionWithOptions(request: $_model.CreatePbcInstructionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcInstructionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/instructions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcInstructionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcInstructionResponse({}));
  }

  /**
   * 创建PBC使用说明文档
   * 
   * @param request - CreatePbcInstructionRequest
   * @returns CreatePbcInstructionResponse
   */
  async createPbcInstruction(request: $_model.CreatePbcInstructionRequest): Promise<$_model.CreatePbcInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcInstructionWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务调用记录
   * 
   * @param request - CreatePbcInvokeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcInvokeResponse
   */
  async createPbcInvokeWithOptions(request: $_model.CreatePbcInvokeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcInvokeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcInvoke",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invokes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcInvokeResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcInvokeResponse({}));
  }

  /**
   * 创建服务调用记录
   * 
   * @param request - CreatePbcInvokeRequest
   * @returns CreatePbcInvokeResponse
   */
  async createPbcInvoke(request: $_model.CreatePbcInvokeRequest): Promise<$_model.CreatePbcInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcInvokeWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC服务调用审核
   * 
   * @param request - CreatePbcInvokeReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcInvokeReviewResponse
   */
  async createPbcInvokeReviewWithOptions(request: $_model.CreatePbcInvokeReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcInvokeReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcInvokeReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invoke-reviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcInvokeReviewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcInvokeReviewResponse({}));
  }

  /**
   * 创建PBC服务调用审核
   * 
   * @param request - CreatePbcInvokeReviewRequest
   * @returns CreatePbcInvokeReviewResponse
   */
  async createPbcInvokeReview(request: $_model.CreatePbcInvokeReviewRequest): Promise<$_model.CreatePbcInvokeReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcInvokeReviewWithOptions(request, headers, runtime);
  }

  /**
   * 提交审核
   * 
   * @param request - CreatePbcReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcReviewResponse
   */
  async createPbcReviewWithOptions(request: $_model.CreatePbcReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcReviewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcReviewResponse({}));
  }

  /**
   * 提交审核
   * 
   * @param request - CreatePbcReviewRequest
   * @returns CreatePbcReviewResponse
   */
  async createPbcReview(request: $_model.CreatePbcReviewRequest): Promise<$_model.CreatePbcReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcReviewWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC规格
   * 
   * @param request - CreatePbcSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcSchemaResponse
   */
  async createPbcSchemaWithOptions(request: $_model.CreatePbcSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcSchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/schemas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcSchemaResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcSchemaResponse({}));
  }

  /**
   * 创建PBC规格
   * 
   * @param request - CreatePbcSchemaRequest
   * @returns CreatePbcSchemaResponse
   */
  async createPbcSchema(request: $_model.CreatePbcSchemaRequest): Promise<$_model.CreatePbcSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcSchemaWithOptions(request, headers, runtime);
  }

  /**
   * 创建PBC版本
   * 
   * @param request - CreatePbcVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePbcVersionResponse
   */
  async createPbcVersionWithOptions(request: $_model.CreatePbcVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePbcVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePbcVersion",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePbcVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePbcVersionResponse({}));
  }

  /**
   * 创建PBC版本
   * 
   * @param request - CreatePbcVersionRequest
   * @returns CreatePbcVersionResponse
   */
  async createPbcVersion(request: $_model.CreatePbcVersionRequest): Promise<$_model.CreatePbcVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPbcVersionWithOptions(request, headers, runtime);
  }

  /**
   * 创建配置
   * 
   * @param request - CreatePdpConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdpConfigResponse
   */
  async createPdpConfigWithOptions(request: $_model.CreatePdpConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdpConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdpConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdpConfigResponse({}));
  }

  /**
   * 创建配置
   * 
   * @param request - CreatePdpConfigRequest
   * @returns CreatePdpConfigResponse
   */
  async createPdpConfig(request: $_model.CreatePdpConfigRequest): Promise<$_model.CreatePdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdpConfigWithOptions(request, headers, runtime);
  }

  /**
   * 创建泳道
   * 
   * @param request - CreatePdpLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdpLaneResponse
   */
  async createPdpLaneWithOptions(request: $_model.CreatePdpLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdpLaneResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdpLane",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdpLaneResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdpLaneResponse({}));
  }

  /**
   * 创建泳道
   * 
   * @param request - CreatePdpLaneRequest
   * @returns CreatePdpLaneResponse
   */
  async createPdpLane(request: $_model.CreatePdpLaneRequest): Promise<$_model.CreatePdpLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdpLaneWithOptions(request, headers, runtime);
  }

  /**
   * 创建PdpPbc
   * 
   * @param request - CreatePdpPbcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdpPbcResponse
   */
  async createPdpPbcWithOptions(request: $_model.CreatePdpPbcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdpPbcResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdpPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdpPbcResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdpPbcResponse({}));
  }

  /**
   * 创建PdpPbc
   * 
   * @param request - CreatePdpPbcRequest
   * @returns CreatePdpPbcResponse
   */
  async createPdpPbc(request: $_model.CreatePdpPbcRequest): Promise<$_model.CreatePdpPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdpPbcWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务
   * 
   * @param request - CreatePdpServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdpServiceResponse
   */
  async createPdpServiceWithOptions(request: $_model.CreatePdpServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdpServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdpServiceResponse({}));
  }

  /**
   * 创建服务
   * 
   * @param request - CreatePdpServiceRequest
   * @returns CreatePdpServiceResponse
   */
  async createPdpService(request: $_model.CreatePdpServiceRequest): Promise<$_model.CreatePdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdpServiceWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务分组
   * 
   * @param request - CreatePdpServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdpServiceGroupResponse
   */
  async createPdpServiceGroupWithOptions(request: $_model.CreatePdpServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdpServiceGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdpServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdpServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdpServiceGroupResponse({}));
  }

  /**
   * 创建服务分组
   * 
   * @param request - CreatePdpServiceGroupRequest
   * @returns CreatePdpServiceGroupResponse
   */
  async createPdpServiceGroup(request: $_model.CreatePdpServiceGroupRequest): Promise<$_model.CreatePdpServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdpServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 给角色添加权限
   * 
   * @param request - CreatePrivilegeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivilegeResponse
   */
  async createPrivilegeWithOptions(roleId: string, request: $_model.CreatePrivilegeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivilegeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivilege",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}/privileges`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivilegeResponse({}));
  }

  /**
   * 给角色添加权限
   * 
   * @param request - CreatePrivilegeRequest
   * @returns CreatePrivilegeResponse
   */
  async createPrivilege(roleId: string, request: $_model.CreatePrivilegeRequest): Promise<$_model.CreatePrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrivilegeWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 给角色添加权限
   * 
   * @param request - CreatePrivilegePopRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivilegePopResponse
   */
  async createPrivilegePopWithOptions(roleId: string, request: $_model.CreatePrivilegePopRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivilegePopResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivilegePop",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}/privileges/pop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivilegePopResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivilegePopResponse({}));
  }

  /**
   * 给角色添加权限
   * 
   * @param request - CreatePrivilegePopRequest
   * @returns CreatePrivilegePopResponse
   */
  async createPrivilegePop(roleId: string, request: $_model.CreatePrivilegePopRequest): Promise<$_model.CreatePrivilegePopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrivilegePopWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductWithOptions(request, headers, runtime);
  }

  /**
   * 创建代码库Fork记录
   * 
   * @param request - CreateRepoForkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoForkResponse
   */
  async createRepoForkWithOptions(request: $_model.CreateRepoForkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoForkResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoFork",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/repo-forks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoForkResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoForkResponse({}));
  }

  /**
   * 创建代码库Fork记录
   * 
   * @param request - CreateRepoForkRequest
   * @returns CreateRepoForkResponse
   */
  async createRepoFork(request: $_model.CreateRepoForkRequest): Promise<$_model.CreateRepoForkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoForkWithOptions(request, headers, runtime);
  }

  /**
   * 新增资源
   * 
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: $_model.CreateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * 新增资源
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
  }

  /**
   * 生成角色
   * 
   * @param request - CreateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(request: $_model.CreateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleResponse({}));
  }

  /**
   * 生成角色
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(request, headers, runtime);
  }

  /**
   * 创建入驻申请
   * 
   * @param request - CreateSettledRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSettledResponse
   */
  async createSettledWithOptions(request: $_model.CreateSettledRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSettledResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSettled",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/settleds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSettledResponse>(await this.callApi(params, req, runtime), new $_model.CreateSettledResponse({}));
  }

  /**
   * 创建入驻申请
   * 
   * @param request - CreateSettledRequest
   * @returns CreateSettledResponse
   */
  async createSettled(request: $_model.CreateSettledRequest): Promise<$_model.CreateSettledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSettledWithOptions(request, headers, runtime);
  }

  /**
   * 删除组件
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentResponse
   */
  async deleteComponentWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComponentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponent",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteComponentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComponentResponse({}));
  }

  /**
   * 删除组件
   * @returns DeleteComponentResponse
   */
  async deleteComponent(id: string): Promise<$_model.DeleteComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComponentWithOptions(id, headers, runtime);
  }

  /**
   * 删除组件模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentTemplateResponse
   */
  async deleteComponentTemplateWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComponentTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponentTemplate",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/component-templates/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteComponentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComponentTemplateResponse({}));
  }

  /**
   * 删除组件模板
   * @returns DeleteComponentTemplateResponse
   */
  async deleteComponentTemplate(id: string): Promise<$_model.DeleteComponentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComponentTemplateWithOptions(id, headers, runtime);
  }

  /**
   * 删除开发者
   * 
   * @param request - DeleteDeveloperRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeveloperResponse
   */
  async deleteDeveloperWithOptions(accountId: string, request: $_model.DeleteDeveloperRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeveloperResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers/${$dara.URL.percentEncode(accountId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeveloperResponse({}));
  }

  /**
   * 删除开发者
   * 
   * @param request - DeleteDeveloperRequest
   * @returns DeleteDeveloperResponse
   */
  async deleteDeveloper(accountId: string, request: $_model.DeleteDeveloperRequest): Promise<$_model.DeleteDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeveloperWithOptions(accountId, request, headers, runtime);
  }

  /**
   * 删除公司
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseResponse
   */
  async deleteEnterpriseWithOptions(enterpriseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnterpriseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/${$dara.URL.percentEncode(enterpriseId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnterpriseResponse({}));
  }

  /**
   * 删除公司
   * @returns DeleteEnterpriseResponse
   */
  async deleteEnterprise(enterpriseId: string): Promise<$_model.DeleteEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnterpriseWithOptions(enterpriseId, headers, runtime);
  }

  /**
   * 删除二方包
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibraryResponse
   */
  async deleteLibraryWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLibraryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLibraryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLibraryResponse({}));
  }

  /**
   * 删除二方包
   * @returns DeleteLibraryResponse
   */
  async deleteLibrary(id: string): Promise<$_model.DeleteLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibraryWithOptions(id, headers, runtime);
  }

  /**
   * 删除二方包使用说明文档
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibraryInstructionResponse
   */
  async deleteLibraryInstructionWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLibraryInstructionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLibraryInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/instructions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLibraryInstructionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLibraryInstructionResponse({}));
  }

  /**
   * 删除二方包使用说明文档
   * @returns DeleteLibraryInstructionResponse
   */
  async deleteLibraryInstruction(libraryId: string): Promise<$_model.DeleteLibraryInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibraryInstructionWithOptions(libraryId, headers, runtime);
  }

  /**
   * 删除二方包规格
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibrarySchemaResponse
   */
  async deleteLibrarySchemaWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLibrarySchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLibrarySchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/schemas`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLibrarySchemaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLibrarySchemaResponse({}));
  }

  /**
   * 删除二方包规格
   * @returns DeleteLibrarySchemaResponse
   */
  async deleteLibrarySchema(libraryId: string): Promise<$_model.DeleteLibrarySchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibrarySchemaWithOptions(libraryId, headers, runtime);
  }

  /**
   * 删除报警任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorAlertResponse
   */
  async deleteMonitorAlertWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorAlertResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMonitorAlertResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorAlertResponse({}));
  }

  /**
   * 删除报警任务
   * @returns DeleteMonitorAlertResponse
   */
  async deleteMonitorAlert(id: string): Promise<$_model.DeleteMonitorAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMonitorAlertWithOptions(id, headers, runtime);
  }

  /**
   * 删除联系人
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorContactResponse
   */
  async deleteMonitorContactWithOptions(contactId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorContactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorContact",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact/${$dara.URL.percentEncode(contactId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMonitorContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorContactResponse({}));
  }

  /**
   * 删除联系人
   * @returns DeleteMonitorContactResponse
   */
  async deleteMonitorContact(contactId: string): Promise<$_model.DeleteMonitorContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMonitorContactWithOptions(contactId, headers, runtime);
  }

  /**
   * 删除联系人组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorContactGroupResponse
   */
  async deleteMonitorContactGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorContactGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorContactGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMonitorContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorContactGroupResponse({}));
  }

  /**
   * 删除联系人组
   * @returns DeleteMonitorContactGroupResponse
   */
  async deleteMonitorContactGroup(groupId: string): Promise<$_model.DeleteMonitorContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMonitorContactGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 从联系人组中删除联系人
   * 
   * @param request - DeleteMonitorGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupMemberResponse
   */
  async deleteMonitorGroupMemberWithOptions(groupId: string, request: $_model.DeleteMonitorGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactIds)) {
      query["contactIds"] = request.contactIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroupMember",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group/${$dara.URL.percentEncode(groupId)}/commands/delete-member`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMonitorGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupMemberResponse({}));
  }

  /**
   * 从联系人组中删除联系人
   * 
   * @param request - DeleteMonitorGroupMemberRequest
   * @returns DeleteMonitorGroupMemberResponse
   */
  async deleteMonitorGroupMember(groupId: string, request: $_model.DeleteMonitorGroupMemberRequest): Promise<$_model.DeleteMonitorGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMonitorGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 删除webhook
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorWebhookResponse
   */
  async deleteMonitorWebhookWithOptions(webhookId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorWebhookResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorWebhook",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/webhook/${$dara.URL.percentEncode(webhookId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMonitorWebhookResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorWebhookResponse({}));
  }

  /**
   * 删除webhook
   * @returns DeleteMonitorWebhookResponse
   */
  async deleteMonitorWebhook(webhookId: string): Promise<$_model.DeleteMonitorWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMonitorWebhookWithOptions(webhookId, headers, runtime);
  }

  /**
   * 删除MQ Group
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMqGroupResponse
   */
  async deleteMqGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMqGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMqGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/group/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMqGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMqGroupResponse({}));
  }

  /**
   * 删除MQ Group
   * @returns DeleteMqGroupResponse
   */
  async deleteMqGroup(groupId: string): Promise<$_model.DeleteMqGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMqGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 删除Topic
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMqTopicResponse
   */
  async deleteMqTopicWithOptions(topicId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMqTopicResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMqTopic",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic/${$dara.URL.percentEncode(topicId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMqTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMqTopicResponse({}));
  }

  /**
   * 删除Topic
   * @returns DeleteMqTopicResponse
   */
  async deleteMqTopic(topicId: string): Promise<$_model.DeleteMqTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMqTopicWithOptions(topicId, headers, runtime);
  }

  /**
   * 取消服务调用服务
   * 
   * @param request - DeletePbcInvokeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePbcInvokeResponse
   */
  async deletePbcInvokeWithOptions(request: $_model.DeletePbcInvokeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePbcInvokeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePbcInvoke",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invokes`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePbcInvokeResponse>(await this.callApi(params, req, runtime), new $_model.DeletePbcInvokeResponse({}));
  }

  /**
   * 取消服务调用服务
   * 
   * @param request - DeletePbcInvokeRequest
   * @returns DeletePbcInvokeResponse
   */
  async deletePbcInvoke(request: $_model.DeletePbcInvokeRequest): Promise<$_model.DeletePbcInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePbcInvokeWithOptions(request, headers, runtime);
  }

  /**
   * 删除服务配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpConfigResponse
   */
  async deletePdpConfigWithOptions(configId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs/${$dara.URL.percentEncode(configId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpConfigResponse({}));
  }

  /**
   * 删除服务配置
   * @returns DeletePdpConfigResponse
   */
  async deletePdpConfig(configId: string): Promise<$_model.DeletePdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpConfigWithOptions(configId, headers, runtime);
  }

  /**
   * 删除泳道
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpLaneResponse
   */
  async deletePdpLaneWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpLaneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpLane",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpLaneResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpLaneResponse({}));
  }

  /**
   * 删除泳道
   * @returns DeletePdpLaneResponse
   */
  async deletePdpLane(id: string): Promise<$_model.DeletePdpLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpLaneWithOptions(id, headers, runtime);
  }

  /**
   * 删除指定泳道入口微服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpLaneInletServiceResponse
   */
  async deletePdpLaneInletServiceWithOptions(laneId: string, serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpLaneInletServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpLaneInletService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/${$dara.URL.percentEncode(laneId)}/commands/deleted-inlet-service/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpLaneInletServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpLaneInletServiceResponse({}));
  }

  /**
   * 删除指定泳道入口微服务
   * @returns DeletePdpLaneInletServiceResponse
   */
  async deletePdpLaneInletService(laneId: string, serviceId: string): Promise<$_model.DeletePdpLaneInletServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpLaneInletServiceWithOptions(laneId, serviceId, headers, runtime);
  }

  /**
   * 删除所有泳道中含有指定的微服务组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpLaneServiceGroupResponse
   */
  async deletePdpLaneServiceGroupWithOptions(serviceGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpLaneServiceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpLaneServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/commands/deleted-service-group/${$dara.URL.percentEncode(serviceGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpLaneServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpLaneServiceGroupResponse({}));
  }

  /**
   * 删除所有泳道中含有指定的微服务组
   * @returns DeletePdpLaneServiceGroupResponse
   */
  async deletePdpLaneServiceGroup(serviceGroupId: string): Promise<$_model.DeletePdpLaneServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpLaneServiceGroupWithOptions(serviceGroupId, headers, runtime);
  }

  /**
   * 删除PdpPbc
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpPbcResponse
   */
  async deletePdpPbcWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpPbcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpPbcResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpPbcResponse({}));
  }

  /**
   * 删除PdpPbc
   * @returns DeletePdpPbcResponse
   */
  async deletePdpPbc(id: string): Promise<$_model.DeletePdpPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpPbcWithOptions(id, headers, runtime);
  }

  /**
   * 删除服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpServiceResponse
   */
  async deletePdpServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpServiceResponse({}));
  }

  /**
   * 删除服务
   * @returns DeletePdpServiceResponse
   */
  async deletePdpService(serviceId: string): Promise<$_model.DeletePdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * 删除服务分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePdpServiceGroupResponse
   */
  async deletePdpServiceGroupWithOptions(serviceGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePdpServiceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePdpServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups/${$dara.URL.percentEncode(serviceGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeletePdpServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeletePdpServiceGroupResponse({}));
  }

  /**
   * 删除服务分组
   * @returns DeletePdpServiceGroupResponse
   */
  async deletePdpServiceGroup(serviceGroupId: string): Promise<$_model.DeletePdpServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePdpServiceGroupWithOptions(serviceGroupId, headers, runtime);
  }

  /**
   * 删除权限
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivilegeResponse
   */
  async deletePrivilegeWithOptions(privilegeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivilegeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivilege",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/privileges/${$dara.URL.percentEncode(privilegeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeletePrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivilegeResponse({}));
  }

  /**
   * 删除权限
   * @returns DeletePrivilegeResponse
   */
  async deletePrivilege(privilegeId: string): Promise<$_model.DeletePrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrivilegeWithOptions(privilegeId, headers, runtime);
  }

  /**
   * 查询删除产品
   * 
   * @param request - DeleteProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(id: string, request: $_model.DeleteProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductResponse({}));
  }

  /**
   * 查询删除产品
   * 
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(id: string, request: $_model.DeleteProductRequest): Promise<$_model.DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductWithOptions(id, request, headers, runtime);
  }

  /**
   * 删除指定资源
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceResponse({}));
  }

  /**
   * 删除指定资源
   * @returns DeleteResourceResponse
   */
  async deleteResource(id: string): Promise<$_model.DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(id, headers, runtime);
  }

  /**
   * 删除角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(roleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleResponse({}));
  }

  /**
   * 删除角色
   * @returns DeleteRoleResponse
   */
  async deleteRole(roleId: string): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(roleId, headers, runtime);
  }

  /**
   * 删除入驻申请记录
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSettledResponse
   */
  async deleteSettledWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSettledResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSettled",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/settleds/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSettledResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSettledResponse({}));
  }

  /**
   * 删除入驻申请记录
   * @returns DeleteSettledResponse
   */
  async deleteSettled(id: string): Promise<$_model.DeleteSettledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSettledWithOptions(id, headers, runtime);
  }

  /**
   * 依赖二方包
   * 
   * @param request - DependLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DependLibraryResponse
   */
  async dependLibraryWithOptions(id: string, request: $_model.DependLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DependLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DependLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}/commands/dependency`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DependLibraryResponse>(await this.callApi(params, req, runtime), new $_model.DependLibraryResponse({}));
  }

  /**
   * 依赖二方包
   * 
   * @param request - DependLibraryRequest
   * @returns DependLibraryResponse
   */
  async dependLibrary(id: string, request: $_model.DependLibraryRequest): Promise<$_model.DependLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dependLibraryWithOptions(id, request, headers, runtime);
  }

  /**
   * 审批审核
   * 
   * @param request - FeedbackLibraryReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackLibraryReviewResponse
   */
  async feedbackLibraryReviewWithOptions(reviewId: string, request: $_model.FeedbackLibraryReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FeedbackLibraryReviewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approve)) {
      body["approve"] = request.approve;
    }

    if (!$dara.isNull(request.feedback)) {
      body["feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.reviewId)) {
      body["reviewId"] = request.reviewId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FeedbackLibraryReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/library-reviews/${$dara.URL.percentEncode(reviewId)}/commands/feedback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FeedbackLibraryReviewResponse>(await this.callApi(params, req, runtime), new $_model.FeedbackLibraryReviewResponse({}));
  }

  /**
   * 审批审核
   * 
   * @param request - FeedbackLibraryReviewRequest
   * @returns FeedbackLibraryReviewResponse
   */
  async feedbackLibraryReview(reviewId: string, request: $_model.FeedbackLibraryReviewRequest): Promise<$_model.FeedbackLibraryReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.feedbackLibraryReviewWithOptions(reviewId, request, headers, runtime);
  }

  /**
   * 提交审核
   * 
   * @param request - FeedbackPbcReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackPbcReviewResponse
   */
  async feedbackPbcReviewWithOptions(reviewId: string, request: $_model.FeedbackPbcReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FeedbackPbcReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FeedbackPbcReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews/${$dara.URL.percentEncode(reviewId)}/commands/feedback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FeedbackPbcReviewResponse>(await this.callApi(params, req, runtime), new $_model.FeedbackPbcReviewResponse({}));
  }

  /**
   * 提交审核
   * 
   * @param request - FeedbackPbcReviewRequest
   * @returns FeedbackPbcReviewResponse
   */
  async feedbackPbcReview(reviewId: string, request: $_model.FeedbackPbcReviewRequest): Promise<$_model.FeedbackPbcReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.feedbackPbcReviewWithOptions(reviewId, request, headers, runtime);
  }

  /**
   * 查询Buc公司
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucEnterpriseResponse
   */
  async getBucEnterpriseWithOptions(enterpriseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucEnterpriseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/bucs/enterprises/${$dara.URL.percentEncode(enterpriseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.GetBucEnterpriseResponse({}));
  }

  /**
   * 查询Buc公司
   * @returns GetBucEnterpriseResponse
   */
  async getBucEnterprise(enterpriseId: string): Promise<$_model.GetBucEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucEnterpriseWithOptions(enterpriseId, headers, runtime);
  }

  /**
   * 查询组件
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComponentResponse
   */
  async getComponentWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetComponentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComponent",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComponentResponse>(await this.callApi(params, req, runtime), new $_model.GetComponentResponse({}));
  }

  /**
   * 查询组件
   * @returns GetComponentResponse
   */
  async getComponent(id: string): Promise<$_model.GetComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComponentWithOptions(id, headers, runtime);
  }

  /**
   * 查询组件模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComponentTemplateResponse
   */
  async getComponentTemplateWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetComponentTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComponentTemplate",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/component-templates/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComponentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetComponentTemplateResponse({}));
  }

  /**
   * 查询组件模板
   * @returns GetComponentTemplateResponse
   */
  async getComponentTemplate(id: string): Promise<$_model.GetComponentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComponentTemplateWithOptions(id, headers, runtime);
  }

  /**
   * 查询部署详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(deploymentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployment",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments/instance/${$dara.URL.percentEncode(deploymentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentResponse({}));
  }

  /**
   * 查询部署详情
   * @returns GetDeploymentResponse
   */
  async getDeployment(deploymentId: string): Promise<$_model.GetDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeploymentWithOptions(deploymentId, headers, runtime);
  }

  /**
   * 查询开发者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeveloperResponse
   */
  async getDeveloperWithOptions(accountId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeveloperResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers/${$dara.URL.percentEncode(accountId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.GetDeveloperResponse({}));
  }

  /**
   * 查询开发者
   * @returns GetDeveloperResponse
   */
  async getDeveloper(accountId: string): Promise<$_model.GetDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeveloperWithOptions(accountId, headers, runtime);
  }

  /**
   * 查询开发者所在公司
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeveloperEnterpriseResponse
   */
  async getDeveloperEnterpriseWithOptions(accountId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeveloperEnterpriseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeveloperEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/developers/${$dara.URL.percentEncode(accountId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeveloperEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.GetDeveloperEnterpriseResponse({}));
  }

  /**
   * 查询开发者所在公司
   * @returns GetDeveloperEnterpriseResponse
   */
  async getDeveloperEnterprise(accountId: string): Promise<$_model.GetDeveloperEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeveloperEnterpriseWithOptions(accountId, headers, runtime);
  }

  /**
   * 查询公司
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseResponse
   */
  async getEnterpriseWithOptions(enterpriseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnterpriseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/${$dara.URL.percentEncode(enterpriseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.GetEnterpriseResponse({}));
  }

  /**
   * 查询公司
   * @returns GetEnterpriseResponse
   */
  async getEnterprise(enterpriseId: string): Promise<$_model.GetEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnterpriseWithOptions(enterpriseId, headers, runtime);
  }

  /**
   * 查询开发者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseDeveloperResponse
   */
  async getEnterpriseDeveloperWithOptions(accountId: string, enterpriseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnterpriseDeveloperResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterpriseDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers/${$dara.URL.percentEncode(accountId)}/enterprises/${$dara.URL.percentEncode(enterpriseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnterpriseDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.GetEnterpriseDeveloperResponse({}));
  }

  /**
   * 查询开发者
   * @returns GetEnterpriseDeveloperResponse
   */
  async getEnterpriseDeveloper(accountId: string, enterpriseId: string): Promise<$_model.GetEnterpriseDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnterpriseDeveloperWithOptions(accountId, enterpriseId, headers, runtime);
  }

  /**
   * 获取审核详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetForkReviewResponse
   */
  async getForkReviewWithOptions(reviewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetForkReviewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetForkReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/fork-reviews/${$dara.URL.percentEncode(reviewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetForkReviewResponse>(await this.callApi(params, req, runtime), new $_model.GetForkReviewResponse({}));
  }

  /**
   * 获取审核详情
   * @returns GetForkReviewResponse
   */
  async getForkReview(reviewId: string): Promise<$_model.GetForkReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getForkReviewWithOptions(reviewId, headers, runtime);
  }

  /**
   * 查询历史开发者
   * 
   * @param request - GetHistoryDeveloperRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryDeveloperResponse
   */
  async getHistoryDeveloperWithOptions(accountId: string, request: $_model.GetHistoryDeveloperRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoryDeveloperResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoryDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers/${$dara.URL.percentEncode(accountId)}/commonds/history`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoryDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoryDeveloperResponse({}));
  }

  /**
   * 查询历史开发者
   * 
   * @param request - GetHistoryDeveloperRequest
   * @returns GetHistoryDeveloperResponse
   */
  async getHistoryDeveloper(accountId: string, request: $_model.GetHistoryDeveloperRequest): Promise<$_model.GetHistoryDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistoryDeveloperWithOptions(accountId, request, headers, runtime);
  }

  /**
   * 查询最近一次部署配置
   * 
   * @param request - GetLastDeploymentConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLastDeploymentConfigResponse
   */
  async getLastDeploymentConfigWithOptions(request: $_model.GetLastDeploymentConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLastDeploymentConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLastDeploymentConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments/last-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLastDeploymentConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetLastDeploymentConfigResponse({}));
  }

  /**
   * 查询最近一次部署配置
   * 
   * @param request - GetLastDeploymentConfigRequest
   * @returns GetLastDeploymentConfigResponse
   */
  async getLastDeploymentConfig(request: $_model.GetLastDeploymentConfigRequest): Promise<$_model.GetLastDeploymentConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLastDeploymentConfigWithOptions(request, headers, runtime);
  }

  /**
   * 查询最新版本二方库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryResponse
   */
  async getLibraryWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryResponse({}));
  }

  /**
   * 查询最新版本二方库
   * @returns GetLibraryResponse
   */
  async getLibrary(id: string): Promise<$_model.GetLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryWithOptions(id, headers, runtime);
  }

  /**
   * 获取二方包代码库开发者统计信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryDeveloperRepoMetricsResponse
   */
  async getLibraryDeveloperRepoMetricsWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryDeveloperRepoMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryDeveloperRepoMetrics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/Librarys/${$dara.URL.percentEncode(libraryId)}/code/commands/get-developer-repo-metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryDeveloperRepoMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryDeveloperRepoMetricsResponse({}));
  }

  /**
   * 获取二方包代码库开发者统计信息
   * @returns GetLibraryDeveloperRepoMetricsResponse
   */
  async getLibraryDeveloperRepoMetrics(libraryId: string): Promise<$_model.GetLibraryDeveloperRepoMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryDeveloperRepoMetricsWithOptions(libraryId, headers, runtime);
  }

  /**
   * 查询二方包使用说明文档
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryInstructionResponse
   */
  async getLibraryInstructionWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryInstructionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/instructions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryInstructionResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryInstructionResponse({}));
  }

  /**
   * 查询二方包使用说明文档
   * @returns GetLibraryInstructionResponse
   */
  async getLibraryInstruction(libraryId: string): Promise<$_model.GetLibraryInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryInstructionWithOptions(libraryId, headers, runtime);
  }

  /**
   * 获取二方包的代码库统计信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryRepoMetricsResponse
   */
  async getLibraryRepoMetricsWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryRepoMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryRepoMetrics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/Librarys/${$dara.URL.percentEncode(libraryId)}/code/commands/get-repo-metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryRepoMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryRepoMetricsResponse({}));
  }

  /**
   * 获取二方包的代码库统计信息
   * @returns GetLibraryRepoMetricsResponse
   */
  async getLibraryRepoMetrics(libraryId: string): Promise<$_model.GetLibraryRepoMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryRepoMetricsWithOptions(libraryId, headers, runtime);
  }

  /**
   * 查询审核信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryReviewResponse
   */
  async getLibraryReviewWithOptions(reviewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryReviewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/library-reviews/${$dara.URL.percentEncode(reviewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryReviewResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryReviewResponse({}));
  }

  /**
   * 查询审核信息
   * @returns GetLibraryReviewResponse
   */
  async getLibraryReview(reviewId: string): Promise<$_model.GetLibraryReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryReviewWithOptions(reviewId, headers, runtime);
  }

  /**
   * 查询二方包规格
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibrarySchemaResponse
   */
  async getLibrarySchemaWithOptions(libraryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibrarySchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibrarySchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibrarySchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetLibrarySchemaResponse({}));
  }

  /**
   * 查询二方包规格
   * @returns GetLibrarySchemaResponse
   */
  async getLibrarySchema(libraryId: string): Promise<$_model.GetLibrarySchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibrarySchemaWithOptions(libraryId, headers, runtime);
  }

  /**
   * 获取日志链接
   * 
   * @param request - GetLogUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogUrlResponse
   */
  async getLogUrlWithOptions(request: $_model.GetLogUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogUrl",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/pdp-log/url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetLogUrlResponse({}));
  }

  /**
   * 获取日志链接
   * 
   * @param request - GetLogUrlRequest
   * @returns GetLogUrlResponse
   */
  async getLogUrl(request: $_model.GetLogUrlRequest): Promise<$_model.GetLogUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogUrlWithOptions(request, headers, runtime);
  }

  /**
   * 获取登录的buc用户信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginUserInfoResponse
   */
  async getLoginUserInfoWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginUserInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginUserInfo",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/bucs/logins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetLoginUserInfoResponse({}));
  }

  /**
   * 获取登录的buc用户信息
   * @returns GetLoginUserInfoResponse
   */
  async getLoginUserInfo(): Promise<$_model.GetLoginUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLoginUserInfoWithOptions(headers, runtime);
  }

  /**
   * 查询报警任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorAlertResponse
   */
  async getMonitorAlertWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorAlertResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorAlertResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorAlertResponse({}));
  }

  /**
   * 查询报警任务
   * @returns GetMonitorAlertResponse
   */
  async getMonitorAlert(id: string): Promise<$_model.GetMonitorAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorAlertWithOptions(id, headers, runtime);
  }

  /**
   * 查询报警历史
   * 
   * @param request - GetMonitorAlertHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorAlertHistoryResponse
   */
  async getMonitorAlertHistoryWithOptions(request: $_model.GetMonitorAlertHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorAlertHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertRuleName)) {
      query["alertRuleName"] = request.alertRuleName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorAlertHistory",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/getMonitorAlertHistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorAlertHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorAlertHistoryResponse({}));
  }

  /**
   * 查询报警历史
   * 
   * @param request - GetMonitorAlertHistoryRequest
   * @returns GetMonitorAlertHistoryResponse
   */
  async getMonitorAlertHistory(request: $_model.GetMonitorAlertHistoryRequest): Promise<$_model.GetMonitorAlertHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorAlertHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询联系人
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorContactResponse
   */
  async getMonitorContactWithOptions(contactId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorContactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorContact",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact/${$dara.URL.percentEncode(contactId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorContactResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorContactResponse({}));
  }

  /**
   * 查询联系人
   * @returns GetMonitorContactResponse
   */
  async getMonitorContact(contactId: string): Promise<$_model.GetMonitorContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorContactWithOptions(contactId, headers, runtime);
  }

  /**
   * 查询联系人组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorContactGroupResponse
   */
  async getMonitorContactGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorContactGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorContactGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorContactGroupResponse({}));
  }

  /**
   * 查询联系人组
   * @returns GetMonitorContactGroupResponse
   */
  async getMonitorContactGroup(groupId: string): Promise<$_model.GetMonitorContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorContactGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 查询webhook
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorWebhookResponse
   */
  async getMonitorWebhookWithOptions(webhookId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorWebhookResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorWebhook",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/webhook/${$dara.URL.percentEncode(webhookId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorWebhookResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorWebhookResponse({}));
  }

  /**
   * 查询webhook
   * @returns GetMonitorWebhookResponse
   */
  async getMonitorWebhook(webhookId: string): Promise<$_model.GetMonitorWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorWebhookWithOptions(webhookId, headers, runtime);
  }

  /**
   * 查询最新版本pbc
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcResponse
   */
  async getPbcWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcResponse({}));
  }

  /**
   * 查询最新版本pbc
   * @returns GetPbcResponse
   */
  async getPbc(id: string): Promise<$_model.GetPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcWithOptions(id, headers, runtime);
  }

  /**
   * 查询PBC的api规格
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcApiSchemaResponse
   */
  async getPbcApiSchemaWithOptions(pbcVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcApiSchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcApiSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/api-schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcApiSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcApiSchemaResponse({}));
  }

  /**
   * 查询PBC的api规格
   * @returns GetPbcApiSchemaResponse
   */
  async getPbcApiSchema(pbcVersionId: string): Promise<$_model.GetPbcApiSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcApiSchemaWithOptions(pbcVersionId, headers, runtime);
  }

  /**
   * 获取PBC代码库开发者统计信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcDeveloperRepoMetricsResponse
   */
  async getPbcDeveloperRepoMetricsWithOptions(pbcId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcDeveloperRepoMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcDeveloperRepoMetrics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(pbcId)}/code/commands/get-developer-repo-metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcDeveloperRepoMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcDeveloperRepoMetricsResponse({}));
  }

  /**
   * 获取PBC代码库开发者统计信息
   * @returns GetPbcDeveloperRepoMetricsResponse
   */
  async getPbcDeveloperRepoMetrics(pbcId: string): Promise<$_model.GetPbcDeveloperRepoMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcDeveloperRepoMetricsWithOptions(pbcId, headers, runtime);
  }

  /**
   * 查询PBC使用说明文档
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcInstructionResponse
   */
  async getPbcInstructionWithOptions(pbcVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcInstructionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/instructions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcInstructionResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcInstructionResponse({}));
  }

  /**
   * 查询PBC使用说明文档
   * @returns GetPbcInstructionResponse
   */
  async getPbcInstruction(pbcVersionId: string): Promise<$_model.GetPbcInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcInstructionWithOptions(pbcVersionId, headers, runtime);
  }

  /**
   * 获取审核详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcInvokeReviewResponse
   */
  async getPbcInvokeReviewWithOptions(reviewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcInvokeReviewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcInvokeReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invoke-reviews/${$dara.URL.percentEncode(reviewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcInvokeReviewResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcInvokeReviewResponse({}));
  }

  /**
   * 获取审核详情
   * @returns GetPbcInvokeReviewResponse
   */
  async getPbcInvokeReview(reviewId: string): Promise<$_model.GetPbcInvokeReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcInvokeReviewWithOptions(reviewId, headers, runtime);
  }

  /**
   * 获取PBC的代码库统计信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcRepoMetricsResponse
   */
  async getPbcRepoMetricsWithOptions(pbcId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcRepoMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcRepoMetrics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(pbcId)}/code/commands/get-repo-metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcRepoMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcRepoMetricsResponse({}));
  }

  /**
   * 获取PBC的代码库统计信息
   * @returns GetPbcRepoMetricsResponse
   */
  async getPbcRepoMetrics(pbcId: string): Promise<$_model.GetPbcRepoMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcRepoMetricsWithOptions(pbcId, headers, runtime);
  }

  /**
   * 查询pbc审核信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcReviewResponse
   */
  async getPbcReviewWithOptions(reviewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcReviewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews/${$dara.URL.percentEncode(reviewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcReviewResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcReviewResponse({}));
  }

  /**
   * 查询pbc审核信息
   * @returns GetPbcReviewResponse
   */
  async getPbcReview(reviewId: string): Promise<$_model.GetPbcReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcReviewWithOptions(reviewId, headers, runtime);
  }

  /**
   * 查询PBC规格
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcSchemaResponse
   */
  async getPbcSchemaWithOptions(pbcVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcSchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcSchemaResponse({}));
  }

  /**
   * 查询PBC规格
   * @returns GetPbcSchemaResponse
   */
  async getPbcSchema(pbcVersionId: string): Promise<$_model.GetPbcSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcSchemaWithOptions(pbcVersionId, headers, runtime);
  }

  /**
   * 查询pbc版本信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPbcVersionResponse
   */
  async getPbcVersionWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPbcVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPbcVersion",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPbcVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetPbcVersionResponse({}));
  }

  /**
   * 查询pbc版本信息
   * @returns GetPbcVersionResponse
   */
  async getPbcVersion(id: string): Promise<$_model.GetPbcVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPbcVersionWithOptions(id, headers, runtime);
  }

  /**
   * 获取配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpConfigResponse
   */
  async getPdpConfigWithOptions(configId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs/last/${$dara.URL.percentEncode(configId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpConfigResponse({}));
  }

  /**
   * 获取配置信息
   * @returns GetPdpConfigResponse
   */
  async getPdpConfig(configId: string): Promise<$_model.GetPdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpConfigWithOptions(configId, headers, runtime);
  }

  /**
   * 获取历史配置详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpHistoryConfigResponse
   */
  async getPdpHistoryConfigWithOptions(historyConfigId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpHistoryConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpHistoryConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs/history/${$dara.URL.percentEncode(historyConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpHistoryConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpHistoryConfigResponse({}));
  }

  /**
   * 获取历史配置详情
   * @returns GetPdpHistoryConfigResponse
   */
  async getPdpHistoryConfig(historyConfigId: string): Promise<$_model.GetPdpHistoryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpHistoryConfigWithOptions(historyConfigId, headers, runtime);
  }

  /**
   * 查询泳道详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpLaneResponse
   */
  async getPdpLaneWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpLaneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpLane",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpLaneResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpLaneResponse({}));
  }

  /**
   * 查询泳道详情
   * @returns GetPdpLaneResponse
   */
  async getPdpLane(id: string): Promise<$_model.GetPdpLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpLaneWithOptions(id, headers, runtime);
  }

  /**
   * 查询PdpPbc
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpPbcResponse
   */
  async getPdpPbcWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpPbcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpPbcResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpPbcResponse({}));
  }

  /**
   * 查询PdpPbc
   * @returns GetPdpPbcResponse
   */
  async getPdpPbc(id: string): Promise<$_model.GetPdpPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpPbcWithOptions(id, headers, runtime);
  }

  /**
   * 查询服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpServiceResponse
   */
  async getPdpServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpServiceResponse({}));
  }

  /**
   * 查询服务
   * @returns GetPdpServiceResponse
   */
  async getPdpService(serviceId: string): Promise<$_model.GetPdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * 查询服务分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPdpServiceGroupResponse
   */
  async getPdpServiceGroupWithOptions(serviceGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPdpServiceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPdpServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups/${$dara.URL.percentEncode(serviceGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPdpServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetPdpServiceGroupResponse({}));
  }

  /**
   * 查询服务分组
   * @returns GetPdpServiceGroupResponse
   */
  async getPdpServiceGroup(serviceGroupId: string): Promise<$_model.GetPdpServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPdpServiceGroupWithOptions(serviceGroupId, headers, runtime);
  }

  /**
   * 查询产品
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductResponse
   */
  async getProductWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProduct",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductResponse>(await this.callApi(params, req, runtime), new $_model.GetProductResponse({}));
  }

  /**
   * 查询产品
   * @returns GetProductResponse
   */
  async getProduct(id: string): Promise<$_model.GetProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductWithOptions(id, headers, runtime);
  }

  /**
   * 查询资源
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResource",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceResponse({}));
  }

  /**
   * 查询资源
   * @returns GetResourceResponse
   */
  async getResource(id: string): Promise<$_model.GetResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceWithOptions(id, headers, runtime);
  }

  /**
   * 查询角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(roleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/role-id/${$dara.URL.percentEncode(roleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleResponse({}));
  }

  /**
   * 查询角色
   * @returns GetRoleResponse
   */
  async getRole(roleId: string): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleWithOptions(roleId, headers, runtime);
  }

  /**
   * 获取调用链方法栈
   * 
   * @param request - GetStackDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackDetailResponse
   */
  async getStackDetailWithOptions(traceId: string, request: $_model.GetStackDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.rpcId)) {
      query["rpcId"] = request.rpcId;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackDetail",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/traces/${$dara.URL.percentEncode(traceId)}/commonds/stack`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetStackDetailResponse({}));
  }

  /**
   * 获取调用链方法栈
   * 
   * @param request - GetStackDetailRequest
   * @returns GetStackDetailResponse
   */
  async getStackDetail(traceId: string, request: $_model.GetStackDetailRequest): Promise<$_model.GetStackDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStackDetailWithOptions(traceId, request, headers, runtime);
  }

  /**
   * 获取token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.pbcId)) {
      body["pbcId"] = request.pbcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs/token`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * 获取token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取调用链详情
   * 
   * @param request - GetTraceDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceDetailResponse
   */
  async getTraceDetailWithOptions(traceId: string, request: $_model.GetTraceDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceDetail",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/traces/${$dara.URL.percentEncode(traceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceDetailResponse({}));
  }

  /**
   * 获取调用链详情
   * 
   * @param request - GetTraceDetailRequest
   * @returns GetTraceDetailResponse
   */
  async getTraceDetail(traceId: string, request: $_model.GetTraceDetailRequest): Promise<$_model.GetTraceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceDetailWithOptions(traceId, request, headers, runtime);
  }

  /**
   * 授权
   * 
   * @param request - GrantRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantRoleResponse
   */
  async grantRoleWithOptions(roleId: string, request: $_model.GrantRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}/commands/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.GrantRoleResponse>(await this.callApi(params, req, runtime), new $_model.GrantRoleResponse({}));
  }

  /**
   * 授权
   * 
   * @param request - GrantRoleRequest
   * @returns GrantRoleResponse
   */
  async grantRole(roleId: string, request: $_model.GrantRoleRequest): Promise<$_model.GrantRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 查询可以授权的产品
   * 
   * @param request - ListAuthorizeProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizeProductsResponse
   */
  async listAuthorizeProductsWithOptions(request: $_model.ListAuthorizeProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizeProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizeProducts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products/commands/list-authorize`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizeProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizeProductsResponse({}));
  }

  /**
   * 查询可以授权的产品
   * 
   * @param request - ListAuthorizeProductsRequest
   * @returns ListAuthorizeProductsResponse
   */
  async listAuthorizeProducts(request: $_model.ListAuthorizeProductsRequest): Promise<$_model.ListAuthorizeProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorizeProductsWithOptions(request, headers, runtime);
  }

  /**
   * 查询Buc用户的公司
   * 
   * @param request - ListBucUserEnterpriseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBucUserEnterpriseResponse
   */
  async listBucUserEnterpriseWithOptions(request: $_model.ListBucUserEnterpriseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBucUserEnterpriseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.empId)) {
      query["empId"] = request.empId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBucUserEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/bucs/enterprises`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBucUserEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.ListBucUserEnterpriseResponse({}));
  }

  /**
   * 查询Buc用户的公司
   * 
   * @param request - ListBucUserEnterpriseRequest
   * @returns ListBucUserEnterpriseResponse
   */
  async listBucUserEnterprise(request: $_model.ListBucUserEnterpriseRequest): Promise<$_model.ListBucUserEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBucUserEnterpriseWithOptions(request, headers, runtime);
  }

  /**
   * 查询组件模板列表
   * 
   * @param request - ListComponentTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentTemplatesResponse
   */
  async listComponentTemplatesWithOptions(request: $_model.ListComponentTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponentTemplates",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/component-templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentTemplatesResponse({}));
  }

  /**
   * 查询组件模板列表
   * 
   * @param request - ListComponentTemplatesRequest
   * @returns ListComponentTemplatesResponse
   */
  async listComponentTemplates(request: $_model.ListComponentTemplatesRequest): Promise<$_model.ListComponentTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 查询组件列表
   * 
   * @param request - ListComponentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentsResponse
   */
  async listComponentsWithOptions(request: $_model.ListComponentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponents",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentsResponse({}));
  }

  /**
   * 查询组件列表
   * 
   * @param request - ListComponentsRequest
   * @returns ListComponentsResponse
   */
  async listComponents(request: $_model.ListComponentsRequest): Promise<$_model.ListComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(request, headers, runtime);
  }

  /**
   * 查询我依赖的二方包列表
   * 
   * @param request - ListDependLibrarysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDependLibrarysResponse
   */
  async listDependLibrarysWithOptions(request: $_model.ListDependLibrarysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDependLibrarysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDependLibrarys",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/commands/list-dependency`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDependLibrarysResponse>(await this.callApi(params, req, runtime), new $_model.ListDependLibrarysResponse({}));
  }

  /**
   * 查询我依赖的二方包列表
   * 
   * @param request - ListDependLibrarysRequest
   * @returns ListDependLibrarysResponse
   */
  async listDependLibrarys(request: $_model.ListDependLibrarysRequest): Promise<$_model.ListDependLibrarysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDependLibrarysWithOptions(request, headers, runtime);
  }

  /**
   * 查询部署记录列表
   * 
   * @param tmpReq - ListDeploymentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(tmpReq: $_model.ListDeploymentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeploymentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeStatus)) {
      request.excludeStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeStatus, "excludeStatus", "json");
    }

    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeStatusShrink)) {
      query["excludeStatus"] = request.excludeStatusShrink;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["status"] = request.statusShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeployments",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentsResponse({}));
  }

  /**
   * 查询部署记录列表
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(request: $_model.ListDeploymentsRequest): Promise<$_model.ListDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeploymentsWithOptions(request, headers, runtime);
  }

  /**
   * 查询开发者所在公司列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeveloperEnterprisesResponse
   */
  async listDeveloperEnterprisesWithOptions(accountId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeveloperEnterprisesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeveloperEnterprises",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/developers/${$dara.URL.percentEncode(accountId)}/commands/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeveloperEnterprisesResponse>(await this.callApi(params, req, runtime), new $_model.ListDeveloperEnterprisesResponse({}));
  }

  /**
   * 查询开发者所在公司列表
   * @returns ListDeveloperEnterprisesResponse
   */
  async listDeveloperEnterprises(accountId: string): Promise<$_model.ListDeveloperEnterprisesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeveloperEnterprisesWithOptions(accountId, headers, runtime);
  }

  /**
   * 查询当前开发者拥有权限的pbc列表
   * 
   * @param request - ListDeveloperPbcsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeveloperPbcsResponse
   */
  async listDeveloperPbcsWithOptions(request: $_model.ListDeveloperPbcsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeveloperPbcsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeveloperPbcs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/commands/allow-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeveloperPbcsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeveloperPbcsResponse({}));
  }

  /**
   * 查询当前开发者拥有权限的pbc列表
   * 
   * @param request - ListDeveloperPbcsRequest
   * @returns ListDeveloperPbcsResponse
   */
  async listDeveloperPbcs(request: $_model.ListDeveloperPbcsRequest): Promise<$_model.ListDeveloperPbcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeveloperPbcsWithOptions(request, headers, runtime);
  }

  /**
   * 查询开发者列表
   * 
   * @param tmpReq - ListDevelopersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDevelopersResponse
   */
  async listDevelopersWithOptions(tmpReq: $_model.ListDevelopersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDevelopersResponse> {
    tmpReq.validate();
    let request = new $_model.ListDevelopersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "accountIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["accountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["roleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDevelopers",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDevelopersResponse>(await this.callApi(params, req, runtime), new $_model.ListDevelopersResponse({}));
  }

  /**
   * 查询开发者列表
   * 
   * @param request - ListDevelopersRequest
   * @returns ListDevelopersResponse
   */
  async listDevelopers(request: $_model.ListDevelopersRequest): Promise<$_model.ListDevelopersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDevelopersWithOptions(request, headers, runtime);
  }

  /**
   * 此PBC依赖的PBC列表(下游游PBC)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownstreamPbcResponse
   */
  async listDownstreamPbcWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownstreamPbcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownstreamPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(id)}/commands/list-downstream`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownstreamPbcResponse>(await this.callApi(params, req, runtime), new $_model.ListDownstreamPbcResponse({}));
  }

  /**
   * 此PBC依赖的PBC列表(下游游PBC)
   * @returns ListDownstreamPbcResponse
   */
  async listDownstreamPbc(id: string): Promise<$_model.ListDownstreamPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDownstreamPbcWithOptions(id, headers, runtime);
  }

  /**
   * 查询公司列表
   * 
   * @param request - ListEnterprisesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterprisesResponse
   */
  async listEnterprisesWithOptions(request: $_model.ListEnterprisesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterprisesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterprises",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterprisesResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterprisesResponse({}));
  }

  /**
   * 查询公司列表
   * 
   * @param request - ListEnterprisesRequest
   * @returns ListEnterprisesResponse
   */
  async listEnterprises(request: $_model.ListEnterprisesRequest): Promise<$_model.ListEnterprisesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnterprisesWithOptions(request, headers, runtime);
  }

  /**
   * 产销环境信息列表
   * 
   * @param request - ListEnvInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvInfosResponse
   */
  async listEnvInfosWithOptions(request: $_model.ListEnvInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvInfos",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services/env/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvInfosResponse({}));
  }

  /**
   * 产销环境信息列表
   * 
   * @param request - ListEnvInfosRequest
   * @returns ListEnvInfosResponse
   */
  async listEnvInfos(request: $_model.ListEnvInfosRequest): Promise<$_model.ListEnvInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询审核列表，支持按照审核人、申请人查询
   * 
   * @param request - ListForkReviewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListForkReviewsResponse
   */
  async listForkReviewsWithOptions(request: $_model.ListForkReviewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListForkReviewsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reviewer)) {
      query["reviewer"] = request.reviewer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListForkReviews",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/fork-reviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListForkReviewsResponse>(await this.callApi(params, req, runtime), new $_model.ListForkReviewsResponse({}));
  }

  /**
   * 查询审核列表，支持按照审核人、申请人查询
   * 
   * @param request - ListForkReviewsRequest
   * @returns ListForkReviewsResponse
   */
  async listForkReviews(request: $_model.ListForkReviewsRequest): Promise<$_model.ListForkReviewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listForkReviewsWithOptions(request, headers, runtime);
  }

  /**
   * 查询被授权角色列表
   * 
   * @param request - ListGrantedRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGrantedRolesResponse
   */
  async listGrantedRolesWithOptions(request: $_model.ListGrantedRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGrantedRolesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizerId)) {
      query["authorizerId"] = request.authorizerId;
    }

    if (!$dara.isNull(request.authorizerType)) {
      query["authorizerType"] = request.authorizerType;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGrantedRoles",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/commands/list-granted-roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGrantedRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListGrantedRolesResponse({}));
  }

  /**
   * 查询被授权角色列表
   * 
   * @param request - ListGrantedRolesRequest
   * @returns ListGrantedRolesResponse
   */
  async listGrantedRoles(request: $_model.ListGrantedRolesRequest): Promise<$_model.ListGrantedRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGrantedRolesWithOptions(request, headers, runtime);
  }

  /**
   * 查询订阅当前组件的pbc的列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInvokePbcsResponse
   */
  async listInvokePbcsWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInvokePbcsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInvokePbcs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(id)}/commands/invoke-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInvokePbcsResponse>(await this.callApi(params, req, runtime), new $_model.ListInvokePbcsResponse({}));
  }

  /**
   * 查询订阅当前组件的pbc的列表
   * @returns ListInvokePbcsResponse
   */
  async listInvokePbcs(id: string): Promise<$_model.ListInvokePbcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInvokePbcsWithOptions(id, headers, runtime);
  }

  /**
   * 查询审核信息列表
   * 
   * @param request - ListLibraryReviewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLibraryReviewsResponse
   */
  async listLibraryReviewsWithOptions(request: $_model.ListLibraryReviewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLibraryReviewsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reviewer)) {
      query["reviewer"] = request.reviewer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLibraryReviews",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/library-reviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLibraryReviewsResponse>(await this.callApi(params, req, runtime), new $_model.ListLibraryReviewsResponse({}));
  }

  /**
   * 查询审核信息列表
   * 
   * @param request - ListLibraryReviewsRequest
   * @returns ListLibraryReviewsResponse
   */
  async listLibraryReviews(request: $_model.ListLibraryReviewsRequest): Promise<$_model.ListLibraryReviewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLibraryReviewsWithOptions(request, headers, runtime);
  }

  /**
   * 查询二方包列表
   * 
   * @param request - ListLibrarysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLibrarysResponse
   */
  async listLibrarysWithOptions(request: $_model.ListLibrarysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLibrarysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLibrarys",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLibrarysResponse>(await this.callApi(params, req, runtime), new $_model.ListLibrarysResponse({}));
  }

  /**
   * 查询二方包列表
   * 
   * @param request - ListLibrarysRequest
   * @returns ListLibrarysResponse
   */
  async listLibrarys(request: $_model.ListLibrarysRequest): Promise<$_model.ListLibrarysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLibrarysWithOptions(request, headers, runtime);
  }

  /**
   * 查询市场列表
   * 
   * @param request - ListMarketsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMarketsResponse
   */
  async listMarketsWithOptions(request: $_model.ListMarketsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMarketsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMarkets",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/markets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMarketsResponse>(await this.callApi(params, req, runtime), new $_model.ListMarketsResponse({}));
  }

  /**
   * 查询市场列表
   * 
   * @param request - ListMarketsRequest
   * @returns ListMarketsResponse
   */
  async listMarkets(request: $_model.ListMarketsRequest): Promise<$_model.ListMarketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMarketsWithOptions(request, headers, runtime);
  }

  /**
   * 查询/搜索元数据信息列表
   * 
   * @param request - ListMetadataInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetadataInfosResponse
   */
  async listMetadataInfosWithOptions(request: $_model.ListMetadataInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetadataInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["namespace_id"] = request.namespaceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespace_name"] = request.namespaceName;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orgId)) {
      query["org_id"] = request.orgId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbc_id"] = request.pbcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetadataInfos",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/metadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetadataInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListMetadataInfosResponse({}));
  }

  /**
   * 查询/搜索元数据信息列表
   * 
   * @param request - ListMetadataInfosRequest
   * @returns ListMetadataInfosResponse
   */
  async listMetadataInfos(request: $_model.ListMetadataInfosRequest): Promise<$_model.ListMetadataInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetadataInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询微服务列表
   * 
   * @param request - ListMicroServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMicroServiceResponse
   */
  async listMicroServiceWithOptions(env: string, request: $_model.ListMicroServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMicroServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.serviceIds)) {
      query["serviceIds"] = request.serviceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMicroService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/group/env/${$dara.URL.percentEncode(env)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMicroServiceResponse>(await this.callApi(params, req, runtime), new $_model.ListMicroServiceResponse({}));
  }

  /**
   * 查询微服务列表
   * 
   * @param request - ListMicroServiceRequest
   * @returns ListMicroServiceResponse
   */
  async listMicroService(env: string, request: $_model.ListMicroServiceRequest): Promise<$_model.ListMicroServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMicroServiceWithOptions(env, request, headers, runtime);
  }

  /**
   * 查询联系人组列表
   * 
   * @param request - ListMonitorContactGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorContactGroupsResponse
   */
  async listMonitorContactGroupsWithOptions(request: $_model.ListMonitorContactGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonitorContactGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonitorContactGroups",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonitorContactGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListMonitorContactGroupsResponse({}));
  }

  /**
   * 查询联系人组列表
   * 
   * @param request - ListMonitorContactGroupsRequest
   * @returns ListMonitorContactGroupsResponse
   */
  async listMonitorContactGroups(request: $_model.ListMonitorContactGroupsRequest): Promise<$_model.ListMonitorContactGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorContactGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 查询联系人列表
   * 
   * @param request - ListMonitorContactsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorContactsResponse
   */
  async listMonitorContactsWithOptions(request: $_model.ListMonitorContactsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonitorContactsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonitorContacts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonitorContactsResponse>(await this.callApi(params, req, runtime), new $_model.ListMonitorContactsResponse({}));
  }

  /**
   * 查询联系人列表
   * 
   * @param request - ListMonitorContactsRequest
   * @returns ListMonitorContactsResponse
   */
  async listMonitorContacts(request: $_model.ListMonitorContactsRequest): Promise<$_model.ListMonitorContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorContactsWithOptions(request, headers, runtime);
  }

  /**
   * 查询所有的联系人/联系人组/webhook列表
   * 
   * @param request - ListMonitorNotifyObjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorNotifyObjectsResponse
   */
  async listMonitorNotifyObjectsWithOptions(request: $_model.ListMonitorNotifyObjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonitorNotifyObjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.webhookType)) {
      query["webhookType"] = request.webhookType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonitorNotifyObjects",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/listMonitorNotifyObjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonitorNotifyObjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListMonitorNotifyObjectsResponse({}));
  }

  /**
   * 查询所有的联系人/联系人组/webhook列表
   * 
   * @param request - ListMonitorNotifyObjectsRequest
   * @returns ListMonitorNotifyObjectsResponse
   */
  async listMonitorNotifyObjects(request: $_model.ListMonitorNotifyObjectsRequest): Promise<$_model.ListMonitorNotifyObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorNotifyObjectsWithOptions(request, headers, runtime);
  }

  /**
   * 查询通知报警列表
   * 
   * @param request - ListMonitorTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorTasksResponse
   */
  async listMonitorTasksWithOptions(request: $_model.ListMonitorTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonitorTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertName)) {
      query["alertName"] = request.alertName;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonitorTasks",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/listMonitorTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonitorTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMonitorTasksResponse({}));
  }

  /**
   * 查询通知报警列表
   * 
   * @param request - ListMonitorTasksRequest
   * @returns ListMonitorTasksResponse
   */
  async listMonitorTasks(request: $_model.ListMonitorTasksRequest): Promise<$_model.ListMonitorTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorTasksWithOptions(request, headers, runtime);
  }

  /**
   * 查询webhook列表
   * 
   * @param request - ListMonitorWebhooksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorWebhooksResponse
   */
  async listMonitorWebhooksWithOptions(request: $_model.ListMonitorWebhooksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonitorWebhooksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.webhookType)) {
      query["webhookType"] = request.webhookType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonitorWebhooks",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/webhook`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonitorWebhooksResponse>(await this.callApi(params, req, runtime), new $_model.ListMonitorWebhooksResponse({}));
  }

  /**
   * 查询webhook列表
   * 
   * @param request - ListMonitorWebhooksRequest
   * @returns ListMonitorWebhooksResponse
   */
  async listMonitorWebhooks(request: $_model.ListMonitorWebhooksRequest): Promise<$_model.ListMonitorWebhooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorWebhooksWithOptions(request, headers, runtime);
  }

  /**
   * 查询Group下的死信消息列表
   * 
   * @param request - ListMqGroupMsgsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMqGroupMsgsResponse
   */
  async listMqGroupMsgsWithOptions(groupId: string, request: $_model.ListMqGroupMsgsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMqGroupMsgsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.msgId)) {
      query["msgId"] = request.msgId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMqGroupMsgs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/group/${$dara.URL.percentEncode(groupId)}/commands/msgs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMqGroupMsgsResponse>(await this.callApi(params, req, runtime), new $_model.ListMqGroupMsgsResponse({}));
  }

  /**
   * 查询Group下的死信消息列表
   * 
   * @param request - ListMqGroupMsgsRequest
   * @returns ListMqGroupMsgsResponse
   */
  async listMqGroupMsgs(groupId: string, request: $_model.ListMqGroupMsgsRequest): Promise<$_model.ListMqGroupMsgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMqGroupMsgsWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 查询Topic下的消息列表
   * 
   * @param request - ListMqTopicMsgsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMqTopicMsgsResponse
   */
  async listMqTopicMsgsWithOptions(topicId: string, request: $_model.ListMqTopicMsgsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMqTopicMsgsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.msgId)) {
      query["msgId"] = request.msgId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMqTopicMsgs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic/${$dara.URL.percentEncode(topicId)}/commands/msgs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMqTopicMsgsResponse>(await this.callApi(params, req, runtime), new $_model.ListMqTopicMsgsResponse({}));
  }

  /**
   * 查询Topic下的消息列表
   * 
   * @param request - ListMqTopicMsgsRequest
   * @returns ListMqTopicMsgsResponse
   */
  async listMqTopicMsgs(topicId: string, request: $_model.ListMqTopicMsgsRequest): Promise<$_model.ListMqTopicMsgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMqTopicMsgsWithOptions(topicId, request, headers, runtime);
  }

  /**
   * 查询Topic下的在线订阅列表
   * 
   * @param request - ListMqTopicSubsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMqTopicSubsResponse
   */
  async listMqTopicSubsWithOptions(topicId: string, request: $_model.ListMqTopicSubsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMqTopicSubsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMqTopicSubs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic/${$dara.URL.percentEncode(topicId)}/commands/subs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMqTopicSubsResponse>(await this.callApi(params, req, runtime), new $_model.ListMqTopicSubsResponse({}));
  }

  /**
   * 查询Topic下的在线订阅列表
   * 
   * @param request - ListMqTopicSubsRequest
   * @returns ListMqTopicSubsResponse
   */
  async listMqTopicSubs(topicId: string, request: $_model.ListMqTopicSubsRequest): Promise<$_model.ListMqTopicSubsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMqTopicSubsWithOptions(topicId, request, headers, runtime);
  }

  /**
   * 查询Topic列表
   * 
   * @param request - ListMqTopicsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMqTopicsResponse
   */
  async listMqTopicsWithOptions(env: string, pbcId: string, request: $_model.ListMqTopicsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMqTopicsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMqTopics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic/env/${$dara.URL.percentEncode(env)}/pbcId/${$dara.URL.percentEncode(pbcId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMqTopicsResponse>(await this.callApi(params, req, runtime), new $_model.ListMqTopicsResponse({}));
  }

  /**
   * 查询Topic列表
   * 
   * @param request - ListMqTopicsRequest
   * @returns ListMqTopicsResponse
   */
  async listMqTopics(env: string, pbcId: string, request: $_model.ListMqTopicsRequest): Promise<$_model.ListMqTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMqTopicsWithOptions(env, pbcId, request, headers, runtime);
  }

  /**
   * 查询服务调用审核列表，支持按照审核人、申请人查询
   * 
   * @param request - ListPbcInvokeReviewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcInvokeReviewsResponse
   */
  async listPbcInvokeReviewsWithOptions(request: $_model.ListPbcInvokeReviewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcInvokeReviewsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orderby)) {
      query["orderby"] = request.orderby;
    }

    if (!$dara.isNull(request.reviewer)) {
      query["reviewer"] = request.reviewer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcInvokeReviews",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invoke-reviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcInvokeReviewsResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcInvokeReviewsResponse({}));
  }

  /**
   * 查询服务调用审核列表，支持按照审核人、申请人查询
   * 
   * @param request - ListPbcInvokeReviewsRequest
   * @returns ListPbcInvokeReviewsResponse
   */
  async listPbcInvokeReviews(request: $_model.ListPbcInvokeReviewsRequest): Promise<$_model.ListPbcInvokeReviewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcInvokeReviewsWithOptions(request, headers, runtime);
  }

  /**
   * 查询我调用的pbc列表
   * 
   * @param request - ListPbcInvokesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcInvokesResponse
   */
  async listPbcInvokesWithOptions(request: $_model.ListPbcInvokesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcInvokesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcInvokes",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-invokes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcInvokesResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcInvokesResponse({}));
  }

  /**
   * 查询我调用的pbc列表
   * 
   * @param request - ListPbcInvokesRequest
   * @returns ListPbcInvokesResponse
   */
  async listPbcInvokes(request: $_model.ListPbcInvokesRequest): Promise<$_model.ListPbcInvokesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcInvokesWithOptions(request, headers, runtime);
  }

  /**
   * 查询审核信息列表
   * 
   * @param request - ListPbcReviewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcReviewsResponse
   */
  async listPbcReviewsWithOptions(request: $_model.ListPbcReviewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcReviewsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reviewer)) {
      query["reviewer"] = request.reviewer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcReviews",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcReviewsResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcReviewsResponse({}));
  }

  /**
   * 查询审核信息列表
   * 
   * @param request - ListPbcReviewsRequest
   * @returns ListPbcReviewsResponse
   */
  async listPbcReviews(request: $_model.ListPbcReviewsRequest): Promise<$_model.ListPbcReviewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcReviewsWithOptions(request, headers, runtime);
  }

  /**
   * 查询我订阅的pbc列表
   * 
   * @param request - ListPbcSubscribeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcSubscribeResponse
   */
  async listPbcSubscribeWithOptions(request: $_model.ListPbcSubscribeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcSubscribeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcSubscribe",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/commands/list-subscribe`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcSubscribeResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcSubscribeResponse({}));
  }

  /**
   * 查询我订阅的pbc列表
   * 
   * @param request - ListPbcSubscribeRequest
   * @returns ListPbcSubscribeResponse
   */
  async listPbcSubscribe(request: $_model.ListPbcSubscribeRequest): Promise<$_model.ListPbcSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcSubscribeWithOptions(request, headers, runtime);
  }

  /**
   * 查询我创建的资产
   * 
   * @param request - ListPbcVersionBuildRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcVersionBuildResponse
   */
  async listPbcVersionBuildWithOptions(request: $_model.ListPbcVersionBuildRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcVersionBuildResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcVersionBuild",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/commands/list-build`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcVersionBuildResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcVersionBuildResponse({}));
  }

  /**
   * 查询我创建的资产
   * 
   * @param request - ListPbcVersionBuildRequest
   * @returns ListPbcVersionBuildResponse
   */
  async listPbcVersionBuild(request: $_model.ListPbcVersionBuildRequest): Promise<$_model.ListPbcVersionBuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcVersionBuildWithOptions(request, headers, runtime);
  }

  /**
   * 查询pbc的版本号列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcVersionNumbersResponse
   */
  async listPbcVersionNumbersWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcVersionNumbersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcVersionNumbers",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(id)}/commands/listPbcVersionNumbers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcVersionNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcVersionNumbersResponse({}));
  }

  /**
   * 查询pbc的版本号列表
   * @returns ListPbcVersionNumbersResponse
   */
  async listPbcVersionNumbers(id: string): Promise<$_model.ListPbcVersionNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcVersionNumbersWithOptions(id, headers, runtime);
  }

  /**
   * 查询pbc列表
   * 
   * @param request - ListPbcsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPbcsResponse
   */
  async listPbcsWithOptions(request: $_model.ListPbcsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPbcsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.developerId)) {
      query["developerId"] = request.developerId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPbcs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPbcsResponse>(await this.callApi(params, req, runtime), new $_model.ListPbcsResponse({}));
  }

  /**
   * 查询pbc列表
   * 
   * @param request - ListPbcsRequest
   * @returns ListPbcsResponse
   */
  async listPbcs(request: $_model.ListPbcsRequest): Promise<$_model.ListPbcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPbcsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务配置列表
   * 
   * @param request - ListPdpConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpConfigsResponse
   */
  async listPdpConfigsWithOptions(request: $_model.ListPdpConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpConfigs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpConfigsResponse({}));
  }

  /**
   * 查询服务配置列表
   * 
   * @param request - ListPdpConfigsRequest
   * @returns ListPdpConfigsResponse
   */
  async listPdpConfigs(request: $_model.ListPdpConfigsRequest): Promise<$_model.ListPdpConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务历史配置列表
   * 
   * @param request - ListPdpHistoryConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpHistoryConfigsResponse
   */
  async listPdpHistoryConfigsWithOptions(request: $_model.ListPdpHistoryConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpHistoryConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configId)) {
      query["configId"] = request.configId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpHistoryConfigs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs/history`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpHistoryConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpHistoryConfigsResponse({}));
  }

  /**
   * 查询服务历史配置列表
   * 
   * @param request - ListPdpHistoryConfigsRequest
   * @returns ListPdpHistoryConfigsResponse
   */
  async listPdpHistoryConfigs(request: $_model.ListPdpHistoryConfigsRequest): Promise<$_model.ListPdpHistoryConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpHistoryConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务的镜像
   * 
   * @param request - ListPdpImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpImageResponse
   */
  async listPdpImageWithOptions(request: $_model.ListPdpImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpImageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpImage",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services/instance/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpImageResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpImageResponse({}));
  }

  /**
   * 查询服务的镜像
   * 
   * @param request - ListPdpImageRequest
   * @returns ListPdpImageResponse
   */
  async listPdpImage(request: $_model.ListPdpImageRequest): Promise<$_model.ListPdpImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpImageWithOptions(request, headers, runtime);
  }

  /**
   * 查询泳道列表
   * 
   * @param request - ListPdpLanesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpLanesResponse
   */
  async listPdpLanesWithOptions(request: $_model.ListPdpLanesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpLanesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.inletServiceId)) {
      query["inletServiceId"] = request.inletServiceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpLanes",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpLanesResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpLanesResponse({}));
  }

  /**
   * 查询泳道列表
   * 
   * @param request - ListPdpLanesRequest
   * @returns ListPdpLanesResponse
   */
  async listPdpLanes(request: $_model.ListPdpLanesRequest): Promise<$_model.ListPdpLanesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpLanesWithOptions(request, headers, runtime);
  }

  /**
   * 查询微服务分组可以加入的泳道列表
   * 
   * @param tmpReq - ListPdpLanesForServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpLanesForServiceGroupResponse
   */
  async listPdpLanesForServiceGroupWithOptions(tmpReq: $_model.ListPdpLanesForServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpLanesForServiceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ListPdpLanesForServiceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.laneIds)) {
      request.laneIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.laneIds, "laneIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.laneIdsShrink)) {
      query["laneIds"] = request.laneIdsShrink;
    }

    if (!$dara.isNull(request.operator)) {
      query["operator"] = request.operator;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpLanesForServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/commands/list-service-group-lane`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpLanesForServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpLanesForServiceGroupResponse({}));
  }

  /**
   * 查询微服务分组可以加入的泳道列表
   * 
   * @param request - ListPdpLanesForServiceGroupRequest
   * @returns ListPdpLanesForServiceGroupResponse
   */
  async listPdpLanesForServiceGroup(request: $_model.ListPdpLanesForServiceGroupRequest): Promise<$_model.ListPdpLanesForServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpLanesForServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 查询日志列表
   * 
   * @param request - ListPdpLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpLogsResponse
   */
  async listPdpLogsWithOptions(request: $_model.ListPdpLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpLogs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/pdp-log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpLogsResponse({}));
  }

  /**
   * 查询日志列表
   * 
   * @param request - ListPdpLogsRequest
   * @returns ListPdpLogsResponse
   */
  async listPdpLogs(request: $_model.ListPdpLogsRequest): Promise<$_model.ListPdpLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpLogsWithOptions(request, headers, runtime);
  }

  /**
   * 查询/搜索PdpPbc列表
   * 
   * @param tmpReq - ListPdpPbcsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpPbcsResponse
   */
  async listPdpPbcsWithOptions(tmpReq: $_model.ListPdpPbcsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpPbcsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPdpPbcsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pbcIds)) {
      request.pbcIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pbcIds, "pbcIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.developerId)) {
      query["developerId"] = request.developerId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcIdsShrink)) {
      query["pbcIds"] = request.pbcIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpPbcs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpPbcsResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpPbcsResponse({}));
  }

  /**
   * 查询/搜索PdpPbc列表
   * 
   * @param request - ListPdpPbcsRequest
   * @returns ListPdpPbcsResponse
   */
  async listPdpPbcs(request: $_model.ListPdpPbcsRequest): Promise<$_model.ListPdpPbcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpPbcsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务分组列表
   * 
   * @param tmpReq - ListPdpServiceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpServiceGroupsResponse
   */
  async listPdpServiceGroupsWithOptions(tmpReq: $_model.ListPdpServiceGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpServiceGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPdpServiceGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      query["alias"] = request.alias;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.envType)) {
      query["envType"] = request.envType;
    }

    if (!$dara.isNull(request.groupType)) {
      query["groupType"] = request.groupType;
    }

    if (!$dara.isNull(request.idsShrink)) {
      query["ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orgType)) {
      query["orgType"] = request.orgType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.repoId)) {
      query["repoId"] = request.repoId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpServiceGroups",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpServiceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpServiceGroupsResponse({}));
  }

  /**
   * 查询服务分组列表
   * 
   * @param request - ListPdpServiceGroupsRequest
   * @returns ListPdpServiceGroupsResponse
   */
  async listPdpServiceGroups(request: $_model.ListPdpServiceGroupsRequest): Promise<$_model.ListPdpServiceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpServiceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务列表
   * 
   * @param tmpReq - ListPdpServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPdpServicesResponse
   */
  async listPdpServicesWithOptions(tmpReq: $_model.ListPdpServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPdpServicesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPdpServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pdpServiceIds)) {
      request.pdpServiceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pdpServiceIds, "pdpServiceIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      query["alias"] = request.alias;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.pdpServiceIdsShrink)) {
      query["pdpServiceIds"] = request.pdpServiceIdsShrink;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPdpServices",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPdpServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListPdpServicesResponse({}));
  }

  /**
   * 查询服务列表
   * 
   * @param request - ListPdpServicesRequest
   * @returns ListPdpServicesResponse
   */
  async listPdpServices(request: $_model.ListPdpServicesRequest): Promise<$_model.ListPdpServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPdpServicesWithOptions(request, headers, runtime);
  }

  /**
   * 获取权限列表
   * 
   * @param request - ListPermissionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionResourceResponse
   */
  async listPermissionResourceWithOptions(request: $_model.ListPermissionResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.operatorType)) {
      query["operatorType"] = request.operatorType;
    }

    if (!$dara.isNull(request.resourcePrefix)) {
      query["resourcePrefix"] = request.resourcePrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionResource",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/permissions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionResourceResponse({}));
  }

  /**
   * 获取权限列表
   * 
   * @param request - ListPermissionResourceRequest
   * @returns ListPermissionResourceResponse
   */
  async listPermissionResource(request: $_model.ListPermissionResourceRequest): Promise<$_model.ListPermissionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionResourceWithOptions(request, headers, runtime);
  }

  /**
   * 获取前端资源权限，如按钮、页面
   * 
   * @param request - ListPermissionResourceForFrontRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionResourceForFrontResponse
   */
  async listPermissionResourceForFrontWithOptions(request: $_model.ListPermissionResourceForFrontRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionResourceForFrontResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.operatorType)) {
      query["operatorType"] = request.operatorType;
    }

    if (!$dara.isNull(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourcePrefix)) {
      query["resourcePrefix"] = request.resourcePrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionResourceForFront",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/permissions/command/front-permission`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionResourceForFrontResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionResourceForFrontResponse({}));
  }

  /**
   * 获取前端资源权限，如按钮、页面
   * 
   * @param request - ListPermissionResourceForFrontRequest
   * @returns ListPermissionResourceForFrontResponse
   */
  async listPermissionResourceForFront(request: $_model.ListPermissionResourceForFrontRequest): Promise<$_model.ListPermissionResourceForFrontResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionResourceForFrontWithOptions(request, headers, runtime);
  }

  /**
   * 获取有权限的资源,请求来源POP
   * 
   * @param request - ListPermissionResourcePopRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionResourcePopResponse
   */
  async listPermissionResourcePopWithOptions(request: $_model.ListPermissionResourcePopRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionResourcePopResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    if (!$dara.isNull(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.operatorType)) {
      query["operatorType"] = request.operatorType;
    }

    if (!$dara.isNull(request.resourcePrefix)) {
      query["resourcePrefix"] = request.resourcePrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionResourcePop",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/permissions/pop`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionResourcePopResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionResourcePopResponse({}));
  }

  /**
   * 获取有权限的资源,请求来源POP
   * 
   * @param request - ListPermissionResourcePopRequest
   * @returns ListPermissionResourcePopResponse
   */
  async listPermissionResourcePop(request: $_model.ListPermissionResourcePopRequest): Promise<$_model.ListPermissionResourcePopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionResourcePopWithOptions(request, headers, runtime);
  }

  /**
   * 获取该角色下的权限
   * 
   * @param request - ListPrivilegeByRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivilegeByRoleResponse
   */
  async listPrivilegeByRoleWithOptions(roleId: string, request: $_model.ListPrivilegeByRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivilegeByRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivilegeByRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}/privileges`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivilegeByRoleResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivilegeByRoleResponse({}));
  }

  /**
   * 获取该角色下的权限
   * 
   * @param request - ListPrivilegeByRoleRequest
   * @returns ListPrivilegeByRoleResponse
   */
  async listPrivilegeByRole(roleId: string, request: $_model.ListPrivilegeByRoleRequest): Promise<$_model.ListPrivilegeByRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrivilegeByRoleWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 查询产品环境
   * 
   * @param request - ListProductEnvInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductEnvInfosResponse
   */
  async listProductEnvInfosWithOptions(request: $_model.ListProductEnvInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductEnvInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductEnvInfos",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/commands/list-product-env`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductEnvInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListProductEnvInfosResponse({}));
  }

  /**
   * 查询产品环境
   * 
   * @param request - ListProductEnvInfosRequest
   * @returns ListProductEnvInfosResponse
   */
  async listProductEnvInfos(request: $_model.ListProductEnvInfosRequest): Promise<$_model.ListProductEnvInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductEnvInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询产品环境
   * 
   * @param request - ListProductEnvsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductEnvsResponse
   */
  async listProductEnvsWithOptions(request: $_model.ListProductEnvsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductEnvsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductEnvs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources/commands/list-product-env`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductEnvsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductEnvsResponse({}));
  }

  /**
   * 查询产品环境
   * 
   * @param request - ListProductEnvsRequest
   * @returns ListProductEnvsResponse
   */
  async listProductEnvs(request: $_model.ListProductEnvsRequest): Promise<$_model.ListProductEnvsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductEnvsWithOptions(request, headers, runtime);
  }

  /**
   * 查询/搜索产品列表
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * 查询/搜索产品列表
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  /**
   * 查询资源列表
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * 查询资源列表
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 查询所有审核人信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReviewersResponse
   */
  async listReviewersWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReviewersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReviewers",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews/commands/listReviewers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReviewersResponse>(await this.callApi(params, req, runtime), new $_model.ListReviewersResponse({}));
  }

  /**
   * 查询所有审核人信息
   * @returns ListReviewersResponse
   */
  async listReviewers(): Promise<$_model.ListReviewersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReviewersWithOptions(headers, runtime);
  }

  /**
   * 查询角色列表
   * 
   * @param tmpReq - ListRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(tmpReq: $_model.ListRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    tmpReq.validate();
    let request = new $_model.ListRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleIds)) {
      request.roleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleIds, "roleIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizerId)) {
      query["authorizerId"] = request.authorizerId;
    }

    if (!$dara.isNull(request.authorizerType)) {
      query["authorizerType"] = request.authorizerType;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      query["platform"] = request.platform;
    }

    if (!$dara.isNull(request.roleIdsShrink)) {
      query["roleIds"] = request.roleIdsShrink;
    }

    if (!$dara.isNull(request.roleType)) {
      query["roleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * 查询角色列表
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(request, headers, runtime);
  }

  /**
   * 查询token列表
   * 
   * @param request - ListRuntimeTokensRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRuntimeTokensResponse
   */
  async listRuntimeTokensWithOptions(request: $_model.ListRuntimeTokensRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRuntimeTokensResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["enterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pbcId)) {
      query["pbcId"] = request.pbcId;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRuntimeTokens",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services/env/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRuntimeTokensResponse>(await this.callApi(params, req, runtime), new $_model.ListRuntimeTokensResponse({}));
  }

  /**
   * 查询token列表
   * 
   * @param request - ListRuntimeTokensRequest
   * @returns ListRuntimeTokensResponse
   */
  async listRuntimeTokens(request: $_model.ListRuntimeTokensRequest): Promise<$_model.ListRuntimeTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRuntimeTokensWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务实例列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerInstancesResponse
   */
  async listServerInstancesWithOptions(env: string, serviceGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerInstancesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServerInstances",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/services/${$dara.URL.percentEncode(serviceGroupId)}/env/${$dara.URL.percentEncode(env)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListServerInstancesResponse({}));
  }

  /**
   * 查询服务实例列表
   * @returns ListServerInstancesResponse
   */
  async listServerInstances(env: string, serviceGroupId: string): Promise<$_model.ListServerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServerInstancesWithOptions(env, serviceGroupId, headers, runtime);
  }

  /**
   * 查询多个服务监控指标
   * 
   * @param request - ListServiceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceMetricsResponse
   */
  async listServiceMetricsWithOptions(request: $_model.ListServiceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["intervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.measures)) {
      query["measures"] = request.measures;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.topicId)) {
      query["topicId"] = request.topicId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceMetrics",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceMetricsResponse({}));
  }

  /**
   * 查询多个服务监控指标
   * 
   * @param request - ListServiceMetricsRequest
   * @returns ListServiceMetricsResponse
   */
  async listServiceMetrics(request: $_model.ListServiceMetricsRequest): Promise<$_model.ListServiceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceMetricsWithOptions(request, headers, runtime);
  }

  /**
   * 查询申请记录列表
   * 
   * @param request - ListSettledsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSettledsResponse
   */
  async listSettledsWithOptions(request: $_model.ListSettledsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSettledsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.applicant)) {
      query["applicant"] = request.applicant;
    }

    if (!$dara.isNull(request.enterpriseName)) {
      query["enterpriseName"] = request.enterpriseName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSettleds",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/settleds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSettledsResponse>(await this.callApi(params, req, runtime), new $_model.ListSettledsResponse({}));
  }

  /**
   * 查询申请记录列表
   * 
   * @param request - ListSettledsRequest
   * @returns ListSettledsResponse
   */
  async listSettleds(request: $_model.ListSettledsRequest): Promise<$_model.ListSettledsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSettledsWithOptions(request, headers, runtime);
  }

  /**
   * 查询订阅当前组件的pbc的列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscribePbcsResponse
   */
  async listSubscribePbcsWithOptions(pbcName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubscribePbcsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubscribePbcs",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(pbcName)}/commands/subscribe-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubscribePbcsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubscribePbcsResponse({}));
  }

  /**
   * 查询订阅当前组件的pbc的列表
   * @returns ListSubscribePbcsResponse
   */
  async listSubscribePbcs(pbcName: string): Promise<$_model.ListSubscribePbcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscribePbcsWithOptions(pbcName, headers, runtime);
  }

  /**
   * 依赖此PBC的列表(上游PBC)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpstreamPbcResponse
   */
  async listUpstreamPbcWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUpstreamPbcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpstreamPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-/versions/${$dara.URL.percentEncode(id)}/commands/list-upstream`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUpstreamPbcResponse>(await this.callApi(params, req, runtime), new $_model.ListUpstreamPbcResponse({}));
  }

  /**
   * 依赖此PBC的列表(上游PBC)
   * @returns ListUpstreamPbcResponse
   */
  async listUpstreamPbc(id: string): Promise<$_model.ListUpstreamPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUpstreamPbcWithOptions(id, headers, runtime);
  }

  /**
   * 查询我关注的资产列表
   * 
   * @param request - ListWatchAssetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWatchAssetsResponse
   */
  async listWatchAssetsWithOptions(request: $_model.ListWatchAssetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWatchAssetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.assetType)) {
      query["assetType"] = request.assetType;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.upshelfAssetId)) {
      query["upshelfAssetId"] = request.upshelfAssetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWatchAssets",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/asset-watchs/commands/list-watch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWatchAssetsResponse>(await this.callApi(params, req, runtime), new $_model.ListWatchAssetsResponse({}));
  }

  /**
   * 查询我关注的资产列表
   * 
   * @param request - ListWatchAssetsRequest
   * @returns ListWatchAssetsResponse
   */
  async listWatchAssets(request: $_model.ListWatchAssetsRequest): Promise<$_model.ListWatchAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWatchAssetsWithOptions(request, headers, runtime);
  }

  /**
   * 生成跳转mq控制台链接
   * 
   * @param request - ObtainMqConsoleLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainMqConsoleLinkResponse
   */
  async obtainMqConsoleLinkWithOptions(request: $_model.ObtainMqConsoleLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainMqConsoleLinkResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainMqConsoleLink",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/mq/topic/commonds/obtainMqConsoleLink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainMqConsoleLinkResponse>(await this.callApi(params, req, runtime), new $_model.ObtainMqConsoleLinkResponse({}));
  }

  /**
   * 生成跳转mq控制台链接
   * 
   * @param request - ObtainMqConsoleLinkRequest
   * @returns ObtainMqConsoleLinkResponse
   */
  async obtainMqConsoleLink(request: $_model.ObtainMqConsoleLinkRequest): Promise<$_model.ObtainMqConsoleLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.obtainMqConsoleLinkWithOptions(request, headers, runtime);
  }

  /**
   * 已有微服务开启分组
   * 
   * @param request - OpenServiceGroupForServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenServiceGroupForServiceResponse
   */
  async openServiceGroupForServiceWithOptions(request: $_model.OpenServiceGroupForServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenServiceGroupForServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenServiceGroupForService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/commands/open-group`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenServiceGroupForServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenServiceGroupForServiceResponse({}));
  }

  /**
   * 已有微服务开启分组
   * 
   * @param request - OpenServiceGroupForServiceRequest
   * @returns OpenServiceGroupForServiceResponse
   */
  async openServiceGroupForService(request: $_model.OpenServiceGroupForServiceRequest): Promise<$_model.OpenServiceGroupForServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openServiceGroupForServiceWithOptions(request, headers, runtime);
  }

  /**
   * 预览组件CRD
   * 
   * @param request - PreviewComponentCrdSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewComponentCrdSchemaResponse
   */
  async previewComponentCrdSchemaWithOptions(request: $_model.PreviewComponentCrdSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewComponentCrdSchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewComponentCrdSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components/commonds/preview-component-schema`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewComponentCrdSchemaResponse>(await this.callApi(params, req, runtime), new $_model.PreviewComponentCrdSchemaResponse({}));
  }

  /**
   * 预览组件CRD
   * 
   * @param request - PreviewComponentCrdSchemaRequest
   * @returns PreviewComponentCrdSchemaResponse
   */
  async previewComponentCrdSchema(request: $_model.PreviewComponentCrdSchemaRequest): Promise<$_model.PreviewComponentCrdSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewComponentCrdSchemaWithOptions(request, headers, runtime);
  }

  /**
   * 注册Buc用户
   * 
   * @param request - RegisterBucUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterBucUserResponse
   */
  async registerBucUserWithOptions(request: $_model.RegisterBucUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterBucUserResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterBucUser",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/bucs/logins/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterBucUserResponse>(await this.callApi(params, req, runtime), new $_model.RegisterBucUserResponse({}));
  }

  /**
   * 注册Buc用户
   * 
   * @param request - RegisterBucUserRequest
   * @returns RegisterBucUserResponse
   */
  async registerBucUser(request: $_model.RegisterBucUserRequest): Promise<$_model.RegisterBucUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.registerBucUserWithOptions(request, headers, runtime);
  }

  /**
   * 取消关注资产
   * 
   * @param request - RemoveAssetWatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAssetWatchResponse
   */
  async removeAssetWatchWithOptions(assetId: string, request: $_model.RemoveAssetWatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAssetWatchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetType)) {
      query["assetType"] = request.assetType;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAssetWatch",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/asset-watchs/${$dara.URL.percentEncode(assetId)}/commands/remove-watch`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAssetWatchResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAssetWatchResponse({}));
  }

  /**
   * 取消关注资产
   * 
   * @param request - RemoveAssetWatchRequest
   * @returns RemoveAssetWatchResponse
   */
  async removeAssetWatch(assetId: string, request: $_model.RemoveAssetWatchRequest): Promise<$_model.RemoveAssetWatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAssetWatchWithOptions(assetId, request, headers, runtime);
  }

  /**
   * 取消依赖二方包
   * 
   * @param request - RemoveDependLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDependLibraryResponse
   */
  async removeDependLibraryWithOptions(id: string, request: $_model.RemoveDependLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDependLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDependLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}/commands/remove-dependency`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDependLibraryResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDependLibraryResponse({}));
  }

  /**
   * 取消依赖二方包
   * 
   * @param request - RemoveDependLibraryRequest
   * @returns RemoveDependLibraryResponse
   */
  async removeDependLibrary(id: string, request: $_model.RemoveDependLibraryRequest): Promise<$_model.RemoveDependLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDependLibraryWithOptions(id, request, headers, runtime);
  }

  /**
   * 用指定版本部署
   * 
   * @param request - RevertPdpServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertPdpServiceResponse
   */
  async revertPdpServiceWithOptions(request: $_model.RevertPdpServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevertPdpServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertPdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments/commands/revert`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertPdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.RevertPdpServiceResponse({}));
  }

  /**
   * 用指定版本部署
   * 
   * @param request - RevertPdpServiceRequest
   * @returns RevertPdpServiceResponse
   */
  async revertPdpService(request: $_model.RevertPdpServiceRequest): Promise<$_model.RevertPdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revertPdpServiceWithOptions(request, headers, runtime);
  }

  /**
   * 撤销二方包上架审核
   * 
   * @param request - RevokeLibraryReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeLibraryReviewResponse
   */
  async revokeLibraryReviewWithOptions(request: $_model.RevokeLibraryReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeLibraryReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeLibraryReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/library-reviews/commands/revoke-review`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeLibraryReviewResponse>(await this.callApi(params, req, runtime), new $_model.RevokeLibraryReviewResponse({}));
  }

  /**
   * 撤销二方包上架审核
   * 
   * @param request - RevokeLibraryReviewRequest
   * @returns RevokeLibraryReviewResponse
   */
  async revokeLibraryReview(request: $_model.RevokeLibraryReviewRequest): Promise<$_model.RevokeLibraryReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeLibraryReviewWithOptions(request, headers, runtime);
  }

  /**
   * 撤销Pbc上架审核
   * 
   * @param request - RevokePbcReviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokePbcReviewResponse
   */
  async revokePbcReviewWithOptions(request: $_model.RevokePbcReviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokePbcReviewResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokePbcReview",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-reviews/commands/revoke-review`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokePbcReviewResponse>(await this.callApi(params, req, runtime), new $_model.RevokePbcReviewResponse({}));
  }

  /**
   * 撤销Pbc上架审核
   * 
   * @param request - RevokePbcReviewRequest
   * @returns RevokePbcReviewResponse
   */
  async revokePbcReview(request: $_model.RevokePbcReviewRequest): Promise<$_model.RevokePbcReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokePbcReviewWithOptions(request, headers, runtime);
  }

  /**
   * 取消授权
   * 
   * @param request - RevokeRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeRoleResponse
   */
  async revokeRoleWithOptions(roleId: string, request: $_model.RevokeRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/${$dara.URL.percentEncode(roleId)}/commands/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RevokeRoleResponse>(await this.callApi(params, req, runtime), new $_model.RevokeRoleResponse({}));
  }

  /**
   * 取消授权
   * 
   * @param request - RevokeRoleRequest
   * @returns RevokeRoleResponse
   */
  async revokeRole(roleId: string, request: $_model.RevokeRoleRequest): Promise<$_model.RevokeRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeRoleWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 回滚
   * 
   * @param request - RollbackPdpServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackPdpServiceResponse
   */
  async rollbackPdpServiceWithOptions(request: $_model.RollbackPdpServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackPdpServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackPdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments/commands/rollback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackPdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.RollbackPdpServiceResponse({}));
  }

  /**
   * 回滚
   * 
   * @param request - RollbackPdpServiceRequest
   * @returns RollbackPdpServiceResponse
   */
  async rollbackPdpService(request: $_model.RollbackPdpServiceRequest): Promise<$_model.RollbackPdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackPdpServiceWithOptions(request, headers, runtime);
  }

  /**
   * 查询/搜索资产列表信息
   * 
   * @param tmpReq - SearchAssetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAssetsResponse
   */
  async searchAssetsWithOptions(tmpReq: $_model.SearchAssetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAssetsResponse> {
    tmpReq.validate();
    let request = new $_model.SearchAssetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetIndustrys)) {
      request.assetIndustrysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetIndustrys, "assetIndustrys", "json");
    }

    if (!$dara.isNull(tmpReq.assetTypes)) {
      request.assetTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetTypes, "assetTypes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetIndustrysShrink)) {
      query["assetIndustrys"] = request.assetIndustrysShrink;
    }

    if (!$dara.isNull(request.assetName)) {
      query["assetName"] = request.assetName;
    }

    if (!$dara.isNull(request.assetTypesShrink)) {
      query["assetTypes"] = request.assetTypesShrink;
    }

    if (!$dara.isNull(request.companyId)) {
      query["companyId"] = request.companyId;
    }

    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAssets",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/markets/commands/search-asset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAssetsResponse>(await this.callApi(params, req, runtime), new $_model.SearchAssetsResponse({}));
  }

  /**
   * 查询/搜索资产列表信息
   * 
   * @param request - SearchAssetsRequest
   * @returns SearchAssetsResponse
   */
  async searchAssets(request: $_model.SearchAssetsRequest): Promise<$_model.SearchAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchAssetsWithOptions(request, headers, runtime);
  }

  /**
   * 查询/搜索pbc资产列表信息
   * 
   * @param request - SearchPbcAssetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPbcAssetsResponse
   */
  async searchPbcAssetsWithOptions(request: $_model.SearchPbcAssetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPbcAssetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchPbcAssets",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/markets/commands/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPbcAssetsResponse>(await this.callApi(params, req, runtime), new $_model.SearchPbcAssetsResponse({}));
  }

  /**
   * 查询/搜索pbc资产列表信息
   * 
   * @param request - SearchPbcAssetsRequest
   * @returns SearchPbcAssetsResponse
   */
  async searchPbcAssets(request: $_model.SearchPbcAssetsRequest): Promise<$_model.SearchPbcAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchPbcAssetsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询调用链列表信息
   * 
   * @param request - SearchTracesByPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPageWithOptions(request: $_model.SearchTracesByPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTracesByPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      query["env"] = request.env;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["minDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.operationName)) {
      query["operationName"] = request.operationName;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceGroupId)) {
      query["serviceGroupId"] = request.serviceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTracesByPage",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/traces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTracesByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchTracesByPageResponse({}));
  }

  /**
   * 分页查询调用链列表信息
   * 
   * @param request - SearchTracesByPageRequest
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPage(request: $_model.SearchTracesByPageRequest): Promise<$_model.SearchTracesByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchTracesByPageWithOptions(request, headers, runtime);
  }

  /**
   * ARMS告警联系人发送手机号码验证
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTTSVerifyLinkResponse
   */
  async sendTTSVerifyLinkWithOptions(contactId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendTTSVerifyLinkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTTSVerifyLink",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact/commands/phoneVerify/${$dara.URL.percentEncode(contactId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendTTSVerifyLinkResponse>(await this.callApi(params, req, runtime), new $_model.SendTTSVerifyLinkResponse({}));
  }

  /**
   * ARMS告警联系人发送手机号码验证
   * @returns SendTTSVerifyLinkResponse
   */
  async sendTTSVerifyLink(contactId: string): Promise<$_model.SendTTSVerifyLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendTTSVerifyLinkWithOptions(contactId, headers, runtime);
  }

  /**
   * 订阅pbc
   * 
   * @param request - SubscribePbcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribePbcResponse
   */
  async subscribePbcWithOptions(pbcName: string, request: $_model.SubscribePbcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribePbcResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubscribePbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbcs/${$dara.URL.percentEncode(pbcName)}/commands/subscribe`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscribePbcResponse>(await this.callApi(params, req, runtime), new $_model.SubscribePbcResponse({}));
  }

  /**
   * 订阅pbc
   * 
   * @param request - SubscribePbcRequest
   * @returns SubscribePbcResponse
   */
  async subscribePbc(pbcName: string, request: $_model.SubscribePbcRequest): Promise<$_model.SubscribePbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.subscribePbcWithOptions(pbcName, request, headers, runtime);
  }

  /**
   * 同步组件的模板配置
   * 
   * @param request - SyncComponentTemplateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncComponentTemplateConfigResponse
   */
  async syncComponentTemplateConfigWithOptions(request: $_model.SyncComponentTemplateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncComponentTemplateConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncComponentTemplateConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components/commonds/sync-template-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncComponentTemplateConfigResponse>(await this.callApi(params, req, runtime), new $_model.SyncComponentTemplateConfigResponse({}));
  }

  /**
   * 同步组件的模板配置
   * 
   * @param request - SyncComponentTemplateConfigRequest
   * @returns SyncComponentTemplateConfigResponse
   */
  async syncComponentTemplateConfig(request: $_model.SyncComponentTemplateConfigRequest): Promise<$_model.SyncComponentTemplateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncComponentTemplateConfigWithOptions(request, headers, runtime);
  }

  /**
   * 转移公司
   * 
   * @param request - TransferEnterpriseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferEnterpriseResponse
   */
  async transferEnterpriseWithOptions(enterpriseId: string, request: $_model.TransferEnterpriseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TransferEnterpriseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/${$dara.URL.percentEncode(enterpriseId)}/commands/transfer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.TransferEnterpriseResponse({}));
  }

  /**
   * 转移公司
   * 
   * @param request - TransferEnterpriseRequest
   * @returns TransferEnterpriseResponse
   */
  async transferEnterprise(enterpriseId: string, request: $_model.TransferEnterpriseRequest): Promise<$_model.TransferEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferEnterpriseWithOptions(enterpriseId, request, headers, runtime);
  }

  /**
   * 触发部署
   * 
   * @param request - TriggerDeploymentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerDeploymentResponse
   */
  async triggerDeploymentWithOptions(request: $_model.TriggerDeploymentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerDeploymentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerDeployment",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.TriggerDeploymentResponse({}));
  }

  /**
   * 触发部署
   * 
   * @param request - TriggerDeploymentRequest
   * @returns TriggerDeploymentResponse
   */
  async triggerDeployment(request: $_model.TriggerDeploymentRequest): Promise<$_model.TriggerDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerDeploymentWithOptions(request, headers, runtime);
  }

  /**
   * 上架二方包
   * 
   * @param request - UpShelfLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpShelfLibraryResponse
   */
  async upShelfLibraryWithOptions(id: string, request: $_model.UpShelfLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpShelfLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpShelfLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(id)}/commands/up-shelf-library`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpShelfLibraryResponse>(await this.callApi(params, req, runtime), new $_model.UpShelfLibraryResponse({}));
  }

  /**
   * 上架二方包
   * 
   * @param request - UpShelfLibraryRequest
   * @returns UpShelfLibraryResponse
   */
  async upShelfLibrary(id: string, request: $_model.UpShelfLibraryRequest): Promise<$_model.UpShelfLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upShelfLibraryWithOptions(id, request, headers, runtime);
  }

  /**
   * 上架pbc版本
   * 
   * @param request - UpShelfPbcVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpShelfPbcVersionResponse
   */
  async upShelfPbcVersionWithOptions(id: string, request: $_model.UpShelfPbcVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpShelfPbcVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marketId)) {
      query["marketId"] = request.marketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpShelfPbcVersion",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(id)}/commands/upShelf`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpShelfPbcVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpShelfPbcVersionResponse({}));
  }

  /**
   * 上架pbc版本
   * 
   * @param request - UpShelfPbcVersionRequest
   * @returns UpShelfPbcVersionResponse
   */
  async upShelfPbcVersion(id: string, request: $_model.UpShelfPbcVersionRequest): Promise<$_model.UpShelfPbcVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upShelfPbcVersionWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新组件
   * 
   * @param request - UpdateComponentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComponentResponse
   */
  async updateComponentWithOptions(id: string, request: $_model.UpdateComponentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComponentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComponent",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/components/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComponentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComponentResponse({}));
  }

  /**
   * 更新组件
   * 
   * @param request - UpdateComponentRequest
   * @returns UpdateComponentResponse
   */
  async updateComponent(id: string, request: $_model.UpdateComponentRequest): Promise<$_model.UpdateComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComponentWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新组件模板
   * 
   * @param request - UpdateComponentTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComponentTemplateResponse
   */
  async updateComponentTemplateWithOptions(id: string, request: $_model.UpdateComponentTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComponentTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComponentTemplate",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/component-templates/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComponentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComponentTemplateResponse({}));
  }

  /**
   * 更新组件模板
   * 
   * @param request - UpdateComponentTemplateRequest
   * @returns UpdateComponentTemplateResponse
   */
  async updateComponentTemplate(id: string, request: $_model.UpdateComponentTemplateRequest): Promise<$_model.UpdateComponentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComponentTemplateWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新开发者信息
   * 
   * @param request - UpdateDeveloperRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeveloperResponse
   */
  async updateDeveloperWithOptions(accountId: string, request: $_model.UpdateDeveloperRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeveloperResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeveloper",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/developers/${$dara.URL.percentEncode(accountId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeveloperResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeveloperResponse({}));
  }

  /**
   * 更新开发者信息
   * 
   * @param request - UpdateDeveloperRequest
   * @returns UpdateDeveloperResponse
   */
  async updateDeveloper(accountId: string, request: $_model.UpdateDeveloperRequest): Promise<$_model.UpdateDeveloperResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeveloperWithOptions(accountId, request, headers, runtime);
  }

  /**
   * 更新公司信息
   * 
   * @param request - UpdateEnterpriseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnterpriseResponse
   */
  async updateEnterpriseWithOptions(enterpriseId: string, request: $_model.UpdateEnterpriseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnterpriseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnterprise",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/enterprises/${$dara.URL.percentEncode(enterpriseId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnterpriseResponse({}));
  }

  /**
   * 更新公司信息
   * 
   * @param request - UpdateEnterpriseRequest
   * @returns UpdateEnterpriseResponse
   */
  async updateEnterprise(enterpriseId: string, request: $_model.UpdateEnterpriseRequest): Promise<$_model.UpdateEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnterpriseWithOptions(enterpriseId, request, headers, runtime);
  }

  /**
   * 修改二方包信息
   * 
   * @param request - UpdateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibraryResponse
   */
  async updateLibraryWithOptions(request: $_model.UpdateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLibraryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLibrary",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLibraryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLibraryResponse({}));
  }

  /**
   * 修改二方包信息
   * 
   * @param request - UpdateLibraryRequest
   * @returns UpdateLibraryResponse
   */
  async updateLibrary(request: $_model.UpdateLibraryRequest): Promise<$_model.UpdateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibraryWithOptions(request, headers, runtime);
  }

  /**
   * 更新二方包使用说明文档
   * 
   * @param request - UpdateLibraryInstructionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibraryInstructionResponse
   */
  async updateLibraryInstructionWithOptions(libraryId: string, request: $_model.UpdateLibraryInstructionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLibraryInstructionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLibraryInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/instructions`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLibraryInstructionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLibraryInstructionResponse({}));
  }

  /**
   * 更新二方包使用说明文档
   * 
   * @param request - UpdateLibraryInstructionRequest
   * @returns UpdateLibraryInstructionResponse
   */
  async updateLibraryInstruction(libraryId: string, request: $_model.UpdateLibraryInstructionRequest): Promise<$_model.UpdateLibraryInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibraryInstructionWithOptions(libraryId, request, headers, runtime);
  }

  /**
   * 更新二方包规格
   * 
   * @param request - UpdateLibrarySchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibrarySchemaResponse
   */
  async updateLibrarySchemaWithOptions(libraryId: string, request: $_model.UpdateLibrarySchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLibrarySchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLibrarySchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/librarys/${$dara.URL.percentEncode(libraryId)}/schemas`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLibrarySchemaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLibrarySchemaResponse({}));
  }

  /**
   * 更新二方包规格
   * 
   * @param request - UpdateLibrarySchemaRequest
   * @returns UpdateLibrarySchemaResponse
   */
  async updateLibrarySchema(libraryId: string, request: $_model.UpdateLibrarySchemaRequest): Promise<$_model.UpdateLibrarySchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibrarySchemaWithOptions(libraryId, request, headers, runtime);
  }

  /**
   * 编辑应用报警任务
   * 
   * @param request - UpdateMonitorArmsAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorArmsAlertResponse
   */
  async updateMonitorArmsAlertWithOptions(request: $_model.UpdateMonitorArmsAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorArmsAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorArmsAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/updateMonitorArmsAlert`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorArmsAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorArmsAlertResponse({}));
  }

  /**
   * 编辑应用报警任务
   * 
   * @param request - UpdateMonitorArmsAlertRequest
   * @returns UpdateMonitorArmsAlertResponse
   */
  async updateMonitorArmsAlert(request: $_model.UpdateMonitorArmsAlertRequest): Promise<$_model.UpdateMonitorArmsAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorArmsAlertWithOptions(request, headers, runtime);
  }

  /**
   * 更新联系人
   * 
   * @param request - UpdateMonitorContactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorContactResponse
   */
  async updateMonitorContactWithOptions(request: $_model.UpdateMonitorContactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorContactResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorContact",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/contact`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorContactResponse({}));
  }

  /**
   * 更新联系人
   * 
   * @param request - UpdateMonitorContactRequest
   * @returns UpdateMonitorContactResponse
   */
  async updateMonitorContact(request: $_model.UpdateMonitorContactRequest): Promise<$_model.UpdateMonitorContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorContactWithOptions(request, headers, runtime);
  }

  /**
   * 更新联系人组
   * 
   * @param request - UpdateMonitorContactGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorContactGroupResponse
   */
  async updateMonitorContactGroupWithOptions(request: $_model.UpdateMonitorContactGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorContactGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorContactGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/group`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorContactGroupResponse({}));
  }

  /**
   * 更新联系人组
   * 
   * @param request - UpdateMonitorContactGroupRequest
   * @returns UpdateMonitorContactGroupResponse
   */
  async updateMonitorContactGroup(request: $_model.UpdateMonitorContactGroupRequest): Promise<$_model.UpdateMonitorContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorContactGroupWithOptions(request, headers, runtime);
  }

  /**
   * 编辑MQ报警任务
   * 
   * @param request - UpdateMonitorMqAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorMqAlertResponse
   */
  async updateMonitorMqAlertWithOptions(request: $_model.UpdateMonitorMqAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorMqAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorMqAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/updateMonitorMqAlert`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorMqAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorMqAlertResponse({}));
  }

  /**
   * 编辑MQ报警任务
   * 
   * @param request - UpdateMonitorMqAlertRequest
   * @returns UpdateMonitorMqAlertResponse
   */
  async updateMonitorMqAlert(request: $_model.UpdateMonitorMqAlertRequest): Promise<$_model.UpdateMonitorMqAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorMqAlertWithOptions(request, headers, runtime);
  }

  /**
   * 编辑日志报警任务
   * 
   * @param request - UpdateMonitorSlsAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorSlsAlertResponse
   */
  async updateMonitorSlsAlertWithOptions(request: $_model.UpdateMonitorSlsAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorSlsAlertResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorSlsAlert",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/alert/commands/updateMonitorSlsAlert`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorSlsAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorSlsAlertResponse({}));
  }

  /**
   * 编辑日志报警任务
   * 
   * @param request - UpdateMonitorSlsAlertRequest
   * @returns UpdateMonitorSlsAlertResponse
   */
  async updateMonitorSlsAlert(request: $_model.UpdateMonitorSlsAlertRequest): Promise<$_model.UpdateMonitorSlsAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorSlsAlertWithOptions(request, headers, runtime);
  }

  /**
   * 更新webhook
   * 
   * @param request - UpdateMonitorWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitorWebhookResponse
   */
  async updateMonitorWebhookWithOptions(request: $_model.UpdateMonitorWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitorWebhookResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitorWebhook",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-monitor/v1/monitor/webhook`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitorWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitorWebhookResponse({}));
  }

  /**
   * 更新webhook
   * 
   * @param request - UpdateMonitorWebhookRequest
   * @returns UpdateMonitorWebhookResponse
   */
  async updateMonitorWebhook(request: $_model.UpdateMonitorWebhookRequest): Promise<$_model.UpdateMonitorWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMonitorWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 更新PBC的api规格
   * 
   * @param request - UpdatePbcApiSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePbcApiSchemaResponse
   */
  async updatePbcApiSchemaWithOptions(pbcVersionId: string, request: $_model.UpdatePbcApiSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePbcApiSchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePbcApiSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/api-schemas`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePbcApiSchemaResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePbcApiSchemaResponse({}));
  }

  /**
   * 更新PBC的api规格
   * 
   * @param request - UpdatePbcApiSchemaRequest
   * @returns UpdatePbcApiSchemaResponse
   */
  async updatePbcApiSchema(pbcVersionId: string, request: $_model.UpdatePbcApiSchemaRequest): Promise<$_model.UpdatePbcApiSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePbcApiSchemaWithOptions(pbcVersionId, request, headers, runtime);
  }

  /**
   * 更新PBC使用说明文档
   * 
   * @param request - UpdatePbcInstructionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePbcInstructionResponse
   */
  async updatePbcInstructionWithOptions(pbcVersionId: string, request: $_model.UpdatePbcInstructionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePbcInstructionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePbcInstruction",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/instructions`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePbcInstructionResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePbcInstructionResponse({}));
  }

  /**
   * 更新PBC使用说明文档
   * 
   * @param request - UpdatePbcInstructionRequest
   * @returns UpdatePbcInstructionResponse
   */
  async updatePbcInstruction(pbcVersionId: string, request: $_model.UpdatePbcInstructionRequest): Promise<$_model.UpdatePbcInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePbcInstructionWithOptions(pbcVersionId, request, headers, runtime);
  }

  /**
   * 更新PBC规格
   * 
   * @param request - UpdatePbcSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePbcSchemaResponse
   */
  async updatePbcSchemaWithOptions(pbcVersionId: string, request: $_model.UpdatePbcSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePbcSchemaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePbcSchema",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(pbcVersionId)}/schemas`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePbcSchemaResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePbcSchemaResponse({}));
  }

  /**
   * 更新PBC规格
   * 
   * @param request - UpdatePbcSchemaRequest
   * @returns UpdatePbcSchemaResponse
   */
  async updatePbcSchema(pbcVersionId: string, request: $_model.UpdatePbcSchemaRequest): Promise<$_model.UpdatePbcSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePbcSchemaWithOptions(pbcVersionId, request, headers, runtime);
  }

  /**
   * 更新PBC版本
   * 
   * @param request - UpdatePbcVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePbcVersionResponse
   */
  async updatePbcVersionWithOptions(id: string, request: $_model.UpdatePbcVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePbcVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePbcVersion",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/catalog/v1/pbc-versions/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePbcVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePbcVersionResponse({}));
  }

  /**
   * 更新PBC版本
   * 
   * @param request - UpdatePbcVersionRequest
   * @returns UpdatePbcVersionResponse
   */
  async updatePbcVersion(id: string, request: $_model.UpdatePbcVersionRequest): Promise<$_model.UpdatePbcVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePbcVersionWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新服务配置信息
   * 
   * @param request - UpdatePdpConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePdpConfigResponse
   */
  async updatePdpConfigWithOptions(request: $_model.UpdatePdpConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePdpConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePdpConfig",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/configs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePdpConfigResponse({}));
  }

  /**
   * 更新服务配置信息
   * 
   * @param request - UpdatePdpConfigRequest
   * @returns UpdatePdpConfigResponse
   */
  async updatePdpConfig(request: $_model.UpdatePdpConfigRequest): Promise<$_model.UpdatePdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePdpConfigWithOptions(request, headers, runtime);
  }

  /**
   * 更新泳道
   * 
   * @param request - UpdatePdpLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePdpLaneResponse
   */
  async updatePdpLaneWithOptions(id: string, request: $_model.UpdatePdpLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePdpLaneResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePdpLane",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/lanes/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePdpLaneResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePdpLaneResponse({}));
  }

  /**
   * 更新泳道
   * 
   * @param request - UpdatePdpLaneRequest
   * @returns UpdatePdpLaneResponse
   */
  async updatePdpLane(id: string, request: $_model.UpdatePdpLaneRequest): Promise<$_model.UpdatePdpLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePdpLaneWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新PdpPbc
   * 
   * @param request - UpdatePdpPbcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePdpPbcResponse
   */
  async updatePdpPbcWithOptions(request: $_model.UpdatePdpPbcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePdpPbcResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePdpPbc",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/pbcs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePdpPbcResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePdpPbcResponse({}));
  }

  /**
   * 更新PdpPbc
   * 
   * @param request - UpdatePdpPbcRequest
   * @returns UpdatePdpPbcResponse
   */
  async updatePdpPbc(request: $_model.UpdatePdpPbcRequest): Promise<$_model.UpdatePdpPbcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePdpPbcWithOptions(request, headers, runtime);
  }

  /**
   * 更新服务信息
   * 
   * @param request - UpdatePdpServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePdpServiceResponse
   */
  async updatePdpServiceWithOptions(request: $_model.UpdatePdpServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePdpServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePdpService",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/services`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePdpServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePdpServiceResponse({}));
  }

  /**
   * 更新服务信息
   * 
   * @param request - UpdatePdpServiceRequest
   * @returns UpdatePdpServiceResponse
   */
  async updatePdpService(request: $_model.UpdatePdpServiceRequest): Promise<$_model.UpdatePdpServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePdpServiceWithOptions(request, headers, runtime);
  }

  /**
   * 更新服务分组信息
   * 
   * @param request - UpdatePdpServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePdpServiceGroupResponse
   */
  async updatePdpServiceGroupWithOptions(request: $_model.UpdatePdpServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePdpServiceGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePdpServiceGroup",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-service/v1/groups`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePdpServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePdpServiceGroupResponse({}));
  }

  /**
   * 更新服务分组信息
   * 
   * @param request - UpdatePdpServiceGroupRequest
   * @returns UpdatePdpServiceGroupResponse
   */
  async updatePdpServiceGroup(request: $_model.UpdatePdpServiceGroupRequest): Promise<$_model.UpdatePdpServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePdpServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 更新产品
   * 
   * @param request - UpdateProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProductResponse
   */
  async updateProductWithOptions(request: $_model.UpdateProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProductResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProduct",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-pbc/v1/products`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProductResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProductResponse({}));
  }

  /**
   * 更新产品
   * 
   * @param request - UpdateProductRequest
   * @returns UpdateProductResponse
   */
  async updateProduct(request: $_model.UpdateProductRequest): Promise<$_model.UpdateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductWithOptions(request, headers, runtime);
  }

  /**
   * 更新资源
   * 
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(id: string, request: $_model.UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/pdp-resource/v1/resources/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceResponse({}));
  }

  /**
   * 更新资源
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(id: string, request: $_model.UpdateResourceRequest): Promise<$_model.UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(id, request, headers, runtime);
  }

  /**
   * 更新角色信息
   * 
   * @param request - UpdateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(roleId: string, request: $_model.UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/roles/role-id/${$dara.URL.percentEncode(roleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleResponse({}));
  }

  /**
   * 更新角色信息
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(roleId: string, request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(roleId, request, headers, runtime);
  }

  /**
   * 更新申请记录
   * 
   * @param request - UpdateSettledRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSettledResponse
   */
  async updateSettledWithOptions(id: string, request: $_model.UpdateSettledRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSettledResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSettled",
      version: "2021-11-15",
      protocol: "HTTPS",
      pathname: `/manager/v1/settleds/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSettledResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSettledResponse({}));
  }

  /**
   * 更新申请记录
   * 
   * @param request - UpdateSettledRequest
   * @returns UpdateSettledResponse
   */
  async updateSettled(id: string, request: $_model.UpdateSettledRequest): Promise<$_model.UpdateSettledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSettledWithOptions(id, request, headers, runtime);
  }

}

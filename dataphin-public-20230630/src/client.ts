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
    this._endpoint = this.getEndpoint("dataphin-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加数据服务项目用户并设置角色。
   * 
   * @param tmpReq - AddDataServiceProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataServiceProjectMemberResponse
   */
  async addDataServiceProjectMemberWithOptions(tmpReq: $_model.AddDataServiceProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataServiceProjectMemberResponse> {
    tmpReq.validate();
    let request = new $_model.AddDataServiceProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataServiceProjectMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataServiceProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddDataServiceProjectMemberResponse({}));
  }

  /**
   * 添加数据服务项目用户并设置角色。
   * 
   * @param request - AddDataServiceProjectMemberRequest
   * @returns AddDataServiceProjectMemberResponse
   */
  async addDataServiceProjectMember(request: $_model.AddDataServiceProjectMemberRequest): Promise<$_model.AddDataServiceProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataServiceProjectMemberWithOptions(request, runtime);
  }

  /**
   * 增加项目成员。
   * 
   * @param tmpReq - AddProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddProjectMemberResponse
   */
  async addProjectMemberWithOptions(tmpReq: $_model.AddProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddProjectMemberResponse> {
    tmpReq.validate();
    let request = new $_model.AddProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddProjectMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddProjectMemberResponse({}));
  }

  /**
   * 增加项目成员。
   * 
   * @param request - AddProjectMemberRequest
   * @returns AddProjectMemberResponse
   */
  async addProjectMember(request: $_model.AddProjectMemberRequest): Promise<$_model.AddProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addProjectMemberWithOptions(request, runtime);
  }

  /**
   * 新增注册血缘。
   * 
   * @param tmpReq - AddRegisterLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRegisterLineageResponse
   */
  async addRegisterLineageWithOptions(tmpReq: $_model.AddRegisterLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRegisterLineageResponse> {
    tmpReq.validate();
    let request = new $_model.AddRegisterLineageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addRegisterLineageCommand)) {
      request.addRegisterLineageCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addRegisterLineageCommand, "AddRegisterLineageCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addRegisterLineageCommandShrink)) {
      body["AddRegisterLineageCommand"] = request.addRegisterLineageCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRegisterLineage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRegisterLineageResponse>(await this.callApi(params, req, runtime), new $_model.AddRegisterLineageResponse({}));
  }

  /**
   * 新增注册血缘。
   * 
   * @param request - AddRegisterLineageRequest
   * @returns AddRegisterLineageResponse
   */
  async addRegisterLineage(request: $_model.AddRegisterLineageRequest): Promise<$_model.AddRegisterLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRegisterLineageWithOptions(request, runtime);
  }

  /**
   * 新增租户成员
   * 
   * @param tmpReq - AddTenantMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTenantMembersResponse
   */
  async addTenantMembersWithOptions(tmpReq: $_model.AddTenantMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTenantMembersResponse> {
    tmpReq.validate();
    let request = new $_model.AddTenantMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTenantMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTenantMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddTenantMembersResponse({}));
  }

  /**
   * 新增租户成员
   * 
   * @param request - AddTenantMembersRequest
   * @returns AddTenantMembersResponse
   */
  async addTenantMembers(request: $_model.AddTenantMembersRequest): Promise<$_model.AddTenantMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTenantMembersWithOptions(request, runtime);
  }

  /**
   * 通过原始用户添加租户成员.
   * 
   * @param tmpReq - AddTenantMembersBySourceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTenantMembersBySourceUserResponse
   */
  async addTenantMembersBySourceUserWithOptions(tmpReq: $_model.AddTenantMembersBySourceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTenantMembersBySourceUserResponse> {
    tmpReq.validate();
    let request = new $_model.AddTenantMembersBySourceUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTenantMembersBySourceUser",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTenantMembersBySourceUserResponse>(await this.callApi(params, req, runtime), new $_model.AddTenantMembersBySourceUserResponse({}));
  }

  /**
   * 通过原始用户添加租户成员.
   * 
   * @param request - AddTenantMembersBySourceUserRequest
   * @returns AddTenantMembersBySourceUserResponse
   */
  async addTenantMembersBySourceUser(request: $_model.AddTenantMembersBySourceUserRequest): Promise<$_model.AddTenantMembersBySourceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTenantMembersBySourceUserWithOptions(request, runtime);
  }

  /**
   * 添加用户组成员.
   * 
   * @param tmpReq - AddUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMemberWithOptions(tmpReq: $_model.AddUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserGroupMemberResponse> {
    tmpReq.validate();
    let request = new $_model.AddUserGroupMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserGroupMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddUserGroupMemberResponse({}));
  }

  /**
   * 添加用户组成员.
   * 
   * @param request - AddUserGroupMemberRequest
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMember(request: $_model.AddUserGroupMemberRequest): Promise<$_model.AddUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * 申请API权限。
   * 
   * @param tmpReq - ApplyDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyDataServiceApiResponse
   */
  async applyDataServiceApiWithOptions(tmpReq: $_model.ApplyDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyDataServiceApiResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyDataServiceApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applyCommand)) {
      request.applyCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applyCommand, "ApplyCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyCommandShrink)) {
      body["ApplyCommand"] = request.applyCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyDataServiceApi",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.ApplyDataServiceApiResponse({}));
  }

  /**
   * 申请API权限。
   * 
   * @param request - ApplyDataServiceApiRequest
   * @returns ApplyDataServiceApiResponse
   */
  async applyDataServiceApi(request: $_model.ApplyDataServiceApiRequest): Promise<$_model.ApplyDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyDataServiceApiWithOptions(request, runtime);
  }

  /**
   * 申请应用权限。
   * 
   * @param tmpReq - ApplyDataServiceAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyDataServiceAppResponse
   */
  async applyDataServiceAppWithOptions(tmpReq: $_model.ApplyDataServiceAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyDataServiceAppResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyDataServiceAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applyCommand)) {
      request.applyCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applyCommand, "ApplyCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyCommandShrink)) {
      body["ApplyCommand"] = request.applyCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyDataServiceApp",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyDataServiceAppResponse>(await this.callApi(params, req, runtime), new $_model.ApplyDataServiceAppResponse({}));
  }

  /**
   * 申请应用权限。
   * 
   * @param request - ApplyDataServiceAppRequest
   * @returns ApplyDataServiceAppResponse
   */
  async applyDataServiceApp(request: $_model.ApplyDataServiceAppRequest): Promise<$_model.ApplyDataServiceAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyDataServiceAppWithOptions(request, runtime);
  }

  /**
   * 指定质量规则和调度设置进行绑定。
   * 
   * @param tmpReq - AssignQualityRuleOfAllRuleScopeSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignQualityRuleOfAllRuleScopeSchedulesResponse
   */
  async assignQualityRuleOfAllRuleScopeSchedulesWithOptions(tmpReq: $_model.AssignQualityRuleOfAllRuleScopeSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignQualityRuleOfAllRuleScopeSchedulesResponse> {
    tmpReq.validate();
    let request = new $_model.AssignQualityRuleOfAllRuleScopeSchedulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assignCommand)) {
      request.assignCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assignCommand, "AssignCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignCommandShrink)) {
      body["AssignCommand"] = request.assignCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignQualityRuleOfAllRuleScopeSchedules",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignQualityRuleOfAllRuleScopeSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.AssignQualityRuleOfAllRuleScopeSchedulesResponse({}));
  }

  /**
   * 指定质量规则和调度设置进行绑定。
   * 
   * @param request - AssignQualityRuleOfAllRuleScopeSchedulesRequest
   * @returns AssignQualityRuleOfAllRuleScopeSchedulesResponse
   */
  async assignQualityRuleOfAllRuleScopeSchedules(request: $_model.AssignQualityRuleOfAllRuleScopeSchedulesRequest): Promise<$_model.AssignQualityRuleOfAllRuleScopeSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignQualityRuleOfAllRuleScopeSchedulesWithOptions(request, runtime);
  }

  /**
   * 项目计算源连通性检查。
   * 
   * @param tmpReq - CheckComputeSourceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckComputeSourceConnectivityResponse
   */
  async checkComputeSourceConnectivityWithOptions(tmpReq: $_model.CheckComputeSourceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckComputeSourceConnectivityResponse> {
    tmpReq.validate();
    let request = new $_model.CheckComputeSourceConnectivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkCommand)) {
      request.checkCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkCommand, "CheckCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkCommandShrink)) {
      body["CheckCommand"] = request.checkCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckComputeSourceConnectivity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckComputeSourceConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.CheckComputeSourceConnectivityResponse({}));
  }

  /**
   * 项目计算源连通性检查。
   * 
   * @param request - CheckComputeSourceConnectivityRequest
   * @returns CheckComputeSourceConnectivityResponse
   */
  async checkComputeSourceConnectivity(request: $_model.CheckComputeSourceConnectivityRequest): Promise<$_model.CheckComputeSourceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkComputeSourceConnectivityWithOptions(request, runtime);
  }

  /**
   * 计算源连通性检查。
   * 
   * @param request - CheckComputeSourceConnectivityByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckComputeSourceConnectivityByIdResponse
   */
  async checkComputeSourceConnectivityByIdWithOptions(request: $_model.CheckComputeSourceConnectivityByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckComputeSourceConnectivityByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckComputeSourceConnectivityById",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckComputeSourceConnectivityByIdResponse>(await this.callApi(params, req, runtime), new $_model.CheckComputeSourceConnectivityByIdResponse({}));
  }

  /**
   * 计算源连通性检查。
   * 
   * @param request - CheckComputeSourceConnectivityByIdRequest
   * @returns CheckComputeSourceConnectivityByIdResponse
   */
  async checkComputeSourceConnectivityById(request: $_model.CheckComputeSourceConnectivityByIdRequest): Promise<$_model.CheckComputeSourceConnectivityByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkComputeSourceConnectivityByIdWithOptions(request, runtime);
  }

  /**
   * 检查数据源连通性
   * 
   * @param tmpReq - CheckDataSourceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataSourceConnectivityResponse
   */
  async checkDataSourceConnectivityWithOptions(tmpReq: $_model.CheckDataSourceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDataSourceConnectivityResponse> {
    tmpReq.validate();
    let request = new $_model.CheckDataSourceConnectivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkCommand)) {
      request.checkCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkCommand, "CheckCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkCommandShrink)) {
      body["CheckCommand"] = request.checkCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDataSourceConnectivity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDataSourceConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.CheckDataSourceConnectivityResponse({}));
  }

  /**
   * 检查数据源连通性
   * 
   * @param request - CheckDataSourceConnectivityRequest
   * @returns CheckDataSourceConnectivityResponse
   */
  async checkDataSourceConnectivity(request: $_model.CheckDataSourceConnectivityRequest): Promise<$_model.CheckDataSourceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDataSourceConnectivityWithOptions(request, runtime);
  }

  /**
   * 检查已创建的数据源是否正常连通
   * 
   * @param request - CheckDataSourceConnectivityByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataSourceConnectivityByIdResponse
   */
  async checkDataSourceConnectivityByIdWithOptions(request: $_model.CheckDataSourceConnectivityByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDataSourceConnectivityByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDataSourceConnectivityById",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDataSourceConnectivityByIdResponse>(await this.callApi(params, req, runtime), new $_model.CheckDataSourceConnectivityByIdResponse({}));
  }

  /**
   * 检查已创建的数据源是否正常连通
   * 
   * @param request - CheckDataSourceConnectivityByIdRequest
   * @returns CheckDataSourceConnectivityByIdResponse
   */
  async checkDataSourceConnectivityById(request: $_model.CheckDataSourceConnectivityByIdRequest): Promise<$_model.CheckDataSourceConnectivityByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDataSourceConnectivityByIdWithOptions(request, runtime);
  }

  /**
   * 检查项目是否存在依赖。
   * 
   * @param request - CheckProjectHasDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckProjectHasDependencyResponse
   */
  async checkProjectHasDependencyWithOptions(request: $_model.CheckProjectHasDependencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckProjectHasDependencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckProjectHasDependency",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckProjectHasDependencyResponse>(await this.callApi(params, req, runtime), new $_model.CheckProjectHasDependencyResponse({}));
  }

  /**
   * 检查项目是否存在依赖。
   * 
   * @param request - CheckProjectHasDependencyRequest
   * @returns CheckProjectHasDependencyResponse
   */
  async checkProjectHasDependency(request: $_model.CheckProjectHasDependencyRequest): Promise<$_model.CheckProjectHasDependencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkProjectHasDependencyWithOptions(request, runtime);
  }

  /**
   * 校验用户是否有指定资源权限点.
   * 
   * @param tmpReq - CheckResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourcePermissionResponse
   */
  async checkResourcePermissionWithOptions(tmpReq: $_model.CheckResourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckResourcePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.CheckResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkCommand)) {
      request.checkCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkCommand, "CheckCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkCommandShrink)) {
      body["CheckCommand"] = request.checkCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckResourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.CheckResourcePermissionResponse({}));
  }

  /**
   * 校验用户是否有指定资源权限点.
   * 
   * @param request - CheckResourcePermissionRequest
   * @returns CheckResourcePermissionResponse
   */
  async checkResourcePermission(request: $_model.CheckResourcePermissionRequest): Promise<$_model.CheckResourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 创建即席查询文件
   * 
   * @param tmpReq - CreateAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdHocFileResponse
   */
  async createAdHocFileWithOptions(tmpReq: $_model.CreateAdHocFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAdHocFileResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAdHocFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAdHocFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateAdHocFileResponse({}));
  }

  /**
   * 创建即席查询文件
   * 
   * @param request - CreateAdHocFileRequest
   * @returns CreateAdHocFileResponse
   */
  async createAdHocFile(request: $_model.CreateAdHocFileRequest): Promise<$_model.CreateAdHocFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdHocFileWithOptions(request, runtime);
  }

  /**
   * 创建离线计算任务。
   * 
   * @param tmpReq - CreateBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBatchTaskResponse
   */
  async createBatchTaskWithOptions(tmpReq: $_model.CreateBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateBatchTaskResponse({}));
  }

  /**
   * 创建离线计算任务。
   * 
   * @param request - CreateBatchTaskRequest
   * @returns CreateBatchTaskResponse
   */
  async createBatchTask(request: $_model.CreateBatchTaskRequest): Promise<$_model.CreateBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBatchTaskWithOptions(request, runtime);
  }

  /**
   * 创建业务实体。
   * 
   * @param tmpReq - CreateBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizEntityResponse
   */
  async createBizEntityWithOptions(tmpReq: $_model.CreateBizEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBizEntityResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBizEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateBizEntityResponse({}));
  }

  /**
   * 创建业务实体。
   * 
   * @param request - CreateBizEntityRequest
   * @returns CreateBizEntityResponse
   */
  async createBizEntity(request: $_model.CreateBizEntityRequest): Promise<$_model.CreateBizEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBizEntityWithOptions(request, runtime);
  }

  /**
   * 新建业务指标
   * 
   * @param tmpReq - CreateBizMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizMetricResponse
   */
  async createBizMetricWithOptions(tmpReq: $_model.CreateBizMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBizMetricResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBizMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createBizMetricCommand)) {
      request.createBizMetricCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createBizMetricCommand, "CreateBizMetricCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createBizMetricCommandShrink)) {
      body["CreateBizMetricCommand"] = request.createBizMetricCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBizMetric",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBizMetricResponse>(await this.callApi(params, req, runtime), new $_model.CreateBizMetricResponse({}));
  }

  /**
   * 新建业务指标
   * 
   * @param request - CreateBizMetricRequest
   * @returns CreateBizMetricResponse
   */
  async createBizMetric(request: $_model.CreateBizMetricRequest): Promise<$_model.CreateBizMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBizMetricWithOptions(request, runtime);
  }

  /**
   * 创建数据板块。
   * 
   * @param tmpReq - CreateBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizUnitResponse
   */
  async createBizUnitWithOptions(tmpReq: $_model.CreateBizUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBizUnitResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBizUnitShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBizUnitResponse>(await this.callApi(params, req, runtime), new $_model.CreateBizUnitResponse({}));
  }

  /**
   * 创建数据板块。
   * 
   * @param request - CreateBizUnitRequest
   * @returns CreateBizUnitResponse
   */
  async createBizUnit(request: $_model.CreateBizUnitRequest): Promise<$_model.CreateBizUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBizUnitWithOptions(request, runtime);
  }

  /**
   * 创建计算源。
   * 
   * @param tmpReq - CreateComputeSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeSourceResponse
   */
  async createComputeSourceWithOptions(tmpReq: $_model.CreateComputeSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeSourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateComputeSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeSourceResponse({}));
  }

  /**
   * 创建计算源。
   * 
   * @param request - CreateComputeSourceRequest
   * @returns CreateComputeSourceResponse
   */
  async createComputeSource(request: $_model.CreateComputeSourceRequest): Promise<$_model.CreateComputeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeSourceWithOptions(request, runtime);
  }

  /**
   * 创建主题域。
   * 
   * @param tmpReq - CreateDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataDomainResponse
   */
  async createDataDomainWithOptions(tmpReq: $_model.CreateDataDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataDomainResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataDomainResponse({}));
  }

  /**
   * 创建主题域。
   * 
   * @param request - CreateDataDomainRequest
   * @returns CreateDataDomainResponse
   */
  async createDataDomain(request: $_model.CreateDataDomainRequest): Promise<$_model.CreateDataDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataDomainWithOptions(request, runtime);
  }

  /**
   * 创建新的数据服务API并提交。
   * 
   * @param tmpReq - CreateDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataServiceApiResponse
   */
  async createDataServiceApiWithOptions(tmpReq: $_model.CreateDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataServiceApiResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataServiceApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataServiceApi",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataServiceApiResponse({}));
  }

  /**
   * 创建新的数据服务API并提交。
   * 
   * @param request - CreateDataServiceApiRequest
   * @returns CreateDataServiceApiResponse
   */
  async createDataServiceApi(request: $_model.CreateDataServiceApiRequest): Promise<$_model.CreateDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataServiceApiWithOptions(request, runtime);
  }

  /**
   * 新建数据源
   * 
   * @param tmpReq - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(tmpReq: $_model.CreateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceResponse({}));
  }

  /**
   * 新建数据源
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建菜单树文件目录
   * 
   * @param tmpReq - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
   */
  async createDirectoryWithOptions(tmpReq: $_model.CreateDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDirectoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDirectoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateDirectoryResponse({}));
  }

  /**
   * 创建菜单树文件目录
   * 
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: $_model.CreateDirectoryRequest): Promise<$_model.CreateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * 通用补数据接口 1.会生成补数据实例运行：影响相关产产出表数据 2.会进行任务运行：造成计算的费用以及存储的费用
   * 
   * @param tmpReq - CreateNodeSupplementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeSupplementResponse
   */
  async createNodeSupplementWithOptions(tmpReq: $_model.CreateNodeSupplementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeSupplementResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNodeSupplementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodeSupplement",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodeSupplementResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodeSupplementResponse({}));
  }

  /**
   * 通用补数据接口 1.会生成补数据实例运行：影响相关产产出表数据 2.会进行任务运行：造成计算的费用以及存储的费用
   * 
   * @param request - CreateNodeSupplementRequest
   * @returns CreateNodeSupplementResponse
   */
  async createNodeSupplement(request: $_model.CreateNodeSupplementRequest): Promise<$_model.CreateNodeSupplementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeSupplementWithOptions(request, runtime);
  }

  /**
   * 创建集成管道任务。
   * 
   * @param tmpReq - CreatePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineResponse
   */
  async createPipelineWithOptions(tmpReq: $_model.CreatePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePipelineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipeline",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineResponse({}));
  }

  /**
   * 创建集成管道任务。
   * 
   * @param request - CreatePipelineRequest
   * @returns CreatePipelineResponse
   */
  async createPipeline(request: $_model.CreatePipelineRequest): Promise<$_model.CreatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPipelineWithOptions(request, runtime);
  }

  /**
   * 异步创建集成管道任务。
   * 
   * @param tmpReq - CreatePipelineByAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineByAsyncResponse
   */
  async createPipelineByAsyncWithOptions(tmpReq: $_model.CreatePipelineByAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineByAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePipelineByAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipelineByAsync",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineByAsyncResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineByAsyncResponse({}));
  }

  /**
   * 异步创建集成管道任务。
   * 
   * @param request - CreatePipelineByAsyncRequest
   * @returns CreatePipelineByAsyncResponse
   */
  async createPipelineByAsync(request: $_model.CreatePipelineByAsyncRequest): Promise<$_model.CreatePipelineByAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPipelineByAsyncWithOptions(request, runtime);
  }

  /**
   * 创建数据集成任务。
   * 
   * @param tmpReq - CreatePipelineNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineNodeResponse
   */
  async createPipelineNodeWithOptions(tmpReq: $_model.CreatePipelineNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineNodeResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePipelineNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createPipelineNodeCommand)) {
      request.createPipelineNodeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createPipelineNodeCommand, "CreatePipelineNodeCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createPipelineNodeCommandShrink)) {
      body["CreatePipelineNodeCommand"] = request.createPipelineNodeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipelineNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineNodeResponse({}));
  }

  /**
   * 创建数据集成任务。
   * 
   * @param request - CreatePipelineNodeRequest
   * @returns CreatePipelineNodeResponse
   */
  async createPipelineNode(request: $_model.CreatePipelineNodeRequest): Promise<$_model.CreatePipelineNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPipelineNodeWithOptions(request, runtime);
  }

  /**
   * 创建资源文件。
   * 
   * @param tmpReq - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(tmpReq: $_model.CreateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * 创建资源文件。
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * 创建行级权限
   * 
   * @param tmpReq - CreateRowPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRowPermissionResponse
   */
  async createRowPermissionWithOptions(tmpReq: $_model.CreateRowPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRowPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRowPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createRowPermissionCommand)) {
      request.createRowPermissionCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createRowPermissionCommand, "CreateRowPermissionCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createRowPermissionCommandShrink)) {
      body["CreateRowPermissionCommand"] = request.createRowPermissionCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRowPermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRowPermissionResponse>(await this.callApi(params, req, runtime), new $_model.CreateRowPermissionResponse({}));
  }

  /**
   * 创建行级权限
   * 
   * @param request - CreateRowPermissionRequest
   * @returns CreateRowPermissionResponse
   */
  async createRowPermission(request: $_model.CreateRowPermissionRequest): Promise<$_model.CreateRowPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRowPermissionWithOptions(request, runtime);
  }

  /**
   * 新建数据分类。
   * 
   * @param tmpReq - CreateSecurityClassifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityClassifyResponse
   */
  async createSecurityClassifyWithOptions(tmpReq: $_model.CreateSecurityClassifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityClassifyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityClassifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityClassify",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityClassifyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityClassifyResponse({}));
  }

  /**
   * 新建数据分类。
   * 
   * @param request - CreateSecurityClassifyRequest
   * @returns CreateSecurityClassifyResponse
   */
  async createSecurityClassify(request: $_model.CreateSecurityClassifyRequest): Promise<$_model.CreateSecurityClassifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityClassifyWithOptions(request, runtime);
  }

  /**
   * 新建数据分类目录。
   * 
   * @param tmpReq - CreateSecurityClassifyCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityClassifyCatalogResponse
   */
  async createSecurityClassifyCatalogWithOptions(tmpReq: $_model.CreateSecurityClassifyCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityClassifyCatalogResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityClassifyCatalogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityClassifyCatalog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityClassifyCatalogResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityClassifyCatalogResponse({}));
  }

  /**
   * 新建数据分类目录。
   * 
   * @param request - CreateSecurityClassifyCatalogRequest
   * @returns CreateSecurityClassifyCatalogResponse
   */
  async createSecurityClassifyCatalog(request: $_model.CreateSecurityClassifyCatalogRequest): Promise<$_model.CreateSecurityClassifyCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityClassifyCatalogWithOptions(request, runtime);
  }

  /**
   * 新建安全识别结果。
   * 
   * @param tmpReq - CreateSecurityIdentifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityIdentifyResultResponse
   */
  async createSecurityIdentifyResultWithOptions(tmpReq: $_model.CreateSecurityIdentifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityIdentifyResultResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityIdentifyResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityIdentifyResult",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityIdentifyResultResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityIdentifyResultResponse({}));
  }

  /**
   * 新建安全识别结果。
   * 
   * @param request - CreateSecurityIdentifyResultRequest
   * @returns CreateSecurityIdentifyResultResponse
   */
  async createSecurityIdentifyResult(request: $_model.CreateSecurityIdentifyResultRequest): Promise<$_model.CreateSecurityIdentifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityIdentifyResultWithOptions(request, runtime);
  }

  /**
   * 新建数据分级。
   * 
   * @param tmpReq - CreateSecurityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityLevelResponse
   */
  async createSecurityLevelWithOptions(tmpReq: $_model.CreateSecurityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityLevelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityLevelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityLevel",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityLevelResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityLevelResponse({}));
  }

  /**
   * 新建数据分级。
   * 
   * @param request - CreateSecurityLevelRequest
   * @returns CreateSecurityLevelResponse
   */
  async createSecurityLevel(request: $_model.CreateSecurityLevelRequest): Promise<$_model.CreateSecurityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityLevelWithOptions(request, runtime);
  }

  /**
   * 创建标准。
   * 
   * @param tmpReq - CreateStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardResponse
   */
  async createStandardWithOptions(tmpReq: $_model.CreateStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardResponse({}));
  }

  /**
   * 创建标准。
   * 
   * @param request - CreateStandardRequest
   * @returns CreateStandardResponse
   */
  async createStandard(request: $_model.CreateStandardRequest): Promise<$_model.CreateStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardWithOptions(request, runtime);
  }

  /**
   * 创建数据标准码表。
   * 
   * @param tmpReq - CreateStandardLookupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardLookupTableResponse
   */
  async createStandardLookupTableWithOptions(tmpReq: $_model.CreateStandardLookupTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardLookupTableResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardLookupTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardLookupTable",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardLookupTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardLookupTableResponse({}));
  }

  /**
   * 创建数据标准码表。
   * 
   * @param request - CreateStandardLookupTableRequest
   * @returns CreateStandardLookupTableResponse
   */
  async createStandardLookupTable(request: $_model.CreateStandardLookupTableRequest): Promise<$_model.CreateStandardLookupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardLookupTableWithOptions(request, runtime);
  }

  /**
   * 创建标准映射关系, 包括有效映射和无效映射。
   * 
   * @param tmpReq - CreateStandardMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardMappingResponse
   */
  async createStandardMappingWithOptions(tmpReq: $_model.CreateStandardMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardMappingResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardMappingResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardMappingResponse({}));
  }

  /**
   * 创建标准映射关系, 包括有效映射和无效映射。
   * 
   * @param request - CreateStandardMappingRequest
   * @returns CreateStandardMappingResponse
   */
  async createStandardMapping(request: $_model.CreateStandardMappingRequest): Promise<$_model.CreateStandardMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardMappingWithOptions(request, runtime);
  }

  /**
   * 创建标准关联关系。
   * 
   * @param tmpReq - CreateStandardRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardRelationsResponse
   */
  async createStandardRelationsWithOptions(tmpReq: $_model.CreateStandardRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardRelationsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardRelationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardRelations",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardRelationsResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardRelationsResponse({}));
  }

  /**
   * 创建标准关联关系。
   * 
   * @param request - CreateStandardRelationsRequest
   * @returns CreateStandardRelationsResponse
   */
  async createStandardRelations(request: $_model.CreateStandardRelationsRequest): Promise<$_model.CreateStandardRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardRelationsWithOptions(request, runtime);
  }

  /**
   * 创建标准集。
   * 
   * @param tmpReq - CreateStandardSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardSetResponse
   */
  async createStandardSetWithOptions(tmpReq: $_model.CreateStandardSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardSetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardSetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardSet",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardSetResponse({}));
  }

  /**
   * 创建标准集。
   * 
   * @param request - CreateStandardSetRequest
   * @returns CreateStandardSetResponse
   */
  async createStandardSet(request: $_model.CreateStandardSetRequest): Promise<$_model.CreateStandardSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardSetWithOptions(request, runtime);
  }

  /**
   * 创建数据标准模板。
   * 
   * @param tmpReq - CreateStandardTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardTemplateResponse
   */
  async createStandardTemplateWithOptions(tmpReq: $_model.CreateStandardTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardTemplate",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardTemplateResponse({}));
  }

  /**
   * 创建数据标准模板。
   * 
   * @param request - CreateStandardTemplateRequest
   * @returns CreateStandardTemplateResponse
   */
  async createStandardTemplate(request: $_model.CreateStandardTemplateRequest): Promise<$_model.CreateStandardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardTemplateWithOptions(request, runtime);
  }

  /**
   * 创建数据标准词根。
   * 
   * @param tmpReq - CreateStandardWordRootRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardWordRootResponse
   */
  async createStandardWordRootWithOptions(tmpReq: $_model.CreateStandardWordRootRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardWordRootResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStandardWordRootShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardWordRoot",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardWordRootResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardWordRootResponse({}));
  }

  /**
   * 创建数据标准词根。
   * 
   * @param request - CreateStandardWordRootRequest
   * @returns CreateStandardWordRootResponse
   */
  async createStandardWordRoot(request: $_model.CreateStandardWordRootRequest): Promise<$_model.CreateStandardWordRootResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardWordRootWithOptions(request, runtime);
  }

  /**
   * 创建流批一体任务
   * 
   * @param tmpReq - CreateStreamBatchJobMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamBatchJobMappingResponse
   */
  async createStreamBatchJobMappingWithOptions(tmpReq: $_model.CreateStreamBatchJobMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamBatchJobMappingResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStreamBatchJobMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamBatchJobMappingCreateCommand)) {
      request.streamBatchJobMappingCreateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamBatchJobMappingCreateCommand, "StreamBatchJobMappingCreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.streamBatchJobMappingCreateCommandShrink)) {
      body["StreamBatchJobMappingCreateCommand"] = request.streamBatchJobMappingCreateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamBatchJobMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamBatchJobMappingResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamBatchJobMappingResponse({}));
  }

  /**
   * 创建流批一体任务
   * 
   * @param request - CreateStreamBatchJobMappingRequest
   * @returns CreateStreamBatchJobMappingResponse
   */
  async createStreamBatchJobMapping(request: $_model.CreateStreamBatchJobMappingRequest): Promise<$_model.CreateStreamBatchJobMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamBatchJobMappingWithOptions(request, runtime);
  }

  /**
   * 创建自定义函数。
   * 
   * @param tmpReq - CreateUdfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfResponse
   */
  async createUdfWithOptions(tmpReq: $_model.CreateUdfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUdfResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUdfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUdf",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUdfResponse>(await this.callApi(params, req, runtime), new $_model.CreateUdfResponse({}));
  }

  /**
   * 创建自定义函数。
   * 
   * @param request - CreateUdfRequest
   * @returns CreateUdfResponse
   */
  async createUdf(request: $_model.CreateUdfRequest): Promise<$_model.CreateUdfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUdfWithOptions(request, runtime);
  }

  /**
   * 新建用户组.
   * 
   * @param tmpReq - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(tmpReq: $_model.CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserGroupResponse({}));
  }

  /**
   * 新建用户组.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: $_model.CreateUserGroupRequest): Promise<$_model.CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 删除菜单树即席查询文件
   * 
   * @param request - DeleteAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdHocFileResponse
   */
  async deleteAdHocFileWithOptions(request: $_model.DeleteAdHocFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAdHocFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAdHocFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAdHocFileResponse({}));
  }

  /**
   * 删除菜单树即席查询文件
   * 
   * @param request - DeleteAdHocFileRequest
   * @returns DeleteAdHocFileResponse
   */
  async deleteAdHocFile(request: $_model.DeleteAdHocFileRequest): Promise<$_model.DeleteAdHocFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAdHocFileWithOptions(request, runtime);
  }

  /**
   * 删除离线计算任务，如果任务还没下线需要先下线再删除。
   * 
   * @param tmpReq - DeleteBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBatchTaskResponse
   */
  async deleteBatchTaskWithOptions(tmpReq: $_model.DeleteBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBatchTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBatchTaskResponse({}));
  }

  /**
   * 删除离线计算任务，如果任务还没下线需要先下线再删除。
   * 
   * @param request - DeleteBatchTaskRequest
   * @returns DeleteBatchTaskResponse
   */
  async deleteBatchTask(request: $_model.DeleteBatchTaskRequest): Promise<$_model.DeleteBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBatchTaskWithOptions(request, runtime);
  }

  /**
   * 删除业务实体。
   * 
   * @param request - DeleteBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizEntityResponse
   */
  async deleteBizEntityWithOptions(request: $_model.DeleteBizEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBizEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizUnitId)) {
      query["BizUnitId"] = request.bizUnitId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBizEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBizEntityResponse({}));
  }

  /**
   * 删除业务实体。
   * 
   * @param request - DeleteBizEntityRequest
   * @returns DeleteBizEntityResponse
   */
  async deleteBizEntity(request: $_model.DeleteBizEntityRequest): Promise<$_model.DeleteBizEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBizEntityWithOptions(request, runtime);
  }

  /**
   * 删除业务指标
   * 
   * @param tmpReq - DeleteBizMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizMetricResponse
   */
  async deleteBizMetricWithOptions(tmpReq: $_model.DeleteBizMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBizMetricResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteBizMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteBizMetricCommand)) {
      request.deleteBizMetricCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteBizMetricCommand, "DeleteBizMetricCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteBizMetricCommandShrink)) {
      body["DeleteBizMetricCommand"] = request.deleteBizMetricCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBizMetric",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBizMetricResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBizMetricResponse({}));
  }

  /**
   * 删除业务指标
   * 
   * @param request - DeleteBizMetricRequest
   * @returns DeleteBizMetricResponse
   */
  async deleteBizMetric(request: $_model.DeleteBizMetricRequest): Promise<$_model.DeleteBizMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBizMetricWithOptions(request, runtime);
  }

  /**
   * 删除数据板块。
   * 
   * @param request - DeleteBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizUnitResponse
   */
  async deleteBizUnitWithOptions(request: $_model.DeleteBizUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBizUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBizUnitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBizUnitResponse({}));
  }

  /**
   * 删除数据板块。
   * 
   * @param request - DeleteBizUnitRequest
   * @returns DeleteBizUnitResponse
   */
  async deleteBizUnit(request: $_model.DeleteBizUnitRequest): Promise<$_model.DeleteBizUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBizUnitWithOptions(request, runtime);
  }

  /**
   * 删除计算源。
   * 
   * @param request - DeleteComputeSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComputeSourceResponse
   */
  async deleteComputeSourceWithOptions(request: $_model.DeleteComputeSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComputeSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComputeSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComputeSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComputeSourceResponse({}));
  }

  /**
   * 删除计算源。
   * 
   * @param request - DeleteComputeSourceRequest
   * @returns DeleteComputeSourceResponse
   */
  async deleteComputeSource(request: $_model.DeleteComputeSourceRequest): Promise<$_model.DeleteComputeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComputeSourceWithOptions(request, runtime);
  }

  /**
   * 删除主题域。
   * 
   * @param request - DeleteDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataDomainResponse
   */
  async deleteDataDomainWithOptions(request: $_model.DeleteDataDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizUnitId)) {
      query["BizUnitId"] = request.bizUnitId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataDomainResponse({}));
  }

  /**
   * 删除主题域。
   * 
   * @param request - DeleteDataDomainRequest
   * @returns DeleteDataDomainResponse
   */
  async deleteDataDomain(request: $_model.DeleteDataDomainRequest): Promise<$_model.DeleteDataDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataDomainWithOptions(request, runtime);
  }

  /**
   * 删除数据源
   * 
   * @param tmpReq - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(tmpReq: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * 删除菜单树文件目录
   * 
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: $_model.DeleteDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDirectoryResponse({}));
  }

  /**
   * 删除菜单树文件目录
   * 
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: $_model.DeleteDirectoryRequest): Promise<$_model.DeleteDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * 批量删除质量规则对象。
   * 
   * @param tmpReq - DeleteQualityRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityRulesResponse
   */
  async deleteQualityRulesWithOptions(tmpReq: $_model.DeleteQualityRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQualityRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityRules",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityRulesResponse({}));
  }

  /**
   * 批量删除质量规则对象。
   * 
   * @param request - DeleteQualityRulesRequest
   * @returns DeleteQualityRulesResponse
   */
  async deleteQualityRules(request: $_model.DeleteQualityRulesRequest): Promise<$_model.DeleteQualityRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityRulesWithOptions(request, runtime);
  }

  /**
   * 批量删除质量调度对象。
   * 
   * @param tmpReq - DeleteQualitySchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualitySchedulesResponse
   */
  async deleteQualitySchedulesWithOptions(tmpReq: $_model.DeleteQualitySchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualitySchedulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQualitySchedulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualitySchedules",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualitySchedulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualitySchedulesResponse({}));
  }

  /**
   * 批量删除质量调度对象。
   * 
   * @param request - DeleteQualitySchedulesRequest
   * @returns DeleteQualitySchedulesResponse
   */
  async deleteQualitySchedules(request: $_model.DeleteQualitySchedulesRequest): Promise<$_model.DeleteQualitySchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualitySchedulesWithOptions(request, runtime);
  }

  /**
   * 批量删除质量模板对象。
   * 
   * @param tmpReq - DeleteQualityTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityTemplatesResponse
   */
  async deleteQualityTemplatesWithOptions(tmpReq: $_model.DeleteQualityTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQualityTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityTemplates",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityTemplatesResponse({}));
  }

  /**
   * 批量删除质量模板对象。
   * 
   * @param request - DeleteQualityTemplatesRequest
   * @returns DeleteQualityTemplatesResponse
   */
  async deleteQualityTemplates(request: $_model.DeleteQualityTemplatesRequest): Promise<$_model.DeleteQualityTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityTemplatesWithOptions(request, runtime);
  }

  /**
   * 批量删除质量监控对象。
   * 
   * @param tmpReq - DeleteQualityWatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityWatchesResponse
   */
  async deleteQualityWatchesWithOptions(tmpReq: $_model.DeleteQualityWatchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityWatchesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQualityWatchesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityWatches",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityWatchesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityWatchesResponse({}));
  }

  /**
   * 批量删除质量监控对象。
   * 
   * @param request - DeleteQualityWatchesRequest
   * @returns DeleteQualityWatchesResponse
   */
  async deleteQualityWatches(request: $_model.DeleteQualityWatchesRequest): Promise<$_model.DeleteQualityWatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityWatchesWithOptions(request, runtime);
  }

  /**
   * 删除注册血缘。
   * 
   * @param tmpReq - DeleteRegisterLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegisterLineageResponse
   */
  async deleteRegisterLineageWithOptions(tmpReq: $_model.DeleteRegisterLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegisterLineageResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRegisterLineageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteRegisterLineageCommand)) {
      request.deleteRegisterLineageCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteRegisterLineageCommand, "DeleteRegisterLineageCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteRegisterLineageCommandShrink)) {
      body["DeleteRegisterLineageCommand"] = request.deleteRegisterLineageCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegisterLineage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegisterLineageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegisterLineageResponse({}));
  }

  /**
   * 删除注册血缘。
   * 
   * @param request - DeleteRegisterLineageRequest
   * @returns DeleteRegisterLineageResponse
   */
  async deleteRegisterLineage(request: $_model.DeleteRegisterLineageRequest): Promise<$_model.DeleteRegisterLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRegisterLineageWithOptions(request, runtime);
  }

  /**
   * 删除资源文件。
   * 
   * @param request - DeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(request: $_model.DeleteResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceResponse({}));
  }

  /**
   * 删除资源文件。
   * 
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(request: $_model.DeleteResourceRequest): Promise<$_model.DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  /**
   * 删除行级权限
   * 
   * @param tmpReq - DeleteRowPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRowPermissionResponse
   */
  async deleteRowPermissionWithOptions(tmpReq: $_model.DeleteRowPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRowPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRowPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteRowPermissionCommand)) {
      request.deleteRowPermissionCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteRowPermissionCommand, "DeleteRowPermissionCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteRowPermissionCommandShrink)) {
      body["DeleteRowPermissionCommand"] = request.deleteRowPermissionCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRowPermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRowPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRowPermissionResponse({}));
  }

  /**
   * 删除行级权限
   * 
   * @param request - DeleteRowPermissionRequest
   * @returns DeleteRowPermissionResponse
   */
  async deleteRowPermission(request: $_model.DeleteRowPermissionRequest): Promise<$_model.DeleteRowPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRowPermissionWithOptions(request, runtime);
  }

  /**
   * 删除数据分类。
   * 
   * @param tmpReq - DeleteSecurityClassifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityClassifyResponse
   */
  async deleteSecurityClassifyWithOptions(tmpReq: $_model.DeleteSecurityClassifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityClassifyResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSecurityClassifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityClassify",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityClassifyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityClassifyResponse({}));
  }

  /**
   * 删除数据分类。
   * 
   * @param request - DeleteSecurityClassifyRequest
   * @returns DeleteSecurityClassifyResponse
   */
  async deleteSecurityClassify(request: $_model.DeleteSecurityClassifyRequest): Promise<$_model.DeleteSecurityClassifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityClassifyWithOptions(request, runtime);
  }

  /**
   * 删除数据分类目录。
   * 
   * @param tmpReq - DeleteSecurityClassifyCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityClassifyCatalogResponse
   */
  async deleteSecurityClassifyCatalogWithOptions(tmpReq: $_model.DeleteSecurityClassifyCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityClassifyCatalogResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSecurityClassifyCatalogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityClassifyCatalog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityClassifyCatalogResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityClassifyCatalogResponse({}));
  }

  /**
   * 删除数据分类目录。
   * 
   * @param request - DeleteSecurityClassifyCatalogRequest
   * @returns DeleteSecurityClassifyCatalogResponse
   */
  async deleteSecurityClassifyCatalog(request: $_model.DeleteSecurityClassifyCatalogRequest): Promise<$_model.DeleteSecurityClassifyCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityClassifyCatalogWithOptions(request, runtime);
  }

  /**
   * 批量删除安全识别结果。
   * 
   * @param tmpReq - DeleteSecurityIdentifyResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityIdentifyResultsResponse
   */
  async deleteSecurityIdentifyResultsWithOptions(tmpReq: $_model.DeleteSecurityIdentifyResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityIdentifyResultsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSecurityIdentifyResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityIdentifyResults",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityIdentifyResultsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityIdentifyResultsResponse({}));
  }

  /**
   * 批量删除安全识别结果。
   * 
   * @param request - DeleteSecurityIdentifyResultsRequest
   * @returns DeleteSecurityIdentifyResultsResponse
   */
  async deleteSecurityIdentifyResults(request: $_model.DeleteSecurityIdentifyResultsRequest): Promise<$_model.DeleteSecurityIdentifyResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityIdentifyResultsWithOptions(request, runtime);
  }

  /**
   * 删除数据分级。
   * 
   * @param tmpReq - DeleteSecurityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityLevelResponse
   */
  async deleteSecurityLevelWithOptions(tmpReq: $_model.DeleteSecurityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityLevelResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSecurityLevelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityLevel",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityLevelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityLevelResponse({}));
  }

  /**
   * 删除数据分级。
   * 
   * @param request - DeleteSecurityLevelRequest
   * @returns DeleteSecurityLevelResponse
   */
  async deleteSecurityLevel(request: $_model.DeleteSecurityLevelRequest): Promise<$_model.DeleteSecurityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityLevelWithOptions(request, runtime);
  }

  /**
   * 删除标准。
   * 
   * @param tmpReq - DeleteStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardResponse
   */
  async deleteStandardWithOptions(tmpReq: $_model.DeleteStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardResponse({}));
  }

  /**
   * 删除标准。
   * 
   * @param request - DeleteStandardRequest
   * @returns DeleteStandardResponse
   */
  async deleteStandard(request: $_model.DeleteStandardRequest): Promise<$_model.DeleteStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardWithOptions(request, runtime);
  }

  /**
   * 删除无效映射关系。
   * 
   * @param tmpReq - DeleteStandardInValidMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardInValidMappingResponse
   */
  async deleteStandardInValidMappingWithOptions(tmpReq: $_model.DeleteStandardInValidMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardInValidMappingResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteStandardInValidMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardInValidMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardInValidMappingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardInValidMappingResponse({}));
  }

  /**
   * 删除无效映射关系。
   * 
   * @param request - DeleteStandardInValidMappingRequest
   * @returns DeleteStandardInValidMappingResponse
   */
  async deleteStandardInValidMapping(request: $_model.DeleteStandardInValidMappingRequest): Promise<$_model.DeleteStandardInValidMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardInValidMappingWithOptions(request, runtime);
  }

  /**
   * 删除数据标准码表。
   * 
   * @param request - DeleteStandardLookupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardLookupTableResponse
   */
  async deleteStandardLookupTableWithOptions(request: $_model.DeleteStandardLookupTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardLookupTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardLookupTable",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardLookupTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardLookupTableResponse({}));
  }

  /**
   * 删除数据标准码表。
   * 
   * @param request - DeleteStandardLookupTableRequest
   * @returns DeleteStandardLookupTableResponse
   */
  async deleteStandardLookupTable(request: $_model.DeleteStandardLookupTableRequest): Promise<$_model.DeleteStandardLookupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardLookupTableWithOptions(request, runtime);
  }

  /**
   * 批量删除标准关联关系。
   * 
   * @param tmpReq - DeleteStandardRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardRelationsResponse
   */
  async deleteStandardRelationsWithOptions(tmpReq: $_model.DeleteStandardRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardRelationsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteStandardRelationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardRelations",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardRelationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardRelationsResponse({}));
  }

  /**
   * 批量删除标准关联关系。
   * 
   * @param request - DeleteStandardRelationsRequest
   * @returns DeleteStandardRelationsResponse
   */
  async deleteStandardRelations(request: $_model.DeleteStandardRelationsRequest): Promise<$_model.DeleteStandardRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardRelationsWithOptions(request, runtime);
  }

  /**
   * 删除标准集。
   * 
   * @param request - DeleteStandardSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardSetResponse
   */
  async deleteStandardSetWithOptions(request: $_model.DeleteStandardSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardSet",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardSetResponse({}));
  }

  /**
   * 删除标准集。
   * 
   * @param request - DeleteStandardSetRequest
   * @returns DeleteStandardSetResponse
   */
  async deleteStandardSet(request: $_model.DeleteStandardSetRequest): Promise<$_model.DeleteStandardSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardSetWithOptions(request, runtime);
  }

  /**
   * 删除有效映射关系。
   * 
   * @param tmpReq - DeleteStandardValidMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardValidMappingResponse
   */
  async deleteStandardValidMappingWithOptions(tmpReq: $_model.DeleteStandardValidMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardValidMappingResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteStandardValidMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardValidMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardValidMappingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardValidMappingResponse({}));
  }

  /**
   * 删除有效映射关系。
   * 
   * @param request - DeleteStandardValidMappingRequest
   * @returns DeleteStandardValidMappingResponse
   */
  async deleteStandardValidMapping(request: $_model.DeleteStandardValidMappingRequest): Promise<$_model.DeleteStandardValidMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardValidMappingWithOptions(request, runtime);
  }

  /**
   * 删除数据标准词根。
   * 
   * @param request - DeleteStandardWordRootRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardWordRootResponse
   */
  async deleteStandardWordRootWithOptions(request: $_model.DeleteStandardWordRootRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardWordRootResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardWordRoot",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardWordRootResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardWordRootResponse({}));
  }

  /**
   * 删除数据标准词根。
   * 
   * @param request - DeleteStandardWordRootRequest
   * @returns DeleteStandardWordRootResponse
   */
  async deleteStandardWordRoot(request: $_model.DeleteStandardWordRootRequest): Promise<$_model.DeleteStandardWordRootResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardWordRootWithOptions(request, runtime);
  }

  /**
   * 删除自定义函数。
   * 
   * @param request - DeleteUdfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfResponse
   */
  async deleteUdfWithOptions(request: $_model.DeleteUdfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUdfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdf",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUdfResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUdfResponse({}));
  }

  /**
   * 删除自定义函数。
   * 
   * @param request - DeleteUdfRequest
   * @returns DeleteUdfResponse
   */
  async deleteUdf(request: $_model.DeleteUdfRequest): Promise<$_model.DeleteUdfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUdfWithOptions(request, runtime);
  }

  /**
   * 删除用户组.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: $_model.DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupResponse({}));
  }

  /**
   * 删除用户组.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: $_model.DeleteUserGroupRequest): Promise<$_model.DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * 执行即席查询任务。
   * 
   * @param tmpReq - ExecuteAdHocTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAdHocTaskResponse
   */
  async executeAdHocTaskWithOptions(tmpReq: $_model.ExecuteAdHocTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAdHocTaskResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteAdHocTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.executeCommand)) {
      request.executeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeCommand, "ExecuteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executeCommandShrink)) {
      body["ExecuteCommand"] = request.executeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAdHocTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAdHocTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAdHocTaskResponse({}));
  }

  /**
   * 执行即席查询任务。
   * 
   * @param request - ExecuteAdHocTaskRequest
   * @returns ExecuteAdHocTaskResponse
   */
  async executeAdHocTask(request: $_model.ExecuteAdHocTaskRequest): Promise<$_model.ExecuteAdHocTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeAdHocTaskWithOptions(request, runtime);
  }

  /**
   * 运行手动调度节点。
   * 
   * @param tmpReq - ExecuteManualNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteManualNodeResponse
   */
  async executeManualNodeWithOptions(tmpReq: $_model.ExecuteManualNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteManualNodeResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteManualNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.executeCommand)) {
      request.executeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeCommand, "ExecuteCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executeCommandShrink)) {
      body["ExecuteCommand"] = request.executeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteManualNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteManualNodeResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteManualNodeResponse({}));
  }

  /**
   * 运行手动调度节点。
   * 
   * @param request - ExecuteManualNodeRequest
   * @returns ExecuteManualNodeResponse
   */
  async executeManualNode(request: $_model.ExecuteManualNodeRequest): Promise<$_model.ExecuteManualNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeManualNodeWithOptions(request, runtime);
  }

  /**
   * 运行触发式节点。
   * 
   * @param request - ExecuteTriggerNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTriggerNodeResponse
   */
  async executeTriggerNodeWithOptions(request: $_model.ExecuteTriggerNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTriggerNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizDate)) {
      query["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTriggerNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTriggerNodeResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTriggerNodeResponse({}));
  }

  /**
   * 运行触发式节点。
   * 
   * @param request - ExecuteTriggerNodeRequest
   * @returns ExecuteTriggerNodeResponse
   */
  async executeTriggerNode(request: $_model.ExecuteTriggerNodeRequest): Promise<$_model.ExecuteTriggerNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeTriggerNodeWithOptions(request, runtime);
  }

  /**
   * 重跑下游(修复链路数据), 支持强制重跑下游。影响范围: 1. 会产生计算成本；2. 会影响数据产出
   * 
   * @param tmpReq - FixDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FixDataResponse
   */
  async fixDataWithOptions(tmpReq: $_model.FixDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FixDataResponse> {
    tmpReq.validate();
    let request = new $_model.FixDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fixDataCommand)) {
      request.fixDataCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fixDataCommand, "FixDataCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fixDataCommandShrink)) {
      body["FixDataCommand"] = request.fixDataCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FixData",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FixDataResponse>(await this.callApi(params, req, runtime), new $_model.FixDataResponse({}));
  }

  /**
   * 重跑下游(修复链路数据), 支持强制重跑下游。影响范围: 1. 会产生计算成本；2. 会影响数据产出
   * 
   * @param request - FixDataRequest
   * @returns FixDataResponse
   */
  async fixData(request: $_model.FixDataRequest): Promise<$_model.FixDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fixDataWithOptions(request, runtime);
  }

  /**
   * 根据行级权限ID获取某一行级权限下的所有授权账号
   * 
   * @param tmpReq - GetAccountByRowPermissionIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountByRowPermissionIdResponse
   */
  async getAccountByRowPermissionIdWithOptions(tmpReq: $_model.GetAccountByRowPermissionIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountByRowPermissionIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetAccountByRowPermissionIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.getAccountByRowPermissionIdQuery)) {
      request.getAccountByRowPermissionIdQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.getAccountByRowPermissionIdQuery, "GetAccountByRowPermissionIdQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.getAccountByRowPermissionIdQueryShrink)) {
      body["GetAccountByRowPermissionIdQuery"] = request.getAccountByRowPermissionIdQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountByRowPermissionId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountByRowPermissionIdResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountByRowPermissionIdResponse({}));
  }

  /**
   * 根据行级权限ID获取某一行级权限下的所有授权账号
   * 
   * @param request - GetAccountByRowPermissionIdRequest
   * @returns GetAccountByRowPermissionIdResponse
   */
  async getAccountByRowPermissionId(request: $_model.GetAccountByRowPermissionIdRequest): Promise<$_model.GetAccountByRowPermissionIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountByRowPermissionIdWithOptions(request, runtime);
  }

  /**
   * 查询即席查询文件。
   * 
   * @param request - GetAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocFileResponse
   */
  async getAdHocFileWithOptions(request: $_model.GetAdHocFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdHocFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdHocFileResponse>(await this.callApi(params, req, runtime), new $_model.GetAdHocFileResponse({}));
  }

  /**
   * 查询即席查询文件。
   * 
   * @param request - GetAdHocFileRequest
   * @returns GetAdHocFileResponse
   */
  async getAdHocFile(request: $_model.GetAdHocFileRequest): Promise<$_model.GetAdHocFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdHocFileWithOptions(request, runtime);
  }

  /**
   * 获取即席查询任务运行日志。
   * 
   * @param request - GetAdHocTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocTaskLogResponse
   */
  async getAdHocTaskLogWithOptions(request: $_model.GetAdHocTaskLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdHocTaskLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subTaskId)) {
      query["SubTaskId"] = request.subTaskId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdHocTaskLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdHocTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.GetAdHocTaskLogResponse({}));
  }

  /**
   * 获取即席查询任务运行日志。
   * 
   * @param request - GetAdHocTaskLogRequest
   * @returns GetAdHocTaskLogResponse
   */
  async getAdHocTaskLog(request: $_model.GetAdHocTaskLogRequest): Promise<$_model.GetAdHocTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdHocTaskLogWithOptions(request, runtime);
  }

  /**
   * 获取即席查询的任务运行结果。
   * 
   * @param request - GetAdHocTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocTaskResultResponse
   */
  async getAdHocTaskResultWithOptions(request: $_model.GetAdHocTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdHocTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subTaskId)) {
      query["SubTaskId"] = request.subTaskId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdHocTaskResult",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdHocTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAdHocTaskResultResponse({}));
  }

  /**
   * 获取即席查询的任务运行结果。
   * 
   * @param request - GetAdHocTaskResultRequest
   * @returns GetAdHocTaskResultResponse
   */
  async getAdHocTaskResult(request: $_model.GetAdHocTaskResultRequest): Promise<$_model.GetAdHocTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdHocTaskResultWithOptions(request, runtime);
  }

  /**
   * 获取告警事件详情
   * 
   * @param request - GetAlertEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertEventResponse
   */
  async getAlertEventWithOptions(request: $_model.GetAlertEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertEvent",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertEventResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertEventResponse({}));
  }

  /**
   * 获取告警事件详情
   * 
   * @param request - GetAlertEventRequest
   * @returns GetAlertEventResponse
   */
  async getAlertEvent(request: $_model.GetAlertEventRequest): Promise<$_model.GetAlertEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertEventWithOptions(request, runtime);
  }

  /**
   * 根据资产对象GUID查询映射关系。
   * 
   * @param tmpReq - GetAssetMappingRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssetMappingRelationsResponse
   */
  async getAssetMappingRelationsWithOptions(tmpReq: $_model.GetAssetMappingRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAssetMappingRelationsResponse> {
    tmpReq.validate();
    let request = new $_model.GetAssetMappingRelationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetMappingQuery)) {
      request.assetMappingQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetMappingQuery, "AssetMappingQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetMappingQueryShrink)) {
      body["AssetMappingQuery"] = request.assetMappingQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAssetMappingRelations",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssetMappingRelationsResponse>(await this.callApi(params, req, runtime), new $_model.GetAssetMappingRelationsResponse({}));
  }

  /**
   * 根据资产对象GUID查询映射关系。
   * 
   * @param request - GetAssetMappingRelationsRequest
   * @returns GetAssetMappingRelationsResponse
   */
  async getAssetMappingRelations(request: $_model.GetAssetMappingRelationsRequest): Promise<$_model.GetAssetMappingRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAssetMappingRelationsWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务详情。
   * 
   * @param request - GetBatchTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskInfoResponse
   */
  async getBatchTaskInfoWithOptions(request: $_model.GetBatchTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.includeAllUpStreams)) {
      query["IncludeAllUpStreams"] = request.includeAllUpStreams;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTaskInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTaskInfoResponse({}));
  }

  /**
   * 获取离线计算任务详情。
   * 
   * @param request - GetBatchTaskInfoRequest
   * @returns GetBatchTaskInfoResponse
   */
  async getBatchTaskInfo(request: $_model.GetBatchTaskInfoRequest): Promise<$_model.GetBatchTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTaskInfoWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务指定版本任务详情。
   * 
   * @param request - GetBatchTaskInfoByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskInfoByVersionResponse
   */
  async getBatchTaskInfoByVersionWithOptions(request: $_model.GetBatchTaskInfoByVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTaskInfoByVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTaskInfoByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTaskInfoByVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTaskInfoByVersionResponse({}));
  }

  /**
   * 获取离线计算任务指定版本任务详情。
   * 
   * @param request - GetBatchTaskInfoByVersionRequest
   * @returns GetBatchTaskInfoByVersionResponse
   */
  async getBatchTaskInfoByVersion(request: $_model.GetBatchTaskInfoByVersionRequest): Promise<$_model.GetBatchTaskInfoByVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTaskInfoByVersionWithOptions(request, runtime);
  }

  /**
   * 获取离线任务自定义血缘。
   * 
   * @param request - GetBatchTaskUdfLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskUdfLineagesResponse
   */
  async getBatchTaskUdfLineagesWithOptions(request: $_model.GetBatchTaskUdfLineagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTaskUdfLineagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTaskUdfLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTaskUdfLineagesResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTaskUdfLineagesResponse({}));
  }

  /**
   * 获取离线任务自定义血缘。
   * 
   * @param request - GetBatchTaskUdfLineagesRequest
   * @returns GetBatchTaskUdfLineagesResponse
   */
  async getBatchTaskUdfLineages(request: $_model.GetBatchTaskUdfLineagesRequest): Promise<$_model.GetBatchTaskUdfLineagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTaskUdfLineagesWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务版本列表。
   * 
   * @param request - GetBatchTaskVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskVersionsResponse
   */
  async getBatchTaskVersionsWithOptions(request: $_model.GetBatchTaskVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTaskVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTaskVersions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTaskVersionsResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTaskVersionsResponse({}));
  }

  /**
   * 获取离线计算任务版本列表。
   * 
   * @param request - GetBatchTaskVersionsRequest
   * @returns GetBatchTaskVersionsResponse
   */
  async getBatchTaskVersions(request: $_model.GetBatchTaskVersionsRequest): Promise<$_model.GetBatchTaskVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTaskVersionsWithOptions(request, runtime);
  }

  /**
   * 根据归属资产GUID查询映射关系。
   * 
   * @param tmpReq - GetBelongAssetMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBelongAssetMappingResponse
   */
  async getBelongAssetMappingWithOptions(tmpReq: $_model.GetBelongAssetMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBelongAssetMappingResponse> {
    tmpReq.validate();
    let request = new $_model.GetBelongAssetMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetMappingQuery)) {
      request.assetMappingQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetMappingQuery, "AssetMappingQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetMappingQueryShrink)) {
      body["AssetMappingQuery"] = request.assetMappingQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBelongAssetMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBelongAssetMappingResponse>(await this.callApi(params, req, runtime), new $_model.GetBelongAssetMappingResponse({}));
  }

  /**
   * 根据归属资产GUID查询映射关系。
   * 
   * @param request - GetBelongAssetMappingRequest
   * @returns GetBelongAssetMappingResponse
   */
  async getBelongAssetMapping(request: $_model.GetBelongAssetMappingRequest): Promise<$_model.GetBelongAssetMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBelongAssetMappingWithOptions(request, runtime);
  }

  /**
   * 获取业务实体详情。
   * 
   * @param request - GetBizEntityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizEntityInfoResponse
   */
  async getBizEntityInfoWithOptions(request: $_model.GetBizEntityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBizEntityInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBizEntityInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBizEntityInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetBizEntityInfoResponse({}));
  }

  /**
   * 获取业务实体详情。
   * 
   * @param request - GetBizEntityInfoRequest
   * @returns GetBizEntityInfoResponse
   */
  async getBizEntityInfo(request: $_model.GetBizEntityInfoRequest): Promise<$_model.GetBizEntityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBizEntityInfoWithOptions(request, runtime);
  }

  /**
   * 查询指定版本的业务实体的详情。
   * 
   * @param request - GetBizEntityInfoByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizEntityInfoByVersionResponse
   */
  async getBizEntityInfoByVersionWithOptions(request: $_model.GetBizEntityInfoByVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBizEntityInfoByVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBizEntityInfoByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBizEntityInfoByVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetBizEntityInfoByVersionResponse({}));
  }

  /**
   * 查询指定版本的业务实体的详情。
   * 
   * @param request - GetBizEntityInfoByVersionRequest
   * @returns GetBizEntityInfoByVersionResponse
   */
  async getBizEntityInfoByVersion(request: $_model.GetBizEntityInfoByVersionRequest): Promise<$_model.GetBizEntityInfoByVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBizEntityInfoByVersionWithOptions(request, runtime);
  }

  /**
   * 查询业务指标详情
   * 
   * @param tmpReq - GetBizMetricByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizMetricByNameResponse
   */
  async getBizMetricByNameWithOptions(tmpReq: $_model.GetBizMetricByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBizMetricByNameResponse> {
    tmpReq.validate();
    let request = new $_model.GetBizMetricByNameShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizMetricByNameQuery)) {
      request.bizMetricByNameQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizMetricByNameQuery, "BizMetricByNameQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizMetricByNameQueryShrink)) {
      body["BizMetricByNameQuery"] = request.bizMetricByNameQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBizMetricByName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBizMetricByNameResponse>(await this.callApi(params, req, runtime), new $_model.GetBizMetricByNameResponse({}));
  }

  /**
   * 查询业务指标详情
   * 
   * @param request - GetBizMetricByNameRequest
   * @returns GetBizMetricByNameResponse
   */
  async getBizMetricByName(request: $_model.GetBizMetricByNameRequest): Promise<$_model.GetBizMetricByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBizMetricByNameWithOptions(request, runtime);
  }

  /**
   * 获取数据板块详情。
   * 
   * @param request - GetBizUnitInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizUnitInfoResponse
   */
  async getBizUnitInfoWithOptions(request: $_model.GetBizUnitInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBizUnitInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBizUnitInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBizUnitInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetBizUnitInfoResponse({}));
  }

  /**
   * 获取数据板块详情。
   * 
   * @param request - GetBizUnitInfoRequest
   * @returns GetBizUnitInfoResponse
   */
  async getBizUnitInfo(request: $_model.GetBizUnitInfoRequest): Promise<$_model.GetBizUnitInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBizUnitInfoWithOptions(request, runtime);
  }

  /**
   * 查询数据源连通性检查任务。
   * 
   * @param request - GetCheckConnectivityJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCheckConnectivityJobsResponse
   */
  async getCheckConnectivityJobsWithOptions(request: $_model.GetCheckConnectivityJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCheckConnectivityJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCheckConnectivityJobs",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCheckConnectivityJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetCheckConnectivityJobsResponse({}));
  }

  /**
   * 查询数据源连通性检查任务。
   * 
   * @param request - GetCheckConnectivityJobsRequest
   * @returns GetCheckConnectivityJobsResponse
   */
  async getCheckConnectivityJobs(request: $_model.GetCheckConnectivityJobsRequest): Promise<$_model.GetCheckConnectivityJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCheckConnectivityJobsWithOptions(request, runtime);
  }

  /**
   * 根据环境获取集群信息
   * 
   * @param request - GetClusterQueueInfoByEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterQueueInfoByEnvResponse
   */
  async getClusterQueueInfoByEnvWithOptions(request: $_model.GetClusterQueueInfoByEnvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterQueueInfoByEnvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.streamBatchMode)) {
      query["StreamBatchMode"] = request.streamBatchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterQueueInfoByEnv",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterQueueInfoByEnvResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterQueueInfoByEnvResponse({}));
  }

  /**
   * 根据环境获取集群信息
   * 
   * @param request - GetClusterQueueInfoByEnvRequest
   * @returns GetClusterQueueInfoByEnvResponse
   */
  async getClusterQueueInfoByEnv(request: $_model.GetClusterQueueInfoByEnvRequest): Promise<$_model.GetClusterQueueInfoByEnvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterQueueInfoByEnvWithOptions(request, runtime);
  }

  /**
   * 获取计算源详情。
   * 
   * @param request - GetComputeSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeSourceResponse
   */
  async getComputeSourceWithOptions(request: $_model.GetComputeSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeSourceResponse({}));
  }

  /**
   * 获取计算源详情。
   * 
   * @param request - GetComputeSourceRequest
   * @returns GetComputeSourceResponse
   */
  async getComputeSource(request: $_model.GetComputeSourceRequest): Promise<$_model.GetComputeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComputeSourceWithOptions(request, runtime);
  }

  /**
   * 获取主题域详情。
   * 
   * @param request - GetDataDomainInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataDomainInfoResponse
   */
  async getDataDomainInfoWithOptions(request: $_model.GetDataDomainInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataDomainInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataDomainInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataDomainInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDataDomainInfoResponse({}));
  }

  /**
   * 获取主题域详情。
   * 
   * @param request - GetDataDomainInfoRequest
   * @returns GetDataDomainInfoResponse
   */
  async getDataDomainInfo(request: $_model.GetDataDomainInfoRequest): Promise<$_model.GetDataDomainInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataDomainInfoWithOptions(request, runtime);
  }

  /**
   * 运维监控Api调用汇总统计。
   * 
   * @param request - GetDataServiceApiCallSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiCallSummaryResponse
   */
  async getDataServiceApiCallSummaryWithOptions(request: $_model.GetDataServiceApiCallSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiCallSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiCallSummary",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiCallSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiCallSummaryResponse({}));
  }

  /**
   * 运维监控Api调用汇总统计。
   * 
   * @param request - GetDataServiceApiCallSummaryRequest
   * @returns GetDataServiceApiCallSummaryResponse
   */
  async getDataServiceApiCallSummary(request: $_model.GetDataServiceApiCallSummaryRequest): Promise<$_model.GetDataServiceApiCallSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiCallSummaryWithOptions(request, runtime);
  }

  /**
   * 运维监控Api访问趋势分析。
   * 
   * @param request - GetDataServiceApiCallTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiCallTrendResponse
   */
  async getDataServiceApiCallTrendWithOptions(request: $_model.GetDataServiceApiCallTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiCallTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiCallTrend",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiCallTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiCallTrendResponse({}));
  }

  /**
   * 运维监控Api访问趋势分析。
   * 
   * @param request - GetDataServiceApiCallTrendRequest
   * @returns GetDataServiceApiCallTrendResponse
   */
  async getDataServiceApiCallTrend(request: $_model.GetDataServiceApiCallTrendRequest): Promise<$_model.GetDataServiceApiCallTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiCallTrendWithOptions(request, runtime);
  }

  /**
   * 获取API文档。
   * 
   * @param request - GetDataServiceApiDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiDocumentResponse
   */
  async getDataServiceApiDocumentWithOptions(request: $_model.GetDataServiceApiDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiDocumentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiDocument",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiDocumentResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiDocumentResponse({}));
  }

  /**
   * 获取API文档。
   * 
   * @param request - GetDataServiceApiDocumentRequest
   * @returns GetDataServiceApiDocumentResponse
   */
  async getDataServiceApiDocument(request: $_model.GetDataServiceApiDocumentRequest): Promise<$_model.GetDataServiceApiDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiDocumentWithOptions(request, runtime);
  }

  /**
   * 获取API异常影响汇总。
   * 
   * @param request - GetDataServiceApiErrorImpactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiErrorImpactResponse
   */
  async getDataServiceApiErrorImpactWithOptions(request: $_model.GetDataServiceApiErrorImpactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiErrorImpactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiErrorImpact",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiErrorImpactResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiErrorImpactResponse({}));
  }

  /**
   * 获取API异常影响汇总。
   * 
   * @param request - GetDataServiceApiErrorImpactRequest
   * @returns GetDataServiceApiErrorImpactResponse
   */
  async getDataServiceApiErrorImpact(request: $_model.GetDataServiceApiErrorImpactRequest): Promise<$_model.GetDataServiceApiErrorImpactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiErrorImpactWithOptions(request, runtime);
  }

  /**
   * 查询数据服务API分组列表。
   * 
   * @param request - GetDataServiceApiGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiGroupsResponse
   */
  async getDataServiceApiGroupsWithOptions(request: $_model.GetDataServiceApiGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiGroups",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiGroupsResponse({}));
  }

  /**
   * 查询数据服务API分组列表。
   * 
   * @param request - GetDataServiceApiGroupsRequest
   * @returns GetDataServiceApiGroupsResponse
   */
  async getDataServiceApiGroups(request: $_model.GetDataServiceApiGroupsRequest): Promise<$_model.GetDataServiceApiGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiGroupsWithOptions(request, runtime);
  }

  /**
   * 获取应用有权限的用户列表。
   * 
   * @param request - GetDataServiceAppAuthorizedUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceAppAuthorizedUsersResponse
   */
  async getDataServiceAppAuthorizedUsersWithOptions(request: $_model.GetDataServiceAppAuthorizedUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceAppAuthorizedUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceAppAuthorizedUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceAppAuthorizedUsersResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceAppAuthorizedUsersResponse({}));
  }

  /**
   * 获取应用有权限的用户列表。
   * 
   * @param request - GetDataServiceAppAuthorizedUsersRequest
   * @returns GetDataServiceAppAuthorizedUsersResponse
   */
  async getDataServiceAppAuthorizedUsers(request: $_model.GetDataServiceAppAuthorizedUsersRequest): Promise<$_model.GetDataServiceAppAuthorizedUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceAppAuthorizedUsersWithOptions(request, runtime);
  }

  /**
   * 查询数据服务项目的应用分组列表。
   * 
   * @param request - GetDataServiceAppGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceAppGroupsResponse
   */
  async getDataServiceAppGroupsWithOptions(request: $_model.GetDataServiceAppGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceAppGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceAppGroups",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceAppGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceAppGroupsResponse({}));
  }

  /**
   * 查询数据服务项目的应用分组列表。
   * 
   * @param request - GetDataServiceAppGroupsRequest
   * @returns GetDataServiceAppGroupsResponse
   */
  async getDataServiceAppGroups(request: $_model.GetDataServiceAppGroupsRequest): Promise<$_model.GetDataServiceAppGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceAppGroupsWithOptions(request, runtime);
  }

  /**
   * 查询分组下应用列表。
   * 
   * @param request - GetDataServiceAppsByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceAppsByGroupIdResponse
   */
  async getDataServiceAppsByGroupIdWithOptions(request: $_model.GetDataServiceAppsByGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceAppsByGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceAppsByGroupId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceAppsByGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceAppsByGroupIdResponse({}));
  }

  /**
   * 查询分组下应用列表。
   * 
   * @param request - GetDataServiceAppsByGroupIdRequest
   * @returns GetDataServiceAppsByGroupIdResponse
   */
  async getDataServiceAppsByGroupId(request: $_model.GetDataServiceAppsByGroupIdRequest): Promise<$_model.GetDataServiceAppsByGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceAppsByGroupIdWithOptions(request, runtime);
  }

  /**
   * 根据App分组Id查询账号有权限的应用列表。
   * 
   * @param request - GetDataServiceAuthorizedAppsByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceAuthorizedAppsByGroupIdResponse
   */
  async getDataServiceAuthorizedAppsByGroupIdWithOptions(request: $_model.GetDataServiceAuthorizedAppsByGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceAuthorizedAppsByGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceAuthorizedAppsByGroupId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceAuthorizedAppsByGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceAuthorizedAppsByGroupIdResponse({}));
  }

  /**
   * 根据App分组Id查询账号有权限的应用列表。
   * 
   * @param request - GetDataServiceAuthorizedAppsByGroupIdRequest
   * @returns GetDataServiceAuthorizedAppsByGroupIdResponse
   */
  async getDataServiceAuthorizedAppsByGroupId(request: $_model.GetDataServiceAuthorizedAppsByGroupIdRequest): Promise<$_model.GetDataServiceAuthorizedAppsByGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceAuthorizedAppsByGroupIdWithOptions(request, runtime);
  }

  /**
   * 查询有权限的项目列表。
   * 
   * @param request - GetDataServiceAuthorizedProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceAuthorizedProjectsResponse
   */
  async getDataServiceAuthorizedProjectsWithOptions(request: $_model.GetDataServiceAuthorizedProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceAuthorizedProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceAuthorizedProjects",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceAuthorizedProjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceAuthorizedProjectsResponse({}));
  }

  /**
   * 查询有权限的项目列表。
   * 
   * @param request - GetDataServiceAuthorizedProjectsRequest
   * @returns GetDataServiceAuthorizedProjectsResponse
   */
  async getDataServiceAuthorizedProjects(request: $_model.GetDataServiceAuthorizedProjectsRequest): Promise<$_model.GetDataServiceAuthorizedProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceAuthorizedProjectsWithOptions(request, runtime);
  }

  /**
   * 当前登录当前用户作为负责人的项目列表。
   * 
   * @param request - GetDataServiceMyProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceMyProjectsResponse
   */
  async getDataServiceMyProjectsWithOptions(request: $_model.GetDataServiceMyProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceMyProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceMyProjects",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceMyProjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceMyProjectsResponse({}));
  }

  /**
   * 当前登录当前用户作为负责人的项目列表。
   * 
   * @param request - GetDataServiceMyProjectsRequest
   * @returns GetDataServiceMyProjectsResponse
   */
  async getDataServiceMyProjects(request: $_model.GetDataServiceMyProjectsRequest): Promise<$_model.GetDataServiceMyProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceMyProjectsWithOptions(request, runtime);
  }

  /**
   * 获取可添加到项目成员的用户列表。
   * 
   * @param request - GetDataServiceProjectAddableUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceProjectAddableUsersResponse
   */
  async getDataServiceProjectAddableUsersWithOptions(request: $_model.GetDataServiceProjectAddableUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceProjectAddableUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceProjectAddableUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceProjectAddableUsersResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceProjectAddableUsersResponse({}));
  }

  /**
   * 获取可添加到项目成员的用户列表。
   * 
   * @param request - GetDataServiceProjectAddableUsersRequest
   * @returns GetDataServiceProjectAddableUsersResponse
   */
  async getDataServiceProjectAddableUsers(request: $_model.GetDataServiceProjectAddableUsersRequest): Promise<$_model.GetDataServiceProjectAddableUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceProjectAddableUsersWithOptions(request, runtime);
  }

  /**
   * 查询数据源变更影响的集成任务及数据库SQL任务。
   * 
   * @param request - GetDataSourceDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceDependenciesResponse
   */
  async getDataSourceDependenciesWithOptions(request: $_model.GetDataSourceDependenciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceDependenciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceDependencies",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceDependenciesResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceDependenciesResponse({}));
  }

  /**
   * 查询数据源变更影响的集成任务及数据库SQL任务。
   * 
   * @param request - GetDataSourceDependenciesRequest
   * @returns GetDataSourceDependenciesResponse
   */
  async getDataSourceDependencies(request: $_model.GetDataSourceDependenciesRequest): Promise<$_model.GetDataSourceDependenciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceDependenciesWithOptions(request, runtime);
  }

  /**
   * 查询开发态对象上游依赖。
   * 
   * @param request - GetDevObjectDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDevObjectDependencyResponse
   */
  async getDevObjectDependencyWithOptions(request: $_model.GetDevObjectDependencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDevObjectDependencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectFrom)) {
      query["ObjectFrom"] = request.objectFrom;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDevObjectDependency",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDevObjectDependencyResponse>(await this.callApi(params, req, runtime), new $_model.GetDevObjectDependencyResponse({}));
  }

  /**
   * 查询开发态对象上游依赖。
   * 
   * @param request - GetDevObjectDependencyRequest
   * @returns GetDevObjectDependencyResponse
   */
  async getDevObjectDependency(request: $_model.GetDevObjectDependencyRequest): Promise<$_model.GetDevObjectDependencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDevObjectDependencyWithOptions(request, runtime);
  }

  /**
   * 获取文件夹目录树
   * 
   * @param request - GetDirectoryTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryTreeResponse
   */
  async getDirectoryTreeWithOptions(request: $_model.GetDirectoryTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectoryTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectoryTree",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectoryTreeResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectoryTreeResponse({}));
  }

  /**
   * 获取文件夹目录树
   * 
   * @param request - GetDirectoryTreeRequest
   * @returns GetDirectoryTreeResponse
   */
  async getDirectoryTree(request: $_model.GetDirectoryTreeRequest): Promise<$_model.GetDirectoryTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryTreeWithOptions(request, runtime);
  }

  /**
   * 获取文件存储临时读写授权。
   * 
   * @param request - GetFileStorageCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileStorageCredentialResponse
   */
  async getFileStorageCredentialWithOptions(request: $_model.GetFileStorageCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileStorageCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.purpose)) {
      query["Purpose"] = request.purpose;
    }

    if (!$dara.isNull(request.useVpcEndpoint)) {
      query["UseVpcEndpoint"] = request.useVpcEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileStorageCredential",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileStorageCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetFileStorageCredentialResponse({}));
  }

  /**
   * 获取文件存储临时读写授权。
   * 
   * @param request - GetFileStorageCredentialRequest
   * @returns GetFileStorageCredentialResponse
   */
  async getFileStorageCredential(request: $_model.GetFileStorageCredentialRequest): Promise<$_model.GetFileStorageCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileStorageCredentialWithOptions(request, runtime);
  }

  /**
   * 根据起始的实例查询该实例的下游
   * 
   * @param tmpReq - GetInstanceDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceDownStreamResponse
   */
  async getInstanceDownStreamWithOptions(tmpReq: $_model.GetInstanceDownStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceDownStreamResponse> {
    tmpReq.validate();
    let request = new $_model.GetInstanceDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceGet)) {
      request.instanceGetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceGet, "InstanceGet", "json");
    }

    let query = { };
    if (!$dara.isNull(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.runStatus)) {
      query["RunStatus"] = request.runStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceGetShrink)) {
      body["InstanceGet"] = request.instanceGetShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceDownStreamResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceDownStreamResponse({}));
  }

  /**
   * 根据起始的实例查询该实例的下游
   * 
   * @param request - GetInstanceDownStreamRequest
   * @returns GetInstanceDownStreamResponse
   */
  async getInstanceDownStream(request: $_model.GetInstanceDownStreamRequest): Promise<$_model.GetInstanceDownStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询实例的上下游，支持逻辑表和代码任务。
   * 
   * @param tmpReq - GetInstanceUpDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceUpDownStreamResponse
   */
  async getInstanceUpDownStreamWithOptions(tmpReq: $_model.GetInstanceUpDownStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceUpDownStreamResponse> {
    tmpReq.validate();
    let request = new $_model.GetInstanceUpDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceId)) {
      request.instanceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceId, "InstanceId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.upStreamDepth)) {
      query["UpStreamDepth"] = request.upStreamDepth;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIdShrink)) {
      body["InstanceId"] = request.instanceIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceUpDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceUpDownStreamResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceUpDownStreamResponse({}));
  }

  /**
   * 查询实例的上下游，支持逻辑表和代码任务。
   * 
   * @param request - GetInstanceUpDownStreamRequest
   * @returns GetInstanceUpDownStreamResponse
   */
  async getInstanceUpDownStream(request: $_model.GetInstanceUpDownStreamRequest): Promise<$_model.GetInstanceUpDownStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceUpDownStreamWithOptions(request, runtime);
  }

  /**
   * 获取最新的待发布记录详情
   * 
   * @param tmpReq - GetLatestSubmitDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestSubmitDetailResponse
   */
  async getLatestSubmitDetailWithOptions(tmpReq: $_model.GetLatestSubmitDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLatestSubmitDetailResponse> {
    tmpReq.validate();
    let request = new $_model.GetLatestSubmitDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.submitDetailQuery)) {
      request.submitDetailQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitDetailQuery, "SubmitDetailQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.submitDetailQueryShrink)) {
      body["SubmitDetailQuery"] = request.submitDetailQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLatestSubmitDetail",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLatestSubmitDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetLatestSubmitDetailResponse({}));
  }

  /**
   * 获取最新的待发布记录详情
   * 
   * @param request - GetLatestSubmitDetailRequest
   * @returns GetLatestSubmitDetailResponse
   */
  async getLatestSubmitDetail(request: $_model.GetLatestSubmitDetailRequest): Promise<$_model.GetLatestSubmitDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLatestSubmitDetailWithOptions(request, runtime);
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - GetMyRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMyRolesResponse
   */
  async getMyRolesWithOptions(request: $_model.GetMyRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMyRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMyRoles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMyRolesResponse>(await this.callApi(params, req, runtime), new $_model.GetMyRolesResponse({}));
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - GetMyRolesRequest
   * @returns GetMyRolesResponse
   */
  async getMyRoles(request: $_model.GetMyRolesRequest): Promise<$_model.GetMyRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMyRolesWithOptions(request, runtime);
  }

  /**
   * 获取当前用户归属租户.
   * 
   * @param tmpReq - GetMyTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMyTenantsResponse
   */
  async getMyTenantsWithOptions(tmpReq: $_model.GetMyTenantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMyTenantsResponse> {
    tmpReq.validate();
    let request = new $_model.GetMyTenantsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.featureCodeList)) {
      request.featureCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureCodeList, "FeatureCodeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureCodeListShrink)) {
      body["FeatureCodeList"] = request.featureCodeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMyTenants",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMyTenantsResponse>(await this.callApi(params, req, runtime), new $_model.GetMyTenantsResponse({}));
  }

  /**
   * 获取当前用户归属租户.
   * 
   * @param request - GetMyTenantsRequest
   * @returns GetMyTenantsResponse
   */
  async getMyTenants(request: $_model.GetMyTenantsRequest): Promise<$_model.GetMyTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMyTenantsWithOptions(request, runtime);
  }

  /**
   * 通用查询节点上下游接口
   * 
   * @param tmpReq - GetNodeUpDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeUpDownStreamResponse
   */
  async getNodeUpDownStreamWithOptions(tmpReq: $_model.GetNodeUpDownStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeUpDownStreamResponse> {
    tmpReq.validate();
    let request = new $_model.GetNodeUpDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeId)) {
      request.nodeIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeId, "NodeId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.upStreamDepth)) {
      query["UpStreamDepth"] = request.upStreamDepth;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeIdShrink)) {
      body["NodeId"] = request.nodeIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeUpDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeUpDownStreamResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeUpDownStreamResponse({}));
  }

  /**
   * 通用查询节点上下游接口
   * 
   * @param request - GetNodeUpDownStreamRequest
   * @returns GetNodeUpDownStreamResponse
   */
  async getNodeUpDownStream(request: $_model.GetNodeUpDownStreamRequest): Promise<$_model.GetNodeUpDownStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeUpDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询补数据提交的状态
   * 
   * @param request - GetOperationSubmitStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOperationSubmitStatusResponse
   */
  async getOperationSubmitStatusWithOptions(request: $_model.GetOperationSubmitStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOperationSubmitStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOperationSubmitStatus",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOperationSubmitStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetOperationSubmitStatusResponse({}));
  }

  /**
   * 查询补数据提交的状态
   * 
   * @param request - GetOperationSubmitStatusRequest
   * @returns GetOperationSubmitStatusResponse
   */
  async getOperationSubmitStatus(request: $_model.GetOperationSubmitStatusRequest): Promise<$_model.GetOperationSubmitStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOperationSubmitStatusWithOptions(request, runtime);
  }

  /**
   * 查询脚本的实例信息, 包括实例状态、运行时间等信息.
   * 
   * @param request - GetPhysicalInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalInstanceResponse
   */
  async getPhysicalInstanceWithOptions(request: $_model.GetPhysicalInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalInstanceResponse({}));
  }

  /**
   * 查询脚本的实例信息, 包括实例状态、运行时间等信息.
   * 
   * @param request - GetPhysicalInstanceRequest
   * @returns GetPhysicalInstanceResponse
   */
  async getPhysicalInstance(request: $_model.GetPhysicalInstanceRequest): Promise<$_model.GetPhysicalInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalInstanceWithOptions(request, runtime);
  }

  /**
   * 获取实例执行的日志，如果实例重跑了多次，则会有多条日志
   * 
   * @param request - GetPhysicalInstanceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalInstanceLogResponse
   */
  async getPhysicalInstanceLogWithOptions(request: $_model.GetPhysicalInstanceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalInstanceLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalInstanceLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalInstanceLogResponse({}));
  }

  /**
   * 获取实例执行的日志，如果实例重跑了多次，则会有多条日志
   * 
   * @param request - GetPhysicalInstanceLogRequest
   * @returns GetPhysicalInstanceLogResponse
   */
  async getPhysicalInstanceLog(request: $_model.GetPhysicalInstanceLogRequest): Promise<$_model.GetPhysicalInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalInstanceLogWithOptions(request, runtime);
  }

  /**
   * 查询物理调度节点。
   * 
   * @param request - GetPhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeResponse
   */
  async getPhysicalNodeWithOptions(request: $_model.GetPhysicalNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalNodeResponse({}));
  }

  /**
   * 查询物理调度节点。
   * 
   * @param request - GetPhysicalNodeRequest
   * @returns GetPhysicalNodeResponse
   */
  async getPhysicalNode(request: $_model.GetPhysicalNodeRequest): Promise<$_model.GetPhysicalNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 根据输出名查询对应的物理节点。
   * 
   * @param request - GetPhysicalNodeByOutputNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeByOutputNameResponse
   */
  async getPhysicalNodeByOutputNameWithOptions(request: $_model.GetPhysicalNodeByOutputNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalNodeByOutputNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalNodeByOutputName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalNodeByOutputNameResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalNodeByOutputNameResponse({}));
  }

  /**
   * 根据输出名查询对应的物理节点。
   * 
   * @param request - GetPhysicalNodeByOutputNameRequest
   * @returns GetPhysicalNodeByOutputNameResponse
   */
  async getPhysicalNodeByOutputName(request: $_model.GetPhysicalNodeByOutputNameRequest): Promise<$_model.GetPhysicalNodeByOutputNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalNodeByOutputNameWithOptions(request, runtime);
  }

  /**
   * 查询调度节点代码内容。
   * 
   * @param request - GetPhysicalNodeContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeContentResponse
   */
  async getPhysicalNodeContentWithOptions(request: $_model.GetPhysicalNodeContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalNodeContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalNodeContent",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalNodeContentResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalNodeContentResponse({}));
  }

  /**
   * 查询调度节点代码内容。
   * 
   * @param request - GetPhysicalNodeContentRequest
   * @returns GetPhysicalNodeContentResponse
   */
  async getPhysicalNodeContent(request: $_model.GetPhysicalNodeContentRequest): Promise<$_model.GetPhysicalNodeContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalNodeContentWithOptions(request, runtime);
  }

  /**
   * 查询节点的操作日志。
   * 
   * @param request - GetPhysicalNodeOperationLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeOperationLogResponse
   */
  async getPhysicalNodeOperationLogWithOptions(request: $_model.GetPhysicalNodeOperationLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalNodeOperationLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalNodeOperationLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalNodeOperationLogResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalNodeOperationLogResponse({}));
  }

  /**
   * 查询节点的操作日志。
   * 
   * @param request - GetPhysicalNodeOperationLogRequest
   * @returns GetPhysicalNodeOperationLogResponse
   */
  async getPhysicalNodeOperationLog(request: $_model.GetPhysicalNodeOperationLogRequest): Promise<$_model.GetPhysicalNodeOperationLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalNodeOperationLogWithOptions(request, runtime);
  }

  /**
   * 查询异步操作管道任务的执行结果。
   * 
   * @param tmpReq - GetPipelineAsyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineAsyncResultResponse
   */
  async getPipelineAsyncResultWithOptions(tmpReq: $_model.GetPipelineAsyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineAsyncResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetPipelineAsyncResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    let query = { };
    if (!$dara.isNull(request.asyncId)) {
      query["AsyncId"] = request.asyncId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineAsyncResult",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineAsyncResultResponse({}));
  }

  /**
   * 查询异步操作管道任务的执行结果。
   * 
   * @param request - GetPipelineAsyncResultRequest
   * @returns GetPipelineAsyncResultResponse
   */
  async getPipelineAsyncResult(request: $_model.GetPipelineAsyncResultRequest): Promise<$_model.GetPipelineAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPipelineAsyncResultWithOptions(request, runtime);
  }

  /**
   * 根据管道任务id查询管道任务。
   * 
   * @param tmpReq - GetPipelineByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineByIdResponse
   */
  async getPipelineByIdWithOptions(tmpReq: $_model.GetPipelineByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineByIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetPipelineByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.queryId)) {
      request.queryIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryId, "QueryId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.queryIdShrink)) {
      body["QueryId"] = request.queryIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineById",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineByIdResponse({}));
  }

  /**
   * 根据管道任务id查询管道任务。
   * 
   * @param request - GetPipelineByIdRequest
   * @returns GetPipelineByIdResponse
   */
  async getPipelineById(request: $_model.GetPipelineByIdRequest): Promise<$_model.GetPipelineByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPipelineByIdWithOptions(request, runtime);
  }

  /**
   * 获取项目详情。
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * 获取项目详情。
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * 通过项目名获取项目详情。
   * 
   * @param request - GetProjectByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectByNameResponse
   */
  async getProjectByNameWithOptions(request: $_model.GetProjectByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectByName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectByNameResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectByNameResponse({}));
  }

  /**
   * 通过项目名获取项目详情。
   * 
   * @param request - GetProjectByNameRequest
   * @returns GetProjectByNameResponse
   */
  async getProjectByName(request: $_model.GetProjectByNameRequest): Promise<$_model.GetProjectByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectByNameWithOptions(request, runtime);
  }

  /**
   * 获取项目生产账号
   * 
   * @param request - GetProjectProduceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectProduceUserResponse
   */
  async getProjectProduceUserWithOptions(request: $_model.GetProjectProduceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectProduceUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectProduceUser",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectProduceUserResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectProduceUserResponse({}));
  }

  /**
   * 获取项目生产账号
   * 
   * @param request - GetProjectProduceUserRequest
   * @returns GetProjectProduceUserResponse
   */
  async getProjectProduceUser(request: $_model.GetProjectProduceUserRequest): Promise<$_model.GetProjectProduceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectProduceUserWithOptions(request, runtime);
  }

  /**
   * 获取项目白名单。
   * 
   * @param request - GetProjectWhiteListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectWhiteListsResponse
   */
  async getProjectWhiteListsWithOptions(request: $_model.GetProjectWhiteListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectWhiteListsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectWhiteLists",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectWhiteListsResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectWhiteListsResponse({}));
  }

  /**
   * 获取项目白名单。
   * 
   * @param request - GetProjectWhiteListsRequest
   * @returns GetProjectWhiteListsResponse
   */
  async getProjectWhiteLists(request: $_model.GetProjectWhiteListsRequest): Promise<$_model.GetProjectWhiteListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWhiteListsWithOptions(request, runtime);
  }

  /**
   * 通过监控对象ID获取告警设置。
   * 
   * @param request - GetQualityAlertOfAllRuleScopeByWatchIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityAlertOfAllRuleScopeByWatchIdResponse
   */
  async getQualityAlertOfAllRuleScopeByWatchIdWithOptions(request: $_model.GetQualityAlertOfAllRuleScopeByWatchIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityAlertOfAllRuleScopeByWatchIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.watchId)) {
      query["WatchId"] = request.watchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityAlertOfAllRuleScopeByWatchId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityAlertOfAllRuleScopeByWatchIdResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityAlertOfAllRuleScopeByWatchIdResponse({}));
  }

  /**
   * 通过监控对象ID获取告警设置。
   * 
   * @param request - GetQualityAlertOfAllRuleScopeByWatchIdRequest
   * @returns GetQualityAlertOfAllRuleScopeByWatchIdResponse
   */
  async getQualityAlertOfAllRuleScopeByWatchId(request: $_model.GetQualityAlertOfAllRuleScopeByWatchIdRequest): Promise<$_model.GetQualityAlertOfAllRuleScopeByWatchIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityAlertOfAllRuleScopeByWatchIdWithOptions(request, runtime);
  }

  /**
   * 获取质量规则对象。
   * 
   * @param request - GetQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleResponse
   */
  async getQualityRuleWithOptions(request: $_model.GetQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRule",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleResponse({}));
  }

  /**
   * 获取质量规则对象。
   * 
   * @param request - GetQualityRuleRequest
   * @returns GetQualityRuleResponse
   */
  async getQualityRule(request: $_model.GetQualityRuleRequest): Promise<$_model.GetQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleWithOptions(request, runtime);
  }

  /**
   * 获取质量任务对象详情。
   * 
   * @param request - GetQualityRuleTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleTaskResponse
   */
  async getQualityRuleTaskWithOptions(request: $_model.GetQualityRuleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.ruleTaskId)) {
      query["RuleTaskId"] = request.ruleTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleTaskResponse({}));
  }

  /**
   * 获取质量任务对象详情。
   * 
   * @param request - GetQualityRuleTaskRequest
   * @returns GetQualityRuleTaskResponse
   */
  async getQualityRuleTask(request: $_model.GetQualityRuleTaskRequest): Promise<$_model.GetQualityRuleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleTaskWithOptions(request, runtime);
  }

  /**
   * 获取质量任务对象日志内容。
   * 
   * @param request - GetQualityRuleTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleTaskLogResponse
   */
  async getQualityRuleTaskLogWithOptions(request: $_model.GetQualityRuleTaskLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleTaskLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.ruleTaskId)) {
      query["RuleTaskId"] = request.ruleTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleTaskLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleTaskLogResponse({}));
  }

  /**
   * 获取质量任务对象日志内容。
   * 
   * @param request - GetQualityRuleTaskLogRequest
   * @returns GetQualityRuleTaskLogResponse
   */
  async getQualityRuleTaskLog(request: $_model.GetQualityRuleTaskLogRequest): Promise<$_model.GetQualityRuleTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleTaskLogWithOptions(request, runtime);
  }

  /**
   * 获取质量调度对象。
   * 
   * @param request - GetQualityScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityScheduleResponse
   */
  async getQualityScheduleWithOptions(request: $_model.GetQualityScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualitySchedule",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityScheduleResponse({}));
  }

  /**
   * 获取质量调度对象。
   * 
   * @param request - GetQualityScheduleRequest
   * @returns GetQualityScheduleResponse
   */
  async getQualitySchedule(request: $_model.GetQualityScheduleRequest): Promise<$_model.GetQualityScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityScheduleWithOptions(request, runtime);
  }

  /**
   * 通过监控对象ID获取调度设置列表。
   * 
   * @param request - GetQualitySchedulesByWatchIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualitySchedulesByWatchIdResponse
   */
  async getQualitySchedulesByWatchIdWithOptions(request: $_model.GetQualitySchedulesByWatchIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualitySchedulesByWatchIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.watchId)) {
      query["WatchId"] = request.watchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualitySchedulesByWatchId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualitySchedulesByWatchIdResponse>(await this.callApi(params, req, runtime), new $_model.GetQualitySchedulesByWatchIdResponse({}));
  }

  /**
   * 通过监控对象ID获取调度设置列表。
   * 
   * @param request - GetQualitySchedulesByWatchIdRequest
   * @returns GetQualitySchedulesByWatchIdResponse
   */
  async getQualitySchedulesByWatchId(request: $_model.GetQualitySchedulesByWatchIdRequest): Promise<$_model.GetQualitySchedulesByWatchIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualitySchedulesByWatchIdWithOptions(request, runtime);
  }

  /**
   * 获取质量模板对象。
   * 
   * @param request - GetQualityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityTemplateResponse
   */
  async getQualityTemplateWithOptions(request: $_model.GetQualityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityTemplate",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityTemplateResponse({}));
  }

  /**
   * 获取质量模板对象。
   * 
   * @param request - GetQualityTemplateRequest
   * @returns GetQualityTemplateResponse
   */
  async getQualityTemplate(request: $_model.GetQualityTemplateRequest): Promise<$_model.GetQualityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityTemplateWithOptions(request, runtime);
  }

  /**
   * 获取质量监控对象。
   * 
   * @param request - GetQualityWatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityWatchResponse
   */
  async getQualityWatchWithOptions(request: $_model.GetQualityWatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityWatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityWatch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityWatchResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityWatchResponse({}));
  }

  /**
   * 获取质量监控对象。
   * 
   * @param request - GetQualityWatchRequest
   * @returns GetQualityWatchResponse
   */
  async getQualityWatch(request: $_model.GetQualityWatchRequest): Promise<$_model.GetQualityWatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityWatchWithOptions(request, runtime);
  }

  /**
   * 通过监控对象原始ID获取监控对象记录，例如：数据源、表、指标等的ID。
   * 
   * @param request - GetQualityWatchByObjectIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityWatchByObjectIdResponse
   */
  async getQualityWatchByObjectIdWithOptions(request: $_model.GetQualityWatchByObjectIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityWatchByObjectIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.watchObjectId)) {
      query["WatchObjectId"] = request.watchObjectId;
    }

    if (!$dara.isNull(request.watchType)) {
      query["WatchType"] = request.watchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityWatchByObjectId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityWatchByObjectIdResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityWatchByObjectIdResponse({}));
  }

  /**
   * 通过监控对象原始ID获取监控对象记录，例如：数据源、表、指标等的ID。
   * 
   * @param request - GetQualityWatchByObjectIdRequest
   * @returns GetQualityWatchByObjectIdResponse
   */
  async getQualityWatchByObjectId(request: $_model.GetQualityWatchByObjectIdRequest): Promise<$_model.GetQualityWatchByObjectIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityWatchByObjectIdWithOptions(request, runtime);
  }

  /**
   * 获取监控任务对象。
   * 
   * @param request - GetQualityWatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityWatchTaskResponse
   */
  async getQualityWatchTaskWithOptions(request: $_model.GetQualityWatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityWatchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.watchTaskId)) {
      query["WatchTaskId"] = request.watchTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityWatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityWatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityWatchTaskResponse({}));
  }

  /**
   * 获取监控任务对象。
   * 
   * @param request - GetQualityWatchTaskRequest
   * @returns GetQualityWatchTaskResponse
   */
  async getQualityWatchTask(request: $_model.GetQualityWatchTaskRequest): Promise<$_model.GetQualityWatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityWatchTaskWithOptions(request, runtime);
  }

  /**
   * 获取监控任务对象的日志内容。
   * 
   * @param request - GetQualityWatchTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityWatchTaskLogResponse
   */
  async getQualityWatchTaskLogWithOptions(request: $_model.GetQualityWatchTaskLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityWatchTaskLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.watchTaskId)) {
      query["WatchTaskId"] = request.watchTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityWatchTaskLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityWatchTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityWatchTaskLogResponse({}));
  }

  /**
   * 获取监控任务对象的日志内容。
   * 
   * @param request - GetQualityWatchTaskLogRequest
   * @returns GetQualityWatchTaskLogResponse
   */
  async getQualityWatchTaskLog(request: $_model.GetQualityWatchTaskLogRequest): Promise<$_model.GetQualityWatchTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityWatchTaskLogWithOptions(request, runtime);
  }

  /**
   * 根据集群ID获取集群版本
   * 
   * @param request - GetQueueEngineVersionByEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueEngineVersionByEnvResponse
   */
  async getQueueEngineVersionByEnvWithOptions(request: $_model.GetQueueEngineVersionByEnvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueEngineVersionByEnvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.streamBatchMode)) {
      query["StreamBatchMode"] = request.streamBatchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueEngineVersionByEnv",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueEngineVersionByEnvResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueEngineVersionByEnvResponse({}));
  }

  /**
   * 根据集群ID获取集群版本
   * 
   * @param request - GetQueueEngineVersionByEnvRequest
   * @returns GetQueueEngineVersionByEnvResponse
   */
  async getQueueEngineVersionByEnv(request: $_model.GetQueueEngineVersionByEnvRequest): Promise<$_model.GetQueueEngineVersionByEnvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueEngineVersionByEnvWithOptions(request, runtime);
  }

  /**
   * 获取资源文件详情。
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: $_model.GetResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceResponse({}));
  }

  /**
   * 获取资源文件详情。
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: $_model.GetResourceRequest): Promise<$_model.GetResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * 获取资源文件指定版本详情。
   * 
   * @param request - GetResourceByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceByVersionResponse
   */
  async getResourceByVersionWithOptions(request: $_model.GetResourceByVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceByVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceByVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceByVersionResponse({}));
  }

  /**
   * 获取资源文件指定版本详情。
   * 
   * @param request - GetResourceByVersionRequest
   * @returns GetResourceByVersionResponse
   */
  async getResourceByVersion(request: $_model.GetResourceByVersionRequest): Promise<$_model.GetResourceByVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceByVersionWithOptions(request, runtime);
  }

  /**
   * 获取数据分类详情。
   * 
   * @param request - GetSecurityClassifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityClassifyResponse
   */
  async getSecurityClassifyWithOptions(request: $_model.GetSecurityClassifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityClassifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityClassify",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityClassifyResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityClassifyResponse({}));
  }

  /**
   * 获取数据分类详情。
   * 
   * @param request - GetSecurityClassifyRequest
   * @returns GetSecurityClassifyResponse
   */
  async getSecurityClassify(request: $_model.GetSecurityClassifyRequest): Promise<$_model.GetSecurityClassifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityClassifyWithOptions(request, runtime);
  }

  /**
   * 获取识别结果详情。
   * 
   * @param request - GetSecurityIdentifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityIdentifyResultResponse
   */
  async getSecurityIdentifyResultWithOptions(request: $_model.GetSecurityIdentifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityIdentifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityIdentifyResult",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityIdentifyResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityIdentifyResultResponse({}));
  }

  /**
   * 获取识别结果详情。
   * 
   * @param request - GetSecurityIdentifyResultRequest
   * @returns GetSecurityIdentifyResultResponse
   */
  async getSecurityIdentifyResult(request: $_model.GetSecurityIdentifyResultRequest): Promise<$_model.GetSecurityIdentifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityIdentifyResultWithOptions(request, runtime);
  }

  /**
   * 获取数据分级详情。
   * 
   * @param request - GetSecurityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityLevelResponse
   */
  async getSecurityLevelWithOptions(request: $_model.GetSecurityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityLevel",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityLevelResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityLevelResponse({}));
  }

  /**
   * 获取数据分级详情。
   * 
   * @param request - GetSecurityLevelRequest
   * @returns GetSecurityLevelResponse
   */
  async getSecurityLevel(request: $_model.GetSecurityLevelRequest): Promise<$_model.GetSecurityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityLevelWithOptions(request, runtime);
  }

  /**
   * 通过密钥名称获取密钥值。
   * 
   * @param request - GetSecuritySecretKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecuritySecretKeyResponse
   */
  async getSecuritySecretKeyWithOptions(request: $_model.GetSecuritySecretKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecuritySecretKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecuritySecretKey",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecuritySecretKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetSecuritySecretKeyResponse({}));
  }

  /**
   * 通过密钥名称获取密钥值。
   * 
   * @param request - GetSecuritySecretKeyRequest
   * @returns GetSecuritySecretKeyResponse
   */
  async getSecuritySecretKey(request: $_model.GetSecuritySecretKeyRequest): Promise<$_model.GetSecuritySecretKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecuritySecretKeyWithOptions(request, runtime);
  }

  /**
   * 获取计算源对应集群的spark客户信息
   * 
   * @param request - GetSparkLocalClientInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkLocalClientInfoResponse
   */
  async getSparkLocalClientInfoWithOptions(request: $_model.GetSparkLocalClientInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkLocalClientInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.envEnum)) {
      query["EnvEnum"] = request.envEnum;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkLocalClientInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkLocalClientInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkLocalClientInfoResponse({}));
  }

  /**
   * 获取计算源对应集群的spark客户信息
   * 
   * @param request - GetSparkLocalClientInfoRequest
   * @returns GetSparkLocalClientInfoResponse
   */
  async getSparkLocalClientInfo(request: $_model.GetSparkLocalClientInfoRequest): Promise<$_model.GetSparkLocalClientInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkLocalClientInfoWithOptions(request, runtime);
  }

  /**
   * 获取标准详情。
   * 
   * @param tmpReq - GetStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardResponse
   */
  async getStandardWithOptions(tmpReq: $_model.GetStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardResponse> {
    tmpReq.validate();
    let request = new $_model.GetStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.standardGetQuery)) {
      request.standardGetQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardGetQuery, "StandardGetQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.standardGetQueryShrink)) {
      body["StandardGetQuery"] = request.standardGetQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardResponse({}));
  }

  /**
   * 获取标准详情。
   * 
   * @param request - GetStandardRequest
   * @returns GetStandardResponse
   */
  async getStandard(request: $_model.GetStandardRequest): Promise<$_model.GetStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardWithOptions(request, runtime);
  }

  /**
   * 获取数据标准码表详情。
   * 
   * @param request - GetStandardLookupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardLookupTableResponse
   */
  async getStandardLookupTableWithOptions(request: $_model.GetStandardLookupTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardLookupTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.nullable)) {
      query["Nullable"] = request.nullable;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardLookupTable",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardLookupTableResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardLookupTableResponse({}));
  }

  /**
   * 获取数据标准码表详情。
   * 
   * @param request - GetStandardLookupTableRequest
   * @returns GetStandardLookupTableResponse
   */
  async getStandardLookupTable(request: $_model.GetStandardLookupTableRequest): Promise<$_model.GetStandardLookupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardLookupTableWithOptions(request, runtime);
  }

  /**
   * 获取标准集详情。
   * 
   * @param request - GetStandardSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardSetResponse
   */
  async getStandardSetWithOptions(request: $_model.GetStandardSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.nullable)) {
      query["Nullable"] = request.nullable;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardSet",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardSetResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardSetResponse({}));
  }

  /**
   * 获取标准集详情。
   * 
   * @param request - GetStandardSetRequest
   * @returns GetStandardSetResponse
   */
  async getStandardSet(request: $_model.GetStandardSetRequest): Promise<$_model.GetStandardSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardSetWithOptions(request, runtime);
  }

  /**
   * 查询目录下按照标准类型统计标准数目。
   * 
   * @param tmpReq - GetStandardStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardStatisticsResponse
   */
  async getStandardStatisticsWithOptions(tmpReq: $_model.GetStandardStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardStatisticsResponse> {
    tmpReq.validate();
    let request = new $_model.GetStandardStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statisticsQuery)) {
      request.statisticsQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statisticsQuery, "StatisticsQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.statisticsQueryShrink)) {
      body["StatisticsQuery"] = request.statisticsQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardStatistics",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardStatisticsResponse({}));
  }

  /**
   * 查询目录下按照标准类型统计标准数目。
   * 
   * @param request - GetStandardStatisticsRequest
   * @returns GetStandardStatisticsResponse
   */
  async getStandardStatistics(request: $_model.GetStandardStatisticsRequest): Promise<$_model.GetStandardStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取数据标准模板详情。
   * 
   * @param tmpReq - GetStandardTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardTemplateResponse
   */
  async getStandardTemplateWithOptions(tmpReq: $_model.GetStandardTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.GetStandardTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterQuery)) {
      request.filterQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterQuery, "FilterQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.nullable)) {
      query["Nullable"] = request.nullable;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterQueryShrink)) {
      body["FilterQuery"] = request.filterQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardTemplate",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardTemplateResponse({}));
  }

  /**
   * 获取数据标准模板详情。
   * 
   * @param request - GetStandardTemplateRequest
   * @returns GetStandardTemplateResponse
   */
  async getStandardTemplate(request: $_model.GetStandardTemplateRequest): Promise<$_model.GetStandardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardTemplateWithOptions(request, runtime);
  }

  /**
   * 获取数据标准词根详情。
   * 
   * @param request - GetStandardWordRootRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardWordRootResponse
   */
  async getStandardWordRootWithOptions(request: $_model.GetStandardWordRootRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardWordRootResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nullable)) {
      query["Nullable"] = request.nullable;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardWordRoot",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardWordRootResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardWordRootResponse({}));
  }

  /**
   * 获取数据标准词根详情。
   * 
   * @param request - GetStandardWordRootRequest
   * @returns GetStandardWordRootResponse
   */
  async getStandardWordRoot(request: $_model.GetStandardWordRootRequest): Promise<$_model.GetStandardWordRootResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardWordRootWithOptions(request, runtime);
  }

  /**
   * 获取dataphin实时研发任务集合
   * 
   * @param request - GetStreamJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStreamJobsResponse
   */
  async getStreamJobsWithOptions(request: $_model.GetStreamJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStreamJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStreamJobs",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStreamJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetStreamJobsResponse({}));
  }

  /**
   * 获取dataphin实时研发任务集合
   * 
   * @param request - GetStreamJobsRequest
   * @returns GetStreamJobsResponse
   */
  async getStreamJobs(request: $_model.GetStreamJobsRequest): Promise<$_model.GetStreamJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStreamJobsWithOptions(request, runtime);
  }

  /**
   * 获取补数据工作流所有业务日期的Dagrun信息。
   * 
   * @param request - GetSupplementDagrunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplementDagrunResponse
   */
  async getSupplementDagrunWithOptions(request: $_model.GetSupplementDagrunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupplementDagrunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.supplementId)) {
      query["SupplementId"] = request.supplementId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupplementDagrun",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupplementDagrunResponse>(await this.callApi(params, req, runtime), new $_model.GetSupplementDagrunResponse({}));
  }

  /**
   * 获取补数据工作流所有业务日期的Dagrun信息。
   * 
   * @param request - GetSupplementDagrunRequest
   * @returns GetSupplementDagrunResponse
   */
  async getSupplementDagrun(request: $_model.GetSupplementDagrunRequest): Promise<$_model.GetSupplementDagrunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupplementDagrunWithOptions(request, runtime);
  }

  /**
   * 列出补数据工作流下具体一个业务日期的所有节点的实例。
   * 
   * @param request - GetSupplementDagrunInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplementDagrunInstanceResponse
   */
  async getSupplementDagrunInstanceWithOptions(request: $_model.GetSupplementDagrunInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupplementDagrunInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagrunId)) {
      query["DagrunId"] = request.dagrunId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupplementDagrunInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupplementDagrunInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetSupplementDagrunInstanceResponse({}));
  }

  /**
   * 列出补数据工作流下具体一个业务日期的所有节点的实例。
   * 
   * @param request - GetSupplementDagrunInstanceRequest
   * @returns GetSupplementDagrunInstanceResponse
   */
  async getSupplementDagrunInstance(request: $_model.GetSupplementDagrunInstanceRequest): Promise<$_model.GetSupplementDagrunInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupplementDagrunInstanceWithOptions(request, runtime);
  }

  /**
   * 查询表字段血缘信息
   * 
   * @param tmpReq - GetTableColumnLineageByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnLineageByTaskIdResponse
   */
  async getTableColumnLineageByTaskIdWithOptions(tmpReq: $_model.GetTableColumnLineageByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableColumnLineageByTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetTableColumnLineageByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableColumnLineageByTaskIdQuery)) {
      request.tableColumnLineageByTaskIdQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableColumnLineageByTaskIdQuery, "TableColumnLineageByTaskIdQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableColumnLineageByTaskIdQueryShrink)) {
      body["TableColumnLineageByTaskIdQuery"] = request.tableColumnLineageByTaskIdQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableColumnLineageByTaskId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableColumnLineageByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTableColumnLineageByTaskIdResponse({}));
  }

  /**
   * 查询表字段血缘信息
   * 
   * @param request - GetTableColumnLineageByTaskIdRequest
   * @returns GetTableColumnLineageByTaskIdResponse
   */
  async getTableColumnLineageByTaskId(request: $_model.GetTableColumnLineageByTaskIdRequest): Promise<$_model.GetTableColumnLineageByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableColumnLineageByTaskIdWithOptions(request, runtime);
  }

  /**
   * 查询资产表字段血缘信息。
   * 
   * @param tmpReq - GetTableColumnLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnLineagesResponse
   */
  async getTableColumnLineagesWithOptions(tmpReq: $_model.GetTableColumnLineagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableColumnLineagesResponse> {
    tmpReq.validate();
    let request = new $_model.GetTableColumnLineagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterQuery)) {
      request.filterQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterQuery, "FilterQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterQueryShrink)) {
      body["FilterQuery"] = request.filterQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableColumnLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableColumnLineagesResponse>(await this.callApi(params, req, runtime), new $_model.GetTableColumnLineagesResponse({}));
  }

  /**
   * 查询资产表字段血缘信息。
   * 
   * @param request - GetTableColumnLineagesRequest
   * @returns GetTableColumnLineagesResponse
   */
  async getTableColumnLineages(request: $_model.GetTableColumnLineagesRequest): Promise<$_model.GetTableColumnLineagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableColumnLineagesWithOptions(request, runtime);
  }

  /**
   * 查询资产清单中Dataphin表的字段。
   * 
   * @param request - GetTableColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnsResponse
   */
  async getTableColumnsWithOptions(request: $_model.GetTableColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableColumns",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableColumnsResponse>(await this.callApi(params, req, runtime), new $_model.GetTableColumnsResponse({}));
  }

  /**
   * 查询资产清单中Dataphin表的字段。
   * 
   * @param request - GetTableColumnsRequest
   * @returns GetTableColumnsResponse
   */
  async getTableColumns(request: $_model.GetTableColumnsRequest): Promise<$_model.GetTableColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableColumnsWithOptions(request, runtime);
  }

  /**
   * 查询表血缘信息
   * 
   * @param tmpReq - GetTableLineageByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableLineageByTaskIdResponse
   */
  async getTableLineageByTaskIdWithOptions(tmpReq: $_model.GetTableLineageByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableLineageByTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetTableLineageByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableLineageByTaskIdQuery)) {
      request.tableLineageByTaskIdQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableLineageByTaskIdQuery, "TableLineageByTaskIdQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableLineageByTaskIdQueryShrink)) {
      body["TableLineageByTaskIdQuery"] = request.tableLineageByTaskIdQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableLineageByTaskId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableLineageByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTableLineageByTaskIdResponse({}));
  }

  /**
   * 查询表血缘信息
   * 
   * @param request - GetTableLineageByTaskIdRequest
   * @returns GetTableLineageByTaskIdResponse
   */
  async getTableLineageByTaskId(request: $_model.GetTableLineageByTaskIdRequest): Promise<$_model.GetTableLineageByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableLineageByTaskIdWithOptions(request, runtime);
  }

  /**
   * 查询资产表血缘信息。
   * 
   * @param tmpReq - GetTableLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableLineagesResponse
   */
  async getTableLineagesWithOptions(tmpReq: $_model.GetTableLineagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableLineagesResponse> {
    tmpReq.validate();
    let request = new $_model.GetTableLineagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterQuery)) {
      request.filterQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterQuery, "FilterQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterQueryShrink)) {
      body["FilterQuery"] = request.filterQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableLineagesResponse>(await this.callApi(params, req, runtime), new $_model.GetTableLineagesResponse({}));
  }

  /**
   * 查询资产表血缘信息。
   * 
   * @param request - GetTableLineagesRequest
   * @returns GetTableLineagesResponse
   */
  async getTableLineages(request: $_model.GetTableLineagesRequest): Promise<$_model.GetTableLineagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableLineagesWithOptions(request, runtime);
  }

  /**
   * 根据转交任务ID查询转交任务的进度
   * 
   * @param request - GetTransferInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTransferInfoResponse
   */
  async getTransferInfoWithOptions(request: $_model.GetTransferInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTransferInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.proposalId)) {
      query["ProposalId"] = request.proposalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTransferInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTransferInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTransferInfoResponse({}));
  }

  /**
   * 根据转交任务ID查询转交任务的进度
   * 
   * @param request - GetTransferInfoRequest
   * @returns GetTransferInfoResponse
   */
  async getTransferInfo(request: $_model.GetTransferInfoRequest): Promise<$_model.GetTransferInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTransferInfoWithOptions(request, runtime);
  }

  /**
   * 获取自定义函数详情。
   * 
   * @param request - GetUdfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUdfResponse
   */
  async getUdfWithOptions(request: $_model.GetUdfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUdfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUdf",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUdfResponse>(await this.callApi(params, req, runtime), new $_model.GetUdfResponse({}));
  }

  /**
   * 获取自定义函数详情。
   * 
   * @param request - GetUdfRequest
   * @returns GetUdfResponse
   */
  async getUdf(request: $_model.GetUdfRequest): Promise<$_model.GetUdfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUdfWithOptions(request, runtime);
  }

  /**
   * 查询自定义函数版本详情。
   * 
   * @param request - GetUdfByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUdfByVersionResponse
   */
  async getUdfByVersionWithOptions(request: $_model.GetUdfByVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUdfByVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUdfByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUdfByVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetUdfByVersionResponse({}));
  }

  /**
   * 查询自定义函数版本详情。
   * 
   * @param request - GetUdfByVersionRequest
   * @returns GetUdfByVersionResponse
   */
  async getUdfByVersion(request: $_model.GetUdfByVersionRequest): Promise<$_model.GetUdfByVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUdfByVersionWithOptions(request, runtime);
  }

  /**
   * 通过用户原始Id（如阿里云Id）获取用户详情
   * 
   * @param request - GetUserBySourceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBySourceIdResponse
   */
  async getUserBySourceIdWithOptions(request: $_model.GetUserBySourceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserBySourceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserBySourceId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserBySourceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUserBySourceIdResponse({}));
  }

  /**
   * 通过用户原始Id（如阿里云Id）获取用户详情
   * 
   * @param request - GetUserBySourceIdRequest
   * @returns GetUserBySourceIdResponse
   */
  async getUserBySourceId(request: $_model.GetUserBySourceIdRequest): Promise<$_model.GetUserBySourceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserBySourceIdWithOptions(request, runtime);
  }

  /**
   * 获取用户组详情.
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: $_model.GetUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetUserGroupResponse({}));
  }

  /**
   * 获取用户组详情.
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: $_model.GetUserGroupRequest): Promise<$_model.GetUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * 获取用户详情
   * 
   * @param tmpReq - GetUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUsersResponse
   */
  async getUsersWithOptions(tmpReq: $_model.GetUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUsersResponse> {
    tmpReq.validate();
    let request = new $_model.GetUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "UserIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIdListShrink)) {
      body["UserIdList"] = request.userIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUsersResponse>(await this.callApi(params, req, runtime), new $_model.GetUsersResponse({}));
  }

  /**
   * 获取用户详情
   * 
   * @param request - GetUsersRequest
   * @returns GetUsersResponse
   */
  async getUsers(request: $_model.GetUsersRequest): Promise<$_model.GetUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUsersWithOptions(request, runtime);
  }

  /**
   * API授权。
   * 
   * @param tmpReq - GrantDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantDataServiceApiResponse
   */
  async grantDataServiceApiWithOptions(tmpReq: $_model.GrantDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantDataServiceApiResponse> {
    tmpReq.validate();
    let request = new $_model.GrantDataServiceApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.grantCommand)) {
      request.grantCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.grantCommand, "GrantCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grantCommandShrink)) {
      body["GrantCommand"] = request.grantCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantDataServiceApi",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.GrantDataServiceApiResponse({}));
  }

  /**
   * API授权。
   * 
   * @param request - GrantDataServiceApiRequest
   * @returns GrantDataServiceApiResponse
   */
  async grantDataServiceApi(request: $_model.GrantDataServiceApiRequest): Promise<$_model.GrantDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantDataServiceApiWithOptions(request, runtime);
  }

  /**
   * 通过资源点对用户授权
   * 
   * @param tmpReq - GrantResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantResourcePermissionResponse
   */
  async grantResourcePermissionWithOptions(tmpReq: $_model.GrantResourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantResourcePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.GrantResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.grantCommand)) {
      request.grantCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.grantCommand, "GrantCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grantCommandShrink)) {
      body["GrantCommand"] = request.grantCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantResourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantResourcePermissionResponse({}));
  }

  /**
   * 通过资源点对用户授权
   * 
   * @param request - GrantResourcePermissionRequest
   * @returns GrantResourcePermissionResponse
   */
  async grantResourcePermission(request: $_model.GrantResourcePermissionRequest): Promise<$_model.GrantResourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListAddableRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddableRolesResponse
   */
  async listAddableRolesWithOptions(request: $_model.ListAddableRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddableRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddableRoles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddableRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListAddableRolesResponse({}));
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListAddableRolesRequest
   * @returns ListAddableRolesResponse
   */
  async listAddableRoles(request: $_model.ListAddableRolesRequest): Promise<$_model.ListAddableRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddableRolesWithOptions(request, runtime);
  }

  /**
   * 获取可加入租户成员列表的用户
   * 
   * @param tmpReq - ListAddableUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddableUsersResponse
   */
  async listAddableUsersWithOptions(tmpReq: $_model.ListAddableUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddableUsersResponse> {
    tmpReq.validate();
    let request = new $_model.ListAddableUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddableUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddableUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListAddableUsersResponse({}));
  }

  /**
   * 获取可加入租户成员列表的用户
   * 
   * @param request - ListAddableUsersRequest
   * @returns ListAddableUsersResponse
   */
  async listAddableUsers(request: $_model.ListAddableUsersRequest): Promise<$_model.ListAddableUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddableUsersWithOptions(request, runtime);
  }

  /**
   * 根据条件查询多个告警事件
   * 
   * @param tmpReq - ListAlertEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertEventsResponse
   */
  async listAlertEventsWithOptions(tmpReq: $_model.ListAlertEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertEventsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertEvents",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertEventsResponse({}));
  }

  /**
   * 根据条件查询多个告警事件
   * 
   * @param request - ListAlertEventsRequest
   * @returns ListAlertEventsResponse
   */
  async listAlertEvents(request: $_model.ListAlertEventsRequest): Promise<$_model.ListAlertEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertEventsWithOptions(request, runtime);
  }

  /**
   * 根据条件查询多个推送记录
   * 
   * @param tmpReq - ListAlertNotificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertNotificationsResponse
   */
  async listAlertNotificationsWithOptions(tmpReq: $_model.ListAlertNotificationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertNotificationsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertNotifications",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertNotificationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertNotificationsResponse({}));
  }

  /**
   * 根据条件查询多个推送记录
   * 
   * @param request - ListAlertNotificationsRequest
   * @returns ListAlertNotificationsResponse
   */
  async listAlertNotifications(request: $_model.ListAlertNotificationsRequest): Promise<$_model.ListAlertNotificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertNotificationsWithOptions(request, runtime);
  }

  /**
   * 根据app查询api列表
   * 
   * @param tmpReq - ListApiByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiByAppResponse
   */
  async listApiByAppWithOptions(tmpReq: $_model.ListApiByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiByAppResponse> {
    tmpReq.validate();
    let request = new $_model.ListApiByAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pageQuery)) {
      request.pageQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageQuery, "PageQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageQueryShrink)) {
      body["PageQuery"] = request.pageQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiByApp",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiByAppResponse>(await this.callApi(params, req, runtime), new $_model.ListApiByAppResponse({}));
  }

  /**
   * 根据app查询api列表
   * 
   * @param request - ListApiByAppRequest
   * @returns ListApiByAppResponse
   */
  async listApiByApp(request: $_model.ListApiByAppRequest): Promise<$_model.ListApiByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiByAppWithOptions(request, runtime);
  }

  /**
   * 查询应用已申请的API的具体的字段列表
   * 
   * @param tmpReq - ListAuthorizedDataServiceApiDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedDataServiceApiDetailsResponse
   */
  async listAuthorizedDataServiceApiDetailsWithOptions(tmpReq: $_model.ListAuthorizedDataServiceApiDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedDataServiceApiDetailsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAuthorizedDataServiceApiDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedDataServiceApiDetails",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedDataServiceApiDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedDataServiceApiDetailsResponse({}));
  }

  /**
   * 查询应用已申请的API的具体的字段列表
   * 
   * @param request - ListAuthorizedDataServiceApiDetailsRequest
   * @returns ListAuthorizedDataServiceApiDetailsResponse
   */
  async listAuthorizedDataServiceApiDetails(request: $_model.ListAuthorizedDataServiceApiDetailsRequest): Promise<$_model.ListAuthorizedDataServiceApiDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedDataServiceApiDetailsWithOptions(request, runtime);
  }

  /**
   * 查询业务实体列表。
   * 
   * @param tmpReq - ListBizEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizEntitiesResponse
   */
  async listBizEntitiesWithOptions(tmpReq: $_model.ListBizEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBizEntitiesResponse> {
    tmpReq.validate();
    let request = new $_model.ListBizEntitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBizEntities",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBizEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListBizEntitiesResponse({}));
  }

  /**
   * 查询业务实体列表。
   * 
   * @param request - ListBizEntitiesRequest
   * @returns ListBizEntitiesResponse
   */
  async listBizEntities(request: $_model.ListBizEntitiesRequest): Promise<$_model.ListBizEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBizEntitiesWithOptions(request, runtime);
  }

  /**
   * 获取当前租户下的所有数据板块
   * 
   * @param request - ListBizUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizUnitsResponse
   */
  async listBizUnitsWithOptions(request: $_model.ListBizUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBizUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBizUnits",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBizUnitsResponse>(await this.callApi(params, req, runtime), new $_model.ListBizUnitsResponse({}));
  }

  /**
   * 获取当前租户下的所有数据板块
   * 
   * @param request - ListBizUnitsRequest
   * @returns ListBizUnitsResponse
   */
  async listBizUnits(request: $_model.ListBizUnitsRequest): Promise<$_model.ListBizUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBizUnitsWithOptions(request, runtime);
  }

  /**
   * 查询计算源列表。
   * 
   * @param tmpReq - ListComputeSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeSourcesResponse
   */
  async listComputeSourcesWithOptions(tmpReq: $_model.ListComputeSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeSourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListComputeSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeSources",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeSourcesResponse({}));
  }

  /**
   * 查询计算源列表。
   * 
   * @param request - ListComputeSourcesRequest
   * @returns ListComputeSourcesResponse
   */
  async listComputeSources(request: $_model.ListComputeSourcesRequest): Promise<$_model.ListComputeSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComputeSourcesWithOptions(request, runtime);
  }

  /**
   * 获取主题域列表。
   * 
   * @param tmpReq - ListDataDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDomainsResponse
   */
  async listDataDomainsWithOptions(tmpReq: $_model.ListDataDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataDomainsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataDomainsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataDomains",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataDomainsResponse({}));
  }

  /**
   * 获取主题域列表。
   * 
   * @param request - ListDataDomainsRequest
   * @returns ListDataDomainsResponse
   */
  async listDataDomains(request: $_model.ListDataDomainsRequest): Promise<$_model.ListDataDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataDomainsWithOptions(request, runtime);
  }

  /**
   * 查询API运维统计信息。
   * 
   * @param tmpReq - ListDataServiceApiCallStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApiCallStatisticsResponse
   */
  async listDataServiceApiCallStatisticsWithOptions(tmpReq: $_model.ListDataServiceApiCallStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApiCallStatisticsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceApiCallStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApiCallStatistics",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApiCallStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApiCallStatisticsResponse({}));
  }

  /**
   * 查询API运维统计信息。
   * 
   * @param request - ListDataServiceApiCallStatisticsRequest
   * @returns ListDataServiceApiCallStatisticsResponse
   */
  async listDataServiceApiCallStatistics(request: $_model.ListDataServiceApiCallStatisticsRequest): Promise<$_model.ListDataServiceApiCallStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApiCallStatisticsWithOptions(request, runtime);
  }

  /**
   * 分页查询数据服务调用日志。
   * 
   * @param tmpReq - ListDataServiceApiCallsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApiCallsResponse
   */
  async listDataServiceApiCallsWithOptions(tmpReq: $_model.ListDataServiceApiCallsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApiCallsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceApiCallsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApiCalls",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApiCallsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApiCallsResponse({}));
  }

  /**
   * 分页查询数据服务调用日志。
   * 
   * @param request - ListDataServiceApiCallsRequest
   * @returns ListDataServiceApiCallsResponse
   */
  async listDataServiceApiCalls(request: $_model.ListDataServiceApiCallsRequest): Promise<$_model.ListDataServiceApiCallsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApiCallsWithOptions(request, runtime);
  }

  /**
   * API影响分析列表。
   * 
   * @param tmpReq - ListDataServiceApiImpactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApiImpactsResponse
   */
  async listDataServiceApiImpactsWithOptions(tmpReq: $_model.ListDataServiceApiImpactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApiImpactsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceApiImpactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApiImpacts",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApiImpactsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApiImpactsResponse({}));
  }

  /**
   * API影响分析列表。
   * 
   * @param request - ListDataServiceApiImpactsRequest
   * @returns ListDataServiceApiImpactsResponse
   */
  async listDataServiceApiImpacts(request: $_model.ListDataServiceApiImpactsRequest): Promise<$_model.ListDataServiceApiImpactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApiImpactsWithOptions(request, runtime);
  }

  /**
   * 查询当前用户有权限的应用列表。
   * 
   * @param tmpReq - ListDataServiceAuthorizedAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceAuthorizedAppsResponse
   */
  async listDataServiceAuthorizedAppsWithOptions(tmpReq: $_model.ListDataServiceAuthorizedAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceAuthorizedAppsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceAuthorizedAppsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceAuthorizedApps",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceAuthorizedAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceAuthorizedAppsResponse({}));
  }

  /**
   * 查询当前用户有权限的应用列表。
   * 
   * @param request - ListDataServiceAuthorizedAppsRequest
   * @returns ListDataServiceAuthorizedAppsResponse
   */
  async listDataServiceAuthorizedApps(request: $_model.ListDataServiceAuthorizedAppsRequest): Promise<$_model.ListDataServiceAuthorizedAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceAuthorizedAppsWithOptions(request, runtime);
  }

  /**
   * 获取我管理的API权限列表。
   * 
   * @param tmpReq - ListDataServiceMyApiPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceMyApiPermissionsResponse
   */
  async listDataServiceMyApiPermissionsWithOptions(tmpReq: $_model.ListDataServiceMyApiPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceMyApiPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceMyApiPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceMyApiPermissions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceMyApiPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceMyApiPermissionsResponse({}));
  }

  /**
   * 获取我管理的API权限列表。
   * 
   * @param request - ListDataServiceMyApiPermissionsRequest
   * @returns ListDataServiceMyApiPermissionsResponse
   */
  async listDataServiceMyApiPermissions(request: $_model.ListDataServiceMyApiPermissionsRequest): Promise<$_model.ListDataServiceMyApiPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceMyApiPermissionsWithOptions(request, runtime);
  }

  /**
   * 查询当前用户有权限的应用。
   * 
   * @param tmpReq - ListDataServiceMyAppPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceMyAppPermissionsResponse
   */
  async listDataServiceMyAppPermissionsWithOptions(tmpReq: $_model.ListDataServiceMyAppPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceMyAppPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServiceMyAppPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceMyAppPermissions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceMyAppPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceMyAppPermissionsResponse({}));
  }

  /**
   * 查询当前用户有权限的应用。
   * 
   * @param request - ListDataServiceMyAppPermissionsRequest
   * @returns ListDataServiceMyAppPermissionsResponse
   */
  async listDataServiceMyAppPermissions(request: $_model.ListDataServiceMyAppPermissionsRequest): Promise<$_model.ListDataServiceMyAppPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceMyAppPermissionsWithOptions(request, runtime);
  }

  /**
   * 分页查询已发布的API列表。
   * 
   * @param tmpReq - ListDataServicePublishedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServicePublishedApisResponse
   */
  async listDataServicePublishedApisWithOptions(tmpReq: $_model.ListDataServicePublishedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServicePublishedApisResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataServicePublishedApisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServicePublishedApis",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServicePublishedApisResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServicePublishedApisResponse({}));
  }

  /**
   * 分页查询已发布的API列表。
   * 
   * @param request - ListDataServicePublishedApisRequest
   * @returns ListDataServicePublishedApisResponse
   */
  async listDataServicePublishedApis(request: $_model.ListDataServicePublishedApisRequest): Promise<$_model.ListDataServicePublishedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServicePublishedApisWithOptions(request, runtime);
  }

  /**
   * 搜索数据源，所属结果包含数据源配置项
   * 
   * @param tmpReq - ListDataSourceWithConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceWithConfigResponse
   */
  async listDataSourceWithConfigWithOptions(tmpReq: $_model.ListDataSourceWithConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceWithConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourceWithConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceWithConfig",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceWithConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceWithConfigResponse({}));
  }

  /**
   * 搜索数据源，所属结果包含数据源配置项
   * 
   * @param request - ListDataSourceWithConfigRequest
   * @returns ListDataSourceWithConfigResponse
   */
  async listDataSourceWithConfig(request: $_model.ListDataSourceWithConfigRequest): Promise<$_model.ListDataSourceWithConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceWithConfigWithOptions(request, runtime);
  }

  /**
   * 遍历菜单树目录文件。
   * 
   * @param tmpReq - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(tmpReq: $_model.ListFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilesResponse> {
    tmpReq.validate();
    let request = new $_model.ListFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFiles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFilesResponse({}));
  }

  /**
   * 遍历菜单树目录文件。
   * 
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: $_model.ListFilesRequest): Promise<$_model.ListFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * 分页查询实例。
   * 
   * @param tmpReq - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * 分页查询实例。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 查询节点下游，创建补数据工作流时可以作为数据参考
   * 
   * @param tmpReq - ListNodeDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDownStreamResponse
   */
  async listNodeDownStreamWithOptions(tmpReq: $_model.ListNodeDownStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeDownStreamResponse> {
    tmpReq.validate();
    let request = new $_model.ListNodeDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeDownStreamResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeDownStreamResponse({}));
  }

  /**
   * 查询节点下游，创建补数据工作流时可以作为数据参考
   * 
   * @param request - ListNodeDownStreamRequest
   * @returns ListNodeDownStreamResponse
   */
  async listNodeDownStream(request: $_model.ListNodeDownStreamRequest): Promise<$_model.ListNodeDownStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询调度节点列表。
   * 
   * @param tmpReq - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * 查询调度节点列表。
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 获取项目成员列表。
   * 
   * @param tmpReq - ListProjectMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectMembersResponse
   */
  async listProjectMembersWithOptions(tmpReq: $_model.ListProjectMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectMembersResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectMembersResponse({}));
  }

  /**
   * 获取项目成员列表。
   * 
   * @param request - ListProjectMembersRequest
   * @returns ListProjectMembersResponse
   */
  async listProjectMembers(request: $_model.ListProjectMembersRequest): Promise<$_model.ListProjectMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  /**
   * 获取项目列表。
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 获取项目列表。
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 分页获取发布记录列表
   * 
   * @param tmpReq - ListPublishRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishRecordsResponse
   */
  async listPublishRecordsWithOptions(tmpReq: $_model.ListPublishRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPublishRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishRecords",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishRecordsResponse({}));
  }

  /**
   * 分页获取发布记录列表
   * 
   * @param request - ListPublishRecordsRequest
   * @returns ListPublishRecordsResponse
   */
  async listPublishRecords(request: $_model.ListPublishRecordsRequest): Promise<$_model.ListPublishRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublishRecordsWithOptions(request, runtime);
  }

  /**
   * 分页查询质量规则任务。
   * 
   * @param tmpReq - ListQualityRuleTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityRuleTasksResponse
   */
  async listQualityRuleTasksWithOptions(tmpReq: $_model.ListQualityRuleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityRuleTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListQualityRuleTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityRuleTasks",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityRuleTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityRuleTasksResponse({}));
  }

  /**
   * 分页查询质量规则任务。
   * 
   * @param request - ListQualityRuleTasksRequest
   * @returns ListQualityRuleTasksResponse
   */
  async listQualityRuleTasks(request: $_model.ListQualityRuleTasksRequest): Promise<$_model.ListQualityRuleTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityRuleTasksWithOptions(request, runtime);
  }

  /**
   * 分页查询质量规则。
   * 
   * @param tmpReq - ListQualityRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityRulesResponse
   */
  async listQualityRulesWithOptions(tmpReq: $_model.ListQualityRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListQualityRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityRules",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityRulesResponse({}));
  }

  /**
   * 分页查询质量规则。
   * 
   * @param request - ListQualityRulesRequest
   * @returns ListQualityRulesResponse
   */
  async listQualityRules(request: $_model.ListQualityRulesRequest): Promise<$_model.ListQualityRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityRulesWithOptions(request, runtime);
  }

  /**
   * 分页查询质量模板。
   * 
   * @param tmpReq - ListQualityTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityTemplatesResponse
   */
  async listQualityTemplatesWithOptions(tmpReq: $_model.ListQualityTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListQualityTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityTemplates",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityTemplatesResponse({}));
  }

  /**
   * 分页查询质量模板。
   * 
   * @param request - ListQualityTemplatesRequest
   * @returns ListQualityTemplatesResponse
   */
  async listQualityTemplates(request: $_model.ListQualityTemplatesRequest): Promise<$_model.ListQualityTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityTemplatesWithOptions(request, runtime);
  }

  /**
   * 分页查询质量监控任务。
   * 
   * @param tmpReq - ListQualityWatchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityWatchTasksResponse
   */
  async listQualityWatchTasksWithOptions(tmpReq: $_model.ListQualityWatchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityWatchTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListQualityWatchTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityWatchTasks",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityWatchTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityWatchTasksResponse({}));
  }

  /**
   * 分页查询质量监控任务。
   * 
   * @param request - ListQualityWatchTasksRequest
   * @returns ListQualityWatchTasksResponse
   */
  async listQualityWatchTasks(request: $_model.ListQualityWatchTasksRequest): Promise<$_model.ListQualityWatchTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityWatchTasksWithOptions(request, runtime);
  }

  /**
   * 分页查询质量监控对象。
   * 
   * @param tmpReq - ListQualityWatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityWatchesResponse
   */
  async listQualityWatchesWithOptions(tmpReq: $_model.ListQualityWatchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityWatchesResponse> {
    tmpReq.validate();
    let request = new $_model.ListQualityWatchesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityWatches",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityWatchesResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityWatchesResponse({}));
  }

  /**
   * 分页查询质量监控对象。
   * 
   * @param request - ListQualityWatchesRequest
   * @returns ListQualityWatchesResponse
   */
  async listQualityWatches(request: $_model.ListQualityWatchesRequest): Promise<$_model.ListQualityWatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityWatchesWithOptions(request, runtime);
  }

  /**
   * 分页获取权限操作列表
   * 
   * @param tmpReq - ListResourcePermissionOperationLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcePermissionOperationLogResponse
   */
  async listResourcePermissionOperationLogWithOptions(tmpReq: $_model.ListResourcePermissionOperationLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcePermissionOperationLogResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourcePermissionOperationLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcePermissionOperationLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcePermissionOperationLogResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcePermissionOperationLogResponse({}));
  }

  /**
   * 分页获取权限操作列表
   * 
   * @param request - ListResourcePermissionOperationLogRequest
   * @returns ListResourcePermissionOperationLogResponse
   */
  async listResourcePermissionOperationLog(request: $_model.ListResourcePermissionOperationLogRequest): Promise<$_model.ListResourcePermissionOperationLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcePermissionOperationLogWithOptions(request, runtime);
  }

  /**
   * 分页获取权限记录列表
   * 
   * @param tmpReq - ListResourcePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcePermissionsResponse
   */
  async listResourcePermissionsWithOptions(tmpReq: $_model.ListResourcePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcePermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourcePermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcePermissions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcePermissionsResponse({}));
  }

  /**
   * 分页获取权限记录列表
   * 
   * @param request - ListResourcePermissionsRequest
   * @returns ListResourcePermissionsResponse
   */
  async listResourcePermissions(request: $_model.ListResourcePermissionsRequest): Promise<$_model.ListResourcePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcePermissionsWithOptions(request, runtime);
  }

  /**
   * 分页查询行级权限
   * 
   * @param tmpReq - ListRowPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRowPermissionResponse
   */
  async listRowPermissionWithOptions(tmpReq: $_model.ListRowPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRowPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.ListRowPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pageRowPermissionQuery)) {
      request.pageRowPermissionQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageRowPermissionQuery, "PageRowPermissionQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageRowPermissionQueryShrink)) {
      body["PageRowPermissionQuery"] = request.pageRowPermissionQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRowPermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRowPermissionResponse>(await this.callApi(params, req, runtime), new $_model.ListRowPermissionResponse({}));
  }

  /**
   * 分页查询行级权限
   * 
   * @param request - ListRowPermissionRequest
   * @returns ListRowPermissionResponse
   */
  async listRowPermission(request: $_model.ListRowPermissionRequest): Promise<$_model.ListRowPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRowPermissionWithOptions(request, runtime);
  }

  /**
   * 分页查询指定用户行级权限
   * 
   * @param tmpReq - ListRowPermissionByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRowPermissionByUserIdResponse
   */
  async listRowPermissionByUserIdWithOptions(tmpReq: $_model.ListRowPermissionByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRowPermissionByUserIdResponse> {
    tmpReq.validate();
    let request = new $_model.ListRowPermissionByUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listRowPermissionByUserIdQuery)) {
      request.listRowPermissionByUserIdQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listRowPermissionByUserIdQuery, "ListRowPermissionByUserIdQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listRowPermissionByUserIdQueryShrink)) {
      body["ListRowPermissionByUserIdQuery"] = request.listRowPermissionByUserIdQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRowPermissionByUserId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRowPermissionByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.ListRowPermissionByUserIdResponse({}));
  }

  /**
   * 分页查询指定用户行级权限
   * 
   * @param request - ListRowPermissionByUserIdRequest
   * @returns ListRowPermissionByUserIdResponse
   */
  async listRowPermissionByUserId(request: $_model.ListRowPermissionByUserIdRequest): Promise<$_model.ListRowPermissionByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRowPermissionByUserIdWithOptions(request, runtime);
  }

  /**
   * 分页查询安全识别结果的识别记录。
   * 
   * @param tmpReq - ListSecurityIdentifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityIdentifyRecordsResponse
   */
  async listSecurityIdentifyRecordsWithOptions(tmpReq: $_model.ListSecurityIdentifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityIdentifyRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSecurityIdentifyRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityIdentifyRecords",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityIdentifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityIdentifyRecordsResponse({}));
  }

  /**
   * 分页查询安全识别结果的识别记录。
   * 
   * @param request - ListSecurityIdentifyRecordsRequest
   * @returns ListSecurityIdentifyRecordsResponse
   */
  async listSecurityIdentifyRecords(request: $_model.ListSecurityIdentifyRecordsRequest): Promise<$_model.ListSecurityIdentifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityIdentifyRecordsWithOptions(request, runtime);
  }

  /**
   * 分页查询安全识别结果。
   * 
   * @param tmpReq - ListSecurityIdentifyResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityIdentifyResultsResponse
   */
  async listSecurityIdentifyResultsWithOptions(tmpReq: $_model.ListSecurityIdentifyResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityIdentifyResultsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSecurityIdentifyResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityIdentifyResults",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityIdentifyResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityIdentifyResultsResponse({}));
  }

  /**
   * 分页查询安全识别结果。
   * 
   * @param request - ListSecurityIdentifyResultsRequest
   * @returns ListSecurityIdentifyResultsResponse
   */
  async listSecurityIdentifyResults(request: $_model.ListSecurityIdentifyResultsRequest): Promise<$_model.ListSecurityIdentifyResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityIdentifyResultsWithOptions(request, runtime);
  }

  /**
   * 分页查询标准列表。
   * 
   * @param tmpReq - ListStandardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStandardsResponse
   */
  async listStandardsWithOptions(tmpReq: $_model.ListStandardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStandardsResponse> {
    tmpReq.validate();
    let request = new $_model.ListStandardsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStandards",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStandardsResponse>(await this.callApi(params, req, runtime), new $_model.ListStandardsResponse({}));
  }

  /**
   * 分页查询标准列表。
   * 
   * @param request - ListStandardsRequest
   * @returns ListStandardsResponse
   */
  async listStandards(request: $_model.ListStandardsRequest): Promise<$_model.ListStandardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStandardsWithOptions(request, runtime);
  }

  /**
   * 分页获取待发布记录列表
   * 
   * @param tmpReq - ListSubmitRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubmitRecordsResponse
   */
  async listSubmitRecordsWithOptions(tmpReq: $_model.ListSubmitRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubmitRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSubmitRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubmitRecords",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubmitRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubmitRecordsResponse({}));
  }

  /**
   * 分页获取待发布记录列表
   * 
   * @param request - ListSubmitRecordsRequest
   * @returns ListSubmitRecordsResponse
   */
  async listSubmitRecords(request: $_model.ListSubmitRecordsRequest): Promise<$_model.ListSubmitRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubmitRecordsWithOptions(request, runtime);
  }

  /**
   * 分页查询查询资产表元数据。
   * 
   * @param tmpReq - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(tmpReq: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * 分页查询查询资产表元数据。
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * 查询租户成员列表
   * 
   * @param tmpReq - ListTenantMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantMembersResponse
   */
  async listTenantMembersWithOptions(tmpReq: $_model.ListTenantMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantMembersResponse> {
    tmpReq.validate();
    let request = new $_model.ListTenantMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantMembersResponse({}));
  }

  /**
   * 查询租户成员列表
   * 
   * @param request - ListTenantMembersRequest
   * @returns ListTenantMembersResponse
   */
  async listTenantMembers(request: $_model.ListTenantMembersRequest): Promise<$_model.ListTenantMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTenantMembersWithOptions(request, runtime);
  }

  /**
   * 用户组成员列表分页查询.
   * 
   * @param tmpReq - ListUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupMembersResponse
   */
  async listUserGroupMembersWithOptions(tmpReq: $_model.ListUserGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupMembersResponse> {
    tmpReq.validate();
    let request = new $_model.ListUserGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupMembersResponse({}));
  }

  /**
   * 用户组成员列表分页查询.
   * 
   * @param request - ListUserGroupMembersRequest
   * @returns ListUserGroupMembersResponse
   */
  async listUserGroupMembers(request: $_model.ListUserGroupMembersRequest): Promise<$_model.ListUserGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * 用户组列表分页查询.
   * 
   * @param tmpReq - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(tmpReq: $_model.ListUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListUserGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroups",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsResponse({}));
  }

  /**
   * 用户组列表分页查询.
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: $_model.ListUserGroupsRequest): Promise<$_model.ListUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * 下线离线计算任务。
   * 
   * @param request - OfflineBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineBatchTaskResponse
   */
  async offlineBatchTaskWithOptions(request: $_model.OfflineBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineBatchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.OfflineBatchTaskResponse({}));
  }

  /**
   * 下线离线计算任务。
   * 
   * @param request - OfflineBatchTaskRequest
   * @returns OfflineBatchTaskResponse
   */
  async offlineBatchTask(request: $_model.OfflineBatchTaskRequest): Promise<$_model.OfflineBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineBatchTaskWithOptions(request, runtime);
  }

  /**
   * 下线业务实体、
   * 
   * @param tmpReq - OfflineBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineBizEntityResponse
   */
  async offlineBizEntityWithOptions(tmpReq: $_model.OfflineBizEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineBizEntityResponse> {
    tmpReq.validate();
    let request = new $_model.OfflineBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.offlineCommand)) {
      request.offlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offlineCommand, "OfflineCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offlineCommandShrink)) {
      body["OfflineCommand"] = request.offlineCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineBizEntityResponse>(await this.callApi(params, req, runtime), new $_model.OfflineBizEntityResponse({}));
  }

  /**
   * 下线业务实体、
   * 
   * @param request - OfflineBizEntityRequest
   * @returns OfflineBizEntityResponse
   */
  async offlineBizEntity(request: $_model.OfflineBizEntityRequest): Promise<$_model.OfflineBizEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineBizEntityWithOptions(request, runtime);
  }

  /**
   * 下线集成管道任务。
   * 
   * @param tmpReq - OfflinePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflinePipelineResponse
   */
  async offlinePipelineWithOptions(tmpReq: $_model.OfflinePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflinePipelineResponse> {
    tmpReq.validate();
    let request = new $_model.OfflinePipelineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.offlineCommand)) {
      request.offlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offlineCommand, "OfflineCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.offlineCommandShrink)) {
      body["OfflineCommand"] = request.offlineCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflinePipeline",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflinePipelineResponse>(await this.callApi(params, req, runtime), new $_model.OfflinePipelineResponse({}));
  }

  /**
   * 下线集成管道任务。
   * 
   * @param request - OfflinePipelineRequest
   * @returns OfflinePipelineResponse
   */
  async offlinePipeline(request: $_model.OfflinePipelineRequest): Promise<$_model.OfflinePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlinePipelineWithOptions(request, runtime);
  }

  /**
   * 异步下线集成管道任务。
   * 
   * @param tmpReq - OfflinePipelineByAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflinePipelineByAsyncResponse
   */
  async offlinePipelineByAsyncWithOptions(tmpReq: $_model.OfflinePipelineByAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflinePipelineByAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.OfflinePipelineByAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.offlineCommand)) {
      request.offlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offlineCommand, "OfflineCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.offlineCommandShrink)) {
      body["OfflineCommand"] = request.offlineCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflinePipelineByAsync",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflinePipelineByAsyncResponse>(await this.callApi(params, req, runtime), new $_model.OfflinePipelineByAsyncResponse({}));
  }

  /**
   * 异步下线集成管道任务。
   * 
   * @param request - OfflinePipelineByAsyncRequest
   * @returns OfflinePipelineByAsyncResponse
   */
  async offlinePipelineByAsync(request: $_model.OfflinePipelineByAsyncRequest): Promise<$_model.OfflinePipelineByAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlinePipelineByAsyncWithOptions(request, runtime);
  }

  /**
   * 下线标准。
   * 
   * @param tmpReq - OfflineStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineStandardResponse
   */
  async offlineStandardWithOptions(tmpReq: $_model.OfflineStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineStandardResponse> {
    tmpReq.validate();
    let request = new $_model.OfflineStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.offlineCommand)) {
      request.offlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offlineCommand, "OfflineCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offlineCommandShrink)) {
      body["OfflineCommand"] = request.offlineCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineStandardResponse>(await this.callApi(params, req, runtime), new $_model.OfflineStandardResponse({}));
  }

  /**
   * 下线标准。
   * 
   * @param request - OfflineStandardRequest
   * @returns OfflineStandardResponse
   */
  async offlineStandard(request: $_model.OfflineStandardRequest): Promise<$_model.OfflineStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineStandardWithOptions(request, runtime);
  }

  /**
   * 上线业务实体。
   * 
   * @param tmpReq - OnlineBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineBizEntityResponse
   */
  async onlineBizEntityWithOptions(tmpReq: $_model.OnlineBizEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineBizEntityResponse> {
    tmpReq.validate();
    let request = new $_model.OnlineBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.onlineCommand)) {
      request.onlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.onlineCommand, "OnlineCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.onlineCommandShrink)) {
      body["OnlineCommand"] = request.onlineCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineBizEntityResponse>(await this.callApi(params, req, runtime), new $_model.OnlineBizEntityResponse({}));
  }

  /**
   * 上线业务实体。
   * 
   * @param request - OnlineBizEntityRequest
   * @returns OnlineBizEntityResponse
   */
  async onlineBizEntity(request: $_model.OnlineBizEntityRequest): Promise<$_model.OnlineBizEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineBizEntityWithOptions(request, runtime);
  }

  /**
   * 运维实例。
   * 
   * @param tmpReq - OperateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateInstanceResponse
   */
  async operateInstanceWithOptions(tmpReq: $_model.OperateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.OperateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operateCommand)) {
      request.operateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operateCommand, "OperateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operateCommandShrink)) {
      body["OperateCommand"] = request.operateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.OperateInstanceResponse({}));
  }

  /**
   * 运维实例。
   * 
   * @param request - OperateInstanceRequest
   * @returns OperateInstanceResponse
   */
  async operateInstance(request: $_model.OperateInstanceRequest): Promise<$_model.OperateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateInstanceWithOptions(request, runtime);
  }

  /**
   * 解析离线计算任务的逻辑表依赖，注意解析结果上游依赖信息中可能包含自依赖节点（上游节点ID和解析代码的任务节点ID相同）需要用户自己进行处理。
   * 
   * @param tmpReq - ParseBatchTaskDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ParseBatchTaskDependencyResponse
   */
  async parseBatchTaskDependencyWithOptions(tmpReq: $_model.ParseBatchTaskDependencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ParseBatchTaskDependencyResponse> {
    tmpReq.validate();
    let request = new $_model.ParseBatchTaskDependencyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parseCommand)) {
      request.parseCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parseCommand, "ParseCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parseCommandShrink)) {
      body["ParseCommand"] = request.parseCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ParseBatchTaskDependency",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ParseBatchTaskDependencyResponse>(await this.callApi(params, req, runtime), new $_model.ParseBatchTaskDependencyResponse({}));
  }

  /**
   * 解析离线计算任务的逻辑表依赖，注意解析结果上游依赖信息中可能包含自依赖节点（上游节点ID和解析代码的任务节点ID相同）需要用户自己进行处理。
   * 
   * @param request - ParseBatchTaskDependencyRequest
   * @returns ParseBatchTaskDependencyResponse
   */
  async parseBatchTaskDependency(request: $_model.ParseBatchTaskDependencyRequest): Promise<$_model.ParseBatchTaskDependencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.parseBatchTaskDependencyWithOptions(request, runtime);
  }

  /**
   * 暂停物理节点调度。
   * 
   * @param tmpReq - PausePhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PausePhysicalNodeResponse
   */
  async pausePhysicalNodeWithOptions(tmpReq: $_model.PausePhysicalNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PausePhysicalNodeResponse> {
    tmpReq.validate();
    let request = new $_model.PausePhysicalNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pauseCommand)) {
      request.pauseCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pauseCommand, "PauseCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pauseCommandShrink)) {
      body["PauseCommand"] = request.pauseCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PausePhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PausePhysicalNodeResponse>(await this.callApi(params, req, runtime), new $_model.PausePhysicalNodeResponse({}));
  }

  /**
   * 暂停物理节点调度。
   * 
   * @param request - PausePhysicalNodeRequest
   * @returns PausePhysicalNodeResponse
   */
  async pausePhysicalNode(request: $_model.PausePhysicalNodeRequest): Promise<$_model.PausePhysicalNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pausePhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 发布数据服务API到生产环境。
   * 
   * @param request - PublishDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDataServiceApiResponse
   */
  async publishDataServiceApiWithOptions(request: $_model.PublishDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishDataServiceApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishDataServiceApi",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.PublishDataServiceApiResponse({}));
  }

  /**
   * 发布数据服务API到生产环境。
   * 
   * @param request - PublishDataServiceApiRequest
   * @returns PublishDataServiceApiResponse
   */
  async publishDataServiceApi(request: $_model.PublishDataServiceApiRequest): Promise<$_model.PublishDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishDataServiceApiWithOptions(request, runtime);
  }

  /**
   * 批量发布对象
   * 
   * @param tmpReq - PublishObjectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishObjectListResponse
   */
  async publishObjectListWithOptions(tmpReq: $_model.PublishObjectListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishObjectListResponse> {
    tmpReq.validate();
    let request = new $_model.PublishObjectListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.publishCommand)) {
      request.publishCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.publishCommand, "PublishCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.publishCommandShrink)) {
      body["PublishCommand"] = request.publishCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishObjectList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishObjectListResponse>(await this.callApi(params, req, runtime), new $_model.PublishObjectListResponse({}));
  }

  /**
   * 批量发布对象
   * 
   * @param request - PublishObjectListRequest
   * @returns PublishObjectListResponse
   */
  async publishObjectList(request: $_model.PublishObjectListRequest): Promise<$_model.PublishObjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishObjectListWithOptions(request, runtime);
  }

  /**
   * 发布标准。
   * 
   * @param tmpReq - PublishStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishStandardResponse
   */
  async publishStandardWithOptions(tmpReq: $_model.PublishStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishStandardResponse> {
    tmpReq.validate();
    let request = new $_model.PublishStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.publishCommand)) {
      request.publishCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.publishCommand, "PublishCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.publishCommandShrink)) {
      body["PublishCommand"] = request.publishCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishStandardResponse>(await this.callApi(params, req, runtime), new $_model.PublishStandardResponse({}));
  }

  /**
   * 发布标准。
   * 
   * @param request - PublishStandardRequest
   * @returns PublishStandardResponse
   */
  async publishStandard(request: $_model.PublishStandardRequest): Promise<$_model.PublishStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishStandardWithOptions(request, runtime);
  }

  /**
   * 删除项目成员。
   * 
   * @param tmpReq - RemoveProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveProjectMemberResponse
   */
  async removeProjectMemberWithOptions(tmpReq: $_model.RemoveProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveProjectMemberResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveProjectMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.RemoveProjectMemberResponse({}));
  }

  /**
   * 删除项目成员。
   * 
   * @param request - RemoveProjectMemberRequest
   * @returns RemoveProjectMemberResponse
   */
  async removeProjectMember(request: $_model.RemoveProjectMemberRequest): Promise<$_model.RemoveProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeProjectMemberWithOptions(request, runtime);
  }

  /**
   * 批量删除质量规则和调度的绑定关系。
   * 
   * @param tmpReq - RemoveQualityRuleSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveQualityRuleSchedulesResponse
   */
  async removeQualityRuleSchedulesWithOptions(tmpReq: $_model.RemoveQualityRuleSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveQualityRuleSchedulesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveQualityRuleSchedulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveQualityRuleSchedules",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveQualityRuleSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveQualityRuleSchedulesResponse({}));
  }

  /**
   * 批量删除质量规则和调度的绑定关系。
   * 
   * @param request - RemoveQualityRuleSchedulesRequest
   * @returns RemoveQualityRuleSchedulesResponse
   */
  async removeQualityRuleSchedules(request: $_model.RemoveQualityRuleSchedulesRequest): Promise<$_model.RemoveQualityRuleSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeQualityRuleSchedulesWithOptions(request, runtime);
  }

  /**
   * 删除租户成员
   * 
   * @param tmpReq - RemoveTenantMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTenantMemberResponse
   */
  async removeTenantMemberWithOptions(tmpReq: $_model.RemoveTenantMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTenantMemberResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveTenantMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTenantMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTenantMemberResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTenantMemberResponse({}));
  }

  /**
   * 删除租户成员
   * 
   * @param request - RemoveTenantMemberRequest
   * @returns RemoveTenantMemberResponse
   */
  async removeTenantMember(request: $_model.RemoveTenantMemberRequest): Promise<$_model.RemoveTenantMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTenantMemberWithOptions(request, runtime);
  }

  /**
   * 移除用户组成员.
   * 
   * @param tmpReq - RemoveUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserGroupMemberResponse
   */
  async removeUserGroupMemberWithOptions(tmpReq: $_model.RemoveUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserGroupMemberResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveUserGroupMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserGroupMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserGroupMemberResponse({}));
  }

  /**
   * 移除用户组成员.
   * 
   * @param request - RemoveUserGroupMemberRequest
   * @returns RemoveUserGroupMemberResponse
   */
  async removeUserGroupMember(request: $_model.RemoveUserGroupMemberRequest): Promise<$_model.RemoveUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * 更新项目白名单。
   * 
   * @param tmpReq - ReplaceProjectWhiteListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceProjectWhiteListsResponse
   */
  async replaceProjectWhiteListsWithOptions(tmpReq: $_model.ReplaceProjectWhiteListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceProjectWhiteListsResponse> {
    tmpReq.validate();
    let request = new $_model.ReplaceProjectWhiteListsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.replaceCommand)) {
      request.replaceCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.replaceCommand, "ReplaceCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.replaceCommandShrink)) {
      body["ReplaceCommand"] = request.replaceCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceProjectWhiteLists",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceProjectWhiteListsResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceProjectWhiteListsResponse({}));
  }

  /**
   * 更新项目白名单。
   * 
   * @param request - ReplaceProjectWhiteListsRequest
   * @returns ReplaceProjectWhiteListsResponse
   */
  async replaceProjectWhiteLists(request: $_model.ReplaceProjectWhiteListsRequest): Promise<$_model.ReplaceProjectWhiteListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceProjectWhiteListsWithOptions(request, runtime);
  }

  /**
   * 恢复物理节点调度。
   * 
   * @param tmpReq - ResumePhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumePhysicalNodeResponse
   */
  async resumePhysicalNodeWithOptions(tmpReq: $_model.ResumePhysicalNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumePhysicalNodeResponse> {
    tmpReq.validate();
    let request = new $_model.ResumePhysicalNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resumeCommand)) {
      request.resumeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resumeCommand, "ResumeCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resumeCommandShrink)) {
      body["ResumeCommand"] = request.resumeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumePhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumePhysicalNodeResponse>(await this.callApi(params, req, runtime), new $_model.ResumePhysicalNodeResponse({}));
  }

  /**
   * 恢复物理节点调度。
   * 
   * @param request - ResumePhysicalNodeRequest
   * @returns ResumePhysicalNodeResponse
   */
  async resumePhysicalNode(request: $_model.ResumePhysicalNodeRequest): Promise<$_model.ResumePhysicalNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumePhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 重新转交运行失败的转交任务
   * 
   * @param tmpReq - RetryTransferOwnershipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryTransferOwnershipResponse
   */
  async retryTransferOwnershipWithOptions(tmpReq: $_model.RetryTransferOwnershipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryTransferOwnershipResponse> {
    tmpReq.validate();
    let request = new $_model.RetryTransferOwnershipShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.privilegeTransferRecord)) {
      request.privilegeTransferRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.privilegeTransferRecord, "PrivilegeTransferRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privilegeTransferRecordShrink)) {
      body["PrivilegeTransferRecord"] = request.privilegeTransferRecordShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryTransferOwnership",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryTransferOwnershipResponse>(await this.callApi(params, req, runtime), new $_model.RetryTransferOwnershipResponse({}));
  }

  /**
   * 重新转交运行失败的转交任务
   * 
   * @param request - RetryTransferOwnershipRequest
   * @returns RetryTransferOwnershipResponse
   */
  async retryTransferOwnership(request: $_model.RetryTransferOwnershipRequest): Promise<$_model.RetryTransferOwnershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryTransferOwnershipWithOptions(request, runtime);
  }

  /**
   * 回收API授权。
   * 
   * @param tmpReq - RevokeDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeDataServiceApiResponse
   */
  async revokeDataServiceApiWithOptions(tmpReq: $_model.RevokeDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeDataServiceApiResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeDataServiceApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.revokeCommand)) {
      request.revokeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.revokeCommand, "RevokeCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.revokeCommandShrink)) {
      body["RevokeCommand"] = request.revokeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeDataServiceApi",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.RevokeDataServiceApiResponse({}));
  }

  /**
   * 回收API授权。
   * 
   * @param request - RevokeDataServiceApiRequest
   * @returns RevokeDataServiceApiResponse
   */
  async revokeDataServiceApi(request: $_model.RevokeDataServiceApiRequest): Promise<$_model.RevokeDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeDataServiceApiWithOptions(request, runtime);
  }

  /**
   * 回收用户资源授权
   * 
   * @param tmpReq - RevokeResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourcePermissionResponse
   */
  async revokeResourcePermissionWithOptions(tmpReq: $_model.RevokeResourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourcePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.revokeCommand)) {
      request.revokeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.revokeCommand, "RevokeCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.revokeCommandShrink)) {
      body["RevokeCommand"] = request.revokeCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourcePermissionResponse({}));
  }

  /**
   * 回收用户资源授权
   * 
   * @param request - RevokeResourcePermissionRequest
   * @returns RevokeResourcePermissionResponse
   */
  async revokeResourcePermission(request: $_model.RevokeResourcePermissionRequest): Promise<$_model.RevokeResourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 终止即席查询任务。
   * 
   * @param request - StopAdHocTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAdHocTaskResponse
   */
  async stopAdHocTaskWithOptions(request: $_model.StopAdHocTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAdHocTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAdHocTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAdHocTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopAdHocTaskResponse({}));
  }

  /**
   * 终止即席查询任务。
   * 
   * @param request - StopAdHocTaskRequest
   * @returns StopAdHocTaskResponse
   */
  async stopAdHocTask(request: $_model.StopAdHocTaskRequest): Promise<$_model.StopAdHocTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAdHocTaskWithOptions(request, runtime);
  }

  /**
   * 提交离线计算任务。
   * 
   * @param tmpReq - SubmitBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBatchTaskResponse
   */
  async submitBatchTaskWithOptions(tmpReq: $_model.SubmitBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitBatchTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.submitCommand)) {
      request.submitCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitCommand, "SubmitCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.submitCommandShrink)) {
      body["SubmitCommand"] = request.submitCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitBatchTaskResponse({}));
  }

  /**
   * 提交离线计算任务。
   * 
   * @param request - SubmitBatchTaskRequest
   * @returns SubmitBatchTaskResponse
   */
  async submitBatchTask(request: $_model.SubmitBatchTaskRequest): Promise<$_model.SubmitBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitBatchTaskWithOptions(request, runtime);
  }

  /**
   * 批量提交规则任务,支持试跑。
   * 
   * @param tmpReq - SubmitQualityRuleTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitQualityRuleTasksResponse
   */
  async submitQualityRuleTasksWithOptions(tmpReq: $_model.SubmitQualityRuleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitQualityRuleTasksResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitQualityRuleTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.submitCommand)) {
      request.submitCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitCommand, "SubmitCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.submitCommandShrink)) {
      body["SubmitCommand"] = request.submitCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitQualityRuleTasks",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitQualityRuleTasksResponse>(await this.callApi(params, req, runtime), new $_model.SubmitQualityRuleTasksResponse({}));
  }

  /**
   * 批量提交规则任务,支持试跑。
   * 
   * @param request - SubmitQualityRuleTasksRequest
   * @returns SubmitQualityRuleTasksResponse
   */
  async submitQualityRuleTasks(request: $_model.SubmitQualityRuleTasksRequest): Promise<$_model.SubmitQualityRuleTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitQualityRuleTasksWithOptions(request, runtime);
  }

  /**
   * 批量提交监控对象校验任务。
   * 
   * @param tmpReq - SubmitQualityWatchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitQualityWatchTasksResponse
   */
  async submitQualityWatchTasksWithOptions(tmpReq: $_model.SubmitQualityWatchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitQualityWatchTasksResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitQualityWatchTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.submitCommand)) {
      request.submitCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitCommand, "SubmitCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.submitCommandShrink)) {
      body["SubmitCommand"] = request.submitCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitQualityWatchTasks",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitQualityWatchTasksResponse>(await this.callApi(params, req, runtime), new $_model.SubmitQualityWatchTasksResponse({}));
  }

  /**
   * 批量提交监控对象校验任务。
   * 
   * @param request - SubmitQualityWatchTasksRequest
   * @returns SubmitQualityWatchTasksResponse
   */
  async submitQualityWatchTasks(request: $_model.SubmitQualityWatchTasksRequest): Promise<$_model.SubmitQualityWatchTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitQualityWatchTasksWithOptions(request, runtime);
  }

  /**
   * 同步部门信息。
   * 
   * @param tmpReq - SyncDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDepartmentResponse
   */
  async syncDepartmentWithOptions(tmpReq: $_model.SyncDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDepartmentResponse> {
    tmpReq.validate();
    let request = new $_model.SyncDepartmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.syncDepartmentCommand)) {
      request.syncDepartmentCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.syncDepartmentCommand, "SyncDepartmentCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.syncDepartmentCommandShrink)) {
      body["SyncDepartmentCommand"] = request.syncDepartmentCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDepartment",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.SyncDepartmentResponse({}));
  }

  /**
   * 同步部门信息。
   * 
   * @param request - SyncDepartmentRequest
   * @returns SyncDepartmentResponse
   */
  async syncDepartment(request: $_model.SyncDepartmentRequest): Promise<$_model.SyncDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDepartmentWithOptions(request, runtime);
  }

  /**
   * 同步部门成员信息
   * 
   * @param tmpReq - SyncDepartmentUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDepartmentUserResponse
   */
  async syncDepartmentUserWithOptions(tmpReq: $_model.SyncDepartmentUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDepartmentUserResponse> {
    tmpReq.validate();
    let request = new $_model.SyncDepartmentUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.syncDepartmentUserCommand)) {
      request.syncDepartmentUserCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.syncDepartmentUserCommand, "SyncDepartmentUserCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.syncDepartmentUserCommandShrink)) {
      body["SyncDepartmentUserCommand"] = request.syncDepartmentUserCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDepartmentUser",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDepartmentUserResponse>(await this.callApi(params, req, runtime), new $_model.SyncDepartmentUserResponse({}));
  }

  /**
   * 同步部门成员信息
   * 
   * @param request - SyncDepartmentUserRequest
   * @returns SyncDepartmentUserResponse
   */
  async syncDepartmentUser(request: $_model.SyncDepartmentUserRequest): Promise<$_model.SyncDepartmentUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDepartmentUserWithOptions(request, runtime);
  }

  /**
   * 一键转交负责人
   * 
   * @param tmpReq - TransferOwnershipForAllObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferOwnershipForAllObjectResponse
   */
  async transferOwnershipForAllObjectWithOptions(tmpReq: $_model.TransferOwnershipForAllObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferOwnershipForAllObjectResponse> {
    tmpReq.validate();
    let request = new $_model.TransferOwnershipForAllObjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.privilegeTransferRecord)) {
      request.privilegeTransferRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.privilegeTransferRecord, "PrivilegeTransferRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privilegeTransferRecordShrink)) {
      body["PrivilegeTransferRecord"] = request.privilegeTransferRecordShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferOwnershipForAllObject",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferOwnershipForAllObjectResponse>(await this.callApi(params, req, runtime), new $_model.TransferOwnershipForAllObjectResponse({}));
  }

  /**
   * 一键转交负责人
   * 
   * @param request - TransferOwnershipForAllObjectRequest
   * @returns TransferOwnershipForAllObjectResponse
   */
  async transferOwnershipForAllObject(request: $_model.TransferOwnershipForAllObjectRequest): Promise<$_model.TransferOwnershipForAllObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferOwnershipForAllObjectWithOptions(request, runtime);
  }

  /**
   * 编辑即席查询文件。
   * 
   * @param tmpReq - UpdateAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdHocFileResponse
   */
  async updateAdHocFileWithOptions(tmpReq: $_model.UpdateAdHocFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdHocFileResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAdHocFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdHocFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdHocFileResponse({}));
  }

  /**
   * 编辑即席查询文件。
   * 
   * @param request - UpdateAdHocFileRequest
   * @returns UpdateAdHocFileResponse
   */
  async updateAdHocFile(request: $_model.UpdateAdHocFileRequest): Promise<$_model.UpdateAdHocFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAdHocFileWithOptions(request, runtime);
  }

  /**
   * 编辑离线计算任务。
   * 
   * @param tmpReq - UpdateBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBatchTaskResponse
   */
  async updateBatchTaskWithOptions(tmpReq: $_model.UpdateBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBatchTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBatchTaskResponse({}));
  }

  /**
   * 编辑离线计算任务。
   * 
   * @param request - UpdateBatchTaskRequest
   * @returns UpdateBatchTaskResponse
   */
  async updateBatchTask(request: $_model.UpdateBatchTaskRequest): Promise<$_model.UpdateBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBatchTaskWithOptions(request, runtime);
  }

  /**
   * 编辑离线计算任务自定义血缘。
   * 
   * @param tmpReq - UpdateBatchTaskUdfLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBatchTaskUdfLineagesResponse
   */
  async updateBatchTaskUdfLineagesWithOptions(tmpReq: $_model.UpdateBatchTaskUdfLineagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBatchTaskUdfLineagesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBatchTaskUdfLineagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBatchTaskUdfLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBatchTaskUdfLineagesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBatchTaskUdfLineagesResponse({}));
  }

  /**
   * 编辑离线计算任务自定义血缘。
   * 
   * @param request - UpdateBatchTaskUdfLineagesRequest
   * @returns UpdateBatchTaskUdfLineagesResponse
   */
  async updateBatchTaskUdfLineages(request: $_model.UpdateBatchTaskUdfLineagesRequest): Promise<$_model.UpdateBatchTaskUdfLineagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBatchTaskUdfLineagesWithOptions(request, runtime);
  }

  /**
   * 更新业务实体、
   * 
   * @param tmpReq - UpdateBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizEntityResponse
   */
  async updateBizEntityWithOptions(tmpReq: $_model.UpdateBizEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBizEntityResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBizEntityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBizEntityResponse({}));
  }

  /**
   * 更新业务实体、
   * 
   * @param request - UpdateBizEntityRequest
   * @returns UpdateBizEntityResponse
   */
  async updateBizEntity(request: $_model.UpdateBizEntityRequest): Promise<$_model.UpdateBizEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBizEntityWithOptions(request, runtime);
  }

  /**
   * 更新业务指标
   * 
   * @param tmpReq - UpdateBizMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizMetricResponse
   */
  async updateBizMetricWithOptions(tmpReq: $_model.UpdateBizMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBizMetricResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBizMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateBizMetricCommand)) {
      request.updateBizMetricCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateBizMetricCommand, "UpdateBizMetricCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateBizMetricCommandShrink)) {
      body["UpdateBizMetricCommand"] = request.updateBizMetricCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBizMetric",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBizMetricResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBizMetricResponse({}));
  }

  /**
   * 更新业务指标
   * 
   * @param request - UpdateBizMetricRequest
   * @returns UpdateBizMetricResponse
   */
  async updateBizMetric(request: $_model.UpdateBizMetricRequest): Promise<$_model.UpdateBizMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBizMetricWithOptions(request, runtime);
  }

  /**
   * 更新数据板块。
   * 
   * @param tmpReq - UpdateBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizUnitResponse
   */
  async updateBizUnitWithOptions(tmpReq: $_model.UpdateBizUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBizUnitResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBizUnitShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBizUnitResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBizUnitResponse({}));
  }

  /**
   * 更新数据板块。
   * 
   * @param request - UpdateBizUnitRequest
   * @returns UpdateBizUnitResponse
   */
  async updateBizUnit(request: $_model.UpdateBizUnitRequest): Promise<$_model.UpdateBizUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBizUnitWithOptions(request, runtime);
  }

  /**
   * 修改计算源。
   * 
   * @param tmpReq - UpdateComputeSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeSourceResponse
   */
  async updateComputeSourceWithOptions(tmpReq: $_model.UpdateComputeSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeSourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateComputeSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeSourceResponse({}));
  }

  /**
   * 修改计算源。
   * 
   * @param request - UpdateComputeSourceRequest
   * @returns UpdateComputeSourceResponse
   */
  async updateComputeSource(request: $_model.UpdateComputeSourceRequest): Promise<$_model.UpdateComputeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeSourceWithOptions(request, runtime);
  }

  /**
   * 更新主题域。
   * 
   * @param tmpReq - UpdateDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataDomainResponse
   */
  async updateDataDomainWithOptions(tmpReq: $_model.UpdateDataDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataDomainResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataDomainResponse({}));
  }

  /**
   * 更新主题域。
   * 
   * @param request - UpdateDataDomainRequest
   * @returns UpdateDataDomainResponse
   */
  async updateDataDomain(request: $_model.UpdateDataDomainRequest): Promise<$_model.UpdateDataDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataDomainWithOptions(request, runtime);
  }

  /**
   * 编辑数据源基本信息
   * 
   * @param tmpReq - UpdateDataSourceBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceBasicInfoResponse
   */
  async updateDataSourceBasicInfoWithOptions(tmpReq: $_model.UpdateDataSourceBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceBasicInfoResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataSourceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSourceBasicInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceBasicInfoResponse({}));
  }

  /**
   * 编辑数据源基本信息
   * 
   * @param request - UpdateDataSourceBasicInfoRequest
   * @returns UpdateDataSourceBasicInfoResponse
   */
  async updateDataSourceBasicInfo(request: $_model.UpdateDataSourceBasicInfoRequest): Promise<$_model.UpdateDataSourceBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceBasicInfoWithOptions(request, runtime);
  }

  /**
   * 编辑数据源连接配置项
   * 
   * @param tmpReq - UpdateDataSourceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceConfigResponse
   */
  async updateDataSourceConfigWithOptions(tmpReq: $_model.UpdateDataSourceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataSourceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSourceConfig",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceConfigResponse({}));
  }

  /**
   * 编辑数据源连接配置项
   * 
   * @param request - UpdateDataSourceConfigRequest
   * @returns UpdateDataSourceConfigResponse
   */
  async updateDataSourceConfig(request: $_model.UpdateDataSourceConfigRequest): Promise<$_model.UpdateDataSourceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceConfigWithOptions(request, runtime);
  }

  /**
   * 修改菜单树文件所在目录
   * 
   * @param request - UpdateFileDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileDirectoryResponse
   */
  async updateFileDirectoryWithOptions(request: $_model.UpdateFileDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directory)) {
      query["Directory"] = request.directory;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileDirectoryResponse({}));
  }

  /**
   * 修改菜单树文件所在目录
   * 
   * @param request - UpdateFileDirectoryRequest
   * @returns UpdateFileDirectoryResponse
   */
  async updateFileDirectory(request: $_model.UpdateFileDirectoryRequest): Promise<$_model.UpdateFileDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileDirectoryWithOptions(request, runtime);
  }

  /**
   * 修改菜单树文件名称
   * 
   * @param request - UpdateFileNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileNameResponse
   */
  async updateFileNameWithOptions(request: $_model.UpdateFileNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileNameResponse({}));
  }

  /**
   * 修改菜单树文件名称
   * 
   * @param request - UpdateFileNameRequest
   * @returns UpdateFileNameResponse
   */
  async updateFileName(request: $_model.UpdateFileNameRequest): Promise<$_model.UpdateFileNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileNameWithOptions(request, runtime);
  }

  /**
   * 更新集成管道任务。
   * 
   * @param tmpReq - UpdatePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineResponse
   */
  async updatePipelineWithOptions(tmpReq: $_model.UpdatePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePipelineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipeline",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineResponse({}));
  }

  /**
   * 更新集成管道任务。
   * 
   * @param request - UpdatePipelineRequest
   * @returns UpdatePipelineResponse
   */
  async updatePipeline(request: $_model.UpdatePipelineRequest): Promise<$_model.UpdatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

  /**
   * 异步更新集成管道任务。
   * 
   * @param tmpReq - UpdatePipelineByAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineByAsyncResponse
   */
  async updatePipelineByAsyncWithOptions(tmpReq: $_model.UpdatePipelineByAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineByAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePipelineByAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.context)) {
      request.contextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.context, "Context", "json");
    }

    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextShrink)) {
      body["Context"] = request.contextShrink;
    }

    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipelineByAsync",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineByAsyncResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineByAsyncResponse({}));
  }

  /**
   * 异步更新集成管道任务。
   * 
   * @param request - UpdatePipelineByAsyncRequest
   * @returns UpdatePipelineByAsyncResponse
   */
  async updatePipelineByAsync(request: $_model.UpdatePipelineByAsyncRequest): Promise<$_model.UpdatePipelineByAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePipelineByAsyncWithOptions(request, runtime);
  }

  /**
   * 增加项目成员。
   * 
   * @param tmpReq - UpdateProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectMemberResponse
   */
  async updateProjectMemberWithOptions(tmpReq: $_model.UpdateProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectMemberResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectMemberResponse({}));
  }

  /**
   * 增加项目成员。
   * 
   * @param request - UpdateProjectMemberRequest
   * @returns UpdateProjectMemberResponse
   */
  async updateProjectMember(request: $_model.UpdateProjectMemberRequest): Promise<$_model.UpdateProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectMemberWithOptions(request, runtime);
  }

  /**
   * 批量开启或关闭质量规则。
   * 
   * @param tmpReq - UpdateQualityRuleSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityRuleSwitchResponse
   */
  async updateQualityRuleSwitchWithOptions(tmpReq: $_model.UpdateQualityRuleSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityRuleSwitchResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateQualityRuleSwitchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityRuleSwitch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityRuleSwitchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityRuleSwitchResponse({}));
  }

  /**
   * 批量开启或关闭质量规则。
   * 
   * @param request - UpdateQualityRuleSwitchRequest
   * @returns UpdateQualityRuleSwitchResponse
   */
  async updateQualityRuleSwitch(request: $_model.UpdateQualityRuleSwitchRequest): Promise<$_model.UpdateQualityRuleSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityRuleSwitchWithOptions(request, runtime);
  }

  /**
   * 批量开启或关闭质量监控对象。
   * 
   * @param tmpReq - UpdateQualityWatchSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityWatchSwitchResponse
   */
  async updateQualityWatchSwitchWithOptions(tmpReq: $_model.UpdateQualityWatchSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityWatchSwitchResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateQualityWatchSwitchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityWatchSwitch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityWatchSwitchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityWatchSwitchResponse({}));
  }

  /**
   * 批量开启或关闭质量监控对象。
   * 
   * @param request - UpdateQualityWatchSwitchRequest
   * @returns UpdateQualityWatchSwitchResponse
   */
  async updateQualityWatchSwitch(request: $_model.UpdateQualityWatchSwitchRequest): Promise<$_model.UpdateQualityWatchSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityWatchSwitchWithOptions(request, runtime);
  }

  /**
   * 编辑资源文件。
   * 
   * @param tmpReq - UpdateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(tmpReq: $_model.UpdateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceResponse({}));
  }

  /**
   * 编辑资源文件。
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(request: $_model.UpdateResourceRequest): Promise<$_model.UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  /**
   * 更新行级权限
   * 
   * @param tmpReq - UpdateRowPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRowPermissionResponse
   */
  async updateRowPermissionWithOptions(tmpReq: $_model.UpdateRowPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRowPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRowPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateRowPermissionCommand)) {
      request.updateRowPermissionCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateRowPermissionCommand, "UpdateRowPermissionCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateRowPermissionCommandShrink)) {
      body["UpdateRowPermissionCommand"] = request.updateRowPermissionCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRowPermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRowPermissionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRowPermissionResponse({}));
  }

  /**
   * 更新行级权限
   * 
   * @param request - UpdateRowPermissionRequest
   * @returns UpdateRowPermissionResponse
   */
  async updateRowPermission(request: $_model.UpdateRowPermissionRequest): Promise<$_model.UpdateRowPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRowPermissionWithOptions(request, runtime);
  }

  /**
   * 更新数据分类。
   * 
   * @param tmpReq - UpdateSecurityClassifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityClassifyResponse
   */
  async updateSecurityClassifyWithOptions(tmpReq: $_model.UpdateSecurityClassifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityClassifyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecurityClassifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityClassify",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityClassifyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityClassifyResponse({}));
  }

  /**
   * 更新数据分类。
   * 
   * @param request - UpdateSecurityClassifyRequest
   * @returns UpdateSecurityClassifyResponse
   */
  async updateSecurityClassify(request: $_model.UpdateSecurityClassifyRequest): Promise<$_model.UpdateSecurityClassifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityClassifyWithOptions(request, runtime);
  }

  /**
   * 更新数据分类目录。
   * 
   * @param tmpReq - UpdateSecurityClassifyCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityClassifyCatalogResponse
   */
  async updateSecurityClassifyCatalogWithOptions(tmpReq: $_model.UpdateSecurityClassifyCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityClassifyCatalogResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecurityClassifyCatalogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityClassifyCatalog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityClassifyCatalogResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityClassifyCatalogResponse({}));
  }

  /**
   * 更新数据分类目录。
   * 
   * @param request - UpdateSecurityClassifyCatalogRequest
   * @returns UpdateSecurityClassifyCatalogResponse
   */
  async updateSecurityClassifyCatalog(request: $_model.UpdateSecurityClassifyCatalogRequest): Promise<$_model.UpdateSecurityClassifyCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityClassifyCatalogWithOptions(request, runtime);
  }

  /**
   * 更新安全识别结果的生效状态。
   * 
   * @param tmpReq - UpdateSecurityIdentifyResultStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityIdentifyResultStatusResponse
   */
  async updateSecurityIdentifyResultStatusWithOptions(tmpReq: $_model.UpdateSecurityIdentifyResultStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityIdentifyResultStatusResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecurityIdentifyResultStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityIdentifyResultStatus",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityIdentifyResultStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityIdentifyResultStatusResponse({}));
  }

  /**
   * 更新安全识别结果的生效状态。
   * 
   * @param request - UpdateSecurityIdentifyResultStatusRequest
   * @returns UpdateSecurityIdentifyResultStatusResponse
   */
  async updateSecurityIdentifyResultStatus(request: $_model.UpdateSecurityIdentifyResultStatusRequest): Promise<$_model.UpdateSecurityIdentifyResultStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityIdentifyResultStatusWithOptions(request, runtime);
  }

  /**
   * 通过分级顺序更新数据分级。
   * 
   * @param tmpReq - UpdateSecurityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityLevelResponse
   */
  async updateSecurityLevelWithOptions(tmpReq: $_model.UpdateSecurityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityLevelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecurityLevelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityLevel",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityLevelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityLevelResponse({}));
  }

  /**
   * 通过分级顺序更新数据分级。
   * 
   * @param request - UpdateSecurityLevelRequest
   * @returns UpdateSecurityLevelResponse
   */
  async updateSecurityLevel(request: $_model.UpdateSecurityLevelRequest): Promise<$_model.UpdateSecurityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityLevelWithOptions(request, runtime);
  }

  /**
   * 更新标准。
   * 
   * @param tmpReq - UpdateStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardResponse
   */
  async updateStandardWithOptions(tmpReq: $_model.UpdateStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandard",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardResponse({}));
  }

  /**
   * 更新标准。
   * 
   * @param request - UpdateStandardRequest
   * @returns UpdateStandardResponse
   */
  async updateStandard(request: $_model.UpdateStandardRequest): Promise<$_model.UpdateStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardWithOptions(request, runtime);
  }

  /**
   * 更新数据标准码表。
   * 
   * @param tmpReq - UpdateStandardLookupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardLookupTableResponse
   */
  async updateStandardLookupTableWithOptions(tmpReq: $_model.UpdateStandardLookupTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardLookupTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardLookupTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardLookupTable",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardLookupTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardLookupTableResponse({}));
  }

  /**
   * 更新数据标准码表。
   * 
   * @param request - UpdateStandardLookupTableRequest
   * @returns UpdateStandardLookupTableResponse
   */
  async updateStandardLookupTable(request: $_model.UpdateStandardLookupTableRequest): Promise<$_model.UpdateStandardLookupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardLookupTableWithOptions(request, runtime);
  }

  /**
   * 将标准映射关系置为无效映射。
   * 
   * @param tmpReq - UpdateStandardMappingToInvalidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardMappingToInvalidResponse
   */
  async updateStandardMappingToInvalidWithOptions(tmpReq: $_model.UpdateStandardMappingToInvalidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardMappingToInvalidResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardMappingToInvalidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardMappingToInvalid",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardMappingToInvalidResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardMappingToInvalidResponse({}));
  }

  /**
   * 将标准映射关系置为无效映射。
   * 
   * @param request - UpdateStandardMappingToInvalidRequest
   * @returns UpdateStandardMappingToInvalidResponse
   */
  async updateStandardMappingToInvalid(request: $_model.UpdateStandardMappingToInvalidRequest): Promise<$_model.UpdateStandardMappingToInvalidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardMappingToInvalidWithOptions(request, runtime);
  }

  /**
   * 更新标准集。
   * 
   * @param tmpReq - UpdateStandardSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardSetResponse
   */
  async updateStandardSetWithOptions(tmpReq: $_model.UpdateStandardSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardSetResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardSetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardSet",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardSetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardSetResponse({}));
  }

  /**
   * 更新标准集。
   * 
   * @param request - UpdateStandardSetRequest
   * @returns UpdateStandardSetResponse
   */
  async updateStandardSet(request: $_model.UpdateStandardSetRequest): Promise<$_model.UpdateStandardSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardSetWithOptions(request, runtime);
  }

  /**
   * 更新数据标准模板。
   * 
   * @param tmpReq - UpdateStandardTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardTemplateResponse
   */
  async updateStandardTemplateWithOptions(tmpReq: $_model.UpdateStandardTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardTemplate",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardTemplateResponse({}));
  }

  /**
   * 更新数据标准模板。
   * 
   * @param request - UpdateStandardTemplateRequest
   * @returns UpdateStandardTemplateResponse
   */
  async updateStandardTemplate(request: $_model.UpdateStandardTemplateRequest): Promise<$_model.UpdateStandardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardTemplateWithOptions(request, runtime);
  }

  /**
   * 更新数据标准词根。
   * 
   * @param tmpReq - UpdateStandardWordRootRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardWordRootResponse
   */
  async updateStandardWordRootWithOptions(tmpReq: $_model.UpdateStandardWordRootRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardWordRootResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStandardWordRootShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardWordRoot",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardWordRootResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardWordRootResponse({}));
  }

  /**
   * 更新数据标准词根。
   * 
   * @param request - UpdateStandardWordRootRequest
   * @returns UpdateStandardWordRootResponse
   */
  async updateStandardWordRoot(request: $_model.UpdateStandardWordRootRequest): Promise<$_model.UpdateStandardWordRootResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardWordRootWithOptions(request, runtime);
  }

  /**
   * 修改租户计算设置。
   * 
   * @param tmpReq - UpdateTenantComputeEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTenantComputeEngineResponse
   */
  async updateTenantComputeEngineWithOptions(tmpReq: $_model.UpdateTenantComputeEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTenantComputeEngineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTenantComputeEngineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTenantComputeEngine",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTenantComputeEngineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTenantComputeEngineResponse({}));
  }

  /**
   * 修改租户计算设置。
   * 
   * @param request - UpdateTenantComputeEngineRequest
   * @returns UpdateTenantComputeEngineResponse
   */
  async updateTenantComputeEngine(request: $_model.UpdateTenantComputeEngineRequest): Promise<$_model.UpdateTenantComputeEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTenantComputeEngineWithOptions(request, runtime);
  }

  /**
   * 编辑租户成员
   * 
   * @param tmpReq - UpdateTenantMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTenantMemberResponse
   */
  async updateTenantMemberWithOptions(tmpReq: $_model.UpdateTenantMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTenantMemberResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTenantMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTenantMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTenantMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTenantMemberResponse({}));
  }

  /**
   * 编辑租户成员
   * 
   * @param request - UpdateTenantMemberRequest
   * @returns UpdateTenantMemberResponse
   */
  async updateTenantMember(request: $_model.UpdateTenantMemberRequest): Promise<$_model.UpdateTenantMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTenantMemberWithOptions(request, runtime);
  }

  /**
   * 编辑自定义函数。
   * 
   * @param tmpReq - UpdateUdfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfResponse
   */
  async updateUdfWithOptions(tmpReq: $_model.UpdateUdfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUdfResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUdfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUdf",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUdfResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUdfResponse({}));
  }

  /**
   * 编辑自定义函数。
   * 
   * @param request - UpdateUdfRequest
   * @returns UpdateUdfResponse
   */
  async updateUdf(request: $_model.UpdateUdfRequest): Promise<$_model.UpdateUdfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUdfWithOptions(request, runtime);
  }

  /**
   * 编辑用户组.
   * 
   * @param tmpReq - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(tmpReq: $_model.UpdateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserGroupResponse({}));
  }

  /**
   * 编辑用户组.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: $_model.UpdateUserGroupRequest): Promise<$_model.UpdateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * 编辑用户组启用开关.
   * 
   * @param request - UpdateUserGroupSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupSwitchResponse
   */
  async updateUserGroupSwitchWithOptions(request: $_model.UpdateUserGroupSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserGroupSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroupSwitch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserGroupSwitchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserGroupSwitchResponse({}));
  }

  /**
   * 编辑用户组启用开关.
   * 
   * @param request - UpdateUserGroupSwitchRequest
   * @returns UpdateUserGroupSwitchResponse
   */
  async updateUserGroupSwitch(request: $_model.UpdateUserGroupSwitchRequest): Promise<$_model.UpdateUserGroupSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupSwitchWithOptions(request, runtime);
  }

  /**
   * 新建或者修改质量规则。
   * 
   * @param tmpReq - UpsertQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertQualityRuleResponse
   */
  async upsertQualityRuleWithOptions(tmpReq: $_model.UpsertQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertQualityRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertQualityRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upsertCommand)) {
      request.upsertCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upsertCommand, "UpsertCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.upsertCommandShrink)) {
      body["UpsertCommand"] = request.upsertCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertQualityRule",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpsertQualityRuleResponse({}));
  }

  /**
   * 新建或者修改质量规则。
   * 
   * @param request - UpsertQualityRuleRequest
   * @returns UpsertQualityRuleResponse
   */
  async upsertQualityRule(request: $_model.UpsertQualityRuleRequest): Promise<$_model.UpsertQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertQualityRuleWithOptions(request, runtime);
  }

  /**
   * 新建或者修改调度设置。
   * 
   * @param tmpReq - UpsertQualityScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertQualityScheduleResponse
   */
  async upsertQualityScheduleWithOptions(tmpReq: $_model.UpsertQualityScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertQualityScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertQualityScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upsertCommand)) {
      request.upsertCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upsertCommand, "UpsertCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.upsertCommandShrink)) {
      body["UpsertCommand"] = request.upsertCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertQualitySchedule",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertQualityScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpsertQualityScheduleResponse({}));
  }

  /**
   * 新建或者修改调度设置。
   * 
   * @param request - UpsertQualityScheduleRequest
   * @returns UpsertQualityScheduleResponse
   */
  async upsertQualitySchedule(request: $_model.UpsertQualityScheduleRequest): Promise<$_model.UpsertQualityScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertQualityScheduleWithOptions(request, runtime);
  }

  /**
   * 新建或者修改质量模板。
   * 
   * @param tmpReq - UpsertQualityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertQualityTemplateResponse
   */
  async upsertQualityTemplateWithOptions(tmpReq: $_model.UpsertQualityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertQualityTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertQualityTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upsertCommand)) {
      request.upsertCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upsertCommand, "UpsertCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.upsertCommandShrink)) {
      body["UpsertCommand"] = request.upsertCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertQualityTemplate",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertQualityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpsertQualityTemplateResponse({}));
  }

  /**
   * 新建或者修改质量模板。
   * 
   * @param request - UpsertQualityTemplateRequest
   * @returns UpsertQualityTemplateResponse
   */
  async upsertQualityTemplate(request: $_model.UpsertQualityTemplateRequest): Promise<$_model.UpsertQualityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertQualityTemplateWithOptions(request, runtime);
  }

  /**
   * 新建或更改质量监控对象, 支持添加多种类型的质量监控对象，包括：Dataphin表，全域表，数据源，指标，实时元表。
   * 
   * @param tmpReq - UpsertQualityWatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertQualityWatchResponse
   */
  async upsertQualityWatchWithOptions(tmpReq: $_model.UpsertQualityWatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertQualityWatchResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertQualityWatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upsertCommand)) {
      request.upsertCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upsertCommand, "UpsertCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.upsertCommandShrink)) {
      body["UpsertCommand"] = request.upsertCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertQualityWatch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertQualityWatchResponse>(await this.callApi(params, req, runtime), new $_model.UpsertQualityWatchResponse({}));
  }

  /**
   * 新建或更改质量监控对象, 支持添加多种类型的质量监控对象，包括：Dataphin表，全域表，数据源，指标，实时元表。
   * 
   * @param request - UpsertQualityWatchRequest
   * @returns UpsertQualityWatchResponse
   */
  async upsertQualityWatch(request: $_model.UpsertQualityWatchRequest): Promise<$_model.UpsertQualityWatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertQualityWatchWithOptions(request, runtime);
  }

  /**
   * 新建或者修改监控对象告警设置。
   * 
   * @param tmpReq - UpsertQualityWatchAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertQualityWatchAlertResponse
   */
  async upsertQualityWatchAlertWithOptions(tmpReq: $_model.UpsertQualityWatchAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertQualityWatchAlertResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertQualityWatchAlertShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upsertCommand)) {
      request.upsertCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upsertCommand, "UpsertCommand", "json");
    }

    let query = { };
    if (!$dara.isNull(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.upsertCommandShrink)) {
      body["UpsertCommand"] = request.upsertCommandShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertQualityWatchAlert",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertQualityWatchAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpsertQualityWatchAlertResponse({}));
  }

  /**
   * 新建或者修改监控对象告警设置。
   * 
   * @param request - UpsertQualityWatchAlertRequest
   * @returns UpsertQualityWatchAlertResponse
   */
  async upsertQualityWatchAlert(request: $_model.UpsertQualityWatchAlertRequest): Promise<$_model.UpsertQualityWatchAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertQualityWatchAlertWithOptions(request, runtime);
  }

}

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
      'eu-central-1': "modelstudio.eu-central-1.aliyuncs.com",
      'cn-hongkong': "modelstudio.cn-hongkong.aliyuncs.com",
      'cn-beijing': "modelstudio.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "modelstudio.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("modelstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an account and directly adds it as a member.
   * 
   * @param request - AddOrganizationMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrganizationMemberResponse
   */
  async addOrganizationMemberWithOptions(request: $_model.AddOrganizationMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrganizationMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.orgRoleCode)) {
      query["OrgRoleCode"] = request.orgRoleCode;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrganizationMember",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization/member-additions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddOrganizationMemberResponse({}));
  }

  /**
   * Creates an account and directly adds it as a member.
   * 
   * @param request - AddOrganizationMemberRequest
   * @returns AddOrganizationMemberResponse
   */
  async addOrganizationMember(request: $_model.AddOrganizationMemberRequest): Promise<$_model.AddOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addOrganizationMemberWithOptions(request, headers, runtime);
  }

  /**
   * Assigns seats in batches to the member level.
   * 
   * @param request - BatchAssignSeatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAssignSeatsResponse
   */
  async batchAssignSeatsWithOptions(request: $_model.BatchAssignSeatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAssignSeatsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.seatType)) {
      query["SeatType"] = request.seatType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAssignSeats",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/subscription/seat-assignments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAssignSeatsResponse>(await this.callApi(params, req, runtime), new $_model.BatchAssignSeatsResponse({}));
  }

  /**
   * Assigns seats in batches to the member level.
   * 
   * @param request - BatchAssignSeatsRequest
   * @returns BatchAssignSeatsResponse
   */
  async batchAssignSeats(request: $_model.BatchAssignSeatsRequest): Promise<$_model.BatchAssignSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAssignSeatsWithOptions(request, headers, runtime);
  }

  /**
   * Revokes member-level seats in batches.
   * 
   * @param tmpReq - BatchRevokeSeatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRevokeSeatsResponse
   */
  async batchRevokeSeatsWithOptions(tmpReq: $_model.BatchRevokeSeatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRevokeSeatsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchRevokeSeatsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.itemsShrink)) {
      query["Items"] = request.itemsShrink;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRevokeSeats",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/subscription/seat-revocations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRevokeSeatsResponse>(await this.callApi(params, req, runtime), new $_model.BatchRevokeSeatsResponse({}));
  }

  /**
   * Revokes member-level seats in batches.
   * 
   * @param request - BatchRevokeSeatsRequest
   * @returns BatchRevokeSeatsResponse
   */
  async batchRevokeSeats(request: $_model.BatchRevokeSeatsRequest): Promise<$_model.BatchRevokeSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchRevokeSeatsWithOptions(request, headers, runtime);
  }

  /**
   * Before using large models or applications in Alibaba Cloud Model Studio, create an API key as an authentication credential.
   * 
   * @param request - CreateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiKeyResponse
   */
  async createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auth)) {
      body["auth"] = request.auth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
  }

  /**
   * Before using large models or applications in Alibaba Cloud Model Studio, create an API key as an authentication credential.
   * 
   * @param request - CreateApiKeyRequest
   * @returns CreateApiKeyResponse
   */
  async createApiKey(request: $_model.CreateApiKeyRequest): Promise<$_model.CreateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApiKeyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a TokenPlan member invitation link.
   * 
   * @remarks
   * A user can have only one valid invitation link at a time.
   * If the user already has a valid invitation link, this operation returns the existing link.
   * To create a new link, call the RevokeTokenPlanInviteLink operation to invalidate the current link first.
   * This operation returns only the generated token. The invitation link is assembled in the following format: `https://{host}/accept-invite?token=[token]&orgId=[orgId]`
   * * For the China site, the host is tokenplan-enterprise.bailian.aliyunportal.com.
   * * For the China site, the host is tokenplan-enterprise.modelstudio.aliyunportal.com.
   * 
   * @param request - CreateTokenPlanInviteLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTokenPlanInviteLinkResponse
   */
  async createTokenPlanInviteLinkWithOptions(request: $_model.CreateTokenPlanInviteLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTokenPlanInviteLinkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireType)) {
      query["ExpireType"] = request.expireType;
    }

    if (!$dara.isNull(request.ssoSource)) {
      query["SsoSource"] = request.ssoSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTokenPlanInviteLink",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/invite/link/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTokenPlanInviteLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateTokenPlanInviteLinkResponse({}));
  }

  /**
   * Creates a TokenPlan member invitation link.
   * 
   * @remarks
   * A user can have only one valid invitation link at a time.
   * If the user already has a valid invitation link, this operation returns the existing link.
   * To create a new link, call the RevokeTokenPlanInviteLink operation to invalidate the current link first.
   * This operation returns only the generated token. The invitation link is assembled in the following format: `https://{host}/accept-invite?token=[token]&orgId=[orgId]`
   * * For the China site, the host is tokenplan-enterprise.bailian.aliyunportal.com.
   * * For the China site, the host is tokenplan-enterprise.modelstudio.aliyunportal.com.
   * 
   * @param request - CreateTokenPlanInviteLinkRequest
   * @returns CreateTokenPlanInviteLinkResponse
   */
  async createTokenPlanInviteLink(request: $_model.CreateTokenPlanInviteLinkRequest): Promise<$_model.CreateTokenPlanInviteLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTokenPlanInviteLinkWithOptions(request, headers, runtime);
  }

  /**
   * Creates a UAC API key.
   * 
   * @param request - CreateTokenPlanKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTokenPlanKeyResponse
   */
  async createTokenPlanKeyWithOptions(request: $_model.CreateTokenPlanKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTokenPlanKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTokenPlanKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/api-keys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTokenPlanKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTokenPlanKeyResponse({}));
  }

  /**
   * Creates a UAC API key.
   * 
   * @param request - CreateTokenPlanKeyRequest
   * @returns CreateTokenPlanKeyResponse
   */
  async createTokenPlanKey(request: $_model.CreateTokenPlanKeyRequest): Promise<$_model.CreateTokenPlanKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTokenPlanKeyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a business workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceSite)) {
      query["serviceSite"] = request.serviceSite;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a business workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an authentication credential API key.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKeyWithOptions(apiKeyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
  }

  /**
   * Deletes an authentication credential API key.
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKey(apiKeyId: string): Promise<$_model.DeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiKeyWithOptions(apiKeyId, headers, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * A workspace can be deleted only if the following conditional requirements are met:
   * 1. The workspace is not the default workspace.
   * 2. The workspace is not used to purchase other products, such as AMB.
   * 3. In permission management, the workspace is not granted to Resource Access Management (RAM) users or RAM roles.
   * 4. The workspace does not contain any resources, such as API keys, model deployments, or knowledge bases.
   * 
   * @param request - DeleteWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceId: string, request: $_model.DeleteWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * A workspace can be deleted only if the following conditional requirements are met:
   * 1. The workspace is not the default workspace.
   * 2. The workspace is not used to purchase other products, such as AMB.
   * 3. In permission management, the workspace is not granted to Resource Access Management (RAM) users or RAM roles.
   * 4. The workspace does not contain any resources, such as API keys, model deployments, or knowledge bases.
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceId: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Disables an API key.
   * 
   * @remarks
   * An API key that is already disabled cannot be disabled again.
   * 
   * @param request - DisableApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApiKeyResponse
   */
  async disableApiKeyWithOptions(apiKeyId: string, request: $_model.DisableApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}/disable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DisableApiKeyResponse({}));
  }

  /**
   * Disables an API key.
   * 
   * @remarks
   * An API key that is already disabled cannot be disabled again.
   * 
   * @param request - DisableApiKeyRequest
   * @returns DisableApiKeyResponse
   */
  async disableApiKey(apiKeyId: string, request: $_model.DisableApiKeyRequest): Promise<$_model.DisableApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApiKeyWithOptions(apiKeyId, request, headers, runtime);
  }

  /**
   * Enables an API key.
   * 
   * @remarks
   * An API key that is already enabled cannot be enabled again.
   * 
   * @param request - EnableApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApiKeyResponse
   */
  async enableApiKeyWithOptions(apiKeyId: string, request: $_model.EnableApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}/enable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.EnableApiKeyResponse({}));
  }

  /**
   * Enables an API key.
   * 
   * @remarks
   * An API key that is already enabled cannot be enabled again.
   * 
   * @param request - EnableApiKeyRequest
   * @returns EnableApiKeyResponse
   */
  async enableApiKey(apiKeyId: string, request: $_model.EnableApiKeyRequest): Promise<$_model.EnableApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApiKeyWithOptions(apiKeyId, request, headers, runtime);
  }

  /**
   * Retrieves the information about a specified API key.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiKeyResponse
   */
  async getApiKeyWithOptions(apiKeyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetApiKeyResponse({}));
  }

  /**
   * Retrieves the information about a specified API key.
   * @returns GetApiKeyResponse
   */
  async getApiKey(apiKeyId: string): Promise<$_model.GetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiKeyWithOptions(apiKeyId, headers, runtime);
  }

  /**
   * Retrieves information about a specified organization.
   * 
   * @remarks
   * Retrieves information about a specified organization by OrgId.
   * 
   * @param request - GetOrganizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationResponse
   */
  async getOrganizationWithOptions(request: $_model.GetOrganizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganization",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationResponse>(await this.callApi(params, req, runtime), new $_model.GetOrganizationResponse({}));
  }

  /**
   * Retrieves information about a specified organization.
   * 
   * @remarks
   * Retrieves information about a specified organization by OrgId.
   * 
   * @param request - GetOrganizationRequest
   * @returns GetOrganizationResponse
   */
  async getOrganization(request: $_model.GetOrganizationRequest): Promise<$_model.GetOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationWithOptions(request, headers, runtime);
  }

  /**
   * Queries organization member statistics information, including the total number of members, the number of administrators, the number of regular members, the number of members with allocated seats, and the number of members without allocated seats.
   * 
   * @param request - GetOrganizationMemberSeatStatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationMemberSeatStatsResponse
   */
  async getOrganizationMemberSeatStatsWithOptions(request: $_model.GetOrganizationMemberSeatStatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationMemberSeatStatsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationMemberSeatStats",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization/member-seat-stats`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationMemberSeatStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetOrganizationMemberSeatStatsResponse({}));
  }

  /**
   * Queries organization member statistics information, including the total number of members, the number of administrators, the number of regular members, the number of members with allocated seats, and the number of members without allocated seats.
   * 
   * @param request - GetOrganizationMemberSeatStatsRequest
   * @returns GetOrganizationMemberSeatStatsResponse
   */
  async getOrganizationMemberSeatStats(request: $_model.GetOrganizationMemberSeatStatsRequest): Promise<$_model.GetOrganizationMemberSeatStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationMemberSeatStatsWithOptions(request, headers, runtime);
  }

  /**
   * Queries seat details by paging.
   * 
   * @param request - GetSubscriptionSeatDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionSeatDetailsResponse
   */
  async getSubscriptionSeatDetailsWithOptions(request: $_model.GetSubscriptionSeatDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionSeatDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryAssigned)) {
      query["QueryAssigned"] = request.queryAssigned;
    }

    if (!$dara.isNull(request.seatId)) {
      query["SeatId"] = request.seatId;
    }

    if (!$dara.isNull(request.seatType)) {
      query["SeatType"] = request.seatType;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscriptionSeatDetails",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/subscription/seat-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionSeatDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionSeatDetailsResponse({}));
  }

  /**
   * Queries seat details by paging.
   * 
   * @param request - GetSubscriptionSeatDetailsRequest
   * @returns GetSubscriptionSeatDetailsResponse
   */
  async getSubscriptionSeatDetails(request: $_model.GetSubscriptionSeatDetailsRequest): Promise<$_model.GetSubscriptionSeatDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubscriptionSeatDetailsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the number of members and seats for member management.
   * 
   * @param request - GetSubscriptionStatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionStatsResponse
   */
  async getSubscriptionStatsWithOptions(request: $_model.GetSubscriptionStatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionStatsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscriptionStats",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/subscription/stats`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionStatsResponse({}));
  }

  /**
   * Queries the number of members and seats for member management.
   * 
   * @param request - GetSubscriptionStatsRequest
   * @returns GetSubscriptionStatsResponse
   */
  async getSubscriptionStats(request: $_model.GetSubscriptionStatsRequest): Promise<$_model.GetSubscriptionStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubscriptionStatsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the TokenPlan account details and organization information.
   * 
   * @remarks
   * Retrieves the TokenPlan management platform account information when the user is logged in.
   * 
   * @param request - GetTokenPlanAccountDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenPlanAccountDetailResponse
   */
  async getTokenPlanAccountDetailWithOptions(request: $_model.GetTokenPlanAccountDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenPlanAccountDetailResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenPlanAccountDetail",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/account`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenPlanAccountDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenPlanAccountDetailResponse({}));
  }

  /**
   * Retrieves the TokenPlan account details and organization information.
   * 
   * @remarks
   * Retrieves the TokenPlan management platform account information when the user is logged in.
   * 
   * @param request - GetTokenPlanAccountDetailRequest
   * @returns GetTokenPlanAccountDetailResponse
   */
  async getTokenPlanAccountDetail(request: $_model.GetTokenPlanAccountDetailRequest): Promise<$_model.GetTokenPlanAccountDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenPlanAccountDetailWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the TokenPlan member invitation link.
   * 
   * @remarks
   * This operation returns only the generated token and expiration time. The invitation link is assembled in the following format: `https://{host}/accept-invite?token=[token]&orgId=[orgId]`
   * * For the China site, the host is tokenplan-enterprise.bailian.aliyunportal.com.
   * * For the international site, the host is tokenplan-enterprise.modelstudio.aliyunportal.com.
   * 
   * @param request - GetTokenPlanInviteLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenPlanInviteLinkResponse
   */
  async getTokenPlanInviteLinkWithOptions(request: $_model.GetTokenPlanInviteLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenPlanInviteLinkResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenPlanInviteLink",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/invite/link/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenPlanInviteLinkResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenPlanInviteLinkResponse({}));
  }

  /**
   * Retrieves the TokenPlan member invitation link.
   * 
   * @remarks
   * This operation returns only the generated token and expiration time. The invitation link is assembled in the following format: `https://{host}/accept-invite?token=[token]&orgId=[orgId]`
   * * For the China site, the host is tokenplan-enterprise.bailian.aliyunportal.com.
   * * For the international site, the host is tokenplan-enterprise.modelstudio.aliyunportal.com.
   * 
   * @param request - GetTokenPlanInviteLinkRequest
   * @returns GetTokenPlanInviteLinkResponse
   */
  async getTokenPlanInviteLink(request: $_model.GetTokenPlanInviteLinkRequest): Promise<$_model.GetTokenPlanInviteLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenPlanInviteLinkWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the TokenPlan member invitation configuration.
   * 
   * @param request - GetTokenPlanOrgInviteConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenPlanOrgInviteConfigResponse
   */
  async getTokenPlanOrgInviteConfigWithOptions(request: $_model.GetTokenPlanOrgInviteConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenPlanOrgInviteConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenPlanOrgInviteConfig",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/invite/config/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenPlanOrgInviteConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenPlanOrgInviteConfigResponse({}));
  }

  /**
   * Retrieves the TokenPlan member invitation configuration.
   * 
   * @param request - GetTokenPlanOrgInviteConfigRequest
   * @returns GetTokenPlanOrgInviteConfigResponse
   */
  async getTokenPlanOrgInviteConfig(request: $_model.GetTokenPlanOrgInviteConfigRequest): Promise<$_model.GetTokenPlanOrgInviteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenPlanOrgInviteConfigWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of API key information for authentication credentials.
   * 
   * @param request - ListApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * Retrieves a list of API key information for authentication credentials.
   * 
   * @param request - ListApiKeysRequest
   * @returns ListApiKeysResponse
   */
  async listApiKeys(request: $_model.ListApiKeysRequest): Promise<$_model.ListApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiKeysWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of organization members including seat information. Supports filtering by name, status, and seat assignment, and supports pagination.
   * 
   * @param request - ListOrganizationMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationMembersResponse
   */
  async listOrganizationMembersWithOptions(request: $_model.ListOrganizationMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hasSeat)) {
      query["HasSeat"] = request.hasSeat;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationMembers",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationMembersResponse({}));
  }

  /**
   * Queries the list of organization members including seat information. Supports filtering by name, status, and seat assignment, and supports pagination.
   * 
   * @param request - ListOrganizationMembersRequest
   * @returns ListOrganizationMembersResponse
   */
  async listOrganizationMembers(request: $_model.ListOrganizationMembersRequest): Promise<$_model.ListOrganizationMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationMembersWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of shared packages by paging.
   * 
   * @param request - ListSubscriptionSharedPackagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionSharedPackagesResponse
   */
  async listSubscriptionSharedPackagesWithOptions(request: $_model.ListSubscriptionSharedPackagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubscriptionSharedPackagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubscriptionSharedPackages",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/subscription/shared-packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubscriptionSharedPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListSubscriptionSharedPackagesResponse({}));
  }

  /**
   * Queries the details of shared packages by paging.
   * 
   * @param request - ListSubscriptionSharedPackagesRequest
   * @returns ListSubscriptionSharedPackagesResponse
   */
  async listSubscriptionSharedPackages(request: $_model.ListSubscriptionSharedPackagesRequest): Promise<$_model.ListSubscriptionSharedPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscriptionSharedPackagesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of business workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Retrieves the list of business workspaces.
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
   * Removes organization members. Before removal, checks whether the member holds a seat. If the member holds a seat, the removal is rejected.
   * 
   * @param request - RemoveOrganizationMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveOrganizationMemberResponse
   */
  async removeOrganizationMemberWithOptions(request: $_model.RemoveOrganizationMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveOrganizationMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveOrganizationMember",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization/member-removals`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.RemoveOrganizationMemberResponse({}));
  }

  /**
   * Removes organization members. Before removal, checks whether the member holds a seat. If the member holds a seat, the removal is rejected.
   * 
   * @param request - RemoveOrganizationMemberRequest
   * @returns RemoveOrganizationMemberResponse
   */
  async removeOrganizationMember(request: $_model.RemoveOrganizationMemberRequest): Promise<$_model.RemoveOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeOrganizationMemberWithOptions(request, headers, runtime);
  }

  /**
   * Resets an API key.
   * 
   * @remarks
   * Only the API key value changes. The API key ID remains unchanged.
   * 
   * @param request - ResetApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetApiKeyResponse
   */
  async resetApiKeyWithOptions(apiKeyId: string, request: $_model.ResetApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}/reset`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ResetApiKeyResponse({}));
  }

  /**
   * Resets an API key.
   * 
   * @remarks
   * Only the API key value changes. The API key ID remains unchanged.
   * 
   * @param request - ResetApiKeyRequest
   * @returns ResetApiKeyResponse
   */
  async resetApiKey(apiKeyId: string, request: $_model.ResetApiKeyRequest): Promise<$_model.ResetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApiKeyWithOptions(apiKeyId, request, headers, runtime);
  }

  /**
   * Revokes a TokenPlan member invitation link.
   * 
   * @param request - RevokeTokenPlanInviteLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTokenPlanInviteLinkResponse
   */
  async revokeTokenPlanInviteLinkWithOptions(request: $_model.RevokeTokenPlanInviteLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTokenPlanInviteLinkResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeTokenPlanInviteLink",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/invite/link/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTokenPlanInviteLinkResponse>(await this.callApi(params, req, runtime), new $_model.RevokeTokenPlanInviteLinkResponse({}));
  }

  /**
   * Revokes a TokenPlan member invitation link.
   * 
   * @param request - RevokeTokenPlanInviteLinkRequest
   * @returns RevokeTokenPlanInviteLinkResponse
   */
  async revokeTokenPlanInviteLink(request: $_model.RevokeTokenPlanInviteLinkRequest): Promise<$_model.RevokeTokenPlanInviteLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeTokenPlanInviteLinkWithOptions(request, headers, runtime);
  }

  /**
   * Resets a UAC API key.
   * 
   * @remarks
   * Only the API Key value changes. The API Key ID remains unchanged.
   * 
   * @param request - RotateTokenPlanKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RotateTokenPlanKeyResponse
   */
  async rotateTokenPlanKeyWithOptions(request: $_model.RotateTokenPlanKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RotateTokenPlanKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["ApiKeyId"] = request.apiKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RotateTokenPlanKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/api-key-rotations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RotateTokenPlanKeyResponse>(await this.callApi(params, req, runtime), new $_model.RotateTokenPlanKeyResponse({}));
  }

  /**
   * Resets a UAC API key.
   * 
   * @remarks
   * Only the API Key value changes. The API Key ID remains unchanged.
   * 
   * @param request - RotateTokenPlanKeyRequest
   * @returns RotateTokenPlanKeyResponse
   */
  async rotateTokenPlanKey(request: $_model.RotateTokenPlanKeyRequest): Promise<$_model.RotateTokenPlanKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rotateTokenPlanKeyWithOptions(request, headers, runtime);
  }

  /**
   * Configures the member invitation settings for a TokenPlan.
   * 
   * @param request - SetTokenPlanOrgInviteConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTokenPlanOrgInviteConfigResponse
   */
  async setTokenPlanOrgInviteConfigWithOptions(request: $_model.SetTokenPlanOrgInviteConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SetTokenPlanOrgInviteConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRoleId)) {
      query["DefaultRoleId"] = request.defaultRoleId;
    }

    if (!$dara.isNull(request.seatAssignStrategy)) {
      query["SeatAssignStrategy"] = request.seatAssignStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTokenPlanOrgInviteConfig",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/invite/config/set`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTokenPlanOrgInviteConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetTokenPlanOrgInviteConfigResponse({}));
  }

  /**
   * Configures the member invitation settings for a TokenPlan.
   * 
   * @param request - SetTokenPlanOrgInviteConfigRequest
   * @returns SetTokenPlanOrgInviteConfigResponse
   */
  async setTokenPlanOrgInviteConfig(request: $_model.SetTokenPlanOrgInviteConfigRequest): Promise<$_model.SetTokenPlanOrgInviteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setTokenPlanOrgInviteConfigWithOptions(request, headers, runtime);
  }

  /**
   * Edits the information of an authentication credential API key.
   * 
   * @param request - UpdateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiKeyResponse
   */
  async updateApiKeyWithOptions(apiKeyId: string, request: $_model.UpdateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auth)) {
      body["auth"] = request.auth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyResponse({}));
  }

  /**
   * Edits the information of an authentication credential API key.
   * 
   * @param request - UpdateApiKeyRequest
   * @returns UpdateApiKeyResponse
   */
  async updateApiKey(apiKeyId: string, request: $_model.UpdateApiKeyRequest): Promise<$_model.UpdateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApiKeyWithOptions(apiKeyId, request, headers, runtime);
  }

  /**
   * Modifies organization information.
   * 
   * @param request - UpdateOrganizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationResponse
   */
  async updateOrganizationWithOptions(request: $_model.UpdateOrganizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganization",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationResponse({}));
  }

  /**
   * Modifies organization information.
   * 
   * @param request - UpdateOrganizationRequest
   * @returns UpdateOrganizationResponse
   */
  async updateOrganization(request: $_model.UpdateOrganizationRequest): Promise<$_model.UpdateOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOrganizationWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the roles of organization members.
   * 
   * @param request - UpdateOrganizationMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationMemberResponse
   */
  async updateOrganizationMemberWithOptions(request: $_model.UpdateOrganizationMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.newRoleCode)) {
      query["NewRoleCode"] = request.newRoleCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationMember",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/tokenplan/organization/members/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationMemberResponse({}));
  }

  /**
   * Modifies the roles of organization members.
   * 
   * @param request - UpdateOrganizationMemberRequest
   * @returns UpdateOrganizationMemberResponse
   */
  async updateOrganizationMember(request: $_model.UpdateOrganizationMemberRequest): Promise<$_model.UpdateOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOrganizationMemberWithOptions(request, headers, runtime);
  }

}

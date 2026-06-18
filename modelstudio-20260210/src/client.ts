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

    if (!$dara.isNull(request.callerUacAccountId)) {
      query["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
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
   * Assigns seats in bulk to the member level.
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

    if (!$dara.isNull(request.accountIdsStr)) {
      query["AccountIdsStr"] = request.accountIdsStr;
    }

    if (!$dara.isNull(request.callerUacAccountId)) {
      query["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.seatType)) {
      query["SeatType"] = request.seatType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
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
   * Assigns seats in bulk to the member level.
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

    if (!$dara.isNull(request.callerUacAccountId)) {
      query["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
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
   * An API key cannot be disabled if it is already disabled.
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
   * An API key cannot be disabled if it is already disabled.
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
   * Retrieves the information of a specified authentication credential API key.
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
   * Retrieves the information of a specified authentication credential API key.
   * @returns GetApiKeyResponse
   */
  async getApiKey(apiKeyId: string): Promise<$_model.GetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiKeyWithOptions(apiKeyId, headers, runtime);
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
    if (!$dara.isNull(request.callerUacAccountId)) {
      query["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

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

    if (!$dara.isNull(request.statusListStr)) {
      query["StatusListStr"] = request.statusListStr;
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
   * Obtain the list of authentication credential API Key information.
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
   * Obtain the list of authentication credential API Key information.
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

}

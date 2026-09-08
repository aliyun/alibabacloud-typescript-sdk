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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a tenant skill.
   * 
   * @param tmpReq - CreateTenantSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantSkillResponse
   */
  async createTenantSkillWithOptions(tmpReq: $_model.CreateTenantSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantSkillResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTenantSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.envVars)) {
      request.envVarsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envVars, "EnvVars", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.envVarsShrink)) {
      query["EnvVars"] = request.envVarsShrink;
    }

    if (!$dara.isNull(request.iconETag)) {
      query["IconETag"] = request.iconETag;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillIcon)) {
      query["SkillIcon"] = request.skillIcon;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    if (!$dara.isNull(request.slug)) {
      query["Slug"] = request.slug;
    }

    if (!$dara.isNull(request.taskKey)) {
      query["TaskKey"] = request.taskKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantSkill",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantSkillResponse({}));
  }

  /**
   * Creates a tenant skill.
   * 
   * @param request - CreateTenantSkillRequest
   * @returns CreateTenantSkillResponse
   */
  async createTenantSkill(request: $_model.CreateTenantSkillRequest): Promise<$_model.CreateTenantSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantSkillWithOptions(request, runtime);
  }

  /**
   * Deletes skills in batches.
   * 
   * @param request - DeleteTenantSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTenantSkillsResponse
   */
  async deleteTenantSkillsWithOptions(request: $_model.DeleteTenantSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTenantSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTenantSkills",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTenantSkillsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTenantSkillsResponse({}));
  }

  /**
   * Deletes skills in batches.
   * 
   * @param request - DeleteTenantSkillsRequest
   * @returns DeleteTenantSkillsResponse
   */
  async deleteTenantSkills(request: $_model.DeleteTenantSkillsRequest): Promise<$_model.DeleteTenantSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTenantSkillsWithOptions(request, runtime);
  }

  /**
   * Retrieves a temporary OSS token for authentication.
   * 
   * @remarks
   * The obtained SecurityToken is valid for 15 minutes.
   * 
   * @param request - GetOssStsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssStsTokenResponse
   */
  async getOssStsTokenWithOptions(request: $_model.GetOssStsTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssStsTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssStsToken",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssStsTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetOssStsTokenResponse({}));
  }

  /**
   * Retrieves a temporary OSS token for authentication.
   * 
   * @remarks
   * The obtained SecurityToken is valid for 15 minutes.
   * 
   * @param request - GetOssStsTokenRequest
   * @returns GetOssStsTokenResponse
   */
  async getOssStsToken(request: $_model.GetOssStsTokenRequest): Promise<$_model.GetOssStsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssStsTokenWithOptions(request, runtime);
  }

  /**
   * Retrieves the parsed content of a skill package.
   * 
   * @remarks
   * Call the ParseSkillPackage operation first. Poll this operation every 3 seconds.
   * 
   * @param request - GetParseProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParseProgressResponse
   */
  async getParseProgressWithOptions(request: $_model.GetParseProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetParseProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskKey)) {
      query["TaskKey"] = request.taskKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParseProgress",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParseProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetParseProgressResponse({}));
  }

  /**
   * Retrieves the parsed content of a skill package.
   * 
   * @remarks
   * Call the ParseSkillPackage operation first. Poll this operation every 3 seconds.
   * 
   * @param request - GetParseProgressRequest
   * @returns GetParseProgressResponse
   */
  async getParseProgress(request: $_model.GetParseProgressRequest): Promise<$_model.GetParseProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getParseProgressWithOptions(request, runtime);
  }

  /**
   * Queries the list of identities for which security policies are enabled.
   * 
   * @remarks
   * The resource type supports only cloud computers.
   * 
   * @param request - ListSecureSkillIdentitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecureSkillIdentitiesResponse
   */
  async listSecureSkillIdentitiesWithOptions(request: $_model.ListSecureSkillIdentitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecureSkillIdentitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecureSkillIdentities",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecureSkillIdentitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListSecureSkillIdentitiesResponse({}));
  }

  /**
   * Queries the list of identities for which security policies are enabled.
   * 
   * @remarks
   * The resource type supports only cloud computers.
   * 
   * @param request - ListSecureSkillIdentitiesRequest
   * @returns ListSecureSkillIdentitiesResponse
   */
  async listSecureSkillIdentities(request: $_model.ListSecureSkillIdentitiesRequest): Promise<$_model.ListSecureSkillIdentitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecureSkillIdentitiesWithOptions(request, runtime);
  }

  /**
   * Queries the list of identities authorized for a skill.
   * 
   * @remarks
   * Authorized objects support only cloud computers.
   * 
   * @param request - ListSkillAuthedIdentitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillAuthedIdentitiesResponse
   */
  async listSkillAuthedIdentitiesWithOptions(request: $_model.ListSkillAuthedIdentitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillAuthedIdentitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillAuthedIdentities",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillAuthedIdentitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillAuthedIdentitiesResponse({}));
  }

  /**
   * Queries the list of identities authorized for a skill.
   * 
   * @remarks
   * Authorized objects support only cloud computers.
   * 
   * @param request - ListSkillAuthedIdentitiesRequest
   * @returns ListSkillAuthedIdentitiesResponse
   */
  async listSkillAuthedIdentities(request: $_model.ListSkillAuthedIdentitiesRequest): Promise<$_model.ListSkillAuthedIdentitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillAuthedIdentitiesWithOptions(request, runtime);
  }

  /**
   * Queries the list of skills.
   * 
   * @param request - ListSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(request: $_model.ListSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    if (!$dara.isNull(request.supplierType)) {
      query["SupplierType"] = request.supplierType;
    }

    if (!$dara.isNull(request.tagCodes)) {
      query["TagCodes"] = request.tagCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkills",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
  }

  /**
   * Queries the list of skills.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillsWithOptions(request, runtime);
  }

  /**
   * Performs a paging query of desktop applications visible to the current tenant, with support for filtering by application name and source.
   * 
   * @remarks
   * The query scope is determined by the caller identity and includes applications uploaded by the current tenant and marketplace applications that the tenant is authorized to view. The visibility of marketplace applications is subject to authorization and display policy restrictions. The authorization and auto-installation information in the list represents application configurations and does not indicate the actual installation result on a specific device.
   * - **Application identity**: Id is a numeric application ID, and AppUid is a character string UID. The two cannot be used interchangeably.
   * - **Authorization scope**: DistributeType is used together with AuthType. For example, `AuthType=auth_type_user` and `DistributeType=ALL` indicate that the application is allocated to all users on a per-user dimension.
   * - **Auto-installation**: AutoInstallmentType specifies the auto-installation scope policy, which is used to distinguish between full, partial, or disabled auto-installation.
   * - **Partial auto-installation**: When AutoInstallmentType is set to 1, use SetAutoInstallUser or SetAutoInstallDesktop to configure specific users or cloud desktops. OperationType=1 indicates enabled, and OperationType=2 indicates disabled. ListTenantApp only returns configurations and does not modify auto-installation settings.
   * - **Capabilities and execution results**: The silent installation capability is application metadata returned in the response. To determine the actual installation or execution result on a device, use the corresponding execution result query capability.
   * - **Optional information**: Information such as timestamps may be empty.
   * - **Compatibility handling**: Extension information and subtype do not use closed enumerations. Clients should ignore unrecognized extension fields and be compatible with new enumeration values.
   * 
   * @param request - ListTenantAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantAppResponse
   */
  async listTenantAppWithOptions(request: $_model.ListTenantAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantApp",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantAppResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantAppResponse({}));
  }

  /**
   * Performs a paging query of desktop applications visible to the current tenant, with support for filtering by application name and source.
   * 
   * @remarks
   * The query scope is determined by the caller identity and includes applications uploaded by the current tenant and marketplace applications that the tenant is authorized to view. The visibility of marketplace applications is subject to authorization and display policy restrictions. The authorization and auto-installation information in the list represents application configurations and does not indicate the actual installation result on a specific device.
   * - **Application identity**: Id is a numeric application ID, and AppUid is a character string UID. The two cannot be used interchangeably.
   * - **Authorization scope**: DistributeType is used together with AuthType. For example, `AuthType=auth_type_user` and `DistributeType=ALL` indicate that the application is allocated to all users on a per-user dimension.
   * - **Auto-installation**: AutoInstallmentType specifies the auto-installation scope policy, which is used to distinguish between full, partial, or disabled auto-installation.
   * - **Partial auto-installation**: When AutoInstallmentType is set to 1, use SetAutoInstallUser or SetAutoInstallDesktop to configure specific users or cloud desktops. OperationType=1 indicates enabled, and OperationType=2 indicates disabled. ListTenantApp only returns configurations and does not modify auto-installation settings.
   * - **Capabilities and execution results**: The silent installation capability is application metadata returned in the response. To determine the actual installation or execution result on a device, use the corresponding execution result query capability.
   * - **Optional information**: Information such as timestamps may be empty.
   * - **Compatibility handling**: Extension information and subtype do not use closed enumerations. Clients should ignore unrecognized extension fields and be compatible with new enumeration values.
   * 
   * @param request - ListTenantAppRequest
   * @returns ListTenantAppResponse
   */
  async listTenantApp(request: $_model.ListTenantAppRequest): Promise<$_model.ListTenantAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTenantAppWithOptions(request, runtime);
  }

  /**
   * Parses a skill package.
   * 
   * @param request - ParseSkillPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ParseSkillPackageResponse
   */
  async parseSkillPackageWithOptions(request: $_model.ParseSkillPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ParseSkillPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossObjectETag)) {
      query["OssObjectETag"] = request.ossObjectETag;
    }

    if (!$dara.isNull(request.ossObjectKey)) {
      query["OssObjectKey"] = request.ossObjectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ParseSkillPackage",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ParseSkillPackageResponse>(await this.callApi(params, req, runtime), new $_model.ParseSkillPackageResponse({}));
  }

  /**
   * Parses a skill package.
   * 
   * @param request - ParseSkillPackageRequest
   * @returns ParseSkillPackageResponse
   */
  async parseSkillPackage(request: $_model.ParseSkillPackageRequest): Promise<$_model.ParseSkillPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.parseSkillPackageWithOptions(request, runtime);
  }

  /**
   * Sets skill permissions for an identity.
   * 
   * @remarks
   * The authorized object supports only cloud computers.
   * 
   * @param request - SetIdentitySkillAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentitySkillAuthResponse
   */
  async setIdentitySkillAuthWithOptions(request: $_model.SetIdentitySkillAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentitySkillAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoInstall)) {
      query["AutoInstall"] = request.autoInstall;
    }

    if (!$dara.isNull(request.identities)) {
      query["Identities"] = request.identities;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentitySkillAuth",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentitySkillAuthResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentitySkillAuthResponse({}));
  }

  /**
   * Sets skill permissions for an identity.
   * 
   * @remarks
   * The authorized object supports only cloud computers.
   * 
   * @param request - SetIdentitySkillAuthRequest
   * @returns SetIdentitySkillAuthResponse
   */
  async setIdentitySkillAuth(request: $_model.SetIdentitySkillAuthRequest): Promise<$_model.SetIdentitySkillAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentitySkillAuthWithOptions(request, runtime);
  }

  /**
   * Sets the security policy for identity skills.
   * 
   * @remarks
   * The resource type supports only cloud computers.
   * 
   * @param request - SetIdentitySkillSecurityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentitySkillSecurityResponse
   */
  async setIdentitySkillSecurityWithOptions(request: $_model.SetIdentitySkillSecurityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentitySkillSecurityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.identityIds)) {
      query["IdentityIds"] = request.identityIds;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentitySkillSecurity",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentitySkillSecurityResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentitySkillSecurityResponse({}));
  }

  /**
   * Sets the security policy for identity skills.
   * 
   * @remarks
   * The resource type supports only cloud computers.
   * 
   * @param request - SetIdentitySkillSecurityRequest
   * @returns SetIdentitySkillSecurityResponse
   */
  async setIdentitySkillSecurity(request: $_model.SetIdentitySkillSecurityRequest): Promise<$_model.SetIdentitySkillSecurityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentitySkillSecurityWithOptions(request, runtime);
  }

  /**
   * Sets the enabling status of skills at the tenant level.
   * 
   * @param request - SetTenantSkillEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTenantSkillEnabledResponse
   */
  async setTenantSkillEnabledWithOptions(request: $_model.SetTenantSkillEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTenantSkillEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.skillChannel)) {
      query["SkillChannel"] = request.skillChannel;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTenantSkillEnabled",
      version: "2021-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTenantSkillEnabledResponse>(await this.callApi(params, req, runtime), new $_model.SetTenantSkillEnabledResponse({}));
  }

  /**
   * Sets the enabling status of skills at the tenant level.
   * 
   * @param request - SetTenantSkillEnabledRequest
   * @returns SetTenantSkillEnabledResponse
   */
  async setTenantSkillEnabled(request: $_model.SetTenantSkillEnabledRequest): Promise<$_model.SetTenantSkillEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTenantSkillEnabledWithOptions(request, runtime);
  }

}

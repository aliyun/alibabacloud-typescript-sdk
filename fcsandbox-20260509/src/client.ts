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
      'cn-shenzhen': "fcsandbox.cn-shenzhen.aliyuncs.com",
      'cn-beijing': "fcsandbox.cn-beijing.aliyuncs.com",
      'cn-shanghai': "fcsandbox.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "fcsandbox.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "fcsandbox.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "fcsandbox.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fcsandbox", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an API key.
   * 
   * @param request - CreateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiKeyResponse
   */
  async createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiKey",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
  }

  /**
   * Creates an API key.
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
   * Creates a Team.
   * 
   * @param request - CreateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTeamResponse
   */
  async createTeamWithOptions(request: $_model.CreateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTeam",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/teams`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTeamResponse>(await this.callApi(params, req, runtime), new $_model.CreateTeamResponse({}));
  }

  /**
   * Creates a Team.
   * 
   * @param request - CreateTeamRequest
   * @returns CreateTeamResponse
   */
  async createTeam(request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTeamWithOptions(request, headers, runtime);
  }

  /**
   * Creates a volume.
   * 
   * @param request - CreateVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVolumeResponse
   */
  async createVolumeWithOptions(request: $_model.CreateVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVolumeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVolume",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/volumes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVolumeResponse>(await this.callApi(params, req, runtime), new $_model.CreateVolumeResponse({}));
  }

  /**
   * Creates a volume.
   * 
   * @param request - CreateVolumeRequest
   * @returns CreateVolumeResponse
   */
  async createVolume(request: $_model.CreateVolumeRequest): Promise<$_model.CreateVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVolumeWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an API key.
   * 
   * @param request - DeleteApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKeyWithOptions(apiKeyID: string, request: $_model.DeleteApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiKey",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
  }

  /**
   * Deletes an API key.
   * 
   * @param request - DeleteApiKeyRequest
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKey(apiKeyID: string, request: $_model.DeleteApiKeyRequest): Promise<$_model.DeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * Deletes a Quota configuration.
   * 
   * @param request - DeleteQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaResponse
   */
  async deleteQuotaWithOptions(request: $_model.DeleteQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagValue)) {
      query["tagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuota",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQuotaResponse({}));
  }

  /**
   * Deletes a Quota configuration.
   * 
   * @param request - DeleteQuotaRequest
   * @returns DeleteQuotaResponse
   */
  async deleteQuota(request: $_model.DeleteQuotaRequest): Promise<$_model.DeleteQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a team.
   * 
   * @param request - DeleteTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTeamResponse
   */
  async deleteTeamWithOptions(teamID: string, request: $_model.DeleteTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTeam",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTeamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTeamResponse({}));
  }

  /**
   * Deletes a team.
   * 
   * @param request - DeleteTeamRequest
   * @returns DeleteTeamResponse
   */
  async deleteTeam(teamID: string, request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * Deletes a Volume.
   * 
   * @param request - DeleteVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVolumeResponse
   */
  async deleteVolumeWithOptions(volumeID: string, request: $_model.DeleteVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVolumeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVolume",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVolumeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVolumeResponse({}));
  }

  /**
   * Deletes a Volume.
   * 
   * @param request - DeleteVolumeRequest
   * @returns DeleteVolumeResponse
   */
  async deleteVolume(volumeID: string, request: $_model.DeleteVolumeRequest): Promise<$_model.DeleteVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVolumeWithOptions(volumeID, request, headers, runtime);
  }

  /**
   * Queries an API key.
   * 
   * @param request - DescribeApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiKeyResponse
   */
  async describeApiKeyWithOptions(apiKeyID: string, request: $_model.DescribeApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiKey",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiKeyResponse({}));
  }

  /**
   * Queries an API key.
   * 
   * @param request - DescribeApiKeyRequest
   * @returns DescribeApiKeyResponse
   */
  async describeApiKey(apiKeyID: string, request: $_model.DescribeApiKeyRequest): Promise<$_model.DescribeApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * Retrieves the Quota configuration.
   * 
   * @param request - DescribeQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQuotaResponse
   */
  async describeQuotaWithOptions(request: $_model.DescribeQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagValue)) {
      query["tagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQuota",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQuotaResponse({}));
  }

  /**
   * Retrieves the Quota configuration.
   * 
   * @param request - DescribeQuotaRequest
   * @returns DescribeQuotaResponse
   */
  async describeQuota(request: $_model.DescribeQuotaRequest): Promise<$_model.DescribeQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQuotaWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of a team.
   * 
   * @param request - GetTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTeamResponse
   */
  async getTeamWithOptions(teamID: string, request: $_model.GetTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTeam",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTeamResponse>(await this.callApi(params, req, runtime), new $_model.GetTeamResponse({}));
  }

  /**
   * Retrieves the details of a team.
   * 
   * @param request - GetTeamRequest
   * @returns GetTeamResponse
   */
  async getTeam(teamID: string, request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * Queries a Volume.
   * 
   * @param request - GetVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVolumeResponse
   */
  async getVolumeWithOptions(volumeID: string, request: $_model.GetVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVolumeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVolume",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVolumeResponse>(await this.callApi(params, req, runtime), new $_model.GetVolumeResponse({}));
  }

  /**
   * Queries a Volume.
   * 
   * @param request - GetVolumeRequest
   * @returns GetVolumeResponse
   */
  async getVolume(volumeID: string, request: $_model.GetVolumeRequest): Promise<$_model.GetVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVolumeWithOptions(volumeID, request, headers, runtime);
  }

  /**
   * Queries API keys by paging.
   * 
   * @param request - ListApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyName)) {
      query["apiKeyName"] = request.apiKeyName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    if (!$dara.isNull(request.userID)) {
      query["userID"] = request.userID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * Queries API keys by paging.
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
   * Queries the quota configurations of an account.
   * 
   * @param request - ListQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaResponse
   */
  async listQuotaWithOptions(request: $_model.ListQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuota",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaResponse({}));
  }

  /**
   * Queries the quota configurations of an account.
   * 
   * @param request - ListQuotaRequest
   * @returns ListQuotaResponse
   */
  async listQuota(request: $_model.ListQuotaRequest): Promise<$_model.ListQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of teams.
   * 
   * @param request - ListTeamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamsResponse
   */
  async listTeamsWithOptions(request: $_model.ListTeamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.plan)) {
      query["plan"] = request.plan;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.teamName)) {
      query["teamName"] = request.teamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeams",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/teams`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
  }

  /**
   * Queries the list of teams.
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTeamsWithOptions(request, headers, runtime);
  }

  /**
   * Queries volumes by using paging.
   * 
   * @param request - ListVolumesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVolumesResponse
   */
  async listVolumesWithOptions(request: $_model.ListVolumesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVolumesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    if (!$dara.isNull(request.userID)) {
      query["userID"] = request.userID;
    }

    if (!$dara.isNull(request.volumeName)) {
      query["volumeName"] = request.volumeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVolumes",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/volumes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVolumesResponse>(await this.callApi(params, req, runtime), new $_model.ListVolumesResponse({}));
  }

  /**
   * Queries volumes by using paging.
   * 
   * @param request - ListVolumesRequest
   * @returns ListVolumesResponse
   */
  async listVolumes(request: $_model.ListVolumesRequest): Promise<$_model.ListVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVolumesWithOptions(request, headers, runtime);
  }

  /**
   * Resets an API key.
   * 
   * @param request - ResetApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetApiKeyResponse
   */
  async resetApiKeyWithOptions(apiKeyID: string, request: $_model.ResetApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetApiKey",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys/${$dara.URL.percentEncode(apiKeyID)}/reset`,
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
   * @param request - ResetApiKeyRequest
   * @returns ResetApiKeyResponse
   */
  async resetApiKey(apiKeyID: string, request: $_model.ResetApiKeyRequest): Promise<$_model.ResetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * Updates an API key.
   * 
   * @param request - UpdateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiKeyResponse
   */
  async updateApiKeyWithOptions(apiKeyID: string, request: $_model.UpdateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiKey",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyResponse({}));
  }

  /**
   * Updates an API key.
   * 
   * @param request - UpdateApiKeyRequest
   * @returns UpdateApiKeyResponse
   */
  async updateApiKey(apiKeyID: string, request: $_model.UpdateApiKeyRequest): Promise<$_model.UpdateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * Updates the Quota configuration.
   * 
   * @param request - UpdateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaResponse
   */
  async updateQuotaWithOptions(request: $_model.UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuota",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaResponse({}));
  }

  /**
   * Updates the Quota configuration.
   * 
   * @param request - UpdateQuotaRequest
   * @returns UpdateQuotaResponse
   */
  async updateQuota(request: $_model.UpdateQuotaRequest): Promise<$_model.UpdateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(request, headers, runtime);
  }

  /**
   * Updates a team.
   * 
   * @param request - UpdateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTeamResponse
   */
  async updateTeamWithOptions(teamID: string, request: $_model.UpdateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTeam",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTeamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTeamResponse({}));
  }

  /**
   * Updates a team.
   * 
   * @param request - UpdateTeamRequest
   * @returns UpdateTeamResponse
   */
  async updateTeam(teamID: string, request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * Updates a volume.
   * 
   * @param request - UpdateVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVolumeResponse
   */
  async updateVolumeWithOptions(volumeID: string, request: $_model.UpdateVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVolumeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVolume",
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVolumeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVolumeResponse({}));
  }

  /**
   * Updates a volume.
   * 
   * @param request - UpdateVolumeRequest
   * @returns UpdateVolumeResponse
   */
  async updateVolume(volumeID: string, request: $_model.UpdateVolumeRequest): Promise<$_model.UpdateVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVolumeWithOptions(volumeID, request, headers, runtime);
  }

}

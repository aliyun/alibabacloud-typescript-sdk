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
   * 允许桌面FOTA升级
   * 
   * @param request - ApproveFotaUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdateWithOptions(request: $_model.ApproveFotaUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveFotaUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.targetStatus)) {
      query["TargetStatus"] = request.targetStatus;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveFotaUpdate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveFotaUpdateResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ApproveFotaUpdateResponse({}));
  }

  /**
   * 允许桌面FOTA升级
   * 
   * @param request - ApproveFotaUpdateRequest
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdate(request: $_model.ApproveFotaUpdateRequest): Promise<$_model.ApproveFotaUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  /**
   * Changes the password of a user account.
   * 
   * @param request - ChangePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangePasswordResponse
   */
  async changePasswordWithOptions(request: $_model.ChangePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangePassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangePasswordResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ChangePasswordResponse({}));
  }

  /**
   * Changes the password of a user account.
   * 
   * @param request - ChangePasswordRequest
   * @returns ChangePasswordResponse
   */
  async changePassword(request: $_model.ChangePasswordRequest): Promise<$_model.ChangePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFingerPrintTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFingerPrintTemplateResponse
   */
  async deleteFingerPrintTemplateWithOptions(request: $_model.DeleteFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFingerPrintTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFingerPrintTemplateResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DeleteFingerPrintTemplateResponse({}));
  }

  /**
   * @param request - DeleteFingerPrintTemplateRequest
   * @returns DeleteFingerPrintTemplateResponse
   */
  async deleteFingerPrintTemplate(request: $_model.DeleteFingerPrintTemplateRequest): Promise<$_model.DeleteFingerPrintTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFingerPrintTemplateWithOptions(request, runtime);
  }

  /**
   * Queries directory details.
   * 
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: $_model.DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirectoriesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeDirectoriesResponse({}));
  }

  /**
   * Queries directory details.
   * 
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: $_model.DescribeDirectoriesRequest): Promise<$_model.DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries fingerprint templates.
   * 
   * @param request - DescribeFingerPrintTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFingerPrintTemplatesResponse
   */
  async describeFingerPrintTemplatesWithOptions(request: $_model.DescribeFingerPrintTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFingerPrintTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFingerPrintTemplates",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFingerPrintTemplatesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeFingerPrintTemplatesResponse({}));
  }

  /**
   * Queries fingerprint templates.
   * 
   * @param request - DescribeFingerPrintTemplatesRequest
   * @returns DescribeFingerPrintTemplatesResponse
   */
  async describeFingerPrintTemplates(request: $_model.DescribeFingerPrintTemplatesRequest): Promise<$_model.DescribeFingerPrintTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFingerPrintTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGlobalDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDesktopsResponse
   */
  async describeGlobalDesktopsWithOptions(request: $_model.DescribeGlobalDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.withoutLatency)) {
      query["WithoutLatency"] = request.withoutLatency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDesktopsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeGlobalDesktopsResponse({}));
  }

  /**
   * @param request - DescribeGlobalDesktopsRequest
   * @returns DescribeGlobalDesktopsResponse
   */
  async describeGlobalDesktops(request: $_model.DescribeGlobalDesktopsRequest): Promise<$_model.DescribeGlobalDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOfficeSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSitesWithOptions(request: $_model.DescribeOfficeSitesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOfficeSitesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOfficeSites",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOfficeSitesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeOfficeSitesResponse({}));
  }

  /**
   * @param request - DescribeOfficeSitesRequest
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSites(request: $_model.DescribeOfficeSitesRequest): Promise<$_model.DescribeOfficeSitesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 列举快照
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnapshotsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeSnapshotsResponse({}));
  }

  /**
   * 列举快照
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * 查询用户资源列表
   * 
   * @param request - DescribeUserResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserResourcesResponse
   */
  async describeUserResourcesWithOptions(request: $_model.DescribeUserResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.autoRefresh)) {
      query["AutoRefresh"] = request.autoRefresh;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      query["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.dualCenterForward)) {
      query["DualCenterForward"] = request.dualCenterForward;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteIds)) {
      query["OfficeSiteIds"] = request.officeSiteIds;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.productTypes)) {
      query["ProductTypes"] = request.productTypes;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.queryDesktopDurationList)) {
      query["QueryDesktopDurationList"] = request.queryDesktopDurationList;
    }

    if (!$dara.isNull(request.queryDesktopTimers)) {
      query["QueryDesktopTimers"] = request.queryDesktopTimers;
    }

    if (!$dara.isNull(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!$dara.isNull(request.refreshFotaUpdate)) {
      query["RefreshFotaUpdate"] = request.refreshFotaUpdate;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserResources",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserResourcesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeUserResourcesResponse({}));
  }

  /**
   * 查询用户资源列表
   * 
   * @param request - DescribeUserResourcesRequest
   * @returns DescribeUserResourcesResponse
   */
  async describeUserResources(request: $_model.DescribeUserResourcesRequest): Promise<$_model.DescribeUserResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserResourcesWithOptions(request, runtime);
  }

  /**
   * Encrypts a password.
   * 
   * @param request - EncryptPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptPasswordResponse
   */
  async encryptPasswordWithOptions(request: $_model.EncryptPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncryptPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EncryptPasswordResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.EncryptPasswordResponse({}));
  }

  /**
   * Encrypts a password.
   * 
   * @param request - EncryptPasswordRequest
   * @returns EncryptPasswordResponse
   */
  async encryptPassword(request: $_model.EncryptPasswordRequest): Promise<$_model.EncryptPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptPasswordWithOptions(request, runtime);
  }

  /**
   * 获取无影云盘的免密token
   * 
   * @param request - GetCloudDriveServiceMountTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudDriveServiceMountTokenResponse
   */
  async getCloudDriveServiceMountTokenWithOptions(request: $_model.GetCloudDriveServiceMountTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudDriveServiceMountTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudDriveServiceMountToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudDriveServiceMountTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetCloudDriveServiceMountTokenResponse({}));
  }

  /**
   * 获取无影云盘的免密token
   * 
   * @param request - GetCloudDriveServiceMountTokenRequest
   * @returns GetCloudDriveServiceMountTokenResponse
   */
  async getCloudDriveServiceMountToken(request: $_model.GetCloudDriveServiceMountTokenRequest): Promise<$_model.GetCloudDriveServiceMountTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudDriveServiceMountTokenWithOptions(request, runtime);
  }

  /**
   * 获得连接凭证
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: $_model.GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectionTicketResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetConnectionTicketResponse({}));
  }

  /**
   * 获得连接凭证
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Obtains logon credentials.
   * 
   * @param tmpReq - GetLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginTokenResponse
   */
  async getLoginTokenWithOptions(tmpReq: $_model.GetLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginTokenResponse> {
    tmpReq.validate();
    let request = new $_model.GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableFeatures)) {
      request.availableFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!$dara.isNull(request.availableFeaturesShrink)) {
      query["AvailableFeatures"] = request.availableFeaturesShrink;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientName)) {
      query["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetLoginTokenResponse({}));
  }

  /**
   * Obtains logon credentials.
   * 
   * @param request - GetLoginTokenRequest
   * @returns GetLoginTokenResponse
   */
  async getLoginToken(request: $_model.GetLoginTokenRequest): Promise<$_model.GetLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * 是否保持登录判断接口
   * 
   * @param request - IsKeepAliveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsKeepAliveResponse
   */
  async isKeepAliveWithOptions(request: $_model.IsKeepAliveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IsKeepAliveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsKeepAlive",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsKeepAliveResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.IsKeepAliveResponse({}));
  }

  /**
   * 是否保持登录判断接口
   * 
   * @param request - IsKeepAliveRequest
   * @returns IsKeepAliveResponse
   */
  async isKeepAlive(request: $_model.IsKeepAliveRequest): Promise<$_model.IsKeepAliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.isKeepAliveWithOptions(request, runtime);
  }

  /**
   * 查询Agent需要上报的配置信息
   * 
   * @param request - QueryEdsAgentReportConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEdsAgentReportConfigResponse
   */
  async queryEdsAgentReportConfigWithOptions(request: $_model.QueryEdsAgentReportConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEdsAgentReportConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEdsAgentReportConfig",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEdsAgentReportConfigResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.QueryEdsAgentReportConfigResponse({}));
  }

  /**
   * 查询Agent需要上报的配置信息
   * 
   * @param request - QueryEdsAgentReportConfigRequest
   * @returns QueryEdsAgentReportConfigResponse
   */
  async queryEdsAgentReportConfig(request: $_model.QueryEdsAgentReportConfigRequest): Promise<$_model.QueryEdsAgentReportConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEdsAgentReportConfigWithOptions(request, runtime);
  }

  /**
   * Restart cloud computers.
   * 
   * @param request - RebootDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootDesktopsResponse
   */
  async rebootDesktopsWithOptions(request: $_model.RebootDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootDesktopsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RebootDesktopsResponse({}));
  }

  /**
   * Restart cloud computers.
   * 
   * @param request - RebootDesktopsRequest
   * @returns RebootDesktopsResponse
   */
  async rebootDesktops(request: $_model.RebootDesktopsRequest): Promise<$_model.RebootDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginTokenWithOptions(request: $_model.RefreshLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshLoginTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RefreshLoginTokenResponse({}));
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: $_model.RefreshLoginTokenRequest): Promise<$_model.RefreshLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

  /**
   * 上报edsAgent的信息
   * 
   * @param request - ReportEdsAgentInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportEdsAgentInfoResponse
   */
  async reportEdsAgentInfoWithOptions(request: $_model.ReportEdsAgentInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportEdsAgentInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.edsAgentInfo)) {
      query["EdsAgentInfo"] = request.edsAgentInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportEdsAgentInfo",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportEdsAgentInfoResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ReportEdsAgentInfoResponse({}));
  }

  /**
   * 上报edsAgent的信息
   * 
   * @param request - ReportEdsAgentInfoRequest
   * @returns ReportEdsAgentInfoResponse
   */
  async reportEdsAgentInfo(request: $_model.ReportEdsAgentInfoRequest): Promise<$_model.ReportEdsAgentInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportEdsAgentInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ReportSessionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportSessionStatusResponse
   */
  async reportSessionStatusWithOptions(request: $_model.ReportSessionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportSessionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionChangeTime)) {
      query["SessionChangeTime"] = request.sessionChangeTime;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportSessionStatus",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportSessionStatusResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ReportSessionStatusResponse({}));
  }

  /**
   * @param request - ReportSessionStatusRequest
   * @returns ReportSessionStatusResponse
   */
  async reportSessionStatus(request: $_model.ReportSessionStatusRequest): Promise<$_model.ReportSessionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportSessionStatusWithOptions(request, runtime);
  }

  /**
   * Resets a password.
   * 
   * @param request - ResetPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetPasswordResponse
   */
  async resetPasswordWithOptions(request: $_model.ResetPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.phone)) {
      query["phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetPasswordResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ResetPasswordResponse({}));
  }

  /**
   * Resets a password.
   * 
   * @param request - ResetPasswordRequest
   * @returns ResetPasswordResponse
   */
  async resetPassword(request: $_model.ResetPasswordRequest): Promise<$_model.ResetPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetPasswordWithOptions(request, runtime);
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @param request - ResetSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSnapshotResponse
   */
  async resetSnapshotWithOptions(request: $_model.ResetSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.stopDesktop)) {
      query["StopDesktop"] = request.stopDesktop;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSnapshot",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSnapshotResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ResetSnapshotResponse({}));
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @param request - ResetSnapshotRequest
   * @returns ResetSnapshotResponse
   */
  async resetSnapshot(request: $_model.ResetSnapshotRequest): Promise<$_model.ResetSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  /**
   * Sends a logon verification code.
   * 
   * @param request - SendTokenCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTokenCodeResponse
   */
  async sendTokenCodeWithOptions(request: $_model.SendTokenCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendTokenCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTokenCode",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendTokenCodeResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SendTokenCodeResponse({}));
  }

  /**
   * Sends a logon verification code.
   * 
   * @param request - SendTokenCodeRequest
   * @returns SendTokenCodeResponse
   */
  async sendTokenCode(request: $_model.SendTokenCodeRequest): Promise<$_model.SendTokenCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendTokenCodeWithOptions(request, runtime);
  }

  /**
   * @param request - SetFingerPrintTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFingerPrintTemplateResponse
   */
  async setFingerPrintTemplateWithOptions(request: $_model.SetFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFingerPrintTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptedFingerPrintTemplate)) {
      query["EncryptedFingerPrintTemplate"] = request.encryptedFingerPrintTemplate;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.fingerPrintTemplate)) {
      query["FingerPrintTemplate"] = request.fingerPrintTemplate;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFingerPrintTemplateResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SetFingerPrintTemplateResponse({}));
  }

  /**
   * @param request - SetFingerPrintTemplateRequest
   * @returns SetFingerPrintTemplateResponse
   */
  async setFingerPrintTemplate(request: $_model.SetFingerPrintTemplateRequest): Promise<$_model.SetFingerPrintTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFingerPrintTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - SetFingerPrintTemplateDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFingerPrintTemplateDescriptionResponse
   */
  async setFingerPrintTemplateDescriptionWithOptions(request: $_model.SetFingerPrintTemplateDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFingerPrintTemplateDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFingerPrintTemplateDescription",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFingerPrintTemplateDescriptionResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SetFingerPrintTemplateDescriptionResponse({}));
  }

  /**
   * @param request - SetFingerPrintTemplateDescriptionRequest
   * @returns SetFingerPrintTemplateDescriptionResponse
   */
  async setFingerPrintTemplateDescription(request: $_model.SetFingerPrintTemplateDescriptionRequest): Promise<$_model.SetFingerPrintTemplateDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFingerPrintTemplateDescriptionWithOptions(request, runtime);
  }

  /**
   * Start cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
   * 
   * @param request - StartDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: $_model.StartDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDesktopsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartDesktopsResponse({}));
  }

  /**
   * Start cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
   * 
   * @param request - StartDesktopsRequest
   * @returns StartDesktopsResponse
   */
  async startDesktops(request: $_model.StartDesktopsRequest): Promise<$_model.StartDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordContentResponse
   */
  async startRecordContentWithOptions(request: $_model.StartRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRecordContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRecordContentResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartRecordContentResponse({}));
  }

  /**
   * @param request - StartRecordContentRequest
   * @returns StartRecordContentResponse
   */
  async startRecordContent(request: $_model.StartRecordContentRequest): Promise<$_model.StartRecordContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordContentWithOptions(request, runtime);
  }

  /**
   * Stops cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state. After you call this operation, the cloud computers enter the Stopped state.
   * 
   * @param request - StopDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: $_model.StopDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDesktopsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopDesktopsResponse({}));
  }

  /**
   * Stops cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state. After you call this operation, the cloud computers enter the Stopped state.
   * 
   * @param request - StopDesktopsRequest
   * @returns StopDesktopsResponse
   */
  async stopDesktops(request: $_model.StopDesktopsRequest): Promise<$_model.StopDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordContentResponse
   */
  async stopRecordContentWithOptions(request: $_model.StopRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRecordContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRecordContentResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopRecordContentResponse({}));
  }

  /**
   * @param request - StopRecordContentRequest
   * @returns StopRecordContentResponse
   */
  async stopRecordContent(request: $_model.StopRecordContentRequest): Promise<$_model.StopRecordContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordContentWithOptions(request, runtime);
  }

  /**
   * Unbinds end users from cloud computers.
   * 
   * @param request - UnbindUserDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktopWithOptions(request: $_model.UnbindUserDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindUserDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindUserDesktop",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindUserDesktopResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.UnbindUserDesktopResponse({}));
  }

  /**
   * Unbinds end users from cloud computers.
   * 
   * @param request - UnbindUserDesktopRequest
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktop(request: $_model.UnbindUserDesktopRequest): Promise<$_model.UnbindUserDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindUserDesktopWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyCredentialResponse
   */
  async verifyCredentialWithOptions(request: $_model.VerifyCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyCredential",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyCredentialResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.VerifyCredentialResponse({}));
  }

  /**
   * @param request - VerifyCredentialRequest
   * @returns VerifyCredentialResponse
   */
  async verifyCredential(request: $_model.VerifyCredentialRequest): Promise<$_model.VerifyCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyCredentialWithOptions(request, runtime);
  }

}

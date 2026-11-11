// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "EcdBiz";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecdbiz", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates the commercial edition rights under the current account. First, query the rights by calling ListRights, and then select the target region, office network, image, and user. A Success response indicates that the request is processed. To check the resource creation result, query the RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId parameters returned by ListRights.
   * 
   * @remarks
   * Activates the commercial edition rights under the current account. First, query the rights by calling ListRights, and then select the target region, office network, image, and user. A Success response indicates that the request is processed. To check the resource creation result, query the RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId parameters returned by ListRights.
   * 
   * @param request - ActiveRightsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveRightsResponse
   */
  async activeRightsWithOptions(request: $_model.ActiveRightsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveRightsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rootDiskSize)) {
      query["RootDiskSize"] = request.rootDiskSize;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!$dara.isNull(request.wyidList)) {
      query["WyidList"] = request.wyidList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.customImageId)) {
      body["CustomImageId"] = request.customImageId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hibernate)) {
      body["Hibernate"] = request.hibernate;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      body["OfficeSiteId"] = request.officeSiteId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rightsAssignedUser)) {
      bodyFlat["RightsAssignedUser"] = request.rightsAssignedUser;
    }

    if (!$dara.isNull(request.rightsGpuSpec)) {
      body["RightsGpuSpec"] = request.rightsGpuSpec;
    }

    if (!$dara.isNull(request.rightsIds)) {
      bodyFlat["RightsIds"] = request.rightsIds;
    }

    if (!$dara.isNull(request.rightsResourceArea)) {
      body["RightsResourceArea"] = request.rightsResourceArea;
    }

    if (!$dara.isNull(request.rightsResourceImageOs)) {
      body["RightsResourceImageOs"] = request.rightsResourceImageOs;
    }

    if (!$dara.isNull(request.rightsResourceRegion)) {
      body["RightsResourceRegion"] = request.rightsResourceRegion;
    }

    if (!$dara.isNull(request.rightsResourceType)) {
      body["RightsResourceType"] = request.rightsResourceType;
    }

    if (!$dara.isNull(request.rightsSpec)) {
      body["RightsSpec"] = request.rightsSpec;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveRights",
      version: "2024-09-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveRightsResponse>(await this.callApi(params, req, runtime), new $_model.ActiveRightsResponse({}));
  }

  /**
   * Activates the commercial edition rights under the current account. First, query the rights by calling ListRights, and then select the target region, office network, image, and user. A Success response indicates that the request is processed. To check the resource creation result, query the RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId parameters returned by ListRights.
   * 
   * @remarks
   * Activates the commercial edition rights under the current account. First, query the rights by calling ListRights, and then select the target region, office network, image, and user. A Success response indicates that the request is processed. To check the resource creation result, query the RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId parameters returned by ListRights.
   * 
   * @param request - ActiveRightsRequest
   * @returns ActiveRightsResponse
   */
  async activeRights(request: $_model.ActiveRightsRequest): Promise<$_model.ActiveRightsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeRightsWithOptions(request, runtime);
  }

  /**
   * Queries the commercial edition rights accessible to the current caller identity by using paging. Use this operation to select rights before activation. After you call ActiveRights, you can query the processing results by using RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId.
   * 
   * @remarks
   * Queries the commercial edition rights accessible to the current caller identity by using paging. Use this operation to select rights before activation. After you call ActiveRights, you can query the processing results by using RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId.
   * 
   * @param request - ListRightsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRightsResponse
   */
  async listRightsWithOptions(request: $_model.ListRightsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRightsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessSceneCode)) {
      query["BusinessSceneCode"] = request.businessSceneCode;
    }

    if (!$dara.isNull(request.rightsIds)) {
      query["RightsIds"] = request.rightsIds;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiDesktop)) {
      body["AiDesktop"] = request.aiDesktop;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.overseas)) {
      body["Overseas"] = request.overseas;
    }

    if (!$dara.isNull(request.rightsActiveStatus)) {
      body["RightsActiveStatus"] = request.rightsActiveStatus;
    }

    if (!$dara.isNull(request.rightsAssignedUser)) {
      body["RightsAssignedUser"] = request.rightsAssignedUser;
    }

    if (!$dara.isNull(request.rightsPeriod)) {
      body["RightsPeriod"] = request.rightsPeriod;
    }

    if (!$dara.isNull(request.rightsResourceId)) {
      body["RightsResourceId"] = request.rightsResourceId;
    }

    if (!$dara.isNull(request.rightsResourceType)) {
      body["RightsResourceType"] = request.rightsResourceType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rightsResourceTypes)) {
      bodyFlat["RightsResourceTypes"] = request.rightsResourceTypes;
    }

    if (!$dara.isNull(request.rightsSpec)) {
      body["RightsSpec"] = request.rightsSpec;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRights",
      version: "2024-09-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRightsResponse>(await this.callApi(params, req, runtime), new $_model.ListRightsResponse({}));
  }

  /**
   * Queries the commercial edition rights accessible to the current caller identity by using paging. Use this operation to select rights before activation. After you call ActiveRights, you can query the processing results by using RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId.
   * 
   * @remarks
   * Queries the commercial edition rights accessible to the current caller identity by using paging. Use this operation to select rights before activation. After you call ActiveRights, you can query the processing results by using RightsActiveStatus, RightsActiveFailureCause, and RightsResourceId.
   * 
   * @param request - ListRightsRequest
   * @returns ListRightsResponse
   */
  async listRights(request: $_model.ListRightsRequest): Promise<$_model.ListRightsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRightsWithOptions(request, runtime);
  }

}

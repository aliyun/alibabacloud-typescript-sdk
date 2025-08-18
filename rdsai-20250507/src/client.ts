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
    this._endpoint = this.getEndpoint("rdsai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建应用服务实例
   * 
   * @param request - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(request: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
    }

    if (!$dara.isNull(request.dashboardUsername)) {
      query["DashboardUsername"] = request.dashboardUsername;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.publicNetworkAccessEnabled)) {
      query["PublicNetworkAccessEnabled"] = request.publicNetworkAccessEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
  }

  /**
   * 创建应用服务实例
   * 
   * @param request - CreateAppInstanceRequest
   * @returns CreateAppInstanceResponse
   */
  async createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceWithOptions(request, runtime);
  }

  /**
   * 删除应用服务实例
   * 
   * @param request - DeleteAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstanceWithOptions(request: $_model.DeleteAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceResponse({}));
  }

  /**
   * 删除应用服务实例
   * 
   * @param request - DeleteAppInstanceRequest
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstance(request: $_model.DeleteAppInstanceRequest): Promise<$_model.DeleteAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceWithOptions(request, runtime);
  }

  /**
   * 查询应用服务详情
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttributeWithOptions(request: $_model.DescribeAppInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstanceAttribute",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstanceAttributeResponse({}));
  }

  /**
   * 查询应用服务详情
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttribute(request: $_model.DescribeAppInstanceAttributeRequest): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询应用服务列表
   * 
   * @param request - DescribeAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstancesWithOptions(request: $_model.DescribeAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstances",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstancesResponse({}));
  }

  /**
   * 查询应用服务列表
   * 
   * @param request - DescribeAppInstancesRequest
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstances(request: $_model.DescribeAppInstancesRequest): Promise<$_model.DescribeAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstancesWithOptions(request, runtime);
  }

  /**
   * 查看服务连接信息
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpointsWithOptions(request: $_model.DescribeInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceEndpoints",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceEndpointsResponse({}));
  }

  /**
   * 查看服务连接信息
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpoints(request: $_model.DescribeInstanceEndpointsRequest): Promise<$_model.DescribeInstanceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceEndpointsWithOptions(request, runtime);
  }

  /**
   * 查询服务白名单
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelistWithOptions(request: $_model.DescribeInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIpWhitelistResponse({}));
  }

  /**
   * 查询服务白名单
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelist(request: $_model.DescribeInstanceIpWhitelistRequest): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIpWhitelistWithOptions(request, runtime);
  }

  /**
   * 修改服务白名单
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelistWithOptions(request: $_model.ModifyInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceIpWhitelistResponse({}));
  }

  /**
   * 修改服务白名单
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelist(request: $_model.ModifyInstanceIpWhitelistRequest): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceIpWhitelistWithOptions(request, runtime);
  }

}

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
   * @param tmpReq - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBInstanceConfig)) {
      request.DBInstanceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceConfig, "DBInstanceConfig", "json");
    }

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

    if (!$dara.isNull(request.DBInstanceConfigShrink)) {
      query["DBInstanceConfig"] = request.DBInstanceConfigShrink;
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

    if (!$dara.isNull(request.RAGEnabled)) {
      query["RAGEnabled"] = request.RAGEnabled;
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
   * 查看实例认证信息
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfoWithOptions(request: $_model.DescribeInstanceAuthInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAuthInfoResponse> {
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
      action: "DescribeInstanceAuthInfo",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAuthInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAuthInfoResponse({}));
  }

  /**
   * 查看实例认证信息
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfo(request: $_model.DescribeInstanceAuthInfoRequest): Promise<$_model.DescribeInstanceAuthInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAuthInfoWithOptions(request, runtime);
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
   * 查看实例RAG配置
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfigWithOptions(request: $_model.DescribeInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRAGConfigResponse> {
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
      action: "DescribeInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRAGConfigResponse({}));
  }

  /**
   * 查看实例RAG配置
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfig(request: $_model.DescribeInstanceRAGConfigRequest): Promise<$_model.DescribeInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * 查看实例SSL配置
   * 
   * @param request - DescribeInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse> {
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
      action: "DescribeInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
  }

  /**
   * 查看实例SSL配置
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * 查看实例存储配置
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfigWithOptions(request: $_model.DescribeInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStorageConfigResponse> {
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
      action: "DescribeInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStorageConfigResponse({}));
  }

  /**
   * 查看实例存储配置
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfig(request: $_model.DescribeInstanceStorageConfigRequest): Promise<$_model.DescribeInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * 修改Supabase Auth相关配置
   * 
   * @param tmpReq - ModifyInstanceAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfigWithOptions(tmpReq: $_model.ModifyInstanceAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceAuthConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
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
      action: "ModifyInstanceAuthConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAuthConfigResponse({}));
  }

  /**
   * 修改Supabase Auth相关配置
   * 
   * @param request - ModifyInstanceAuthConfigRequest
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfig(request: $_model.ModifyInstanceAuthConfigRequest): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAuthConfigWithOptions(request, runtime);
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

  /**
   * 修改实例RAG配置
   * 
   * @param tmpReq - ModifyInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfigWithOptions(tmpReq: $_model.ModifyInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceRAGConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceRAGConfigResponse({}));
  }

  /**
   * 修改实例RAG配置
   * 
   * @param request - ModifyInstanceRAGConfigRequest
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfig(request: $_model.ModifyInstanceRAGConfigRequest): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * 修改实例SSL配置
   * 
   * @param request - ModifyInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
  }

  /**
   * 修改实例SSL配置
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * 修改实例存储配置
   * 
   * @param tmpReq - ModifyInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfigWithOptions(tmpReq: $_model.ModifyInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceStorageConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
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
      action: "ModifyInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceStorageConfigResponse({}));
  }

  /**
   * 修改实例存储配置
   * 
   * @param request - ModifyInstanceStorageConfigRequest
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfig(request: $_model.ModifyInstanceStorageConfigRequest): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * 重置实例密码
   * 
   * @param request - ResetInstancePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePasswordWithOptions(request: $_model.ResetInstancePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstancePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
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
      action: "ResetInstancePassword",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetInstancePasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetInstancePasswordResponse({}));
  }

  /**
   * 重置实例密码
   * 
   * @param request - ResetInstancePasswordRequest
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePassword(request: $_model.ResetInstancePasswordRequest): Promise<$_model.ResetInstancePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetInstancePasswordWithOptions(request, runtime);
  }

  /**
   * 重启实例
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
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
      action: "RestartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * 重启实例
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * 启动实例
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
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
      action: "StartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * 启动实例
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * 暂停实例
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
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
      action: "StopInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * 暂停实例
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

}

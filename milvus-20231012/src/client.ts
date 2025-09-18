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
    this._endpoint = this.getEndpoint("milvus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Create a service role for Milvus to access other cloud products
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefaultRoleResponse
   */
  async createDefaultRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDefaultRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefaultRole",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/user/create_default_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDefaultRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDefaultRoleResponse({}));
  }

  /**
   * Create a service role for Milvus to access other cloud products
   * @returns CreateDefaultRoleResponse
   */
  async createDefaultRole(): Promise<$_model.CreateDefaultRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDefaultRoleWithOptions(headers, runtime);
  }

  /**
   * Get the public IP address whitelist of a Milvus instance.
   * 
   * @param request - DescribeAccessControlListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListResponse
   */
  async describeAccessControlListWithOptions(request: $_model.DescribeAccessControlListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessControlListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessControlList",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/milvus/describe_access_control_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessControlListResponse({}));
  }

  /**
   * Get the public IP address whitelist of a Milvus instance.
   * 
   * @param request - DescribeAccessControlListRequest
   * @returns DescribeAccessControlListResponse
   */
  async describeAccessControlList(request: $_model.DescribeAccessControlListRequest): Promise<$_model.DescribeAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * Get information about the custom configuration of each component of Milvus.
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigsWithOptions(request: $_model.DescribeInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceConfigs",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/config/describe_milvus_user_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceConfigsResponse({}));
  }

  /**
   * Get information about the custom configuration of each component of Milvus.
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigs(request: $_model.DescribeInstanceConfigsRequest): Promise<$_model.DescribeInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Get the details of an instance.
   * 
   * @param request - GetInstanceDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetailWithOptions(request: $_model.GetInstanceDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceDetail",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceDetailResponse({}));
  }

  /**
   * Get the details of an instance.
   * 
   * @param request - GetInstanceDetailRequest
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetail(request: $_model.GetInstanceDetailRequest): Promise<$_model.GetInstanceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceDetailWithOptions(request, headers, runtime);
  }

  /**
   * Get the list of Milvus instances under the current account.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/order/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Get the list of Milvus instances under the current account.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Update the configuration parameters of each component of Milvus.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfig",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/config/modify_milvus_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
  }

  /**
   * Update the configuration parameters of each component of Milvus.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceConfigWithOptions(request, headers, runtime);
  }

  /**
   * Configure Public IP Address Whitelist
   * 
   * @param request - UpdateAccessControlListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessControlListResponse
   */
  async updateAccessControlListWithOptions(request: $_model.UpdateAccessControlListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccessControlListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccessControlList",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/milvus/update_access_control_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccessControlListResponse({}));
  }

  /**
   * Configure Public IP Address Whitelist
   * 
   * @param request - UpdateAccessControlListRequest
   * @returns UpdateAccessControlListResponse
   */
  async updateAccessControlList(request: $_model.UpdateAccessControlListRequest): Promise<$_model.UpdateAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: $_model.UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNameResponse({}));
  }

  /**
   * Modifies the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(request, headers, runtime);
  }

  /**
   * Enable or disable Internet access for Milvus.
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatusWithOptions(request: $_model.UpdatePublicNetworkStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePublicNetworkStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicNetworkEnabled)) {
      query["PublicNetworkEnabled"] = request.publicNetworkEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicNetworkStatus",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/network/updatePublicNetworkStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePublicNetworkStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePublicNetworkStatusResponse({}));
  }

  /**
   * Enable or disable Internet access for Milvus.
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatus(request: $_model.UpdatePublicNetworkStatusRequest): Promise<$_model.UpdatePublicNetworkStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkStatusWithOptions(request, headers, runtime);
  }

}

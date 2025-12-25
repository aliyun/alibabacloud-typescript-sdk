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
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/resourceGroup/change`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
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
   * 创建实例
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBackup)) {
      body["autoBackup"] = request.autoBackup;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.dbAdminPassword)) {
      body["dbAdminPassword"] = request.dbAdminPassword;
    }

    if (!$dara.isNull(request.dbVersion)) {
      body["dbVersion"] = request.dbVersion;
    }

    if (!$dara.isNull(request.encrypted)) {
      body["encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.ha)) {
      body["ha"] = request.ha;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isMultiAzStorage)) {
      body["isMultiAzStorage"] = request.isMultiAzStorage;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      body["kmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.loadReplicas)) {
      body["loadReplicas"] = request.loadReplicas;
    }

    if (!$dara.isNull(request.multiZoneMode)) {
      body["multiZoneMode"] = request.multiZoneMode;
    }

    if (!$dara.isNull(request.paymentDuration)) {
      body["paymentDuration"] = request.paymentDuration;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      body["paymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.promotionNo)) {
      body["promotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      body["vSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/instance/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/instance/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(request, headers, runtime);
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
   * 获取实例详情
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/instance/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(request, headers, runtime);
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
   * 根据集群ID或者名称搜索集群
   * 
   * @param tmpReq - ListInstancesV2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesV2Response
   */
  async listInstancesV2WithOptions(tmpReq: $_model.ListInstancesV2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesV2Response> {
    tmpReq.validate();
    let request = new $_model.ListInstancesV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesV2",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/instance/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesV2Response>(await this.callApi(params, req, runtime), new $_model.ListInstancesV2Response({}));
  }

  /**
   * 根据集群ID或者名称搜索集群
   * 
   * @param request - ListInstancesV2Request
   * @returns ListInstancesV2Response
   */
  async listInstancesV2(request: $_model.ListInstancesV2Request): Promise<$_model.ListInstancesV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesV2WithOptions(request, headers, runtime);
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
   * 打标
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * 打标
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 删除标签
   * 
   * @param tmpReq - UnTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(tmpReq: $_model.UnTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UnTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "TagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["TagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UnTagResourcesResponse({}));
  }

  /**
   * 删除标签
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unTagResourcesWithOptions(request, headers, runtime);
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
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBackup)) {
      body["autoBackup"] = request.autoBackup;
    }

    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.ha)) {
      body["ha"] = request.ha;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/instance/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(request, headers, runtime);
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

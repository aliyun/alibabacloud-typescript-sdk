// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("foasconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 开通弹性计算
   * 
   * @param tmpReq - ConvertHybridInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertHybridInstanceResponse
   */
  async convertHybridInstanceWithOptions(tmpReq: $_model.ConvertHybridInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertHybridInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.ConvertHybridInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      query["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertHybridInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertHybridInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConvertHybridInstanceResponse({}));
  }

  /**
   * 开通弹性计算
   * 
   * @param request - ConvertHybridInstanceRequest
   * @returns ConvertHybridInstanceResponse
   */
  async convertHybridInstance(request: $_model.ConvertHybridInstanceRequest): Promise<$_model.ConvertHybridInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertHybridInstanceWithOptions(request, runtime);
  }

  /**
   * 按量付费转包年包月
   * 
   * @param tmpReq - ConvertInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResponse
   */
  async convertInstanceWithOptions(tmpReq: $_model.ConvertInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.ConvertInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaceResourceSpecs)) {
      request.namespaceResourceSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaceResourceSpecs, "NamespaceResourceSpecs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isAutoRenew)) {
      body["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!$dara.isNull(request.namespaceResourceSpecsShrink)) {
      body["NamespaceResourceSpecs"] = request.namespaceResourceSpecsShrink;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConvertInstanceResponse({}));
  }

  /**
   * 按量付费转包年包月
   * 
   * @param request - ConvertInstanceRequest
   * @returns ConvertInstanceResponse
   */
  async convertInstance(request: $_model.ConvertInstanceRequest): Promise<$_model.ConvertInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  /**
   * 包年包月转按量付费
   * 
   * @param request - ConvertPrepayInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertPrepayInstanceResponse
   */
  async convertPrepayInstanceWithOptions(request: $_model.ConvertPrepayInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertPrepayInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPrepayInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertPrepayInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConvertPrepayInstanceResponse({}));
  }

  /**
   * 包年包月转按量付费
   * 
   * @param request - ConvertPrepayInstanceRequest
   * @returns ConvertPrepayInstanceResponse
   */
  async convertPrepayInstance(request: $_model.ConvertPrepayInstanceRequest): Promise<$_model.ConvertPrepayInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertPrepayInstanceWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param tmpReq - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(tmpReq: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.storage)) {
      request.storageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storage, "Storage", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    if (!$dara.isNull(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.architectureType)) {
      body["ArchitectureType"] = request.architectureType;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!$dara.isNull(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!$dara.isNull(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.monitorType)) {
      body["MonitorType"] = request.monitorType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    if (!$dara.isNull(request.storageShrink)) {
      body["Storage"] = request.storageShrink;
    }

    if (!$dara.isNull(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建命名空间
   * 
   * @param tmpReq - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(tmpReq: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNamespaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * 创建命名空间
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * 释放按量付费的实例
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * 释放按量付费的实例
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除namespace
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * 删除namespace
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * instance列表
   * 
   * @param tmpReq - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(tmpReq: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * instance列表
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * namespace列表
   * 
   * @param tmpReq - DescribeNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespacesResponse
   */
  async describeNamespacesWithOptions(tmpReq: $_model.DescribeNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespacesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeNamespacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaces",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespacesResponse({}));
  }

  /**
   * namespace列表
   * 
   * @param request - DescribeNamespacesRequest
   * @returns DescribeNamespacesResponse
   */
  async describeNamespaces(request: $_model.DescribeNamespacesRequest): Promise<$_model.DescribeNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNamespacesWithOptions(request, runtime);
  }

  /**
   * 获取支持的region列表
   * 
   * @param request - DescribeSupportedRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportedRegionsResponse
   */
  async describeSupportedRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportedRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportedRegions",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportedRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportedRegionsResponse({}));
  }

  /**
   * 获取支持的region列表
   * @returns DescribeSupportedRegionsResponse
   */
  async describeSupportedRegions(): Promise<$_model.DescribeSupportedRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportedRegionsWithOptions(runtime);
  }

  /**
   * 获取支持的zoneId列表
   * 
   * @param request - DescribeSupportedZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportedZonesResponse
   */
  async describeSupportedZonesWithOptions(request: $_model.DescribeSupportedZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportedZonesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportedZones",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportedZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportedZonesResponse({}));
  }

  /**
   * 获取支持的zoneId列表
   * 
   * @param request - DescribeSupportedZonesRequest
   * @returns DescribeSupportedZonesResponse
   */
  async describeSupportedZones(request: $_model.DescribeSupportedZonesRequest): Promise<$_model.DescribeSupportedZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportedZonesWithOptions(request, runtime);
  }

  /**
   * 列举flinkasi标签
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 列举flinkasi标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 对按量弹性实例修改resource quota
   * 
   * @param tmpReq - ModifyElasticResourceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticResourceSpecResponse
   */
  async modifyElasticResourceSpecWithOptions(tmpReq: $_model.ModifyElasticResourceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticResourceSpecResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyElasticResourceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticResourceSpec",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticResourceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticResourceSpecResponse({}));
  }

  /**
   * 对按量弹性实例修改resource quota
   * 
   * @param request - ModifyElasticResourceSpecRequest
   * @returns ModifyElasticResourceSpecResponse
   */
  async modifyElasticResourceSpec(request: $_model.ModifyElasticResourceSpecRequest): Promise<$_model.ModifyElasticResourceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticResourceSpecWithOptions(request, runtime);
  }

  /**
   * 修改集群交换机
   * 
   * @deprecated OpenAPI ModifyInstanceVswitch is deprecated
   * 
   * @param tmpReq - ModifyInstanceVswitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVswitchResponse
   */
  async modifyInstanceVswitchWithOptions(tmpReq: $_model.ModifyInstanceVswitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceVswitchResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceVswitchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!$dara.isNull(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVswitch",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceVswitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceVswitchResponse({}));
  }

  /**
   * 修改集群交换机
   * 
   * @deprecated OpenAPI ModifyInstanceVswitch is deprecated
   * 
   * @param request - ModifyInstanceVswitchRequest
   * @returns ModifyInstanceVswitchResponse
   */
  // Deprecated
  async modifyInstanceVswitch(request: $_model.ModifyInstanceVswitchRequest): Promise<$_model.ModifyInstanceVswitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVswitchWithOptions(request, runtime);
  }

  /**
   * 修改namespace资源，包含按量和包年包月、混合计费
   * 
   * @param tmpReq - ModifyNamespaceSpecV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNamespaceSpecV2Response
   */
  async modifyNamespaceSpecV2WithOptions(tmpReq: $_model.ModifyNamespaceSpecV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNamespaceSpecV2Response> {
    tmpReq.validate();
    let request = new $_model.ModifyNamespaceSpecV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.elasticResourceSpec)) {
      request.elasticResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.elasticResourceSpec, "ElasticResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.guaranteedResourceSpec)) {
      request.guaranteedResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.guaranteedResourceSpec, "GuaranteedResourceSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ha)) {
      query["Ha"] = request.ha;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticResourceSpecShrink)) {
      body["ElasticResourceSpec"] = request.elasticResourceSpecShrink;
    }

    if (!$dara.isNull(request.guaranteedResourceSpecShrink)) {
      body["GuaranteedResourceSpec"] = request.guaranteedResourceSpecShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNamespaceSpecV2",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNamespaceSpecV2Response>(await this.callApi(params, req, runtime), new $_model.ModifyNamespaceSpecV2Response({}));
  }

  /**
   * 修改namespace资源，包含按量和包年包月、混合计费
   * 
   * @param request - ModifyNamespaceSpecV2Request
   * @returns ModifyNamespaceSpecV2Response
   */
  async modifyNamespaceSpecV2(request: $_model.ModifyNamespaceSpecV2Request): Promise<$_model.ModifyNamespaceSpecV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNamespaceSpecV2WithOptions(request, runtime);
  }

  /**
   * 扩容/缩容
   * 
   * @deprecated OpenAPI ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2021-10-28::ModifyInstanceSpec instead.
   * 
   * @param tmpReq - ModifyPrepayInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPrepayInstanceSpecResponse
   */
  async modifyPrepayInstanceSpecWithOptions(tmpReq: $_model.ModifyPrepayInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPrepayInstanceSpecResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPrepayInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!$dara.isNull(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!$dara.isNull(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!$dara.isNull(request.haZoneId)) {
      body["HaZoneId"] = request.haZoneId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPrepayInstanceSpec",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPrepayInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPrepayInstanceSpecResponse({}));
  }

  /**
   * 扩容/缩容
   * 
   * @deprecated OpenAPI ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2021-10-28::ModifyInstanceSpec instead.
   * 
   * @param request - ModifyPrepayInstanceSpecRequest
   * @returns ModifyPrepayInstanceSpecResponse
   */
  // Deprecated
  async modifyPrepayInstanceSpec(request: $_model.ModifyPrepayInstanceSpecRequest): Promise<$_model.ModifyPrepayInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  /**
   * 修改namespace资源分配
   * 
   * @deprecated OpenAPI ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2021-10-28::ModifyNamespaceSpec instead.
   * 
   * @param tmpReq - ModifyPrepayNamespaceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPrepayNamespaceSpecResponse
   */
  async modifyPrepayNamespaceSpecWithOptions(tmpReq: $_model.ModifyPrepayNamespaceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPrepayNamespaceSpecResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPrepayNamespaceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPrepayNamespaceSpec",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPrepayNamespaceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPrepayNamespaceSpecResponse({}));
  }

  /**
   * 修改namespace资源分配
   * 
   * @deprecated OpenAPI ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2021-10-28::ModifyNamespaceSpec instead.
   * 
   * @param request - ModifyPrepayNamespaceSpecRequest
   * @returns ModifyPrepayNamespaceSpecResponse
   */
  // Deprecated
  async modifyPrepayNamespaceSpec(request: $_model.ModifyPrepayNamespaceSpecRequest): Promise<$_model.ModifyPrepayNamespaceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPrepayNamespaceSpecWithOptions(request, runtime);
  }

  /**
   * 按量付费转包年包月询价
   * 
   * @param tmpReq - QueryConvertInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConvertInstancePriceResponse
   */
  async queryConvertInstancePriceWithOptions(tmpReq: $_model.QueryConvertInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConvertInstancePriceResponse> {
    tmpReq.validate();
    let request = new $_model.QueryConvertInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaceResourceSpecs)) {
      request.namespaceResourceSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaceResourceSpecs, "NamespaceResourceSpecs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isAutoRenew)) {
      body["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!$dara.isNull(request.namespaceResourceSpecsShrink)) {
      body["NamespaceResourceSpecs"] = request.namespaceResourceSpecsShrink;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConvertInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConvertInstancePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryConvertInstancePriceResponse({}));
  }

  /**
   * 按量付费转包年包月询价
   * 
   * @param request - QueryConvertInstancePriceRequest
   * @returns QueryConvertInstancePriceResponse
   */
  async queryConvertInstancePrice(request: $_model.QueryConvertInstancePriceRequest): Promise<$_model.QueryConvertInstancePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConvertInstancePriceWithOptions(request, runtime);
  }

  /**
   * 包年包月转按量付费询价
   * 
   * @param request - QueryConvertPrepayInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConvertPrepayInstancePriceResponse
   */
  async queryConvertPrepayInstancePriceWithOptions(request: $_model.QueryConvertPrepayInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConvertPrepayInstancePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConvertPrepayInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConvertPrepayInstancePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryConvertPrepayInstancePriceResponse({}));
  }

  /**
   * 包年包月转按量付费询价
   * 
   * @param request - QueryConvertPrepayInstancePriceRequest
   * @returns QueryConvertPrepayInstancePriceResponse
   */
  async queryConvertPrepayInstancePrice(request: $_model.QueryConvertPrepayInstancePriceRequest): Promise<$_model.QueryConvertPrepayInstancePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConvertPrepayInstancePriceWithOptions(request, runtime);
  }

  /**
   * 获取创建实例的价格
   * 
   * @param tmpReq - QueryCreateInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCreateInstancePriceResponse
   */
  async queryCreateInstancePriceWithOptions(tmpReq: $_model.QueryCreateInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCreateInstancePriceResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCreateInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.storage)) {
      request.storageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storage, "Storage", "json");
    }

    if (!$dara.isNull(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.architectureType)) {
      body["ArchitectureType"] = request.architectureType;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!$dara.isNull(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    if (!$dara.isNull(request.storageShrink)) {
      body["Storage"] = request.storageShrink;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCreateInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCreateInstancePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryCreateInstancePriceResponse({}));
  }

  /**
   * 获取创建实例的价格
   * 
   * @param request - QueryCreateInstancePriceRequest
   * @returns QueryCreateInstancePriceResponse
   */
  async queryCreateInstancePrice(request: $_model.QueryCreateInstancePriceRequest): Promise<$_model.QueryCreateInstancePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCreateInstancePriceWithOptions(request, runtime);
  }

  /**
   * 查询付费类型为包年包月的实例修改资源规格的价格
   * 
   * @param tmpReq - QueryModifyInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyInstancePriceResponse
   */
  async queryModifyInstancePriceWithOptions(tmpReq: $_model.QueryModifyInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyInstancePriceResponse> {
    tmpReq.validate();
    let request = new $_model.QueryModifyInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!$dara.isNull(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!$dara.isNull(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!$dara.isNull(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyInstancePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyInstancePriceResponse({}));
  }

  /**
   * 查询付费类型为包年包月的实例修改资源规格的价格
   * 
   * @param request - QueryModifyInstancePriceRequest
   * @returns QueryModifyInstancePriceResponse
   */
  async queryModifyInstancePrice(request: $_model.QueryModifyInstancePriceRequest): Promise<$_model.QueryModifyInstancePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryModifyInstancePriceWithOptions(request, runtime);
  }

  /**
   * 查询付费类型为包年包月的实例续费价格
   * 
   * @param request - QueryRenewInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRenewInstancePriceResponse
   */
  async queryRenewInstancePriceWithOptions(request: $_model.QueryRenewInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRenewInstancePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRenewInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRenewInstancePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryRenewInstancePriceResponse({}));
  }

  /**
   * 查询付费类型为包年包月的实例续费价格
   * 
   * @param request - QueryRenewInstancePriceRequest
   * @returns QueryRenewInstancePriceResponse
   */
  async queryRenewInstancePrice(request: $_model.QueryRenewInstancePriceRequest): Promise<$_model.QueryRenewInstancePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRenewInstancePriceWithOptions(request, runtime);
  }

  /**
   * 续费
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * 续费
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * flinkasi去标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * flinkasi去标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}

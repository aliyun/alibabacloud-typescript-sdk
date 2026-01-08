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
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 按量付费转包年包月
   * 
   * @param request - ConvertInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResponse
   */
  async convertInstanceWithOptions(request: $_model.ConvertInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.convertPostpayInstanceRequest)) {
      bodyFlat["ConvertPostpayInstanceRequest"] = request.convertPostpayInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertInstance",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.convertPrepayInstanceRequest)) {
      bodyFlat["ConvertPrepayInstanceRequest"] = request.convertPrepayInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPrepayInstance",
      version: "2019-06-01",
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
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createInstanceRequest)) {
      bodyFlat["CreateInstanceRequest"] = request.createInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2019-06-01",
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
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createNamespaceRequest)) {
      bodyFlat["CreateNamespaceRequest"] = request.createNamespaceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteInstanceRequest)) {
      bodyFlat["DeleteInstanceRequest"] = request.deleteInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteNamespaceRequest)) {
      bodyFlat["DeleteNamespaceRequest"] = request.deleteNamespaceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2019-06-01",
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
   * 扩容/缩容
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-06-01",
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
   * 扩容/缩容
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
   * @param request - DescribeNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespacesResponse
   */
  async describeNamespacesWithOptions(request: $_model.DescribeNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespacesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaces",
      version: "2019-06-01",
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
      version: "2019-06-01",
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
      version: "2019-06-01",
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
      version: "2019-06-01",
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
   * 扩容/缩容
   * 
   * @deprecated OpenAPI ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2019-06-01::ModifyInstanceSpec instead.
   * 
   * @param request - ModifyPrepayInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPrepayInstanceSpecResponse
   */
  async modifyPrepayInstanceSpecWithOptions(request: $_model.ModifyPrepayInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPrepayInstanceSpecResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modifyPrepayInstanceSpecRequest)) {
      bodyFlat["ModifyPrepayInstanceSpecRequest"] = request.modifyPrepayInstanceSpecRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPrepayInstanceSpec",
      version: "2019-06-01",
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
   * @deprecated OpenAPI ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2019-06-01::ModifyInstanceSpec instead.
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
   * @deprecated OpenAPI ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2019-06-01::ModifyNamespaceSpec instead.
   * 
   * @param request - ModifyPrepayNamespaceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPrepayNamespaceSpecResponse
   */
  async modifyPrepayNamespaceSpecWithOptions(request: $_model.ModifyPrepayNamespaceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPrepayNamespaceSpecResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modifyPrepayNamespaceSpecRequest)) {
      bodyFlat["ModifyPrepayNamespaceSpecRequest"] = request.modifyPrepayNamespaceSpecRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPrepayNamespaceSpec",
      version: "2019-06-01",
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
   * @deprecated OpenAPI ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2019-06-01::ModifyNamespaceSpec instead.
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
   * @param request - QueryConvertInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConvertInstancePriceResponse
   */
  async queryConvertInstancePriceWithOptions(request: $_model.QueryConvertInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConvertInstancePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.convertPostpayInstanceRequest)) {
      bodyFlat["ConvertPostpayInstanceRequest"] = request.convertPostpayInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConvertInstancePrice",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.convertPrepayInstanceRequest)) {
      bodyFlat["ConvertPrepayInstanceRequest"] = request.convertPrepayInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConvertPrepayInstancePrice",
      version: "2019-06-01",
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
   * @param request - QueryCreateInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCreateInstancePriceResponse
   */
  async queryCreateInstancePriceWithOptions(request: $_model.QueryCreateInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCreateInstancePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createInstanceRequest)) {
      bodyFlat["CreateInstanceRequest"] = request.createInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCreateInstancePrice",
      version: "2019-06-01",
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
   * @param request - QueryModifyInstancePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyInstancePriceResponse
   */
  async queryModifyInstancePriceWithOptions(request: $_model.QueryModifyInstancePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyInstancePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modifyPrepayInstanceSpecRequest)) {
      bodyFlat["ModifyPrepayInstanceSpecRequest"] = request.modifyPrepayInstanceSpecRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyInstancePrice",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.renewInstanceRequest)) {
      bodyFlat["RenewInstanceRequest"] = request.renewInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRenewInstancePrice",
      version: "2019-06-01",
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
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.renewInstanceRequest)) {
      bodyFlat["RenewInstanceRequest"] = request.renewInstanceRequest;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2019-06-01",
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
      version: "2019-06-01",
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
      version: "2019-06-01",
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

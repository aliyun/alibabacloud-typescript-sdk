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
    this._endpoint = this.getEndpoint("paielasticdatasetaccelerator", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 将一个挂载点关联到一个数据集加速槽上。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEndpointResponse
   */
  async bindEndpointWithOptions(EndpointId: string, SlotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "BindEndpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints/${$dara.URL.percentEncode(EndpointId)}/slots/${$dara.URL.percentEncode(SlotId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindEndpointResponse>(await this.callApi(params, req, runtime), new $_model.BindEndpointResponse({}));
  }

  /**
   * 将一个挂载点关联到一个数据集加速槽上。
   * @returns BindEndpointResponse
   */
  async bindEndpoint(EndpointId: string, SlotId: string): Promise<$_model.BindEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEndpointWithOptions(EndpointId, SlotId, headers, runtime);
  }

  /**
   * 创建并注册一个数据集加速槽挂载点。
   * 
   * @param request - CreateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: $_model.CreateEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      body["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEndpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateEndpointResponse({}));
  }

  /**
   * 创建并注册一个数据集加速槽挂载点。
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: $_model.CreateEndpointRequest): Promise<$_model.CreateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据集加速实例
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacity)) {
      body["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxEndpoint)) {
      body["MaxEndpoint"] = request.maxEndpoint;
    }

    if (!$dara.isNull(request.maxSlot)) {
      body["MaxSlot"] = request.maxSlot;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!$dara.isNull(request.storageType)) {
      body["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * 创建数据集加速实例
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
   * 创建并注册一个 数据集加速槽。
   * 
   * @param request - CreateSlotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlotResponse
   */
  async createSlotWithOptions(request: $_model.CreateSlotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacity)) {
      body["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointIds)) {
      body["EndpointIds"] = request.endpointIds;
    }

    if (!$dara.isNull(request.endpoints)) {
      body["Endpoints"] = request.endpoints;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioType)) {
      body["IoType"] = request.ioType;
    }

    if (!$dara.isNull(request.lifeCycle)) {
      body["LifeCycle"] = request.lifeCycle;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.storageType)) {
      body["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.storageUri)) {
      body["StorageUri"] = request.storageUri;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlotResponse({}));
  }

  /**
   * 创建并注册一个 数据集加速槽。
   * 
   * @param request - CreateSlotRequest
   * @returns CreateSlotResponse
   */
  async createSlot(request: $_model.CreateSlotRequest): Promise<$_model.CreateSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSlotWithOptions(request, headers, runtime);
  }

  /**
   * 同时创建并注册多个数据集加速槽，并使用相同的一组数据加速槽挂载点。
   * 
   * @param request - CreateSlotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlotsResponse
   */
  async createSlotsWithOptions(request: $_model.CreateSlotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlotsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.slots)) {
      body["Slots"] = request.slots;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlots",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/batch/slots/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlotsResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlotsResponse({}));
  }

  /**
   * 同时创建并注册多个数据集加速槽，并使用相同的一组数据加速槽挂载点。
   * 
   * @param request - CreateSlotsRequest
   * @returns CreateSlotsResponse
   */
  async createSlots(request: $_model.CreateSlotsRequest): Promise<$_model.CreateSlotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSlotsWithOptions(request, headers, runtime);
  }

  /**
   * 针对一个资源，创建一个标签。
   * 
   * @param request - CreateTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * 针对一个资源，创建一个标签。
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTagWithOptions(request, headers, runtime);
  }

  /**
   * 删除一个数据集加速槽挂载点。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(EndpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints/${$dara.URL.percentEncode(EndpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEndpointResponse({}));
  }

  /**
   * 删除一个数据集加速槽挂载点。
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(EndpointId: string): Promise<$_model.DeleteEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEndpointWithOptions(EndpointId, headers, runtime);
  }

  /**
   * 删除一个数据集加速实例。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * 删除一个数据集加速实例。
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 删除一个数据集加速槽。
   * 
   * @param request - DeleteSlotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSlotResponse
   */
  async deleteSlotWithOptions(SlotId: string, request: $_model.DeleteSlotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSlotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSlotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSlotResponse({}));
  }

  /**
   * 删除一个数据集加速槽。
   * 
   * @param request - DeleteSlotRequest
   * @returns DeleteSlotResponse
   */
  async deleteSlot(SlotId: string, request: $_model.DeleteSlotRequest): Promise<$_model.DeleteSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSlotWithOptions(SlotId, request, headers, runtime);
  }

  /**
   * 删除一个资源上的一个标签。
   * 
   * @param request - DeleteTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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
      action: "DeleteTag",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * 删除一个资源上的一个标签。
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTagWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定数据集加速组件的信息。
   * 
   * @param tmpReq - DescribeComponentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentResponse
   */
  async describeComponentWithOptions(ComponentId: string, tmpReq: $_model.DescribeComponentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeComponentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.values)) {
      request.valuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.values, "Values", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.renderTemplate)) {
      query["RenderTemplate"] = request.renderTemplate;
    }

    if (!$dara.isNull(request.valuesShrink)) {
      query["Values"] = request.valuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponent",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/components/${$dara.URL.percentEncode(ComponentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentResponse({}));
  }

  /**
   * 获取指定数据集加速组件的信息。
   * 
   * @param request - DescribeComponentRequest
   * @returns DescribeComponentResponse
   */
  async describeComponent(ComponentId: string, request: $_model.DescribeComponentRequest): Promise<$_model.DescribeComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentWithOptions(ComponentId, request, headers, runtime);
  }

  /**
   * 获取指定数据集加速槽挂载点的信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointResponse
   */
  async describeEndpointWithOptions(EndpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints/${$dara.URL.percentEncode(EndpointId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointResponse({}));
  }

  /**
   * 获取指定数据集加速槽挂载点的信息。
   * @returns DescribeEndpointResponse
   */
  async describeEndpoint(EndpointId: string): Promise<$_model.DescribeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEndpointWithOptions(EndpointId, headers, runtime);
  }

  /**
   * 获取指定数据集加速实例信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * 获取指定数据集加速实例信息。
   * @returns DescribeInstanceResponse
   */
  async describeInstance(InstanceId: string): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取指定数据集加速槽的信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlotResponse
   */
  async describeSlotWithOptions(SlotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlotResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlotResponse({}));
  }

  /**
   * 获取指定数据集加速槽的信息。
   * @returns DescribeSlotResponse
   */
  async describeSlot(SlotId: string): Promise<$_model.DescribeSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSlotWithOptions(SlotId, headers, runtime);
  }

  /**
   * 获取数据集加速组件的信息列表。
   * 
   * @param request - ListComponentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentsResponse
   */
  async listComponentsWithOptions(request: $_model.ListComponentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponents",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentsResponse({}));
  }

  /**
   * 获取数据集加速组件的信息列表。
   * 
   * @param request - ListComponentsRequest
   * @returns ListComponentsResponse
   */
  async listComponents(request: $_model.ListComponentsRequest): Promise<$_model.ListComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据集加速槽挂载点的信息列表。
   * 
   * @param request - ListEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointsResponse
   */
  async listEndpointsWithOptions(request: $_model.ListEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointIds)) {
      query["EndpointIds"] = request.endpointIds;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.slotIds)) {
      query["SlotIds"] = request.slotIds;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEndpoints",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListEndpointsResponse({}));
  }

  /**
   * 获取数据集加速槽挂载点的信息列表。
   * 
   * @param request - ListEndpointsRequest
   * @returns ListEndpointsResponse
   */
  async listEndpoints(request: $_model.ListEndpointsRequest): Promise<$_model.ListEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEndpointsWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据集加速实例信息列表。
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * 获取数据集加速实例信息列表。
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
   * 获取数据集加速槽的信息列表。
   * 
   * @param request - ListSlotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlotsResponse
   */
  async listSlotsWithOptions(request: $_model.ListSlotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSlotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointIds)) {
      query["EndpointIds"] = request.endpointIds;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.slotIds)) {
      query["SlotIds"] = request.slotIds;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.storageUri)) {
      query["StorageUri"] = request.storageUri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSlots",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSlotsResponse>(await this.callApi(params, req, runtime), new $_model.ListSlotsResponse({}));
  }

  /**
   * 获取数据集加速槽的信息列表。
   * 
   * @param request - ListSlotsRequest
   * @returns ListSlotsResponse
   */
  async listSlots(request: $_model.ListSlotsRequest): Promise<$_model.ListSlotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlotsWithOptions(request, headers, runtime);
  }

  /**
   * 获取标签列表信息。
   * 
   * @param request - ListTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * 获取标签列表信息。
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  /**
   * 查询并获取监控指标信息。
   * 
   * @param tmpReq - QueryInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceMetricsResponse
   */
  async queryInstanceMetricsWithOptions(InstanceId: string, tmpReq: $_model.QueryInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceMetricsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryInstanceMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dimensions)) {
      request.dimensionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dimensions, "Dimensions", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensionsShrink)) {
      query["Dimensions"] = request.dimensionsShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstanceMetrics",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/metrics/action/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceMetricsResponse({}));
  }

  /**
   * 查询并获取监控指标信息。
   * 
   * @param request - QueryInstanceMetricsRequest
   * @returns QueryInstanceMetricsResponse
   */
  async queryInstanceMetrics(InstanceId: string, request: $_model.QueryInstanceMetricsRequest): Promise<$_model.QueryInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryInstanceMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 查询并获取监控指标信息
   * 
   * @param tmpReq - QuerySlotMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySlotMetricsResponse
   */
  async querySlotMetricsWithOptions(SlotId: string, tmpReq: $_model.QuerySlotMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySlotMetricsResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySlotMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dimensions)) {
      request.dimensionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dimensions, "Dimensions", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensionsShrink)) {
      query["Dimensions"] = request.dimensionsShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySlotMetrics",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}/metrics/action/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySlotMetricsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySlotMetricsResponse({}));
  }

  /**
   * 查询并获取监控指标信息
   * 
   * @param request - QuerySlotMetricsRequest
   * @returns QuerySlotMetricsResponse
   */
  async querySlotMetrics(SlotId: string, request: $_model.QuerySlotMetricsRequest): Promise<$_model.QuerySlotMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySlotMetricsWithOptions(SlotId, request, headers, runtime);
  }

  /**
   * 查询当前账号下数据集加速相关的统计信息。
   * 
   * @param request - QueryStatisticRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStatisticResponse
   */
  async queryStatisticWithOptions(request: $_model.QueryStatisticRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStatisticResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStatistic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/action/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStatisticResponse>(await this.callApi(params, req, runtime), new $_model.QueryStatisticResponse({}));
  }

  /**
   * 查询当前账号下数据集加速相关的统计信息。
   * 
   * @param request - QueryStatisticRequest
   * @returns QueryStatisticResponse
   */
  async queryStatistic(request: $_model.QueryStatisticRequest): Promise<$_model.QueryStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryStatisticWithOptions(request, headers, runtime);
  }

  /**
   * 重载数据加速槽的数据
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReloadSlotResponse
   */
  async reloadSlotWithOptions(SlotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReloadSlotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReloadSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}/action/reload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReloadSlotResponse>(await this.callApi(params, req, runtime), new $_model.ReloadSlotResponse({}));
  }

  /**
   * 重载数据加速槽的数据
   * @returns ReloadSlotResponse
   */
  async reloadSlot(SlotId: string): Promise<$_model.ReloadSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reloadSlotWithOptions(SlotId, headers, runtime);
  }

  /**
   * 停止一个数据集加速槽。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSlotResponse
   */
  async stopSlotWithOptions(SlotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSlotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSlotResponse>(await this.callApi(params, req, runtime), new $_model.StopSlotResponse({}));
  }

  /**
   * 停止一个数据集加速槽。
   * @returns StopSlotResponse
   */
  async stopSlot(SlotId: string): Promise<$_model.StopSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSlotWithOptions(SlotId, headers, runtime);
  }

  /**
   * 取消挂载点关联和指定数据集加速槽的关联关系。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEndpointResponse
   */
  async unbindEndpointWithOptions(EndpointId: string, SlotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindEndpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/endpoints/${$dara.URL.percentEncode(EndpointId)}/slots/${$dara.URL.percentEncode(SlotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UnbindEndpointResponse({}));
  }

  /**
   * 取消挂载点关联和指定数据集加速槽的关联关系。
   * @returns UnbindEndpointResponse
   */
  async unbindEndpoint(EndpointId: string, SlotId: string): Promise<$_model.UnbindEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindEndpointWithOptions(EndpointId, SlotId, headers, runtime);
  }

  /**
   * 更新一个数据集加速实例的信息。
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(InstanceId: string, request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxSlot)) {
      body["MaxSlot"] = request.maxSlot;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 更新一个数据集加速实例的信息。
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(InstanceId: string, request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 更新一个数据集加速槽的信息。
   * 
   * @param request - UpdateSlotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSlotResponse
   */
  async updateSlotWithOptions(SlotId: string, request: $_model.UpdateSlotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSlotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacity)) {
      body["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.lifeCycle)) {
      body["LifeCycle"] = request.lifeCycle;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.storageType)) {
      body["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.storageUri)) {
      body["StorageUri"] = request.storageUri;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSlot",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/api/v1/slots/${$dara.URL.percentEncode(SlotId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSlotResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSlotResponse({}));
  }

  /**
   * 更新一个数据集加速槽的信息。
   * 
   * @param request - UpdateSlotRequest
   * @returns UpdateSlotResponse
   */
  async updateSlot(SlotId: string, request: $_model.UpdateSlotRequest): Promise<$_model.UpdateSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSlotWithOptions(SlotId, request, headers, runtime);
  }

}

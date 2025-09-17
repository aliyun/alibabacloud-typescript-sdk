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
    this._endpoint = this.getEndpoint("cloudcontrol", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Calls this operation to cancel a specified asynchronous task.
   * 
   * @remarks
   * Only tasks that are in the Pending or Running state can be canceled.
   * You can call the CancelTask operation to cancel a Cloud Control API task, but the tasks that have been started in the downstream Alibaba Cloud services cannot be canceled.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${$dara.URL.percentEncode(taskId)}/operation/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * Calls this operation to cancel a specified asynchronous task.
   * 
   * @remarks
   * Only tasks that are in the Pending or Running state can be canceled.
   * You can call the CancelTask operation to cancel a Cloud Control API task, but the tasks that have been started in the downstream Alibaba Cloud services cannot be canceled.
   * @returns CancelTaskResponse
   */
  async cancelTask(taskId: string): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * Calls this operation to create resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(requestPath: string, request: $_model.CreateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * Calls this operation to create resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(requestPath: string, request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * Calls this operation to delete resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - DeleteResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(requestPath: string, tmpReq: $_model.DeleteResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceResponse({}));
  }

  /**
   * Calls this operation to delete resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(requestPath: string, request: $_model.DeleteResourceRequest): Promise<$_model.DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * An RFQ interface through which users can query resource prices.
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - GetPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPriceResponse
   */
  async getPriceWithOptions(requestPath: string, tmpReq: $_model.GetPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPriceResponse> {
    tmpReq.validate();
    let request = new $_model.GetPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceAttributes)) {
      request.resourceAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceAttributes, "resourceAttributes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAttributesShrink)) {
      query["resourceAttributes"] = request.resourceAttributesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrice",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPriceResponse>(await this.callApi(params, req, runtime), new $_model.GetPriceResponse({}));
  }

  /**
   * An RFQ interface through which users can query resource prices.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - GetPriceRequest
   * @returns GetPriceResponse
   */
  async getPrice(requestPath: string, request: $_model.GetPriceRequest): Promise<$_model.GetPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPriceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * You can call the operation to obtain resource metadata.
   * 
   * @param requestPath - the whole path of resource string
   * @param headers - GetResourceTypeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(requestPath: string, headers: $_model.GetResourceTypeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypeResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = String(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceType",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceTypeResponse({}));
  }

  /**
   * You can call the operation to obtain resource metadata.
   * 
   * @param requestPath - the whole path of resource string
   * @returns GetResourceTypeResponse
   */
  async getResourceType(requestPath: string): Promise<$_model.GetResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetResourceTypeHeaders({ });
    return await this.getResourceTypeWithOptions(requestPath, headers, runtime);
  }

  /**
   * You can call the operation to query resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out CloudControl API.
   * You can call this operation to query resources List and Get based on different request paths.
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - GetResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcesResponse
   */
  async getResourcesWithOptions(requestPath: string, tmpReq: $_model.GetResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.GetResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResources",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourcesResponse>(await this.callApi(params, req, runtime), new $_model.GetResourcesResponse({}));
  }

  /**
   * You can call the operation to query resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out CloudControl API.
   * You can call this operation to query resources List and Get based on different request paths.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - GetResourcesRequest
   * @returns GetResourcesResponse
   */
  async getResources(requestPath: string, request: $_model.GetResourcesRequest): Promise<$_model.GetResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourcesWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * Calls this operation to query a specified asynchronous task.
   * 
   * @remarks
   * GET /api/v1/tasks/{taskId}.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Calls this operation to query a specified asynchronous task.
   * 
   * @remarks
   * GET /api/v1/tasks/{taskId}.
   * @returns GetTaskResponse
   */
  async getTask(taskId: string): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the operation to query the valid values of resource attributes, such as RegionID and ZoneId.
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - ListDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(requestPath: string, tmpReq: $_model.ListDataSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributeName)) {
      query["attributeName"] = request.attributeName;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * You can call the operation to query the valid values of resource attributes, such as RegionID and ZoneId.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(requestPath: string, request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * Calls this operation to list the supported services.
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products.
   * 
   * @param request - ListProductsRequest
   * @param headers - ListProductsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(provider: string, request: $_model.ListProductsRequest, headers: $_model.ListProductsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = String(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/providers/${$dara.URL.percentEncode(provider)}/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * Calls this operation to list the supported services.
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products.
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(provider: string, request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListProductsHeaders({ });
    return await this.listProductsWithOptions(provider, request, headers, runtime);
  }

  /**
   * Calls this operation to list the resource types of a service.
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products/{product}/resourceTypes.
   * 
   * @param tmpReq - ListResourceTypesRequest
   * @param headers - ListResourceTypesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(provider: string, product: string, tmpReq: $_model.ListResourceTypesRequest, headers: $_model.ListResourceTypesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypesResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceTypes)) {
      request.resourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypes, "resourceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceTypesShrink)) {
      query["resourceTypes"] = request.resourceTypesShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = String(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypes",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/providers/${$dara.URL.percentEncode(provider)}/products/${$dara.URL.percentEncode(product)}/resourceTypes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTypesResponse({}));
  }

  /**
   * Calls this operation to list the resource types of a service.
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products/{product}/resourceTypes.
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(provider: string, product: string, request: $_model.ListResourceTypesRequest): Promise<$_model.ListResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListResourceTypesHeaders({ });
    return await this.listResourceTypesWithOptions(provider, product, request, headers, runtime);
  }

  /**
   * Calls this operation to update resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * If resources fail to be updated at any time, the Cloud Control API does not roll the resource back to the original status.
   * The resource APIs cannot be rolled back. If the API operation is partially failed to be called, you can call the GetResource operation to view the latest status of the resource. If necessary, you can call the UpdateResource or DeleteResource operation to manually compensate for the failure.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(requestPath: string, request: $_model.UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceResponse({}));
  }

  /**
   * Calls this operation to update resources.
   * 
   * @remarks
   * You can go to [OpenAPI Explorer](https://next.api.aliyun.com/cloudcontrol) to view the documentation and try out Cloud Control API.
   * If resources fail to be updated at any time, the Cloud Control API does not roll the resource back to the original status.
   * The resource APIs cannot be rolled back. If the API operation is partially failed to be called, you can call the GetResource operation to view the latest status of the resource. If necessary, you can call the UpdateResource or DeleteResource operation to manually compensate for the failure.
   * 
   * @param requestPath - the whole path of resource string
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(requestPath: string, request: $_model.UpdateResourceRequest): Promise<$_model.UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(requestPath, request, headers, runtime);
  }

}

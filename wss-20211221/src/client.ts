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
    this._endpoint = this.getEndpoint("wss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param tmpReq - CreateMultiOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrderWithOptions(tmpReq: $_model.CreateMultiOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMultiOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderItems)) {
      query["OrderItems"] = request.orderItems;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      query["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiOrder",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiOrderResponse({}));
  }

  /**
   * @param request - CreateMultiOrderRequest
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrder(request: $_model.CreateMultiOrderRequest): Promise<$_model.CreateMultiOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeliveryAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddressWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeliveryAddressResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeliveryAddress",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeliveryAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeliveryAddressResponse({}));
  }

  /**
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<$_model.DescribeDeliveryAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * @param request - DescribeMultiPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPriceWithOptions(request: $_model.DescribeMultiPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderItems)) {
      query["OrderItems"] = request.orderItems;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.packageCode)) {
      query["PackageCode"] = request.packageCode;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiPrice",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiPriceResponse({}));
  }

  /**
   * @param request - DescribeMultiPriceRequest
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPrice(request: $_model.DescribeMultiPriceRequest): Promise<$_model.DescribeMultiPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiPriceWithOptions(request, runtime);
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductionsWithOptions(request: $_model.DescribePackageDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageDeductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackageDeductions",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackageDeductionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackageDeductionsResponse({}));
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: $_model.DescribePackageDeductionsRequest): Promise<$_model.DescribePackageDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstancePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstancePropertiesWithOptions(request: $_model.ModifyInstancePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceProperties",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstancePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstancePropertiesResponse({}));
  }

  /**
   * @param request - ModifyInstancePropertiesRequest
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstanceProperties(request: $_model.ModifyInstancePropertiesRequest): Promise<$_model.ModifyInstancePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancePropertiesWithOptions(request, runtime);
  }

}

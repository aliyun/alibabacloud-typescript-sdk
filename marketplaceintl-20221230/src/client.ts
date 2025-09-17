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
    this._endpoint = this.getEndpoint("marketplaceintl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取推送计量数据结果
   * 
   * @param request - DescribePushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePushMeteringDataResponse
   */
  async describePushMeteringDataWithOptions(request: $_model.DescribePushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePushMeteringDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pushOrderBizId)) {
      query["PushOrderBizId"] = request.pushOrderBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePushMeteringData",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePushMeteringDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribePushMeteringDataResponse({}));
  }

  /**
   * 获取推送计量数据结果
   * 
   * @param request - DescribePushMeteringDataRequest
   * @returns DescribePushMeteringDataResponse
   */
  async describePushMeteringData(request: $_model.DescribePushMeteringDataRequest): Promise<$_model.DescribePushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePushMeteringDataWithOptions(request, runtime);
  }

  /**
   * 卖家查询实例列表
   * 
   * @param request - DescribeSellerInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSellerInstancesResponse
   */
  async describeSellerInstancesWithOptions(request: $_model.DescribeSellerInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSellerInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSellerInstances",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSellerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSellerInstancesResponse({}));
  }

  /**
   * 卖家查询实例列表
   * 
   * @param request - DescribeSellerInstancesRequest
   * @returns DescribeSellerInstancesResponse
   */
  async describeSellerInstances(request: $_model.DescribeSellerInstancesRequest): Promise<$_model.DescribeSellerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSellerInstancesWithOptions(request, runtime);
  }

  /**
   * isv推送实例消息给用户
   * 
   * @param request - NoticeInstanceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NoticeInstanceUserResponse
   */
  async noticeInstanceUserWithOptions(request: $_model.NoticeInstanceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NoticeInstanceUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.noticeParam)) {
      body["NoticeParam"] = request.noticeParam;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "NoticeInstanceUser",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NoticeInstanceUserResponse>(await this.callApi(params, req, runtime), new $_model.NoticeInstanceUserResponse({}));
  }

  /**
   * isv推送实例消息给用户
   * 
   * @param request - NoticeInstanceUserRequest
   * @returns NoticeInstanceUserResponse
   */
  async noticeInstanceUser(request: $_model.NoticeInstanceUserRequest): Promise<$_model.NoticeInstanceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.noticeInstanceUserWithOptions(request, runtime);
  }

  /**
   * 国际云市场推送计量数据
   * 
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: $_model.PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMeteringDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtCreate)) {
      body["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.meteringData)) {
      body["MeteringData"] = request.meteringData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMeteringDataResponse>(await this.callApi(params, req, runtime), new $_model.PushMeteringDataResponse({}));
  }

  /**
   * 国际云市场推送计量数据
   * 
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: $_model.PushMeteringDataRequest): Promise<$_model.PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

}

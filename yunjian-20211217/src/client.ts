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
    this._endpoint = this.getEndpoint("yunjian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - CreateDemandPlanRequest
   * @param headers - CreateDemandPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDemandPlanResponse
   */
  async createDemandPlanWithOptions(request: $_model.CreateDemandPlanRequest, headers: $_model.CreateDemandPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDemandPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      query["userId"] = request.userId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.targetCid)) {
      body["targetCid"] = request.targetCid;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDemandPlan",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/saveUrgentDemandPlanItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDemandPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateDemandPlanResponse({}));
  }

  /**
   * @param request - CreateDemandPlanRequest
   * @returns CreateDemandPlanResponse
   */
  async createDemandPlan(request: $_model.CreateDemandPlanRequest): Promise<$_model.CreateDemandPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDemandPlanHeaders({ });
    return await this.createDemandPlanWithOptions(request, headers, runtime);
  }

  /**
   * 创建plan2.0版本
   * 
   * @param request - CreateDemandPlanV2Request
   * @param headers - CreateDemandPlanV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDemandPlanV2Response
   */
  async createDemandPlanV2WithOptions(request: $_model.CreateDemandPlanV2Request, headers: $_model.CreateDemandPlanV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDemandPlanV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      query["userId"] = request.userId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    if (!$dara.isNull(request.targetCid)) {
      body["targetCid"] = request.targetCid;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDemandPlanV2",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/saveDemandPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDemandPlanV2Response>(await this.callApi(params, req, runtime), new $_model.CreateDemandPlanV2Response({}));
  }

  /**
   * 创建plan2.0版本
   * 
   * @param request - CreateDemandPlanV2Request
   * @returns CreateDemandPlanV2Response
   */
  async createDemandPlanV2(request: $_model.CreateDemandPlanV2Request): Promise<$_model.CreateDemandPlanV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDemandPlanV2Headers({ });
    return await this.createDemandPlanV2WithOptions(request, headers, runtime);
  }

  /**
   * 紧急需求单ite 删除
   * 
   * @param request - DeleteUrgentDemandItemRequest
   * @param headers - DeleteUrgentDemandItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUrgentDemandItemResponse
   */
  async deleteUrgentDemandItemWithOptions(request: $_model.DeleteUrgentDemandItemRequest, headers: $_model.DeleteUrgentDemandItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUrgentDemandItemResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUrgentDemandItem",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/deleteUrgentDemandItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUrgentDemandItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUrgentDemandItemResponse({}));
  }

  /**
   * 紧急需求单ite 删除
   * 
   * @param request - DeleteUrgentDemandItemRequest
   * @returns DeleteUrgentDemandItemResponse
   */
  async deleteUrgentDemandItem(request: $_model.DeleteUrgentDemandItemRequest): Promise<$_model.DeleteUrgentDemandItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUrgentDemandItemHeaders({ });
    return await this.deleteUrgentDemandItemWithOptions(request, headers, runtime);
  }

  /**
   * 紧急需求单plan删除
   * 
   * @param request - DeleteUrgentDemandPlanRequest
   * @param headers - DeleteUrgentDemandPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUrgentDemandPlanResponse
   */
  async deleteUrgentDemandPlanWithOptions(request: $_model.DeleteUrgentDemandPlanRequest, headers: $_model.DeleteUrgentDemandPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUrgentDemandPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUrgentDemandPlan",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/deleteUrgentDemandPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUrgentDemandPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUrgentDemandPlanResponse({}));
  }

  /**
   * 紧急需求单plan删除
   * 
   * @param request - DeleteUrgentDemandPlanRequest
   * @returns DeleteUrgentDemandPlanResponse
   */
  async deleteUrgentDemandPlan(request: $_model.DeleteUrgentDemandPlanRequest): Promise<$_model.DeleteUrgentDemandPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUrgentDemandPlanHeaders({ });
    return await this.deleteUrgentDemandPlanWithOptions(request, headers, runtime);
  }

  /**
   * 交付信息同步
   * 
   * @param request - DeliveryItemDetailSynRequest
   * @param headers - DeliveryItemDetailSynHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeliveryItemDetailSynResponse
   */
  async deliveryItemDetailSynWithOptions(request: $_model.DeliveryItemDetailSynRequest, headers: $_model.DeliveryItemDetailSynHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeliveryItemDetailSynResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.deliveryItemDetailDTOS)) {
      body["deliveryItemDetailDTOS"] = request.deliveryItemDetailDTOS;
    }

    if (!$dara.isNull(request.deliveryItemId)) {
      body["deliveryItemId"] = request.deliveryItemId;
    }

    if (!$dara.isNull(request.deliveryPlanId)) {
      body["deliveryPlanId"] = request.deliveryPlanId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeliveryItemDetailSyn",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/supply/deliveryItemDataSync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeliveryItemDetailSynResponse>(await this.callApi(params, req, runtime), new $_model.DeliveryItemDetailSynResponse({}));
  }

  /**
   * 交付信息同步
   * 
   * @param request - DeliveryItemDetailSynRequest
   * @returns DeliveryItemDetailSynResponse
   */
  async deliveryItemDetailSyn(request: $_model.DeliveryItemDetailSynRequest): Promise<$_model.DeliveryItemDetailSynResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeliveryItemDetailSynHeaders({ });
    return await this.deliveryItemDetailSynWithOptions(request, headers, runtime);
  }

  /**
   * 查询报备单中报备项列表
   * 
   * @param request - GetUrgentDemandItemListRequest
   * @param headers - GetUrgentDemandItemListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUrgentDemandItemListResponse
   */
  async getUrgentDemandItemListWithOptions(request: $_model.GetUrgentDemandItemListRequest, headers: $_model.GetUrgentDemandItemListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUrgentDemandItemListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["commodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.commodityTypeCode)) {
      body["commodityTypeCode"] = request.commodityTypeCode;
    }

    if (!$dara.isNull(request.current)) {
      body["current"] = request.current;
    }

    if (!$dara.isNull(request.planId)) {
      body["planId"] = request.planId;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.size)) {
      body["size"] = request.size;
    }

    if (!$dara.isNull(request.zone)) {
      body["zone"] = request.zone;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUrgentDemandItemList",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/getUrgentDemandItemList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUrgentDemandItemListResponse>(await this.callApi(params, req, runtime), new $_model.GetUrgentDemandItemListResponse({}));
  }

  /**
   * 查询报备单中报备项列表
   * 
   * @param request - GetUrgentDemandItemListRequest
   * @returns GetUrgentDemandItemListResponse
   */
  async getUrgentDemandItemList(request: $_model.GetUrgentDemandItemListRequest): Promise<$_model.GetUrgentDemandItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUrgentDemandItemListHeaders({ });
    return await this.getUrgentDemandItemListWithOptions(request, headers, runtime);
  }

  /**
   * getUrgentDemandPlanDetail
   * 
   * @param request - GetUrgentDemandPlanDetailRequest
   * @param headers - GetUrgentDemandPlanDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUrgentDemandPlanDetailResponse
   */
  async getUrgentDemandPlanDetailWithOptions(request: $_model.GetUrgentDemandPlanDetailRequest, headers: $_model.GetUrgentDemandPlanDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUrgentDemandPlanDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      body["planId"] = request.planId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUrgentDemandPlanDetail",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/getUrgentDemandPlanDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUrgentDemandPlanDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetUrgentDemandPlanDetailResponse({}));
  }

  /**
   * getUrgentDemandPlanDetail
   * 
   * @param request - GetUrgentDemandPlanDetailRequest
   * @returns GetUrgentDemandPlanDetailResponse
   */
  async getUrgentDemandPlanDetail(request: $_model.GetUrgentDemandPlanDetailRequest): Promise<$_model.GetUrgentDemandPlanDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUrgentDemandPlanDetailHeaders({ });
    return await this.getUrgentDemandPlanDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询报备单列表
   * 
   * @param request - GetUrgentDemandPlanListRequest
   * @param headers - GetUrgentDemandPlanListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUrgentDemandPlanListResponse
   */
  async getUrgentDemandPlanListWithOptions(request: $_model.GetUrgentDemandPlanListRequest, headers: $_model.GetUrgentDemandPlanListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUrgentDemandPlanListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["current"] = request.current;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.planType)) {
      body["planType"] = request.planType;
    }

    if (!$dara.isNull(request.size)) {
      body["size"] = request.size;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUrgentDemandPlanList",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/getUrgentDemandPlanList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUrgentDemandPlanListResponse>(await this.callApi(params, req, runtime), new $_model.GetUrgentDemandPlanListResponse({}));
  }

  /**
   * 查询报备单列表
   * 
   * @param request - GetUrgentDemandPlanListRequest
   * @returns GetUrgentDemandPlanListResponse
   */
  async getUrgentDemandPlanList(request: $_model.GetUrgentDemandPlanListRequest): Promise<$_model.GetUrgentDemandPlanListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUrgentDemandPlanListHeaders({ });
    return await this.getUrgentDemandPlanListWithOptions(request, headers, runtime);
  }

  /**
   * ecs资源方案
   * 
   * @param request - PushResourcePlanRequest
   * @param headers - PushResourcePlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResourcePlanResponse
   */
  async pushResourcePlanWithOptions(request: $_model.PushResourcePlanRequest, headers: $_model.PushResourcePlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushResourcePlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bufferCnt)) {
      body["bufferCnt"] = request.bufferCnt;
    }

    if (!$dara.isNull(request.demandCount)) {
      body["demandCount"] = request.demandCount;
    }

    if (!$dara.isNull(request.demandId)) {
      body["demandId"] = request.demandId;
    }

    if (!$dara.isNull(request.methodList)) {
      body["methodList"] = request.methodList;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.requireCnt)) {
      body["requireCnt"] = request.requireCnt;
    }

    if (!$dara.isNull(request.subDemandId)) {
      body["subDemandId"] = request.subDemandId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushResourcePlan",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/supply/resourcePlan/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushResourcePlanResponse>(await this.callApi(params, req, runtime), new $_model.PushResourcePlanResponse({}));
  }

  /**
   * ecs资源方案
   * 
   * @param request - PushResourcePlanRequest
   * @returns PushResourcePlanResponse
   */
  async pushResourcePlan(request: $_model.PushResourcePlanRequest): Promise<$_model.PushResourcePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushResourcePlanHeaders({ });
    return await this.pushResourcePlanWithOptions(request, headers, runtime);
  }

  /**
   * 查询accountId下所有存在交付状态（包括部分）的报备数据, 以及开通数据情况
   * 
   * @param request - QueryDeliveredSupplyItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeliveredSupplyItemsResponse
   */
  async queryDeliveredSupplyItemsWithOptions(request: $_model.QueryDeliveredSupplyItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeliveredSupplyItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.commodityTypeCode)) {
      query["commodityTypeCode"] = request.commodityTypeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeliveredSupplyItems",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/supply/queryDeliveredSupplyItems`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.QueryDeliveredSupplyItemsResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeliveredSupplyItemsResponse({}));
  }

  /**
   * 查询accountId下所有存在交付状态（包括部分）的报备数据, 以及开通数据情况
   * 
   * @param request - QueryDeliveredSupplyItemsRequest
   * @returns QueryDeliveredSupplyItemsResponse
   */
  async queryDeliveredSupplyItems(request: $_model.QueryDeliveredSupplyItemsRequest): Promise<$_model.QueryDeliveredSupplyItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDeliveredSupplyItemsWithOptions(request, headers, runtime);
  }

  /**
   * 查询账单预算数据
   * 
   * @param request - QueryPeriodBudgetBillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPeriodBudgetBillResponse
   */
  async queryPeriodBudgetBillWithOptions(request: $_model.QueryPeriodBudgetBillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPeriodBudgetBillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectIds)) {
      query["objectIds"] = request.objectIds;
    }

    if (!$dara.isNull(request.objectType)) {
      query["objectType"] = request.objectType;
    }

    if (!$dara.isNull(request.period)) {
      query["period"] = request.period;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPeriodBudgetBill",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/annual/budget/queryPeriodBudgetBill`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPeriodBudgetBillResponse>(await this.callApi(params, req, runtime), new $_model.QueryPeriodBudgetBillResponse({}));
  }

  /**
   * 查询账单预算数据
   * 
   * @param request - QueryPeriodBudgetBillRequest
   * @returns QueryPeriodBudgetBillResponse
   */
  async queryPeriodBudgetBill(request: $_model.QueryPeriodBudgetBillRequest): Promise<$_model.QueryPeriodBudgetBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPeriodBudgetBillWithOptions(request, headers, runtime);
  }

  /**
   * 紧急需求单item新增
   * 
   * @param request - SaveUrgentDemandItemRequest
   * @param headers - SaveUrgentDemandItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveUrgentDemandItemResponse
   */
  async saveUrgentDemandItemWithOptions(request: $_model.SaveUrgentDemandItemRequest, headers: $_model.SaveUrgentDemandItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SaveUrgentDemandItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.creator)) {
      body["creator"] = request.creator;
    }

    if (!$dara.isNull(request.effectTime)) {
      body["effectTime"] = request.effectTime;
    }

    if (!$dara.isNull(request.modifier)) {
      body["modifier"] = request.modifier;
    }

    if (!$dara.isNull(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.payDuration)) {
      body["payDuration"] = request.payDuration;
    }

    if (!$dara.isNull(request.payDurationUnit)) {
      body["payDurationUnit"] = request.payDurationUnit;
    }

    if (!$dara.isNull(request.payType)) {
      body["payType"] = request.payType;
    }

    if (!$dara.isNull(request.planId)) {
      body["planId"] = request.planId;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.urgentDemandEbsRequest)) {
      body["urgentDemandEbsRequest"] = request.urgentDemandEbsRequest;
    }

    if (!$dara.isNull(request.urgentDemandEcsRequest)) {
      body["urgentDemandEcsRequest"] = request.urgentDemandEcsRequest;
    }

    if (!$dara.isNull(request.zone)) {
      body["zone"] = request.zone;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveUrgentDemandItem",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/saveUrgentDemandItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveUrgentDemandItemResponse>(await this.callApi(params, req, runtime), new $_model.SaveUrgentDemandItemResponse({}));
  }

  /**
   * 紧急需求单item新增
   * 
   * @param request - SaveUrgentDemandItemRequest
   * @returns SaveUrgentDemandItemResponse
   */
  async saveUrgentDemandItem(request: $_model.SaveUrgentDemandItemRequest): Promise<$_model.SaveUrgentDemandItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SaveUrgentDemandItemHeaders({ });
    return await this.saveUrgentDemandItemWithOptions(request, headers, runtime);
  }

  /**
   * submitUrgentDemandPlan
   * 
   * @param request - SubmitUrgentDemandPlanRequest
   * @param headers - SubmitUrgentDemandPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitUrgentDemandPlanResponse
   */
  async submitUrgentDemandPlanWithOptions(request: $_model.SubmitUrgentDemandPlanRequest, headers: $_model.SubmitUrgentDemandPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitUrgentDemandPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      query["planId"] = request.planId;
    }

    if (!$dara.isNull(request.userId)) {
      query["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.yunUserId)) {
      realHeaders["Yun-User-Id"] = String(headers.yunUserId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitUrgentDemandPlan",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/api/demand/urgent/submitUrgentDemandPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitUrgentDemandPlanResponse>(await this.callApi(params, req, runtime), new $_model.SubmitUrgentDemandPlanResponse({}));
  }

  /**
   * submitUrgentDemandPlan
   * 
   * @param request - SubmitUrgentDemandPlanRequest
   * @returns SubmitUrgentDemandPlanResponse
   */
  async submitUrgentDemandPlan(request: $_model.SubmitUrgentDemandPlanRequest): Promise<$_model.SubmitUrgentDemandPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubmitUrgentDemandPlanHeaders({ });
    return await this.submitUrgentDemandPlanWithOptions(request, headers, runtime);
  }

  /**
   * 云产品交付决策反馈回调
   * 
   * @param request - AcceptFulfillmentDecisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptFulfillmentDecisionResponse
   */
  async acceptFulfillmentDecisionWithOptions(request: $_model.AcceptFulfillmentDecisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptFulfillmentDecisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.decisionConclusion)) {
      body["DecisionConclusion"] = request.decisionConclusion;
    }

    if (!$dara.isNull(request.decisionType)) {
      body["DecisionType"] = request.decisionType;
    }

    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "acceptFulfillmentDecision",
      version: "2021-12-17",
      protocol: "HTTPS",
      pathname: `/acceptFulfillmentDecision`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptFulfillmentDecisionResponse>(await this.callApi(params, req, runtime), new $_model.AcceptFulfillmentDecisionResponse({}));
  }

  /**
   * 云产品交付决策反馈回调
   * 
   * @param request - AcceptFulfillmentDecisionRequest
   * @returns AcceptFulfillmentDecisionResponse
   */
  async acceptFulfillmentDecision(request: $_model.AcceptFulfillmentDecisionRequest): Promise<$_model.AcceptFulfillmentDecisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.acceptFulfillmentDecisionWithOptions(request, headers, runtime);
  }

}

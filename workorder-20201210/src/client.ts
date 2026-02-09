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
    this._endpointMap = {
      'ap-northeast-1': "workorder.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "workorder.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("workorder", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - GetTicketTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketTemplateResponse
   */
  async getTicketTemplateWithOptions(request: $_model.GetTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.cna)) {
      query["Cna"] = request.cna;
    }

    if (!$dara.isNull(request.distributionChannel)) {
      query["DistributionChannel"] = request.distributionChannel;
    }

    if (!$dara.isNull(request.referrer)) {
      query["Referrer"] = request.referrer;
    }

    if (!$dara.isNull(request.subDistributionChannel)) {
      query["SubDistributionChannel"] = request.subDistributionChannel;
    }

    if (!$dara.isNull(request.XGatewayExtendInfo)) {
      query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicketTemplate",
      version: "2020-12-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketTemplateResponse({}));
  }

  /**
   * @param request - GetTicketTemplateRequest
   * @returns GetTicketTemplateResponse
   */
  async getTicketTemplate(request: $_model.GetTicketTemplateRequest): Promise<$_model.GetTicketTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketTemplateWithOptions(request, runtime);
  }

  /**
   * 是否首次访问BBS工单
   * 
   * @param request - IsFirstBbsTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsFirstBbsTicketResponse
   */
  async isFirstBbsTicketWithOptions(request: $_model.IsFirstBbsTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IsFirstBbsTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cna)) {
      query["Cna"] = request.cna;
    }

    if (!$dara.isNull(request.distributionChannel)) {
      query["DistributionChannel"] = request.distributionChannel;
    }

    if (!$dara.isNull(request.referrer)) {
      query["Referrer"] = request.referrer;
    }

    if (!$dara.isNull(request.subDistributionChannel)) {
      query["SubDistributionChannel"] = request.subDistributionChannel;
    }

    if (!$dara.isNull(request.XGatewayExtendInfo)) {
      query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsFirstBbsTicket",
      version: "2020-12-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsFirstBbsTicketResponse>(await this.callApi(params, req, runtime), new $_model.IsFirstBbsTicketResponse({}));
  }

  /**
   * 是否首次访问BBS工单
   * 
   * @param request - IsFirstBbsTicketRequest
   * @returns IsFirstBbsTicketResponse
   */
  async isFirstBbsTicket(request: $_model.IsFirstBbsTicketRequest): Promise<$_model.IsFirstBbsTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.isFirstBbsTicketWithOptions(request, runtime);
  }

  /**
   * @param request - SuggestCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuggestCategoryResponse
   */
  async suggestCategoryWithOptions(request: $_model.SuggestCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuggestCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cna)) {
      query["Cna"] = request.cna;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.distributionChannel)) {
      query["DistributionChannel"] = request.distributionChannel;
    }

    if (!$dara.isNull(request.referrer)) {
      query["Referrer"] = request.referrer;
    }

    if (!$dara.isNull(request.subDistributionChannel)) {
      query["SubDistributionChannel"] = request.subDistributionChannel;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.useHotSuggestCatchAll)) {
      query["UseHotSuggestCatchAll"] = request.useHotSuggestCatchAll;
    }

    if (!$dara.isNull(request.XGatewayExtendInfo)) {
      query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuggestCategory",
      version: "2020-12-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuggestCategoryResponse>(await this.callApi(params, req, runtime), new $_model.SuggestCategoryResponse({}));
  }

  /**
   * @param request - SuggestCategoryRequest
   * @returns SuggestCategoryResponse
   */
  async suggestCategory(request: $_model.SuggestCategoryRequest): Promise<$_model.SuggestCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suggestCategoryWithOptions(request, runtime);
  }

}

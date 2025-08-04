// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ciomarketpop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 全员营销
   * 
   * @param request - GetEveryOneSellsFormListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEveryOneSellsFormListResponse
   */
  async getEveryOneSellsFormListWithOptions(request: $_model.GetEveryOneSellsFormListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEveryOneSellsFormListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEveryOneSellsFormList",
      version: "2025-07-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetEveryOneSellsFormListResponse>(await this.callApi(params, req, runtime), new $_model.GetEveryOneSellsFormListResponse({}));
  }

  /**
   * 全员营销
   * 
   * @param request - GetEveryOneSellsFormListRequest
   * @returns GetEveryOneSellsFormListResponse
   */
  async getEveryOneSellsFormList(request: $_model.GetEveryOneSellsFormListRequest): Promise<$_model.GetEveryOneSellsFormListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEveryOneSellsFormListWithOptions(request, runtime);
  }

  /**
   * 推送钉钉消息
   * 
   * @param tmpReq - PushEveryOneSellMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushEveryOneSellMsgResponse
   */
  async pushEveryOneSellMsgWithOptions(tmpReq: $_model.PushEveryOneSellMsgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushEveryOneSellMsgResponse> {
    tmpReq.validate();
    let request = new $_model.PushEveryOneSellMsgShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dingIdList)) {
      request.dingIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dingIdList, "DingIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dingIdListShrink)) {
      body["DingIdList"] = request.dingIdListShrink;
    }

    if (!$dara.isNull(request.pushMsg)) {
      body["PushMsg"] = request.pushMsg;
    }

    if (!$dara.isNull(request.pushType)) {
      body["PushType"] = request.pushType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushEveryOneSellMsg",
      version: "2025-07-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    return $dara.cast<$_model.PushEveryOneSellMsgResponse>(await this.callApi(params, req, runtime), new $_model.PushEveryOneSellMsgResponse({}));
  }

  /**
   * 推送钉钉消息
   * 
   * @param request - PushEveryOneSellMsgRequest
   * @returns PushEveryOneSellMsgResponse
   */
  async pushEveryOneSellMsg(request: $_model.PushEveryOneSellMsgRequest): Promise<$_model.PushEveryOneSellMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushEveryOneSellMsgWithOptions(request, runtime);
  }

}

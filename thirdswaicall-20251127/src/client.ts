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
    this._endpoint = this.getEndpoint("thirdswaicall", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 外呼任务通话列表查询
   * 
   * @param tmpReq - ReadOutboundTaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadOutboundTaskCallListResponse
   */
  async readOutboundTaskCallListWithOptions(tmpReq: $_model.ReadOutboundTaskCallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadOutboundTaskCallListResponse> {
    tmpReq.validate();
    let request = new $_model.ReadOutboundTaskCallListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.displayStatusList)) {
      request.displayStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.displayStatusList, "DisplayStatusList", "json");
    }

    if (!$dara.isNull(tmpReq.labelTags)) {
      request.labelTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelTags, "LabelTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.customerNameOrPhone)) {
      body["CustomerNameOrPhone"] = request.customerNameOrPhone;
    }

    if (!$dara.isNull(request.displayStatusListShrink)) {
      body["DisplayStatusList"] = request.displayStatusListShrink;
    }

    if (!$dara.isNull(request.labelTagsShrink)) {
      body["LabelTags"] = request.labelTagsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadOutboundTaskCallList",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadOutboundTaskCallListResponse>(await this.callApi(params, req, runtime), new $_model.ReadOutboundTaskCallListResponse({}));
  }

  /**
   * 外呼任务通话列表查询
   * 
   * @param request - ReadOutboundTaskCallListRequest
   * @returns ReadOutboundTaskCallListResponse
   */
  async readOutboundTaskCallList(request: $_model.ReadOutboundTaskCallListRequest): Promise<$_model.ReadOutboundTaskCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readOutboundTaskCallListWithOptions(request, runtime);
  }

}

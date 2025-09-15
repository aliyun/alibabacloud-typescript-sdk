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
    this._endpoint = this.getEndpoint("xgippop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 订购qos云产品服务
   * 
   * @param request - OrderQosProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderQosProductResponse
   */
  async orderQosProductWithOptions(request: $_model.OrderQosProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OrderQosProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.provice)) {
      query["Provice"] = request.provice;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.IPv6)) {
      body["IPv6"] = request.IPv6;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipType)) {
      body["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      body["MobileNumber"] = request.mobileNumber;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.privateIpv4)) {
      body["PrivateIpv4"] = request.privateIpv4;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.publicIpv4)) {
      body["PublicIpv4"] = request.publicIpv4;
    }

    if (!$dara.isNull(request.qosRequestId)) {
      body["QosRequestId"] = request.qosRequestId;
    }

    if (!$dara.isNull(request.targetIpList)) {
      body["TargetIpList"] = request.targetIpList;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.unitNum)) {
      body["UnitNum"] = request.unitNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OrderQosProduct",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OrderQosProductResponse>(await this.callApi(params, req, runtime), new $_model.OrderQosProductResponse({}));
  }

  /**
   * 订购qos云产品服务
   * 
   * @param request - OrderQosProductRequest
   * @returns OrderQosProductResponse
   */
  async orderQosProduct(request: $_model.OrderQosProductRequest): Promise<$_model.OrderQosProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.orderQosProductWithOptions(request, runtime);
  }

}

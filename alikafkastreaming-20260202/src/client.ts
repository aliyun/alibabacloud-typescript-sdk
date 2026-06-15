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
    this._endpoint = this.getEndpoint("alikafkastreaming", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建 流计算实例
   * 
   * @param request - CreateComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeInstanceResponse
   */
  async createComputeInstanceWithOptions(request: $_model.CreateComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeInstanceResponse({}));
  }

  /**
   * 创建 流计算实例
   * 
   * @param request - CreateComputeInstanceRequest
   * @returns CreateComputeInstanceResponse
   */
  async createComputeInstance(request: $_model.CreateComputeInstanceRequest): Promise<$_model.CreateComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeInstanceWithOptions(request, runtime);
  }

}

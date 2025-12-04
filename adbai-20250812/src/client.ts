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
    this._endpoint = this.getEndpoint("adbai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建具身智能平台
   * 
   * @param tmpReq - CreateEmbodiedAIPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEmbodiedAIPlatformResponse
   */
  async createEmbodiedAIPlatformWithOptions(tmpReq: $_model.CreateEmbodiedAIPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEmbodiedAIPlatformResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEmbodiedAIPlatformShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rayConfig)) {
      request.rayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rayConfig, "RayConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.rayConfigShrink)) {
      query["RayConfig"] = request.rayConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.webserverSpecName)) {
      query["WebserverSpecName"] = request.webserverSpecName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEmbodiedAIPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEmbodiedAIPlatformResponse>(await this.callApi(params, req, runtime), new $_model.CreateEmbodiedAIPlatformResponse({}));
  }

  /**
   * 创建具身智能平台
   * 
   * @param request - CreateEmbodiedAIPlatformRequest
   * @returns CreateEmbodiedAIPlatformResponse
   */
  async createEmbodiedAIPlatform(request: $_model.CreateEmbodiedAIPlatformRequest): Promise<$_model.CreateEmbodiedAIPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEmbodiedAIPlatformWithOptions(request, runtime);
  }

  /**
   * 查询具身智能平台
   * 
   * @param request - DescribeEmbodiedAIPlatformsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEmbodiedAIPlatformsResponse
   */
  async describeEmbodiedAIPlatformsWithOptions(request: $_model.DescribeEmbodiedAIPlatformsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEmbodiedAIPlatformsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEmbodiedAIPlatforms",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEmbodiedAIPlatformsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEmbodiedAIPlatformsResponse({}));
  }

  /**
   * 查询具身智能平台
   * 
   * @param request - DescribeEmbodiedAIPlatformsRequest
   * @returns DescribeEmbodiedAIPlatformsResponse
   */
  async describeEmbodiedAIPlatforms(request: $_model.DescribeEmbodiedAIPlatformsRequest): Promise<$_model.DescribeEmbodiedAIPlatformsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEmbodiedAIPlatformsWithOptions(request, runtime);
  }

}

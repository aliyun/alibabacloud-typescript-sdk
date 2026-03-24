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
   * 创建指标平台
   * 
   * @param tmpReq - CreateAgentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentPlatformResponse
   */
  async createAgentPlatformWithOptions(tmpReq: $_model.CreateAgentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentPlatformResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentPlatformShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aiPlatformConfig)) {
      request.aiPlatformConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aiPlatformConfig, "AiPlatformConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aiPlatformConfigShrink)) {
      query["AiPlatformConfig"] = request.aiPlatformConfigShrink;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentPlatformResponse({}));
  }

  /**
   * 创建指标平台
   * 
   * @param request - CreateAgentPlatformRequest
   * @returns CreateAgentPlatformResponse
   */
  async createAgentPlatform(request: $_model.CreateAgentPlatformRequest): Promise<$_model.CreateAgentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentPlatformWithOptions(request, runtime);
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
   * 删除指标平台
   * 
   * @param request - DeleteAgentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentPlatformResponse
   */
  async deleteAgentPlatformWithOptions(request: $_model.DeleteAgentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentPlatformResponse({}));
  }

  /**
   * 删除指标平台
   * 
   * @param request - DeleteAgentPlatformRequest
   * @returns DeleteAgentPlatformResponse
   */
  async deleteAgentPlatform(request: $_model.DeleteAgentPlatformRequest): Promise<$_model.DeleteAgentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentPlatformWithOptions(request, runtime);
  }

  /**
   * 删除具身智能平台
   * 
   * @param request - DeleteEmbodiedAIPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEmbodiedAIPlatformResponse
   */
  async deleteEmbodiedAIPlatformWithOptions(request: $_model.DeleteEmbodiedAIPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEmbodiedAIPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEmbodiedAIPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEmbodiedAIPlatformResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEmbodiedAIPlatformResponse({}));
  }

  /**
   * 删除具身智能平台
   * 
   * @param request - DeleteEmbodiedAIPlatformRequest
   * @returns DeleteEmbodiedAIPlatformResponse
   */
  async deleteEmbodiedAIPlatform(request: $_model.DeleteEmbodiedAIPlatformRequest): Promise<$_model.DeleteEmbodiedAIPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEmbodiedAIPlatformWithOptions(request, runtime);
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

  /**
   * 查询具身智能平台资源用量
   * 
   * @param request - GetEmbodiedAIPlatformResourceUsageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmbodiedAIPlatformResourceUsageInfoResponse
   */
  async getEmbodiedAIPlatformResourceUsageInfoWithOptions(request: $_model.GetEmbodiedAIPlatformResourceUsageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmbodiedAIPlatformResourceUsageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmbodiedAIPlatformResourceUsageInfo",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmbodiedAIPlatformResourceUsageInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetEmbodiedAIPlatformResourceUsageInfoResponse({}));
  }

  /**
   * 查询具身智能平台资源用量
   * 
   * @param request - GetEmbodiedAIPlatformResourceUsageInfoRequest
   * @returns GetEmbodiedAIPlatformResourceUsageInfoResponse
   */
  async getEmbodiedAIPlatformResourceUsageInfo(request: $_model.GetEmbodiedAIPlatformResourceUsageInfoRequest): Promise<$_model.GetEmbodiedAIPlatformResourceUsageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEmbodiedAIPlatformResourceUsageInfoWithOptions(request, runtime);
  }

  /**
   * 解锁具身智能平台
   * 
   * @param request - LockEmbodiedAIPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockEmbodiedAIPlatformResponse
   */
  async lockEmbodiedAIPlatformWithOptions(request: $_model.LockEmbodiedAIPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockEmbodiedAIPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockEmbodiedAIPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockEmbodiedAIPlatformResponse>(await this.callApi(params, req, runtime), new $_model.LockEmbodiedAIPlatformResponse({}));
  }

  /**
   * 解锁具身智能平台
   * 
   * @param request - LockEmbodiedAIPlatformRequest
   * @returns LockEmbodiedAIPlatformResponse
   */
  async lockEmbodiedAIPlatform(request: $_model.LockEmbodiedAIPlatformRequest): Promise<$_model.LockEmbodiedAIPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockEmbodiedAIPlatformWithOptions(request, runtime);
  }

  /**
   * 修改变配指标平台
   * 
   * @param tmpReq - ModifyAgentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAgentPlatformResponse
   */
  async modifyAgentPlatformWithOptions(tmpReq: $_model.ModifyAgentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAgentPlatformResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAgentPlatformShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aiPlatformConfig)) {
      request.aiPlatformConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aiPlatformConfig, "AiPlatformConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aiPlatformConfigShrink)) {
      query["AiPlatformConfig"] = request.aiPlatformConfigShrink;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAgentPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAgentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAgentPlatformResponse({}));
  }

  /**
   * 修改变配指标平台
   * 
   * @param request - ModifyAgentPlatformRequest
   * @returns ModifyAgentPlatformResponse
   */
  async modifyAgentPlatform(request: $_model.ModifyAgentPlatformRequest): Promise<$_model.ModifyAgentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAgentPlatformWithOptions(request, runtime);
  }

  /**
   * 变配具身智能平台
   * 
   * @param tmpReq - ModifyEmbodiedAIPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEmbodiedAIPlatformResponse
   */
  async modifyEmbodiedAIPlatformWithOptions(tmpReq: $_model.ModifyEmbodiedAIPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEmbodiedAIPlatformResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyEmbodiedAIPlatformShrinkRequest({ });
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
      action: "ModifyEmbodiedAIPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEmbodiedAIPlatformResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEmbodiedAIPlatformResponse({}));
  }

  /**
   * 变配具身智能平台
   * 
   * @param request - ModifyEmbodiedAIPlatformRequest
   * @returns ModifyEmbodiedAIPlatformResponse
   */
  async modifyEmbodiedAIPlatform(request: $_model.ModifyEmbodiedAIPlatformRequest): Promise<$_model.ModifyEmbodiedAIPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEmbodiedAIPlatformWithOptions(request, runtime);
  }

  /**
   * 重置具身智能平台密码
   * 
   * @param request - ResetEmbodiedAIPlatformPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetEmbodiedAIPlatformPasswordResponse
   */
  async resetEmbodiedAIPlatformPasswordWithOptions(request: $_model.ResetEmbodiedAIPlatformPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetEmbodiedAIPlatformPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetEmbodiedAIPlatformPassword",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetEmbodiedAIPlatformPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetEmbodiedAIPlatformPasswordResponse({}));
  }

  /**
   * 重置具身智能平台密码
   * 
   * @param request - ResetEmbodiedAIPlatformPasswordRequest
   * @returns ResetEmbodiedAIPlatformPasswordResponse
   */
  async resetEmbodiedAIPlatformPassword(request: $_model.ResetEmbodiedAIPlatformPasswordRequest): Promise<$_model.ResetEmbodiedAIPlatformPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetEmbodiedAIPlatformPasswordWithOptions(request, runtime);
  }

  /**
   * 解锁具身智能平台
   * 
   * @param request - UnlockEmbodiedAIPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockEmbodiedAIPlatformResponse
   */
  async unlockEmbodiedAIPlatformWithOptions(request: $_model.UnlockEmbodiedAIPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockEmbodiedAIPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.platformName)) {
      query["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockEmbodiedAIPlatform",
      version: "2025-08-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockEmbodiedAIPlatformResponse>(await this.callApi(params, req, runtime), new $_model.UnlockEmbodiedAIPlatformResponse({}));
  }

  /**
   * 解锁具身智能平台
   * 
   * @param request - UnlockEmbodiedAIPlatformRequest
   * @returns UnlockEmbodiedAIPlatformResponse
   */
  async unlockEmbodiedAIPlatform(request: $_model.UnlockEmbodiedAIPlatformRequest): Promise<$_model.UnlockEmbodiedAIPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockEmbodiedAIPlatformWithOptions(request, runtime);
  }

}

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-shanghai': "yike.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "yike.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yike", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查询媒资内容理解作业
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJobWithOptions(request: $_model.GetMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaComprehensionJobResponse({}));
  }

  /**
   * 查询媒资内容理解作业
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJob(request: $_model.GetMediaComprehensionJobRequest): Promise<$_model.GetMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaComprehensionJobWithOptions(request, runtime);
  }

  /**
   * 提交媒资内容理解作业
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJobWithOptions(request: $_model.SubmitMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaComprehensionJobResponse({}));
  }

  /**
   * 提交媒资内容理解作业
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJob(request: $_model.SubmitMediaComprehensionJobRequest): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaComprehensionJobWithOptions(request, runtime);
  }

}

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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检查Turing任务
   * 
   * @param request - CheckTuringTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTuringTaskResponse
   */
  async checkTuringTaskWithOptions(request: $_model.CheckTuringTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckTuringTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckTuringTask",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: `/yic/aigc-turing/openService/v1/task/checkTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckTuringTaskResponse>(await this.callApi(params, req, runtime), new $_model.CheckTuringTaskResponse({}));
  }

  /**
   * 检查Turing任务
   * 
   * @param request - CheckTuringTaskRequest
   * @returns CheckTuringTaskResponse
   */
  async checkTuringTask(request: $_model.CheckTuringTaskRequest): Promise<$_model.CheckTuringTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkTuringTaskWithOptions(request, headers, runtime);
  }

  /**
   * 任务提交接口
   * 
   * @param request - SubmitTuringTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTuringTaskResponse
   */
  async submitTuringTaskWithOptions(request: $_model.SubmitTuringTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTuringTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.idempotentKey)) {
      body["idempotentKey"] = request.idempotentKey;
    }

    if (!$dara.isNull(request.imgUrl)) {
      body["imgUrl"] = request.imgUrl;
    }

    if (!$dara.isNull(request.resolution)) {
      body["resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTuringTask",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: `/yic/aigc-turing/openService/v1/task/submitTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTuringTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTuringTaskResponse({}));
  }

  /**
   * 任务提交接口
   * 
   * @param request - SubmitTuringTaskRequest
   * @returns SubmitTuringTaskResponse
   */
  async submitTuringTask(request: $_model.SubmitTuringTaskRequest): Promise<$_model.SubmitTuringTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTuringTaskWithOptions(request, headers, runtime);
  }

}

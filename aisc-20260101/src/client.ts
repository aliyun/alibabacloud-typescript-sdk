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
    this._endpoint = this.getEndpoint("aisc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 批量发起用户自定义Skill检测
   * 
   * @param request - CreateSkillFileCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillFileCheckResponse
   */
  async createSkillFileCheckWithOptions(request: $_model.CreateSkillFileCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillFileCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.files)) {
      query["Files"] = request.files;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillFileCheck",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillFileCheckResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillFileCheckResponse({}));
  }

  /**
   * 批量发起用户自定义Skill检测
   * 
   * @param request - CreateSkillFileCheckRequest
   * @returns CreateSkillFileCheckResponse
   */
  async createSkillFileCheck(request: $_model.CreateSkillFileCheckRequest): Promise<$_model.CreateSkillFileCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillFileCheckWithOptions(request, runtime);
  }

  /**
   * 获取子任务信息
   * 
   * @param request - ListSubTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubTasksResponse
   */
  async listSubTasksWithOptions(request: $_model.ListSubTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.rootTaskId)) {
      query["RootTaskId"] = request.rootTaskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubTasks",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSubTasksResponse({}));
  }

  /**
   * 获取子任务信息
   * 
   * @param request - ListSubTasksRequest
   * @returns ListSubTasksResponse
   */
  async listSubTasks(request: $_model.ListSubTasksRequest): Promise<$_model.ListSubTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubTasksWithOptions(request, runtime);
  }

}

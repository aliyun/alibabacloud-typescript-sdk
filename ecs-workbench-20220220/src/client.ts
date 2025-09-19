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
    this._endpoint = this.getEndpoint("ecs-workbench", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取实例录屏配置
   * 
   * @param request - GetInstanceRecordConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceRecordConfigResponse
   */
  async getInstanceRecordConfigWithOptions(request: $_model.GetInstanceRecordConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceRecordConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceRecordConfig",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceRecordConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceRecordConfigResponse({}));
  }

  /**
   * 获取实例录屏配置
   * 
   * @param request - GetInstanceRecordConfigRequest
   * @returns GetInstanceRecordConfigResponse
   */
  async getInstanceRecordConfig(request: $_model.GetInstanceRecordConfigRequest): Promise<$_model.GetInstanceRecordConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceRecordConfigWithOptions(request, runtime);
  }

  /**
   * 获取实例录屏记录列表
   * 
   * @param request - ListInstanceRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceRecordsResponse
   */
  async listInstanceRecordsWithOptions(request: $_model.ListInstanceRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceRecords",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceRecordsResponse({}));
  }

  /**
   * 获取实例录屏记录列表
   * 
   * @param request - ListInstanceRecordsRequest
   * @returns ListInstanceRecordsResponse
   */
  async listInstanceRecords(request: $_model.ListInstanceRecordsRequest): Promise<$_model.ListInstanceRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceRecordsWithOptions(request, runtime);
  }

  /**
   * 查看实例Workbench登录后执行命令的历史列表。
   * 
   * @param request - ListTerminalCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalCommandsResponse
   */
  async listTerminalCommandsWithOptions(request: $_model.ListTerminalCommandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerminalCommandsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.terminalSessionToken)) {
      body["TerminalSessionToken"] = request.terminalSessionToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerminalCommands",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerminalCommandsResponse>(await this.callApi(params, req, runtime), new $_model.ListTerminalCommandsResponse({}));
  }

  /**
   * 查看实例Workbench登录后执行命令的历史列表。
   * 
   * @param request - ListTerminalCommandsRequest
   * @returns ListTerminalCommandsResponse
   */
  async listTerminalCommands(request: $_model.ListTerminalCommandsRequest): Promise<$_model.ListTerminalCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTerminalCommandsWithOptions(request, runtime);
  }

  /**
   * 登录实例
   * 
   * @param request - LoginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginInstanceResponse
   */
  async loginInstanceWithOptions(request: $_model.LoginInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoginInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceLoginInfo)) {
      query["InstanceLoginInfo"] = request.instanceLoginInfo;
    }

    if (!$dara.isNull(request.partnerInfo)) {
      query["PartnerInfo"] = request.partnerInfo;
    }

    if (!$dara.isNull(request.userAccount)) {
      query["UserAccount"] = request.userAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoginInstance",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoginInstanceResponse>(await this.callApi(params, req, runtime), new $_model.LoginInstanceResponse({}));
  }

  /**
   * 登录实例
   * 
   * @param request - LoginInstanceRequest
   * @returns LoginInstanceResponse
   */
  async loginInstance(request: $_model.LoginInstanceRequest): Promise<$_model.LoginInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

  /**
   * 设置实例录屏配置
   * 
   * @param request - SetInstanceRecordConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceRecordConfigResponse
   */
  async setInstanceRecordConfigWithOptions(request: $_model.SetInstanceRecordConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetInstanceRecordConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.expirationDays)) {
      body["ExpirationDays"] = request.expirationDays;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.recordStorageTarget)) {
      body["RecordStorageTarget"] = request.recordStorageTarget;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstanceRecordConfig",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetInstanceRecordConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetInstanceRecordConfigResponse({}));
  }

  /**
   * 设置实例录屏配置
   * 
   * @param request - SetInstanceRecordConfigRequest
   * @returns SetInstanceRecordConfigResponse
   */
  async setInstanceRecordConfig(request: $_model.SetInstanceRecordConfigRequest): Promise<$_model.SetInstanceRecordConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceRecordConfigWithOptions(request, runtime);
  }

  /**
   * 查看实例录屏内容
   * 
   * @param request - ViewInstanceRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewInstanceRecordsResponse
   */
  async viewInstanceRecordsWithOptions(request: $_model.ViewInstanceRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewInstanceRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.terminalSessionToken)) {
      body["TerminalSessionToken"] = request.terminalSessionToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewInstanceRecords",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewInstanceRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ViewInstanceRecordsResponse({}));
  }

  /**
   * 查看实例录屏内容
   * 
   * @param request - ViewInstanceRecordsRequest
   * @returns ViewInstanceRecordsResponse
   */
  async viewInstanceRecords(request: $_model.ViewInstanceRecordsRequest): Promise<$_model.ViewInstanceRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewInstanceRecordsWithOptions(request, runtime);
  }

}

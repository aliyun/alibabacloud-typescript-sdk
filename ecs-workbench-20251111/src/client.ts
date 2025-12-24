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
   * 查询Workbench终端配置
   * 
   * @remarks
   * 查询Workbench终端配置
   * 
   * @param request - DescribeTerminalSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTerminalSettingsResponse
   */
  async describeTerminalSettingsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTerminalSettingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTerminalSettings",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTerminalSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTerminalSettingsResponse({}));
  }

  /**
   * 查询Workbench终端配置
   * 
   * @remarks
   * 查询Workbench终端配置
   * @returns DescribeTerminalSettingsResponse
   */
  async describeTerminalSettings(): Promise<$_model.DescribeTerminalSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTerminalSettingsWithOptions(runtime);
  }

  /**
   * 修改Workbench终端配置
   * 
   * @remarks
   * 修改Workbench终端配置
   * 
   * @param tmpReq - ModifyTerminalSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTerminalSettingsResponse
   */
  async modifyTerminalSettingsWithOptions(tmpReq: $_model.ModifyTerminalSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTerminalSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyTerminalSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passwordlessLoginConfig)) {
      request.passwordlessLoginConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passwordlessLoginConfig, "PasswordlessLoginConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.passwordlessLoginConfigShrink)) {
      query["PasswordlessLoginConfig"] = request.passwordlessLoginConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTerminalSettings",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTerminalSettingsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTerminalSettingsResponse({}));
  }

  /**
   * 修改Workbench终端配置
   * 
   * @remarks
   * 修改Workbench终端配置
   * 
   * @param request - ModifyTerminalSettingsRequest
   * @returns ModifyTerminalSettingsResponse
   */
  async modifyTerminalSettings(request: $_model.ModifyTerminalSettingsRequest): Promise<$_model.ModifyTerminalSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTerminalSettingsWithOptions(request, runtime);
  }

}

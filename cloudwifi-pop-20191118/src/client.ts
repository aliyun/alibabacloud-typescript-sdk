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
      'cn-hangzhou': "cloudwf.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudwifi-pop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param tmpReq - AddApListToApgroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddApListToApgroupResponse
   */
  async addApListToApgroupWithOptions(tmpReq: $_model.AddApListToApgroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddApListToApgroupResponse> {
    tmpReq.validate();
    let request = new $_model.AddApListToApgroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apMacList)) {
      request.apMacListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apMacList, "ApMacList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apGroupId)) {
      query["ApGroupId"] = request.apGroupId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apMacListShrink)) {
      body["ApMacList"] = request.apMacListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddApListToApgroup",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddApListToApgroupResponse>(await this.callApi(params, req, runtime), new $_model.AddApListToApgroupResponse({}));
  }

  /**
   * @param request - AddApListToApgroupRequest
   * @returns AddApListToApgroupResponse
   */
  async addApListToApgroup(request: $_model.AddApListToApgroupRequest): Promise<$_model.AddApListToApgroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addApListToApgroupWithOptions(request, runtime);
  }

  /**
   * 删除设备的三方app
   * 
   * @param request - DelApThirdAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelApThirdAppResponse
   */
  async delApThirdAppWithOptions(request: $_model.DelApThirdAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelApThirdAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apAssetId)) {
      query["ApAssetId"] = request.apAssetId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelApThirdApp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelApThirdAppResponse>(await this.callApi(params, req, runtime), new $_model.DelApThirdAppResponse({}));
  }

  /**
   * 删除设备的三方app
   * 
   * @param request - DelApThirdAppRequest
   * @returns DelApThirdAppResponse
   */
  async delApThirdApp(request: $_model.DelApThirdAppRequest): Promise<$_model.DelApThirdAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delApThirdAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteApSsidConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApSsidConfigResponse
   */
  async deleteApSsidConfigWithOptions(request: $_model.DeleteApSsidConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApSsidConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.radioIndex)) {
      query["RadioIndex"] = request.radioIndex;
    }

    if (!$dara.isNull(request.ssid)) {
      query["Ssid"] = request.ssid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApSsidConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApSsidConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApSsidConfigResponse({}));
  }

  /**
   * @param request - DeleteApSsidConfigRequest
   * @returns DeleteApSsidConfigResponse
   */
  async deleteApSsidConfig(request: $_model.DeleteApSsidConfigRequest): Promise<$_model.DeleteApSsidConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApSsidConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteApgroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApgroupConfigResponse
   */
  async deleteApgroupConfigWithOptions(request: $_model.DeleteApgroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApgroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apGroupUUId)) {
      query["ApGroupUUId"] = request.apGroupUUId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApgroupConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApgroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApgroupConfigResponse({}));
  }

  /**
   * @param request - DeleteApgroupConfigRequest
   * @returns DeleteApgroupConfigResponse
   */
  async deleteApgroupConfig(request: $_model.DeleteApgroupConfigRequest): Promise<$_model.DeleteApgroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApgroupConfigWithOptions(request, runtime);
  }

  /**
   * 删除AP组上的SSID
   * 
   * @param request - DeleteApgroupSsidConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApgroupSsidConfigResponse
   */
  async deleteApgroupSsidConfigWithOptions(request: $_model.DeleteApgroupSsidConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApgroupSsidConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApgroupSsidConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApgroupSsidConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApgroupSsidConfigResponse({}));
  }

  /**
   * 删除AP组上的SSID
   * 
   * @param request - DeleteApgroupSsidConfigRequest
   * @returns DeleteApgroupSsidConfigResponse
   */
  async deleteApgroupSsidConfig(request: $_model.DeleteApgroupSsidConfigRequest): Promise<$_model.DeleteApgroupSsidConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApgroupSsidConfigWithOptions(request, runtime);
  }

  /**
   * 删除设备组的三方app
   * 
   * @param request - DeleteApgroupThirdAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApgroupThirdAppResponse
   */
  async deleteApgroupThirdAppWithOptions(request: $_model.DeleteApgroupThirdAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApgroupThirdAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApgroupThirdApp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApgroupThirdAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApgroupThirdAppResponse({}));
  }

  /**
   * 删除设备组的三方app
   * 
   * @param request - DeleteApgroupThirdAppRequest
   * @returns DeleteApgroupThirdAppResponse
   */
  async deleteApgroupThirdApp(request: $_model.DeleteApgroupThirdAppRequest): Promise<$_model.DeleteApgroupThirdAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApgroupThirdAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteNetDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetDeviceInfoResponse
   */
  async deleteNetDeviceInfoWithOptions(request: $_model.DeleteNetDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetDeviceInfo",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetDeviceInfoResponse({}));
  }

  /**
   * @param request - DeleteNetDeviceInfoRequest
   * @returns DeleteNetDeviceInfoResponse
   */
  async deleteNetDeviceInfo(request: $_model.DeleteNetDeviceInfoRequest): Promise<$_model.DeleteNetDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 配置设备组的三方app
   * 
   * @param request - EditApgroupThirdAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditApgroupThirdAppResponse
   */
  async editApgroupThirdAppWithOptions(request: $_model.EditApgroupThirdAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditApgroupThirdAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appData)) {
      query["AppData"] = request.appData;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.applyToSubGroup)) {
      query["ApplyToSubGroup"] = request.applyToSubGroup;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inheritParentGroup)) {
      query["InheritParentGroup"] = request.inheritParentGroup;
    }

    if (!$dara.isNull(request.thirdAppName)) {
      query["ThirdAppName"] = request.thirdAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditApgroupThirdApp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditApgroupThirdAppResponse>(await this.callApi(params, req, runtime), new $_model.EditApgroupThirdAppResponse({}));
  }

  /**
   * 配置设备组的三方app
   * 
   * @param request - EditApgroupThirdAppRequest
   * @returns EditApgroupThirdAppResponse
   */
  async editApgroupThirdApp(request: $_model.EditApgroupThirdAppRequest): Promise<$_model.EditApgroupThirdAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editApgroupThirdAppWithOptions(request, runtime);
  }

  /**
   * @param request - EffectApConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EffectApConfigResponse
   */
  async effectApConfigWithOptions(request: $_model.EffectApConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EffectApConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EffectApConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EffectApConfigResponse>(await this.callApi(params, req, runtime), new $_model.EffectApConfigResponse({}));
  }

  /**
   * @param request - EffectApConfigRequest
   * @returns EffectApConfigResponse
   */
  async effectApConfig(request: $_model.EffectApConfigRequest): Promise<$_model.EffectApConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.effectApConfigWithOptions(request, runtime);
  }

  /**
   * @param request - EffectApgroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EffectApgroupConfigResponse
   */
  async effectApgroupConfigWithOptions(request: $_model.EffectApgroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EffectApgroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apGroupUUId)) {
      query["ApGroupUUId"] = request.apGroupUUId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EffectApgroupConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EffectApgroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.EffectApgroupConfigResponse({}));
  }

  /**
   * @param request - EffectApgroupConfigRequest
   * @returns EffectApgroupConfigResponse
   */
  async effectApgroupConfig(request: $_model.EffectApgroupConfigRequest): Promise<$_model.EffectApgroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.effectApgroupConfigWithOptions(request, runtime);
  }

  /**
   * 查询蚂蚁环境终端状态
   * 
   * @param request - GetAntStaStatusByMacRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAntStaStatusByMacResponse
   */
  async getAntStaStatusByMacWithOptions(request: $_model.GetAntStaStatusByMacRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAntStaStatusByMacResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.staMac)) {
      query["StaMac"] = request.staMac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAntStaStatusByMac",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAntStaStatusByMacResponse>(await this.callApi(params, req, runtime), new $_model.GetAntStaStatusByMacResponse({}));
  }

  /**
   * 查询蚂蚁环境终端状态
   * 
   * @param request - GetAntStaStatusByMacRequest
   * @returns GetAntStaStatusByMacResponse
   */
  async getAntStaStatusByMac(request: $_model.GetAntStaStatusByMacRequest): Promise<$_model.GetAntStaStatusByMacResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAntStaStatusByMacWithOptions(request, runtime);
  }

  /**
   * @param request - GetApAddressByMacRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApAddressByMacResponse
   */
  async getApAddressByMacWithOptions(request: $_model.GetApAddressByMacRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApAddressByMacResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApAddressByMac",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApAddressByMacResponse>(await this.callApi(params, req, runtime), new $_model.GetApAddressByMacResponse({}));
  }

  /**
   * @param request - GetApAddressByMacRequest
   * @returns GetApAddressByMacResponse
   */
  async getApAddressByMac(request: $_model.GetApAddressByMacRequest): Promise<$_model.GetApAddressByMacResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApAddressByMacWithOptions(request, runtime);
  }

  /**
   * @param request - GetApAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApAssetResponse
   */
  async getApAssetWithOptions(request: $_model.GetApAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApAsset",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApAssetResponse>(await this.callApi(params, req, runtime), new $_model.GetApAssetResponse({}));
  }

  /**
   * @param request - GetApAssetRequest
   * @returns GetApAssetResponse
   */
  async getApAsset(request: $_model.GetApAssetRequest): Promise<$_model.GetApAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApAssetWithOptions(request, runtime);
  }

  /**
   * @param request - GetApDetailStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApDetailStatusResponse
   */
  async getApDetailStatusWithOptions(request: $_model.GetApDetailStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApDetailStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.needApgroupInfo)) {
      query["NeedApgroupInfo"] = request.needApgroupInfo;
    }

    if (!$dara.isNull(request.needRadioStatus)) {
      query["NeedRadioStatus"] = request.needRadioStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApDetailStatus",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApDetailStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetApDetailStatusResponse({}));
  }

  /**
   * @param request - GetApDetailStatusRequest
   * @returns GetApDetailStatusResponse
   */
  async getApDetailStatus(request: $_model.GetApDetailStatusRequest): Promise<$_model.GetApDetailStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApDetailStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetApDetailedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApDetailedConfigResponse
   */
  async getApDetailedConfigWithOptions(request: $_model.GetApDetailedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApDetailedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApDetailedConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApDetailedConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApDetailedConfigResponse({}));
  }

  /**
   * @param request - GetApDetailedConfigRequest
   * @returns GetApDetailedConfigResponse
   */
  async getApDetailedConfig(request: $_model.GetApDetailedConfigRequest): Promise<$_model.GetApDetailedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApDetailedConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetApInfoFromPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApInfoFromPoolResponse
   */
  async getApInfoFromPoolWithOptions(request: $_model.GetApInfoFromPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApInfoFromPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApInfoFromPool",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApInfoFromPoolResponse>(await this.callApi(params, req, runtime), new $_model.GetApInfoFromPoolResponse({}));
  }

  /**
   * @param request - GetApInfoFromPoolRequest
   * @returns GetApInfoFromPoolResponse
   */
  async getApInfoFromPool(request: $_model.GetApInfoFromPoolRequest): Promise<$_model.GetApInfoFromPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApInfoFromPoolWithOptions(request, runtime);
  }

  /**
   * @param request - GetApRunHistoryTimeSerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApRunHistoryTimeSerResponse
   */
  async getApRunHistoryTimeSerWithOptions(request: $_model.GetApRunHistoryTimeSerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApRunHistoryTimeSerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApRunHistoryTimeSer",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApRunHistoryTimeSerResponse>(await this.callApi(params, req, runtime), new $_model.GetApRunHistoryTimeSerResponse({}));
  }

  /**
   * @param request - GetApRunHistoryTimeSerRequest
   * @returns GetApRunHistoryTimeSerResponse
   */
  async getApRunHistoryTimeSer(request: $_model.GetApRunHistoryTimeSerRequest): Promise<$_model.GetApRunHistoryTimeSerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApRunHistoryTimeSerWithOptions(request, runtime);
  }

  /**
   * @param request - GetApStatusByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApStatusByGroupIdResponse
   */
  async getApStatusByGroupIdWithOptions(request: $_model.GetApStatusByGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApStatusByGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApStatusByGroupId",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApStatusByGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.GetApStatusByGroupIdResponse({}));
  }

  /**
   * @param request - GetApStatusByGroupIdRequest
   * @returns GetApStatusByGroupIdResponse
   */
  async getApStatusByGroupId(request: $_model.GetApStatusByGroupIdRequest): Promise<$_model.GetApStatusByGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApStatusByGroupIdWithOptions(request, runtime);
  }

  /**
   * 根据组id查组的基本信息（名称之类）
   * 
   * @param request - GetApgroupConfigByIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApgroupConfigByIdentityResponse
   */
  async getApgroupConfigByIdentityWithOptions(request: $_model.GetApgroupConfigByIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApgroupConfigByIdentityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.apgroupUuid)) {
      query["ApgroupUuid"] = request.apgroupUuid;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApgroupConfigByIdentity",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApgroupConfigByIdentityResponse>(await this.callApi(params, req, runtime), new $_model.GetApgroupConfigByIdentityResponse({}));
  }

  /**
   * 根据组id查组的基本信息（名称之类）
   * 
   * @param request - GetApgroupConfigByIdentityRequest
   * @returns GetApgroupConfigByIdentityResponse
   */
  async getApgroupConfigByIdentity(request: $_model.GetApgroupConfigByIdentityRequest): Promise<$_model.GetApgroupConfigByIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApgroupConfigByIdentityWithOptions(request, runtime);
  }

  /**
   * 查询设备组的完整配置(含ssid、portal等）
   * 
   * @param request - GetApgroupDetailedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApgroupDetailedConfigResponse
   */
  async getApgroupDetailedConfigWithOptions(request: $_model.GetApgroupDetailedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApgroupDetailedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.apgroupUuid)) {
      query["ApgroupUuid"] = request.apgroupUuid;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApgroupDetailedConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApgroupDetailedConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApgroupDetailedConfigResponse({}));
  }

  /**
   * 查询设备组的完整配置(含ssid、portal等）
   * 
   * @param request - GetApgroupDetailedConfigRequest
   * @returns GetApgroupDetailedConfigResponse
   */
  async getApgroupDetailedConfig(request: $_model.GetApgroupDetailedConfigRequest): Promise<$_model.GetApgroupDetailedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApgroupDetailedConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetApgroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApgroupIdResponse
   */
  async getApgroupIdWithOptions(request: $_model.GetApgroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApgroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApgroupId",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApgroupIdResponse>(await this.callApi(params, req, runtime), new $_model.GetApgroupIdResponse({}));
  }

  /**
   * @param request - GetApgroupIdRequest
   * @returns GetApgroupIdResponse
   */
  async getApgroupId(request: $_model.GetApgroupIdRequest): Promise<$_model.GetApgroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApgroupIdWithOptions(request, runtime);
  }

  /**
   * @param request - GetApgroupSsidConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApgroupSsidConfigResponse
   */
  async getApgroupSsidConfigWithOptions(request: $_model.GetApgroupSsidConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApgroupSsidConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apGroupUUId)) {
      query["ApGroupUUId"] = request.apGroupUUId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApgroupSsidConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApgroupSsidConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApgroupSsidConfigResponse({}));
  }

  /**
   * @param request - GetApgroupSsidConfigRequest
   * @returns GetApgroupSsidConfigResponse
   */
  async getApgroupSsidConfig(request: $_model.GetApgroupSsidConfigRequest): Promise<$_model.GetApgroupSsidConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApgroupSsidConfigWithOptions(request, runtime);
  }

  /**
   * 查询批量任务的执行进度
   * 
   * @param request - GetBatchTaskProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskProgressResponse
   */
  async getBatchTaskProgressWithOptions(request: $_model.GetBatchTaskProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTaskProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTaskProgress",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTaskProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTaskProgressResponse({}));
  }

  /**
   * 查询批量任务的执行进度
   * 
   * @param request - GetBatchTaskProgressRequest
   * @returns GetBatchTaskProgressResponse
   */
  async getBatchTaskProgress(request: $_model.GetBatchTaskProgressRequest): Promise<$_model.GetBatchTaskProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTaskProgressWithOptions(request, runtime);
  }

  /**
   * @param request - GetGroupMiscAggTimeSerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupMiscAggTimeSerResponse
   */
  async getGroupMiscAggTimeSerWithOptions(request: $_model.GetGroupMiscAggTimeSerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupMiscAggTimeSerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupUuid)) {
      query["ApgroupUuid"] = request.apgroupUuid;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroupMiscAggTimeSer",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupMiscAggTimeSerResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupMiscAggTimeSerResponse({}));
  }

  /**
   * @param request - GetGroupMiscAggTimeSerRequest
   * @returns GetGroupMiscAggTimeSerResponse
   */
  async getGroupMiscAggTimeSer(request: $_model.GetGroupMiscAggTimeSerRequest): Promise<$_model.GetGroupMiscAggTimeSerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupMiscAggTimeSerWithOptions(request, runtime);
  }

  /**
   * @param request - GetNetDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetDeviceInfoResponse
   */
  async getNetDeviceInfoWithOptions(request: $_model.GetNetDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.idc)) {
      query["Idc"] = request.idc;
    }

    if (!$dara.isNull(request.logicNetPod)) {
      query["LogicNetPod"] = request.logicNetPod;
    }

    if (!$dara.isNull(request.manufacturer)) {
      query["Manufacturer"] = request.manufacturer;
    }

    if (!$dara.isNull(request.mgnIp)) {
      query["MgnIp"] = request.mgnIp;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.netPod)) {
      query["NetPod"] = request.netPod;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serviceTag)) {
      query["ServiceTag"] = request.serviceTag;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetDeviceInfo",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetNetDeviceInfoResponse({}));
  }

  /**
   * @param request - GetNetDeviceInfoRequest
   * @returns GetNetDeviceInfoResponse
   */
  async getNetDeviceInfo(request: $_model.GetNetDeviceInfoRequest): Promise<$_model.GetNetDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetNetDeviceInfoWithSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetDeviceInfoWithSizeResponse
   */
  async getNetDeviceInfoWithSizeWithOptions(request: $_model.GetNetDeviceInfoWithSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetDeviceInfoWithSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.idc)) {
      query["Idc"] = request.idc;
    }

    if (!$dara.isNull(request.logicNetPod)) {
      query["LogicNetPod"] = request.logicNetPod;
    }

    if (!$dara.isNull(request.manufacturer)) {
      query["Manufacturer"] = request.manufacturer;
    }

    if (!$dara.isNull(request.mgnIp)) {
      query["MgnIp"] = request.mgnIp;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.netPod)) {
      query["NetPod"] = request.netPod;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serviceTag)) {
      query["ServiceTag"] = request.serviceTag;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetDeviceInfoWithSize",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetDeviceInfoWithSizeResponse>(await this.callApi(params, req, runtime), new $_model.GetNetDeviceInfoWithSizeResponse({}));
  }

  /**
   * @param request - GetNetDeviceInfoWithSizeRequest
   * @returns GetNetDeviceInfoWithSizeResponse
   */
  async getNetDeviceInfoWithSize(request: $_model.GetNetDeviceInfoWithSizeRequest): Promise<$_model.GetNetDeviceInfoWithSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetDeviceInfoWithSizeWithOptions(request, runtime);
  }

  /**
   * 获取体验加PV/UV信息
   * 
   * @param request - GetPageVisitDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageVisitDataResponse
   */
  async getPageVisitDataWithOptions(request: $_model.GetPageVisitDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageVisitDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPageVisitData",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageVisitDataResponse>(await this.callApi(params, req, runtime), new $_model.GetPageVisitDataResponse({}));
  }

  /**
   * 获取体验加PV/UV信息
   * 
   * @param request - GetPageVisitDataRequest
   * @returns GetPageVisitDataResponse
   */
  async getPageVisitData(request: $_model.GetPageVisitDataRequest): Promise<$_model.GetPageVisitDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageVisitDataWithOptions(request, runtime);
  }

  /**
   * @param request - GetRadioRunHistoryTimeSerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRadioRunHistoryTimeSerResponse
   */
  async getRadioRunHistoryTimeSerWithOptions(request: $_model.GetRadioRunHistoryTimeSerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRadioRunHistoryTimeSerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRadioRunHistoryTimeSer",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRadioRunHistoryTimeSerResponse>(await this.callApi(params, req, runtime), new $_model.GetRadioRunHistoryTimeSerResponse({}));
  }

  /**
   * @param request - GetRadioRunHistoryTimeSerRequest
   * @returns GetRadioRunHistoryTimeSerResponse
   */
  async getRadioRunHistoryTimeSer(request: $_model.GetRadioRunHistoryTimeSerRequest): Promise<$_model.GetRadioRunHistoryTimeSerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRadioRunHistoryTimeSerWithOptions(request, runtime);
  }

  /**
   * 查询终端设备的详细状态
   * 
   * @param request - GetStaDetailedStatusByMacRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStaDetailedStatusByMacResponse
   */
  async getStaDetailedStatusByMacWithOptions(request: $_model.GetStaDetailedStatusByMacRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStaDetailedStatusByMacResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.staMac)) {
      query["StaMac"] = request.staMac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStaDetailedStatusByMac",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStaDetailedStatusByMacResponse>(await this.callApi(params, req, runtime), new $_model.GetStaDetailedStatusByMacResponse({}));
  }

  /**
   * 查询终端设备的详细状态
   * 
   * @param request - GetStaDetailedStatusByMacRequest
   * @returns GetStaDetailedStatusByMacResponse
   */
  async getStaDetailedStatusByMac(request: $_model.GetStaDetailedStatusByMacRequest): Promise<$_model.GetStaDetailedStatusByMacResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStaDetailedStatusByMacWithOptions(request, runtime);
  }

  /**
   * @param request - GetStaStatusListByApRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStaStatusListByApResponse
   */
  async getStaStatusListByApWithOptions(request: $_model.GetStaStatusListByApRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStaStatusListByApResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStaStatusListByAp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStaStatusListByApResponse>(await this.callApi(params, req, runtime), new $_model.GetStaStatusListByApResponse({}));
  }

  /**
   * @param request - GetStaStatusListByApRequest
   * @returns GetStaStatusListByApResponse
   */
  async getStaStatusListByAp(request: $_model.GetStaStatusListByApRequest): Promise<$_model.GetStaStatusListByApResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStaStatusListByApWithOptions(request, runtime);
  }

  /**
   * 判断是否刑天的业务
   * 
   * @param request - JudgeXingTianBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JudgeXingTianBusinessResponse
   */
  async judgeXingTianBusinessWithOptions(request: $_model.JudgeXingTianBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JudgeXingTianBusinessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.realmId)) {
      query["RealmId"] = request.realmId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JudgeXingTianBusiness",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JudgeXingTianBusinessResponse>(await this.callApi(params, req, runtime), new $_model.JudgeXingTianBusinessResponse({}));
  }

  /**
   * 判断是否刑天的业务
   * 
   * @param request - JudgeXingTianBusinessRequest
   * @returns JudgeXingTianBusinessResponse
   */
  async judgeXingTianBusiness(request: $_model.JudgeXingTianBusinessRequest): Promise<$_model.JudgeXingTianBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.judgeXingTianBusinessWithOptions(request, runtime);
  }

  /**
   * 踢除蚂蚁环境的终端
   * 
   * @param request - KickAntStaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KickAntStaResponse
   */
  async kickAntStaWithOptions(request: $_model.KickAntStaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KickAntStaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.staMac)) {
      query["StaMac"] = request.staMac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KickAntSta",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KickAntStaResponse>(await this.callApi(params, req, runtime), new $_model.KickAntStaResponse({}));
  }

  /**
   * 踢除蚂蚁环境的终端
   * 
   * @param request - KickAntStaRequest
   * @returns KickAntStaResponse
   */
  async kickAntSta(request: $_model.KickAntStaRequest): Promise<$_model.KickAntStaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kickAntStaWithOptions(request, runtime);
  }

  /**
   * @param request - KickStaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KickStaResponse
   */
  async kickStaWithOptions(request: $_model.KickStaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KickStaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.staMac)) {
      query["StaMac"] = request.staMac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KickSta",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KickStaResponse>(await this.callApi(params, req, runtime), new $_model.KickStaResponse({}));
  }

  /**
   * @param request - KickStaRequest
   * @returns KickStaResponse
   */
  async kickSta(request: $_model.KickStaRequest): Promise<$_model.KickStaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kickStaWithOptions(request, runtime);
  }

  /**
   * 根据组id查组内第一级子组
   * 
   * @param request - ListApgroupDescendantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApgroupDescendantResponse
   */
  async listApgroupDescendantWithOptions(request: $_model.ListApgroupDescendantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApgroupDescendantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.apgroupUuid)) {
      query["ApgroupUuid"] = request.apgroupUuid;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApgroupDescendant",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApgroupDescendantResponse>(await this.callApi(params, req, runtime), new $_model.ListApgroupDescendantResponse({}));
  }

  /**
   * 根据组id查组内第一级子组
   * 
   * @param request - ListApgroupDescendantRequest
   * @returns ListApgroupDescendantResponse
   */
  async listApgroupDescendant(request: $_model.ListApgroupDescendantRequest): Promise<$_model.ListApgroupDescendantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApgroupDescendantWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobOrdersResponse
   */
  async listJobOrdersWithOptions(request: $_model.ListJobOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.changingType)) {
      query["ChangingType"] = request.changingType;
    }

    if (!$dara.isNull(request.clientSystem)) {
      query["ClientSystem"] = request.clientSystem;
    }

    if (!$dara.isNull(request.clientUniqueId)) {
      query["ClientUniqueId"] = request.clientUniqueId;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.handler)) {
      query["Handler"] = request.handler;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobOrders",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListJobOrdersResponse({}));
  }

  /**
   * @param request - ListJobOrdersRequest
   * @returns ListJobOrdersResponse
   */
  async listJobOrders(request: $_model.ListJobOrdersRequest): Promise<$_model.ListJobOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobOrdersWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobOrdersWithSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobOrdersWithSizeResponse
   */
  async listJobOrdersWithSizeWithOptions(request: $_model.ListJobOrdersWithSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobOrdersWithSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.changingType)) {
      query["ChangingType"] = request.changingType;
    }

    if (!$dara.isNull(request.clientSystem)) {
      query["ClientSystem"] = request.clientSystem;
    }

    if (!$dara.isNull(request.clientUniqueId)) {
      query["ClientUniqueId"] = request.clientUniqueId;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.handler)) {
      query["Handler"] = request.handler;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobOrdersWithSize",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobOrdersWithSizeResponse>(await this.callApi(params, req, runtime), new $_model.ListJobOrdersWithSizeResponse({}));
  }

  /**
   * @param request - ListJobOrdersWithSizeRequest
   * @returns ListJobOrdersWithSizeResponse
   */
  async listJobOrdersWithSize(request: $_model.ListJobOrdersWithSizeRequest): Promise<$_model.ListJobOrdersWithSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobOrdersWithSizeWithOptions(request, runtime);
  }

  /**
   * @param request - NewApgroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NewApgroupConfigResponse
   */
  async newApgroupConfigWithOptions(request: $_model.NewApgroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NewApgroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentApgroupId)) {
      query["ParentApgroupId"] = request.parentApgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NewApgroupConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NewApgroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.NewApgroupConfigResponse({}));
  }

  /**
   * @param request - NewApgroupConfigRequest
   * @returns NewApgroupConfigResponse
   */
  async newApgroupConfig(request: $_model.NewApgroupConfigRequest): Promise<$_model.NewApgroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.newApgroupConfigWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - NewJobOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NewJobOrderResponse
   */
  async newJobOrderWithOptions(tmpReq: $_model.NewJobOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NewJobOrderResponse> {
    tmpReq.validate();
    let request = new $_model.NewJobOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.changeType)) {
      query["ChangeType"] = request.changeType;
    }

    if (!$dara.isNull(request.clientSystem)) {
      query["ClientSystem"] = request.clientSystem;
    }

    if (!$dara.isNull(request.clientUniqueId)) {
      query["ClientUniqueId"] = request.clientUniqueId;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.referUrl)) {
      query["ReferUrl"] = request.referUrl;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "NewJobOrder",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NewJobOrderResponse>(await this.callApi(params, req, runtime), new $_model.NewJobOrderResponse({}));
  }

  /**
   * @param request - NewJobOrderRequest
   * @returns NewJobOrderResponse
   */
  async newJobOrder(request: $_model.NewJobOrderRequest): Promise<$_model.NewJobOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.newJobOrderWithOptions(request, runtime);
  }

  /**
   * @param request - NewNetDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NewNetDeviceInfoResponse
   */
  async newNetDeviceInfoWithOptions(request: $_model.NewNetDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NewNetDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.devices)) {
      body["Devices"] = request.devices;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "NewNetDeviceInfo",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NewNetDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.NewNetDeviceInfoResponse({}));
  }

  /**
   * @param request - NewNetDeviceInfoRequest
   * @returns NewNetDeviceInfoResponse
   */
  async newNetDeviceInfo(request: $_model.NewNetDeviceInfoRequest): Promise<$_model.NewNetDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.newNetDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request - PutAppConfigAndSaveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAppConfigAndSaveResponse
   */
  async putAppConfigAndSaveWithOptions(request: $_model.PutAppConfigAndSaveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutAppConfigAndSaveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.configureType)) {
      query["ConfigureType"] = request.configureType;
    }

    if (!$dara.isNull(request.currentTime)) {
      query["CurrentTime"] = request.currentTime;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutAppConfigAndSave",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutAppConfigAndSaveResponse>(await this.callApi(params, req, runtime), new $_model.PutAppConfigAndSaveResponse({}));
  }

  /**
   * @param request - PutAppConfigAndSaveRequest
   * @returns PutAppConfigAndSaveResponse
   */
  async putAppConfigAndSave(request: $_model.PutAppConfigAndSaveRequest): Promise<$_model.PutAppConfigAndSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putAppConfigAndSaveWithOptions(request, runtime);
  }

  /**
   * @param request - QueryJobOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryJobOrderResponse
   */
  async queryJobOrderWithOptions(request: $_model.QueryJobOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryJobOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryJobOrder",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryJobOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryJobOrderResponse({}));
  }

  /**
   * @param request - QueryJobOrderRequest
   * @returns QueryJobOrderResponse
   */
  async queryJobOrder(request: $_model.QueryJobOrderRequest): Promise<$_model.QueryJobOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryJobOrderWithOptions(request, runtime);
  }

  /**
   * @param request - RebootApRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootApResponse
   */
  async rebootApWithOptions(request: $_model.RebootApRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootApResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootAp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootApResponse>(await this.callApi(params, req, runtime), new $_model.RebootApResponse({}));
  }

  /**
   * @param request - RebootApRequest
   * @returns RebootApResponse
   */
  async rebootAp(request: $_model.RebootApRequest): Promise<$_model.RebootApResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootApWithOptions(request, runtime);
  }

  /**
   * @param request - RegisterApAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterApAssetResponse
   */
  async registerApAssetWithOptions(request: $_model.RegisterApAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterApAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apGroupUUId)) {
      query["ApGroupUUId"] = request.apGroupUUId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterApAsset",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterApAssetResponse>(await this.callApi(params, req, runtime), new $_model.RegisterApAssetResponse({}));
  }

  /**
   * @param request - RegisterApAssetRequest
   * @returns RegisterApAssetResponse
   */
  async registerApAsset(request: $_model.RegisterApAssetRequest): Promise<$_model.RegisterApAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerApAssetWithOptions(request, runtime);
  }

  /**
   * @param request - RepairApRadioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RepairApRadioResponse
   */
  async repairApRadioWithOptions(request: $_model.RepairApRadioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RepairApRadioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.radioIndex)) {
      query["RadioIndex"] = request.radioIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RepairApRadio",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RepairApRadioResponse>(await this.callApi(params, req, runtime), new $_model.RepairApRadioResponse({}));
  }

  /**
   * @param request - RepairApRadioRequest
   * @returns RepairApRadioResponse
   */
  async repairApRadio(request: $_model.RepairApRadioRequest): Promise<$_model.RepairApRadioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.repairApRadioWithOptions(request, runtime);
  }

  /**
   * 保存设备的基本配置
   * 
   * @param request - SaveApBasicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApBasicConfigResponse
   */
  async saveApBasicConfigWithOptions(request: $_model.SaveApBasicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApBasicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.dai)) {
      query["Dai"] = request.dai;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.echoInt)) {
      query["EchoInt"] = request.echoInt;
    }

    if (!$dara.isNull(request.failover)) {
      query["Failover"] = request.failover;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.insecureAllowed)) {
      query["InsecureAllowed"] = request.insecureAllowed;
    }

    if (!$dara.isNull(request.lanIp)) {
      query["LanIp"] = request.lanIp;
    }

    if (!$dara.isNull(request.lanMask)) {
      query["LanMask"] = request.lanMask;
    }

    if (!$dara.isNull(request.lanStatus)) {
      query["LanStatus"] = request.lanStatus;
    }

    if (!$dara.isNull(request.logIp)) {
      query["LogIp"] = request.logIp;
    }

    if (!$dara.isNull(request.logLevel)) {
      query["LogLevel"] = request.logLevel;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.passwd)) {
      query["Passwd"] = request.passwd;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.route)) {
      query["Route"] = request.route;
    }

    if (!$dara.isNull(request.scan)) {
      query["Scan"] = request.scan;
    }

    if (!$dara.isNull(request.tokenServer)) {
      query["TokenServer"] = request.tokenServer;
    }

    if (!$dara.isNull(request.vpn)) {
      query["Vpn"] = request.vpn;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApBasicConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApBasicConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApBasicConfigResponse({}));
  }

  /**
   * 保存设备的基本配置
   * 
   * @param request - SaveApBasicConfigRequest
   * @returns SaveApBasicConfigResponse
   */
  async saveApBasicConfig(request: $_model.SaveApBasicConfigRequest): Promise<$_model.SaveApBasicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApBasicConfigWithOptions(request, runtime);
  }

  /**
   * 配置设备的portal
   * 
   * @param tmpReq - SaveApPortalConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApPortalConfigResponse
   */
  async saveApPortalConfigWithOptions(tmpReq: $_model.SaveApPortalConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApPortalConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SaveApPortalConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.portalTypes)) {
      request.portalTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.portalTypes, "PortalTypes", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.apConfigId)) {
      query["ApConfigId"] = request.apConfigId;
    }

    if (!$dara.isNull(request.appAuthUrl)) {
      query["AppAuthUrl"] = request.appAuthUrl;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSecret)) {
      query["AuthSecret"] = request.authSecret;
    }

    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.clientDownload)) {
      query["ClientDownload"] = request.clientDownload;
    }

    if (!$dara.isNull(request.clientUpload)) {
      query["ClientUpload"] = request.clientUpload;
    }

    if (!$dara.isNull(request.countdown)) {
      query["Countdown"] = request.countdown;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.portalTypesShrink)) {
      query["PortalTypes"] = request.portalTypesShrink;
    }

    if (!$dara.isNull(request.portalUrl)) {
      query["PortalUrl"] = request.portalUrl;
    }

    if (!$dara.isNull(request.timeStamp)) {
      query["TimeStamp"] = request.timeStamp;
    }

    if (!$dara.isNull(request.totalDownload)) {
      query["TotalDownload"] = request.totalDownload;
    }

    if (!$dara.isNull(request.totalUpload)) {
      query["TotalUpload"] = request.totalUpload;
    }

    if (!$dara.isNull(request.webAuthUrl)) {
      query["WebAuthUrl"] = request.webAuthUrl;
    }

    if (!$dara.isNull(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApPortalConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApPortalConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApPortalConfigResponse({}));
  }

  /**
   * 配置设备的portal
   * 
   * @param request - SaveApPortalConfigRequest
   * @returns SaveApPortalConfigResponse
   */
  async saveApPortalConfig(request: $_model.SaveApPortalConfigRequest): Promise<$_model.SaveApPortalConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApPortalConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SaveApRadioConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApRadioConfigResponse
   */
  async saveApRadioConfigWithOptions(request: $_model.SaveApRadioConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApRadioConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bcastRate)) {
      query["BcastRate"] = request.bcastRate;
    }

    if (!$dara.isNull(request.beaconInt)) {
      query["BeaconInt"] = request.beaconInt;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.frag)) {
      query["Frag"] = request.frag;
    }

    if (!$dara.isNull(request.htmode)) {
      query["Htmode"] = request.htmode;
    }

    if (!$dara.isNull(request.hwmode)) {
      query["Hwmode"] = request.hwmode;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mcastRate)) {
      query["McastRate"] = request.mcastRate;
    }

    if (!$dara.isNull(request.mgmtRate)) {
      query["MgmtRate"] = request.mgmtRate;
    }

    if (!$dara.isNull(request.minrate)) {
      query["Minrate"] = request.minrate;
    }

    if (!$dara.isNull(request.noscan)) {
      query["Noscan"] = request.noscan;
    }

    if (!$dara.isNull(request.probereq)) {
      query["Probereq"] = request.probereq;
    }

    if (!$dara.isNull(request.requireMode)) {
      query["RequireMode"] = request.requireMode;
    }

    if (!$dara.isNull(request.rts)) {
      query["Rts"] = request.rts;
    }

    if (!$dara.isNull(request.shortgi)) {
      query["Shortgi"] = request.shortgi;
    }

    if (!$dara.isNull(request.txpower)) {
      query["Txpower"] = request.txpower;
    }

    if (!$dara.isNull(request.uapsd)) {
      query["Uapsd"] = request.uapsd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApRadioConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApRadioConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApRadioConfigResponse({}));
  }

  /**
   * @param request - SaveApRadioConfigRequest
   * @returns SaveApRadioConfigResponse
   */
  async saveApRadioConfig(request: $_model.SaveApRadioConfigRequest): Promise<$_model.SaveApRadioConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApRadioConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SaveApSsidConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApSsidConfigResponse
   */
  async saveApSsidConfigWithOptions(request: $_model.SaveApSsidConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApSsidConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acctPort)) {
      query["AcctPort"] = request.acctPort;
    }

    if (!$dara.isNull(request.acctSecret)) {
      query["AcctSecret"] = request.acctSecret;
    }

    if (!$dara.isNull(request.acctServer)) {
      query["AcctServer"] = request.acctServer;
    }

    if (!$dara.isNull(request.acctStatusServerWork)) {
      query["AcctStatusServerWork"] = request.acctStatusServerWork;
    }

    if (!$dara.isNull(request.apAssetId)) {
      query["ApAssetId"] = request.apAssetId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.arpProxyEnable)) {
      query["ArpProxyEnable"] = request.arpProxyEnable;
    }

    if (!$dara.isNull(request.authCache)) {
      query["AuthCache"] = request.authCache;
    }

    if (!$dara.isNull(request.authPort)) {
      query["AuthPort"] = request.authPort;
    }

    if (!$dara.isNull(request.authSecret)) {
      query["AuthSecret"] = request.authSecret;
    }

    if (!$dara.isNull(request.authServer)) {
      query["AuthServer"] = request.authServer;
    }

    if (!$dara.isNull(request.authStatusServerWork)) {
      query["AuthStatusServerWork"] = request.authStatusServerWork;
    }

    if (!$dara.isNull(request.cir)) {
      query["Cir"] = request.cir;
    }

    if (!$dara.isNull(request.cirStep)) {
      query["CirStep"] = request.cirStep;
    }

    if (!$dara.isNull(request.cirType)) {
      query["CirType"] = request.cirType;
    }

    if (!$dara.isNull(request.cirUl)) {
      query["CirUl"] = request.cirUl;
    }

    if (!$dara.isNull(request.daeClient)) {
      query["DaeClient"] = request.daeClient;
    }

    if (!$dara.isNull(request.daePort)) {
      query["DaePort"] = request.daePort;
    }

    if (!$dara.isNull(request.daeSecret)) {
      query["DaeSecret"] = request.daeSecret;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.disassocLowAck)) {
      query["DisassocLowAck"] = request.disassocLowAck;
    }

    if (!$dara.isNull(request.disassocWeakRssi)) {
      query["DisassocWeakRssi"] = request.disassocWeakRssi;
    }

    if (!$dara.isNull(request.dynamicVlan)) {
      query["DynamicVlan"] = request.dynamicVlan;
    }

    if (!$dara.isNull(request.encKey)) {
      query["EncKey"] = request.encKey;
    }

    if (!$dara.isNull(request.encryption)) {
      query["Encryption"] = request.encryption;
    }

    if (!$dara.isNull(request.fourthAuthPort)) {
      query["FourthAuthPort"] = request.fourthAuthPort;
    }

    if (!$dara.isNull(request.fourthAuthSecret)) {
      query["FourthAuthSecret"] = request.fourthAuthSecret;
    }

    if (!$dara.isNull(request.fourthAuthServer)) {
      query["FourthAuthServer"] = request.fourthAuthServer;
    }

    if (!$dara.isNull(request.ftOverDs)) {
      query["FtOverDs"] = request.ftOverDs;
    }

    if (!$dara.isNull(request.hidden)) {
      query["Hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ieee80211r)) {
      query["Ieee80211r"] = request.ieee80211r;
    }

    if (!$dara.isNull(request.ieee80211w)) {
      query["Ieee80211w"] = request.ieee80211w;
    }

    if (!$dara.isNull(request.ignoreWeakProbe)) {
      query["IgnoreWeakProbe"] = request.ignoreWeakProbe;
    }

    if (!$dara.isNull(request.isolate)) {
      query["Isolate"] = request.isolate;
    }

    if (!$dara.isNull(request.liteEffect)) {
      query["LiteEffect"] = request.liteEffect;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.maxInactivity)) {
      query["MaxInactivity"] = request.maxInactivity;
    }

    if (!$dara.isNull(request.maxassoc)) {
      query["Maxassoc"] = request.maxassoc;
    }

    if (!$dara.isNull(request.mobilityDomain)) {
      query["MobilityDomain"] = request.mobilityDomain;
    }

    if (!$dara.isNull(request.multicastForward)) {
      query["MulticastForward"] = request.multicastForward;
    }

    if (!$dara.isNull(request.nasid)) {
      query["Nasid"] = request.nasid;
    }

    if (!$dara.isNull(request.ndProxyWork)) {
      query["NdProxyWork"] = request.ndProxyWork;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.ownip)) {
      query["Ownip"] = request.ownip;
    }

    if (!$dara.isNull(request.radioIndex)) {
      query["RadioIndex"] = request.radioIndex;
    }

    if (!$dara.isNull(request.secondaryAcctPort)) {
      query["SecondaryAcctPort"] = request.secondaryAcctPort;
    }

    if (!$dara.isNull(request.secondaryAcctSecret)) {
      query["SecondaryAcctSecret"] = request.secondaryAcctSecret;
    }

    if (!$dara.isNull(request.secondaryAcctServer)) {
      query["SecondaryAcctServer"] = request.secondaryAcctServer;
    }

    if (!$dara.isNull(request.secondaryAuthPort)) {
      query["SecondaryAuthPort"] = request.secondaryAuthPort;
    }

    if (!$dara.isNull(request.secondaryAuthSecret)) {
      query["SecondaryAuthSecret"] = request.secondaryAuthSecret;
    }

    if (!$dara.isNull(request.secondaryAuthServer)) {
      query["SecondaryAuthServer"] = request.secondaryAuthServer;
    }

    if (!$dara.isNull(request.sendConfigToAp)) {
      query["SendConfigToAp"] = request.sendConfigToAp;
    }

    if (!$dara.isNull(request.shortPreamble)) {
      query["ShortPreamble"] = request.shortPreamble;
    }

    if (!$dara.isNull(request.ssid)) {
      query["Ssid"] = request.ssid;
    }

    if (!$dara.isNull(request.ssidLb)) {
      query["SsidLb"] = request.ssidLb;
    }

    if (!$dara.isNull(request.thirdAuthPort)) {
      query["ThirdAuthPort"] = request.thirdAuthPort;
    }

    if (!$dara.isNull(request.thirdAuthSecret)) {
      query["ThirdAuthSecret"] = request.thirdAuthSecret;
    }

    if (!$dara.isNull(request.thirdAuthServer)) {
      query["ThirdAuthServer"] = request.thirdAuthServer;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vlanDhcp)) {
      query["VlanDhcp"] = request.vlanDhcp;
    }

    if (!$dara.isNull(request.wmm)) {
      query["Wmm"] = request.wmm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApSsidConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApSsidConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApSsidConfigResponse({}));
  }

  /**
   * @param request - SaveApSsidConfigRequest
   * @returns SaveApSsidConfigResponse
   */
  async saveApSsidConfig(request: $_model.SaveApSsidConfigRequest): Promise<$_model.SaveApSsidConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApSsidConfigWithOptions(request, runtime);
  }

  /**
   * 配置设备的三方app
   * 
   * @param request - SaveApThirdAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApThirdAppResponse
   */
  async saveApThirdAppWithOptions(request: $_model.SaveApThirdAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApThirdAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addStyle)) {
      query["AddStyle"] = request.addStyle;
    }

    if (!$dara.isNull(request.apAssetId)) {
      query["ApAssetId"] = request.apAssetId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appData)) {
      query["AppData"] = request.appData;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.thirdAppName)) {
      query["ThirdAppName"] = request.thirdAppName;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApThirdApp",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApThirdAppResponse>(await this.callApi(params, req, runtime), new $_model.SaveApThirdAppResponse({}));
  }

  /**
   * 配置设备的三方app
   * 
   * @param request - SaveApThirdAppRequest
   * @returns SaveApThirdAppResponse
   */
  async saveApThirdApp(request: $_model.SaveApThirdAppRequest): Promise<$_model.SaveApThirdAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApThirdAppWithOptions(request, runtime);
  }

  /**
   * 保存设备组的基本配置
   * 
   * @param request - SaveApgroupBasicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApgroupBasicConfigResponse
   */
  async saveApgroupBasicConfigWithOptions(request: $_model.SaveApgroupBasicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApgroupBasicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.dai)) {
      query["Dai"] = request.dai;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.echoInt)) {
      query["EchoInt"] = request.echoInt;
    }

    if (!$dara.isNull(request.failover)) {
      query["Failover"] = request.failover;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.insecureAllowed)) {
      query["InsecureAllowed"] = request.insecureAllowed;
    }

    if (!$dara.isNull(request.isConfigStrongConsistency)) {
      query["IsConfigStrongConsistency"] = request.isConfigStrongConsistency;
    }

    if (!$dara.isNull(request.lanIp)) {
      query["LanIp"] = request.lanIp;
    }

    if (!$dara.isNull(request.lanMask)) {
      query["LanMask"] = request.lanMask;
    }

    if (!$dara.isNull(request.lanStatus)) {
      query["LanStatus"] = request.lanStatus;
    }

    if (!$dara.isNull(request.logIp)) {
      query["LogIp"] = request.logIp;
    }

    if (!$dara.isNull(request.logLevel)) {
      query["LogLevel"] = request.logLevel;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentApgroupId)) {
      query["ParentApgroupId"] = request.parentApgroupId;
    }

    if (!$dara.isNull(request.passwd)) {
      query["Passwd"] = request.passwd;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.route)) {
      query["Route"] = request.route;
    }

    if (!$dara.isNull(request.scan)) {
      query["Scan"] = request.scan;
    }

    if (!$dara.isNull(request.tokenServer)) {
      query["TokenServer"] = request.tokenServer;
    }

    if (!$dara.isNull(request.vpn)) {
      query["Vpn"] = request.vpn;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApgroupBasicConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApgroupBasicConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApgroupBasicConfigResponse({}));
  }

  /**
   * 保存设备组的基本配置
   * 
   * @param request - SaveApgroupBasicConfigRequest
   * @returns SaveApgroupBasicConfigResponse
   */
  async saveApgroupBasicConfig(request: $_model.SaveApgroupBasicConfigRequest): Promise<$_model.SaveApgroupBasicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApgroupBasicConfigWithOptions(request, runtime);
  }

  /**
   * 配置设备组的portal
   * 
   * @param tmpReq - SaveApgroupPortalConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApgroupPortalConfigResponse
   */
  async saveApgroupPortalConfigWithOptions(tmpReq: $_model.SaveApgroupPortalConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApgroupPortalConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SaveApgroupPortalConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.portalTypes)) {
      request.portalTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.portalTypes, "PortalTypes", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.appAuthUrl)) {
      query["AppAuthUrl"] = request.appAuthUrl;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSecret)) {
      query["AuthSecret"] = request.authSecret;
    }

    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.clientDownload)) {
      query["ClientDownload"] = request.clientDownload;
    }

    if (!$dara.isNull(request.clientUpload)) {
      query["ClientUpload"] = request.clientUpload;
    }

    if (!$dara.isNull(request.countdown)) {
      query["Countdown"] = request.countdown;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.portalTypesShrink)) {
      query["PortalTypes"] = request.portalTypesShrink;
    }

    if (!$dara.isNull(request.portalUrl)) {
      query["PortalUrl"] = request.portalUrl;
    }

    if (!$dara.isNull(request.timeStamp)) {
      query["TimeStamp"] = request.timeStamp;
    }

    if (!$dara.isNull(request.totalDownload)) {
      query["TotalDownload"] = request.totalDownload;
    }

    if (!$dara.isNull(request.totalUpload)) {
      query["TotalUpload"] = request.totalUpload;
    }

    if (!$dara.isNull(request.webAuthUrl)) {
      query["WebAuthUrl"] = request.webAuthUrl;
    }

    if (!$dara.isNull(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApgroupPortalConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApgroupPortalConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApgroupPortalConfigResponse({}));
  }

  /**
   * 配置设备组的portal
   * 
   * @param request - SaveApgroupPortalConfigRequest
   * @returns SaveApgroupPortalConfigResponse
   */
  async saveApgroupPortalConfig(request: $_model.SaveApgroupPortalConfigRequest): Promise<$_model.SaveApgroupPortalConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApgroupPortalConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SaveApgroupSsidConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveApgroupSsidConfigResponse
   */
  async saveApgroupSsidConfigWithOptions(request: $_model.SaveApgroupSsidConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveApgroupSsidConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acctPort)) {
      query["AcctPort"] = request.acctPort;
    }

    if (!$dara.isNull(request.acctSecret)) {
      query["AcctSecret"] = request.acctSecret;
    }

    if (!$dara.isNull(request.acctServer)) {
      query["AcctServer"] = request.acctServer;
    }

    if (!$dara.isNull(request.apgroupId)) {
      query["ApgroupId"] = request.apgroupId;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authCache)) {
      query["AuthCache"] = request.authCache;
    }

    if (!$dara.isNull(request.authPort)) {
      query["AuthPort"] = request.authPort;
    }

    if (!$dara.isNull(request.authSecret)) {
      query["AuthSecret"] = request.authSecret;
    }

    if (!$dara.isNull(request.authServer)) {
      query["AuthServer"] = request.authServer;
    }

    if (!$dara.isNull(request.binding)) {
      query["Binding"] = request.binding;
    }

    if (!$dara.isNull(request.cir)) {
      query["Cir"] = request.cir;
    }

    if (!$dara.isNull(request.daeClient)) {
      query["DaeClient"] = request.daeClient;
    }

    if (!$dara.isNull(request.daePort)) {
      query["DaePort"] = request.daePort;
    }

    if (!$dara.isNull(request.daeSecret)) {
      query["DaeSecret"] = request.daeSecret;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.disassocLowAck)) {
      query["DisassocLowAck"] = request.disassocLowAck;
    }

    if (!$dara.isNull(request.disassocWeakRssi)) {
      query["DisassocWeakRssi"] = request.disassocWeakRssi;
    }

    if (!$dara.isNull(request.dynamicVlan)) {
      query["DynamicVlan"] = request.dynamicVlan;
    }

    if (!$dara.isNull(request.effect)) {
      query["Effect"] = request.effect;
    }

    if (!$dara.isNull(request.encKey)) {
      query["EncKey"] = request.encKey;
    }

    if (!$dara.isNull(request.encryption)) {
      query["Encryption"] = request.encryption;
    }

    if (!$dara.isNull(request.hidden)) {
      query["Hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ieee80211w)) {
      query["Ieee80211w"] = request.ieee80211w;
    }

    if (!$dara.isNull(request.ignoreWeakProbe)) {
      query["IgnoreWeakProbe"] = request.ignoreWeakProbe;
    }

    if (!$dara.isNull(request.isolate)) {
      query["Isolate"] = request.isolate;
    }

    if (!$dara.isNull(request.liteEffect)) {
      query["LiteEffect"] = request.liteEffect;
    }

    if (!$dara.isNull(request.maxInactivity)) {
      query["MaxInactivity"] = request.maxInactivity;
    }

    if (!$dara.isNull(request.maxassoc)) {
      query["Maxassoc"] = request.maxassoc;
    }

    if (!$dara.isNull(request.multicastForward)) {
      query["MulticastForward"] = request.multicastForward;
    }

    if (!$dara.isNull(request.nasid)) {
      query["Nasid"] = request.nasid;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.newSsid)) {
      query["NewSsid"] = request.newSsid;
    }

    if (!$dara.isNull(request.ownip)) {
      query["Ownip"] = request.ownip;
    }

    if (!$dara.isNull(request.secondaryAcctPort)) {
      query["SecondaryAcctPort"] = request.secondaryAcctPort;
    }

    if (!$dara.isNull(request.secondaryAcctSecret)) {
      query["SecondaryAcctSecret"] = request.secondaryAcctSecret;
    }

    if (!$dara.isNull(request.secondaryAcctServer)) {
      query["SecondaryAcctServer"] = request.secondaryAcctServer;
    }

    if (!$dara.isNull(request.secondaryAuthPort)) {
      query["SecondaryAuthPort"] = request.secondaryAuthPort;
    }

    if (!$dara.isNull(request.secondaryAuthSecret)) {
      query["SecondaryAuthSecret"] = request.secondaryAuthSecret;
    }

    if (!$dara.isNull(request.secondaryAuthServer)) {
      query["SecondaryAuthServer"] = request.secondaryAuthServer;
    }

    if (!$dara.isNull(request.shortPreamble)) {
      query["ShortPreamble"] = request.shortPreamble;
    }

    if (!$dara.isNull(request.ssid)) {
      query["Ssid"] = request.ssid;
    }

    if (!$dara.isNull(request.ssidLb)) {
      query["SsidLb"] = request.ssidLb;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vlanDhcp)) {
      query["VlanDhcp"] = request.vlanDhcp;
    }

    if (!$dara.isNull(request.wmm)) {
      query["Wmm"] = request.wmm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveApgroupSsidConfig",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveApgroupSsidConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveApgroupSsidConfigResponse({}));
  }

  /**
   * @param request - SaveApgroupSsidConfigRequest
   * @returns SaveApgroupSsidConfigResponse
   */
  async saveApgroupSsidConfig(request: $_model.SaveApgroupSsidConfigRequest): Promise<$_model.SaveApgroupSsidConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveApgroupSsidConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SetApAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApAddressResponse
   */
  async setApAddressWithOptions(request: $_model.SetApAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apAreaName)) {
      query["ApAreaName"] = request.apAreaName;
    }

    if (!$dara.isNull(request.apBuildingName)) {
      query["ApBuildingName"] = request.apBuildingName;
    }

    if (!$dara.isNull(request.apCampusName)) {
      query["ApCampusName"] = request.apCampusName;
    }

    if (!$dara.isNull(request.apCityName)) {
      query["ApCityName"] = request.apCityName;
    }

    if (!$dara.isNull(request.apFloor)) {
      query["ApFloor"] = request.apFloor;
    }

    if (!$dara.isNull(request.apGroup)) {
      query["ApGroup"] = request.apGroup;
    }

    if (!$dara.isNull(request.apName)) {
      query["ApName"] = request.apName;
    }

    if (!$dara.isNull(request.apNationName)) {
      query["ApNationName"] = request.apNationName;
    }

    if (!$dara.isNull(request.apProvinceName)) {
      query["ApProvinceName"] = request.apProvinceName;
    }

    if (!$dara.isNull(request.apUnitId)) {
      query["ApUnitId"] = request.apUnitId;
    }

    if (!$dara.isNull(request.apUnitName)) {
      query["ApUnitName"] = request.apUnitName;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.lat)) {
      query["Lat"] = request.lat;
    }

    if (!$dara.isNull(request.lng)) {
      query["Lng"] = request.lng;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApAddress",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApAddressResponse>(await this.callApi(params, req, runtime), new $_model.SetApAddressResponse({}));
  }

  /**
   * @param request - SetApAddressRequest
   * @returns SetApAddressResponse
   */
  async setApAddress(request: $_model.SetApAddressRequest): Promise<$_model.SetApAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApAddressWithOptions(request, runtime);
  }

  /**
   * @param request - SetApNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApNameResponse
   */
  async setApNameWithOptions(request: $_model.SetApNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apMac)) {
      query["ApMac"] = request.apMac;
    }

    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApName",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApNameResponse>(await this.callApi(params, req, runtime), new $_model.SetApNameResponse({}));
  }

  /**
   * @param request - SetApNameRequest
   * @returns SetApNameResponse
   */
  async setApName(request: $_model.SetApNameRequest): Promise<$_model.SetApNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApNameWithOptions(request, runtime);
  }

  /**
   * 注销AP设备
   * 
   * @param request - UnRegisterApAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnRegisterApAssetResponse
   */
  async unRegisterApAssetWithOptions(request: $_model.UnRegisterApAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnRegisterApAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.assetApgroupId)) {
      query["AssetApgroupId"] = request.assetApgroupId;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.useFor)) {
      query["UseFor"] = request.useFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnRegisterApAsset",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnRegisterApAssetResponse>(await this.callApi(params, req, runtime), new $_model.UnRegisterApAssetResponse({}));
  }

  /**
   * 注销AP设备
   * 
   * @param request - UnRegisterApAssetRequest
   * @returns UnRegisterApAssetResponse
   */
  async unRegisterApAsset(request: $_model.UnRegisterApAssetRequest): Promise<$_model.UnRegisterApAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unRegisterApAssetWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateNetDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetDeviceInfoResponse
   */
  async updateNetDeviceInfoWithOptions(request: $_model.UpdateNetDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.devices)) {
      body["Devices"] = request.devices;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetDeviceInfo",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetDeviceInfoResponse({}));
  }

  /**
   * @param request - UpdateNetDeviceInfoRequest
   * @returns UpdateNetDeviceInfoResponse
   */
  async updateNetDeviceInfo(request: $_model.UpdateNetDeviceInfoRequest): Promise<$_model.UpdateNetDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetDeviceInfoWithOptions(request, runtime);
  }

}

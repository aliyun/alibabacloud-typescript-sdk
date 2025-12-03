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
    this._endpoint = this.getEndpoint("umeng-push", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 根据消息ID取消发送
   * 
   * @param request - CancelByMsgIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelByMsgIdResponse
   */
  async cancelByMsgIdWithOptions(request: $_model.CancelByMsgIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelByMsgIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelByMsgId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/CancelByMsgId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelByMsgIdResponse>(await this.callApi(params, req, runtime), new $_model.CancelByMsgIdResponse({}));
  }

  /**
   * 根据消息ID取消发送
   * 
   * @param request - CancelByMsgIdRequest
   * @returns CancelByMsgIdResponse
   */
  async cancelByMsgId(request: $_model.CancelByMsgIdRequest): Promise<$_model.CancelByMsgIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelByMsgIdWithOptions(request, headers, runtime);
  }

  /**
   * 消息状态查询
   * 
   * @param request - QueryMsgStatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMsgStatResponse
   */
  async queryMsgStatWithOptions(request: $_model.QueryMsgStatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMsgStatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMsgStat",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/QueryMsgStat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMsgStatResponse>(await this.callApi(params, req, runtime), new $_model.QueryMsgStatResponse({}));
  }

  /**
   * 消息状态查询
   * 
   * @param request - QueryMsgStatRequest
   * @returns QueryMsgStatResponse
   */
  async queryMsgStat(request: $_model.QueryMsgStatRequest): Promise<$_model.QueryMsgStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMsgStatWithOptions(request, headers, runtime);
  }

  /**
   * 指定别名发送
   * 
   * @param tmpReq - SendByAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByAliasResponse
   */
  async sendByAliasWithOptions(tmpReq: $_model.SendByAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByAliasResponse> {
    tmpReq.validate();
    let request = new $_model.SendByAliasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.androidShortPayload)) {
      request.androidShortPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidShortPayload, "AndroidShortPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.aliasType)) {
      body["AliasType"] = request.aliasType;
    }

    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayloadShrink)) {
      body["AndroidShortPayload"] = request.androidShortPayloadShrink;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByAlias",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByAlias`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByAliasResponse>(await this.callApi(params, req, runtime), new $_model.SendByAliasResponse({}));
  }

  /**
   * 指定别名发送
   * 
   * @param request - SendByAliasRequest
   * @returns SendByAliasResponse
   */
  async sendByAlias(request: $_model.SendByAliasRequest): Promise<$_model.SendByAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAliasWithOptions(request, headers, runtime);
  }

  /**
   * 指定别名文件发送
   * 
   * @param tmpReq - SendByAliasFileIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByAliasFileIdResponse
   */
  async sendByAliasFileIdWithOptions(tmpReq: $_model.SendByAliasFileIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByAliasFileIdResponse> {
    tmpReq.validate();
    let request = new $_model.SendByAliasFileIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.androidShortPayload)) {
      request.androidShortPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidShortPayload, "AndroidShortPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasType)) {
      body["AliasType"] = request.aliasType;
    }

    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayloadShrink)) {
      body["AndroidShortPayload"] = request.androidShortPayloadShrink;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByAliasFileId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByAliasFileId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByAliasFileIdResponse>(await this.callApi(params, req, runtime), new $_model.SendByAliasFileIdResponse({}));
  }

  /**
   * 指定别名文件发送
   * 
   * @param request - SendByAliasFileIdRequest
   * @returns SendByAliasFileIdResponse
   */
  async sendByAliasFileId(request: $_model.SendByAliasFileIdRequest): Promise<$_model.SendByAliasFileIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAliasFileIdWithOptions(request, headers, runtime);
  }

  /**
   * 广播
   * 
   * @param tmpReq - SendByAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByAppResponse
   */
  async sendByAppWithOptions(tmpReq: $_model.SendByAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByAppResponse> {
    tmpReq.validate();
    let request = new $_model.SendByAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.androidShortPayload)) {
      request.androidShortPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidShortPayload, "AndroidShortPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayloadShrink)) {
      body["AndroidShortPayload"] = request.androidShortPayloadShrink;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByApp",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByApp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByAppResponse>(await this.callApi(params, req, runtime), new $_model.SendByAppResponse({}));
  }

  /**
   * 广播
   * 
   * @param request - SendByAppRequest
   * @returns SendByAppResponse
   */
  async sendByApp(request: $_model.SendByAppRequest): Promise<$_model.SendByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAppWithOptions(request, headers, runtime);
  }

  /**
   * 指定设备发送
   * 
   * @param tmpReq - SendByDeviceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByDeviceResponse
   */
  async sendByDeviceWithOptions(tmpReq: $_model.SendByDeviceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByDeviceResponse> {
    tmpReq.validate();
    let request = new $_model.SendByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.androidShortPayload)) {
      request.androidShortPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidShortPayload, "AndroidShortPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayloadShrink)) {
      body["AndroidShortPayload"] = request.androidShortPayloadShrink;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceTokens)) {
      body["DeviceTokens"] = request.deviceTokens;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByDevice",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByDeviceResponse>(await this.callApi(params, req, runtime), new $_model.SendByDeviceResponse({}));
  }

  /**
   * 指定设备发送
   * 
   * @param request - SendByDeviceRequest
   * @returns SendByDeviceResponse
   */
  async sendByDevice(request: $_model.SendByDeviceRequest): Promise<$_model.SendByDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 指定设备文件发送
   * 
   * @param tmpReq - SendByDeviceFileIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByDeviceFileIdResponse
   */
  async sendByDeviceFileIdWithOptions(tmpReq: $_model.SendByDeviceFileIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByDeviceFileIdResponse> {
    tmpReq.validate();
    let request = new $_model.SendByDeviceFileIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.androidShortPayload)) {
      request.androidShortPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidShortPayload, "AndroidShortPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayloadShrink)) {
      body["AndroidShortPayload"] = request.androidShortPayloadShrink;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByDeviceFileId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByDeviceFileId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByDeviceFileIdResponse>(await this.callApi(params, req, runtime), new $_model.SendByDeviceFileIdResponse({}));
  }

  /**
   * 指定设备文件发送
   * 
   * @param request - SendByDeviceFileIdRequest
   * @returns SendByDeviceFileIdResponse
   */
  async sendByDeviceFileId(request: $_model.SendByDeviceFileIdRequest): Promise<$_model.SendByDeviceFileIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByDeviceFileIdWithOptions(request, headers, runtime);
  }

  /**
   * 根据筛选条件发送
   * 
   * @param tmpReq - SendByFilterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendByFilterResponse
   */
  async sendByFilterWithOptions(tmpReq: $_model.SendByFilterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendByFilterResponse> {
    tmpReq.validate();
    let request = new $_model.SendByFilterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!$dara.isNull(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!$dara.isNull(tmpReq.harmonyPayload)) {
      request.harmonyPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmonyPayload, "HarmonyPayload", "json");
    }

    if (!$dara.isNull(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!$dara.isNull(request.androidShortPayload)) {
      body["AndroidShortPayload"] = request.androidShortPayload;
    }

    if (!$dara.isNull(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.harmonyPayloadShrink)) {
      body["HarmonyPayload"] = request.harmonyPayloadShrink;
    }

    if (!$dara.isNull(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!$dara.isNull(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!$dara.isNull(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!$dara.isNull(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    if (!$dara.isNull(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    if (!$dara.isNull(request.callbackParams)) {
      body["callbackParams"] = request.callbackParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendByFilter",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByFilter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendByFilterResponse>(await this.callApi(params, req, runtime), new $_model.SendByFilterResponse({}));
  }

  /**
   * 根据筛选条件发送
   * 
   * @param request - SendByFilterRequest
   * @returns SendByFilterResponse
   */
  async sendByFilter(request: $_model.SendByFilterRequest): Promise<$_model.SendByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByFilterWithOptions(request, headers, runtime);
  }

  /**
   * 上传设备列表创建设备文件
   * 
   * @param request - UploadDeviceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDeviceResponse
   */
  async uploadDeviceWithOptions(request: $_model.UploadDeviceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDeviceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTokens)) {
      body["DeviceTokens"] = request.deviceTokens;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDevice",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/UploadDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UploadDeviceResponse({}));
  }

  /**
   * 上传设备列表创建设备文件
   * 
   * @param request - UploadDeviceRequest
   * @returns UploadDeviceResponse
   */
  async uploadDevice(request: $_model.UploadDeviceRequest): Promise<$_model.UploadDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadDeviceWithOptions(request, headers, runtime);
  }

}

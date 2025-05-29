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
    this._endpoint = this.getEndpoint("bailianmodelonchip", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建渠道签约申请
   * 
   * @param request - CreateChannelSignRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChannelSignResponse
   */
  async createChannelSignWithOptions(request: $_model.CreateChannelSignRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChannelSignResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelName)) {
      body["channelName"] = request.channelName;
    }

    if (!$dara.isNull(request.contact)) {
      body["contact"] = request.contact;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChannelSign",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/channel/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChannelSignResponse>(await this.callApi(params, req, runtime), new $_model.CreateChannelSignResponse({}));
  }

  /**
   * 创建渠道签约申请
   * 
   * @param request - CreateChannelSignRequest
   * @returns CreateChannelSignResponse
   */
  async createChannelSign(request: $_model.CreateChannelSignRequest): Promise<$_model.CreateChannelSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChannelSignWithOptions(request, headers, runtime);
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.euid)) {
      body["euid"] = request.euid;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/product/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductWithOptions(request, headers, runtime);
  }

  /**
   * 删除产品
   * 
   * @param request - DeleteProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(request: $_model.DeleteProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/product/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductResponse({}));
  }

  /**
   * 删除产品
   * 
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(request: $_model.DeleteProductRequest): Promise<$_model.DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductWithOptions(request, headers, runtime);
  }

  /**
   * 设备注册
   * 
   * @param request - DeviceRegisterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceRegisterResponse
   */
  async deviceRegisterWithOptions(request: $_model.DeviceRegisterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeviceRegisterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productKey)) {
      query["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.requestTime)) {
      query["requestTime"] = request.requestTime;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nonce)) {
      body["nonce"] = request.nonce;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeviceRegister",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeviceRegisterResponse>(await this.callApi(params, req, runtime), new $_model.DeviceRegisterResponse({}));
  }

  /**
   * 设备注册
   * 
   * @param request - DeviceRegisterRequest
   * @returns DeviceRegisterResponse
   */
  async deviceRegister(request: $_model.DeviceRegisterRequest): Promise<$_model.DeviceRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deviceRegisterWithOptions(request, headers, runtime);
  }

  /**
   * 查询渠道签约申请
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChannelSignResponse
   */
  async getChannelSignWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChannelSignResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChannelSign",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/channel/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChannelSignResponse>(await this.callApi(params, req, runtime), new $_model.GetChannelSignResponse({}));
  }

  /**
   * 查询渠道签约申请
   * @returns GetChannelSignResponse
   */
  async getChannelSign(): Promise<$_model.GetChannelSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChannelSignWithOptions(headers, runtime);
  }

  /**
   * 获取额度信息
   * 
   * @param request - GetQuotaInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaInfoResponse
   */
  async getQuotaInfoWithOptions(request: $_model.GetQuotaInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.recordId)) {
      body["recordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaInfo",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/quota/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaInfoResponse({}));
  }

  /**
   * 获取额度信息
   * 
   * @param request - GetQuotaInfoRequest
   * @returns GetQuotaInfoResponse
   */
  async getQuotaInfo(request: $_model.GetQuotaInfoRequest): Promise<$_model.GetQuotaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取网关校验Token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.nonce)) {
      body["nonce"] = request.nonce;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.requestTime)) {
      body["requestTime"] = request.requestTime;
    }

    if (!$dara.isNull(request.signature)) {
      body["signature"] = request.signature;
    }

    if (!$dara.isNull(request.tokenKey)) {
      body["tokenKey"] = request.tokenKey;
    }

    if (!$dara.isNull(request.tokenType)) {
      body["tokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/auth/v1/token/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * 获取网关校验Token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 半托管大模型应用请求
   * 
   * @param tmpReq - HalfLLMAppCallRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HalfLLMAppCallResponse
   */
  async halfLLMAppCallWithOptions(tmpReq: $_model.HalfLLMAppCallRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HalfLLMAppCallResponse> {
    tmpReq.validate();
    let request = new $_model.HalfLLMAppCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizParam)) {
      request.bizParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizParam, "bizParam", "json");
    }

    if (!$dara.isNull(tmpReq.modelTypeList)) {
      request.modelTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelTypeList, "modelTypeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.bizParamShrink)) {
      body["bizParam"] = request.bizParamShrink;
    }

    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.modelTypeListShrink)) {
      body["modelTypeList"] = request.modelTypeListShrink;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HalfLLMAppCall",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/half/llm/app/call`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HalfLLMAppCallResponse>(await this.callApi(params, req, runtime), new $_model.HalfLLMAppCallResponse({}));
  }

  /**
   * 半托管大模型应用请求
   * 
   * @param request - HalfLLMAppCallRequest
   * @returns HalfLLMAppCallResponse
   */
  async halfLLMAppCall(request: $_model.HalfLLMAppCallRequest): Promise<$_model.HalfLLMAppCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.halfLLMAppCallWithOptions(request, headers, runtime);
  }

  /**
   * 半托管大模型流式文本对话
   * 
   * @param request - HalfLLMChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HalfLLMChatResponse
   */
  async halfLLMChatWithOptions(request: $_model.HalfLLMChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HalfLLMChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableSearch)) {
      body["enableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.inputText)) {
      body["inputText"] = request.inputText;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HalfLLMChat",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/half/llm/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HalfLLMChatResponse>(await this.callApi(params, req, runtime), new $_model.HalfLLMChatResponse({}));
  }

  /**
   * 半托管大模型流式文本对话
   * 
   * @param request - HalfLLMChatRequest
   * @returns HalfLLMChatResponse
   */
  async halfLLMChat(request: $_model.HalfLLMChatRequest): Promise<$_model.HalfLLMChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.halfLLMChatWithOptions(request, headers, runtime);
  }

  /**
   * 半托管大模型文本合成语音
   * 
   * @param request - HalfLLMImageChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HalfLLMImageChatResponse
   */
  async halfLLMImageChatWithOptions(request: $_model.HalfLLMImageChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HalfLLMImageChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableSearch)) {
      body["enableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.inputText)) {
      body["inputText"] = request.inputText;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HalfLLMImageChat",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/half/llm/image/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HalfLLMImageChatResponse>(await this.callApi(params, req, runtime), new $_model.HalfLLMImageChatResponse({}));
  }

  /**
   * 半托管大模型文本合成语音
   * 
   * @param request - HalfLLMImageChatRequest
   * @returns HalfLLMImageChatResponse
   */
  async halfLLMImageChat(request: $_model.HalfLLMImageChatRequest): Promise<$_model.HalfLLMImageChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.halfLLMImageChatWithOptions(request, headers, runtime);
  }

  /**
   * 半托管大模型图片识别
   * 
   * @param request - HalfLLMImageOcrRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HalfLLMImageOcrResponse
   */
  async halfLLMImageOcrWithOptions(request: $_model.HalfLLMImageOcrRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HalfLLMImageOcrResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HalfLLMImageOcr",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/half/llm/image/ocr`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HalfLLMImageOcrResponse>(await this.callApi(params, req, runtime), new $_model.HalfLLMImageOcrResponse({}));
  }

  /**
   * 半托管大模型图片识别
   * 
   * @param request - HalfLLMImageOcrRequest
   * @returns HalfLLMImageOcrResponse
   */
  async halfLLMImageOcr(request: $_model.HalfLLMImageOcrRequest): Promise<$_model.HalfLLMImageOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.halfLLMImageOcrWithOptions(request, headers, runtime);
  }

  /**
   * 半托管大模型文本合成语音
   * 
   * @param request - HalfLLMTTSChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HalfLLMTTSChatResponse
   */
  async halfLLMTTSChatWithOptions(request: $_model.HalfLLMTTSChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HalfLLMTTSChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableSearch)) {
      body["enableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.pitchRate)) {
      body["pitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["sampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.speechRate)) {
      body["speechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    if (!$dara.isNull(request.voice)) {
      body["voice"] = request.voice;
    }

    if (!$dara.isNull(request.volume)) {
      body["volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HalfLLMTTSChat",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/half/llm/tts/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HalfLLMTTSChatResponse>(await this.callApi(params, req, runtime), new $_model.HalfLLMTTSChatResponse({}));
  }

  /**
   * 半托管大模型文本合成语音
   * 
   * @param request - HalfLLMTTSChatRequest
   * @returns HalfLLMTTSChatResponse
   */
  async halfLLMTTSChat(request: $_model.HalfLLMTTSChatRequest): Promise<$_model.HalfLLMTTSChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.halfLLMTTSChatWithOptions(request, headers, runtime);
  }

  /**
   * 设备列表分页查询
   * 
   * @param request - QueryDevicePageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicePageResponse
   */
  async queryDevicePageWithOptions(request: $_model.QueryDevicePageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.disableStatus)) {
      body["disableStatus"] = request.disableStatus;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicePage",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/page`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicePageResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicePageResponse({}));
  }

  /**
   * 设备列表分页查询
   * 
   * @param request - QueryDevicePageRequest
   * @returns QueryDevicePageResponse
   */
  async queryDevicePage(request: $_model.QueryDevicePageRequest): Promise<$_model.QueryDevicePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDevicePageWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询产品
   * 
   * @param request - QueryProductPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductPageResponse
   */
  async queryProductPageWithOptions(request: $_model.QueryProductPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProductPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductPage",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/product/page`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProductPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryProductPageResponse({}));
  }

  /**
   * 分页查询产品
   * 
   * @param request - QueryProductPageRequest
   * @returns QueryProductPageResponse
   */
  async queryProductPage(request: $_model.QueryProductPageRequest): Promise<$_model.QueryProductPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProductPageWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询产品额度
   * 
   * @param request - QueryProductQuotaPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductQuotaPageResponse
   */
  async queryProductQuotaPageWithOptions(request: $_model.QueryProductQuotaPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProductQuotaPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.purchaseTimeEnd)) {
      body["purchaseTimeEnd"] = request.purchaseTimeEnd;
    }

    if (!$dara.isNull(request.purchaseTimeStart)) {
      body["purchaseTimeStart"] = request.purchaseTimeStart;
    }

    if (!$dara.isNull(request.purchaseType)) {
      body["purchaseType"] = request.purchaseType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductQuotaPage",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/product/quotaPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProductQuotaPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryProductQuotaPageResponse({}));
  }

  /**
   * 分页查询产品额度
   * 
   * @param request - QueryProductQuotaPageRequest
   * @returns QueryProductQuotaPageResponse
   */
  async queryProductQuotaPage(request: $_model.QueryProductQuotaPageRequest): Promise<$_model.QueryProductQuotaPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProductQuotaPageWithOptions(request, headers, runtime);
  }

  /**
   * 查询token使用量
   * 
   * @param request - QueryTokenUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTokenUsageResponse
   */
  async queryTokenUsageWithOptions(request: $_model.QueryTokenUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTokenUsageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTokenUsage",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/token/usage/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTokenUsageResponse>(await this.callApi(params, req, runtime), new $_model.QueryTokenUsageResponse({}));
  }

  /**
   * 查询token使用量
   * 
   * @param request - QueryTokenUsageRequest
   * @returns QueryTokenUsageResponse
   */
  async queryTokenUsage(request: $_model.QueryTokenUsageRequest): Promise<$_model.QueryTokenUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTokenUsageWithOptions(request, headers, runtime);
  }

  /**
   * 撤销渠道签约申请
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeChannelSignResponse
   */
  async revokeChannelSignWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeChannelSignResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeChannelSign",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/channel/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeChannelSignResponse>(await this.callApi(params, req, runtime), new $_model.RevokeChannelSignResponse({}));
  }

  /**
   * 撤销渠道签约申请
   * @returns RevokeChannelSignResponse
   */
  async revokeChannelSign(): Promise<$_model.RevokeChannelSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeChannelSignWithOptions(headers, runtime);
  }

  /**
   * 修改设备状态
   * 
   * @param request - UpdateDeviceStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeviceStatusResponse
   */
  async updateDeviceStatusWithOptions(request: $_model.UpdateDeviceStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeviceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeviceStatus",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/update/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeviceStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeviceStatusResponse({}));
  }

  /**
   * 修改设备状态
   * 
   * @param request - UpdateDeviceStatusRequest
   * @returns UpdateDeviceStatusResponse
   */
  async updateDeviceStatus(request: $_model.UpdateDeviceStatusRequest): Promise<$_model.UpdateDeviceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeviceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 修改图片模型额度
   * 
   * @param request - UpdateImageQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageQuotaResponse
   */
  async updateImageQuotaWithOptions(request: $_model.UpdateImageQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.durationType)) {
      body["durationType"] = request.durationType;
    }

    if (!$dara.isNull(request.imageCount)) {
      body["imageCount"] = request.imageCount;
    }

    if (!$dara.isNull(request.licenseCount)) {
      body["licenseCount"] = request.licenseCount;
    }

    if (!$dara.isNull(request.packageType)) {
      body["packageType"] = request.packageType;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.purchaseType)) {
      body["purchaseType"] = request.purchaseType;
    }

    if (!$dara.isNull(request.recordId)) {
      body["recordId"] = request.recordId;
    }

    if (!$dara.isNull(request.settlementAmount)) {
      body["settlementAmount"] = request.settlementAmount;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.unitPrice)) {
      body["unitPrice"] = request.unitPrice;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageQuota",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/quota/update/image`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageQuotaResponse({}));
  }

  /**
   * 修改图片模型额度
   * 
   * @param request - UpdateImageQuotaRequest
   * @returns UpdateImageQuotaResponse
   */
  async updateImageQuota(request: $_model.UpdateImageQuotaRequest): Promise<$_model.UpdateImageQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateImageQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 修改额度
   * 
   * @param request - UpdateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaResponse
   */
  async updateQuotaWithOptions(request: $_model.UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.durationType)) {
      body["durationType"] = request.durationType;
    }

    if (!$dara.isNull(request.licenseCount)) {
      body["licenseCount"] = request.licenseCount;
    }

    if (!$dara.isNull(request.maxQps)) {
      body["maxQps"] = request.maxQps;
    }

    if (!$dara.isNull(request.packageType)) {
      body["packageType"] = request.packageType;
    }

    if (!$dara.isNull(request.productKey)) {
      body["productKey"] = request.productKey;
    }

    if (!$dara.isNull(request.purchaseType)) {
      body["purchaseType"] = request.purchaseType;
    }

    if (!$dara.isNull(request.recordId)) {
      body["recordId"] = request.recordId;
    }

    if (!$dara.isNull(request.settlementAmount)) {
      body["settlementAmount"] = request.settlementAmount;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.tokenNumber)) {
      body["tokenNumber"] = request.tokenNumber;
    }

    if (!$dara.isNull(request.unitPrice)) {
      body["unitPrice"] = request.unitPrice;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuota",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/v1/quota/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaResponse({}));
  }

  /**
   * 修改额度
   * 
   * @param request - UpdateQuotaRequest
   * @returns UpdateQuotaResponse
   */
  async updateQuota(request: $_model.UpdateQuotaRequest): Promise<$_model.UpdateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(request, headers, runtime);
  }

}

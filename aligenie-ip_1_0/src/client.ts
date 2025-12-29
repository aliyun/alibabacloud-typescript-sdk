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
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @param headers - AddCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCartoonResponse
   */
  async addCartoonWithOptions(request: $_model.AddCartoonRequest, headers: $_model.AddCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.startVideoMd5)) {
      body["StartVideoMd5"] = request.startVideoMd5;
    }

    if (!$dara.isNull(request.startVideoUrl)) {
      body["StartVideoUrl"] = request.startVideoUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCartoonResponse>(await this.callApi(params, req, runtime), new $_model.AddCartoonResponse({}));
  }

  /**
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @returns AddCartoonResponse
   */
  async addCartoon(request: $_model.AddCartoonRequest): Promise<$_model.AddCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddCartoonHeaders({ });
    return await this.addCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 新增自定义问答
   * 
   * @param tmpReq - AddCustomQARequest
   * @param headers - AddCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAResponse
   */
  async addCustomQAWithOptions(tmpReq: $_model.AddCustomQARequest, headers: $_model.AddCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomQAResponse> {
    tmpReq.validate();
    let request = new $_model.AddCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomQAResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomQAResponse({}));
  }

  /**
   * 新增自定义问答
   * 
   * @param request - AddCustomQARequest
   * @returns AddCustomQAResponse
   */
  async addCustomQA(request: $_model.AddCustomQARequest): Promise<$_model.AddCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddCustomQAHeaders({ });
    return await this.addCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 添加问答V2
   * 
   * @param tmpReq - AddCustomQAV2Request
   * @param headers - AddCustomQAV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2WithOptions(tmpReq: $_model.AddCustomQAV2Request, headers: $_model.AddCustomQAV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomQAV2Response> {
    tmpReq.validate();
    let request = new $_model.AddCustomQAV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomQAV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addQAV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomQAV2Response>(await this.callApi(params, req, runtime), new $_model.AddCustomQAV2Response({}));
  }

  /**
   * 添加问答V2
   * 
   * @param request - AddCustomQAV2Request
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2(request: $_model.AddCustomQAV2Request): Promise<$_model.AddCustomQAV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddCustomQAV2Headers({ });
    return await this.addCustomQAV2WithOptions(request, headers, runtime);
  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @param headers - AddMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplateWithOptions(request: $_model.AddMessageTemplateRequest, headers: $_model.AddMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMessageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddMessageTemplateResponse({}));
  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplate(request: $_model.AddMessageTemplateRequest): Promise<$_model.AddMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddMessageTemplateHeaders({ });
    return await this.addMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param tmpReq - AddOrUpdateDisPlayModesRequest
   * @param headers - AddOrUpdateDisPlayModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModesWithOptions(tmpReq: $_model.AddOrUpdateDisPlayModesRequest, headers: $_model.AddOrUpdateDisPlayModesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrUpdateDisPlayModesResponse> {
    tmpReq.validate();
    let request = new $_model.AddOrUpdateDisPlayModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateDisPlayModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateDisPlayModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrUpdateDisPlayModesResponse>(await this.callApi(params, req, runtime), new $_model.AddOrUpdateDisPlayModesResponse({}));
  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param request - AddOrUpdateDisPlayModesRequest
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModes(request: $_model.AddOrUpdateDisPlayModesRequest): Promise<$_model.AddOrUpdateDisPlayModesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddOrUpdateDisPlayModesHeaders({ });
    return await this.addOrUpdateDisPlayModesWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param tmpReq - AddOrUpdateHotelSettingRequest
   * @param headers - AddOrUpdateHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSettingWithOptions(tmpReq: $_model.AddOrUpdateHotelSettingRequest, headers: $_model.AddOrUpdateHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrUpdateHotelSettingResponse> {
    tmpReq.validate();
    let request = new $_model.AddOrUpdateHotelSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    if (!$dara.isNull(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    if (!$dara.isNull(tmpReq.nightMode)) {
      request.nightModeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nightMode, "NightMode", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    if (!$dara.isNull(request.nightModeShrink)) {
      body["NightMode"] = request.nightModeShrink;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrUpdateHotelSettingResponse>(await this.callApi(params, req, runtime), new $_model.AddOrUpdateHotelSettingResponse({}));
  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param request - AddOrUpdateHotelSettingRequest
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSetting(request: $_model.AddOrUpdateHotelSettingRequest): Promise<$_model.AddOrUpdateHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddOrUpdateHotelSettingHeaders({ });
    return await this.addOrUpdateHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param tmpReq - AddOrUpdateScreenSaverRequest
   * @param headers - AddOrUpdateScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaverWithOptions(tmpReq: $_model.AddOrUpdateScreenSaverRequest, headers: $_model.AddOrUpdateScreenSaverHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrUpdateScreenSaverResponse> {
    tmpReq.validate();
    let request = new $_model.AddOrUpdateScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrUpdateScreenSaverResponse>(await this.callApi(params, req, runtime), new $_model.AddOrUpdateScreenSaverResponse({}));
  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param request - AddOrUpdateScreenSaverRequest
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaver(request: $_model.AddOrUpdateScreenSaverRequest): Promise<$_model.AddOrUpdateScreenSaverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddOrUpdateScreenSaverHeaders({ });
    return await this.addOrUpdateScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @param headers - AddOrUpdateWelcomeTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeTextWithOptions(request: $_model.AddOrUpdateWelcomeTextRequest, headers: $_model.AddOrUpdateWelcomeTextHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrUpdateWelcomeTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.musicUrl)) {
      body["MusicUrl"] = request.musicUrl;
    }

    if (!$dara.isNull(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateWelcomeText",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateWelcomeText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrUpdateWelcomeTextResponse>(await this.callApi(params, req, runtime), new $_model.AddOrUpdateWelcomeTextResponse({}));
  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeText(request: $_model.AddOrUpdateWelcomeTextRequest): Promise<$_model.AddOrUpdateWelcomeTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddOrUpdateWelcomeTextHeaders({ });
    return await this.addOrUpdateWelcomeTextWithOptions(request, headers, runtime);
  }

  /**
   * 审批酒店
   * 
   * @param tmpReq - AuditHotelRequest
   * @param headers - AuditHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditHotelResponse
   */
  async auditHotelWithOptions(tmpReq: $_model.AuditHotelRequest, headers: $_model.AuditHotelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuditHotelResponse> {
    tmpReq.validate();
    let request = new $_model.AuditHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.auditHotelReq)) {
      request.auditHotelReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditHotelReq, "AuditHotelReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auditHotelReqShrink)) {
      query["AuditHotelReq"] = request.auditHotelReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/auditHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuditHotelResponse>(await this.callApi(params, req, runtime), new $_model.AuditHotelResponse({}));
  }

  /**
   * 审批酒店
   * 
   * @param request - AuditHotelRequest
   * @returns AuditHotelResponse
   */
  async auditHotel(request: $_model.AuditHotelRequest): Promise<$_model.AuditHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuditHotelHeaders({ });
    return await this.auditHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建房间
   * 
   * @param tmpReq - BatchAddHotelRoomRequest
   * @param headers - BatchAddHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoomWithOptions(tmpReq: $_model.BatchAddHotelRoomRequest, headers: $_model.BatchAddHotelRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddHotelRoomResponse> {
    tmpReq.validate();
    let request = new $_model.BatchAddHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchAddHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddHotelRoomResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddHotelRoomResponse({}));
  }

  /**
   * 批量创建房间
   * 
   * @param request - BatchAddHotelRoomRequest
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoom(request: $_model.BatchAddHotelRoomRequest): Promise<$_model.BatchAddHotelRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchAddHotelRoomHeaders({ });
    return await this.batchAddHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除房间
   * 
   * @param tmpReq - BatchDeleteHotelRoomRequest
   * @param headers - BatchDeleteHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoomWithOptions(tmpReq: $_model.BatchDeleteHotelRoomRequest, headers: $_model.BatchDeleteHotelRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteHotelRoomResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchDeleteHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteHotelRoomResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteHotelRoomResponse({}));
  }

  /**
   * 批量删除房间
   * 
   * @param request - BatchDeleteHotelRoomRequest
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoom(request: $_model.BatchDeleteHotelRoomRequest): Promise<$_model.BatchDeleteHotelRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchDeleteHotelRoomHeaders({ });
    return await this.batchDeleteHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @param headers - CheckoutWithAKHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAKWithOptions(request: $_model.CheckoutWithAKRequest, headers: $_model.CheckoutWithAKHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckoutWithAKResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckoutWithAK",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/checkoutWithAK`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckoutWithAKResponse>(await this.callApi(params, req, runtime), new $_model.CheckoutWithAKResponse({}));
  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAK(request: $_model.CheckoutWithAKRequest): Promise<$_model.CheckoutWithAKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckoutWithAKHeaders({ });
    return await this.checkoutWithAKWithOptions(request, headers, runtime);
  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @param headers - ChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuthWithOptions(request: $_model.ChildAccountAuthRequest, headers: $_model.ChildAccountAuthHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChildAccountAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["Account"] = request.account;
    }

    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/childAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChildAccountAuthResponse>(await this.callApi(params, req, runtime), new $_model.ChildAccountAuthResponse({}));
  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuth(request: $_model.ChildAccountAuthRequest): Promise<$_model.ChildAccountAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChildAccountAuthHeaders({ });
    return await this.childAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间内设备
   * 
   * @param tmpReq - ControlRoomDeviceRequest
   * @param headers - ControlRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDeviceWithOptions(tmpReq: $_model.ControlRoomDeviceRequest, headers: $_model.ControlRoomDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ControlRoomDeviceResponse> {
    tmpReq.validate();
    let request = new $_model.ControlRoomDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cmd)) {
      body["Cmd"] = request.cmd;
    }

    if (!$dara.isNull(request.deviceIndex)) {
      body["DeviceIndex"] = request.deviceIndex;
    }

    if (!$dara.isNull(request.deviceNumber)) {
      body["DeviceNumber"] = request.deviceNumber;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      body["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ControlRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/controlRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ControlRoomDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ControlRoomDeviceResponse({}));
  }

  /**
   * 控制房间内设备
   * 
   * @param request - ControlRoomDeviceRequest
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDevice(request: $_model.ControlRoomDeviceRequest): Promise<$_model.ControlRoomDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ControlRoomDeviceHeaders({ });
    return await this.controlRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 创建酒店项目
   * 
   * @param tmpReq - CreateHotelRequest
   * @param headers - CreateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelResponse
   */
  async createHotelWithOptions(tmpReq: $_model.CreateHotelRequest, headers: $_model.CreateHotelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHotelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!$dara.isNull(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.relatedPk)) {
      body["RelatedPk"] = request.relatedPk;
    }

    if (!$dara.isNull(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHotelResponse>(await this.callApi(params, req, runtime), new $_model.CreateHotelResponse({}));
  }

  /**
   * 创建酒店项目
   * 
   * @param request - CreateHotelRequest
   * @returns CreateHotelResponse
   */
  async createHotel(request: $_model.CreateHotelRequest): Promise<$_model.CreateHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateHotelHeaders({ });
    return await this.createHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建闹钟
   * 
   * @param tmpReq - CreateHotelAlarmRequest
   * @param headers - CreateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarmWithOptions(tmpReq: $_model.CreateHotelAlarmRequest, headers: $_model.CreateHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHotelAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.CreateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.musicType)) {
      body["MusicType"] = request.musicType;
    }

    if (!$dara.isNull(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    if (!$dara.isNull(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHotelAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateHotelAlarmResponse({}));
  }

  /**
   * 批量创建闹钟
   * 
   * @param request - CreateHotelAlarmRequest
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarm(request: $_model.CreateHotelAlarmRequest): Promise<$_model.CreateHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateHotelAlarmHeaders({ });
    return await this.createHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param tmpReq - CreateRcuSceneRequest
   * @param headers - CreateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRcuSceneResponse
   */
  async createRcuSceneWithOptions(tmpReq: $_model.CreateRcuSceneRequest, headers: $_model.CreateRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRcuSceneResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRcuSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateRcuSceneResponse({}));
  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param request - CreateRcuSceneRequest
   * @returns CreateRcuSceneResponse
   */
  async createRcuScene(request: $_model.CreateRcuSceneRequest): Promise<$_model.CreateRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateRcuSceneHeaders({ });
    return await this.createRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @param headers - DeleteCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCartoonResponse
   */
  async deleteCartoonWithOptions(request: $_model.DeleteCartoonRequest, headers: $_model.DeleteCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCartoonResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCartoonResponse({}));
  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @returns DeleteCartoonResponse
   */
  async deleteCartoon(request: $_model.DeleteCartoonRequest): Promise<$_model.DeleteCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteCartoonHeaders({ });
    return await this.deleteCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 删除自定义问答
   * 
   * @param tmpReq - DeleteCustomQARequest
   * @param headers - DeleteCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQAWithOptions(tmpReq: $_model.DeleteCustomQARequest, headers: $_model.DeleteCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomQAResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customQAIds)) {
      request.customQAIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customQAIds, "CustomQAIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customQAIdsShrink)) {
      body["CustomQAIds"] = request.customQAIdsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomQAResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomQAResponse({}));
  }

  /**
   * 删除自定义问答
   * 
   * @param request - DeleteCustomQARequest
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQA(request: $_model.DeleteCustomQARequest): Promise<$_model.DeleteCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteCustomQAHeaders({ });
    return await this.deleteCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店闹钟
   * 
   * @param tmpReq - DeleteHotelAlarmRequest
   * @param headers - DeleteHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarmWithOptions(tmpReq: $_model.DeleteHotelAlarmRequest, headers: $_model.DeleteHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHotelAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHotelAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHotelAlarmResponse({}));
  }

  /**
   * 删除酒店闹钟
   * 
   * @param request - DeleteHotelAlarmRequest
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarm(request: $_model.DeleteHotelAlarmRequest): Promise<$_model.DeleteHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteHotelAlarmHeaders({ });
    return await this.deleteHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @param headers - DeleteHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItemWithOptions(request: $_model.DeleteHotelSceneBookItemRequest, headers: $_model.DeleteHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHotelSceneBookItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItem(request: $_model.DeleteHotelSceneBookItemRequest): Promise<$_model.DeleteHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteHotelSceneBookItemHeaders({ });
    return await this.deleteHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @param headers - DeleteHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSettingWithOptions(request: $_model.DeleteHotelSettingRequest, headers: $_model.DeleteHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHotelSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHotelSettingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHotelSettingResponse({}));
  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSetting(request: $_model.DeleteHotelSettingRequest): Promise<$_model.DeleteHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteHotelSettingHeaders({ });
    return await this.deleteHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @param headers - DeleteMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplateWithOptions(request: $_model.DeleteMessageTemplateRequest, headers: $_model.DeleteMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageTemplateResponse({}));
  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplate(request: $_model.DeleteMessageTemplateRequest): Promise<$_model.DeleteMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMessageTemplateHeaders({ });
    return await this.deleteMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @param headers - DeleteRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuSceneWithOptions(request: $_model.DeleteRcuSceneRequest, headers: $_model.DeleteRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRcuSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRcuSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRcuSceneResponse({}));
  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuScene(request: $_model.DeleteRcuSceneRequest): Promise<$_model.DeleteRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteRcuSceneHeaders({ });
    return await this.deleteRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 设备控制
   * 
   * @param tmpReq - DeviceControlRequest
   * @param headers - DeviceControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceControlResponse
   */
  async deviceControlWithOptions(tmpReq: $_model.DeviceControlRequest, headers: $_model.DeviceControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeviceControlResponse> {
    tmpReq.validate();
    let request = new $_model.DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeviceControl",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deviceControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeviceControlResponse>(await this.callApi(params, req, runtime), new $_model.DeviceControlResponse({}));
  }

  /**
   * 设备控制
   * 
   * @param request - DeviceControlRequest
   * @returns DeviceControlResponse
   */
  async deviceControl(request: $_model.DeviceControlRequest): Promise<$_model.DeviceControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @param headers - ExecuteSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSceneResponse
   */
  async executeSceneWithOptions(request: $_model.ExecuteSceneRequest, headers: $_model.ExecuteSceneHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/executeScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSceneResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSceneResponse({}));
  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @returns ExecuteSceneResponse
   */
  async executeScene(request: $_model.ExecuteSceneRequest): Promise<$_model.ExecuteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExecuteSceneHeaders({ });
    return await this.executeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @param headers - GetBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQAWithOptions(request: $_model.GetBasicInfoQARequest, headers: $_model.GetBasicInfoQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicInfoQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicInfoQAResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicInfoQAResponse({}));
  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQA(request: $_model.GetBasicInfoQARequest): Promise<$_model.GetBasicInfoQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetBasicInfoQAHeaders({ });
    return await this.getBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @param headers - GetCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCartoonResponse
   */
  async getCartoonWithOptions(request: $_model.GetCartoonRequest, headers: $_model.GetCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCartoonResponse>(await this.callApi(params, req, runtime), new $_model.GetCartoonResponse({}));
  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @returns GetCartoonResponse
   */
  async getCartoon(request: $_model.GetCartoonRequest): Promise<$_model.GetCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCartoonHeaders({ });
    return await this.getCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param tmpReq - GetHotelContactByGenieDeviceRequest
   * @param headers - GetHotelContactByGenieDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDeviceWithOptions(tmpReq: $_model.GetHotelContactByGenieDeviceRequest, headers: $_model.GetHotelContactByGenieDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelContactByGenieDeviceResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelContactByGenieDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContactByGenieDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByGenieDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelContactByGenieDeviceResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelContactByGenieDeviceResponse({}));
  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param request - GetHotelContactByGenieDeviceRequest
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDevice(request: $_model.GetHotelContactByGenieDeviceRequest): Promise<$_model.GetHotelContactByGenieDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelContactByGenieDeviceHeaders({ });
    return await this.getHotelContactByGenieDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactByNumberRequest
   * @param headers - GetHotelContactByNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumberWithOptions(tmpReq: $_model.GetHotelContactByNumberRequest, headers: $_model.GetHotelContactByNumberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelContactByNumberResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelContactByNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContactByNumber",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelContactByNumberResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelContactByNumberResponse({}));
  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param request - GetHotelContactByNumberRequest
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumber(request: $_model.GetHotelContactByNumberRequest): Promise<$_model.GetHotelContactByNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelContactByNumberHeaders({ });
    return await this.getHotelContactByNumberWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactsRequest
   * @param headers - GetHotelContactsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactsResponse
   */
  async getHotelContactsWithOptions(tmpReq: $_model.GetHotelContactsRequest, headers: $_model.GetHotelContactsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelContactsResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContacts",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelContactsResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelContactsResponse({}));
  }

  /**
   * 获取酒店联系人
   * 
   * @param request - GetHotelContactsRequest
   * @returns GetHotelContactsResponse
   */
  async getHotelContacts(request: $_model.GetHotelContactsRequest): Promise<$_model.GetHotelContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelContactsHeaders({ });
    return await this.getHotelContactsWithOptions(request, headers, runtime);
  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param tmpReq - GetHotelHomeBackImageAndModesRequest
   * @param headers - GetHotelHomeBackImageAndModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModesWithOptions(tmpReq: $_model.GetHotelHomeBackImageAndModesRequest, headers: $_model.GetHotelHomeBackImageAndModesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelHomeBackImageAndModesResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelHomeBackImageAndModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelHomeBackImageAndModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelHomeBackImageAndModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelHomeBackImageAndModesResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelHomeBackImageAndModesResponse({}));
  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param request - GetHotelHomeBackImageAndModesRequest
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModes(request: $_model.GetHotelHomeBackImageAndModesRequest): Promise<$_model.GetHotelHomeBackImageAndModesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelHomeBackImageAndModesHeaders({ });
    return await this.getHotelHomeBackImageAndModesWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeRequest
   * @param headers - GetHotelNoticeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeResponse
   */
  async getHotelNoticeWithOptions(tmpReq: $_model.GetHotelNoticeRequest, headers: $_model.GetHotelNoticeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelNoticeResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelNoticeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelNotice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNotice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelNoticeResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelNoticeResponse({}));
  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeRequest
   * @returns GetHotelNoticeResponse
   */
  async getHotelNotice(request: $_model.GetHotelNoticeRequest): Promise<$_model.GetHotelNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelNoticeHeaders({ });
    return await this.getHotelNoticeWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeV2Request
   * @param headers - GetHotelNoticeV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2WithOptions(tmpReq: $_model.GetHotelNoticeV2Request, headers: $_model.GetHotelNoticeV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelNoticeV2Response> {
    tmpReq.validate();
    let request = new $_model.GetHotelNoticeV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelNoticeV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNoticeV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelNoticeV2Response>(await this.callApi(params, req, runtime), new $_model.GetHotelNoticeV2Response({}));
  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeV2Request
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2(request: $_model.GetHotelNoticeV2Request): Promise<$_model.GetHotelNoticeV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelNoticeV2Headers({ });
    return await this.getHotelNoticeV2WithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店订单详情
   * 
   * @param tmpReq - GetHotelOrderDetailRequest
   * @param headers - GetHotelOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetailWithOptions(tmpReq: $_model.GetHotelOrderDetailRequest, headers: $_model.GetHotelOrderDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelOrderDetailResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelOrderDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelOrderDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelOrderDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelOrderDetailResponse({}));
  }

  /**
   * 获取酒店订单详情
   * 
   * @param request - GetHotelOrderDetailRequest
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetail(request: $_model.GetHotelOrderDetailRequest): Promise<$_model.GetHotelOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelOrderDetailHeaders({ });
    return await this.getHotelOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @param headers - GetHotelRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDeviceWithOptions(request: $_model.GetHotelRoomDeviceRequest, headers: $_model.GetHotelRoomDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelRoomDeviceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelRoomDeviceResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelRoomDeviceResponse({}));
  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDevice(request: $_model.GetHotelRoomDeviceRequest): Promise<$_model.GetHotelRoomDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelRoomDeviceHeaders({ });
    return await this.getHotelRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取推荐语料
   * 
   * @param tmpReq - GetHotelSampleUtterancesRequest
   * @param headers - GetHotelSampleUtterancesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterancesWithOptions(tmpReq: $_model.GetHotelSampleUtterancesRequest, headers: $_model.GetHotelSampleUtterancesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelSampleUtterancesResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelSampleUtterancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSampleUtterances",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSampleUtterances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelSampleUtterancesResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelSampleUtterancesResponse({}));
  }

  /**
   * 获取推荐语料
   * 
   * @param request - GetHotelSampleUtterancesRequest
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterances(request: $_model.GetHotelSampleUtterancesRequest): Promise<$_model.GetHotelSampleUtterancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelSampleUtterancesHeaders({ });
    return await this.getHotelSampleUtterancesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @param headers - GetHotelSceneItemDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetailWithOptions(request: $_model.GetHotelSceneItemDetailRequest, headers: $_model.GetHotelSceneItemDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelSceneItemDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSceneItemDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSceneItemDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelSceneItemDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelSceneItemDetailResponse({}));
  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetail(request: $_model.GetHotelSceneItemDetailRequest): Promise<$_model.GetHotelSceneItemDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelSceneItemDetailHeaders({ });
    return await this.getHotelSceneItemDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店屏保
   * 
   * @param tmpReq - GetHotelScreenSaverRequest
   * @param headers - GetHotelScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaverWithOptions(tmpReq: $_model.GetHotelScreenSaverRequest, headers: $_model.GetHotelScreenSaverHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelScreenSaverResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotelScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelScreenSaverResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelScreenSaverResponse({}));
  }

  /**
   * 获取酒店屏保
   * 
   * @param request - GetHotelScreenSaverRequest
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaver(request: $_model.GetHotelScreenSaverRequest): Promise<$_model.GetHotelScreenSaverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelScreenSaverHeaders({ });
    return await this.getHotelScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @param headers - GetHotelScreenSaverStyleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyleWithOptions(request: $_model.GetHotelScreenSaverStyleRequest, headers: $_model.GetHotelScreenSaverStyleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelScreenSaverStyleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelScreenSaverStyle",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaverStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelScreenSaverStyleResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelScreenSaverStyleResponse({}));
  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyle(request: $_model.GetHotelScreenSaverStyleRequest): Promise<$_model.GetHotelScreenSaverStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelScreenSaverStyleHeaders({ });
    return await this.getHotelScreenSaverStyleWithOptions(request, headers, runtime);
  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @param headers - GetHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSettingResponse
   */
  async getHotelSettingWithOptions(request: $_model.GetHotelSettingRequest, headers: $_model.GetHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotelSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotelSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetHotelSettingResponse({}));
  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @returns GetHotelSettingResponse
   */
  async getHotelSetting(request: $_model.GetHotelSettingRequest): Promise<$_model.GetHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotelSettingHeaders({ });
    return await this.getHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 关联产品列表查看
   * 
   * @param headers - GetRelationProductListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRelationProductListResponse
   */
  async getRelationProductListWithOptions(headers: $_model.GetRelationProductListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetRelationProductListResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRelationProductList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getRelationProductList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRelationProductListResponse>(await this.callApi(params, req, runtime), new $_model.GetRelationProductListResponse({}));
  }

  /**
   * 关联产品列表查看
   * @returns GetRelationProductListResponse
   */
  async getRelationProductList(): Promise<$_model.GetRelationProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetRelationProductListHeaders({ });
    return await this.getRelationProductListWithOptions(headers, runtime);
  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @param headers - GetUnionIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnionIdResponse
   */
  async getUnionIdWithOptions(request: $_model.GetUnionIdRequest, headers: $_model.GetUnionIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUnionIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeKey)) {
      body["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      body["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.idType)) {
      body["IdType"] = request.idType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUnionId",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getUnionId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUnionIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUnionIdResponse({}));
  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @returns GetUnionIdResponse
   */
  async getUnionId(request: $_model.GetUnionIdRequest): Promise<$_model.GetUnionIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUnionIdHeaders({ });
    return await this.getUnionIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @param headers - GetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusicWithOptions(request: $_model.GetWelcomeTextAndMusicRequest, headers: $_model.GetWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetWelcomeTextAndMusicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new $_model.GetWelcomeTextAndMusicResponse({}));
  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusic(request: $_model.GetWelcomeTextAndMusicRequest): Promise<$_model.GetWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetWelcomeTextAndMusicHeaders({ });
    return await this.getWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @param headers - HotelQrBindHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelQrBindResponse
   */
  async hotelQrBindWithOptions(request: $_model.HotelQrBindRequest, headers: $_model.HotelQrBindHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelQrBindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelQrBind",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/hotelQrBind`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelQrBindResponse>(await this.callApi(params, req, runtime), new $_model.HotelQrBindResponse({}));
  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @returns HotelQrBindResponse
   */
  async hotelQrBind(request: $_model.HotelQrBindRequest): Promise<$_model.HotelQrBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelQrBindHeaders({ });
    return await this.hotelQrBindWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入酒店配置
   * 
   * @param tmpReq - ImportHotelConfigRequest
   * @param headers - ImportHotelConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfigWithOptions(tmpReq: $_model.ImportHotelConfigRequest, headers: $_model.ImportHotelConfigHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ImportHotelConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ImportHotelConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.importHotelConfig)) {
      request.importHotelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importHotelConfig, "ImportHotelConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.importHotelConfigShrink)) {
      body["ImportHotelConfig"] = request.importHotelConfigShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportHotelConfig",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importHotelConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportHotelConfigResponse>(await this.callApi(params, req, runtime), new $_model.ImportHotelConfigResponse({}));
  }

  /**
   * 批量导入酒店配置
   * 
   * @param request - ImportHotelConfigRequest
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfig(request: $_model.ImportHotelConfigRequest): Promise<$_model.ImportHotelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ImportHotelConfigHeaders({ });
    return await this.importHotelConfigWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param tmpReq - ImportRoomControlDevicesRequest
   * @param headers - ImportRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevicesWithOptions(tmpReq: $_model.ImportRoomControlDevicesRequest, headers: $_model.ImportRoomControlDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ImportRoomControlDevicesResponse> {
    tmpReq.validate();
    let request = new $_model.ImportRoomControlDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.locationDevices)) {
      request.locationDevicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDevices, "LocationDevices", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableInfraredDeviceImport)) {
      body["EnableInfraredDeviceImport"] = request.enableInfraredDeviceImport;
    }

    if (!$dara.isNull(request.enableMeshDeviceImport)) {
      body["EnableMeshDeviceImport"] = request.enableMeshDeviceImport;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.locationDevicesShrink)) {
      body["LocationDevices"] = request.locationDevicesShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ImportRoomControlDevicesResponse({}));
  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param request - ImportRoomControlDevicesRequest
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevices(request: $_model.ImportRoomControlDevicesRequest): Promise<$_model.ImportRoomControlDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ImportRoomControlDevicesHeaders({ });
    return await this.importRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 导入房间内精灵场景
   * 
   * @param tmpReq - ImportRoomGenieScenesRequest
   * @param headers - ImportRoomGenieScenesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenesWithOptions(tmpReq: $_model.ImportRoomGenieScenesRequest, headers: $_model.ImportRoomGenieScenesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ImportRoomGenieScenesResponse> {
    tmpReq.validate();
    let request = new $_model.ImportRoomGenieScenesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneList)) {
      request.sceneListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneList, "SceneList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sceneListShrink)) {
      body["SceneList"] = request.sceneListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportRoomGenieScenes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomGenieScenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportRoomGenieScenesResponse>(await this.callApi(params, req, runtime), new $_model.ImportRoomGenieScenesResponse({}));
  }

  /**
   * 导入房间内精灵场景
   * 
   * @param request - ImportRoomGenieScenesRequest
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenes(request: $_model.ImportRoomGenieScenesRequest): Promise<$_model.ImportRoomGenieScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ImportRoomGenieScenesHeaders({ });
    return await this.importRoomGenieScenesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订新增
   * 
   * @param tmpReq - InsertHotelSceneBookItemRequest
   * @param headers - InsertHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItemWithOptions(tmpReq: $_model.InsertHotelSceneBookItemRequest, headers: $_model.InsertHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertHotelSceneBookItemResponse> {
    tmpReq.validate();
    let request = new $_model.InsertHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addHotelSceneItemReq)) {
      request.addHotelSceneItemReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addHotelSceneItemReq, "AddHotelSceneItemReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addHotelSceneItemReqShrink)) {
      query["AddHotelSceneItemReq"] = request.addHotelSceneItemReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/insertHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new $_model.InsertHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订新增
   * 
   * @param request - InsertHotelSceneBookItemRequest
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItem(request: $_model.InsertHotelSceneBookItemRequest): Promise<$_model.InsertHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertHotelSceneBookItemHeaders({ });
    return await this.insertHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @param headers - InvokeRobotPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPushWithOptions(request: $_model.InvokeRobotPushRequest, headers: $_model.InvokeRobotPushHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeRobotPushResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.pushType)) {
      body["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeRobotPush",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/invokeRobotPush`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeRobotPushResponse>(await this.callApi(params, req, runtime), new $_model.InvokeRobotPushResponse({}));
  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPush(request: $_model.InvokeRobotPushRequest): Promise<$_model.InvokeRobotPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvokeRobotPushHeaders({ });
    return await this.invokeRobotPushWithOptions(request, headers, runtime);
  }

  /**
   * 查询省份
   * 
   * @param headers - ListAllProvincesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProvincesResponse
   */
  async listAllProvincesWithOptions(headers: $_model.ListAllProvincesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllProvincesResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllProvinces",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listAllProvinces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllProvincesResponse>(await this.callApi(params, req, runtime), new $_model.ListAllProvincesResponse({}));
  }

  /**
   * 查询省份
   * @returns ListAllProvincesResponse
   */
  async listAllProvinces(): Promise<$_model.ListAllProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAllProvincesHeaders({ });
    return await this.listAllProvincesWithOptions(headers, runtime);
  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @param headers - ListCitiesByProvinceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvinceWithOptions(request: $_model.ListCitiesByProvinceRequest, headers: $_model.ListCitiesByProvinceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCitiesByProvinceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCitiesByProvince",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCitiesByProvince`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCitiesByProvinceResponse>(await this.callApi(params, req, runtime), new $_model.ListCitiesByProvinceResponse({}));
  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvince(request: $_model.ListCitiesByProvinceRequest): Promise<$_model.ListCitiesByProvinceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCitiesByProvinceHeaders({ });
    return await this.listCitiesByProvinceWithOptions(request, headers, runtime);
  }

  /**
   * 查询自定义问答列表
   * 
   * @param tmpReq - ListCustomQARequest
   * @param headers - ListCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomQAResponse
   */
  async listCustomQAWithOptions(tmpReq: $_model.ListCustomQARequest, headers: $_model.ListCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomQAResponse> {
    tmpReq.validate();
    let request = new $_model.ListCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomQAResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomQAResponse({}));
  }

  /**
   * 查询自定义问答列表
   * 
   * @param request - ListCustomQARequest
   * @returns ListCustomQAResponse
   */
  async listCustomQA(request: $_model.ListCustomQARequest): Promise<$_model.ListCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCustomQAHeaders({ });
    return await this.listCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @param headers - ListDialogueTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplateWithOptions(request: $_model.ListDialogueTemplateRequest, headers: $_model.ListDialogueTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDialogueTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialogueTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listDialogueTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDialogueTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListDialogueTemplateResponse({}));
  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplate(request: $_model.ListDialogueTemplateRequest): Promise<$_model.ListDialogueTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDialogueTemplateHeaders({ });
    return await this.listDialogueTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店闹钟
   * 
   * @param tmpReq - ListHotelAlarmRequest
   * @param headers - ListHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarmWithOptions(tmpReq: $_model.ListHotelAlarmRequest, headers: $_model.ListHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelAlarmList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelAlarmResponse({}));
  }

  /**
   * 查询酒店闹钟
   * 
   * @param request - ListHotelAlarmRequest
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarm(request: $_model.ListHotelAlarmRequest): Promise<$_model.ListHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelAlarmHeaders({ });
    return await this.listHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店设备列表
   * 
   * @param tmpReq - ListHotelControlDeviceRequest
   * @param headers - ListHotelControlDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDeviceWithOptions(tmpReq: $_model.ListHotelControlDeviceRequest, headers: $_model.ListHotelControlDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelControlDeviceResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelControlDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelControlDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelControlDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelControlDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelControlDeviceResponse({}));
  }

  /**
   * 酒店设备列表
   * 
   * @param request - ListHotelControlDeviceRequest
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDevice(request: $_model.ListHotelControlDeviceRequest): Promise<$_model.ListHotelControlDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelControlDeviceHeaders({ });
    return await this.listHotelControlDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店列表
   * 
   * @param headers - ListHotelInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelInfoResponse
   */
  async listHotelInfoWithOptions(headers: $_model.ListHotelInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelInfoResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelInfo",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelInfoResponse({}));
  }

  /**
   * 获取酒店列表
   * @returns ListHotelInfoResponse
   */
  async listHotelInfo(): Promise<$_model.ListHotelInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelInfoHeaders({ });
    return await this.listHotelInfoWithOptions(headers, runtime);
  }

  /**
   * 获取消息模板
   * 
   * @param headers - ListHotelMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplateWithOptions(headers: $_model.ListHotelMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelMessageTemplateResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelMessageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelMessageTemplateResponse({}));
  }

  /**
   * 获取消息模板
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplate(): Promise<$_model.ListHotelMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelMessageTemplateHeaders({ });
    return await this.listHotelMessageTemplateWithOptions(headers, runtime);
  }

  /**
   * 酒店订单列表
   * 
   * @param tmpReq - ListHotelOrderRequest
   * @param headers - ListHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelOrderResponse
   */
  async listHotelOrderWithOptions(tmpReq: $_model.ListHotelOrderRequest, headers: $_model.ListHotelOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelOrderResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelOrderResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelOrderResponse({}));
  }

  /**
   * 酒店订单列表
   * 
   * @param request - ListHotelOrderRequest
   * @returns ListHotelOrderResponse
   */
  async listHotelOrder(request: $_model.ListHotelOrderRequest): Promise<$_model.ListHotelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelOrderHeaders({ });
    return await this.listHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店的所有房间
   * 
   * @param tmpReq - ListHotelRoomsRequest
   * @param headers - ListHotelRoomsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelRoomsResponse
   */
  async listHotelRoomsWithOptions(tmpReq: $_model.ListHotelRoomsRequest, headers: $_model.ListHotelRoomsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelRoomsResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelRoomsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelAdminRoom)) {
      request.hotelAdminRoomShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelAdminRoom, "HotelAdminRoom", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelAdminRoomShrink)) {
      body["HotelAdminRoom"] = request.hotelAdminRoomShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelRooms",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelRooms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelRoomsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelRoomsResponse({}));
  }

  /**
   * 获取酒店的所有房间
   * 
   * @param request - ListHotelRoomsRequest
   * @returns ListHotelRoomsResponse
   */
  async listHotelRooms(request: $_model.ListHotelRoomsRequest): Promise<$_model.ListHotelRoomsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelRoomsHeaders({ });
    return await this.listHotelRoomsWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param tmpReq - ListHotelSceneBookItemsRequest
   * @param headers - ListHotelSceneBookItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItemsWithOptions(tmpReq: $_model.ListHotelSceneBookItemsRequest, headers: $_model.ListHotelSceneBookItemsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelSceneBookItemsResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelSceneBookItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneBookItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneBookItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelSceneBookItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelSceneBookItemsResponse({}));
  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param request - ListHotelSceneBookItemsRequest
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItems(request: $_model.ListHotelSceneBookItemsRequest): Promise<$_model.ListHotelSceneBookItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelSceneBookItemsHeaders({ });
    return await this.listHotelSceneBookItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务项目
   * 
   * @param tmpReq - ListHotelSceneItemRequest
   * @param headers - ListHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItemWithOptions(tmpReq: $_model.ListHotelSceneItemRequest, headers: $_model.ListHotelSceneItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelSceneItemResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelSceneItemResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelSceneItemResponse({}));
  }

  /**
   * 服务项目
   * 
   * @param request - ListHotelSceneItemRequest
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItem(request: $_model.ListHotelSceneItemRequest): Promise<$_model.ListHotelSceneItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelSceneItemHeaders({ });
    return await this.listHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param tmpReq - ListHotelSceneItemsRequest
   * @param headers - ListHotelSceneItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItemsWithOptions(tmpReq: $_model.ListHotelSceneItemsRequest, headers: $_model.ListHotelSceneItemsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelSceneItemsResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelSceneItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listHotelSceneReq)) {
      request.listHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listHotelSceneReq, "ListHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listHotelSceneReqShrink)) {
      query["ListHotelSceneReq"] = request.listHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelSceneItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelSceneItemsResponse({}));
  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param request - ListHotelSceneItemsRequest
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItems(request: $_model.ListHotelSceneItemsRequest): Promise<$_model.ListHotelSceneItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelSceneItemsHeaders({ });
    return await this.listHotelSceneItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务分类列表
   * 
   * @param tmpReq - ListHotelServiceCategoryRequest
   * @param headers - ListHotelServiceCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategoryWithOptions(tmpReq: $_model.ListHotelServiceCategoryRequest, headers: $_model.ListHotelServiceCategoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelServiceCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelServiceCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelServiceCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelServiceCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelServiceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelServiceCategoryResponse({}));
  }

  /**
   * 服务分类列表
   * 
   * @param request - ListHotelServiceCategoryRequest
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategory(request: $_model.ListHotelServiceCategoryRequest): Promise<$_model.ListHotelServiceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelServiceCategoryHeaders({ });
    return await this.listHotelServiceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param tmpReq - ListHotelsRequest
   * @param headers - ListHotelsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelsResponse
   */
  async listHotelsWithOptions(tmpReq: $_model.ListHotelsRequest, headers: $_model.ListHotelsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotelsResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelRequest)) {
      request.hotelRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelRequest, "HotelRequest", "json");
    }

    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelRequestShrink)) {
      query["HotelRequest"] = request.hotelRequestShrink;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotels",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotelsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotelsResponse({}));
  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param request - ListHotelsRequest
   * @returns ListHotelsResponse
   */
  async listHotels(request: $_model.ListHotelsRequest): Promise<$_model.ListHotelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListHotelsHeaders({ });
    return await this.listHotelsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @param headers - ListInfraredDeviceBrandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrandsWithOptions(request: $_model.ListInfraredDeviceBrandsRequest, headers: $_model.ListInfraredDeviceBrandsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListInfraredDeviceBrandsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInfraredDeviceBrands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredDeviceBrands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInfraredDeviceBrandsResponse>(await this.callApi(params, req, runtime), new $_model.ListInfraredDeviceBrandsResponse({}));
  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrands(request: $_model.ListInfraredDeviceBrandsRequest): Promise<$_model.ListInfraredDeviceBrandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListInfraredDeviceBrandsHeaders({ });
    return await this.listInfraredDeviceBrandsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @param headers - ListInfraredRemoteControllersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllersWithOptions(request: $_model.ListInfraredRemoteControllersRequest, headers: $_model.ListInfraredRemoteControllersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListInfraredRemoteControllersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    if (!$dara.isNull(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInfraredRemoteControllers",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredRemoteControllers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInfraredRemoteControllersResponse>(await this.callApi(params, req, runtime), new $_model.ListInfraredRemoteControllersResponse({}));
  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllers(request: $_model.ListInfraredRemoteControllersRequest): Promise<$_model.ListInfraredRemoteControllersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListInfraredRemoteControllersHeaders({ });
    return await this.listInfraredRemoteControllersWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @param headers - ListSTBServiceProvidersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProvidersWithOptions(request: $_model.ListSTBServiceProvidersRequest, headers: $_model.ListSTBServiceProvidersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSTBServiceProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSTBServiceProviders",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSTBServiceProviders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSTBServiceProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListSTBServiceProvidersResponse({}));
  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProviders(request: $_model.ListSTBServiceProvidersRequest): Promise<$_model.ListSTBServiceProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSTBServiceProvidersHeaders({ });
    return await this.listSTBServiceProvidersWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @param headers - ListSceneCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategoryWithOptions(request: $_model.ListSceneCategoryRequest, headers: $_model.ListSceneCategoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSceneCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSceneCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSceneCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSceneCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListSceneCategoryResponse({}));
  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategory(request: $_model.ListSceneCategoryRequest): Promise<$_model.ListSceneCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSceneCategoryHeaders({ });
    return await this.listSceneCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务设施问答列表
   * 
   * @param tmpReq - ListServiceQARequest
   * @param headers - ListServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceQAResponse
   */
  async listServiceQAWithOptions(tmpReq: $_model.ListServiceQARequest, headers: $_model.ListServiceQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceQAResponse> {
    tmpReq.validate();
    let request = new $_model.ListServiceQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceQAResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceQAResponse({}));
  }

  /**
   * 查询服务设施问答列表
   * 
   * @param request - ListServiceQARequest
   * @returns ListServiceQAResponse
   */
  async listServiceQA(request: $_model.ListServiceQARequest): Promise<$_model.ListServiceQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListServiceQAHeaders({ });
    return await this.listServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询工单列表
   * 
   * @param tmpReq - ListTicketsRequest
   * @param headers - ListTicketsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(tmpReq: $_model.ListTicketsRequest, headers: $_model.ListTicketsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.isDesc)) {
      body["IsDesc"] = request.isDesc;
    }

    if (!$dara.isNull(request.isNeedCallback)) {
      body["IsNeedCallback"] = request.isNeedCallback;
    }

    if (!$dara.isNull(request.isNeedCharges)) {
      body["IsNeedCharges"] = request.isNeedCharges;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listTickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketsResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketsResponse({}));
  }

  /**
   * 查询工单列表
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  async listTickets(request: $_model.ListTicketsRequest): Promise<$_model.ListTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListTicketsHeaders({ });
    return await this.listTicketsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @param headers - PageGetHotelRoomDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevicesWithOptions(request: $_model.PageGetHotelRoomDevicesRequest, headers: $_model.PageGetHotelRoomDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PageGetHotelRoomDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageGetHotelRoomDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pageGetHotelRoomDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageGetHotelRoomDevicesResponse>(await this.callApi(params, req, runtime), new $_model.PageGetHotelRoomDevicesResponse({}));
  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevices(request: $_model.PageGetHotelRoomDevicesRequest): Promise<$_model.PageGetHotelRoomDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PageGetHotelRoomDevicesHeaders({ });
    return await this.pageGetHotelRoomDevicesWithOptions(request, headers, runtime);
  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @param headers - PmsEventReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PmsEventReportResponse
   */
  async pmsEventReportWithOptions(request: $_model.PmsEventReportRequest, headers: $_model.PmsEventReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PmsEventReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PmsEventReport",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pmsEventReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PmsEventReportResponse>(await this.callApi(params, req, runtime), new $_model.PmsEventReportResponse({}));
  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @returns PmsEventReportResponse
   */
  async pmsEventReport(request: $_model.PmsEventReportRequest): Promise<$_model.PmsEventReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PmsEventReportHeaders({ });
    return await this.pmsEventReportWithOptions(request, headers, runtime);
  }

  /**
   * 推送酒店消息
   * 
   * @param tmpReq - PushHotelMessageRequest
   * @param headers - PushHotelMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessageWithOptions(tmpReq: $_model.PushHotelMessageRequest, headers: $_model.PushHotelMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushHotelMessageResponse> {
    tmpReq.validate();
    let request = new $_model.PushHotelMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pushHotelMessageReq)) {
      request.pushHotelMessageReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pushHotelMessageReq, "PushHotelMessageReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pushHotelMessageReqShrink)) {
      query["PushHotelMessageReq"] = request.pushHotelMessageReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushHotelMessage",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushHotelMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushHotelMessageResponse>(await this.callApi(params, req, runtime), new $_model.PushHotelMessageResponse({}));
  }

  /**
   * 推送酒店消息
   * 
   * @param request - PushHotelMessageRequest
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessage(request: $_model.PushHotelMessageRequest): Promise<$_model.PushHotelMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushHotelMessageHeaders({ });
    return await this.pushHotelMessageWithOptions(request, headers, runtime);
  }

  /**
   * 推送音箱指令
   * 
   * @param tmpReq - PushVoiceBoxCommandsRequest
   * @param headers - PushVoiceBoxCommandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommandsWithOptions(tmpReq: $_model.PushVoiceBoxCommandsRequest, headers: $_model.PushVoiceBoxCommandsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushVoiceBoxCommandsResponse> {
    tmpReq.validate();
    let request = new $_model.PushVoiceBoxCommandsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commands)) {
      request.commandsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commands, "Commands", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commandsShrink)) {
      body["Commands"] = request.commandsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushVoiceBoxCommands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushVoiceBoxCommands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushVoiceBoxCommandsResponse>(await this.callApi(params, req, runtime), new $_model.PushVoiceBoxCommandsResponse({}));
  }

  /**
   * 推送音箱指令
   * 
   * @param request - PushVoiceBoxCommandsRequest
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommands(request: $_model.PushVoiceBoxCommandsRequest): Promise<$_model.PushVoiceBoxCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushVoiceBoxCommandsHeaders({ });
    return await this.pushVoiceBoxCommandsWithOptions(request, headers, runtime);
  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @param headers - PushWelcomeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeResponse
   */
  async pushWelcomeWithOptions(request: $_model.PushWelcomeRequest, headers: $_model.PushWelcomeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushWelcomeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.welcomeMusicUrl)) {
      body["WelcomeMusicUrl"] = request.welcomeMusicUrl;
    }

    if (!$dara.isNull(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushWelcome",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcome`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushWelcomeResponse>(await this.callApi(params, req, runtime), new $_model.PushWelcomeResponse({}));
  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @returns PushWelcomeResponse
   */
  async pushWelcome(request: $_model.PushWelcomeRequest): Promise<$_model.PushWelcomeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushWelcomeHeaders({ });
    return await this.pushWelcomeWithOptions(request, headers, runtime);
  }

  /**
   * 推送欢迎语
   * 
   * @param tmpReq - PushWelcomeTextAndMusicRequest
   * @param headers - PushWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusicWithOptions(tmpReq: $_model.PushWelcomeTextAndMusicRequest, headers: $_model.PushWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushWelcomeTextAndMusicResponse> {
    tmpReq.validate();
    let request = new $_model.PushWelcomeTextAndMusicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templateVariable)) {
      request.templateVariableShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateVariable, "TemplateVariable", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.templateVariableShrink)) {
      body["TemplateVariable"] = request.templateVariableShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new $_model.PushWelcomeTextAndMusicResponse({}));
  }

  /**
   * 推送欢迎语
   * 
   * @param request - PushWelcomeTextAndMusicRequest
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusic(request: $_model.PushWelcomeTextAndMusicRequest): Promise<$_model.PushWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushWelcomeTextAndMusicHeaders({ });
    return await this.pushWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param tmpReq - QueryDeviceStatusRequest
   * @param headers - QueryDeviceStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatusWithOptions(tmpReq: $_model.QueryDeviceStatusRequest, headers: $_model.QueryDeviceStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceStatusResponse> {
    tmpReq.validate();
    let request = new $_model.QueryDeviceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryDeviceStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceStatusResponse({}));
  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param request - QueryDeviceStatusRequest
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatus(request: $_model.QueryDeviceStatusRequest): Promise<$_model.QueryDeviceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryDeviceStatusHeaders({ });
    return await this.queryDeviceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @param headers - QueryHotelRoomDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetailWithOptions(request: $_model.QueryHotelRoomDetailRequest, headers: $_model.QueryHotelRoomDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHotelRoomDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sn)) {
      body["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotelRoomDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryHotelRoomDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryHotelRoomDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryHotelRoomDetailResponse({}));
  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetail(request: $_model.QueryHotelRoomDetailRequest): Promise<$_model.QueryHotelRoomDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryHotelRoomDetailHeaders({ });
    return await this.queryHotelRoomDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @param headers - QueryRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevicesWithOptions(request: $_model.QueryRoomControlDevicesRequest, headers: $_model.QueryRoomControlDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRoomControlDevicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new $_model.QueryRoomControlDevicesResponse({}));
  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevices(request: $_model.QueryRoomControlDevicesRequest): Promise<$_model.QueryRoomControlDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryRoomControlDevicesHeaders({ });
    return await this.queryRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @param headers - QueryRoomControlDevicesAndStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatusWithOptions(request: $_model.QueryRoomControlDevicesAndStatusRequest, headers: $_model.QueryRoomControlDevicesAndStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRoomControlDevicesAndStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomControlDevicesAndStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevicesAndStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRoomControlDevicesAndStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryRoomControlDevicesAndStatusResponse({}));
  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatus(request: $_model.QueryRoomControlDevicesAndStatusRequest): Promise<$_model.QueryRoomControlDevicesAndStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryRoomControlDevicesAndStatusHeaders({ });
    return await this.queryRoomControlDevicesAndStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @param headers - QueryRoomStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatusWithOptions(request: $_model.QueryRoomStatusRequest, headers: $_model.QueryRoomStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRoomStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRoomStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryRoomStatusResponse({}));
  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatus(request: $_model.QueryRoomStatusRequest): Promise<$_model.QueryRoomStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryRoomStatusHeaders({ });
    return await this.queryRoomStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店场景列表
   * 
   * @param tmpReq - QuerySceneListRequest
   * @param headers - QuerySceneListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySceneListResponse
   */
  async querySceneListWithOptions(tmpReq: $_model.QuerySceneListRequest, headers: $_model.QuerySceneListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySceneListResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySceneListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneStates)) {
      request.sceneStatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneStates, "SceneStates", "json");
    }

    if (!$dara.isNull(tmpReq.sceneTypes)) {
      request.sceneTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneTypes, "SceneTypes", "json");
    }

    if (!$dara.isNull(tmpReq.templateInfoIds)) {
      request.templateInfoIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateInfoIds, "TemplateInfoIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneStatesShrink)) {
      body["SceneStates"] = request.sceneStatesShrink;
    }

    if (!$dara.isNull(request.sceneTypesShrink)) {
      body["SceneTypes"] = request.sceneTypesShrink;
    }

    if (!$dara.isNull(request.templateInfoIdsShrink)) {
      body["TemplateInfoIds"] = request.templateInfoIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySceneList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/querySceneList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySceneListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySceneListResponse({}));
  }

  /**
   * 查询酒店场景列表
   * 
   * @param request - QuerySceneListRequest
   * @returns QuerySceneListResponse
   */
  async querySceneList(request: $_model.QuerySceneListRequest): Promise<$_model.QuerySceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QuerySceneListHeaders({ });
    return await this.querySceneListWithOptions(request, headers, runtime);
  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @param headers - RemoveChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuthWithOptions(request: $_model.RemoveChildAccountAuthRequest, headers: $_model.RemoveChildAccountAuthHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveChildAccountAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.childAccountName)) {
      body["ChildAccountName"] = request.childAccountName;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeChildAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveChildAccountAuthResponse>(await this.callApi(params, req, runtime), new $_model.RemoveChildAccountAuthResponse({}));
  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuth(request: $_model.RemoveChildAccountAuthRequest): Promise<$_model.RemoveChildAccountAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveChildAccountAuthHeaders({ });
    return await this.removeChildAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @param headers - RemoveHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveHotelResponse
   */
  async removeHotelWithOptions(request: $_model.RemoveHotelRequest, headers: $_model.RemoveHotelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveHotelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveHotelResponse>(await this.callApi(params, req, runtime), new $_model.RemoveHotelResponse({}));
  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @returns RemoveHotelResponse
   */
  async removeHotel(request: $_model.RemoveHotelRequest): Promise<$_model.RemoveHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveHotelHeaders({ });
    return await this.removeHotelWithOptions(request, headers, runtime);
  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @param headers - ResetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusicWithOptions(request: $_model.ResetWelcomeTextAndMusicRequest, headers: $_model.ResetWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ResetWelcomeTextAndMusicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/resetWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new $_model.ResetWelcomeTextAndMusicResponse({}));
  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusic(request: $_model.ResetWelcomeTextAndMusicRequest): Promise<$_model.ResetWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ResetWelcomeTextAndMusicHeaders({ });
    return await this.resetWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 退房
   * 
   * @param tmpReq - RoomCheckOutRequest
   * @param headers - RoomCheckOutHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RoomCheckOutResponse
   */
  async roomCheckOutWithOptions(tmpReq: $_model.RoomCheckOutRequest, headers: $_model.RoomCheckOutHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RoomCheckOutResponse> {
    tmpReq.validate();
    let request = new $_model.RoomCheckOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RoomCheckOut",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/roomCheckOut`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RoomCheckOutResponse>(await this.callApi(params, req, runtime), new $_model.RoomCheckOutResponse({}));
  }

  /**
   * 退房
   * 
   * @param request - RoomCheckOutRequest
   * @returns RoomCheckOutResponse
   */
  async roomCheckOut(request: $_model.RoomCheckOutRequest): Promise<$_model.RoomCheckOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RoomCheckOutHeaders({ });
    return await this.roomCheckOutWithOptions(request, headers, runtime);
  }

  /**
   * 提交酒店订单
   * 
   * @param tmpReq - SubmitHotelOrderRequest
   * @param headers - SubmitHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrderWithOptions(tmpReq: $_model.SubmitHotelOrderRequest, headers: $_model.SubmitHotelOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHotelOrderResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/submitHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHotelOrderResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHotelOrderResponse({}));
  }

  /**
   * 提交酒店订单
   * 
   * @param request - SubmitHotelOrderRequest
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrder(request: $_model.SubmitHotelOrderRequest): Promise<$_model.SubmitHotelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubmitHotelOrderHeaders({ });
    return await this.submitHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @param headers - SyncDeviceStatusWithAkHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAkWithOptions(request: $_model.SyncDeviceStatusWithAkRequest, headers: $_model.SyncDeviceStatusWithAkHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDeviceStatusWithAkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryCnName)) {
      body["CategoryCnName"] = request.categoryCnName;
    }

    if (!$dara.isNull(request.categoryEnName)) {
      body["CategoryEnName"] = request.categoryEnName;
    }

    if (!$dara.isNull(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.location)) {
      body["Location"] = request.location;
    }

    if (!$dara.isNull(request.locationCnName)) {
      body["LocationCnName"] = request.locationCnName;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.switch)) {
      body["Switch"] = request.switch;
    }

    if (!$dara.isNull(request.fanSpeed)) {
      body["fanSpeed"] = request.fanSpeed;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.roomTemperature)) {
      body["roomTemperature"] = request.roomTemperature;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDeviceStatusWithAk",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/syncDeviceStatusWithAk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDeviceStatusWithAkResponse>(await this.callApi(params, req, runtime), new $_model.SyncDeviceStatusWithAkResponse({}));
  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAk(request: $_model.SyncDeviceStatusWithAkRequest): Promise<$_model.SyncDeviceStatusWithAkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SyncDeviceStatusWithAkHeaders({ });
    return await this.syncDeviceStatusWithAkWithOptions(request, headers, runtime);
  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @param headers - UpdateBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQAWithOptions(request: $_model.UpdateBasicInfoQARequest, headers: $_model.UpdateBasicInfoQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBasicInfoQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkInTime)) {
      body["CheckInTime"] = request.checkInTime;
    }

    if (!$dara.isNull(request.checkOutTime)) {
      body["CheckOutTime"] = request.checkOutTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelIntroduction)) {
      body["HotelIntroduction"] = request.hotelIntroduction;
    }

    if (!$dara.isNull(request.hotelMember)) {
      body["HotelMember"] = request.hotelMember;
    }

    if (!$dara.isNull(request.hotelService)) {
      body["HotelService"] = request.hotelService;
    }

    if (!$dara.isNull(request.parkingExpenses)) {
      body["ParkingExpenses"] = request.parkingExpenses;
    }

    if (!$dara.isNull(request.parkingPosition)) {
      body["ParkingPosition"] = request.parkingPosition;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.wifiName)) {
      body["WifiName"] = request.wifiName;
    }

    if (!$dara.isNull(request.wifiPassword)) {
      body["WifiPassword"] = request.wifiPassword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBasicInfoQAResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBasicInfoQAResponse({}));
  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQA(request: $_model.UpdateBasicInfoQARequest): Promise<$_model.UpdateBasicInfoQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateBasicInfoQAHeaders({ });
    return await this.updateBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改自定义问答
   * 
   * @param tmpReq - UpdateCustomQARequest
   * @param headers - UpdateCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQAWithOptions(tmpReq: $_model.UpdateCustomQARequest, headers: $_model.UpdateCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomQAResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.customQAId)) {
      body["CustomQAId"] = request.customQAId;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomQAResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomQAResponse({}));
  }

  /**
   * 修改自定义问答
   * 
   * @param request - UpdateCustomQARequest
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQA(request: $_model.UpdateCustomQARequest): Promise<$_model.UpdateCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateCustomQAHeaders({ });
    return await this.updateCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店项目
   * 
   * @param tmpReq - UpdateHotelRequest
   * @param headers - UpdateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelResponse
   */
  async updateHotelWithOptions(tmpReq: $_model.UpdateHotelRequest, headers: $_model.UpdateHotelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotelResponse({}));
  }

  /**
   * 修改酒店项目
   * 
   * @param request - UpdateHotelRequest
   * @returns UpdateHotelResponse
   */
  async updateHotel(request: $_model.UpdateHotelRequest): Promise<$_model.UpdateHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateHotelHeaders({ });
    return await this.updateHotelWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店闹钟
   * 
   * @param tmpReq - UpdateHotelAlarmRequest
   * @param headers - UpdateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarmWithOptions(tmpReq: $_model.UpdateHotelAlarmRequest, headers: $_model.UpdateHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotelAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotelAlarmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotelAlarmResponse({}));
  }

  /**
   * 修改酒店闹钟
   * 
   * @param request - UpdateHotelAlarmRequest
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarm(request: $_model.UpdateHotelAlarmRequest): Promise<$_model.UpdateHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateHotelAlarmHeaders({ });
    return await this.updateHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订编辑
   * 
   * @param tmpReq - UpdateHotelSceneBookItemRequest
   * @param headers - UpdateHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItemWithOptions(tmpReq: $_model.UpdateHotelSceneBookItemRequest, headers: $_model.UpdateHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotelSceneBookItemResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateHotelSceneBookReq)) {
      request.updateHotelSceneBookReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneBookReq, "UpdateHotelSceneBookReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateHotelSceneBookReqShrink)) {
      query["UpdateHotelSceneBookReq"] = request.updateHotelSceneBookReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订编辑
   * 
   * @param request - UpdateHotelSceneBookItemRequest
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItem(request: $_model.UpdateHotelSceneBookItemRequest): Promise<$_model.UpdateHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateHotelSceneBookItemHeaders({ });
    return await this.updateHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param tmpReq - UpdateHotelSceneItemRequest
   * @param headers - UpdateHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItemWithOptions(tmpReq: $_model.UpdateHotelSceneItemRequest, headers: $_model.UpdateHotelSceneItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotelSceneItemResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateHotelSceneOperateReq)) {
      request.updateHotelSceneOperateReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneOperateReq, "UpdateHotelSceneOperateReq", "json");
    }

    if (!$dara.isNull(tmpReq.updateHotelSceneReq)) {
      request.updateHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneReq, "UpdateHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateHotelSceneOperateReqShrink)) {
      query["UpdateHotelSceneOperateReq"] = request.updateHotelSceneOperateReqShrink;
    }

    if (!$dara.isNull(request.updateHotelSceneReqShrink)) {
      query["UpdateHotelSceneReq"] = request.updateHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotelSceneItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotelSceneItemResponse({}));
  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param request - UpdateHotelSceneItemRequest
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItem(request: $_model.UpdateHotelSceneItemRequest): Promise<$_model.UpdateHotelSceneItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateHotelSceneItemHeaders({ });
    return await this.updateHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @param headers - UpdateMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplateWithOptions(request: $_model.UpdateMessageTemplateRequest, headers: $_model.UpdateMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMessageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMessageTemplateResponse({}));
  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplate(request: $_model.UpdateMessageTemplateRequest): Promise<$_model.UpdateMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMessageTemplateHeaders({ });
    return await this.updateMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param tmpReq - UpdateRcuSceneRequest
   * @param headers - UpdateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuSceneWithOptions(tmpReq: $_model.UpdateRcuSceneRequest, headers: $_model.UpdateRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRcuSceneResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRcuSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRcuSceneResponse({}));
  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param request - UpdateRcuSceneRequest
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuScene(request: $_model.UpdateRcuSceneRequest): Promise<$_model.UpdateRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateRcuSceneHeaders({ });
    return await this.updateRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @param headers - UpdateServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQAWithOptions(request: $_model.UpdateServiceQARequest, headers: $_model.UpdateServiceQAHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answer)) {
      body["Answer"] = request.answer;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.serviceQAId)) {
      body["ServiceQAId"] = request.serviceQAId;
    }

    if (!$dara.isNull(request.isActive)) {
      body["isActive"] = request.isActive;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceQAResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceQAResponse({}));
  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQA(request: $_model.UpdateServiceQARequest): Promise<$_model.UpdateServiceQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateServiceQAHeaders({ });
    return await this.updateServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @param headers - UpdateTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketResponse
   */
  async updateTicketWithOptions(request: $_model.UpdateTicketRequest, headers: $_model.UpdateTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupKey)) {
      body["GroupKey"] = request.groupKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicket",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTicketResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTicketResponse({}));
  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @returns UpdateTicketResponse
   */
  async updateTicket(request: $_model.UpdateTicketRequest): Promise<$_model.UpdateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateTicketHeaders({ });
    return await this.updateTicketWithOptions(request, headers, runtime);
  }

}

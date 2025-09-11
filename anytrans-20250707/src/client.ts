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
    this._endpoint = this.getEndpoint("anytrans", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 通义多模态翻译批量翻译
   * 
   * @param tmpReq - BatchTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchTranslateResponse
   */
  async batchTranslateWithOptions(tmpReq: $_model.BatchTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchTranslateResponse> {
    tmpReq.validate();
    let request = new $_model.BatchTranslateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    if (!$dara.isNull(tmpReq.text)) {
      request.textShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.text, "text", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["targetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.textShrink)) {
      body["text"] = request.textShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchTranslate",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchTranslateResponse>(await this.callApi(params, req, runtime), new $_model.BatchTranslateResponse({}));
  }

  /**
   * 通义多模态翻译批量翻译
   * 
   * @param request - BatchTranslateRequest
   * @returns BatchTranslateResponse
   */
  async batchTranslate(request: $_model.BatchTranslateRequest): Promise<$_model.BatchTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译获取html翻译结果
   * 
   * @param request - GetHtmlTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHtmlTranslateTaskResponse
   */
  async getHtmlTranslateTaskWithOptions(request: $_model.GetHtmlTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHtmlTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHtmlTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/html/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHtmlTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetHtmlTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译获取html翻译结果
   * 
   * @param request - GetHtmlTranslateTaskRequest
   * @returns GetHtmlTranslateTaskResponse
   */
  async getHtmlTranslateTask(request: $_model.GetHtmlTranslateTaskRequest): Promise<$_model.GetHtmlTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHtmlTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译获取图片翻译任务
   * 
   * @param request - GetImageTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageTranslateTaskResponse
   */
  async getImageTranslateTaskWithOptions(request: $_model.GetImageTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/image/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetImageTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译获取图片翻译任务
   * 
   * @param request - GetImageTranslateTaskRequest
   * @returns GetImageTranslateTaskResponse
   */
  async getImageTranslateTask(request: $_model.GetImageTranslateTaskRequest): Promise<$_model.GetImageTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译获取长文翻译结果
   * 
   * @param request - GetLongTextTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLongTextTranslateTaskResponse
   */
  async getLongTextTranslateTaskWithOptions(request: $_model.GetLongTextTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLongTextTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLongTextTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/longText/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLongTextTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetLongTextTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译获取长文翻译结果
   * 
   * @param request - GetLongTextTranslateTaskRequest
   * @returns GetLongTextTranslateTaskResponse
   */
  async getLongTextTranslateTask(request: $_model.GetLongTextTranslateTaskRequest): Promise<$_model.GetLongTextTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLongTextTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译提交html翻译任务
   * 
   * @param tmpReq - SubmitHtmlTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHtmlTranslateTaskResponse
   */
  async submitHtmlTranslateTaskWithOptions(tmpReq: $_model.SubmitHtmlTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHtmlTranslateTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitHtmlTranslateTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["targetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHtmlTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/html/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHtmlTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHtmlTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译提交html翻译任务
   * 
   * @param request - SubmitHtmlTranslateTaskRequest
   * @returns SubmitHtmlTranslateTaskResponse
   */
  async submitHtmlTranslateTask(request: $_model.SubmitHtmlTranslateTaskRequest): Promise<$_model.SubmitHtmlTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitHtmlTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译提交图片翻译任务
   * 
   * @param tmpReq - SubmitImageTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImageTranslateTaskResponse
   */
  async submitImageTranslateTaskWithOptions(tmpReq: $_model.SubmitImageTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImageTranslateTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitImageTranslateTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    if (!$dara.isNull(tmpReq.targetLanguage)) {
      request.targetLanguageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetLanguage, "targetLanguage", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguageShrink)) {
      body["targetLanguage"] = request.targetLanguageShrink;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImageTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/image/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImageTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译提交图片翻译任务
   * 
   * @param request - SubmitImageTranslateTaskRequest
   * @returns SubmitImageTranslateTaskResponse
   */
  async submitImageTranslateTask(request: $_model.SubmitImageTranslateTaskRequest): Promise<$_model.SubmitImageTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitImageTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译提交长文翻译任务
   * 
   * @param tmpReq - SubmitLongTextTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLongTextTranslateTaskResponse
   */
  async submitLongTextTranslateTaskWithOptions(tmpReq: $_model.SubmitLongTextTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLongTextTranslateTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitLongTextTranslateTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["targetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLongTextTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/longText/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLongTextTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLongTextTranslateTaskResponse({}));
  }

  /**
   * 通义多模态翻译提交长文翻译任务
   * 
   * @param request - SubmitLongTextTranslateTaskRequest
   * @returns SubmitLongTextTranslateTaskResponse
   */
  async submitLongTextTranslateTask(request: $_model.SubmitLongTextTranslateTaskRequest): Promise<$_model.SubmitLongTextTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitLongTextTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态翻译文本翻译
   * 
   * @param tmpReq - TextTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextTranslateResponse
   */
  async textTranslateWithOptions(tmpReq: $_model.TextTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TextTranslateResponse> {
    tmpReq.validate();
    let request = new $_model.TextTranslateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.format)) {
      body["format"] = request.format;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["targetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextTranslate",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/text`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextTranslateResponse>(await this.callApi(params, req, runtime), new $_model.TextTranslateResponse({}));
  }

  /**
   * 通义多模态翻译文本翻译
   * 
   * @param request - TextTranslateRequest
   * @returns TextTranslateResponse
   */
  async textTranslate(request: $_model.TextTranslateRequest): Promise<$_model.TextTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textTranslateWithOptions(request, headers, runtime);
  }

}

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
      'cn-beijing': "anytrans.cn-beijing.aliyuncs.com",
    };
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
   * Tongyi Multimodal Translation: Batch Translation
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
    if (!$dara.isNull(request.appName)) {
      body["appName"] = request.appName;
    }

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
   * Tongyi Multimodal Translation: Batch Translation
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
   * 通义多模态翻译批量翻译(供js sdk使用)
   * 
   * @param tmpReq - BatchTranslateForHtmlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchTranslateForHtmlResponse
   */
  async batchTranslateForHtmlWithOptions(tmpReq: $_model.BatchTranslateForHtmlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchTranslateForHtmlResponse> {
    tmpReq.validate();
    let request = new $_model.BatchTranslateForHtmlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    if (!$dara.isNull(tmpReq.text)) {
      request.textShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.text, "text", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["appName"] = request.appName;
    }

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
      action: "BatchTranslateForHtml",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/batchForHtml`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchTranslateForHtmlResponse>(await this.callApi(params, req, runtime), new $_model.BatchTranslateForHtmlResponse({}));
  }

  /**
   * 通义多模态翻译批量翻译(供js sdk使用)
   * 
   * @param request - BatchTranslateForHtmlRequest
   * @returns BatchTranslateForHtmlResponse
   */
  async batchTranslateForHtml(request: $_model.BatchTranslateForHtmlRequest): Promise<$_model.BatchTranslateForHtmlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchTranslateForHtmlWithOptions(request, headers, runtime);
  }

  /**
   * Gets the results of a document translation task from Tongyi Multimodal Translation.
   * 
   * @remarks
   * Gets the results of a document translation task.
   * 
   * @param request - GetDocTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocTranslateTaskResponse
   */
  async getDocTranslateTaskWithOptions(request: $_model.GetDocTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocTranslateTaskResponse> {
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
      action: "GetDocTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/doc/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetDocTranslateTaskResponse({}));
  }

  /**
   * Gets the results of a document translation task from Tongyi Multimodal Translation.
   * 
   * @remarks
   * Gets the results of a document translation task.
   * 
   * @param request - GetDocTranslateTaskRequest
   * @returns GetDocTranslateTaskResponse
   */
  async getDocTranslateTask(request: $_model.GetDocTranslateTaskRequest): Promise<$_model.GetDocTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the result of an HTML translation task from Tongyi Multimodal Translation.
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
   * Retrieves the result of an HTML translation task from Tongyi Multimodal Translation.
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
   * Tongyi Multimodal Translation: Getting image translation results
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
   * Tongyi Multimodal Translation: Getting image translation results
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
   * Get document translations from Tongyi Multimodal Translation.
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
   * Get document translations from Tongyi Multimodal Translation.
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
   * Submit a document translation task to Tongyi Multimodal Translation.
   * 
   * @param tmpReq - SubmitDocTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocTranslateTaskResponse
   */
  async submitDocTranslateTaskWithOptions(tmpReq: $_model.SubmitDocTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocTranslateTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitDocTranslateTaskShrinkRequest({ });
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
      action: "SubmitDocTranslateTask",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/doc/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocTranslateTaskResponse({}));
  }

  /**
   * Submit a document translation task to Tongyi Multimodal Translation.
   * 
   * @param request - SubmitDocTranslateTaskRequest
   * @returns SubmitDocTranslateTaskResponse
   */
  async submitDocTranslateTask(request: $_model.SubmitDocTranslateTaskRequest): Promise<$_model.SubmitDocTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDocTranslateTaskWithOptions(request, headers, runtime);
  }

  /**
   * Submitting an HTML translation task with Tongyi Multimodal Translation
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
   * Submitting an HTML translation task with Tongyi Multimodal Translation
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
   * Use Tongyi multimodal translation to submit an image for translation.
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
   * Use Tongyi multimodal translation to submit an image for translation.
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
   * Submitting a long text translation task using Translate Multimodal.
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
   * Submitting a long text translation task using Translate Multimodal.
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
   * Editing the Tongyi Multimodal Translation termbase
   * 
   * @param tmpReq - TermEditRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TermEditResponse
   */
  async termEditWithOptions(tmpReq: $_model.TermEditRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TermEditResponse> {
    tmpReq.validate();
    let request = new $_model.TermEditShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
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

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TermEdit",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/intervene/edit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TermEditResponse>(await this.callApi(params, req, runtime), new $_model.TermEditResponse({}));
  }

  /**
   * Editing the Tongyi Multimodal Translation termbase
   * 
   * @param request - TermEditRequest
   * @returns TermEditResponse
   */
  async termEdit(request: $_model.TermEditRequest): Promise<$_model.TermEditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.termEditWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Tongyi Multimodal Translation termbase for intervention terms.
   * 
   * @param tmpReq - TermQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TermQueryResponse
   */
  async termQueryWithOptions(tmpReq: $_model.TermQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TermQueryResponse> {
    tmpReq.validate();
    let request = new $_model.TermQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "ext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extShrink)) {
      body["ext"] = request.extShrink;
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
      action: "TermQuery",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/intervene/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TermQueryResponse>(await this.callApi(params, req, runtime), new $_model.TermQueryResponse({}));
  }

  /**
   * Queries the Tongyi Multimodal Translation termbase for intervention terms.
   * 
   * @param request - TermQueryRequest
   * @returns TermQueryResponse
   */
  async termQuery(request: $_model.TermQueryRequest): Promise<$_model.TermQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.termQueryWithOptions(request, headers, runtime);
  }

  /**
   * Tongyi Multimodal Translation: Text Translation
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
   * Tongyi Multimodal Translation: Text Translation
   * 
   * @param request - TextTranslateRequest
   * @returns TextTranslateResponse
   */
  async textTranslate(request: $_model.TextTranslateRequest): Promise<$_model.TextTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 通义多模态文档翻译查询Usage
   * 
   * @param request - UsageQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UsageQueryResponse
   */
  async usageQueryWithOptions(request: $_model.UsageQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UsageQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UsageQuery",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/anytrans/translate/doc/usage/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UsageQueryResponse>(await this.callApi(params, req, runtime), new $_model.UsageQueryResponse({}));
  }

  /**
   * 通义多模态文档翻译查询Usage
   * 
   * @param request - UsageQueryRequest
   * @returns UsageQueryResponse
   */
  async usageQuery(request: $_model.UsageQueryRequest): Promise<$_model.UsageQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.usageQueryWithOptions(request, headers, runtime);
  }

}

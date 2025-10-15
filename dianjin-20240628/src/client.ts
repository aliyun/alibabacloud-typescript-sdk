// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dianjin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $dara.Request();
    let boundary = $dara.Form.getBoundary();
    request_.protocol = "HTTPS";
    request_.method = "POST";
    request_.pathname = `/`;
    request_.headers = {
      host: String(form["host"]),
      date: OpenApiUtil.getDateUTCString(),
      'user-agent': OpenApiUtil.getUserAgent(""),
    };
    request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
    request_.body = $dara.Form.toFileForm(form, boundary);
    let response_ = await $dara.doAction(request_);

    let respMap : {[key: string]: any} = null;
    let bodyStr = await $dara.Stream.readAsString(response_.body);
    if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
      respMap = $dara.XML.parseXml(bodyStr, null);
      let err = respMap["Error"];
      throw new $OpenApi.ClientError({
        code: String(err["Code"]),
        message: String(err["Message"]),
        data: {
          httpCode: response_.statusCode,
          requestId: String(err["RequestId"]),
          hostId: String(err["HostId"]),
        },
      });
    }

    respMap = $dara.XML.parseXml(bodyStr, null);
    return {
      ...respMap,
    };
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
   * 创建按年文档总结任务
   * 
   * @param request - CreateAnnualDocSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnualDocSummaryTaskResponse
   */
  async createAnnualDocSummaryTaskWithOptions(workspaceId: string, request: $_model.CreateAnnualDocSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnnualDocSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anaYears)) {
      body["anaYears"] = request.anaYears;
    }

    if (!$dara.isNull(request.docInfos)) {
      body["docInfos"] = request.docInfos;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnnualDocSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/doc/annual`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnnualDocSummaryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnnualDocSummaryTaskResponse({}));
  }

  /**
   * 创建按年文档总结任务
   * 
   * @param request - CreateAnnualDocSummaryTaskRequest
   * @returns CreateAnnualDocSummaryTaskResponse
   */
  async createAnnualDocSummaryTask(workspaceId: string, request: $_model.CreateAnnualDocSummaryTaskRequest): Promise<$_model.CreateAnnualDocSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnualDocSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建外呼会话
   * 
   * @param request - CreateDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDialogResponse
   */
  async createDialogWithOptions(workspaceId: string, request: $_model.CreateDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDialogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.enableLibrary)) {
      body["enableLibrary"] = request.enableLibrary;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.playCode)) {
      body["playCode"] = request.playCode;
    }

    if (!$dara.isNull(request.qaLibraryList)) {
      body["qaLibraryList"] = request.qaLibraryList;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.selfDirected)) {
      body["selfDirected"] = request.selfDirected;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDialog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDialogResponse>(await this.callApi(params, req, runtime), new $_model.CreateDialogResponse({}));
  }

  /**
   * 创建外呼会话
   * 
   * @param request - CreateDialogRequest
   * @returns CreateDialogResponse
   */
  async createDialog(workspaceId: string, request: $_model.CreateDialogRequest): Promise<$_model.CreateDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDialogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建会话分析任务
   * 
   * @param request - CreateDialogAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDialogAnalysisTaskResponse
   */
  async createDialogAnalysisTaskWithOptions(workspaceId: string, request: $_model.CreateDialogAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDialogAnalysisTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisNodes)) {
      body["analysisNodes"] = request.analysisNodes;
    }

    if (!$dara.isNull(request.conversationList)) {
      body["conversationList"] = request.conversationList;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.playCode)) {
      body["playCode"] = request.playCode;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDialogAnalysisTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/analysis/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDialogAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDialogAnalysisTaskResponse({}));
  }

  /**
   * 创建会话分析任务
   * 
   * @param request - CreateDialogAnalysisTaskRequest
   * @returns CreateDialogAnalysisTaskResponse
   */
  async createDialogAnalysisTask(workspaceId: string, request: $_model.CreateDialogAnalysisTaskRequest): Promise<$_model.CreateDialogAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDialogAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateDocsSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocsSummaryTaskResponse
   */
  async createDocsSummaryTaskWithOptions(workspaceId: string, request: $_model.CreateDocsSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocsSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docInfos)) {
      body["docInfos"] = request.docInfos;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocsSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/docs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocsSummaryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocsSummaryTaskResponse({}));
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateDocsSummaryTaskRequest
   * @returns CreateDocsSummaryTaskResponse
   */
  async createDocsSummaryTask(workspaceId: string, request: $_model.CreateDocsSummaryTaskRequest): Promise<$_model.CreateDocsSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDocsSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTaskWithOptions(workspaceId: string, request: $_model.CreateFinReportSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFinReportSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.endPage)) {
      body["endPage"] = request.endPage;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.startPage)) {
      body["startPage"] = request.startPage;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFinReportSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFinReportSummaryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFinReportSummaryTaskResponse({}));
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTask(workspaceId: string, request: $_model.CreateFinReportSummaryTaskRequest): Promise<$_model.CreateFinReportSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFinReportSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryResponse
   */
  async createLibraryWithOptions(workspaceId: string, request: $_model.CreateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!$dara.isNull(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLibraryResponse>(await this.callApi(params, req, runtime), new $_model.CreateLibraryResponse({}));
  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @returns CreateLibraryResponse
   */
  async createLibrary(workspaceId: string, request: $_model.CreateLibraryRequest): Promise<$_model.CreateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建PDF翻译任务
   * 
   * @param request - CreatePdfTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdfTranslateTaskResponse
   */
  async createPdfTranslateTaskWithOptions(workspaceId: string, request: $_model.CreatePdfTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdfTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.knowledge)) {
      body["knowledge"] = request.knowledge;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.translateTo)) {
      body["translateTo"] = request.translateTo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdfTranslateTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/pdfTranslate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdfTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdfTranslateTaskResponse({}));
  }

  /**
   * 创建PDF翻译任务
   * 
   * @param request - CreatePdfTranslateTaskRequest
   * @returns CreatePdfTranslateTaskResponse
   */
  async createPdfTranslateTask(workspaceId: string, request: $_model.CreatePdfTranslateTaskRequest): Promise<$_model.CreatePdfTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdfTranslateTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocumentWithOptions(workspaceId: string, request: $_model.CreatePredefinedDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePredefinedDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunks)) {
      body["chunks"] = request.chunks;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePredefinedDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/createPredefinedDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePredefinedDocumentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePredefinedDocumentResponse({}));
  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocument(workspaceId: string, request: $_model.CreatePredefinedDocumentRequest): Promise<$_model.CreatePredefinedDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPredefinedDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结的任务
   * 
   * @param request - CreateQualityCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityCheckTaskResponse
   */
  async createQualityCheckTaskWithOptions(workspaceId: string, request: $_model.CreateQualityCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationList)) {
      body["conversationList"] = request.conversationList;
    }

    if (!$dara.isNull(request.gmtService)) {
      body["gmtService"] = request.gmtService;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.qualityGroup)) {
      body["qualityGroup"] = request.qualityGroup;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityCheckTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/qualitycheck/task/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityCheckTaskResponse({}));
  }

  /**
   * 创建财报总结的任务
   * 
   * @param request - CreateQualityCheckTaskRequest
   * @returns CreateQualityCheckTaskResponse
   */
  async createQualityCheckTask(workspaceId: string, request: $_model.CreateQualityCheckTaskRequest): Promise<$_model.CreateQualityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQualityCheckTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(workspaceId: string, request: $_model.DeleteDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIds)) {
      body["docIds"] = request.docIds;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentResponse({}));
  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(workspaceId: string, request: $_model.DeleteDocumentRequest): Promise<$_model.DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibraryResponse
   */
  async deleteLibraryWithOptions(workspaceId: string, request: $_model.DeleteLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLibraryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLibraryResponse({}));
  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @returns DeleteLibraryResponse
   */
  async deleteLibrary(workspaceId: string, request: $_model.DeleteLibraryRequest): Promise<$_model.DeleteLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvictTaskResponse
   */
  async evictTaskWithOptions(workspaceId: string, request: $_model.EvictTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EvictTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvictTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/evict`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvictTaskResponse>(await this.callApi(params, req, runtime), new $_model.EvictTaskResponse({}));
  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @returns EvictTaskResponse
   */
  async evictTask(workspaceId: string, request: $_model.EvictTaskRequest): Promise<$_model.EvictTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.evictTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 根据文档解析问答QA
   * 
   * @param request - GenDocQaResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenDocQaResultResponse
   */
  async genDocQaResultWithOptions(workspaceId: string, request: $_model.GenDocQaResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenDocQaResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenDocQaResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/qa/parse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenDocQaResultResponse>(await this.callApi(params, req, runtime), new $_model.GenDocQaResultResponse({}));
  }

  /**
   * 根据文档解析问答QA
   * 
   * @param request - GenDocQaResultRequest
   * @returns GenDocQaResultResponse
   */
  async genDocQaResult(workspaceId: string, request: $_model.GenDocQaResultRequest): Promise<$_model.GenDocQaResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genDocQaResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取app配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConfigResponse
   */
  async getAppConfigWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppConfig",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/app/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAppConfigResponse({}));
  }

  /**
   * 获取app配置
   * @returns GetAppConfigResponse
   */
  async getAppConfig(workspaceId: string): Promise<$_model.GetAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppConfigWithOptions(workspaceId, headers, runtime);
  }

  /**
   * 获取问答结果
   * 
   * @param request - GetChatQuestionRespRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatQuestionRespResponse
   */
  async getChatQuestionRespWithOptions(workspaceId: string, request: $_model.GetChatQuestionRespRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatQuestionRespResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatQuestionResp",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/chat/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatQuestionRespResponse>(await this.callApi(params, req, runtime), new $_model.GetChatQuestionRespResponse({}));
  }

  /**
   * 获取问答结果
   * 
   * @param request - GetChatQuestionRespRequest
   * @returns GetChatQuestionRespResponse
   */
  async getChatQuestionResp(workspaceId: string, request: $_model.GetChatQuestionRespRequest): Promise<$_model.GetChatQuestionRespResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatQuestionRespWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取外呼会话分析结果
   * 
   * @param request - GetDialogAnalysisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDialogAnalysisResultResponse
   */
  async getDialogAnalysisResultWithOptions(workspaceId: string, request: $_model.GetDialogAnalysisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDialogAnalysisResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asc)) {
      body["asc"] = request.asc;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sessionIds)) {
      body["sessionIds"] = request.sessionIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.useUrl)) {
      body["useUrl"] = request.useUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDialogAnalysisResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDialogAnalysisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDialogAnalysisResultResponse({}));
  }

  /**
   * 获取外呼会话分析结果
   * 
   * @param request - GetDialogAnalysisResultRequest
   * @returns GetDialogAnalysisResultResponse
   */
  async getDialogAnalysisResult(workspaceId: string, request: $_model.GetDialogAnalysisResultRequest): Promise<$_model.GetDialogAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDialogAnalysisResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetDialogDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDialogDetailResponse
   */
  async getDialogDetailWithOptions(workspaceId: string, request: $_model.GetDialogDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDialogDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDialogDetail",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDialogDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDialogDetailResponse({}));
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetDialogDetailRequest
   * @returns GetDialogDetailResponse
   */
  async getDialogDetail(workspaceId: string, request: $_model.GetDialogDetailRequest): Promise<$_model.GetDialogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDialogDetailWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 查询会话日志
   * 
   * @param request - GetDialogLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDialogLogResponse
   */
  async getDialogLogWithOptions(workspaceId: string, request: $_model.GetDialogLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDialogLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDialogLog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/dialog/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDialogLogResponse>(await this.callApi(params, req, runtime), new $_model.GetDialogLogResponse({}));
  }

  /**
   * 查询会话日志
   * 
   * @param request - GetDialogLogRequest
   * @returns GetDialogLogResponse
   */
  async getDialogLog(workspaceId: string, request: $_model.GetDialogLogRequest): Promise<$_model.GetDialogLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDialogLogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkListWithOptions(workspaceId: string, request: $_model.GetDocumentChunkListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentChunkListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkIdList)) {
      body["chunkIdList"] = request.chunkIdList;
    }

    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentChunkList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/getDocumentChunk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentChunkListResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentChunkListResponse({}));
  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkList(workspaceId: string, request: $_model.GetDocumentChunkListRequest): Promise<$_model.GetDocumentChunkListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentChunkListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentListResponse
   */
  async getDocumentListWithOptions(workspaceId: string, request: $_model.GetDocumentListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/listDocument`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentListResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentListResponse({}));
  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @returns GetDocumentListResponse
   */
  async getDocumentList(workspaceId: string, request: $_model.GetDocumentListRequest): Promise<$_model.GetDocumentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrlWithOptions(workspaceId: string, request: $_model.GetDocumentUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentUrl",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentUrlResponse({}));
  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrl(workspaceId: string, request: $_model.GetDocumentUrlRequest): Promise<$_model.GetDocumentUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentListWithOptions(workspaceId: string, request: $_model.GetFilterDocumentListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFilterDocumentListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.and)) {
      body["and"] = request.and;
    }

    if (!$dara.isNull(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.or)) {
      body["or"] = request.or;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFilterDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/filterDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFilterDocumentListResponse>(await this.callApi(params, req, runtime), new $_model.GetFilterDocumentListResponse({}));
  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentList(workspaceId: string, request: $_model.GetFilterDocumentListRequest): Promise<$_model.GetFilterDocumentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFilterDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizTypeWithOptions(workspaceId: string, request: $_model.GetHistoryListByBizTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoryListByBizTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoryListByBizType",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/history/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoryListByBizTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoryListByBizTypeResponse({}));
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizType(workspaceId: string, request: $_model.GetHistoryListByBizTypeRequest): Promise<$_model.GetHistoryListByBizTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistoryListByBizTypeWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryResponse
   */
  async getLibraryWithOptions(workspaceId: string, request: $_model.GetLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryResponse({}));
  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @returns GetLibraryResponse
   */
  async getLibrary(workspaceId: string, request: $_model.GetLibraryRequest): Promise<$_model.GetLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryListResponse
   */
  async getLibraryListWithOptions(workspaceId: string, request: $_model.GetLibraryListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLibraryListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLibraryListResponse>(await this.callApi(params, req, runtime), new $_model.GetLibraryListResponse({}));
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @returns GetLibraryListResponse
   */
  async getLibraryList(workspaceId: string, request: $_model.GetLibraryListRequest): Promise<$_model.GetLibraryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParseResultResponse
   */
  async getParseResultWithOptions(workspaceId: string, request: $_model.GetParseResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetParseResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.useUrlResult)) {
      body["useUrlResult"] = request.useUrlResult;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParseResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/getParseResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParseResultResponse>(await this.callApi(params, req, runtime), new $_model.GetParseResultResponse({}));
  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @returns GetParseResultResponse
   */
  async getParseResult(workspaceId: string, request: $_model.GetParseResultRequest): Promise<$_model.GetParseResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParseResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetQualityCheckTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityCheckTaskResultResponse
   */
  async getQualityCheckTaskResultWithOptions(workspaceId: string, request: $_model.GetQualityCheckTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityCheckTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityCheckTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/qualitycheck/task/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityCheckTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityCheckTaskResultResponse({}));
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetQualityCheckTaskResultRequest
   * @returns GetQualityCheckTaskResultResponse
   */
  async getQualityCheckTaskResult(workspaceId: string, request: $_model.GetQualityCheckTaskResultRequest): Promise<$_model.GetQualityCheckTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQualityCheckTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResultWithOptions(workspaceId: string, request: $_model.GetSummaryTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSummaryTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSummaryTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSummaryTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSummaryTaskResultResponse({}));
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResult(workspaceId: string, request: $_model.GetSummaryTaskResultRequest): Promise<$_model.GetSummaryTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSummaryTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务结果
   * 
   * @param request - GetTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResultResponse
   */
  async getTaskResultWithOptions(workspaceId: string, request: $_model.GetTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResultResponse({}));
  }

  /**
   * 获取异步任务结果
   * 
   * @param request - GetTaskResultRequest
   * @returns GetTaskResultResponse
   */
  async getTaskResult(workspaceId: string, request: $_model.GetTaskResultRequest): Promise<$_model.GetTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(workspaceId: string, request: $_model.GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatusResponse({}));
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(workspaceId: string, request: $_model.GetTaskStatusRequest): Promise<$_model.GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokePluginResponse
   */
  async invokePluginWithOptions(workspaceId: string, request: $_model.InvokePluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InvokePluginResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.pluginId)) {
      body["pluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokePlugin",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/plugin/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokePluginResponse>(await this.callApi(params, req, runtime), new $_model.InvokePluginResponse({}));
  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @returns InvokePluginResponse
   */
  async invokePlugin(workspaceId: string, request: $_model.InvokePluginRequest): Promise<$_model.InvokePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokePluginWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewDocumentResponse
   */
  async previewDocumentWithOptions(workspaceId: string, request: $_model.PreviewDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewDocumentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewDocumentResponse>(await this.callApi(params, req, runtime), new $_model.PreviewDocumentResponse({}));
  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @returns PreviewDocumentResponse
   */
  async previewDocument(workspaceId: string, request: $_model.PreviewDocumentRequest): Promise<$_model.PreviewDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReIndexResponse
   */
  async reIndexWithOptions(workspaceId: string, request: $_model.ReIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReIndex",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/reIndex`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReIndexResponse>(await this.callApi(params, req, runtime), new $_model.ReIndexResponse({}));
  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @returns ReIndexResponse
   */
  async reIndex(workspaceId: string, request: $_model.ReIndexRequest): Promise<$_model.ReIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reIndexWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 实时对话
   * 
   * @param request - RealTimeDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RealTimeDialogResponse
   */
  async *realTimeDialogWithSSE(workspaceId: string, request: $_model.RealTimeDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RealTimeDialogResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversationModel)) {
      body["conversationModel"] = request.conversationModel;
    }

    if (!$dara.isNull(request.dialogMemoryTurns)) {
      body["dialogMemoryTurns"] = request.dialogMemoryTurns;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!$dara.isNull(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    if (!$dara.isNull(request.scriptContentPlayed)) {
      body["scriptContentPlayed"] = request.scriptContentPlayed;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.userVad)) {
      body["userVad"] = request.userVad;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RealTimeDialog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/realtime/dialog/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RealTimeDialogResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RealTimeDialogResponse({}));
    }
  }

  /**
   * 实时对话
   * 
   * @param request - RealTimeDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RealTimeDialogResponse
   */
  async realTimeDialogWithOptions(workspaceId: string, request: $_model.RealTimeDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RealTimeDialogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversationModel)) {
      body["conversationModel"] = request.conversationModel;
    }

    if (!$dara.isNull(request.dialogMemoryTurns)) {
      body["dialogMemoryTurns"] = request.dialogMemoryTurns;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!$dara.isNull(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    if (!$dara.isNull(request.scriptContentPlayed)) {
      body["scriptContentPlayed"] = request.scriptContentPlayed;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.userVad)) {
      body["userVad"] = request.userVad;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RealTimeDialog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/realtime/dialog/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RealTimeDialogResponse>(await this.callApi(params, req, runtime), new $_model.RealTimeDialogResponse({}));
  }

  /**
   * 实时对话
   * 
   * @param request - RealTimeDialogRequest
   * @returns RealTimeDialogResponse
   */
  async realTimeDialog(workspaceId: string, request: $_model.RealTimeDialogRequest): Promise<$_model.RealTimeDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.realTimeDialogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 实时会话辅助
   * 
   * @param request - RealtimeDialogAssistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RealtimeDialogAssistResponse
   */
  async realtimeDialogAssistWithOptions(workspaceId: string, request: $_model.RealtimeDialogAssistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RealtimeDialogAssistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversationModel)) {
      body["conversationModel"] = request.conversationModel;
    }

    if (!$dara.isNull(request.dialogMemoryTurns)) {
      body["dialogMemoryTurns"] = request.dialogMemoryTurns;
    }

    if (!$dara.isNull(request.hangUpDialog)) {
      body["hangUpDialog"] = request.hangUpDialog;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RealtimeDialogAssist",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/realtime/dialog/assist`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RealtimeDialogAssistResponse>(await this.callApi(params, req, runtime), new $_model.RealtimeDialogAssistResponse({}));
  }

  /**
   * 实时会话辅助
   * 
   * @param request - RealtimeDialogAssistRequest
   * @returns RealtimeDialogAssistResponse
   */
  async realtimeDialogAssist(workspaceId: string, request: $_model.RealtimeDialogAssistRequest): Promise<$_model.RealtimeDialogAssistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.realtimeDialogAssistWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 重建任务
   * 
   * @param request - RebuildTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildTaskResponse
   */
  async rebuildTaskWithOptions(workspaceId: string, request: $_model.RebuildTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebuildTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/rebuild`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebuildTaskResponse>(await this.callApi(params, req, runtime), new $_model.RebuildTaskResponse({}));
  }

  /**
   * 重建任务
   * 
   * @param request - RebuildTaskRequest
   * @returns RebuildTaskResponse
   */
  async rebuildTask(workspaceId: string, request: $_model.RebuildTaskRequest): Promise<$_model.RebuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebuildTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文档召回。
   * 
   * @param request - RecallDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecallDocumentResponse
   */
  async recallDocumentWithOptions(workspaceId: string, request: $_model.RecallDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecallDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filters)) {
      body["filters"] = request.filters;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.rearrangement)) {
      body["rearrangement"] = request.rearrangement;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecallDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/recallDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecallDocumentResponse>(await this.callApi(params, req, runtime), new $_model.RecallDocumentResponse({}));
  }

  /**
   * 文档召回。
   * 
   * @param request - RecallDocumentRequest
   * @returns RecallDocumentResponse
   */
  async recallDocument(workspaceId: string, request: $_model.RecallDocumentRequest): Promise<$_model.RecallDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recallDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntentionWithOptions(workspaceId: string, request: $_model.RecognizeIntentionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeIntentionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversation)) {
      body["conversation"] = request.conversation;
    }

    if (!$dara.isNull(request.globalIntentionList)) {
      body["globalIntentionList"] = request.globalIntentionList;
    }

    if (!$dara.isNull(request.hierarchicalIntentionList)) {
      body["hierarchicalIntentionList"] = request.hierarchicalIntentionList;
    }

    if (!$dara.isNull(request.intentionDomainCode)) {
      body["intentionDomainCode"] = request.intentionDomainCode;
    }

    if (!$dara.isNull(request.intentionList)) {
      body["intentionList"] = request.intentionList;
    }

    if (!$dara.isNull(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!$dara.isNull(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeIntention",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/recog/intent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeIntentionResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeIntentionResponse({}));
  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntention(workspaceId: string, request: $_model.RecognizeIntentionRequest): Promise<$_model.RecognizeIntentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recognizeIntentionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 运行智能体
   * 
   * @param request - RunAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAgentResponse
   */
  async *runAgentWithSSE(workspaceId: string, request: $_model.RunAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunAgentResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      body["botId"] = request.botId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.useDraft)) {
      body["useDraft"] = request.useDraft;
    }

    if (!$dara.isNull(request.userContent)) {
      body["userContent"] = request.userContent;
    }

    if (!$dara.isNull(request.userInputs)) {
      body["userInputs"] = request.userInputs;
    }

    if (!$dara.isNull(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunAgent",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/bot/thread/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunAgentResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunAgentResponse({}));
    }
  }

  /**
   * 运行智能体
   * 
   * @param request - RunAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAgentResponse
   */
  async runAgentWithOptions(workspaceId: string, request: $_model.RunAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      body["botId"] = request.botId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.useDraft)) {
      body["useDraft"] = request.useDraft;
    }

    if (!$dara.isNull(request.userContent)) {
      body["userContent"] = request.userContent;
    }

    if (!$dara.isNull(request.userInputs)) {
      body["userInputs"] = request.userInputs;
    }

    if (!$dara.isNull(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunAgent",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/bot/thread/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunAgentResponse>(await this.callApi(params, req, runtime), new $_model.RunAgentResponse({}));
  }

  /**
   * 运行智能体
   * 
   * @param request - RunAgentRequest
   * @returns RunAgentResponse
   */
  async runAgent(workspaceId: string, request: $_model.RunAgentRequest): Promise<$_model.RunAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunChatResultGenerationResponse
   */
  async *runChatResultGenerationWithSSE(workspaceId: string, request: $_model.RunChatResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunChatResultGenerationResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceParameters)) {
      body["inferenceParameters"] = request.inferenceParameters;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunChatResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunChatResultGenerationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunChatResultGenerationResponse({}));
    }
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGenerationWithOptions(workspaceId: string, request: $_model.RunChatResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunChatResultGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceParameters)) {
      body["inferenceParameters"] = request.inferenceParameters;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunChatResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunChatResultGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunChatResultGenerationResponse({}));
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGeneration(workspaceId: string, request: $_model.RunChatResultGenerationRequest): Promise<$_model.RunChatResultGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runChatResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 流式获取外呼会话分析结果
   * 
   * @param request - RunDialogAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDialogAnalysisResponse
   */
  async *runDialogAnalysisWithSSE(workspaceId: string, request: $_model.RunDialogAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunDialogAnalysisResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDialogAnalysis",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/stream/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunDialogAnalysisResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunDialogAnalysisResponse({}));
    }
  }

  /**
   * 流式获取外呼会话分析结果
   * 
   * @param request - RunDialogAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDialogAnalysisResponse
   */
  async runDialogAnalysisWithOptions(workspaceId: string, request: $_model.RunDialogAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunDialogAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDialogAnalysis",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/stream/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDialogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunDialogAnalysisResponse({}));
  }

  /**
   * 流式获取外呼会话分析结果
   * 
   * @param request - RunDialogAnalysisRequest
   * @returns RunDialogAnalysisResponse
   */
  async runDialogAnalysis(workspaceId: string, request: $_model.RunDialogAnalysisRequest): Promise<$_model.RunDialogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runDialogAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLibraryChatGenerationResponse
   */
  async *runLibraryChatGenerationWithSSE(workspaceId: string, request: $_model.RunLibraryChatGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunLibraryChatGenerationResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!$dara.isNull(request.enableFollowUp)) {
      body["enableFollowUp"] = request.enableFollowUp;
    }

    if (!$dara.isNull(request.enableMultiQuery)) {
      body["enableMultiQuery"] = request.enableMultiQuery;
    }

    if (!$dara.isNull(request.enableOpenQa)) {
      body["enableOpenQa"] = request.enableOpenQa;
    }

    if (!$dara.isNull(request.followUpLlm)) {
      body["followUpLlm"] = request.followUpLlm;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.llmType)) {
      body["llmType"] = request.llmType;
    }

    if (!$dara.isNull(request.multiQueryLlm)) {
      body["multiQueryLlm"] = request.multiQueryLlm;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryCriteria)) {
      body["queryCriteria"] = request.queryCriteria;
    }

    if (!$dara.isNull(request.rerankType)) {
      body["rerankType"] = request.rerankType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.subQueryList)) {
      body["subQueryList"] = request.subQueryList;
    }

    if (!$dara.isNull(request.textSearchParameter)) {
      body["textSearchParameter"] = request.textSearchParameter;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.vectorSearchParameter)) {
      body["vectorSearchParameter"] = request.vectorSearchParameter;
    }

    if (!$dara.isNull(request.withDocumentReference)) {
      body["withDocumentReference"] = request.withDocumentReference;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLibraryChatGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/library/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunLibraryChatGenerationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunLibraryChatGenerationResponse({}));
    }
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGenerationWithOptions(workspaceId: string, request: $_model.RunLibraryChatGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunLibraryChatGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!$dara.isNull(request.enableFollowUp)) {
      body["enableFollowUp"] = request.enableFollowUp;
    }

    if (!$dara.isNull(request.enableMultiQuery)) {
      body["enableMultiQuery"] = request.enableMultiQuery;
    }

    if (!$dara.isNull(request.enableOpenQa)) {
      body["enableOpenQa"] = request.enableOpenQa;
    }

    if (!$dara.isNull(request.followUpLlm)) {
      body["followUpLlm"] = request.followUpLlm;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.llmType)) {
      body["llmType"] = request.llmType;
    }

    if (!$dara.isNull(request.multiQueryLlm)) {
      body["multiQueryLlm"] = request.multiQueryLlm;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryCriteria)) {
      body["queryCriteria"] = request.queryCriteria;
    }

    if (!$dara.isNull(request.rerankType)) {
      body["rerankType"] = request.rerankType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.subQueryList)) {
      body["subQueryList"] = request.subQueryList;
    }

    if (!$dara.isNull(request.textSearchParameter)) {
      body["textSearchParameter"] = request.textSearchParameter;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.vectorSearchParameter)) {
      body["vectorSearchParameter"] = request.vectorSearchParameter;
    }

    if (!$dara.isNull(request.withDocumentReference)) {
      body["withDocumentReference"] = request.withDocumentReference;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLibraryChatGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/library/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunLibraryChatGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunLibraryChatGenerationResponse({}));
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGeneration(workspaceId: string, request: $_model.RunLibraryChatGenerationRequest): Promise<$_model.RunLibraryChatGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLibraryChatGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 提交问题列表
   * 
   * @param request - SubmitChatQuestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitChatQuestionResponse
   */
  async submitChatQuestionWithOptions(workspaceId: string, request: $_model.SubmitChatQuestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitChatQuestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtService)) {
      body["gmtService"] = request.gmtService;
    }

    if (!$dara.isNull(request.liveScriptContent)) {
      body["liveScriptContent"] = request.liveScriptContent;
    }

    if (!$dara.isNull(request.openSmallTalk)) {
      body["openSmallTalk"] = request.openSmallTalk;
    }

    if (!$dara.isNull(request.questionList)) {
      body["questionList"] = request.questionList;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitChatQuestion",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/chat/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitChatQuestionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitChatQuestionResponse({}));
  }

  /**
   * 提交问题列表
   * 
   * @param request - SubmitChatQuestionRequest
   * @returns SubmitChatQuestionResponse
   */
  async submitChatQuestion(workspaceId: string, request: $_model.SubmitChatQuestionRequest): Promise<$_model.SubmitChatQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitChatQuestionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentResponse
   */
  async updateDocumentWithOptions(workspaceId: string, request: $_model.UpdateDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/updateDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDocumentResponse({}));
  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @returns UpdateDocumentResponse
   */
  async updateDocument(workspaceId: string, request: $_model.UpdateDocumentRequest): Promise<$_model.UpdateDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档的chunk
   * 
   * @param request - UpdateDocumentChunkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentChunkResponse
   */
  async updateDocumentChunkWithOptions(workspaceId: string, request: $_model.UpdateDocumentChunkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDocumentChunkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunks)) {
      body["chunks"] = request.chunks;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDocumentChunk",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/updateDocumentChunk`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDocumentChunkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDocumentChunkResponse({}));
  }

  /**
   * 更新文档的chunk
   * 
   * @param request - UpdateDocumentChunkRequest
   * @returns UpdateDocumentChunkResponse
   */
  async updateDocumentChunk(workspaceId: string, request: $_model.UpdateDocumentChunkRequest): Promise<$_model.UpdateDocumentChunkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDocumentChunkWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibraryResponse
   */
  async updateLibraryWithOptions(workspaceId: string, request: $_model.UpdateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLibraryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLibraryResponse({}));
  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @returns UpdateLibraryResponse
   */
  async updateLibrary(workspaceId: string, request: $_model.UpdateLibraryRequest): Promise<$_model.UpdateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新QA问答库
   * 
   * @param request - UpdateQaLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQaLibraryResponse
   */
  async updateQaLibraryWithOptions(workspaceId: string, request: $_model.UpdateQaLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQaLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parseQaResults)) {
      body["parseQaResults"] = request.parseQaResults;
    }

    if (!$dara.isNull(request.qaLibraryId)) {
      body["qaLibraryId"] = request.qaLibraryId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQaLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/qa/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQaLibraryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQaLibraryResponse({}));
  }

  /**
   * 更新QA问答库
   * 
   * @param request - UpdateQaLibraryRequest
   * @returns UpdateQaLibraryResponse
   */
  async updateQaLibrary(workspaceId: string, request: $_model.UpdateQaLibraryRequest): Promise<$_model.UpdateQaLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQaLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocumentResponse
   */
  async uploadDocumentWithOptions(workspaceId: string, request: $_model.UploadDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UploadDocumentResponse({}));
  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @returns UploadDocumentResponse
   */
  async uploadDocument(workspaceId: string, request: $_model.UploadDocumentRequest): Promise<$_model.UploadDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  async uploadDocumentAdvance(workspaceId: string, request: $_model.UploadDocumentAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocumentResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "DianJin",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let uploadDocumentReq = new $_model.UploadDocumentRequest({ });
    OpenApiUtil.convert(request, uploadDocumentReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      uploadDocumentReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadDocumentResp = await this.uploadDocumentWithOptions(workspaceId, uploadDocumentReq, headers, runtime);
    return uploadDocumentResp;
  }

}

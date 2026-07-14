// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';
import { WebSocketUtils }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "dianjin.cn-beijing.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dianjin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        let tmp = String(form["host"]);
        let host = `${bucketName}.${tmp}`;
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: host,
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

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
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * 申请取数
   * 
   * @param request - CommercializeFetchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommercializeFetchResponse
   */
  async commercializeFetchWithOptions(workspaceId: string, cjfCode: string, zjfCode: string, request: $_model.CommercializeFetchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CommercializeFetchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["channelId"] = request.channelId;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.encryptType)) {
      body["encryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.env)) {
      body["env"] = request.env;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.secretKey)) {
      body["secretKey"] = request.secretKey;
    }

    if (!$dara.isNull(request.sign)) {
      body["sign"] = request.sign;
    }

    if (!$dara.isNull(request.signType)) {
      body["signType"] = request.signType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommercializeFetch",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/spi/path/${$dara.URL.percentEncode(cjfCode)}/api/support/${$dara.URL.percentEncode(zjfCode)}/firefly/commercializeFetch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommercializeFetchResponse>(await this.callApi(params, req, runtime), new $_model.CommercializeFetchResponse({}));
  }

  /**
   * 申请取数
   * 
   * @param request - CommercializeFetchRequest
   * @returns CommercializeFetchResponse
   */
  async commercializeFetch(workspaceId: string, cjfCode: string, zjfCode: string, request: $_model.CommercializeFetchRequest): Promise<$_model.CommercializeFetchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commercializeFetchWithOptions(workspaceId, cjfCode, zjfCode, request, headers, runtime);
  }

  /**
   * Create a task to summarize documents by year.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain your [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Create a task to summarize documents by year.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain your [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates an outbound call session.
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
   * Creates an outbound call session.
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
   * Creates a session analysis task. After the task is created, use the session ID with GetDialogAnalysisResult to retrieve the results.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for DianJin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and DianJin.
   * Obtain a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a session analysis task. After the task is created, use the session ID with GetDialogAnalysisResult to retrieve the results.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for DianJin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and DianJin.
   * Obtain a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a multi-document summary task.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * You have obtained a [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a multi-document summary task.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * You have obtained a [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a financial report summary.
   * 
   * @remarks
   * Before using this API, review the pricing and billing methods for Alibaba Cloud Gold products.
   * **Prerequisites**
   * - Enable Alibaba Cloud Model Studio and Alibaba Cloud Gold services.
   * - Obtain the workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a financial report summary.
   * 
   * @remarks
   * Before using this API, review the pricing and billing methods for Alibaba Cloud Gold products.
   * **Prerequisites**
   * - Enable Alibaba Cloud Model Studio and Alibaba Cloud Gold services.
   * - Obtain the workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * 创建图片检测任务
   * 
   * @param request - CreateImageDetectionTaskRequest
   * @param headers - CreateImageDetectionTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageDetectionTaskResponse
   */
  async createImageDetectionTaskWithOptions(workspaceId: string, request: $_model.CreateImageDetectionTaskRequest, headers: $_model.CreateImageDetectionTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageDetectionTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileInfo)) {
      body["fileInfo"] = request.fileInfo;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageDetectionTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/imageDetect/task/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageDetectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageDetectionTaskResponse({}));
  }

  /**
   * 创建图片检测任务
   * 
   * @param request - CreateImageDetectionTaskRequest
   * @returns CreateImageDetectionTaskResponse
   */
  async createImageDetectionTask(workspaceId: string, request: $_model.CreateImageDetectionTaskRequest): Promise<$_model.CreateImageDetectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateImageDetectionTaskHeaders({ });
    return await this.createImageDetectionTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a document library. A document library isolates document and index data. If your use case requires frequent natural language search by category, create multiple libraries to isolate different data types. You can customize vector and text indexes by format.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID: Retrieve the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a document library. A document library isolates document and index data. If your use case requires frequent natural language search by category, create multiple libraries to isolate different data types. You can customize vector and text indexes by format.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID: Retrieve the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Create a PDF document translation task. Submit the task to start asynchronous translation.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID. To obtain your [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Create a PDF document translation task. Submit the task to start asynchronous translation.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing for Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID. To obtain your [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates document chunks based on your business scenarios.
   * 
   * @remarks
   * Before using this API, review the billing methods and pricing for Tongyi Dianjin.
   * **Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain a workspace ID. For more information, see [Get a workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates document chunks based on your business scenarios.
   * 
   * @remarks
   * Before using this API, review the billing methods and pricing for Tongyi Dianjin.
   * **Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain a workspace ID. For more information, see [Get a workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Creates a quality check task.
   * 
   * @remarks
   * Before using this API, review the pricing and billing methods for the Tongyi Dianjin product.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * Obtain the workspaceId: Retrieve the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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

    if (!$dara.isNull(request.sceneCode)) {
      body["sceneCode"] = request.sceneCode;
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
   * Creates a quality check task.
   * 
   * @remarks
   * Before using this API, review the pricing and billing methods for the Tongyi Dianjin product.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * Obtain the workspaceId: Retrieve the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * 创建视频生成任务
   * 
   * @param request - CreateVideoCreationTaskRequest
   * @param headers - CreateVideoCreationTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoCreationTaskResponse
   */
  async createVideoCreationTaskWithOptions(workspaceId: string, request: $_model.CreateVideoCreationTaskRequest, headers: $_model.CreateVideoCreationTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoCreationTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creationInstruction)) {
      body["creationInstruction"] = request.creationInstruction;
    }

    if (!$dara.isNull(request.fileInfo)) {
      body["fileInfo"] = request.fileInfo;
    }

    if (!$dara.isNull(request.imageDetectionTaskId)) {
      body["imageDetectionTaskId"] = request.imageDetectionTaskId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoCreationTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/videoCreation/task/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoCreationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVideoCreationTaskResponse({}));
  }

  /**
   * 创建视频生成任务
   * 
   * @param request - CreateVideoCreationTaskRequest
   * @returns CreateVideoCreationTaskResponse
   */
  async createVideoCreationTask(workspaceId: string, request: $_model.CreateVideoCreationTaskRequest): Promise<$_model.CreateVideoCreationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateVideoCreationTaskHeaders({ });
    return await this.createVideoCreationTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * A callback event that indicates the completion of a Dashscope asynchronous task.
   * 
   * @param request - DashscopeAsyncTaskFinishEventRequest
   * @param headers - DashscopeAsyncTaskFinishEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DashscopeAsyncTaskFinishEventResponse
   */
  async dashscopeAsyncTaskFinishEventWithOptions(workspaceId: string, request: $_model.DashscopeAsyncTaskFinishEventRequest, headers: $_model.DashscopeAsyncTaskFinishEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DashscopeAsyncTaskFinishEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DashscopeAsyncTaskFinishEvent",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/event/dashscopeAsyncTaskFinish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DashscopeAsyncTaskFinishEventResponse>(await this.callApi(params, req, runtime), new $_model.DashscopeAsyncTaskFinishEventResponse({}));
  }

  /**
   * A callback event that indicates the completion of a Dashscope asynchronous task.
   * 
   * @param request - DashscopeAsyncTaskFinishEventRequest
   * @returns DashscopeAsyncTaskFinishEventResponse
   */
  async dashscopeAsyncTaskFinishEvent(workspaceId: string, request: $_model.DashscopeAsyncTaskFinishEventRequest): Promise<$_model.DashscopeAsyncTaskFinishEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DashscopeAsyncTaskFinishEventHeaders({ });
    return await this.dashscopeAsyncTaskFinishEventWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Deletes a document. After deletion, you cannot view the original document or recall it.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain your workspace ID: retrieve your [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Deletes a document. After deletion, you cannot view the original document or recall it.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain your workspace ID: retrieve your [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Delete a document library. ⚠️ This operation deletes the library and all its associated documents.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain your workspaceId. For more information, refer to the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Delete a document library. ⚠️ This operation deletes the library and all its associated documents.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain your workspaceId. For more information, refer to the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * This API uses the WebSocket protocol to perform real-time conversational transcription, intent recognition, and speech synthesis. It supports various audio formats for both input and output to ensure real-time performance and high compatibility.
   * 
   * @param request - EndToEndRealTimeDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndToEndRealTimeDialogResponse
   */
  async endToEndRealTimeDialogWithOptions(workspaceId: string, request: $_model.EndToEndRealTimeDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EndToEndRealTimeDialogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asrModelId)) {
      query["asrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.inputFormat)) {
      query["inputFormat"] = request.inputFormat;
    }

    if (!$dara.isNull(request.outputFormat)) {
      query["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.pitchRate)) {
      query["pitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.sampleRate)) {
      query["sampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.speechRate)) {
      query["speechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.ttsModelId)) {
      query["ttsModelId"] = request.ttsModelId;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["voiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.volume)) {
      query["volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndToEndRealTimeDialog",
      version: "2024-06-28",
      protocol: "wss",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ws/realtime/dialog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
      websocketSubProtocol: "awap",
    });
    let res = new $_model.EndToEndRealTimeDialogResponse({ });
    let tmp = await this.callApi(params, req, runtime);
    if (!$dara.isNull(tmp["webSocketClient"])) {
      res.webSocketClient = WebSocketUtils.createWebSocketClient(tmp["webSocketClient"]);
    }

    return res;
  }

  /**
   * This API uses the WebSocket protocol to perform real-time conversational transcription, intent recognition, and speech synthesis. It supports various audio formats for both input and output to ensure real-time performance and high compatibility.
   * 
   * @param request - EndToEndRealTimeDialogRequest
   * @returns EndToEndRealTimeDialogResponse
   */
  async endToEndRealTimeDialog(workspaceId: string, request: $_model.EndToEndRealTimeDialogRequest): Promise<$_model.EndToEndRealTimeDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.endToEndRealTimeDialogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Terminate the job.
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
   * Terminate the job.
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
   * 兑换权益
   * 
   * @param request - ExchangeEntitlementRequest
   * @param headers - ExchangeEntitlementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExchangeEntitlementResponse
   */
  async exchangeEntitlementWithOptions(workspaceId: string, tenantId: string, request: $_model.ExchangeEntitlementRequest, headers: $_model.ExchangeEntitlementHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExchangeEntitlementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      body["externalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.keyHash)) {
      body["keyHash"] = request.keyHash;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["templateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExchangeEntitlement",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/v1/tenants/${$dara.URL.percentEncode(tenantId)}/redeem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExchangeEntitlementResponse>(await this.callApi(params, req, runtime), new $_model.ExchangeEntitlementResponse({}));
  }

  /**
   * 兑换权益
   * 
   * @param request - ExchangeEntitlementRequest
   * @returns ExchangeEntitlementResponse
   */
  async exchangeEntitlement(workspaceId: string, tenantId: string, request: $_model.ExchangeEntitlementRequest): Promise<$_model.ExchangeEntitlementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExchangeEntitlementHeaders({ });
    return await this.exchangeEntitlementWithOptions(workspaceId, tenantId, request, headers, runtime);
  }

  /**
   * Parses question and answer (Q&A) pairs from a document. You can use the UpdateQaLibrary API to update the Q&A pairs.
   * 
   * @remarks
   * Before you use this API, make sure you understand the billing methods and pricing of the Tongyi Dianjin product.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and the Tongyi Dianjin service.
   * Obtain a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Parses question and answer (Q&A) pairs from a document. You can use the UpdateQaLibrary API to update the Q&A pairs.
   * 
   * @remarks
   * Before you use this API, make sure you understand the billing methods and pricing of the Tongyi Dianjin product.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and the Tongyi Dianjin service.
   * Obtain a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve app configuration.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Gold services.
   * - You can obtain the workspace ID. For details, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%E3%80%9DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
   * 
   * @param request - GetAppConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConfigResponse
   */
  async getAppConfigWithOptions(workspaceId: string, request: $_model.GetAppConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConfigResponse> {
    request.validate();
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
   * Retrieve app configuration.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Gold services.
   * - You can obtain the workspace ID. For details, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%E3%80%9DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
   * 
   * @param request - GetAppConfigRequest
   * @returns GetAppConfigResponse
   */
  async getAppConfig(workspaceId: string, request: $_model.GetAppConfigRequest): Promise<$_model.GetAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppConfigWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the Q&A results generated by the SubmitChatQuestion API.
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
   * Retrieves the Q&A results generated by the SubmitChatQuestion API.
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
   * Retrieve session analysis results. You can retrieve results in batches by specifying a list of session IDs or a time range.
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
   * Retrieve session analysis results. You can retrieve results in batches by specifying a list of session IDs or a time range.
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
   * Retrieve session details.
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
   * Retrieve session details.
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
   * Retrieves records of real-time conversations and the results of intent analysis.
   * 
   * @remarks
   * ## Request description
   * This API retrieves conversation records between customers and service agents, along with intent analysis results generated by the model.
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
   * Retrieves records of real-time conversations and the results of intent analysis.
   * 
   * @remarks
   * ## Request description
   * This API retrieves conversation records between customers and service agents, along with intent analysis results generated by the model.
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
   * Retrieve a list of document chunks. You can filter them by query conditions.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Gold Service.
   * - Obtain the workspaceId and the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%B3).
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
   * Retrieve a list of document chunks. You can filter them by query conditions.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Gold Service.
   * - Obtain the workspaceId and the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%B3).
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
   * Retrieves a list of documents from a document library. This operation supports paged queries and filtering by document status.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and the Tongyi Gold Point service.
   * - You have obtained a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieves a list of documents from a document library. This operation supports paged queries and filtering by document status.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and the Tongyi Gold Point service.
   * - You have obtained a workspace ID. For more information, see [Get a workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve a download URL for a document. The URL expires after 1 hour.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve a download URL for a document. The URL expires after 1 hour.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * This operation retrieves a list of documents. You can filter documents by metadata or use paging.
   * 
   * @remarks
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * To obtain the workspace ID, see [the document about obtaining the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * This operation retrieves a list of documents. You can filter documents by metadata or use paging.
   * 
   * @remarks
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * To obtain the workspace ID, see [the document about obtaining the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve conversation history records by business type.
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
   * Retrieve conversation history records by business type.
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
   * 获取检测结果
   * 
   * @param request - GetImageDetectionTaskResultRequest
   * @param headers - GetImageDetectionTaskResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageDetectionTaskResultResponse
   */
  async getImageDetectionTaskResultWithOptions(workspaceId: string, request: $_model.GetImageDetectionTaskResultRequest, headers: $_model.GetImageDetectionTaskResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageDetectionTaskResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageDetectionTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/imageDetect/task/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageDetectionTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetImageDetectionTaskResultResponse({}));
  }

  /**
   * 获取检测结果
   * 
   * @param request - GetImageDetectionTaskResultRequest
   * @returns GetImageDetectionTaskResultResponse
   */
  async getImageDetectionTaskResult(workspaceId: string, request: $_model.GetImageDetectionTaskResultRequest): Promise<$_model.GetImageDetectionTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetImageDetectionTaskResultHeaders({ });
    return await this.getImageDetectionTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the detailed configuration of a document library, including its name, description, and index settings.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain a [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieves the detailed configuration of a document library, including its name, description, and index settings.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain a [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve the document library list. The list includes document names, descriptions, and unique identifiers.
   * 
   * @remarks
   * Prerequisites
   * - You must activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain the workspaceId. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve the document library list. The list includes document names, descriptions, and unique identifiers.
   * 
   * @remarks
   * Prerequisites
   * - You must activate Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain the workspaceId. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve document parsing results. You can query the document\\"s parsing status and obtain the parsing results.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Gold services.
   * - Obtain the workspace ID. For more information, see [the workspace identity document](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve document parsing results. You can query the document\\"s parsing status and obtain the parsing results.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Gold services.
   * - Obtain the workspace ID. For more information, see [the workspace identity document](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieve quality check results.
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
   * Retrieve quality check results.
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
   * 获取报告结果
   * 
   * @param request - GetReportResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportResponseResponse
   */
  async getReportResponseWithOptions(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.GetReportResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportResponseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportResponse",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/firefly/v1/${$dara.URL.percentEncode(sceneCode)}/${$dara.URL.percentEncode(fundProduct)}/tasks/${$dara.URL.percentEncode(outRequestNo)}/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportResponseResponse>(await this.callApi(params, req, runtime), new $_model.GetReportResponseResponse({}));
  }

  /**
   * 获取报告结果
   * 
   * @param request - GetReportResponseRequest
   * @returns GetReportResponseResponse
   */
  async getReportResponse(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.GetReportResponseRequest): Promise<$_model.GetReportResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReportResponseWithOptions(workspaceId, sceneCode, fundProduct, outRequestNo, request, headers, runtime);
  }

  /**
   * 获取任务状态
   * 
   * @param request - GetReportTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportTaskStatusResponse
   */
  async getReportTaskStatusWithOptions(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.GetReportTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportTaskStatusResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportTaskStatus",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/firefly/v1/${$dara.URL.percentEncode(sceneCode)}/${$dara.URL.percentEncode(fundProduct)}/tasks/${$dara.URL.percentEncode(outRequestNo)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetReportTaskStatusResponse({}));
  }

  /**
   * 获取任务状态
   * 
   * @param request - GetReportTaskStatusRequest
   * @returns GetReportTaskStatusResponse
   */
  async getReportTaskStatus(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.GetReportTaskStatusRequest): Promise<$_model.GetReportTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReportTaskStatusWithOptions(workspaceId, sceneCode, fundProduct, outRequestNo, request, headers, runtime);
  }

  /**
   * Retrieves the result of a financial report summary task.
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
   * Retrieves the result of a financial report summary task.
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
   * Retrieves the result of an asynchronous task.
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
   * Retrieves the result of an asynchronous task.
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
   * Gets the status of a task.
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
   * Gets the status of a task.
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
   * 查询用量明细
   * 
   * @param request - GetUsageRequest
   * @param headers - GetUsageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUsageResponse
   */
  async getUsageWithOptions(workspaceId: string, tenantId: string, request: $_model.GetUsageRequest, headers: $_model.GetUsageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      query["externalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.redemptionOrderNo)) {
      query["redemptionOrderNo"] = request.redemptionOrderNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUsage",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/v1/tenants/${$dara.URL.percentEncode(tenantId)}/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetUsageResponse({}));
  }

  /**
   * 查询用量明细
   * 
   * @param request - GetUsageRequest
   * @returns GetUsageResponse
   */
  async getUsage(workspaceId: string, tenantId: string, request: $_model.GetUsageRequest): Promise<$_model.GetUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUsageHeaders({ });
    return await this.getUsageWithOptions(workspaceId, tenantId, request, headers, runtime);
  }

  /**
   * 获取视频生成任务结果
   * 
   * @param request - GetVideoCreationTaskResultRequest
   * @param headers - GetVideoCreationTaskResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoCreationTaskResultResponse
   */
  async getVideoCreationTaskResultWithOptions(workspaceId: string, request: $_model.GetVideoCreationTaskResultRequest, headers: $_model.GetVideoCreationTaskResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoCreationTaskResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoCreationTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/videoCreation/task/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoCreationTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoCreationTaskResultResponse({}));
  }

  /**
   * 获取视频生成任务结果
   * 
   * @param request - GetVideoCreationTaskResultRequest
   * @returns GetVideoCreationTaskResultResponse
   */
  async getVideoCreationTaskResult(workspaceId: string, request: $_model.GetVideoCreationTaskResultRequest): Promise<$_model.GetVideoCreationTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetVideoCreationTaskResultHeaders({ });
    return await this.getVideoCreationTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Call a plugin and retrieve its response.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Call a plugin and retrieve its response.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin services.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Preview documents. Retrieve document download links, types, and titles. Use this operation to preview documents.
   * 
   * @remarks
   * *Prerequisites**
   * - You must activate Alibaba Cloud Model Studio and Tongyi Gold services.
   * - Obtain the workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Preview documents. Retrieve document download links, types, and titles. Use this operation to preview documents.
   * 
   * @remarks
   * *Prerequisites**
   * - You must activate Alibaba Cloud Model Studio and Tongyi Gold services.
   * - Obtain the workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * 查询兑换记录
   * 
   * @param request - QueryApiKeysRequest
   * @param headers - QueryApiKeysHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApiKeysResponse
   */
  async queryApiKeysWithOptions(workspaceId: string, tenantId: string, request: $_model.QueryApiKeysRequest, headers: $_model.QueryApiKeysHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      query["externalUserId"] = request.externalUserId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApiKeys",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/v1/tenants/${$dara.URL.percentEncode(tenantId)}/apikeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.QueryApiKeysResponse({}));
  }

  /**
   * 查询兑换记录
   * 
   * @param request - QueryApiKeysRequest
   * @returns QueryApiKeysResponse
   */
  async queryApiKeys(workspaceId: string, tenantId: string, request: $_model.QueryApiKeysRequest): Promise<$_model.QueryApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryApiKeysHeaders({ });
    return await this.queryApiKeysWithOptions(workspaceId, tenantId, request, headers, runtime);
  }

  /**
   * 查询兑换记录
   * 
   * @param request - QueryRedemptionRecordsRequest
   * @param headers - QueryRedemptionRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRedemptionRecordsResponse
   */
  async queryRedemptionRecordsWithOptions(workspaceId: string, tenantId: string, request: $_model.QueryRedemptionRecordsRequest, headers: $_model.QueryRedemptionRecordsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRedemptionRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      query["externalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.redemptionOrderNo)) {
      query["redemptionOrderNo"] = request.redemptionOrderNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLoadTest)) {
      realHeaders["X-Load-Test"] = typeof headers.xLoadTest === "string" ? headers.xLoadTest : JSON.stringify(headers.xLoadTest);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRedemptionRecords",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/v1/tenants/${$dara.URL.percentEncode(tenantId)}/redemption-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRedemptionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryRedemptionRecordsResponse({}));
  }

  /**
   * 查询兑换记录
   * 
   * @param request - QueryRedemptionRecordsRequest
   * @returns QueryRedemptionRecordsResponse
   */
  async queryRedemptionRecords(workspaceId: string, tenantId: string, request: $_model.QueryRedemptionRecordsRequest): Promise<$_model.QueryRedemptionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryRedemptionRecordsHeaders({ });
    return await this.queryRedemptionRecordsWithOptions(workspaceId, tenantId, request, headers, runtime);
  }

  /**
   * Reindexing reprocesses the specified document by parsing it, splitting it into chunks, and building a new index.
   * 
   * @remarks
   * Before you use this operation, review the billing method and pricing for Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID: Retrieve the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Reindexing reprocesses the specified document by parsing it, splitting it into chunks, and building a new index.
   * 
   * @remarks
   * Before you use this operation, review the billing method and pricing for Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID: Retrieve the [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Starts a real-time session. After you create a session by calling the CreateDialog API, use this API to conduct the real-time interaction.
   * 
   * @remarks
   * Before using this API, make sure you understand the billing methods and pricing of the Tongyi Gold service.
   * Prerequisites
   * Alibaba Cloud Model Studio and the Tongyi Gold service are activated.
   * Obtain a workspaceId. For more information, see [Get an app ID and workspace](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RealTimeDialogResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RealTimeDialogResponse({}));
      }

    }
  }

  /**
   * Starts a real-time session. After you create a session by calling the CreateDialog API, use this API to conduct the real-time interaction.
   * 
   * @remarks
   * Before using this API, make sure you understand the billing methods and pricing of the Tongyi Gold service.
   * Prerequisites
   * Alibaba Cloud Model Studio and the Tongyi Gold service are activated.
   * Obtain a workspaceId. For more information, see [Get an app ID and workspace](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Starts a real-time session. After you create a session by calling the CreateDialog API, use this API to conduct the real-time interaction.
   * 
   * @remarks
   * Before using this API, make sure you understand the billing methods and pricing of the Tongyi Gold service.
   * Prerequisites
   * Alibaba Cloud Model Studio and the Tongyi Gold service are activated.
   * Obtain a workspaceId. For more information, see [Get an app ID and workspace](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Provides real-time dialog assistance after a session is created using CreateDialog. Note: This operation returns multiple intents, tags, and SOP flows. Unlike real-time sessions, it does not support streaming responses.
   * 
   * @remarks
   * Before you use this API, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/zh/model-studio/tongyi-dianjin-overview?spm=a2c4g.11186623.help-menu-2400256.d_1_6_6_0.15e77499sSMTGb) of Alibaba Cloud Model Studio DianJin.
   * Prerequisites
   * Activate the Alibaba Cloud Model Studio and Model Studio DianJin services.
   * Obtain the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8) to use as your workspaceId.
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

    if (!$dara.isNull(request.scriptContentPlayed)) {
      body["scriptContentPlayed"] = request.scriptContentPlayed;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.userVad)) {
      body["userVad"] = request.userVad;
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
   * Provides real-time dialog assistance after a session is created using CreateDialog. Note: This operation returns multiple intents, tags, and SOP flows. Unlike real-time sessions, it does not support streaming responses.
   * 
   * @remarks
   * Before you use this API, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/zh/model-studio/tongyi-dianjin-overview?spm=a2c4g.11186623.help-menu-2400256.d_1_6_6_0.15e77499sSMTGb) of Alibaba Cloud Model Studio DianJin.
   * Prerequisites
   * Activate the Alibaba Cloud Model Studio and Model Studio DianJin services.
   * Obtain the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8) to use as your workspaceId.
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
   * Rebuilds an existing task. You cannot rebuild tasks that are queued or currently executing.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for the Dianjin service.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and the Dianjin service.
   * You have obtained a workspace ID. For more information, see [Get an app ID and workspace](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Rebuilds an existing task. You cannot rebuild tasks that are queued or currently executing.
   * 
   * @remarks
   * Before you use this API, review the billing methods and pricing for the Dianjin service.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and the Dianjin service.
   * You have obtained a workspace ID. For more information, see [Get an app ID and workspace](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * You can retrieve document chunks from a document library using text. You can specify the number of chunks to retrieve, filter them by metadata conditions, and choose whether to complete the document chunks.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio service and the Tongyi Dianjin service.
   * - Obtain the workspace ID. Obtain the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%93%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * You can retrieve document chunks from a document library using text. You can specify the number of chunks to retrieve, filter them by metadata conditions, and choose whether to complete the document chunks.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio service and the Tongyi Dianjin service.
   * - Obtain the workspace ID. Obtain the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%93%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Detects intents. This operation supports global and hierarchical intent detection, attitude detection, and enterprise detection.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing of Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Detects intents. This operation supports global and hierarchical intent detection, attitude detection, and enterprise detection.
   * 
   * @remarks
   * Before you use this operation, review the billing methods and pricing of Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a [workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * 重试任务
   * 
   * @param request - RetryReportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryReportTaskResponse
   */
  async retryReportTaskWithOptions(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.RetryReportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryReportTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryReportTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/firefly/v1/${$dara.URL.percentEncode(sceneCode)}/${$dara.URL.percentEncode(fundProduct)}/tasks/${$dara.URL.percentEncode(outRequestNo)}/retry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryReportTaskResponse>(await this.callApi(params, req, runtime), new $_model.RetryReportTaskResponse({}));
  }

  /**
   * 重试任务
   * 
   * @param request - RetryReportTaskRequest
   * @returns RetryReportTaskResponse
   */
  async retryReportTask(workspaceId: string, sceneCode: string, fundProduct: string, outRequestNo: string, request: $_model.RetryReportTaskRequest): Promise<$_model.RetryReportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryReportTaskWithOptions(workspaceId, sceneCode, fundProduct, outRequestNo, request, headers, runtime);
  }

  /**
   * Run an agent. This API supports both streaming and non-streaming responses.
   * 
   * @remarks
   * Before you use this API, review the billing model and pricing for Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain a workspace ID: [Obtain your workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RunAgentResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RunAgentResponse({}));
      }

    }
  }

  /**
   * Run an agent. This API supports both streaming and non-streaming responses.
   * 
   * @remarks
   * Before you use this API, review the billing model and pricing for Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain a workspace ID: [Obtain your workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Run an agent. This API supports both streaming and non-streaming responses.
   * 
   * @remarks
   * Before you use this API, review the billing model and pricing for Tongyi Dianjin.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain a workspace ID: [Obtain your workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Generates chat responses. You can select a model for the conversation and choose streaming or non-streaming output.
   * 
   * @remarks
   * Before you use this API, review the billing method and pricing for Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain your workspace ID: retrieve your [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RunChatResultGenerationResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RunChatResultGenerationResponse({}));
      }

    }
  }

  /**
   * Generates chat responses. You can select a model for the conversation and choose streaming or non-streaming output.
   * 
   * @remarks
   * Before you use this API, review the billing method and pricing for Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain your workspace ID: retrieve your [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Generates chat responses. You can select a model for the conversation and choose streaming or non-streaming output.
   * 
   * @remarks
   * Before you use this API, review the billing method and pricing for Alibaba Cloud Tongyi Dianjin.
   * **Prerequisites**
   * - Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain your workspace ID: retrieve your [workspace identifier](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieves session analysis results through a streaming API.
   * 
   * @remarks
   * Before you use this API, make sure that you understand the billing methods and pricing for Tongyi Gold.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Gold.
   * You must have a workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RunDialogAnalysisResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RunDialogAnalysisResponse({}));
      }

    }
  }

  /**
   * Retrieves session analysis results through a streaming API.
   * 
   * @remarks
   * Before you use this API, make sure that you understand the billing methods and pricing for Tongyi Gold.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Gold.
   * You must have a workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Retrieves session analysis results through a streaming API.
   * 
   * @remarks
   * Before you use this API, make sure that you understand the billing methods and pricing for Tongyi Gold.
   * Prerequisites
   * You have activated Alibaba Cloud Model Studio and Tongyi Gold.
   * You must have a workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Generates a chat response from a document library. You can ask questions in natural language, and the system retrieves relevant information to provide a summarized answer.
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RunLibraryChatGenerationResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RunLibraryChatGenerationResponse({}));
      }

    }
  }

  /**
   * Generates a chat response from a document library. You can ask questions in natural language, and the system retrieves relevant information to provide a summarized answer.
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
   * Generates a chat response from a document library. You can ask questions in natural language, and the system retrieves relevant information to provide a summarized answer.
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
   * Submit a list of questions and retrieve results by calling the `GetChatQuestionResp` API.
   * 
   * @remarks
   * Review the pricing and billing details for the Tongyi Dianjin product before you use this API.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain the \\`workspaceId\\`: Retrieve the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Submit a list of questions and retrieve results by calling the `GetChatQuestionResp` API.
   * 
   * @remarks
   * Review the pricing and billing details for the Tongyi Dianjin product before you use this API.
   * Prerequisites
   * Activate Alibaba Cloud Model Studio and Tongyi Dianjin.
   * Obtain the \\`workspaceId\\`: Retrieve the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Updates the title, metadata, and other information of a document.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio service and the Tongyi Gold service.
   * - Obtain your workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Updates the title, metadata, and other information of a document.
   * 
   * @remarks
   * *Prerequisites**
   * - Activate the Alibaba Cloud Model Studio service and the Tongyi Gold service.
   * - Obtain your workspace ID. For more information, see [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Update the text content of a document chunk in a document.
   * 
   * @remarks
   * Before using this API, ensure you understand the billing methods and pricing of the Tongyi Gold product.
   * Prerequisites
   * You must activate Alibaba Cloud Model Studio and Tongyi Gold services.
   * Obtain the workspaceId. For more information, see the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Update the text content of a document chunk in a document.
   * 
   * @remarks
   * Before using this API, ensure you understand the billing methods and pricing of the Tongyi Gold product.
   * Prerequisites
   * You must activate Alibaba Cloud Model Studio and Tongyi Gold services.
   * Obtain the workspaceId. For more information, see the [workspace identity](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Updates a document library. You can update the library name, description, and index configuration.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Updates a document library. You can update the library name, description, and index configuration.
   * 
   * @remarks
   * *Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - Obtain the workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Updates a Q&A library. After the update, use the GenDocQaResult API to parse the Q&A pairs.
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
   * Updates a Q&A library. After the update, use the GenDocQaResult API to parse the Q&A pairs.
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
   * Upload a document to a document library. The system parses the document, splits it into chunks, and builds an index.
   * 
   * @remarks
   * Before you use this operation, review the Tongyi Dianjin pricing details.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
   * Upload a document to a document library. The system parses the document, splits it into chunks, and builds an index.
   * 
   * @remarks
   * Before you use this operation, review the Tongyi Dianjin pricing details.
   * **Prerequisites**
   * - You have activated Alibaba Cloud Model Studio and Tongyi Dianjin.
   * - You have obtained a workspace ID. For more information, see [Get the workspace ID](https://help.aliyun.com/zh/model-studio/developer-reference/get-app-id-and-workspace?spm=openapi-amp.newDocPublishment.0.0.2eb8281foUVd15#2612f896detsz:~:text=%E6%9F%A5%E7%9C%8BAPI%2DKEY%E3%80%82-,%E8%8E%B7%E5%8F%96APP%2DID%E5%92%8CWORKSPACE,-%E8%BF%9B%E5%85%A5%E6%88%91%E7%9A%84%E5%BA%94%E7%94%A8).
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      uploadDocumentReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadDocumentResp = await this.uploadDocumentWithOptions(workspaceId, uploadDocumentReq, headers, runtime);
    return uploadDocumentResp;
  }

}

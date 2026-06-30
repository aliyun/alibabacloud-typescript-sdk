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
    this._endpoint = this.getEndpoint("realtranslationagent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 取消翻译任务
   * 
   * @param request - CancelTranslationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTranslationTaskResponse
   */
  async cancelTranslationTaskWithOptions(request: $_model.CancelTranslationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTranslationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTranslationTask",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTranslationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTranslationTaskResponse({}));
  }

  /**
   * 取消翻译任务
   * 
   * @param request - CancelTranslationTaskRequest
   * @returns CancelTranslationTaskResponse
   */
  async cancelTranslationTask(request: $_model.CancelTranslationTaskRequest): Promise<$_model.CancelTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTranslationTaskWithOptions(request, runtime);
  }

  /**
   * 获取原文文件下载URL
   * 
   * @param request - GetOriginalFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginalFileUrlResponse
   */
  async getOriginalFileUrlWithOptions(request: $_model.GetOriginalFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginalFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginalFileUrl",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginalFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginalFileUrlResponse({}));
  }

  /**
   * 获取原文文件下载URL
   * 
   * @param request - GetOriginalFileUrlRequest
   * @returns GetOriginalFileUrlResponse
   */
  async getOriginalFileUrl(request: $_model.GetOriginalFileUrlRequest): Promise<$_model.GetOriginalFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginalFileUrlWithOptions(request, runtime);
  }

  /**
   * 获取译文文件下载URL
   * 
   * @param request - GetTranslatedFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranslatedFileUrlResponse
   */
  async getTranslatedFileUrlWithOptions(request: $_model.GetTranslatedFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranslatedFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranslatedFileUrl",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranslatedFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetTranslatedFileUrlResponse({}));
  }

  /**
   * 获取译文文件下载URL
   * 
   * @param request - GetTranslatedFileUrlRequest
   * @returns GetTranslatedFileUrlResponse
   */
  async getTranslatedFileUrl(request: $_model.GetTranslatedFileUrlRequest): Promise<$_model.GetTranslatedFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslatedFileUrlWithOptions(request, runtime);
  }

  /**
   * 获取翻译任务详情
   * 
   * @param request - GetTranslationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranslationTaskResponse
   */
  async getTranslationTaskWithOptions(request: $_model.GetTranslationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranslationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranslationTask",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranslationTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTranslationTaskResponse({}));
  }

  /**
   * 获取翻译任务详情
   * 
   * @param request - GetTranslationTaskRequest
   * @returns GetTranslationTaskResponse
   */
  async getTranslationTask(request: $_model.GetTranslationTaskRequest): Promise<$_model.GetTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslationTaskWithOptions(request, runtime);
  }

  /**
   * 获取翻译任务列表
   * 
   * @param request - ListTranslationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranslationTasksResponse
   */
  async listTranslationTasksWithOptions(request: $_model.ListTranslationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTranslationTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.originalFileName)) {
      query["OriginalFileName"] = request.originalFileName;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranslationTasks",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTranslationTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTranslationTasksResponse({}));
  }

  /**
   * 获取翻译任务列表
   * 
   * @param request - ListTranslationTasksRequest
   * @returns ListTranslationTasksResponse
   */
  async listTranslationTasks(request: $_model.ListTranslationTasksRequest): Promise<$_model.ListTranslationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranslationTasksWithOptions(request, runtime);
  }

  /**
   * 提交翻译任务
   * 
   * @param tmpReq - SubmitTranslationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTranslationTaskResponse
   */
  async submitTranslationTaskWithOptions(tmpReq: $_model.SubmitTranslationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTranslationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTranslationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    if (!$dara.isNull(tmpReq.customTerms)) {
      request.customTermsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customTerms, "CustomTerms", "json");
    }

    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    if (!$dara.isNull(request.customTermsShrink)) {
      query["CustomTerms"] = request.customTermsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseTaskId)) {
      body["BaseTaskId"] = request.baseTaskId;
    }

    if (!$dara.isNull(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTranslationTask",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTranslationTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTranslationTaskResponse({}));
  }

  /**
   * 提交翻译任务
   * 
   * @param request - SubmitTranslationTaskRequest
   * @returns SubmitTranslationTaskResponse
   */
  async submitTranslationTask(request: $_model.SubmitTranslationTaskRequest): Promise<$_model.SubmitTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTranslationTaskWithOptions(request, runtime);
  }

  /**
   * 解析文档
   * 
   * @param request - UploadTranslationFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadTranslationFileResponse
   */
  async uploadTranslationFileWithOptions(request: $_model.UploadTranslationFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadTranslationFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIKey)) {
      query["APIKey"] = request.APIKey;
    }

    if (!$dara.isNull(request.file)) {
      query["File"] = request.file;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadTranslationFile",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadTranslationFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadTranslationFileResponse({}));
  }

  /**
   * 解析文档
   * 
   * @param request - UploadTranslationFileRequest
   * @returns UploadTranslationFileResponse
   */
  async uploadTranslationFile(request: $_model.UploadTranslationFileRequest): Promise<$_model.UploadTranslationFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadTranslationFileWithOptions(request, runtime);
  }

  async uploadTranslationFileAdvance(request: $_model.UploadTranslationFileAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadTranslationFileResponse> {
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
      Product: "RealTranslationAgent",
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
    let uploadTranslationFileReq = new $_model.UploadTranslationFileRequest({ });
    OpenApiUtil.convert(request, uploadTranslationFileReq);
    if (!$dara.isNull(request.fileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileObject,
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
      uploadTranslationFileReq.file = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadTranslationFileResp = await this.uploadTranslationFileWithOptions(uploadTranslationFileReq, runtime);
    return uploadTranslationFileResp;
  }

}

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      public: "realtranslationagent.aliyuncs.com",
    };
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
   * Cancels a translation task that is currently running.
   * 
   * @remarks
   * *Billing description**
   * After the task is successfully canceled, the Credits frozen for this translation task will be fully refunded to your account.
   * **Before you begin**
   * - This operation only supports canceling translation tasks that are in the processing state. Tasks that are completed or failed cannot be canceled.
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
   * Cancels a translation task that is currently running.
   * 
   * @remarks
   * *Billing description**
   * After the task is successfully canceled, the Credits frozen for this translation task will be fully refunded to your account.
   * **Before you begin**
   * - This operation only supports canceling translation tasks that are in the processing state. Tasks that are completed or failed cannot be canceled.
   * 
   * @param request - CancelTranslationTaskRequest
   * @returns CancelTranslationTaskResponse
   */
  async cancelTranslationTask(request: $_model.CancelTranslationTaskRequest): Promise<$_model.CancelTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTranslationTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves the download URL of the original file for a translation task.
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
   * Retrieves the download URL of the original file for a translation task.
   * 
   * @param request - GetOriginalFileUrlRequest
   * @returns GetOriginalFileUrlResponse
   */
  async getOriginalFileUrl(request: $_model.GetOriginalFileUrlRequest): Promise<$_model.GetOriginalFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginalFileUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the download URL of the translated file for a translation task.
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
   * Retrieves the download URL of the translated file for a translation task.
   * 
   * @param request - GetTranslatedFileUrlRequest
   * @returns GetTranslatedFileUrlResponse
   */
  async getTranslatedFileUrl(request: $_model.GetTranslatedFileUrlRequest): Promise<$_model.GetTranslatedFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslatedFileUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a translation task.
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
   * Retrieves the details of a translation task.
   * 
   * @param request - GetTranslationTaskRequest
   * @returns GetTranslationTaskResponse
   */
  async getTranslationTask(request: $_model.GetTranslationTaskRequest): Promise<$_model.GetTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslationTaskWithOptions(request, runtime);
  }

  /**
   * Queries translation tasks by paging.
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
   * Queries translation tasks by paging.
   * 
   * @param request - ListTranslationTasksRequest
   * @returns ListTranslationTasksResponse
   */
  async listTranslationTasks(request: $_model.ListTranslationTasksRequest): Promise<$_model.ListTranslationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranslationTasksWithOptions(request, runtime);
  }

  /**
   * Submits a translation task. You can submit a new translation task by passing in a TaskId, or resubmit a historical task for translation by passing in a BaseTaskId. After successful submission, the translation task ID and current task status are returned. You can use the task ID to call subsequent operations to query translation progress and results.
   * 
   * @remarks
   * *Billing description**
   * This operation involves Credits consumption. Before submitting a translation task, ensure that your account has sufficient Credits balance. After calling `UploadTranslationFile`, you can check the `CreditsAvailable` field in the response to confirm whether your current balance meets the requirements of this translation task. For detailed billing information, refer to the `CreditBreakdown` field.
   * **Task submission description**
   * - To submit a new translation task, pass in the `TaskId` returned by the `UploadTranslationFile` operation.
   * - To resubmit a historical task for translation, pass in the task ID of a previously submitted translation task, which is the `BaseTaskId`.
   * - You must pass in either `TaskId` or `BaseTaskId`. You cannot pass in both at the same time.
   * **Precautions**
   * - The `Style` parameter takes effect only when the translation file is a PPT file. Passing in this parameter for files in other formats has no effect.
   * - For new tasks, you can obtain the list of available fonts from the `Fonts` field in the response of `UploadTranslationFile`. For retranslation of historical tasks, you can obtain the list of available fonts by calling the `GetTranslationTask` operation.
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
   * Submits a translation task. You can submit a new translation task by passing in a TaskId, or resubmit a historical task for translation by passing in a BaseTaskId. After successful submission, the translation task ID and current task status are returned. You can use the task ID to call subsequent operations to query translation progress and results.
   * 
   * @remarks
   * *Billing description**
   * This operation involves Credits consumption. Before submitting a translation task, ensure that your account has sufficient Credits balance. After calling `UploadTranslationFile`, you can check the `CreditsAvailable` field in the response to confirm whether your current balance meets the requirements of this translation task. For detailed billing information, refer to the `CreditBreakdown` field.
   * **Task submission description**
   * - To submit a new translation task, pass in the `TaskId` returned by the `UploadTranslationFile` operation.
   * - To resubmit a historical task for translation, pass in the task ID of a previously submitted translation task, which is the `BaseTaskId`.
   * - You must pass in either `TaskId` or `BaseTaskId`. You cannot pass in both at the same time.
   * **Precautions**
   * - The `Style` parameter takes effect only when the translation file is a PPT file. Passing in this parameter for files in other formats has no effect.
   * - For new tasks, you can obtain the list of available fonts from the `Fonts` field in the response of `UploadTranslationFile`. For retranslation of historical tasks, you can obtain the list of available fonts by calling the `GetTranslationTask` operation.
   * 
   * @param request - SubmitTranslationTaskRequest
   * @returns SubmitTranslationTaskResponse
   */
  async submitTranslationTask(request: $_model.SubmitTranslationTaskRequest): Promise<$_model.SubmitTranslationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTranslationTaskWithOptions(request, runtime);
  }

  /**
   * Uploads a document, parses document-related information, and generates a translation task. After a successful upload, the task ID and document parsing results are returned, including word count, page count, estimated Credits consumption, estimated translation time, detected language type, and font list. The system also performs sensitive information detection on the uploaded document, and you can decide whether to proceed with submitting the translation task based on the detection results.
   * 
   * @remarks
   * > - This operation only involves document upload and information estimation. **No fees are incurred.** Credits consumption starts only after you **officially submit the translation** task.
   * **Language detection**
   * The system automatically detects the language type of the uploaded document. Currently, Chinese is supported.
   * **Sensitive information detection**
   * The system performs sensitive information detection on the uploaded document. If sensitive information is detected, the `SensitiveDetected` field in the response is set to `true`, and the `SensitiveTags` field returns the list of matched keywords.
   * >  - You can decide whether to proceed with submitting the translation task based on your actual needs.
   * >  - If the translation quality setting is set to ultimate mode when you submit the task, the system automatically switches the **portions containing sensitive information** to auto mode.
   * **Notes**
   * - Make sure the uploaded document format is supported by the system. Otherwise, parsing may fail.
   * - The `EstimatedCostCredits` value in the response is the estimated Credits consumption. The actual consumption is based on the settlement after the translation task is officially submitted.
   * - The `EstimatedTime` value in the response is the estimated translation duration in milliseconds. The actual translation duration may vary depending on document complexity.
   * - The `Fonts` field in the response contains the languages that support font modification and the corresponding font lists. You can select an appropriate font based on the target language.
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
   * Uploads a document, parses document-related information, and generates a translation task. After a successful upload, the task ID and document parsing results are returned, including word count, page count, estimated Credits consumption, estimated translation time, detected language type, and font list. The system also performs sensitive information detection on the uploaded document, and you can decide whether to proceed with submitting the translation task based on the detection results.
   * 
   * @remarks
   * > - This operation only involves document upload and information estimation. **No fees are incurred.** Credits consumption starts only after you **officially submit the translation** task.
   * **Language detection**
   * The system automatically detects the language type of the uploaded document. Currently, Chinese is supported.
   * **Sensitive information detection**
   * The system performs sensitive information detection on the uploaded document. If sensitive information is detected, the `SensitiveDetected` field in the response is set to `true`, and the `SensitiveTags` field returns the list of matched keywords.
   * >  - You can decide whether to proceed with submitting the translation task based on your actual needs.
   * >  - If the translation quality setting is set to ultimate mode when you submit the task, the system automatically switches the **portions containing sensitive information** to auto mode.
   * **Notes**
   * - Make sure the uploaded document format is supported by the system. Otherwise, parsing may fail.
   * - The `EstimatedCostCredits` value in the response is the estimated Credits consumption. The actual consumption is based on the settlement after the translation task is officially submitted.
   * - The `EstimatedTime` value in the response is the estimated translation duration in milliseconds. The actual translation duration may vary depending on document complexity.
   * - The `Fonts` field in the response contains the languages that support font modification and the corresponding font lists. You can select an appropriate font based on the target language.
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

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
    this._endpoint = this.getEndpoint("farui", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextFileResponse
   */
  async createTextFileWithOptions(WorkspaceId: string, request: $_model.CreateTextFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTextFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.contractId)) {
      body["ContractId"] = request.contractId;
    }

    if (!$dara.isNull(request.createTime)) {
      body["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.textFileName)) {
      body["TextFileName"] = request.textFileName;
    }

    if (!$dara.isNull(request.textFileUrl)) {
      body["TextFileUrl"] = request.textFileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTextFile",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/data/textFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTextFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateTextFileResponse({}));
  }

  /**
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @returns CreateTextFileResponse
   */
  async createTextFile(WorkspaceId: string, request: $_model.CreateTextFileRequest): Promise<$_model.CreateTextFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  async createTextFileAdvance(WorkspaceId: string, request: $_model.CreateTextFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTextFileResponse> {
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
      Product: "FaRui",
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
    let createTextFileReq = new $_model.CreateTextFileRequest({ });
    OpenApiUtil.convert(request, createTextFileReq);
    if (!$dara.isNull(request.textFileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.textFileUrlObject,
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      createTextFileReq.textFileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let createTextFileResp = await this.createTextFileWithOptions(WorkspaceId, createTextFileReq, headers, runtime);
    return createTextFileResp;
  }

  /**
   * 生成合同审查结果
   * 
   * @param tmpReq - RunContractResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractResultGenerationResponse
   */
  async *runContractResultGenerationWithSSE(workspaceId: string, tmpReq: $_model.RunContractResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunContractResultGenerationResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.RunContractResultGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/result/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunContractResultGenerationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunContractResultGenerationResponse({}));
    }
  }

  /**
   * 生成合同审查结果
   * 
   * @param tmpReq - RunContractResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGenerationWithOptions(workspaceId: string, tmpReq: $_model.RunContractResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunContractResultGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunContractResultGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/result/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunContractResultGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunContractResultGenerationResponse({}));
  }

  /**
   * 生成合同审查结果
   * 
   * @param request - RunContractResultGenerationRequest
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGeneration(workspaceId: string, request: $_model.RunContractResultGenerationRequest): Promise<$_model.RunContractResultGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 生成合同审查规则
   * 
   * @param tmpReq - RunContractRuleGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractRuleGenerationResponse
   */
  async *runContractRuleGenerationWithSSE(workspaceId: string, tmpReq: $_model.RunContractRuleGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunContractRuleGenerationResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.RunContractRuleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractRuleGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/rule/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunContractRuleGenerationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunContractRuleGenerationResponse({}));
    }
  }

  /**
   * 生成合同审查规则
   * 
   * @param tmpReq - RunContractRuleGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGenerationWithOptions(workspaceId: string, tmpReq: $_model.RunContractRuleGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunContractRuleGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunContractRuleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractRuleGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/rule/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunContractRuleGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunContractRuleGenerationResponse({}));
  }

  /**
   * 生成合同审查规则
   * 
   * @param request - RunContractRuleGenerationRequest
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGeneration(workspaceId: string, request: $_model.RunContractRuleGenerationRequest): Promise<$_model.RunContractRuleGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractRuleGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 法律咨询
   * 
   * @param tmpReq - RunLegalAdviceConsultationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLegalAdviceConsultationResponse
   */
  async *runLegalAdviceConsultationWithSSE(workspaceId: string, tmpReq: $_model.RunLegalAdviceConsultationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunLegalAdviceConsultationResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.RunLegalAdviceConsultationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLegalAdviceConsultation",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/legalAdvice/consult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunLegalAdviceConsultationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunLegalAdviceConsultationResponse({}));
    }
  }

  /**
   * 法律咨询
   * 
   * @param tmpReq - RunLegalAdviceConsultationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultationWithOptions(workspaceId: string, tmpReq: $_model.RunLegalAdviceConsultationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunLegalAdviceConsultationResponse> {
    tmpReq.validate();
    let request = new $_model.RunLegalAdviceConsultationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLegalAdviceConsultation",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/legalAdvice/consult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunLegalAdviceConsultationResponse>(await this.callApi(params, req, runtime), new $_model.RunLegalAdviceConsultationResponse({}));
  }

  /**
   * 法律咨询
   * 
   * @param request - RunLegalAdviceConsultationRequest
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultation(workspaceId: string, request: $_model.RunLegalAdviceConsultationRequest): Promise<$_model.RunLegalAdviceConsultationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLegalAdviceConsultationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 案例检索
   * 
   * @param tmpReq - RunSearchCaseFullTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchCaseFullTextResponse
   */
  async runSearchCaseFullTextWithOptions(workspaceId: string, tmpReq: $_model.RunSearchCaseFullTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchCaseFullTextResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchCaseFullTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "filterCondition", "json");
    }

    if (!$dara.isNull(tmpReq.pageParam)) {
      request.pageParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageParam, "pageParam", "json");
    }

    if (!$dara.isNull(tmpReq.queryKeywords)) {
      request.queryKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryKeywords, "queryKeywords", "json");
    }

    if (!$dara.isNull(tmpReq.sortKeyAndDirection)) {
      request.sortKeyAndDirectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortKeyAndDirection, "sortKeyAndDirection", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["filterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.pageParamShrink)) {
      body["pageParam"] = request.pageParamShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryKeywordsShrink)) {
      body["queryKeywords"] = request.queryKeywordsShrink;
    }

    if (!$dara.isNull(request.referLevel)) {
      body["referLevel"] = request.referLevel;
    }

    if (!$dara.isNull(request.sortKeyAndDirectionShrink)) {
      body["sortKeyAndDirection"] = request.sortKeyAndDirectionShrink;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchCaseFullText",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/search/case/fulltext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchCaseFullTextResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchCaseFullTextResponse({}));
  }

  /**
   * 案例检索
   * 
   * @param request - RunSearchCaseFullTextRequest
   * @returns RunSearchCaseFullTextResponse
   */
  async runSearchCaseFullText(workspaceId: string, request: $_model.RunSearchCaseFullTextRequest): Promise<$_model.RunSearchCaseFullTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSearchCaseFullTextWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 法规搜索
   * 
   * @param tmpReq - RunSearchLawQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchLawQueryResponse
   */
  async runSearchLawQueryWithOptions(workspaceId: string, tmpReq: $_model.RunSearchLawQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchLawQueryResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchLawQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "filterCondition", "json");
    }

    if (!$dara.isNull(tmpReq.pageParam)) {
      request.pageParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageParam, "pageParam", "json");
    }

    if (!$dara.isNull(tmpReq.queryKeywords)) {
      request.queryKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryKeywords, "queryKeywords", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["filterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.pageParamShrink)) {
      body["pageParam"] = request.pageParamShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryKeywordsShrink)) {
      body["queryKeywords"] = request.queryKeywordsShrink;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchLawQuery",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/search/law/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchLawQueryResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchLawQueryResponse({}));
  }

  /**
   * 法规搜索
   * 
   * @param request - RunSearchLawQueryRequest
   * @returns RunSearchLawQueryResponse
   */
  async runSearchLawQuery(workspaceId: string, request: $_model.RunSearchLawQueryRequest): Promise<$_model.RunSearchLawQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSearchLawQueryWithOptions(workspaceId, request, headers, runtime);
  }

}

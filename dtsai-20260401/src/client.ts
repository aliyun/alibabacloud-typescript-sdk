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
    this._endpoint = this.getEndpoint("dtsai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 网页搜索
   * 
   * @param request - CreateDocParserJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocParserJobResponse
   */
  async createDocParserJobWithOptions(request: $_model.CreateDocParserJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocParserJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocParserJob",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocParserJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocParserJobResponse({}));
  }

  /**
   * 网页搜索
   * 
   * @param request - CreateDocParserJobRequest
   * @returns CreateDocParserJobResponse
   */
  async createDocParserJob(request: $_model.CreateDocParserJobRequest): Promise<$_model.CreateDocParserJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocParserJobWithOptions(request, runtime);
  }

  async createDocParserJobAdvance(request: $_model.CreateDocParserJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocParserJobResponse> {
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
      Product: "DtsAI",
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
    let createDocParserJobReq = new $_model.CreateDocParserJobRequest({ });
    OpenApiUtil.convert(request, createDocParserJobReq);
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
      createDocParserJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let createDocParserJobResp = await this.createDocParserJobWithOptions(createDocParserJobReq, runtime);
    return createDocParserJobResp;
  }

  /**
   * 网页搜索
   * 
   * @param request - DescribeDocParserJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocParserJobResultResponse
   */
  async describeDocParserJobResultWithOptions(request: $_model.DescribeDocParserJobResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocParserJobResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocParserJobResult",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocParserJobResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocParserJobResultResponse({}));
  }

  /**
   * 网页搜索
   * 
   * @param request - DescribeDocParserJobResultRequest
   * @returns DescribeDocParserJobResultResponse
   */
  async describeDocParserJobResult(request: $_model.DescribeDocParserJobResultRequest): Promise<$_model.DescribeDocParserJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocParserJobResultWithOptions(request, runtime);
  }

  /**
   * 网页搜索
   * 
   * @param request - DescribeDocParserJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocParserJobStatusResponse
   */
  async describeDocParserJobStatusWithOptions(request: $_model.DescribeDocParserJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocParserJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocParserJobStatus",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocParserJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocParserJobStatusResponse({}));
  }

  /**
   * 网页搜索
   * 
   * @param request - DescribeDocParserJobStatusRequest
   * @returns DescribeDocParserJobStatusResponse
   */
  async describeDocParserJobStatus(request: $_model.DescribeDocParserJobStatusRequest): Promise<$_model.DescribeDocParserJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocParserJobStatusWithOptions(request, runtime);
  }

  /**
   * 网页搜索
   * 
   * @param request - WebFetchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebFetchResponse
   */
  async webFetchWithOptions(request: $_model.WebFetchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WebFetchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WebFetch",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WebFetchResponse>(await this.callApi(params, req, runtime), new $_model.WebFetchResponse({}));
  }

  /**
   * 网页搜索
   * 
   * @param request - WebFetchRequest
   * @returns WebFetchResponse
   */
  async webFetch(request: $_model.WebFetchRequest): Promise<$_model.WebFetchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.webFetchWithOptions(request, runtime);
  }

  /**
   * 网页搜索
   * 
   * @param request - WebSearchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebSearchResponse
   */
  async webSearchWithOptions(request: $_model.WebSearchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WebSearchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WebSearch",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WebSearchResponse>(await this.callApi(params, req, runtime), new $_model.WebSearchResponse({}));
  }

  /**
   * 网页搜索
   * 
   * @param request - WebSearchRequest
   * @returns WebSearchResponse
   */
  async webSearch(request: $_model.WebSearchRequest): Promise<$_model.WebSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.webSearchWithOptions(request, runtime);
  }

}

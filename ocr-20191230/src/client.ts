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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ocr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - GetAsyncJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResultWithOptions(request: $_model.GetAsyncJobResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncJobResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncJobResult",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncJobResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncJobResultResponse({}));
  }

  /**
   * @param request - GetAsyncJobResultRequest
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResult(request: $_model.GetAsyncJobResultRequest): Promise<$_model.GetAsyncJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  /**
   * @param request - RecognizeBankCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBankCardResponse
   */
  async recognizeBankCardWithOptions(request: $_model.RecognizeBankCardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeBankCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBankCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeBankCardResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeBankCardResponse({}));
  }

  /**
   * @param request - RecognizeBankCardRequest
   * @returns RecognizeBankCardResponse
   */
  async recognizeBankCard(request: $_model.RecognizeBankCardRequest): Promise<$_model.RecognizeBankCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  async recognizeBankCardAdvance(request: $_model.RecognizeBankCardAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeBankCardResponse> {
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
      Product: "ocr",
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
    let recognizeBankCardReq = new $_model.RecognizeBankCardRequest({ });
    OpenApiUtil.convert(request, recognizeBankCardReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeBankCardReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeBankCardResp = await this.recognizeBankCardWithOptions(recognizeBankCardReq, runtime);
    return recognizeBankCardResp;
  }

  /**
   * @param request - RecognizeBusinessLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBusinessLicenseResponse
   */
  async recognizeBusinessLicenseWithOptions(request: $_model.RecognizeBusinessLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeBusinessLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBusinessLicense",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeBusinessLicenseResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeBusinessLicenseResponse({}));
  }

  /**
   * @param request - RecognizeBusinessLicenseRequest
   * @returns RecognizeBusinessLicenseResponse
   */
  async recognizeBusinessLicense(request: $_model.RecognizeBusinessLicenseRequest): Promise<$_model.RecognizeBusinessLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  async recognizeBusinessLicenseAdvance(request: $_model.RecognizeBusinessLicenseAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeBusinessLicenseResponse> {
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
      Product: "ocr",
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
    let recognizeBusinessLicenseReq = new $_model.RecognizeBusinessLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeBusinessLicenseReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeBusinessLicenseReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeBusinessLicenseResp = await this.recognizeBusinessLicenseWithOptions(recognizeBusinessLicenseReq, runtime);
    return recognizeBusinessLicenseResp;
  }

  /**
   * 通用文字识别
   * 
   * @param request - RecognizeCharacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCharacterResponse
   */
  async recognizeCharacterWithOptions(request: $_model.RecognizeCharacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeCharacterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.minHeight)) {
      body["MinHeight"] = request.minHeight;
    }

    if (!$dara.isNull(request.outputProbability)) {
      body["OutputProbability"] = request.outputProbability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCharacter",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeCharacterResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeCharacterResponse({}));
  }

  /**
   * 通用文字识别
   * 
   * @param request - RecognizeCharacterRequest
   * @returns RecognizeCharacterResponse
   */
  async recognizeCharacter(request: $_model.RecognizeCharacterRequest): Promise<$_model.RecognizeCharacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCharacterWithOptions(request, runtime);
  }

  async recognizeCharacterAdvance(request: $_model.RecognizeCharacterAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeCharacterResponse> {
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
      Product: "ocr",
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
    let recognizeCharacterReq = new $_model.RecognizeCharacterRequest({ });
    OpenApiUtil.convert(request, recognizeCharacterReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeCharacterReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeCharacterResp = await this.recognizeCharacterWithOptions(recognizeCharacterReq, runtime);
    return recognizeCharacterResp;
  }

  /**
   * @param request - RecognizeDriverLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeDriverLicenseResponse
   */
  async recognizeDriverLicenseWithOptions(request: $_model.RecognizeDriverLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeDriverLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeDriverLicense",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeDriverLicenseResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeDriverLicenseResponse({}));
  }

  /**
   * @param request - RecognizeDriverLicenseRequest
   * @returns RecognizeDriverLicenseResponse
   */
  async recognizeDriverLicense(request: $_model.RecognizeDriverLicenseRequest): Promise<$_model.RecognizeDriverLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeDriverLicenseWithOptions(request, runtime);
  }

  async recognizeDriverLicenseAdvance(request: $_model.RecognizeDriverLicenseAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeDriverLicenseResponse> {
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
      Product: "ocr",
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
    let recognizeDriverLicenseReq = new $_model.RecognizeDriverLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeDriverLicenseReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeDriverLicenseReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeDriverLicenseResp = await this.recognizeDriverLicenseWithOptions(recognizeDriverLicenseReq, runtime);
    return recognizeDriverLicenseResp;
  }

  /**
   * @param request - RecognizeDrivingLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeDrivingLicenseResponse
   */
  async recognizeDrivingLicenseWithOptions(request: $_model.RecognizeDrivingLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeDrivingLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeDrivingLicense",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeDrivingLicenseResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeDrivingLicenseResponse({}));
  }

  /**
   * @param request - RecognizeDrivingLicenseRequest
   * @returns RecognizeDrivingLicenseResponse
   */
  async recognizeDrivingLicense(request: $_model.RecognizeDrivingLicenseRequest): Promise<$_model.RecognizeDrivingLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  async recognizeDrivingLicenseAdvance(request: $_model.RecognizeDrivingLicenseAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeDrivingLicenseResponse> {
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
      Product: "ocr",
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
    let recognizeDrivingLicenseReq = new $_model.RecognizeDrivingLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeDrivingLicenseReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeDrivingLicenseReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeDrivingLicenseResp = await this.recognizeDrivingLicenseWithOptions(recognizeDrivingLicenseReq, runtime);
    return recognizeDrivingLicenseResp;
  }

  /**
   * @param request - RecognizeIdentityCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeIdentityCardResponse
   */
  async recognizeIdentityCardWithOptions(request: $_model.RecognizeIdentityCardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeIdentityCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeIdentityCardResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeIdentityCardResponse({}));
  }

  /**
   * @param request - RecognizeIdentityCardRequest
   * @returns RecognizeIdentityCardResponse
   */
  async recognizeIdentityCard(request: $_model.RecognizeIdentityCardRequest): Promise<$_model.RecognizeIdentityCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeIdentityCardWithOptions(request, runtime);
  }

  async recognizeIdentityCardAdvance(request: $_model.RecognizeIdentityCardAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeIdentityCardResponse> {
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
      Product: "ocr",
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
    let recognizeIdentityCardReq = new $_model.RecognizeIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeIdentityCardReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeIdentityCardReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeIdentityCardResp = await this.recognizeIdentityCardWithOptions(recognizeIdentityCardReq, runtime);
    return recognizeIdentityCardResp;
  }

  /**
   * @param request - RecognizeLicensePlateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeLicensePlateResponse
   */
  async recognizeLicensePlateWithOptions(request: $_model.RecognizeLicensePlateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeLicensePlateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeLicensePlate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeLicensePlateResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeLicensePlateResponse({}));
  }

  /**
   * @param request - RecognizeLicensePlateRequest
   * @returns RecognizeLicensePlateResponse
   */
  async recognizeLicensePlate(request: $_model.RecognizeLicensePlateRequest): Promise<$_model.RecognizeLicensePlateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeLicensePlateWithOptions(request, runtime);
  }

  async recognizeLicensePlateAdvance(request: $_model.RecognizeLicensePlateAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeLicensePlateResponse> {
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
      Product: "ocr",
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
    let recognizeLicensePlateReq = new $_model.RecognizeLicensePlateRequest({ });
    OpenApiUtil.convert(request, recognizeLicensePlateReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeLicensePlateReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeLicensePlateResp = await this.recognizeLicensePlateWithOptions(recognizeLicensePlateReq, runtime);
    return recognizeLicensePlateResp;
  }

  /**
   * PDF识别
   * 
   * @param request - RecognizePdfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizePdfResponse
   */
  async recognizePdfWithOptions(request: $_model.RecognizePdfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizePdfResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizePdf",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizePdfResponse>(await this.callApi(params, req, runtime), new $_model.RecognizePdfResponse({}));
  }

  /**
   * PDF识别
   * 
   * @param request - RecognizePdfRequest
   * @returns RecognizePdfResponse
   */
  async recognizePdf(request: $_model.RecognizePdfRequest): Promise<$_model.RecognizePdfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizePdfWithOptions(request, runtime);
  }

  async recognizePdfAdvance(request: $_model.RecognizePdfAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizePdfResponse> {
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
      Product: "ocr",
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
    let recognizePdfReq = new $_model.RecognizePdfRequest({ });
    OpenApiUtil.convert(request, recognizePdfReq);
    if (!$dara.isNull(request.fileURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileURLObject,
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
      recognizePdfReq.fileURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizePdfResp = await this.recognizePdfWithOptions(recognizePdfReq, runtime);
    return recognizePdfResp;
  }

  /**
   * @param request - RecognizeQrCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeQrCodeResponse
   */
  async recognizeQrCodeWithOptions(request: $_model.RecognizeQrCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeQrCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeQrCode",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeQrCodeResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeQrCodeResponse({}));
  }

  /**
   * @param request - RecognizeQrCodeRequest
   * @returns RecognizeQrCodeResponse
   */
  async recognizeQrCode(request: $_model.RecognizeQrCodeRequest): Promise<$_model.RecognizeQrCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeQrCodeWithOptions(request, runtime);
  }

  async recognizeQrCodeAdvance(request: $_model.RecognizeQrCodeAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeQrCodeResponse> {
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
      Product: "ocr",
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
    let recognizeQrCodeReq = new $_model.RecognizeQrCodeRequest({ });
    OpenApiUtil.convert(request, recognizeQrCodeReq);
    if (!$dara.isNull(request.tasks)) {
      let i0 : number = 0;

      for(let item0 of request.tasks) {
        if (!$dara.isNull(item0.imageURLObject)) {
          authResponse = await authClient.callApi(authParams, authReq, runtime);
          tmpBody = authResponse["body"];
          useAccelerate = Boolean(tmpBody["UseAccelerate"]);
          authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
          fileObj = new $dara.FileField({
            filename: authResponseBody["ObjectKey"],
            content: item0.imageURLObject,
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
          let tmpObj : $_model.RecognizeQrCodeRequestTasks = recognizeQrCodeReq.tasks[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let recognizeQrCodeResp = await this.recognizeQrCodeWithOptions(recognizeQrCodeReq, runtime);
    return recognizeQrCodeResp;
  }

  /**
   * 定额发票识别
   * 
   * @param request - RecognizeQuotaInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeQuotaInvoiceResponse
   */
  async recognizeQuotaInvoiceWithOptions(request: $_model.RecognizeQuotaInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeQuotaInvoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeQuotaInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeQuotaInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeQuotaInvoiceResponse({}));
  }

  /**
   * 定额发票识别
   * 
   * @param request - RecognizeQuotaInvoiceRequest
   * @returns RecognizeQuotaInvoiceResponse
   */
  async recognizeQuotaInvoice(request: $_model.RecognizeQuotaInvoiceRequest): Promise<$_model.RecognizeQuotaInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeQuotaInvoiceWithOptions(request, runtime);
  }

  async recognizeQuotaInvoiceAdvance(request: $_model.RecognizeQuotaInvoiceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeQuotaInvoiceResponse> {
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
      Product: "ocr",
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
    let recognizeQuotaInvoiceReq = new $_model.RecognizeQuotaInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeQuotaInvoiceReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeQuotaInvoiceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeQuotaInvoiceResp = await this.recognizeQuotaInvoiceWithOptions(recognizeQuotaInvoiceReq, runtime);
    return recognizeQuotaInvoiceResp;
  }

  /**
   * @param request - RecognizeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTableResponse
   */
  async recognizeTableWithOptions(request: $_model.RecognizeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assureDirection)) {
      body["AssureDirection"] = request.assureDirection;
    }

    if (!$dara.isNull(request.hasLine)) {
      body["HasLine"] = request.hasLine;
    }

    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.skipDetection)) {
      body["SkipDetection"] = request.skipDetection;
    }

    if (!$dara.isNull(request.useFinanceModel)) {
      body["UseFinanceModel"] = request.useFinanceModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTable",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeTableResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeTableResponse({}));
  }

  /**
   * @param request - RecognizeTableRequest
   * @returns RecognizeTableResponse
   */
  async recognizeTable(request: $_model.RecognizeTableRequest): Promise<$_model.RecognizeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTableWithOptions(request, runtime);
  }

  async recognizeTableAdvance(request: $_model.RecognizeTableAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTableResponse> {
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
      Product: "ocr",
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
    let recognizeTableReq = new $_model.RecognizeTableRequest({ });
    OpenApiUtil.convert(request, recognizeTableReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeTableReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeTableResp = await this.recognizeTableWithOptions(recognizeTableReq, runtime);
    return recognizeTableResp;
  }

  /**
   * @param request - RecognizeTaxiInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTaxiInvoiceResponse
   */
  async recognizeTaxiInvoiceWithOptions(request: $_model.RecognizeTaxiInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTaxiInvoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTaxiInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeTaxiInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeTaxiInvoiceResponse({}));
  }

  /**
   * @param request - RecognizeTaxiInvoiceRequest
   * @returns RecognizeTaxiInvoiceResponse
   */
  async recognizeTaxiInvoice(request: $_model.RecognizeTaxiInvoiceRequest): Promise<$_model.RecognizeTaxiInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  async recognizeTaxiInvoiceAdvance(request: $_model.RecognizeTaxiInvoiceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTaxiInvoiceResponse> {
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
      Product: "ocr",
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
    let recognizeTaxiInvoiceReq = new $_model.RecognizeTaxiInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeTaxiInvoiceReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeTaxiInvoiceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeTaxiInvoiceResp = await this.recognizeTaxiInvoiceWithOptions(recognizeTaxiInvoiceReq, runtime);
    return recognizeTaxiInvoiceResp;
  }

  /**
   * 增值税发票卷票
   * 
   * @param request - RecognizeTicketInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTicketInvoiceResponse
   */
  async recognizeTicketInvoiceWithOptions(request: $_model.RecognizeTicketInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTicketInvoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTicketInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeTicketInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeTicketInvoiceResponse({}));
  }

  /**
   * 增值税发票卷票
   * 
   * @param request - RecognizeTicketInvoiceRequest
   * @returns RecognizeTicketInvoiceResponse
   */
  async recognizeTicketInvoice(request: $_model.RecognizeTicketInvoiceRequest): Promise<$_model.RecognizeTicketInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTicketInvoiceWithOptions(request, runtime);
  }

  async recognizeTicketInvoiceAdvance(request: $_model.RecognizeTicketInvoiceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTicketInvoiceResponse> {
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
      Product: "ocr",
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
    let recognizeTicketInvoiceReq = new $_model.RecognizeTicketInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeTicketInvoiceReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeTicketInvoiceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeTicketInvoiceResp = await this.recognizeTicketInvoiceWithOptions(recognizeTicketInvoiceReq, runtime);
    return recognizeTicketInvoiceResp;
  }

  /**
   * @param request - RecognizeTrainTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTrainTicketResponse
   */
  async recognizeTrainTicketWithOptions(request: $_model.RecognizeTrainTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTrainTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTrainTicket",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeTrainTicketResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeTrainTicketResponse({}));
  }

  /**
   * @param request - RecognizeTrainTicketRequest
   * @returns RecognizeTrainTicketResponse
   */
  async recognizeTrainTicket(request: $_model.RecognizeTrainTicketRequest): Promise<$_model.RecognizeTrainTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTrainTicketWithOptions(request, runtime);
  }

  async recognizeTrainTicketAdvance(request: $_model.RecognizeTrainTicketAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeTrainTicketResponse> {
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
      Product: "ocr",
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
    let recognizeTrainTicketReq = new $_model.RecognizeTrainTicketRequest({ });
    OpenApiUtil.convert(request, recognizeTrainTicketReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeTrainTicketReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeTrainTicketResp = await this.recognizeTrainTicketWithOptions(recognizeTrainTicketReq, runtime);
    return recognizeTrainTicketResp;
  }

  /**
   * @param request - RecognizeVATInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVATInvoiceResponse
   */
  async recognizeVATInvoiceWithOptions(request: $_model.RecognizeVATInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVATInvoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVATInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeVATInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeVATInvoiceResponse({}));
  }

  /**
   * @param request - RecognizeVATInvoiceRequest
   * @returns RecognizeVATInvoiceResponse
   */
  async recognizeVATInvoice(request: $_model.RecognizeVATInvoiceRequest): Promise<$_model.RecognizeVATInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVATInvoiceWithOptions(request, runtime);
  }

  async recognizeVATInvoiceAdvance(request: $_model.RecognizeVATInvoiceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVATInvoiceResponse> {
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
      Product: "ocr",
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
    let recognizeVATInvoiceReq = new $_model.RecognizeVATInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeVATInvoiceReq);
    if (!$dara.isNull(request.fileURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileURLObject,
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
      recognizeVATInvoiceReq.fileURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeVATInvoiceResp = await this.recognizeVATInvoiceWithOptions(recognizeVATInvoiceReq, runtime);
    return recognizeVATInvoiceResp;
  }

  /**
   * @param request - RecognizeVINCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVINCodeResponse
   */
  async recognizeVINCodeWithOptions(request: $_model.RecognizeVINCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVINCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVINCode",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeVINCodeResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeVINCodeResponse({}));
  }

  /**
   * @param request - RecognizeVINCodeRequest
   * @returns RecognizeVINCodeResponse
   */
  async recognizeVINCode(request: $_model.RecognizeVINCodeRequest): Promise<$_model.RecognizeVINCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVINCodeWithOptions(request, runtime);
  }

  async recognizeVINCodeAdvance(request: $_model.RecognizeVINCodeAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVINCodeResponse> {
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
      Product: "ocr",
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
    let recognizeVINCodeReq = new $_model.RecognizeVINCodeRequest({ });
    OpenApiUtil.convert(request, recognizeVINCodeReq);
    if (!$dara.isNull(request.imageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLObject,
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
      recognizeVINCodeReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeVINCodeResp = await this.recognizeVINCodeWithOptions(recognizeVINCodeReq, runtime);
    return recognizeVINCodeResp;
  }

  /**
   * 通用视频文字识别
   * 
   * @param request - RecognizeVideoCharacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVideoCharacterResponse
   */
  async recognizeVideoCharacterWithOptions(request: $_model.RecognizeVideoCharacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVideoCharacterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVideoCharacter",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeVideoCharacterResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeVideoCharacterResponse({}));
  }

  /**
   * 通用视频文字识别
   * 
   * @param request - RecognizeVideoCharacterRequest
   * @returns RecognizeVideoCharacterResponse
   */
  async recognizeVideoCharacter(request: $_model.RecognizeVideoCharacterRequest): Promise<$_model.RecognizeVideoCharacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVideoCharacterWithOptions(request, runtime);
  }

  async recognizeVideoCharacterAdvance(request: $_model.RecognizeVideoCharacterAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeVideoCharacterResponse> {
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
      Product: "ocr",
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
    let recognizeVideoCharacterReq = new $_model.RecognizeVideoCharacterRequest({ });
    OpenApiUtil.convert(request, recognizeVideoCharacterReq);
    if (!$dara.isNull(request.videoURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoURLObject,
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
      recognizeVideoCharacterReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeVideoCharacterResp = await this.recognizeVideoCharacterWithOptions(recognizeVideoCharacterReq, runtime);
    return recognizeVideoCharacterResp;
  }

}

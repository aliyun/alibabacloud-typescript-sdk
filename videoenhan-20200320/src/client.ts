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
    this._endpoint = this.getEndpoint("videoenhan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 视频人脸融合模板增加
   * 
   * @param request - AddFaceVideoTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceVideoTemplateResponse
   */
  async addFaceVideoTemplateWithOptions(request: $_model.AddFaceVideoTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceVideoTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoScene)) {
      body["VideoScene"] = request.videoScene;
    }

    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceVideoTemplateResponse({}));
  }

  /**
   * 视频人脸融合模板增加
   * 
   * @param request - AddFaceVideoTemplateRequest
   * @returns AddFaceVideoTemplateResponse
   */
  async addFaceVideoTemplate(request: $_model.AddFaceVideoTemplateRequest): Promise<$_model.AddFaceVideoTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceVideoTemplateWithOptions(request, runtime);
  }

  async addFaceVideoTemplateAdvance(request: $_model.AddFaceVideoTemplateAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceVideoTemplateResponse> {
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
      Product: "videoenhan",
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
    let addFaceVideoTemplateReq = new $_model.AddFaceVideoTemplateRequest({ });
    OpenApiUtil.convert(request, addFaceVideoTemplateReq);
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
      addFaceVideoTemplateReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let addFaceVideoTemplateResp = await this.addFaceVideoTemplateWithOptions(addFaceVideoTemplateReq, runtime);
    return addFaceVideoTemplateResp;
  }

  /**
   * @param request - AdjustVideoColorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AdjustVideoColorResponse
   */
  async adjustVideoColorWithOptions(request: $_model.AdjustVideoColorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AdjustVideoColorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.videoBitrate)) {
      body["VideoBitrate"] = request.videoBitrate;
    }

    if (!$dara.isNull(request.videoCodec)) {
      body["VideoCodec"] = request.videoCodec;
    }

    if (!$dara.isNull(request.videoFormat)) {
      body["VideoFormat"] = request.videoFormat;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AdjustVideoColor",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AdjustVideoColorResponse>(await this.callApi(params, req, runtime), new $_model.AdjustVideoColorResponse({}));
  }

  /**
   * @param request - AdjustVideoColorRequest
   * @returns AdjustVideoColorResponse
   */
  async adjustVideoColor(request: $_model.AdjustVideoColorRequest): Promise<$_model.AdjustVideoColorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.adjustVideoColorWithOptions(request, runtime);
  }

  async adjustVideoColorAdvance(request: $_model.AdjustVideoColorAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AdjustVideoColorResponse> {
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
      Product: "videoenhan",
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
    let adjustVideoColorReq = new $_model.AdjustVideoColorRequest({ });
    OpenApiUtil.convert(request, adjustVideoColorReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      adjustVideoColorReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let adjustVideoColorResp = await this.adjustVideoColorWithOptions(adjustVideoColorReq, runtime);
    return adjustVideoColorResp;
  }

  /**
   * @param request - ChangeVideoSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeVideoSizeResponse
   */
  async changeVideoSizeWithOptions(request: $_model.ChangeVideoSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeVideoSizeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.b)) {
      body["B"] = request.b;
    }

    if (!$dara.isNull(request.cropType)) {
      body["CropType"] = request.cropType;
    }

    if (!$dara.isNull(request.fillType)) {
      body["FillType"] = request.fillType;
    }

    if (!$dara.isNull(request.g)) {
      body["G"] = request.g;
    }

    if (!$dara.isNull(request.height)) {
      body["Height"] = request.height;
    }

    if (!$dara.isNull(request.r)) {
      body["R"] = request.r;
    }

    if (!$dara.isNull(request.tightness)) {
      body["Tightness"] = request.tightness;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    if (!$dara.isNull(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeVideoSize",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeVideoSizeResponse>(await this.callApi(params, req, runtime), new $_model.ChangeVideoSizeResponse({}));
  }

  /**
   * @param request - ChangeVideoSizeRequest
   * @returns ChangeVideoSizeResponse
   */
  async changeVideoSize(request: $_model.ChangeVideoSizeRequest): Promise<$_model.ChangeVideoSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeVideoSizeWithOptions(request, runtime);
  }

  async changeVideoSizeAdvance(request: $_model.ChangeVideoSizeAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeVideoSizeResponse> {
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
      Product: "videoenhan",
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
    let changeVideoSizeReq = new $_model.ChangeVideoSizeRequest({ });
    OpenApiUtil.convert(request, changeVideoSizeReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      changeVideoSizeReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let changeVideoSizeResp = await this.changeVideoSizeWithOptions(changeVideoSizeReq, runtime);
    return changeVideoSizeResp;
  }

  /**
   * 视频人脸融合模板删除
   * 
   * @param request - DeleteFaceVideoTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceVideoTemplateResponse
   */
  async deleteFaceVideoTemplateWithOptions(request: $_model.DeleteFaceVideoTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceVideoTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceVideoTemplateResponse({}));
  }

  /**
   * 视频人脸融合模板删除
   * 
   * @param request - DeleteFaceVideoTemplateRequest
   * @returns DeleteFaceVideoTemplateResponse
   */
  async deleteFaceVideoTemplate(request: $_model.DeleteFaceVideoTemplateRequest): Promise<$_model.DeleteFaceVideoTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceVideoTemplateWithOptions(request, runtime);
  }

  /**
   * 视频人像增强
   * 
   * @param request - EnhancePortraitVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnhancePortraitVideoResponse
   */
  async enhancePortraitVideoWithOptions(request: $_model.EnhancePortraitVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhancePortraitVideoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnhancePortraitVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnhancePortraitVideoResponse>(await this.callApi(params, req, runtime), new $_model.EnhancePortraitVideoResponse({}));
  }

  /**
   * 视频人像增强
   * 
   * @param request - EnhancePortraitVideoRequest
   * @returns EnhancePortraitVideoResponse
   */
  async enhancePortraitVideo(request: $_model.EnhancePortraitVideoRequest): Promise<$_model.EnhancePortraitVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enhancePortraitVideoWithOptions(request, runtime);
  }

  async enhancePortraitVideoAdvance(request: $_model.EnhancePortraitVideoAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhancePortraitVideoResponse> {
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
      Product: "videoenhan",
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
    let enhancePortraitVideoReq = new $_model.EnhancePortraitVideoRequest({ });
    OpenApiUtil.convert(request, enhancePortraitVideoReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      enhancePortraitVideoReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let enhancePortraitVideoResp = await this.enhancePortraitVideoWithOptions(enhancePortraitVideoReq, runtime);
    return enhancePortraitVideoResp;
  }

  /**
   * @param request - EnhanceVideoQualityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnhanceVideoQualityResponse
   */
  async enhanceVideoQualityWithOptions(request: $_model.EnhanceVideoQualityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhanceVideoQualityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!$dara.isNull(request.frameRate)) {
      body["FrameRate"] = request.frameRate;
    }

    if (!$dara.isNull(request.HDRFormat)) {
      body["HDRFormat"] = request.HDRFormat;
    }

    if (!$dara.isNull(request.maxIlluminance)) {
      body["MaxIlluminance"] = request.maxIlluminance;
    }

    if (!$dara.isNull(request.outPutHeight)) {
      body["OutPutHeight"] = request.outPutHeight;
    }

    if (!$dara.isNull(request.outPutWidth)) {
      body["OutPutWidth"] = request.outPutWidth;
    }

    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnhanceVideoQuality",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnhanceVideoQualityResponse>(await this.callApi(params, req, runtime), new $_model.EnhanceVideoQualityResponse({}));
  }

  /**
   * @param request - EnhanceVideoQualityRequest
   * @returns EnhanceVideoQualityResponse
   */
  async enhanceVideoQuality(request: $_model.EnhanceVideoQualityRequest): Promise<$_model.EnhanceVideoQualityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enhanceVideoQualityWithOptions(request, runtime);
  }

  async enhanceVideoQualityAdvance(request: $_model.EnhanceVideoQualityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhanceVideoQualityResponse> {
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
      Product: "videoenhan",
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
    let enhanceVideoQualityReq = new $_model.EnhanceVideoQualityRequest({ });
    OpenApiUtil.convert(request, enhanceVideoQualityReq);
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
      enhanceVideoQualityReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let enhanceVideoQualityResp = await this.enhanceVideoQualityWithOptions(enhanceVideoQualityReq, runtime);
    return enhanceVideoQualityResp;
  }

  /**
   * @param request - EraseVideoLogoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EraseVideoLogoResponse
   */
  async eraseVideoLogoWithOptions(request: $_model.EraseVideoLogoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EraseVideoLogoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.boxes)) {
      body["Boxes"] = request.boxes;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EraseVideoLogo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EraseVideoLogoResponse>(await this.callApi(params, req, runtime), new $_model.EraseVideoLogoResponse({}));
  }

  /**
   * @param request - EraseVideoLogoRequest
   * @returns EraseVideoLogoResponse
   */
  async eraseVideoLogo(request: $_model.EraseVideoLogoRequest): Promise<$_model.EraseVideoLogoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eraseVideoLogoWithOptions(request, runtime);
  }

  async eraseVideoLogoAdvance(request: $_model.EraseVideoLogoAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EraseVideoLogoResponse> {
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
      Product: "videoenhan",
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
    let eraseVideoLogoReq = new $_model.EraseVideoLogoRequest({ });
    OpenApiUtil.convert(request, eraseVideoLogoReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      eraseVideoLogoReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let eraseVideoLogoResp = await this.eraseVideoLogoWithOptions(eraseVideoLogoReq, runtime);
    return eraseVideoLogoResp;
  }

  /**
   * @param request - EraseVideoSubtitlesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EraseVideoSubtitlesResponse
   */
  async eraseVideoSubtitlesWithOptions(request: $_model.EraseVideoSubtitlesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EraseVideoSubtitlesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.BH)) {
      body["BH"] = request.BH;
    }

    if (!$dara.isNull(request.BW)) {
      body["BW"] = request.BW;
    }

    if (!$dara.isNull(request.BX)) {
      body["BX"] = request.BX;
    }

    if (!$dara.isNull(request.BY)) {
      body["BY"] = request.BY;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EraseVideoSubtitles",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EraseVideoSubtitlesResponse>(await this.callApi(params, req, runtime), new $_model.EraseVideoSubtitlesResponse({}));
  }

  /**
   * @param request - EraseVideoSubtitlesRequest
   * @returns EraseVideoSubtitlesResponse
   */
  async eraseVideoSubtitles(request: $_model.EraseVideoSubtitlesRequest): Promise<$_model.EraseVideoSubtitlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eraseVideoSubtitlesWithOptions(request, runtime);
  }

  async eraseVideoSubtitlesAdvance(request: $_model.EraseVideoSubtitlesAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EraseVideoSubtitlesResponse> {
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
      Product: "videoenhan",
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
    let eraseVideoSubtitlesReq = new $_model.EraseVideoSubtitlesRequest({ });
    OpenApiUtil.convert(request, eraseVideoSubtitlesReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      eraseVideoSubtitlesReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let eraseVideoSubtitlesResp = await this.eraseVideoSubtitlesWithOptions(eraseVideoSubtitlesReq, runtime);
    return eraseVideoSubtitlesResp;
  }

  /**
   * 视频人像卡通化
   * 
   * @param request - GenerateHumanAnimeStyleVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateHumanAnimeStyleVideoResponse
   */
  async generateHumanAnimeStyleVideoWithOptions(request: $_model.GenerateHumanAnimeStyleVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanAnimeStyleVideoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cartoonStyle)) {
      body["CartoonStyle"] = request.cartoonStyle;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateHumanAnimeStyleVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateHumanAnimeStyleVideoResponse>(await this.callApi(params, req, runtime), new $_model.GenerateHumanAnimeStyleVideoResponse({}));
  }

  /**
   * 视频人像卡通化
   * 
   * @param request - GenerateHumanAnimeStyleVideoRequest
   * @returns GenerateHumanAnimeStyleVideoResponse
   */
  async generateHumanAnimeStyleVideo(request: $_model.GenerateHumanAnimeStyleVideoRequest): Promise<$_model.GenerateHumanAnimeStyleVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateHumanAnimeStyleVideoWithOptions(request, runtime);
  }

  async generateHumanAnimeStyleVideoAdvance(request: $_model.GenerateHumanAnimeStyleVideoAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanAnimeStyleVideoResponse> {
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
      Product: "videoenhan",
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
    let generateHumanAnimeStyleVideoReq = new $_model.GenerateHumanAnimeStyleVideoRequest({ });
    OpenApiUtil.convert(request, generateHumanAnimeStyleVideoReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      generateHumanAnimeStyleVideoReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let generateHumanAnimeStyleVideoResp = await this.generateHumanAnimeStyleVideoWithOptions(generateHumanAnimeStyleVideoReq, runtime);
    return generateHumanAnimeStyleVideoResp;
  }

  /**
   * @param request - GenerateVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateVideoResponse
   */
  async generateVideoWithOptions(request: $_model.GenerateVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateVideoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.durationAdaption)) {
      body["DurationAdaption"] = request.durationAdaption;
    }

    if (!$dara.isNull(request.fileList)) {
      body["FileList"] = request.fileList;
    }

    if (!$dara.isNull(request.height)) {
      body["Height"] = request.height;
    }

    if (!$dara.isNull(request.mute)) {
      body["Mute"] = request.mute;
    }

    if (!$dara.isNull(request.puzzleEffect)) {
      body["PuzzleEffect"] = request.puzzleEffect;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.smartEffect)) {
      body["SmartEffect"] = request.smartEffect;
    }

    if (!$dara.isNull(request.style)) {
      body["Style"] = request.style;
    }

    if (!$dara.isNull(request.transitionStyle)) {
      body["TransitionStyle"] = request.transitionStyle;
    }

    if (!$dara.isNull(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateVideoResponse>(await this.callApi(params, req, runtime), new $_model.GenerateVideoResponse({}));
  }

  /**
   * @param request - GenerateVideoRequest
   * @returns GenerateVideoResponse
   */
  async generateVideo(request: $_model.GenerateVideoRequest): Promise<$_model.GenerateVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateVideoWithOptions(request, runtime);
  }

  async generateVideoAdvance(request: $_model.GenerateVideoAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateVideoResponse> {
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
      Product: "videoenhan",
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
    let generateVideoReq = new $_model.GenerateVideoRequest({ });
    OpenApiUtil.convert(request, generateVideoReq);
    if (!$dara.isNull(request.fileList)) {
      let i0 : number = 0;

      for(let item0 of request.fileList) {
        if (!$dara.isNull(item0.fileUrlObject)) {
          authResponse = await authClient.callApi(authParams, authReq, runtime);
          tmpBody = authResponse["body"];
          useAccelerate = Boolean(tmpBody["UseAccelerate"]);
          authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
          fileObj = new $dara.FileField({
            filename: authResponseBody["ObjectKey"],
            content: item0.fileUrlObject,
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
          let tmpObj : $_model.GenerateVideoRequestFileList = generateVideoReq.fileList[i0];
          tmpObj.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let generateVideoResp = await this.generateVideoWithOptions(generateVideoReq, runtime);
    return generateVideoResp;
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
      version: "2020-03-20",
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
   * @param request - InterpolateVideoFrameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InterpolateVideoFrameResponse
   */
  async interpolateVideoFrameWithOptions(request: $_model.InterpolateVideoFrameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InterpolateVideoFrameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!$dara.isNull(request.frameRate)) {
      body["FrameRate"] = request.frameRate;
    }

    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InterpolateVideoFrame",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InterpolateVideoFrameResponse>(await this.callApi(params, req, runtime), new $_model.InterpolateVideoFrameResponse({}));
  }

  /**
   * @param request - InterpolateVideoFrameRequest
   * @returns InterpolateVideoFrameResponse
   */
  async interpolateVideoFrame(request: $_model.InterpolateVideoFrameRequest): Promise<$_model.InterpolateVideoFrameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.interpolateVideoFrameWithOptions(request, runtime);
  }

  async interpolateVideoFrameAdvance(request: $_model.InterpolateVideoFrameAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InterpolateVideoFrameResponse> {
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
      Product: "videoenhan",
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
    let interpolateVideoFrameReq = new $_model.InterpolateVideoFrameRequest({ });
    OpenApiUtil.convert(request, interpolateVideoFrameReq);
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
      interpolateVideoFrameReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let interpolateVideoFrameResp = await this.interpolateVideoFrameWithOptions(interpolateVideoFrameReq, runtime);
    return interpolateVideoFrameResp;
  }

  /**
   * @param request - MergeVideoFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeVideoFaceResponse
   */
  async mergeVideoFaceWithOptions(request: $_model.MergeVideoFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeVideoFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!$dara.isNull(request.enhance)) {
      body["Enhance"] = request.enhance;
    }

    if (!$dara.isNull(request.referenceURL)) {
      body["ReferenceURL"] = request.referenceURL;
    }

    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    if (!$dara.isNull(request.watermarkType)) {
      body["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MergeVideoFace",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MergeVideoFaceResponse>(await this.callApi(params, req, runtime), new $_model.MergeVideoFaceResponse({}));
  }

  /**
   * @param request - MergeVideoFaceRequest
   * @returns MergeVideoFaceResponse
   */
  async mergeVideoFace(request: $_model.MergeVideoFaceRequest): Promise<$_model.MergeVideoFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mergeVideoFaceWithOptions(request, runtime);
  }

  async mergeVideoFaceAdvance(request: $_model.MergeVideoFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeVideoFaceResponse> {
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
      Product: "videoenhan",
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
    let mergeVideoFaceReq = new $_model.MergeVideoFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoFaceReq);
    if (!$dara.isNull(request.referenceURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.referenceURLObject,
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
      mergeVideoFaceReq.referenceURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

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
      mergeVideoFaceReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let mergeVideoFaceResp = await this.mergeVideoFaceWithOptions(mergeVideoFaceReq, runtime);
    return mergeVideoFaceResp;
  }

  /**
   * 视频模板融合换脸
   * 
   * @param request - MergeVideoModelFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeVideoModelFaceResponse
   */
  async mergeVideoModelFaceWithOptions(request: $_model.MergeVideoModelFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeVideoModelFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!$dara.isNull(request.enhance)) {
      body["Enhance"] = request.enhance;
    }

    if (!$dara.isNull(request.faceImageURL)) {
      body["FaceImageURL"] = request.faceImageURL;
    }

    if (!$dara.isNull(request.mergeInfos)) {
      body["MergeInfos"] = request.mergeInfos;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.watermarkType)) {
      body["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MergeVideoModelFace",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MergeVideoModelFaceResponse>(await this.callApi(params, req, runtime), new $_model.MergeVideoModelFaceResponse({}));
  }

  /**
   * 视频模板融合换脸
   * 
   * @param request - MergeVideoModelFaceRequest
   * @returns MergeVideoModelFaceResponse
   */
  async mergeVideoModelFace(request: $_model.MergeVideoModelFaceRequest): Promise<$_model.MergeVideoModelFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mergeVideoModelFaceWithOptions(request, runtime);
  }

  async mergeVideoModelFaceAdvance(request: $_model.MergeVideoModelFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeVideoModelFaceResponse> {
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
      Product: "videoenhan",
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
    let mergeVideoModelFaceReq = new $_model.MergeVideoModelFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoModelFaceReq);
    if (!$dara.isNull(request.faceImageURLObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.faceImageURLObject,
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
      mergeVideoModelFaceReq.faceImageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let mergeVideoModelFaceResp = await this.mergeVideoModelFaceWithOptions(mergeVideoModelFaceReq, runtime);
    return mergeVideoModelFaceResp;
  }

  /**
   * 视频人脸融合模板查询
   * 
   * @param request - QueryFaceVideoTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceVideoTemplateResponse
   */
  async queryFaceVideoTemplateWithOptions(request: $_model.QueryFaceVideoTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceVideoTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceVideoTemplateResponse({}));
  }

  /**
   * 视频人脸融合模板查询
   * 
   * @param request - QueryFaceVideoTemplateRequest
   * @returns QueryFaceVideoTemplateResponse
   */
  async queryFaceVideoTemplate(request: $_model.QueryFaceVideoTemplateRequest): Promise<$_model.QueryFaceVideoTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceVideoTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - SuperResolveVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuperResolveVideoResponse
   */
  async superResolveVideoWithOptions(request: $_model.SuperResolveVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuperResolveVideoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bitRate)) {
      body["BitRate"] = request.bitRate;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuperResolveVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuperResolveVideoResponse>(await this.callApi(params, req, runtime), new $_model.SuperResolveVideoResponse({}));
  }

  /**
   * @param request - SuperResolveVideoRequest
   * @returns SuperResolveVideoResponse
   */
  async superResolveVideo(request: $_model.SuperResolveVideoRequest): Promise<$_model.SuperResolveVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.superResolveVideoWithOptions(request, runtime);
  }

  async superResolveVideoAdvance(request: $_model.SuperResolveVideoAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuperResolveVideoResponse> {
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
      Product: "videoenhan",
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
    let superResolveVideoReq = new $_model.SuperResolveVideoRequest({ });
    OpenApiUtil.convert(request, superResolveVideoReq);
    if (!$dara.isNull(request.videoUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.videoUrlObject,
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
      superResolveVideoReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let superResolveVideoResp = await this.superResolveVideoWithOptions(superResolveVideoReq, runtime);
    return superResolveVideoResp;
  }

}

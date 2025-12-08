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
    this._endpoint = this.getEndpoint("facebody", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceResponse
   */
  async addFaceWithOptions(request: $_model.AddFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.extraData)) {
      body["ExtraData"] = request.extraData;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    if (!$dara.isNull(request.similarityScoreThresholdBetweenEntity)) {
      body["SimilarityScoreThresholdBetweenEntity"] = request.similarityScoreThresholdBetweenEntity;
    }

    if (!$dara.isNull(request.similarityScoreThresholdInEntity)) {
      body["SimilarityScoreThresholdInEntity"] = request.similarityScoreThresholdInEntity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceResponse({}));
  }

  /**
   * @param request - AddFaceRequest
   * @returns AddFaceResponse
   */
  async addFace(request: $_model.AddFaceRequest): Promise<$_model.AddFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceWithOptions(request, runtime);
  }

  async addFaceAdvance(request: $_model.AddFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceResponse> {
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
      Product: "facebody",
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
    let addFaceReq = new $_model.AddFaceRequest({ });
    OpenApiUtil.convert(request, addFaceReq);
    if (!$dara.isNull(request.imageUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageUrlObject,
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
      addFaceReq.imageUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let addFaceResp = await this.addFaceWithOptions(addFaceReq, runtime);
    return addFaceResp;
  }

  /**
   * @param request - AddFaceEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceEntityResponse
   */
  async addFaceEntityWithOptions(request: $_model.AddFaceEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceEntityResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceEntityResponse({}));
  }

  /**
   * @param request - AddFaceEntityRequest
   * @returns AddFaceEntityResponse
   */
  async addFaceEntity(request: $_model.AddFaceEntityRequest): Promise<$_model.AddFaceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceEntityWithOptions(request, runtime);
  }

  /**
   * 图像人脸融合模板增加
   * 
   * @param request - AddFaceImageTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceImageTemplateResponse
   */
  async addFaceImageTemplateWithOptions(request: $_model.AddFaceImageTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceImageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceImageTemplateResponse({}));
  }

  /**
   * 图像人脸融合模板增加
   * 
   * @param request - AddFaceImageTemplateRequest
   * @returns AddFaceImageTemplateResponse
   */
  async addFaceImageTemplate(request: $_model.AddFaceImageTemplateRequest): Promise<$_model.AddFaceImageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceImageTemplateWithOptions(request, runtime);
  }

  async addFaceImageTemplateAdvance(request: $_model.AddFaceImageTemplateAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceImageTemplateResponse> {
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
      Product: "facebody",
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
    let addFaceImageTemplateReq = new $_model.AddFaceImageTemplateRequest({ });
    OpenApiUtil.convert(request, addFaceImageTemplateReq);
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
      addFaceImageTemplateReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let addFaceImageTemplateResp = await this.addFaceImageTemplateWithOptions(addFaceImageTemplateReq, runtime);
    return addFaceImageTemplateResp;
  }

  /**
   * 批量添加人脸数据
   * 
   * @param tmpReq - BatchAddFacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddFacesResponse
   */
  async batchAddFacesWithOptions(tmpReq: $_model.BatchAddFacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddFacesResponse> {
    tmpReq.validate();
    let request = new $_model.BatchAddFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.faces)) {
      request.facesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faces, "Faces", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.facesShrink)) {
      body["Faces"] = request.facesShrink;
    }

    if (!$dara.isNull(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    if (!$dara.isNull(request.similarityScoreThresholdBetweenEntity)) {
      body["SimilarityScoreThresholdBetweenEntity"] = request.similarityScoreThresholdBetweenEntity;
    }

    if (!$dara.isNull(request.similarityScoreThresholdInEntity)) {
      body["SimilarityScoreThresholdInEntity"] = request.similarityScoreThresholdInEntity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddFaces",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddFacesResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddFacesResponse({}));
  }

  /**
   * 批量添加人脸数据
   * 
   * @param request - BatchAddFacesRequest
   * @returns BatchAddFacesResponse
   */
  async batchAddFaces(request: $_model.BatchAddFacesRequest): Promise<$_model.BatchAddFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAddFacesWithOptions(request, runtime);
  }

  async batchAddFacesAdvance(request: $_model.BatchAddFacesAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddFacesResponse> {
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
      Product: "facebody",
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
    let batchAddFacesReq = new $_model.BatchAddFacesRequest({ });
    OpenApiUtil.convert(request, batchAddFacesReq);
    if (!$dara.isNull(request.faces)) {
      let i0 : number = 0;

      for(let item0 of request.faces) {
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
          let tmpObj : $_model.BatchAddFacesRequestFaces = batchAddFacesReq.faces[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let batchAddFacesResp = await this.batchAddFacesWithOptions(batchAddFacesReq, runtime);
    return batchAddFacesResp;
  }

  /**
   * @param request - BlurFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlurFaceResponse
   */
  async blurFaceWithOptions(request: $_model.BlurFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlurFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BlurFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BlurFaceResponse>(await this.callApi(params, req, runtime), new $_model.BlurFaceResponse({}));
  }

  /**
   * @param request - BlurFaceRequest
   * @returns BlurFaceResponse
   */
  async blurFace(request: $_model.BlurFaceRequest): Promise<$_model.BlurFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.blurFaceWithOptions(request, runtime);
  }

  async blurFaceAdvance(request: $_model.BlurFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlurFaceResponse> {
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
      Product: "facebody",
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
    let blurFaceReq = new $_model.BlurFaceRequest({ });
    OpenApiUtil.convert(request, blurFaceReq);
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
      blurFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let blurFaceResp = await this.blurFaceWithOptions(blurFaceReq, runtime);
    return blurFaceResp;
  }

  /**
   * @param request - BodyPostureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BodyPostureResponse
   */
  async bodyPostureWithOptions(request: $_model.BodyPostureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BodyPostureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BodyPosture",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BodyPostureResponse>(await this.callApi(params, req, runtime), new $_model.BodyPostureResponse({}));
  }

  /**
   * @param request - BodyPostureRequest
   * @returns BodyPostureResponse
   */
  async bodyPosture(request: $_model.BodyPostureRequest): Promise<$_model.BodyPostureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bodyPostureWithOptions(request, runtime);
  }

  async bodyPostureAdvance(request: $_model.BodyPostureAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BodyPostureResponse> {
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
      Product: "facebody",
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
    let bodyPostureReq = new $_model.BodyPostureRequest({ });
    OpenApiUtil.convert(request, bodyPostureReq);
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
      bodyPostureReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let bodyPostureResp = await this.bodyPostureWithOptions(bodyPostureReq, runtime);
    return bodyPostureResp;
  }

  /**
   * 人脸比对(1:1)
   * 
   * @param request - CompareFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFaceResponse
   */
  async compareFaceWithOptions(request: $_model.CompareFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageDataA)) {
      body["ImageDataA"] = request.imageDataA;
    }

    if (!$dara.isNull(request.imageDataB)) {
      body["ImageDataB"] = request.imageDataB;
    }

    if (!$dara.isNull(request.imageURLA)) {
      body["ImageURLA"] = request.imageURLA;
    }

    if (!$dara.isNull(request.imageURLB)) {
      body["ImageURLB"] = request.imageURLB;
    }

    if (!$dara.isNull(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareFaceResponse>(await this.callApi(params, req, runtime), new $_model.CompareFaceResponse({}));
  }

  /**
   * 人脸比对(1:1)
   * 
   * @param request - CompareFaceRequest
   * @returns CompareFaceResponse
   */
  async compareFace(request: $_model.CompareFaceRequest): Promise<$_model.CompareFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFaceWithOptions(request, runtime);
  }

  async compareFaceAdvance(request: $_model.CompareFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFaceResponse> {
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
      Product: "facebody",
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
    let compareFaceReq = new $_model.CompareFaceRequest({ });
    OpenApiUtil.convert(request, compareFaceReq);
    if (!$dara.isNull(request.imageURLAObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLAObject,
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
      compareFaceReq.imageURLA = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.imageURLBObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLBObject,
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
      compareFaceReq.imageURLB = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let compareFaceResp = await this.compareFaceWithOptions(compareFaceReq, runtime);
    return compareFaceResp;
  }

  /**
   * 口罩人脸比对1:1
   * 
   * @param request - CompareFaceWithMaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFaceWithMaskResponse
   */
  async compareFaceWithMaskWithOptions(request: $_model.CompareFaceWithMaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFaceWithMaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURLA)) {
      body["ImageURLA"] = request.imageURLA;
    }

    if (!$dara.isNull(request.imageURLB)) {
      body["ImageURLB"] = request.imageURLB;
    }

    if (!$dara.isNull(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareFaceWithMask",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareFaceWithMaskResponse>(await this.callApi(params, req, runtime), new $_model.CompareFaceWithMaskResponse({}));
  }

  /**
   * 口罩人脸比对1:1
   * 
   * @param request - CompareFaceWithMaskRequest
   * @returns CompareFaceWithMaskResponse
   */
  async compareFaceWithMask(request: $_model.CompareFaceWithMaskRequest): Promise<$_model.CompareFaceWithMaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFaceWithMaskWithOptions(request, runtime);
  }

  async compareFaceWithMaskAdvance(request: $_model.CompareFaceWithMaskAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFaceWithMaskResponse> {
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
      Product: "facebody",
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
    let compareFaceWithMaskReq = new $_model.CompareFaceWithMaskRequest({ });
    OpenApiUtil.convert(request, compareFaceWithMaskReq);
    if (!$dara.isNull(request.imageURLAObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLAObject,
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
      compareFaceWithMaskReq.imageURLA = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.imageURLBObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageURLBObject,
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
      compareFaceWithMaskReq.imageURLB = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let compareFaceWithMaskResp = await this.compareFaceWithMaskWithOptions(compareFaceWithMaskReq, runtime);
    return compareFaceWithMaskResp;
  }

  /**
   * @param request - CreateFaceDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFaceDbResponse
   */
  async createFaceDbWithOptions(request: $_model.CreateFaceDbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFaceDbResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFaceDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFaceDbResponse>(await this.callApi(params, req, runtime), new $_model.CreateFaceDbResponse({}));
  }

  /**
   * @param request - CreateFaceDbRequest
   * @returns CreateFaceDbResponse
   */
  async createFaceDb(request: $_model.CreateFaceDbRequest): Promise<$_model.CreateFaceDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFaceDbWithOptions(request, runtime);
  }

  /**
   * 换脸鉴别
   * 
   * @param request - DeepfakeFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeFaceResponse
   */
  async deepfakeFaceWithOptions(request: $_model.DeepfakeFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepfakeFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeepfakeFaceResponse>(await this.callApi(params, req, runtime), new $_model.DeepfakeFaceResponse({}));
  }

  /**
   * 换脸鉴别
   * 
   * @param request - DeepfakeFaceRequest
   * @returns DeepfakeFaceResponse
   */
  async deepfakeFace(request: $_model.DeepfakeFaceRequest): Promise<$_model.DeepfakeFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeFaceWithOptions(request, runtime);
  }

  async deepfakeFaceAdvance(request: $_model.DeepfakeFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeFaceResponse> {
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
      Product: "facebody",
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
    let deepfakeFaceReq = new $_model.DeepfakeFaceRequest({ });
    OpenApiUtil.convert(request, deepfakeFaceReq);
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
          let tmpObj : $_model.DeepfakeFaceRequestTasks = deepfakeFaceReq.tasks[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let deepfakeFaceResp = await this.deepfakeFaceWithOptions(deepfakeFaceReq, runtime);
    return deepfakeFaceResp;
  }

  /**
   * @param request - DeleteFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceResponse
   */
  async deleteFaceWithOptions(request: $_model.DeleteFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.faceId)) {
      body["FaceId"] = request.faceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceResponse({}));
  }

  /**
   * @param request - DeleteFaceRequest
   * @returns DeleteFaceResponse
   */
  async deleteFace(request: $_model.DeleteFaceRequest): Promise<$_model.DeleteFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFaceDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceDbResponse
   */
  async deleteFaceDbWithOptions(request: $_model.DeleteFaceDbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceDbResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceDbResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceDbResponse({}));
  }

  /**
   * @param request - DeleteFaceDbRequest
   * @returns DeleteFaceDbResponse
   */
  async deleteFaceDb(request: $_model.DeleteFaceDbRequest): Promise<$_model.DeleteFaceDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceDbWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFaceEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceEntityResponse
   */
  async deleteFaceEntityWithOptions(request: $_model.DeleteFaceEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceEntityResponse({}));
  }

  /**
   * @param request - DeleteFaceEntityRequest
   * @returns DeleteFaceEntityResponse
   */
  async deleteFaceEntity(request: $_model.DeleteFaceEntityRequest): Promise<$_model.DeleteFaceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceEntityWithOptions(request, runtime);
  }

  /**
   * 图像人脸融合模板删除
   * 
   * @param request - DeleteFaceImageTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceImageTemplateResponse
   */
  async deleteFaceImageTemplateWithOptions(request: $_model.DeleteFaceImageTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceImageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceImageTemplateResponse({}));
  }

  /**
   * 图像人脸融合模板删除
   * 
   * @param request - DeleteFaceImageTemplateRequest
   * @returns DeleteFaceImageTemplateResponse
   */
  async deleteFaceImageTemplate(request: $_model.DeleteFaceImageTemplateRequest): Promise<$_model.DeleteFaceImageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceImageTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DetectBodyCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectBodyCountResponse
   */
  async detectBodyCountWithOptions(request: $_model.DetectBodyCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectBodyCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectBodyCount",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectBodyCountResponse>(await this.callApi(params, req, runtime), new $_model.DetectBodyCountResponse({}));
  }

  /**
   * @param request - DetectBodyCountRequest
   * @returns DetectBodyCountResponse
   */
  async detectBodyCount(request: $_model.DetectBodyCountRequest): Promise<$_model.DetectBodyCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectBodyCountWithOptions(request, runtime);
  }

  async detectBodyCountAdvance(request: $_model.DetectBodyCountAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectBodyCountResponse> {
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
      Product: "facebody",
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
    let detectBodyCountReq = new $_model.DetectBodyCountRequest({ });
    OpenApiUtil.convert(request, detectBodyCountReq);
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
      detectBodyCountReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectBodyCountResp = await this.detectBodyCountWithOptions(detectBodyCountReq, runtime);
    return detectBodyCountResp;
  }

  /**
   * @param request - DetectCelebrityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectCelebrityResponse
   */
  async detectCelebrityWithOptions(request: $_model.DetectCelebrityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectCelebrityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectCelebrity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectCelebrityResponse>(await this.callApi(params, req, runtime), new $_model.DetectCelebrityResponse({}));
  }

  /**
   * @param request - DetectCelebrityRequest
   * @returns DetectCelebrityResponse
   */
  async detectCelebrity(request: $_model.DetectCelebrityRequest): Promise<$_model.DetectCelebrityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectCelebrityWithOptions(request, runtime);
  }

  async detectCelebrityAdvance(request: $_model.DetectCelebrityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectCelebrityResponse> {
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
      Product: "facebody",
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
    let detectCelebrityReq = new $_model.DetectCelebrityRequest({ });
    OpenApiUtil.convert(request, detectCelebrityReq);
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
      detectCelebrityReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectCelebrityResp = await this.detectCelebrityWithOptions(detectCelebrityReq, runtime);
    return detectCelebrityResp;
  }

  /**
   * @param request - DetectFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectFaceResponse
   */
  async detectFaceWithOptions(request: $_model.DetectFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.landmark)) {
      body["Landmark"] = request.landmark;
    }

    if (!$dara.isNull(request.maxFaceNumber)) {
      body["MaxFaceNumber"] = request.maxFaceNumber;
    }

    if (!$dara.isNull(request.pose)) {
      body["Pose"] = request.pose;
    }

    if (!$dara.isNull(request.quality)) {
      body["Quality"] = request.quality;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectFaceResponse>(await this.callApi(params, req, runtime), new $_model.DetectFaceResponse({}));
  }

  /**
   * @param request - DetectFaceRequest
   * @returns DetectFaceResponse
   */
  async detectFace(request: $_model.DetectFaceRequest): Promise<$_model.DetectFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectFaceWithOptions(request, runtime);
  }

  async detectFaceAdvance(request: $_model.DetectFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectFaceResponse> {
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
      Product: "facebody",
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
    let detectFaceReq = new $_model.DetectFaceRequest({ });
    OpenApiUtil.convert(request, detectFaceReq);
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
      detectFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectFaceResp = await this.detectFaceWithOptions(detectFaceReq, runtime);
    return detectFaceResp;
  }

  /**
   * 红外人脸活体检测
   * 
   * @param request - DetectInfraredLivingFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectInfraredLivingFaceResponse
   */
  async detectInfraredLivingFaceWithOptions(request: $_model.DetectInfraredLivingFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectInfraredLivingFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectInfraredLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectInfraredLivingFaceResponse>(await this.callApi(params, req, runtime), new $_model.DetectInfraredLivingFaceResponse({}));
  }

  /**
   * 红外人脸活体检测
   * 
   * @param request - DetectInfraredLivingFaceRequest
   * @returns DetectInfraredLivingFaceResponse
   */
  async detectInfraredLivingFace(request: $_model.DetectInfraredLivingFaceRequest): Promise<$_model.DetectInfraredLivingFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectInfraredLivingFaceWithOptions(request, runtime);
  }

  async detectInfraredLivingFaceAdvance(request: $_model.DetectInfraredLivingFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectInfraredLivingFaceResponse> {
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
      Product: "facebody",
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
    let detectInfraredLivingFaceReq = new $_model.DetectInfraredLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectInfraredLivingFaceReq);
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
          let tmpObj : $_model.DetectInfraredLivingFaceRequestTasks = detectInfraredLivingFaceReq.tasks[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let detectInfraredLivingFaceResp = await this.detectInfraredLivingFaceWithOptions(detectInfraredLivingFaceReq, runtime);
    return detectInfraredLivingFaceResp;
  }

  /**
   * 人脸活体检测(DetectLivingFace)
   * 
   * @param request - DetectLivingFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectLivingFaceResponse
   */
  async detectLivingFaceWithOptions(request: $_model.DetectLivingFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLivingFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectLivingFaceResponse>(await this.callApi(params, req, runtime), new $_model.DetectLivingFaceResponse({}));
  }

  /**
   * 人脸活体检测(DetectLivingFace)
   * 
   * @param request - DetectLivingFaceRequest
   * @returns DetectLivingFaceResponse
   */
  async detectLivingFace(request: $_model.DetectLivingFaceRequest): Promise<$_model.DetectLivingFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectLivingFaceWithOptions(request, runtime);
  }

  async detectLivingFaceAdvance(request: $_model.DetectLivingFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLivingFaceResponse> {
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
      Product: "facebody",
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
    let detectLivingFaceReq = new $_model.DetectLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectLivingFaceReq);
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
          let tmpObj : $_model.DetectLivingFaceRequestTasks = detectLivingFaceReq.tasks[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let detectLivingFaceResp = await this.detectLivingFaceWithOptions(detectLivingFaceReq, runtime);
    return detectLivingFaceResp;
  }

  /**
   * @param request - DetectPedestrianRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectPedestrianResponse
   */
  async detectPedestrianWithOptions(request: $_model.DetectPedestrianRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectPedestrianResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectPedestrian",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectPedestrianResponse>(await this.callApi(params, req, runtime), new $_model.DetectPedestrianResponse({}));
  }

  /**
   * @param request - DetectPedestrianRequest
   * @returns DetectPedestrianResponse
   */
  async detectPedestrian(request: $_model.DetectPedestrianRequest): Promise<$_model.DetectPedestrianResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectPedestrianWithOptions(request, runtime);
  }

  async detectPedestrianAdvance(request: $_model.DetectPedestrianAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectPedestrianResponse> {
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
      Product: "facebody",
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
    let detectPedestrianReq = new $_model.DetectPedestrianRequest({ });
    OpenApiUtil.convert(request, detectPedestrianReq);
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
      detectPedestrianReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectPedestrianResp = await this.detectPedestrianWithOptions(detectPedestrianReq, runtime);
    return detectPedestrianResp;
  }

  /**
   * @param request - DetectVideoLivingFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectVideoLivingFaceResponse
   */
  async detectVideoLivingFaceWithOptions(request: $_model.DetectVideoLivingFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVideoLivingFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectVideoLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectVideoLivingFaceResponse>(await this.callApi(params, req, runtime), new $_model.DetectVideoLivingFaceResponse({}));
  }

  /**
   * @param request - DetectVideoLivingFaceRequest
   * @returns DetectVideoLivingFaceResponse
   */
  async detectVideoLivingFace(request: $_model.DetectVideoLivingFaceRequest): Promise<$_model.DetectVideoLivingFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectVideoLivingFaceWithOptions(request, runtime);
  }

  async detectVideoLivingFaceAdvance(request: $_model.DetectVideoLivingFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVideoLivingFaceResponse> {
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
      Product: "facebody",
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
    let detectVideoLivingFaceReq = new $_model.DetectVideoLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectVideoLivingFaceReq);
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
      detectVideoLivingFaceReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectVideoLivingFaceResp = await this.detectVideoLivingFaceWithOptions(detectVideoLivingFaceReq, runtime);
    return detectVideoLivingFaceResp;
  }

  /**
   * @param request - EnhanceFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnhanceFaceResponse
   */
  async enhanceFaceWithOptions(request: $_model.EnhanceFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhanceFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnhanceFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnhanceFaceResponse>(await this.callApi(params, req, runtime), new $_model.EnhanceFaceResponse({}));
  }

  /**
   * @param request - EnhanceFaceRequest
   * @returns EnhanceFaceResponse
   */
  async enhanceFace(request: $_model.EnhanceFaceRequest): Promise<$_model.EnhanceFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enhanceFaceWithOptions(request, runtime);
  }

  async enhanceFaceAdvance(request: $_model.EnhanceFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnhanceFaceResponse> {
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
      Product: "facebody",
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
    let enhanceFaceReq = new $_model.EnhanceFaceRequest({ });
    OpenApiUtil.convert(request, enhanceFaceReq);
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
      enhanceFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let enhanceFaceResp = await this.enhanceFaceWithOptions(enhanceFaceReq, runtime);
    return enhanceFaceResp;
  }

  /**
   * 指纹提取
   * 
   * @param request - ExtractFingerPrintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExtractFingerPrintResponse
   */
  async extractFingerPrintWithOptions(request: $_model.ExtractFingerPrintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExtractFingerPrintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageData)) {
      body["ImageData"] = request.imageData;
    }

    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExtractFingerPrint",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExtractFingerPrintResponse>(await this.callApi(params, req, runtime), new $_model.ExtractFingerPrintResponse({}));
  }

  /**
   * 指纹提取
   * 
   * @param request - ExtractFingerPrintRequest
   * @returns ExtractFingerPrintResponse
   */
  async extractFingerPrint(request: $_model.ExtractFingerPrintRequest): Promise<$_model.ExtractFingerPrintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.extractFingerPrintWithOptions(request, runtime);
  }

  async extractFingerPrintAdvance(request: $_model.ExtractFingerPrintAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExtractFingerPrintResponse> {
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
      Product: "facebody",
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
    let extractFingerPrintReq = new $_model.ExtractFingerPrintRequest({ });
    OpenApiUtil.convert(request, extractFingerPrintReq);
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
      extractFingerPrintReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let extractFingerPrintResp = await this.extractFingerPrintWithOptions(extractFingerPrintReq, runtime);
    return extractFingerPrintResp;
  }

  /**
   * @param request - FaceBeautyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceBeautyResponse
   */
  async faceBeautyWithOptions(request: $_model.FaceBeautyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceBeautyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.sharp)) {
      body["Sharp"] = request.sharp;
    }

    if (!$dara.isNull(request.smooth)) {
      body["Smooth"] = request.smooth;
    }

    if (!$dara.isNull(request.white)) {
      body["White"] = request.white;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceBeauty",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceBeautyResponse>(await this.callApi(params, req, runtime), new $_model.FaceBeautyResponse({}));
  }

  /**
   * @param request - FaceBeautyRequest
   * @returns FaceBeautyResponse
   */
  async faceBeauty(request: $_model.FaceBeautyRequest): Promise<$_model.FaceBeautyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceBeautyWithOptions(request, runtime);
  }

  async faceBeautyAdvance(request: $_model.FaceBeautyAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceBeautyResponse> {
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
      Product: "facebody",
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
    let faceBeautyReq = new $_model.FaceBeautyRequest({ });
    OpenApiUtil.convert(request, faceBeautyReq);
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
      faceBeautyReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let faceBeautyResp = await this.faceBeautyWithOptions(faceBeautyReq, runtime);
    return faceBeautyResp;
  }

  /**
   * @param request - GenRealPersonVerificationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenRealPersonVerificationTokenResponse
   */
  async genRealPersonVerificationTokenWithOptions(request: $_model.GenRealPersonVerificationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenRealPersonVerificationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificateName)) {
      body["CertificateName"] = request.certificateName;
    }

    if (!$dara.isNull(request.certificateNumber)) {
      body["CertificateNumber"] = request.certificateNumber;
    }

    if (!$dara.isNull(request.metaInfo)) {
      body["MetaInfo"] = request.metaInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenRealPersonVerificationToken",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenRealPersonVerificationTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenRealPersonVerificationTokenResponse({}));
  }

  /**
   * @param request - GenRealPersonVerificationTokenRequest
   * @returns GenRealPersonVerificationTokenResponse
   */
  async genRealPersonVerificationToken(request: $_model.GenRealPersonVerificationTokenRequest): Promise<$_model.GenRealPersonVerificationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.genRealPersonVerificationTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GenerateHumanAnimeStyleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateHumanAnimeStyleResponse
   */
  async generateHumanAnimeStyleWithOptions(request: $_model.GenerateHumanAnimeStyleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanAnimeStyleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algoType)) {
      query["AlgoType"] = request.algoType;
    }

    if (!$dara.isNull(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateHumanAnimeStyle",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateHumanAnimeStyleResponse>(await this.callApi(params, req, runtime), new $_model.GenerateHumanAnimeStyleResponse({}));
  }

  /**
   * @param request - GenerateHumanAnimeStyleRequest
   * @returns GenerateHumanAnimeStyleResponse
   */
  async generateHumanAnimeStyle(request: $_model.GenerateHumanAnimeStyleRequest): Promise<$_model.GenerateHumanAnimeStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateHumanAnimeStyleWithOptions(request, runtime);
  }

  async generateHumanAnimeStyleAdvance(request: $_model.GenerateHumanAnimeStyleAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanAnimeStyleResponse> {
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
      Product: "facebody",
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
    let generateHumanAnimeStyleReq = new $_model.GenerateHumanAnimeStyleRequest({ });
    OpenApiUtil.convert(request, generateHumanAnimeStyleReq);
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
      generateHumanAnimeStyleReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let generateHumanAnimeStyleResp = await this.generateHumanAnimeStyleWithOptions(generateHumanAnimeStyleReq, runtime);
    return generateHumanAnimeStyleResp;
  }

  /**
   * 人像素描风格化
   * 
   * @param request - GenerateHumanSketchStyleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateHumanSketchStyleResponse
   */
  async generateHumanSketchStyleWithOptions(request: $_model.GenerateHumanSketchStyleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanSketchStyleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.returnType)) {
      body["ReturnType"] = request.returnType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateHumanSketchStyle",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateHumanSketchStyleResponse>(await this.callApi(params, req, runtime), new $_model.GenerateHumanSketchStyleResponse({}));
  }

  /**
   * 人像素描风格化
   * 
   * @param request - GenerateHumanSketchStyleRequest
   * @returns GenerateHumanSketchStyleResponse
   */
  async generateHumanSketchStyle(request: $_model.GenerateHumanSketchStyleRequest): Promise<$_model.GenerateHumanSketchStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateHumanSketchStyleWithOptions(request, runtime);
  }

  async generateHumanSketchStyleAdvance(request: $_model.GenerateHumanSketchStyleAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateHumanSketchStyleResponse> {
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
      Product: "facebody",
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
    let generateHumanSketchStyleReq = new $_model.GenerateHumanSketchStyleRequest({ });
    OpenApiUtil.convert(request, generateHumanSketchStyleReq);
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
      generateHumanSketchStyleReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let generateHumanSketchStyleResp = await this.generateHumanSketchStyleWithOptions(generateHumanSketchStyleReq, runtime);
    return generateHumanSketchStyleResp;
  }

  /**
   * @param request - GetFaceEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFaceEntityResponse
   */
  async getFaceEntityWithOptions(request: $_model.GetFaceEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFaceEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFaceEntityResponse>(await this.callApi(params, req, runtime), new $_model.GetFaceEntityResponse({}));
  }

  /**
   * @param request - GetFaceEntityRequest
   * @returns GetFaceEntityResponse
   */
  async getFaceEntity(request: $_model.GetFaceEntityRequest): Promise<$_model.GetFaceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFaceEntityWithOptions(request, runtime);
  }

  /**
   * @param request - GetRealPersonVerificationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealPersonVerificationResultResponse
   */
  async getRealPersonVerificationResultWithOptions(request: $_model.GetRealPersonVerificationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealPersonVerificationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verificationToken)) {
      body["VerificationToken"] = request.verificationToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealPersonVerificationResult",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealPersonVerificationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetRealPersonVerificationResultResponse({}));
  }

  /**
   * @param request - GetRealPersonVerificationResultRequest
   * @returns GetRealPersonVerificationResultResponse
   */
  async getRealPersonVerificationResult(request: $_model.GetRealPersonVerificationResultRequest): Promise<$_model.GetRealPersonVerificationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealPersonVerificationResultWithOptions(request, runtime);
  }

  /**
   * 智能瘦脸
   * 
   * @param request - LiquifyFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LiquifyFaceResponse
   */
  async liquifyFaceWithOptions(request: $_model.LiquifyFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LiquifyFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.slimDegree)) {
      body["SlimDegree"] = request.slimDegree;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LiquifyFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LiquifyFaceResponse>(await this.callApi(params, req, runtime), new $_model.LiquifyFaceResponse({}));
  }

  /**
   * 智能瘦脸
   * 
   * @param request - LiquifyFaceRequest
   * @returns LiquifyFaceResponse
   */
  async liquifyFace(request: $_model.LiquifyFaceRequest): Promise<$_model.LiquifyFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.liquifyFaceWithOptions(request, runtime);
  }

  async liquifyFaceAdvance(request: $_model.LiquifyFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LiquifyFaceResponse> {
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
      Product: "facebody",
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
    let liquifyFaceReq = new $_model.LiquifyFaceRequest({ });
    OpenApiUtil.convert(request, liquifyFaceReq);
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
      liquifyFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let liquifyFaceResp = await this.liquifyFaceWithOptions(liquifyFaceReq, runtime);
    return liquifyFaceResp;
  }

  /**
   * @param request - ListFaceDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFaceDbsResponse
   */
  async listFaceDbsWithOptions(request: $_model.ListFaceDbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFaceDbsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFaceDbs",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFaceDbsResponse>(await this.callApi(params, req, runtime), new $_model.ListFaceDbsResponse({}));
  }

  /**
   * @param request - ListFaceDbsRequest
   * @returns ListFaceDbsResponse
   */
  async listFaceDbs(request: $_model.ListFaceDbsRequest): Promise<$_model.ListFaceDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFaceDbsWithOptions(request, runtime);
  }

  /**
   * @param request - ListFaceEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFaceEntitiesResponse
   */
  async listFaceEntitiesWithOptions(request: $_model.ListFaceEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFaceEntitiesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityIdPrefix)) {
      body["EntityIdPrefix"] = request.entityIdPrefix;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFaceEntities",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFaceEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListFaceEntitiesResponse({}));
  }

  /**
   * @param request - ListFaceEntitiesRequest
   * @returns ListFaceEntitiesResponse
   */
  async listFaceEntities(request: $_model.ListFaceEntitiesRequest): Promise<$_model.ListFaceEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFaceEntitiesWithOptions(request, runtime);
  }

  /**
   * 图像人脸融合
   * 
   * @param request - MergeImageFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeImageFaceResponse
   */
  async mergeImageFaceWithOptions(request: $_model.MergeImageFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeImageFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.mergeInfos)) {
      body["MergeInfos"] = request.mergeInfos;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
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
      action: "MergeImageFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MergeImageFaceResponse>(await this.callApi(params, req, runtime), new $_model.MergeImageFaceResponse({}));
  }

  /**
   * 图像人脸融合
   * 
   * @param request - MergeImageFaceRequest
   * @returns MergeImageFaceResponse
   */
  async mergeImageFace(request: $_model.MergeImageFaceRequest): Promise<$_model.MergeImageFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mergeImageFaceWithOptions(request, runtime);
  }

  async mergeImageFaceAdvance(request: $_model.MergeImageFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MergeImageFaceResponse> {
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
      Product: "facebody",
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
    let mergeImageFaceReq = new $_model.MergeImageFaceRequest({ });
    OpenApiUtil.convert(request, mergeImageFaceReq);
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
      mergeImageFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let mergeImageFaceResp = await this.mergeImageFaceWithOptions(mergeImageFaceReq, runtime);
    return mergeImageFaceResp;
  }

  /**
   * 线上监考
   * 
   * @param request - MonitorExaminationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MonitorExaminationResponse
   */
  async monitorExaminationWithOptions(request: $_model.MonitorExaminationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MonitorExaminationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MonitorExamination",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MonitorExaminationResponse>(await this.callApi(params, req, runtime), new $_model.MonitorExaminationResponse({}));
  }

  /**
   * 线上监考
   * 
   * @param request - MonitorExaminationRequest
   * @returns MonitorExaminationResponse
   */
  async monitorExamination(request: $_model.MonitorExaminationRequest): Promise<$_model.MonitorExaminationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.monitorExaminationWithOptions(request, runtime);
  }

  async monitorExaminationAdvance(request: $_model.MonitorExaminationAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MonitorExaminationResponse> {
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
      Product: "facebody",
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
    let monitorExaminationReq = new $_model.MonitorExaminationRequest({ });
    OpenApiUtil.convert(request, monitorExaminationReq);
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
      monitorExaminationReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let monitorExaminationResp = await this.monitorExaminationWithOptions(monitorExaminationReq, runtime);
    return monitorExaminationResp;
  }

  /**
   * @param request - PedestrianDetectAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PedestrianDetectAttributeResponse
   */
  async pedestrianDetectAttributeWithOptions(request: $_model.PedestrianDetectAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PedestrianDetectAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PedestrianDetectAttribute",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PedestrianDetectAttributeResponse>(await this.callApi(params, req, runtime), new $_model.PedestrianDetectAttributeResponse({}));
  }

  /**
   * @param request - PedestrianDetectAttributeRequest
   * @returns PedestrianDetectAttributeResponse
   */
  async pedestrianDetectAttribute(request: $_model.PedestrianDetectAttributeRequest): Promise<$_model.PedestrianDetectAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pedestrianDetectAttributeWithOptions(request, runtime);
  }

  async pedestrianDetectAttributeAdvance(request: $_model.PedestrianDetectAttributeAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PedestrianDetectAttributeResponse> {
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
      Product: "facebody",
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
    let pedestrianDetectAttributeReq = new $_model.PedestrianDetectAttributeRequest({ });
    OpenApiUtil.convert(request, pedestrianDetectAttributeReq);
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
      pedestrianDetectAttributeReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let pedestrianDetectAttributeResp = await this.pedestrianDetectAttributeWithOptions(pedestrianDetectAttributeReq, runtime);
    return pedestrianDetectAttributeResp;
  }

  /**
   * 图像人脸融合模板查询
   * 
   * @param request - QueryFaceImageTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceImageTemplateResponse
   */
  async queryFaceImageTemplateWithOptions(request: $_model.QueryFaceImageTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceImageTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceImageTemplateResponse({}));
  }

  /**
   * 图像人脸融合模板查询
   * 
   * @param request - QueryFaceImageTemplateRequest
   * @returns QueryFaceImageTemplateResponse
   */
  async queryFaceImageTemplate(request: $_model.QueryFaceImageTemplateRequest): Promise<$_model.QueryFaceImageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceImageTemplateWithOptions(request, runtime);
  }

  /**
   * 动作行为识别(RecognizeAction)
   * 
   * @param request - RecognizeActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeActionResponse
   */
  async recognizeActionWithOptions(request: $_model.RecognizeActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeActionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    if (!$dara.isNull(request.videoData)) {
      body["VideoData"] = request.videoData;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeAction",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeActionResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeActionResponse({}));
  }

  /**
   * 动作行为识别(RecognizeAction)
   * 
   * @param request - RecognizeActionRequest
   * @returns RecognizeActionResponse
   */
  async recognizeAction(request: $_model.RecognizeActionRequest): Promise<$_model.RecognizeActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeActionWithOptions(request, runtime);
  }

  async recognizeActionAdvance(request: $_model.RecognizeActionAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeActionResponse> {
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
      Product: "facebody",
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
    let recognizeActionReq = new $_model.RecognizeActionRequest({ });
    OpenApiUtil.convert(request, recognizeActionReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.callApi(authParams, authReq, runtime);
          tmpBody = authResponse["body"];
          useAccelerate = Boolean(tmpBody["UseAccelerate"]);
          authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
          fileObj = new $dara.FileField({
            filename: authResponseBody["ObjectKey"],
            content: item0.URLObject,
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
          let tmpObj : $_model.RecognizeActionRequestURLList = recognizeActionReq.URLList[i0];
          tmpObj.URL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

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
      recognizeActionReq.videoUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeActionResp = await this.recognizeActionWithOptions(recognizeActionReq, runtime);
    return recognizeActionResp;
  }

  /**
   * @param request - RecognizeExpressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeExpressionResponse
   */
  async recognizeExpressionWithOptions(request: $_model.RecognizeExpressionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeExpressionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeExpression",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeExpressionResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeExpressionResponse({}));
  }

  /**
   * @param request - RecognizeExpressionRequest
   * @returns RecognizeExpressionResponse
   */
  async recognizeExpression(request: $_model.RecognizeExpressionRequest): Promise<$_model.RecognizeExpressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeExpressionWithOptions(request, runtime);
  }

  async recognizeExpressionAdvance(request: $_model.RecognizeExpressionAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeExpressionResponse> {
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
      Product: "facebody",
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
    let recognizeExpressionReq = new $_model.RecognizeExpressionRequest({ });
    OpenApiUtil.convert(request, recognizeExpressionReq);
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
      recognizeExpressionReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeExpressionResp = await this.recognizeExpressionWithOptions(recognizeExpressionReq, runtime);
    return recognizeExpressionResp;
  }

  /**
   * @param request - RecognizeFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeFaceResponse
   */
  async recognizeFaceWithOptions(request: $_model.RecognizeFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.age)) {
      body["Age"] = request.age;
    }

    if (!$dara.isNull(request.beauty)) {
      body["Beauty"] = request.beauty;
    }

    if (!$dara.isNull(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.gender)) {
      body["Gender"] = request.gender;
    }

    if (!$dara.isNull(request.glass)) {
      body["Glass"] = request.glass;
    }

    if (!$dara.isNull(request.hat)) {
      body["Hat"] = request.hat;
    }

    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.maxFaceNumber)) {
      body["MaxFaceNumber"] = request.maxFaceNumber;
    }

    if (!$dara.isNull(request.quality)) {
      body["Quality"] = request.quality;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeFaceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeFaceResponse({}));
  }

  /**
   * @param request - RecognizeFaceRequest
   * @returns RecognizeFaceResponse
   */
  async recognizeFace(request: $_model.RecognizeFaceRequest): Promise<$_model.RecognizeFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeFaceWithOptions(request, runtime);
  }

  async recognizeFaceAdvance(request: $_model.RecognizeFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeFaceResponse> {
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
      Product: "facebody",
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
    let recognizeFaceReq = new $_model.RecognizeFaceRequest({ });
    OpenApiUtil.convert(request, recognizeFaceReq);
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
      recognizeFaceReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let recognizeFaceResp = await this.recognizeFaceWithOptions(recognizeFaceReq, runtime);
    return recognizeFaceResp;
  }

  /**
   * 公众人脸识别(RecognizePublicFace)
   * 
   * @param request - RecognizePublicFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizePublicFaceResponse
   */
  async recognizePublicFaceWithOptions(request: $_model.RecognizePublicFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizePublicFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizePublicFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizePublicFaceResponse>(await this.callApi(params, req, runtime), new $_model.RecognizePublicFaceResponse({}));
  }

  /**
   * 公众人脸识别(RecognizePublicFace)
   * 
   * @param request - RecognizePublicFaceRequest
   * @returns RecognizePublicFaceResponse
   */
  async recognizePublicFace(request: $_model.RecognizePublicFaceRequest): Promise<$_model.RecognizePublicFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizePublicFaceWithOptions(request, runtime);
  }

  async recognizePublicFaceAdvance(request: $_model.RecognizePublicFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizePublicFaceResponse> {
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
      Product: "facebody",
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
    let recognizePublicFaceReq = new $_model.RecognizePublicFaceRequest({ });
    OpenApiUtil.convert(request, recognizePublicFaceReq);
    if (!$dara.isNull(request.task)) {
      let i0 : number = 0;

      for(let item0 of request.task) {
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
          let tmpObj : $_model.RecognizePublicFaceRequestTask = recognizePublicFaceReq.task[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let recognizePublicFaceResp = await this.recognizePublicFaceWithOptions(recognizePublicFaceReq, runtime);
    return recognizePublicFaceResp;
  }

  /**
   * 美肤
   * 
   * @param request - RetouchSkinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetouchSkinResponse
   */
  async retouchSkinWithOptions(request: $_model.RetouchSkinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetouchSkinResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.retouchDegree)) {
      body["RetouchDegree"] = request.retouchDegree;
    }

    if (!$dara.isNull(request.whiteningDegree)) {
      body["WhiteningDegree"] = request.whiteningDegree;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetouchSkin",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetouchSkinResponse>(await this.callApi(params, req, runtime), new $_model.RetouchSkinResponse({}));
  }

  /**
   * 美肤
   * 
   * @param request - RetouchSkinRequest
   * @returns RetouchSkinResponse
   */
  async retouchSkin(request: $_model.RetouchSkinRequest): Promise<$_model.RetouchSkinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retouchSkinWithOptions(request, runtime);
  }

  async retouchSkinAdvance(request: $_model.RetouchSkinAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetouchSkinResponse> {
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
      Product: "facebody",
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
    let retouchSkinReq = new $_model.RetouchSkinRequest({ });
    OpenApiUtil.convert(request, retouchSkinReq);
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
      retouchSkinReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let retouchSkinResp = await this.retouchSkinWithOptions(retouchSkinReq, runtime);
    return retouchSkinResp;
  }

  /**
   * summary
   * 
   * @param request - SearchFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFaceResponse
   */
  async searchFaceWithOptions(request: $_model.SearchFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dbNames)) {
      body["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.maxFaceNum)) {
      body["MaxFaceNum"] = request.maxFaceNum;
    }

    if (!$dara.isNull(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFaceResponse>(await this.callApi(params, req, runtime), new $_model.SearchFaceResponse({}));
  }

  /**
   * summary
   * 
   * @param request - SearchFaceRequest
   * @returns SearchFaceResponse
   */
  async searchFace(request: $_model.SearchFaceRequest): Promise<$_model.SearchFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchFaceWithOptions(request, runtime);
  }

  async searchFaceAdvance(request: $_model.SearchFaceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFaceResponse> {
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
      Product: "facebody",
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
    let searchFaceReq = new $_model.SearchFaceRequest({ });
    OpenApiUtil.convert(request, searchFaceReq);
    if (!$dara.isNull(request.imageUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageUrlObject,
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
      searchFaceReq.imageUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let searchFaceResp = await this.searchFaceWithOptions(searchFaceReq, runtime);
    return searchFaceResp;
  }

  /**
   * @param request - UpdateFaceEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaceEntityResponse
   */
  async updateFaceEntityWithOptions(request: $_model.UpdateFaceEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFaceEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFaceEntityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFaceEntityResponse({}));
  }

  /**
   * @param request - UpdateFaceEntityRequest
   * @returns UpdateFaceEntityResponse
   */
  async updateFaceEntity(request: $_model.UpdateFaceEntityRequest): Promise<$_model.UpdateFaceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFaceEntityWithOptions(request, runtime);
  }

}

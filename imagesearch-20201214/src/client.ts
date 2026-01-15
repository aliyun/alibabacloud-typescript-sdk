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
    this._endpoint = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an image to an Image Search instance.
   * 
   * @remarks
   * You can call this operation to add an image to an Image Search instance.
   * > If you want to obtain more information about the service and technical support, click [Online Consulting](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or join the DingTalk group (ID 35035130).
   * ## QPS limits
   * By default, the concurrency limit for adding an image to instances whose image capacity specifications are 0.1 million images is 1. This means that the system can process up to one request of adding an image every second. By default, the concurrency limit for adding an image to instances of other image capacity specifications is 5. This means that the system can process up to five requests of adding an image every second.
   * 
   * @param request - AddImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(request: $_model.AddImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!$dara.isNull(request.intAttr2)) {
      body["IntAttr2"] = request.intAttr2;
    }

    if (!$dara.isNull(request.intAttr3)) {
      body["IntAttr3"] = request.intAttr3;
    }

    if (!$dara.isNull(request.intAttr4)) {
      body["IntAttr4"] = request.intAttr4;
    }

    if (!$dara.isNull(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    if (!$dara.isNull(request.strAttr2)) {
      body["StrAttr2"] = request.strAttr2;
    }

    if (!$dara.isNull(request.strAttr3)) {
      body["StrAttr3"] = request.strAttr3;
    }

    if (!$dara.isNull(request.strAttr4)) {
      body["StrAttr4"] = request.strAttr4;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageResponse>(await this.callApi(params, req, runtime), new $_model.AddImageResponse({}));
  }

  /**
   * Adds an image to an Image Search instance.
   * 
   * @remarks
   * You can call this operation to add an image to an Image Search instance.
   * > If you want to obtain more information about the service and technical support, click [Online Consulting](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or join the DingTalk group (ID 35035130).
   * ## QPS limits
   * By default, the concurrency limit for adding an image to instances whose image capacity specifications are 0.1 million images is 1. This means that the system can process up to one request of adding an image every second. By default, the concurrency limit for adding an image to instances of other image capacity specifications is 5. This means that the system can process up to five requests of adding an image every second.
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: $_model.AddImageRequest): Promise<$_model.AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  async addImageAdvance(request: $_model.AddImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageResponse> {
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
      Product: "ImageSearch",
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
    let addImageReq = new $_model.AddImageRequest({ });
    OpenApiUtil.convert(request, addImageReq);
    if (!$dara.isNull(request.picContentObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.picContentObject,
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
      addImageReq.picContent = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let addImageResp = await this.addImageWithOptions(addImageReq, runtime);
    return addImageResp;
  }

  /**
   * 对比图片相似值
   * 
   * @param request - CompareSimilarByImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareSimilarByImageResponse
   */
  async compareSimilarByImageWithOptions(request: $_model.CompareSimilarByImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareSimilarByImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.primaryPicContent)) {
      body["PrimaryPicContent"] = request.primaryPicContent;
    }

    if (!$dara.isNull(request.secondaryPicContent)) {
      body["SecondaryPicContent"] = request.secondaryPicContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareSimilarByImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareSimilarByImageResponse>(await this.callApi(params, req, runtime), new $_model.CompareSimilarByImageResponse({}));
  }

  /**
   * 对比图片相似值
   * 
   * @param request - CompareSimilarByImageRequest
   * @returns CompareSimilarByImageResponse
   */
  async compareSimilarByImage(request: $_model.CompareSimilarByImageRequest): Promise<$_model.CompareSimilarByImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareSimilarByImageWithOptions(request, runtime);
  }

  async compareSimilarByImageAdvance(request: $_model.CompareSimilarByImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareSimilarByImageResponse> {
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
      Product: "ImageSearch",
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
    let compareSimilarByImageReq = new $_model.CompareSimilarByImageRequest({ });
    OpenApiUtil.convert(request, compareSimilarByImageReq);
    if (!$dara.isNull(request.primaryPicContentObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.primaryPicContentObject,
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
      compareSimilarByImageReq.primaryPicContent = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.secondaryPicContentObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.secondaryPicContentObject,
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
      compareSimilarByImageReq.secondaryPicContent = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let compareSimilarByImageResp = await this.compareSimilarByImageWithOptions(compareSimilarByImageReq, runtime);
    return compareSimilarByImageResp;
  }

  /**
   * This topic describes the syntax of the DeleteImage operation and provides examples of this operation. You can call this operation to delete images from an Image Search instance.
   * 
   * @remarks
   * This operation deletes images from an Image Search instance.
   * >  A success response is returned even if the specified image does not exist on the instance. Therefore, you cannot determine whether the image exists on the instance based on the response.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - DeleteImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageResponse
   */
  async deleteImageWithOptions(request: $_model.DeleteImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isDeleteByFilter)) {
      body["IsDeleteByFilter"] = request.isDeleteByFilter;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageResponse({}));
  }

  /**
   * This topic describes the syntax of the DeleteImage operation and provides examples of this operation. You can call this operation to delete images from an Image Search instance.
   * 
   * @remarks
   * This operation deletes images from an Image Search instance.
   * >  A success response is returned even if the specified image does not exist on the instance. Therefore, you cannot determine whether the image exists on the instance based on the response.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the Detail operation and provides examples of this operation. You can call this operation to query instance details.
   * 
   * @remarks
   * This operation queries instance details.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process only 1 request every second.
   * 
   * @param request - DetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailResponse
   */
  async detailWithOptions(request: $_model.DetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Detail",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetailResponse>(await this.callApi(params, req, runtime), new $_model.DetailResponse({}));
  }

  /**
   * This topic describes the syntax of the Detail operation and provides examples of this operation. You can call this operation to query instance details.
   * 
   * @remarks
   * This operation queries instance details.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process only 1 request every second.
   * 
   * @param request - DetailRequest
   * @returns DetailResponse
   */
  async detail(request: $_model.DetailRequest): Promise<$_model.DetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the DumpMeta operation and provides examples of this operation. You can call this operation to create a task for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation creates a task for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DumpMetaResponse
   */
  async dumpMetaWithOptions(request: $_model.DumpMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DumpMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DumpMeta",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DumpMetaResponse>(await this.callApi(params, req, runtime), new $_model.DumpMetaResponse({}));
  }

  /**
   * This topic describes the syntax of the DumpMeta operation and provides examples of this operation. You can call this operation to create a task for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation creates a task for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaRequest
   * @returns DumpMetaResponse
   */
  async dumpMeta(request: $_model.DumpMetaRequest): Promise<$_model.DumpMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the DumpMetaList operation and provides examples of this operation. You can call this operation to query tasks that are used for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation queries tasks that are used for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DumpMetaListResponse
   */
  async dumpMetaListWithOptions(request: $_model.DumpMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DumpMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DumpMetaList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DumpMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DumpMetaListResponse({}));
  }

  /**
   * This topic describes the syntax of the DumpMetaList operation and provides examples of this operation. You can call this operation to query tasks that are used for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation queries tasks that are used for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaListRequest
   * @returns DumpMetaListResponse
   */
  async dumpMetaList(request: $_model.DumpMetaListRequest): Promise<$_model.DumpMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaListWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the IncreaseInstance operation and provides examples of this operation. You can call this operation to create a batch task on an Image Search instance.
   * 
   * @remarks
   * This operation creates a batch task on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncreaseInstanceResponse
   */
  async increaseInstanceWithOptions(request: $_model.IncreaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IncreaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.callbackAddress)) {
      query["CallbackAddress"] = request.callbackAddress;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncreaseInstance",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IncreaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.IncreaseInstanceResponse({}));
  }

  /**
   * This topic describes the syntax of the IncreaseInstance operation and provides examples of this operation. You can call this operation to create a batch task on an Image Search instance.
   * 
   * @remarks
   * This operation creates a batch task on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseInstanceRequest
   * @returns IncreaseInstanceResponse
   */
  async increaseInstance(request: $_model.IncreaseInstanceRequest): Promise<$_model.IncreaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseInstanceWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the IncreaseList operation and provides examples of this operation. You can call this operation to query batch tasks on an Image Search instance.
   * 
   * @remarks
   * This operation queries batch tasks on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncreaseListResponse
   */
  async increaseListWithOptions(request: $_model.IncreaseListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IncreaseListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncreaseList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IncreaseListResponse>(await this.callApi(params, req, runtime), new $_model.IncreaseListResponse({}));
  }

  /**
   * This topic describes the syntax of the IncreaseList operation and provides examples of this operation. You can call this operation to query batch tasks on an Image Search instance.
   * 
   * @remarks
   * This operation queries batch tasks on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseListRequest
   * @returns IncreaseListResponse
   */
  async increaseList(request: $_model.IncreaseListRequest): Promise<$_model.IncreaseListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseListWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the SearchByName operation and provides examples of this operation. You can call this operation to search for images by image name on an Image Search instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.
   * 
   * @param request - SearchImageByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByNameResponse
   */
  async searchImageByNameWithOptions(request: $_model.SearchImageByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scoreThreshold)) {
      query["ScoreThreshold"] = request.scoreThreshold;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByName",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageByNameResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageByNameResponse({}));
  }

  /**
   * This topic describes the syntax of the SearchByName operation and provides examples of this operation. You can call this operation to search for images by image name on an Image Search instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.
   * 
   * @param request - SearchImageByNameRequest
   * @returns SearchImageByNameResponse
   */
  async searchImageByName(request: $_model.SearchImageByNameRequest): Promise<$_model.SearchImageByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByNameWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the SearchByPic operation and provides examples of this operation. You can call this operation to search for images by image on an Image Search Instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.  
   * ## SDK release notes
   * The Image Search SDK has been upgraded to version 3.1.1, which supports multi-subject recognition and similarity scores. For more information, see [Image Search SDK for Java](/help/en/image-search/latest/version-v3-java-sdk).
   * 
   * @param request - SearchImageByPicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByPicResponse
   */
  async searchImageByPicWithOptions(request: $_model.SearchImageByPicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageByPicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scoreThreshold)) {
      query["ScoreThreshold"] = request.scoreThreshold;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByPic",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageByPicResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageByPicResponse({}));
  }

  /**
   * This topic describes the syntax of the SearchByPic operation and provides examples of this operation. You can call this operation to search for images by image on an Image Search Instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.  
   * ## SDK release notes
   * The Image Search SDK has been upgraded to version 3.1.1, which supports multi-subject recognition and similarity scores. For more information, see [Image Search SDK for Java](/help/en/image-search/latest/version-v3-java-sdk).
   * 
   * @param request - SearchImageByPicRequest
   * @returns SearchImageByPicResponse
   */
  async searchImageByPic(request: $_model.SearchImageByPicRequest): Promise<$_model.SearchImageByPicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByPicWithOptions(request, runtime);
  }

  async searchImageByPicAdvance(request: $_model.SearchImageByPicAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageByPicResponse> {
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
      Product: "ImageSearch",
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
    let searchImageByPicReq = new $_model.SearchImageByPicRequest({ });
    OpenApiUtil.convert(request, searchImageByPicReq);
    if (!$dara.isNull(request.picContentObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.picContentObject,
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
      searchImageByPicReq.picContent = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let searchImageByPicResp = await this.searchImageByPicWithOptions(searchImageByPicReq, runtime);
    return searchImageByPicResp;
  }

  /**
   * SearchImageByText
   * 
   * @param request - SearchImageByTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByTextResponse
   */
  async searchImageByTextWithOptions(request: $_model.SearchImageByTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageByTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scoreThreshold)) {
      query["ScoreThreshold"] = request.scoreThreshold;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByText",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageByTextResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageByTextResponse({}));
  }

  /**
   * SearchImageByText
   * 
   * @param request - SearchImageByTextRequest
   * @returns SearchImageByTextResponse
   */
  async searchImageByText(request: $_model.SearchImageByTextRequest): Promise<$_model.SearchImageByTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByTextWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the UpdateImage operation and provides examples of this operation. You can call this operation to update image information on an Image Search instance.
   * 
   * @remarks
   * This operation updates image information on an Image Search instance.
   * > *   Limits are imposed on the instance creation time.
   * >*   This operation is supported by instances that are created in the Singapore (Singapore) region after December 2021. This operation is not supported in other regions.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - UpdateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageResponse
   */
  async updateImageWithOptions(request: $_model.UpdateImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.intAttr3)) {
      query["IntAttr3"] = request.intAttr3;
    }

    if (!$dara.isNull(request.intAttr4)) {
      query["IntAttr4"] = request.intAttr4;
    }

    if (!$dara.isNull(request.strAttr3)) {
      query["StrAttr3"] = request.strAttr3;
    }

    if (!$dara.isNull(request.strAttr4)) {
      query["StrAttr4"] = request.strAttr4;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!$dara.isNull(request.intAttr2)) {
      body["IntAttr2"] = request.intAttr2;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    if (!$dara.isNull(request.strAttr2)) {
      body["StrAttr2"] = request.strAttr2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageResponse({}));
  }

  /**
   * This topic describes the syntax of the UpdateImage operation and provides examples of this operation. You can call this operation to update image information on an Image Search instance.
   * 
   * @remarks
   * This operation updates image information on an Image Search instance.
   * > *   Limits are imposed on the instance creation time.
   * >*   This operation is supported by instances that are created in the Singapore (Singapore) region after December 2021. This operation is not supported in other regions.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - UpdateImageRequest
   * @returns UpdateImageResponse
   */
  async updateImage(request: $_model.UpdateImageRequest): Promise<$_model.UpdateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

}

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
      'eu-central-1': "imagesearch.eu-central-1.aliyuncs.com",
      'cn-shenzhen': "imagesearch.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "imagesearch.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "imagesearch.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "imagesearch.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "imagesearch.cn-beijing.aliyuncs.com",
      'ap-southeast-2': "imagesearch.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "imagesearch.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "imagesearch.ap-south-1.aliyuncs.com",
      'ap-northeast-1': "imagesearch.ap-northeast-1.aliyuncs.com",
    };
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
   * Describes the syntax and provides examples of the AddImage operation, which adds image information to an Image Search instance.
   * 
   * @remarks
   * ## Description
   * This operation adds image information to an Image Search instance.
   * ## QPS limit
   * An instance with a maximum image capacity of 100,000 has a default concurrency of 1, which means that a maximum of 1 image addition request can be processed per second.
   * Instances with other image capacities have a default concurrency of 5, which means that a maximum of 5 image addition requests can be processed per second.
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
   * Describes the syntax and provides examples of the AddImage operation, which adds image information to an Image Search instance.
   * 
   * @remarks
   * ## Description
   * This operation adds image information to an Image Search instance.
   * ## QPS limit
   * An instance with a maximum image capacity of 100,000 has a default concurrency of 1, which means that a maximum of 1 image addition request can be processed per second.
   * Instances with other image capacities have a default concurrency of 5, which means that a maximum of 5 image addition requests can be processed per second.
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
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
   * CheckImageExists
   * 
   * @remarks
   * ## How-To  
   * This API is used to query image information in an Image Search instance based on an image.
   * ## QPS Limit  
   * The default maximum queries per second (QPS) for query operations can be viewed in the console. It corresponds to the Visit Frequency (QPS) you selected when purchasing the instance. Supported QPS values are 1, 5, and 10.
   * ### SDK Version Guide  
   * Upgrade the Image SDK to version V3.1.1 to use the "subject identification" and "similarity score" features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * 
   * @param request - CheckImageExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckImageExistsResponse
   */
  async checkImageExistsWithOptions(request: $_model.CheckImageExistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckImageExistsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
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
      action: "CheckImageExists",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckImageExistsResponse>(await this.callApi(params, req, runtime), new $_model.CheckImageExistsResponse({}));
  }

  /**
   * CheckImageExists
   * 
   * @remarks
   * ## How-To  
   * This API is used to query image information in an Image Search instance based on an image.
   * ## QPS Limit  
   * The default maximum queries per second (QPS) for query operations can be viewed in the console. It corresponds to the Visit Frequency (QPS) you selected when purchasing the instance. Supported QPS values are 1, 5, and 10.
   * ### SDK Version Guide  
   * Upgrade the Image SDK to version V3.1.1 to use the "subject identification" and "similarity score" features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * 
   * @param request - CheckImageExistsRequest
   * @returns CheckImageExistsResponse
   */
  async checkImageExists(request: $_model.CheckImageExistsRequest): Promise<$_model.CheckImageExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkImageExistsWithOptions(request, runtime);
  }

  /**
   * Compares two images and returns a similarity score.
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
   * Compares two images and returns a similarity score.
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
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
   * This topic describes the syntax and examples of the DeleteImage operation, which is used to delete image information from an Image Search instance.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to delete image information from an Image Search instance.
   * >- If the specified image does not exist in the Image Search instance, this operation still returns a success response. Do not use the response to determine whether the image exists.
   * ## QPS limit
   * The default concurrency for delete operations is 20, which means a maximum of 20 delete requests can be processed per second.
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
   * This topic describes the syntax and examples of the DeleteImage operation, which is used to delete image information from an Image Search instance.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to delete image information from an Image Search instance.
   * >- If the specified image does not exist in the Image Search instance, this operation still returns a success response. Do not use the response to determine whether the image exists.
   * ## QPS limit
   * The default concurrency for delete operations is 20, which means a maximum of 20 delete requests can be processed per second.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax and examples of the Detail operation, which queries information about an Image Search instance by name.
   * 
   * @remarks
   * ## Operation description
   * This operation queries instance information from an Image Search instance.
   * > For more product details or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
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
   * This topic describes the syntax and examples of the Detail operation, which queries information about an Image Search instance by name.
   * 
   * @remarks
   * ## Operation description
   * This operation queries instance information from an Image Search instance.
   * > For more product details or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
   * 
   * @param request - DetailRequest
   * @returns DetailResponse
   */
  async detail(request: $_model.DetailRequest): Promise<$_model.DetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax and examples of the DumpMeta operation, which creates a metadata export task for Image Search by name.
   * 
   * @remarks
   * ## Operation description
   * This operation submits a metadata export task to an Image Search instance.
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for submit operations is 1, which means a maximum of 1 request is processed per second.
   * > You cannot submit a new metadata export task while the previous metadata export task is still in progress.
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
   * This topic describes the syntax and examples of the DumpMeta operation, which creates a metadata export task for Image Search by name.
   * 
   * @remarks
   * ## Operation description
   * This operation submits a metadata export task to an Image Search instance.
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for submit operations is 1, which means a maximum of 1 request is processed per second.
   * > You cannot submit a new metadata export task while the previous metadata export task is still in progress.
   * 
   * @param request - DumpMetaRequest
   * @returns DumpMetaResponse
   */
  async dumpMeta(request: $_model.DumpMetaRequest): Promise<$_model.DumpMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaWithOptions(request, runtime);
  }

  /**
   * Describes the syntax and provides examples of the DumpMetaList operation, which queries the list of metadata export tasks in an Image Search instance.
   * 
   * @remarks
   * ## Operation description
   * This operation queries metadata export tasks in an Image Search instance.
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
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
   * Describes the syntax and provides examples of the DumpMetaList operation, which queries the list of metadata export tasks in an Image Search instance.
   * 
   * @remarks
   * ## Operation description
   * This operation queries metadata export tasks in an Image Search instance.
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
   * 
   * @param request - DumpMetaListRequest
   * @returns DumpMetaListResponse
   */
  async dumpMetaList(request: $_model.DumpMetaListRequest): Promise<$_model.DumpMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaListWithOptions(request, runtime);
  }

  /**
   * Describes the syntax and provides examples of the IncreaseInstance operation, which is used to create a batch task for an Image Search instance by name.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to submit a batch task to an Image Search instance.
   * > <props="china">For more information about the product or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us by using DingTalk group 35035130.
   * ## QPS limit
   * Only one batch task can run at a time.
   * > You cannot submit a new batch task until the previous batch task is complete.
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
   * Describes the syntax and provides examples of the IncreaseInstance operation, which is used to create a batch task for an Image Search instance by name.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to submit a batch task to an Image Search instance.
   * > <props="china">For more information about the product or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us by using DingTalk group 35035130.
   * ## QPS limit
   * Only one batch task can run at a time.
   * > You cannot submit a new batch task until the previous batch task is complete.
   * 
   * @param request - IncreaseInstanceRequest
   * @returns IncreaseInstanceResponse
   */
  async increaseInstance(request: $_model.IncreaseInstanceRequest): Promise<$_model.IncreaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the list of batch tasks in an Image Search instance by calling the IncreaseList operation. This topic describes the syntax and provides examples.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to query batch tasks in an Image Search instance.
   * > For more product details or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
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
   * Queries the list of batch tasks in an Image Search instance by calling the IncreaseList operation. This topic describes the syntax and provides examples.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to query batch tasks in an Image Search instance.
   * > For more product details or technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for query operations is 1, which means a maximum of 1 request is processed per second.
   * 
   * @param request - IncreaseListRequest
   * @returns IncreaseListResponse
   */
  async increaseList(request: $_model.IncreaseListRequest): Promise<$_model.IncreaseListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseListWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax and examples of SearchImageByFilter, which is used to query image information in an Image Search instance based on filter conditions.
   * 
   * @param request - SearchImageByFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByFilterResponse
   */
  async searchImageByFilterWithOptions(request: $_model.SearchImageByFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageByFilterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByFilter",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageByFilterResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageByFilterResponse({}));
  }

  /**
   * This topic describes the syntax and examples of SearchImageByFilter, which is used to query image information in an Image Search instance based on filter conditions.
   * 
   * @param request - SearchImageByFilterRequest
   * @returns SearchImageByFilterResponse
   */
  async searchImageByFilter(request: $_model.SearchImageByFilterRequest): Promise<$_model.SearchImageByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByFilterWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax and examples of the SearchByName operation, which is used to query image information in an Image Search instance by name.
   * 
   * @remarks
   * ### Operation description
   * This operation queries image information in an Image Search instance by name (ProductId and PicName).
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ### QPS limit
   * The default maximum query rate can be viewed in the console. It is the QPS value you selected at the time of purchase. Currently supported values are 1 QPS, 5 QPS, and 10 QPS.
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
   * This topic describes the syntax and examples of the SearchByName operation, which is used to query image information in an Image Search instance by name.
   * 
   * @remarks
   * ### Operation description
   * This operation queries image information in an Image Search instance by name (ProductId and PicName).
   * > For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ### QPS limit
   * The default maximum query rate can be viewed in the console. It is the QPS value you selected at the time of purchase. Currently supported values are 1 QPS, 5 QPS, and 10 QPS.
   * 
   * @param request - SearchImageByNameRequest
   * @returns SearchImageByNameResponse
   */
  async searchImageByName(request: $_model.SearchImageByNameRequest): Promise<$_model.SearchImageByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByNameWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax and examples of SearchByPic, which is used to search for image information in an Image Search instance by image.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to search for image information in an Image Search instance by image.
   * > <props="china">For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * You can view the default maximum access frequency for query operations in the console. The frequency is the QPS value that you selected when you made the purchase. The supported values are 1 QPS, 5 QPS, and 10 QPS.
   * ### SDK version description
   * Upgrade the Image Search SDK to V3.1.1 to use the multi-subject identification and similarity score features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
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
   * This topic describes the syntax and examples of SearchByPic, which is used to search for image information in an Image Search instance by image.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to search for image information in an Image Search instance by image.
   * > <props="china">For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through DingTalk group (35035130).
   * ## QPS limit
   * You can view the default maximum access frequency for query operations in the console. The frequency is the QPS value that you selected when you made the purchase. The supported values are 1 QPS, 5 QPS, and 10 QPS.
   * ### SDK version description
   * Upgrade the Image Search SDK to V3.1.1 to use the multi-subject identification and similarity score features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
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
   * This topic describes the syntax and examples of SearchImageByText, which is used to search for image information in an Image Search instance based on text.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to search for image information in an Image Search instance based on text. This operation is available only for instances whose service type is product multimodal search.
   * > <props="china">For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through the DingTalk group (35035130).
   * ## QPS limit
   * You can view the default maximum access frequency for query operations in the console. The frequency is the QPS value you selected at the time of purchase. Currently supported values are 1 QPS, 5 QPS, and 10 QPS.
   * ### SDK version description
   * Upgrade the Image Search SDK to V3.1.1 to use the multi-subject identification and similarity score features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
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
   * This topic describes the syntax and examples of SearchImageByText, which is used to search for image information in an Image Search instance based on text.
   * 
   * @remarks
   * ## Operation description
   * This operation is used to search for image information in an Image Search instance based on text. This operation is available only for instances whose service type is product multimodal search.
   * > <props="china">For more product details and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through the DingTalk group (35035130).
   * ## QPS limit
   * You can view the default maximum access frequency for query operations in the console. The frequency is the QPS value you selected at the time of purchase. Currently supported values are 1 QPS, 5 QPS, and 10 QPS.
   * ### SDK version description
   * Upgrade the Image Search SDK to V3.1.1 to use the multi-subject identification and similarity score features. For more information, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * 
   * @param request - SearchImageByTextRequest
   * @returns SearchImageByTextResponse
   */
  async searchImageByText(request: $_model.SearchImageByTextRequest): Promise<$_model.SearchImageByTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByTextWithOptions(request, runtime);
  }

  /**
   * Updates the image information in an Image Search instance.
   * 
   * @remarks
   * ## Usage notes
   * This operation updates the image information in an Image Search instance based on the product ID and image name.
   * > - The instance must meet the creation date requirements.
   * <props="china">
   * - Instances created after June 2021 in the Shanghai and Hangzhou regions are supported. Instances in other regions can be used normally.
   * <props="intl">
   * - Instances created after December 2021 in the Singapore region are supported. Instances in other regions are currently unavailable.
   * - For more information about the product and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through the DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for update operations is 20, which means that a maximum of 20 requests can be processed per second.
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
   * Updates the image information in an Image Search instance.
   * 
   * @remarks
   * ## Usage notes
   * This operation updates the image information in an Image Search instance based on the product ID and image name.
   * > - The instance must meet the creation date requirements.
   * <props="china">
   * - Instances created after June 2021 in the Shanghai and Hangzhou regions are supported. Instances in other regions can be used normally.
   * <props="intl">
   * - Instances created after December 2021 in the Singapore region are supported. Instances in other regions are currently unavailable.
   * - For more information about the product and technical support, click [Online Consultation](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or contact us through the DingTalk group (35035130).
   * ## QPS limit
   * The default concurrency for update operations is 20, which means that a maximum of 20 requests can be processed per second.
   * 
   * @param request - UpdateImageRequest
   * @returns UpdateImageResponse
   */
  async updateImage(request: $_model.UpdateImageRequest): Promise<$_model.UpdateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

}

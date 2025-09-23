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
    this._endpoint = this.getEndpoint("objectdet", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
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
    let response_ = await $dara.doAction(request_);

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
   * IPC目标检测
   * 
   * @param request - DetectIPCObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectIPCObjectResponse
   */
  async detectIPCObjectWithOptions(request: $_model.DetectIPCObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectIPCObjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectIPCObject",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectIPCObjectResponse>(await this.callApi(params, req, runtime), new $_model.DetectIPCObjectResponse({}));
  }

  /**
   * IPC目标检测
   * 
   * @param request - DetectIPCObjectRequest
   * @returns DetectIPCObjectResponse
   */
  async detectIPCObject(request: $_model.DetectIPCObjectRequest): Promise<$_model.DetectIPCObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectIPCObjectWithOptions(request, runtime);
  }

  async detectIPCObjectAdvance(request: $_model.DetectIPCObjectAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectIPCObjectResponse> {
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
      Product: "objectdet",
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
    let detectIPCObjectReq = new $_model.DetectIPCObjectRequest({ });
    OpenApiUtil.convert(request, detectIPCObjectReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectIPCObjectReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectIPCObjectResp = await this.detectIPCObjectWithOptions(detectIPCObjectReq, runtime);
    return detectIPCObjectResp;
  }

  /**
   * 猫鼠识别
   * 
   * @param request - DetectKitchenAnimalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectKitchenAnimalsResponse
   */
  async detectKitchenAnimalsWithOptions(request: $_model.DetectKitchenAnimalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectKitchenAnimalsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURLA)) {
      body["ImageURLA"] = request.imageURLA;
    }

    if (!$dara.isNull(request.imageURLB)) {
      body["ImageURLB"] = request.imageURLB;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectKitchenAnimals",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectKitchenAnimalsResponse>(await this.callApi(params, req, runtime), new $_model.DetectKitchenAnimalsResponse({}));
  }

  /**
   * 猫鼠识别
   * 
   * @param request - DetectKitchenAnimalsRequest
   * @returns DetectKitchenAnimalsResponse
   */
  async detectKitchenAnimals(request: $_model.DetectKitchenAnimalsRequest): Promise<$_model.DetectKitchenAnimalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectKitchenAnimalsWithOptions(request, runtime);
  }

  async detectKitchenAnimalsAdvance(request: $_model.DetectKitchenAnimalsAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectKitchenAnimalsResponse> {
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
      Product: "objectdet",
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
    let detectKitchenAnimalsReq = new $_model.DetectKitchenAnimalsRequest({ });
    OpenApiUtil.convert(request, detectKitchenAnimalsReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectKitchenAnimalsReq.imageURLA = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectKitchenAnimalsReq.imageURLB = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectKitchenAnimalsResp = await this.detectKitchenAnimalsWithOptions(detectKitchenAnimalsReq, runtime);
    return detectKitchenAnimalsResp;
  }

  /**
   * @param request - DetectMainBodyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectMainBodyResponse
   */
  async detectMainBodyWithOptions(request: $_model.DetectMainBodyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectMainBodyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectMainBody",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectMainBodyResponse>(await this.callApi(params, req, runtime), new $_model.DetectMainBodyResponse({}));
  }

  /**
   * @param request - DetectMainBodyRequest
   * @returns DetectMainBodyResponse
   */
  async detectMainBody(request: $_model.DetectMainBodyRequest): Promise<$_model.DetectMainBodyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectMainBodyWithOptions(request, runtime);
  }

  async detectMainBodyAdvance(request: $_model.DetectMainBodyAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectMainBodyResponse> {
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
      Product: "objectdet",
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
    let detectMainBodyReq = new $_model.DetectMainBodyRequest({ });
    OpenApiUtil.convert(request, detectMainBodyReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectMainBodyReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectMainBodyResp = await this.detectMainBodyWithOptions(detectMainBodyReq, runtime);
    return detectMainBodyResp;
  }

  /**
   * @param request - DetectObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectObjectResponse
   */
  async detectObjectWithOptions(request: $_model.DetectObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectObjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectObject",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectObjectResponse>(await this.callApi(params, req, runtime), new $_model.DetectObjectResponse({}));
  }

  /**
   * @param request - DetectObjectRequest
   * @returns DetectObjectResponse
   */
  async detectObject(request: $_model.DetectObjectRequest): Promise<$_model.DetectObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectObjectWithOptions(request, runtime);
  }

  async detectObjectAdvance(request: $_model.DetectObjectAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectObjectResponse> {
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
      Product: "objectdet",
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
    let detectObjectReq = new $_model.DetectObjectRequest({ });
    OpenApiUtil.convert(request, detectObjectReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectObjectReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectObjectResp = await this.detectObjectWithOptions(detectObjectReq, runtime);
    return detectObjectResp;
  }

  /**
   * 车辆拥堵检测
   * 
   * @param tmpReq - DetectVehicleICongestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectVehicleICongestionResponse
   */
  async detectVehicleICongestionWithOptions(tmpReq: $_model.DetectVehicleICongestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVehicleICongestionResponse> {
    tmpReq.validate();
    let request = new $_model.DetectVehicleICongestionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.preRegionIntersectFeatures)) {
      request.preRegionIntersectFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preRegionIntersectFeatures, "PreRegionIntersectFeatures", "json");
    }

    if (!$dara.isNull(tmpReq.roadRegions)) {
      request.roadRegionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roadRegions, "RoadRegions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.preRegionIntersectFeaturesShrink)) {
      body["PreRegionIntersectFeatures"] = request.preRegionIntersectFeaturesShrink;
    }

    if (!$dara.isNull(request.roadRegionsShrink)) {
      body["RoadRegions"] = request.roadRegionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectVehicleICongestion",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectVehicleICongestionResponse>(await this.callApi(params, req, runtime), new $_model.DetectVehicleICongestionResponse({}));
  }

  /**
   * 车辆拥堵检测
   * 
   * @param request - DetectVehicleICongestionRequest
   * @returns DetectVehicleICongestionResponse
   */
  async detectVehicleICongestion(request: $_model.DetectVehicleICongestionRequest): Promise<$_model.DetectVehicleICongestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectVehicleICongestionWithOptions(request, runtime);
  }

  async detectVehicleICongestionAdvance(request: $_model.DetectVehicleICongestionAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVehicleICongestionResponse> {
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
      Product: "objectdet",
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
    let detectVehicleICongestionReq = new $_model.DetectVehicleICongestionRequest({ });
    OpenApiUtil.convert(request, detectVehicleICongestionReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectVehicleICongestionReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectVehicleICongestionResp = await this.detectVehicleICongestionWithOptions(detectVehicleICongestionReq, runtime);
    return detectVehicleICongestionResp;
  }

  /**
   * 车辆违停检测
   * 
   * @param tmpReq - DetectVehicleIllegalParkingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectVehicleIllegalParkingResponse
   */
  async detectVehicleIllegalParkingWithOptions(tmpReq: $_model.DetectVehicleIllegalParkingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVehicleIllegalParkingResponse> {
    tmpReq.validate();
    let request = new $_model.DetectVehicleIllegalParkingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roadRegions)) {
      request.roadRegionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roadRegions, "RoadRegions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!$dara.isNull(request.roadRegionsShrink)) {
      body["RoadRegions"] = request.roadRegionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectVehicleIllegalParking",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectVehicleIllegalParkingResponse>(await this.callApi(params, req, runtime), new $_model.DetectVehicleIllegalParkingResponse({}));
  }

  /**
   * 车辆违停检测
   * 
   * @param request - DetectVehicleIllegalParkingRequest
   * @returns DetectVehicleIllegalParkingResponse
   */
  async detectVehicleIllegalParking(request: $_model.DetectVehicleIllegalParkingRequest): Promise<$_model.DetectVehicleIllegalParkingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectVehicleIllegalParkingWithOptions(request, runtime);
  }

  async detectVehicleIllegalParkingAdvance(request: $_model.DetectVehicleIllegalParkingAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVehicleIllegalParkingResponse> {
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
      Product: "objectdet",
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
    let detectVehicleIllegalParkingReq = new $_model.DetectVehicleIllegalParkingRequest({ });
    OpenApiUtil.convert(request, detectVehicleIllegalParkingReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectVehicleIllegalParkingReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectVehicleIllegalParkingResp = await this.detectVehicleIllegalParkingWithOptions(detectVehicleIllegalParkingReq, runtime);
    return detectVehicleIllegalParkingResp;
  }

  /**
   * IPC视频文件目标检测
   * 
   * @param request - DetectVideoIPCObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectVideoIPCObjectResponse
   */
  async detectVideoIPCObjectWithOptions(request: $_model.DetectVideoIPCObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVideoIPCObjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackOnlyHasObject)) {
      body["CallbackOnlyHasObject"] = request.callbackOnlyHasObject;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      body["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectVideoIPCObject",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectVideoIPCObjectResponse>(await this.callApi(params, req, runtime), new $_model.DetectVideoIPCObjectResponse({}));
  }

  /**
   * IPC视频文件目标检测
   * 
   * @param request - DetectVideoIPCObjectRequest
   * @returns DetectVideoIPCObjectResponse
   */
  async detectVideoIPCObject(request: $_model.DetectVideoIPCObjectRequest): Promise<$_model.DetectVideoIPCObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectVideoIPCObjectWithOptions(request, runtime);
  }

  async detectVideoIPCObjectAdvance(request: $_model.DetectVideoIPCObjectAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectVideoIPCObjectResponse> {
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
      Product: "objectdet",
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
    let detectVideoIPCObjectReq = new $_model.DetectVideoIPCObjectRequest({ });
    OpenApiUtil.convert(request, detectVideoIPCObjectReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectVideoIPCObjectReq.videoURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectVideoIPCObjectResp = await this.detectVideoIPCObjectWithOptions(detectVideoIPCObjectReq, runtime);
    return detectVideoIPCObjectResp;
  }

  /**
   * @param request - DetectWhiteBaseImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectWhiteBaseImageResponse
   */
  async detectWhiteBaseImageWithOptions(request: $_model.DetectWhiteBaseImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectWhiteBaseImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectWhiteBaseImage",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectWhiteBaseImageResponse>(await this.callApi(params, req, runtime), new $_model.DetectWhiteBaseImageResponse({}));
  }

  /**
   * @param request - DetectWhiteBaseImageRequest
   * @returns DetectWhiteBaseImageResponse
   */
  async detectWhiteBaseImage(request: $_model.DetectWhiteBaseImageRequest): Promise<$_model.DetectWhiteBaseImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectWhiteBaseImageWithOptions(request, runtime);
  }

  async detectWhiteBaseImageAdvance(request: $_model.DetectWhiteBaseImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectWhiteBaseImageResponse> {
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
      Product: "objectdet",
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
    let detectWhiteBaseImageReq = new $_model.DetectWhiteBaseImageRequest({ });
    OpenApiUtil.convert(request, detectWhiteBaseImageReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectWhiteBaseImageReq.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectWhiteBaseImageResp = await this.detectWhiteBaseImageWithOptions(detectWhiteBaseImageReq, runtime);
    return detectWhiteBaseImageResp;
  }

  /**
   * 着装检测
   * 
   * @param tmpReq - DetectWorkwearRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectWorkwearResponse
   */
  async detectWorkwearWithOptions(tmpReq: $_model.DetectWorkwearRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectWorkwearResponse> {
    tmpReq.validate();
    let request = new $_model.DetectWorkwearShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clothes)) {
      request.clothesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clothes, "Clothes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clothesShrink)) {
      body["Clothes"] = request.clothesShrink;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectWorkwear",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectWorkwearResponse>(await this.callApi(params, req, runtime), new $_model.DetectWorkwearResponse({}));
  }

  /**
   * 着装检测
   * 
   * @param request - DetectWorkwearRequest
   * @returns DetectWorkwearResponse
   */
  async detectWorkwear(request: $_model.DetectWorkwearRequest): Promise<$_model.DetectWorkwearResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectWorkwearWithOptions(request, runtime);
  }

  async detectWorkwearAdvance(request: $_model.DetectWorkwearAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectWorkwearResponse> {
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
      Product: "objectdet",
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
    let detectWorkwearReq = new $_model.DetectWorkwearRequest({ });
    OpenApiUtil.convert(request, detectWorkwearReq);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      detectWorkwearReq.imageUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let detectWorkwearResp = await this.detectWorkwearWithOptions(detectWorkwearReq, runtime);
    return detectWorkwearResp;
  }

  /**
   * 查询异步任务结果
   * 
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
   * 查询异步任务结果
   * 
   * @param request - GetAsyncJobResultRequest
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResult(request: $_model.GetAsyncJobResultRequest): Promise<$_model.GetAsyncJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

}

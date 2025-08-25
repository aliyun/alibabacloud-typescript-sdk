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
    this._endpoint = this.getEndpoint("imageaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 图片审核接口
   * 
   * @param request - ScanImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanImageResponse
   */
  async scanImageWithOptions(request: $_model.ScanImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScanImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanImage",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanImageResponse>(await this.callApi(params, req, runtime), new $_model.ScanImageResponse({}));
  }

  /**
   * 图片审核接口
   * 
   * @param request - ScanImageRequest
   * @returns ScanImageResponse
   */
  async scanImage(request: $_model.ScanImageRequest): Promise<$_model.ScanImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scanImageWithOptions(request, runtime);
  }

  async scanImageAdvance(request: $_model.ScanImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScanImageResponse> {
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
      Product: "imageaudit",
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
    let scanImageReq = new $_model.ScanImageRequest({ });
    OpenApiUtil.convert(request, scanImageReq);
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
          await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
          let tmpObj : $_model.ScanImageRequestTask = scanImageReq.task[i0];
          tmpObj.imageURL = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let scanImageResp = await this.scanImageWithOptions(scanImageReq, runtime);
    return scanImageResp;
  }

  /**
   * @param request - ScanTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanTextResponse
   */
  async scanTextWithOptions(request: $_model.ScanTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScanTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanText",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanTextResponse>(await this.callApi(params, req, runtime), new $_model.ScanTextResponse({}));
  }

  /**
   * @param request - ScanTextRequest
   * @returns ScanTextResponse
   */
  async scanText(request: $_model.ScanTextRequest): Promise<$_model.ScanTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scanTextWithOptions(request, runtime);
  }

}

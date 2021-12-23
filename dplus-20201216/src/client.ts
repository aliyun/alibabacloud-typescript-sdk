// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AePredictCategoryRequest extends $tea.Model {
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AePredictCategoryAdvanceRequest extends $tea.Model {
  picUrlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      picUrlObject: 'PicUrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AePredictCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AePropRecRequest extends $tea.Model {
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AePropRecAdvanceRequest extends $tea.Model {
  picUrlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      picUrlObject: 'PicUrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AePropRecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskRequest extends $tea.Model {
  gif?: boolean;
  imgUrlList?: string[];
  templateMode?: string;
  textList?: string[];
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      imgUrlList: 'ImgUrlList',
      templateMode: 'TemplateMode',
      textList: 'TextList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: 'boolean',
      imgUrlList: { 'type': 'array', 'itemType': 'string' },
      templateMode: 'string',
      textList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskShrinkRequest extends $tea.Model {
  gif?: boolean;
  imgUrlListShrink?: string;
  templateMode?: string;
  textListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      imgUrlListShrink: 'ImgUrlList',
      templateMode: 'TemplateMode',
      textListShrink: 'TextList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: 'boolean',
      imgUrlListShrink: 'string',
      templateMode: 'string',
      textListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageAmazonTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageAmazonTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetTaskResultResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTaskResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  code?: number;
  data?: GetTaskStatusResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTaskStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWordsRequest extends $tea.Model {
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWordsAdvanceRequest extends $tea.Model {
  picUrlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      picUrlObject: 'PicUrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBackgroundRequest extends $tea.Model {
  backgroundId?: string;
  num?: number;
  picBackgroundUrl?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundId: 'BackgroundId',
      num: 'Num',
      picBackgroundUrl: 'PicBackgroundUrl',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundId: 'string',
      num: 'number',
      picBackgroundUrl: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBackgroundAdvanceRequest extends $tea.Model {
  picUrlObject: Readable;
  backgroundId?: string;
  num?: number;
  picBackgroundUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrlObject: 'PicUrlObject',
      backgroundId: 'BackgroundId',
      num: 'Num',
      picBackgroundUrl: 'PicBackgroundUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrlObject: 'Readable',
      backgroundId: 'string',
      num: 'number',
      picBackgroundUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBackgroundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyData extends $tea.Model {
  resuslt?: string;
  status?: number;
  statusName?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resuslt: 'Resuslt',
      status: 'Status',
      statusName: 'StatusName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resuslt: 'string',
      status: 'number',
      statusName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBodyData extends $tea.Model {
  status?: number;
  statusName?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusName: 'StatusName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      statusName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async aePredictCategoryWithOptions(request: AePredictCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AePredictCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picUrl)) {
      body["PicUrl"] = request.picUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AePredictCategory",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AePredictCategoryResponse>(await this.callApi(params, req, runtime), new AePredictCategoryResponse({}));
  }

  async aePredictCategory(request: AePredictCategoryRequest): Promise<AePredictCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aePredictCategoryWithOptions(request, runtime);
  }

  async aePredictCategoryAdvance(request: AePredictCategoryAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AePredictCategoryResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "dplus",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let aePredictCategoryReq = new AePredictCategoryRequest({ });
    OpenApiUtil.convert(request, aePredictCategoryReq);
    if (!Util.isUnset(request.picUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      aePredictCategoryReq.picUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let aePredictCategoryResp = await this.aePredictCategoryWithOptions(aePredictCategoryReq, runtime);
    return aePredictCategoryResp;
  }

  async aePropRecWithOptions(request: AePropRecRequest, runtime: $Util.RuntimeOptions): Promise<AePropRecResponse> {
    Util.validateModel(request);
    let query = { };
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picUrl)) {
      body["PicUrl"] = request.picUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AePropRec",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AePropRecResponse>(await this.callApi(params, req, runtime), new AePropRecResponse({}));
  }

  async aePropRec(request: AePropRecRequest): Promise<AePropRecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aePropRecWithOptions(request, runtime);
  }

  async aePropRecAdvance(request: AePropRecAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AePropRecResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "dplus",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let aePropRecReq = new AePropRecRequest({ });
    OpenApiUtil.convert(request, aePropRecReq);
    if (!Util.isUnset(request.picUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      aePropRecReq.picUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let aePropRecResp = await this.aePropRecWithOptions(aePropRecReq, runtime);
    return aePropRecResp;
  }

  async createImageAmazonTaskWithOptions(tmpReq: CreateImageAmazonTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageAmazonTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateImageAmazonTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imgUrlList)) {
      request.imgUrlListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imgUrlList, "ImgUrlList", "json");
    }

    if (!Util.isUnset(tmpReq.textList)) {
      request.textListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textList, "TextList", "json");
    }

    let query = { };
    query["Gif"] = request.gif;
    query["ImgUrlList"] = request.imgUrlListShrink;
    query["TemplateMode"] = request.templateMode;
    query["TextList"] = request.textListShrink;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageAmazonTask",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageAmazonTaskResponse>(await this.callApi(params, req, runtime), new CreateImageAmazonTaskResponse({}));
  }

  async createImageAmazonTask(request: CreateImageAmazonTaskRequest): Promise<CreateImageAmazonTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageAmazonTaskWithOptions(request, runtime);
  }

  async getTaskResultWithOptions(request: GetTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskResult",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
  }

  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskResultWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async removeWordsWithOptions(request: RemoveWordsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveWordsResponse> {
    Util.validateModel(request);
    let query = { };
    query["PicUrl"] = request.picUrl;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveWords",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveWordsResponse>(await this.callApi(params, req, runtime), new RemoveWordsResponse({}));
  }

  async removeWords(request: RemoveWordsRequest): Promise<RemoveWordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeWordsWithOptions(request, runtime);
  }

  async removeWordsAdvance(request: RemoveWordsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveWordsResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "dplus",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let removeWordsReq = new RemoveWordsRequest({ });
    OpenApiUtil.convert(request, removeWordsReq);
    if (!Util.isUnset(request.picUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      removeWordsReq.picUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let removeWordsResp = await this.removeWordsWithOptions(removeWordsReq, runtime);
    return removeWordsResp;
  }

  async replaceBackgroundWithOptions(request: ReplaceBackgroundRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceBackgroundResponse> {
    Util.validateModel(request);
    let query = { };
    query["BackgroundId"] = request.backgroundId;
    query["Num"] = request.num;
    query["PicBackgroundUrl"] = request.picBackgroundUrl;
    query["PicUrl"] = request.picUrl;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceBackground",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceBackgroundResponse>(await this.callApi(params, req, runtime), new ReplaceBackgroundResponse({}));
  }

  async replaceBackground(request: ReplaceBackgroundRequest): Promise<ReplaceBackgroundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceBackgroundWithOptions(request, runtime);
  }

  async replaceBackgroundAdvance(request: ReplaceBackgroundAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceBackgroundResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "dplus",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let replaceBackgroundReq = new ReplaceBackgroundRequest({ });
    OpenApiUtil.convert(request, replaceBackgroundReq);
    if (!Util.isUnset(request.picUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      replaceBackgroundReq.picUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let replaceBackgroundResp = await this.replaceBackgroundWithOptions(replaceBackgroundReq, runtime);
    return replaceBackgroundResp;
  }

}

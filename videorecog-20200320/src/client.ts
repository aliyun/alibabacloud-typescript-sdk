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

export class GetAsyncJobResultRequest extends $tea.Model {
  async?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetAsyncJobResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectVideoShotResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectVideoShotResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVideoShotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVideoShotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  isGif?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      isGif: 'IsGif',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      isGif: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  isGif?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      isGif: 'IsGif',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      isGif: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateVideoCoverResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateVideoCoverResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateVideoCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateVideoCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentRequest extends $tea.Model {
  videoURL?: string;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBody extends $tea.Model {
  requestId?: string;
  data?: UnderstandVideoContentResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: UnderstandVideoContentResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnderstandVideoContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnderstandVideoContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  status?: string;
  errorMessage?: string;
  result?: string;
  errorCode?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      result: 'Result',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      result: 'string',
      errorCode: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponseBodyData extends $tea.Model {
  shotFrameIds?: number[];
  static names(): { [key: string]: string } {
    return {
      shotFrameIds: 'ShotFrameIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shotFrameIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyDataOutputs extends $tea.Model {
  imageURL?: string;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyData extends $tea.Model {
  outputs?: GenerateVideoCoverResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': GenerateVideoCoverResponseBodyDataOutputs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyDataVideoInfo extends $tea.Model {
  width?: number;
  height?: number;
  duration?: number;
  fps?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      duration: 'Duration',
      fps: 'Fps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      duration: 'number',
      fps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyData extends $tea.Model {
  tagInfo?: { [key: string]: any };
  videoInfo?: UnderstandVideoContentResponseBodyDataVideoInfo;
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      videoInfo: UnderstandVideoContentResponseBodyDataVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videorecog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async detectVideoShotWithOptions(request: DetectVideoShotRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoShotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVideoShotResponse>(await this.doRPCRequest("DetectVideoShot", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVideoShotResponse({}));
  }

  async detectVideoShot(request: DetectVideoShotRequest): Promise<DetectVideoShotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVideoShotWithOptions(request, runtime);
  }

  async detectVideoShotAdvance(request: DetectVideoShotAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoShotResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videorecog",
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
    let detectVideoShotReq = new DetectVideoShotRequest({ });
    OpenApiUtil.convert(request, detectVideoShotReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
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
    detectVideoShotReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectVideoShotResp = await this.detectVideoShotWithOptions(detectVideoShotReq, runtime);
    return detectVideoShotResp;
  }

  async generateVideoCoverWithOptions(request: GenerateVideoCoverRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateVideoCoverResponse>(await this.doRPCRequest("GenerateVideoCover", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateVideoCoverResponse({}));
  }

  async generateVideoCover(request: GenerateVideoCoverRequest): Promise<GenerateVideoCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideoCoverWithOptions(request, runtime);
  }

  async generateVideoCoverAdvance(request: GenerateVideoCoverAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videorecog",
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
    let generateVideoCoverReq = new GenerateVideoCoverRequest({ });
    OpenApiUtil.convert(request, generateVideoCoverReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
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
    generateVideoCoverReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let generateVideoCoverResp = await this.generateVideoCoverWithOptions(generateVideoCoverReq, runtime);
    return generateVideoCoverResp;
  }

  async understandVideoContentWithOptions(request: UnderstandVideoContentRequest, runtime: $Util.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnderstandVideoContentResponse>(await this.doRPCRequest("UnderstandVideoContent", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnderstandVideoContentResponse({}));
  }

  async understandVideoContent(request: UnderstandVideoContentRequest): Promise<UnderstandVideoContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.understandVideoContentWithOptions(request, runtime);
  }

  async understandVideoContentAdvance(request: UnderstandVideoContentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videorecog",
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
    let understandVideoContentReq = new UnderstandVideoContentRequest({ });
    OpenApiUtil.convert(request, understandVideoContentReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoURLObject,
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
    understandVideoContentReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let understandVideoContentResp = await this.understandVideoContentWithOptions(understandVideoContentReq, runtime);
    return understandVideoContentResp;
  }

}

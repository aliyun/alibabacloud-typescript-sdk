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

export class ReconstructBodyBySingleImageRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructBodyBySingleImageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructBodyBySingleImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: ReconstructBodyBySingleImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ReconstructBodyBySingleImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructBodyBySingleImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReconstructBodyBySingleImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReconstructBodyBySingleImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructThreeDMultiViewRequest extends $tea.Model {
  zipFileUrl?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      zipFileUrl: 'ZipFileUrl',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zipFileUrl: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructThreeDMultiViewAdvanceRequest extends $tea.Model {
  zipFileUrlObject: Readable;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      zipFileUrlObject: 'ZipFileUrlObject',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zipFileUrlObject: 'Readable',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructThreeDMultiViewResponseBody extends $tea.Model {
  requestId?: string;
  data?: ReconstructThreeDMultiViewResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ReconstructThreeDMultiViewResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructThreeDMultiViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReconstructThreeDMultiViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReconstructThreeDMultiViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EstimateStereoImageDepthRequest extends $tea.Model {
  leftImageURL?: string;
  rightImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      leftImageURL: 'LeftImageURL',
      rightImageURL: 'RightImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftImageURL: 'string',
      rightImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateStereoImageDepthResponseBody extends $tea.Model {
  requestId?: string;
  data?: EstimateStereoImageDepthResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EstimateStereoImageDepthResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateStereoImageDepthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstimateStereoImageDepthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstimateStereoImageDepthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularImageDepthRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularImageDepthAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularImageDepthResponseBody extends $tea.Model {
  requestId?: string;
  data?: EstimateMonocularImageDepthResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EstimateMonocularImageDepthResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularImageDepthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstimateMonocularImageDepthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstimateMonocularImageDepthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularVideoDepthRequest extends $tea.Model {
  videoURL?: string;
  sampleRate?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      sampleRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularVideoDepthAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  sampleRate?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      sampleRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularVideoDepthResponseBody extends $tea.Model {
  requestId?: string;
  data?: EstimateMonocularVideoDepthResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EstimateMonocularVideoDepthResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularVideoDepthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstimateMonocularVideoDepthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstimateMonocularVideoDepthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructBodyBySingleImageResponseBodyData extends $tea.Model {
  depthURL?: string;
  meshURL?: string;
  static names(): { [key: string]: string } {
    return {
      depthURL: 'DepthURL',
      meshURL: 'MeshURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depthURL: 'string',
      meshURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReconstructThreeDMultiViewResponseBodyData extends $tea.Model {
  pointCloudURL?: string;
  static names(): { [key: string]: string } {
    return {
      pointCloudURL: 'PointCloudURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pointCloudURL: 'string',
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

export class EstimateStereoImageDepthResponseBodyData extends $tea.Model {
  disparityMapURL?: string;
  disparityVisURL?: string;
  static names(): { [key: string]: string } {
    return {
      disparityMapURL: 'DisparityMapURL',
      disparityVisURL: 'DisparityVisURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disparityMapURL: 'string',
      disparityVisURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularImageDepthResponseBodyData extends $tea.Model {
  depthMapUrl?: string;
  depthToColorUrl?: string;
  static names(): { [key: string]: string } {
    return {
      depthMapUrl: 'DepthMapUrl',
      depthToColorUrl: 'DepthToColorUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depthMapUrl: 'string',
      depthToColorUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimateMonocularVideoDepthResponseBodyData extends $tea.Model {
  depthUrl?: string;
  depthVisUrl?: string;
  static names(): { [key: string]: string } {
    return {
      depthUrl: 'DepthUrl',
      depthVisUrl: 'DepthVisUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depthUrl: 'string',
      depthVisUrl: 'string',
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
    this._endpoint = this.getEndpoint("threedvision", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async reconstructBodyBySingleImageWithOptions(request: ReconstructBodyBySingleImageRequest, runtime: $Util.RuntimeOptions): Promise<ReconstructBodyBySingleImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReconstructBodyBySingleImageResponse>(await this.doRPCRequest("ReconstructBodyBySingleImage", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new ReconstructBodyBySingleImageResponse({}));
  }

  async reconstructBodyBySingleImage(request: ReconstructBodyBySingleImageRequest): Promise<ReconstructBodyBySingleImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reconstructBodyBySingleImageWithOptions(request, runtime);
  }

  async reconstructBodyBySingleImageAdvance(request: ReconstructBodyBySingleImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ReconstructBodyBySingleImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "threedvision",
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
    let reconstructBodyBySingleImageReq = new ReconstructBodyBySingleImageRequest({ });
    OpenApiUtil.convert(request, reconstructBodyBySingleImageReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
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
      reconstructBodyBySingleImageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let reconstructBodyBySingleImageResp = await this.reconstructBodyBySingleImageWithOptions(reconstructBodyBySingleImageReq, runtime);
    return reconstructBodyBySingleImageResp;
  }

  async reconstructThreeDMultiViewWithOptions(request: ReconstructThreeDMultiViewRequest, runtime: $Util.RuntimeOptions): Promise<ReconstructThreeDMultiViewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReconstructThreeDMultiViewResponse>(await this.doRPCRequest("ReconstructThreeDMultiView", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new ReconstructThreeDMultiViewResponse({}));
  }

  async reconstructThreeDMultiView(request: ReconstructThreeDMultiViewRequest): Promise<ReconstructThreeDMultiViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reconstructThreeDMultiViewWithOptions(request, runtime);
  }

  async reconstructThreeDMultiViewAdvance(request: ReconstructThreeDMultiViewAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ReconstructThreeDMultiViewResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "threedvision",
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
    let reconstructThreeDMultiViewReq = new ReconstructThreeDMultiViewRequest({ });
    OpenApiUtil.convert(request, reconstructThreeDMultiViewReq);
    if (!Util.isUnset(request.zipFileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.zipFileUrlObject,
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
      reconstructThreeDMultiViewReq.zipFileUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let reconstructThreeDMultiViewResp = await this.reconstructThreeDMultiViewWithOptions(reconstructThreeDMultiViewReq, runtime);
    return reconstructThreeDMultiViewResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async estimateStereoImageDepthWithOptions(request: EstimateStereoImageDepthRequest, runtime: $Util.RuntimeOptions): Promise<EstimateStereoImageDepthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EstimateStereoImageDepthResponse>(await this.doRPCRequest("EstimateStereoImageDepth", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new EstimateStereoImageDepthResponse({}));
  }

  async estimateStereoImageDepth(request: EstimateStereoImageDepthRequest): Promise<EstimateStereoImageDepthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.estimateStereoImageDepthWithOptions(request, runtime);
  }

  async estimateMonocularImageDepthWithOptions(request: EstimateMonocularImageDepthRequest, runtime: $Util.RuntimeOptions): Promise<EstimateMonocularImageDepthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EstimateMonocularImageDepthResponse>(await this.doRPCRequest("EstimateMonocularImageDepth", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new EstimateMonocularImageDepthResponse({}));
  }

  async estimateMonocularImageDepth(request: EstimateMonocularImageDepthRequest): Promise<EstimateMonocularImageDepthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.estimateMonocularImageDepthWithOptions(request, runtime);
  }

  async estimateMonocularImageDepthAdvance(request: EstimateMonocularImageDepthAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EstimateMonocularImageDepthResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "threedvision",
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
    let estimateMonocularImageDepthReq = new EstimateMonocularImageDepthRequest({ });
    OpenApiUtil.convert(request, estimateMonocularImageDepthReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
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
      estimateMonocularImageDepthReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let estimateMonocularImageDepthResp = await this.estimateMonocularImageDepthWithOptions(estimateMonocularImageDepthReq, runtime);
    return estimateMonocularImageDepthResp;
  }

  async estimateMonocularVideoDepthWithOptions(request: EstimateMonocularVideoDepthRequest, runtime: $Util.RuntimeOptions): Promise<EstimateMonocularVideoDepthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EstimateMonocularVideoDepthResponse>(await this.doRPCRequest("EstimateMonocularVideoDepth", "2021-01-31", "HTTPS", "POST", "AK", "json", req, runtime), new EstimateMonocularVideoDepthResponse({}));
  }

  async estimateMonocularVideoDepth(request: EstimateMonocularVideoDepthRequest): Promise<EstimateMonocularVideoDepthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.estimateMonocularVideoDepthWithOptions(request, runtime);
  }

  async estimateMonocularVideoDepthAdvance(request: EstimateMonocularVideoDepthAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EstimateMonocularVideoDepthResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "threedvision",
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
    let estimateMonocularVideoDepthReq = new EstimateMonocularVideoDepthRequest({ });
    OpenApiUtil.convert(request, estimateMonocularVideoDepthReq);
    if (!Util.isUnset(request.videoURLObject)) {
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
      estimateMonocularVideoDepthReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let estimateMonocularVideoDepthResp = await this.estimateMonocularVideoDepthWithOptions(estimateMonocularVideoDepthReq, runtime);
    return estimateMonocularVideoDepthResp;
  }

}

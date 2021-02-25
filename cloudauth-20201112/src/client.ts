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

export class LivenessDetectRequest extends $tea.Model {
  bizType?: string;
  bizId?: string;
  mediaCategory?: string;
  mediaUrl?: string;
  mediaFile?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizId: 'BizId',
      mediaCategory: 'MediaCategory',
      mediaUrl: 'MediaUrl',
      mediaFile: 'MediaFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizId: 'string',
      mediaCategory: 'string',
      mediaUrl: 'string',
      mediaFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectAdvanceRequest extends $tea.Model {
  mediaFileObject: Readable;
  bizType?: string;
  bizId?: string;
  mediaCategory?: string;
  mediaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaFileObject: 'MediaFileObject',
      bizType: 'BizType',
      bizId: 'BizId',
      mediaCategory: 'MediaCategory',
      mediaUrl: 'MediaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaFileObject: 'Readable',
      bizType: 'string',
      bizId: 'string',
      mediaCategory: 'string',
      mediaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponseBody extends $tea.Model {
  resultObject?: LivenessDetectResponseBodyResultObject;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      resultObject: 'ResultObject',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultObject: LivenessDetectResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LivenessDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LivenessDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponseBodyResultObject extends $tea.Model {
  score?: number;
  frameUrl?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      frameUrl: 'FrameUrl',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      frameUrl: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async livenessDetectWithOptions(request: LivenessDetectRequest, runtime: $Util.RuntimeOptions): Promise<LivenessDetectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LivenessDetectResponse>(await this.doRPCRequest("LivenessDetect", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new LivenessDetectResponse({}));
  }

  async livenessDetect(request: LivenessDetectRequest): Promise<LivenessDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessDetectWithOptions(request, runtime);
  }

  async livenessDetectAdvance(request: LivenessDetectAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<LivenessDetectResponse> {
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
      product: "Cloudauth",
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
    let livenessDetectReq = new LivenessDetectRequest({ });
    OpenApiUtil.convert(request, livenessDetectReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.mediaFileObject,
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
    livenessDetectReq.mediaFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let livenessDetectResp = await this.livenessDetectWithOptions(livenessDetectReq, runtime);
    return livenessDetectResp;
  }

}

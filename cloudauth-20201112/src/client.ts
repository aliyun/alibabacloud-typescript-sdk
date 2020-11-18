// This file is auto-generated, don't edit it
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import Util, * as $Util from '@alicloud/tea-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
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

export class LivenessDetectResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  resultObject: LivenessDetectResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      resultObject: LivenessDetectResponseResultObject,
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

export class LivenessDetectResponseResultObject extends $tea.Model {
  passed: string;
  score: number;
  frameUrl: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      score: 'Score',
      frameUrl: 'FrameUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
      score: 'number',
      frameUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async livenessDetect(request: LivenessDetectRequest, runtime: $Util.RuntimeOptions): Promise<LivenessDetectResponse> {
    Util.validateModel(request);
    return $tea.cast<LivenessDetectResponse>(await this.doRequest("LivenessDetect", "HTTPS", "POST", "2020-11-12", "AK", null, $tea.toMap(request), runtime), new LivenessDetectResponse({}));
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
    RPCUtil.convert(runtime, ossRuntime);
    let livenessDetectreq = new LivenessDetectRequest({ });
    RPCUtil.convert(request, livenessDetectreq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    livenessDetectreq.mediaFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let livenessDetectResp = await this.livenessDetect(livenessDetectreq, runtime);
    return livenessDetectResp;
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

}

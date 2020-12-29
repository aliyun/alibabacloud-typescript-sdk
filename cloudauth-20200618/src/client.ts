// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ContrastSmartVerifyRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  certType?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  certName?: string;
  certNo?: string;
  facePicFile?: string;
  facePicUrl?: string;
  facePicString?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      certType: 'CertType',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      certName: 'CertName',
      certNo: 'CertNo',
      facePicFile: 'FacePicFile',
      facePicUrl: 'FacePicUrl',
      facePicString: 'FacePicString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      certType: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      certName: 'string',
      certNo: 'string',
      facePicFile: 'string',
      facePicUrl: 'string',
      facePicString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  resultObject: ContrastSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      resultObject: ContrastSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyAdvanceRequest extends $tea.Model {
  facePicFileObject: Readable;
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  certType?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  certName?: string;
  certNo?: string;
  facePicUrl?: string;
  facePicString?: string;
  static names(): { [key: string]: string } {
    return {
      facePicFileObject: 'FacePicFileObject',
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      certType: 'CertType',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      certName: 'CertName',
      certNo: 'CertNo',
      facePicUrl: 'FacePicUrl',
      facePicString: 'FacePicString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicFileObject: 'Readable',
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      certType: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      certName: 'string',
      certNo: 'string',
      facePicUrl: 'string',
      facePicString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  certType?: string;
  certName?: string;
  certNo?: string;
  certUrl?: string;
  certFile?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      certType: 'CertType',
      certName: 'CertName',
      certNo: 'CertNo',
      certUrl: 'CertUrl',
      certFile: 'CertFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      certType: 'string',
      certName: 'string',
      certNo: 'string',
      certUrl: 'string',
      certFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  resultObject: ElementSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      resultObject: ElementSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyAdvanceRequest extends $tea.Model {
  certFileObject: Readable;
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  certType?: string;
  certName?: string;
  certNo?: string;
  certUrl?: string;
  static names(): { [key: string]: string } {
    return {
      certFileObject: 'CertFileObject',
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      certType: 'CertType',
      certName: 'CertName',
      certNo: 'CertNo',
      certUrl: 'CertUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFileObject: 'Readable',
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      certType: 'string',
      certName: 'string',
      certNo: 'string',
      certUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  certType?: string;
  metaInfo?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  certName?: string;
  certNo?: string;
  ocr?: string;
  callbackUrl?: string;
  callbackToken?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  certifyId?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      certType: 'CertType',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      certName: 'CertName',
      certNo: 'CertNo',
      ocr: 'Ocr',
      callbackUrl: 'CallbackUrl',
      callbackToken: 'CallbackToken',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      certifyId: 'CertifyId',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      certType: 'string',
      metaInfo: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      certName: 'string',
      certNo: 'string',
      ocr: 'string',
      callbackUrl: 'string',
      callbackToken: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      certifyId: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  resultObject: InitSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      resultObject: InitSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyRequest extends $tea.Model {
  sceneId?: number;
  certifyId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      certifyId: 'CertifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      certifyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  resultObject: DescribeSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      resultObject: DescribeSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  passed: string;
  subCode: string;
  verifyInfo: string;
  riskInfo: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      passed: 'Passed',
      subCode: 'SubCode',
      verifyInfo: 'VerifyInfo',
      riskInfo: 'RiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      passed: 'string',
      subCode: 'string',
      verifyInfo: 'string',
      riskInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponseResultObject extends $tea.Model {
  passed: string;
  subCode: string;
  materialInfo: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      subCode: 'SubCode',
      materialInfo: 'MaterialInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
      subCode: 'string',
      materialInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponseResultObject extends $tea.Model {
  passed: string;
  subCode: string;
  materialInfo: string;
  passedScore: number;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      subCode: 'SubCode',
      materialInfo: 'MaterialInfo',
      passedScore: 'PassedScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
      subCode: 'string',
      materialInfo: 'string',
      passedScore: 'number',
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


  async contrastSmartVerify(request: ContrastSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ContrastSmartVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<ContrastSmartVerifyResponse>(await this.doRequest("ContrastSmartVerify", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new ContrastSmartVerifyResponse({}));
  }

  async contrastSmartVerifySimply(request: ContrastSmartVerifyRequest): Promise<ContrastSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contrastSmartVerify(request, runtime);
  }

  async contrastSmartVerifyAdvance(request: ContrastSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ContrastSmartVerifyResponse> {
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
    let contrastSmartVerifyReq = new ContrastSmartVerifyRequest({ });
    RPCUtil.convert(request, contrastSmartVerifyReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.facePicFileObject,
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
    contrastSmartVerifyReq.facePicFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let contrastSmartVerifyResp = await this.contrastSmartVerify(contrastSmartVerifyReq, runtime);
    return contrastSmartVerifyResp;
  }

  async elementSmartVerify(request: ElementSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<ElementSmartVerifyResponse>(await this.doRequest("ElementSmartVerify", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new ElementSmartVerifyResponse({}));
  }

  async elementSmartVerifySimply(request: ElementSmartVerifyRequest): Promise<ElementSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.elementSmartVerify(request, runtime);
  }

  async elementSmartVerifyAdvance(request: ElementSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
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
    let elementSmartVerifyReq = new ElementSmartVerifyRequest({ });
    RPCUtil.convert(request, elementSmartVerifyReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.certFileObject,
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
    elementSmartVerifyReq.certFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let elementSmartVerifyResp = await this.elementSmartVerify(elementSmartVerifyReq, runtime);
    return elementSmartVerifyResp;
  }

  async initSmartVerify(request: InitSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitSmartVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<InitSmartVerifyResponse>(await this.doRequest("InitSmartVerify", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new InitSmartVerifyResponse({}));
  }

  async initSmartVerifySimply(request: InitSmartVerifyRequest): Promise<InitSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initSmartVerify(request, runtime);
  }

  async describeSmartVerify(request: DescribeSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSmartVerifyResponse>(await this.doRequest("DescribeSmartVerify", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeSmartVerifyResponse({}));
  }

  async describeSmartVerifySimply(request: DescribeSmartVerifyRequest): Promise<DescribeSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartVerify(request, runtime);
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

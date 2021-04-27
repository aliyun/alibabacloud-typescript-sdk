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

export class ContrastSmartVerifyResponseBody extends $tea.Model {
  resultObject?: ContrastSmartVerifyResponseBodyResultObject;
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
      resultObject: ContrastSmartVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContrastSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContrastSmartVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyRequest extends $tea.Model {
  sceneId?: number;
  certifyId?: string;
  pictureReturnType?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      certifyId: 'CertifyId',
      pictureReturnType: 'PictureReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      certifyId: 'string',
      pictureReturnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponseBody extends $tea.Model {
  resultObject?: DescribeSmartVerifyResponseBodyResultObject;
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
      resultObject: DescribeSmartVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartVerifyResponseBody,
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
  certNationalEmblemUrl?: string;
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
      certNationalEmblemUrl: 'CertNationalEmblemUrl',
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
      certNationalEmblemUrl: 'string',
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
  certNationalEmblemUrl?: string;
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
      certNationalEmblemUrl: 'CertNationalEmblemUrl',
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
      certNationalEmblemUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponseBody extends $tea.Model {
  resultObject?: ElementSmartVerifyResponseBodyResultObject;
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
      resultObject: ElementSmartVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ElementSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ElementSmartVerifyResponseBody,
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
  idNo?: string;
  idName?: string;
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
      idNo: 'IdNo',
      idName: 'IdName',
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
      idNo: 'string',
      idName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponseBody extends $tea.Model {
  resultObject?: InitSmartVerifyResponseBodyResultObject;
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
      resultObject: InitSmartVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitSmartVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  bankCardNo?: string;
  idNo?: string;
  bankCardUrl?: string;
  bankCardFile?: string;
  idName?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      bankCardNo: 'BankCardNo',
      idNo: 'IdNo',
      bankCardUrl: 'BankCardUrl',
      bankCardFile: 'BankCardFile',
      idName: 'IdName',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      bankCardNo: 'string',
      idNo: 'string',
      bankCardUrl: 'string',
      bankCardFile: 'string',
      idName: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementAdvanceRequest extends $tea.Model {
  bankCardFileObject: Readable;
  sceneId?: number;
  outerOrderNo?: string;
  mode?: string;
  bankCardNo?: string;
  idNo?: string;
  bankCardUrl?: string;
  idName?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      bankCardFileObject: 'BankCardFileObject',
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      mode: 'Mode',
      bankCardNo: 'BankCardNo',
      idNo: 'IdNo',
      bankCardUrl: 'BankCardUrl',
      idName: 'IdName',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankCardFileObject: 'Readable',
      sceneId: 'number',
      outerOrderNo: 'string',
      mode: 'string',
      bankCardNo: 'string',
      idNo: 'string',
      bankCardUrl: 'string',
      idName: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementResponseBody extends $tea.Model {
  resultObject?: VerifyBankElementResponseBodyResultObject;
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
      resultObject: VerifyBankElementResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyBankElementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyBankElementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponseBodyResultObject extends $tea.Model {
  verifyInfo?: string;
  subCode?: string;
  certifyId?: string;
  riskInfo?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      verifyInfo: 'VerifyInfo',
      subCode: 'SubCode',
      certifyId: 'CertifyId',
      riskInfo: 'RiskInfo',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyInfo: 'string',
      subCode: 'string',
      certifyId: 'string',
      riskInfo: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponseBodyResultObject extends $tea.Model {
  passedScore?: number;
  materialInfo?: string;
  subCode?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      passedScore: 'PassedScore',
      materialInfo: 'MaterialInfo',
      subCode: 'SubCode',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passedScore: 'number',
      materialInfo: 'string',
      subCode: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponseBodyResultObject extends $tea.Model {
  materialInfo?: string;
  certifyId?: string;
  subCode?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      certifyId: 'CertifyId',
      subCode: 'SubCode',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      certifyId: 'string',
      subCode: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
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

export class VerifyBankElementResponseBodyResultObject extends $tea.Model {
  materialInfo?: string;
  certifyId?: string;
  subCode?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      certifyId: 'CertifyId',
      subCode: 'SubCode',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      certifyId: 'string',
      subCode: 'string',
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

  async contrastSmartVerifyWithOptions(request: ContrastSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ContrastSmartVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContrastSmartVerifyResponse>(await this.doRPCRequest("ContrastSmartVerify", "2020-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new ContrastSmartVerifyResponse({}));
  }

  async contrastSmartVerify(request: ContrastSmartVerifyRequest): Promise<ContrastSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contrastSmartVerifyWithOptions(request, runtime);
  }

  async contrastSmartVerifyAdvance(request: ContrastSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ContrastSmartVerifyResponse> {
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
    let contrastSmartVerifyReq = new ContrastSmartVerifyRequest({ });
    OpenApiUtil.convert(request, contrastSmartVerifyReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let contrastSmartVerifyResp = await this.contrastSmartVerifyWithOptions(contrastSmartVerifyReq, runtime);
    return contrastSmartVerifyResp;
  }

  async describeSmartVerifyWithOptions(request: DescribeSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartVerifyResponse>(await this.doRPCRequest("DescribeSmartVerify", "2020-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartVerifyResponse({}));
  }

  async describeSmartVerify(request: DescribeSmartVerifyRequest): Promise<DescribeSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartVerifyWithOptions(request, runtime);
  }

  async elementSmartVerifyWithOptions(request: ElementSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ElementSmartVerifyResponse>(await this.doRPCRequest("ElementSmartVerify", "2020-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new ElementSmartVerifyResponse({}));
  }

  async elementSmartVerify(request: ElementSmartVerifyRequest): Promise<ElementSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.elementSmartVerifyWithOptions(request, runtime);
  }

  async elementSmartVerifyAdvance(request: ElementSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
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
    let elementSmartVerifyReq = new ElementSmartVerifyRequest({ });
    OpenApiUtil.convert(request, elementSmartVerifyReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let elementSmartVerifyResp = await this.elementSmartVerifyWithOptions(elementSmartVerifyReq, runtime);
    return elementSmartVerifyResp;
  }

  async initSmartVerifyWithOptions(request: InitSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitSmartVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitSmartVerifyResponse>(await this.doRPCRequest("InitSmartVerify", "2020-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new InitSmartVerifyResponse({}));
  }

  async initSmartVerify(request: InitSmartVerifyRequest): Promise<InitSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initSmartVerifyWithOptions(request, runtime);
  }

  async verifyBankElementWithOptions(request: VerifyBankElementRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyBankElementResponse>(await this.doRPCRequest("VerifyBankElement", "2020-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyBankElementResponse({}));
  }

  async verifyBankElement(request: VerifyBankElementRequest): Promise<VerifyBankElementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyBankElementWithOptions(request, runtime);
  }

  async verifyBankElementAdvance(request: VerifyBankElementAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
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
    let verifyBankElementReq = new VerifyBankElementRequest({ });
    OpenApiUtil.convert(request, verifyBankElementReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.bankCardFileObject,
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
    verifyBankElementReq.bankCardFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let verifyBankElementResp = await this.verifyBankElementWithOptions(verifyBankElementReq, runtime);
    return verifyBankElementResp;
  }

}

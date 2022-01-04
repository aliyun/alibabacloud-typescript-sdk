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
  certName?: string;
  certNo?: string;
  certType?: string;
  facePicFile?: string;
  facePicString?: string;
  facePicUrl?: string;
  ip?: string;
  mobile?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      facePicFile: 'FacePicFile',
      facePicString: 'FacePicString',
      facePicUrl: 'FacePicUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      facePicFile: 'string',
      facePicString: 'string',
      facePicUrl: 'string',
      ip: 'string',
      mobile: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: ContrastSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: ContrastSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyAdvanceRequest extends $tea.Model {
  facePicFileObject: Readable;
  certName?: string;
  certNo?: string;
  certType?: string;
  facePicString?: string;
  facePicUrl?: string;
  ip?: string;
  mobile?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      facePicFileObject: 'FacePicFileObject',
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      facePicString: 'FacePicString',
      facePicUrl: 'FacePicUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicFileObject: 'Readable',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      facePicString: 'string',
      facePicUrl: 'string',
      ip: 'string',
      mobile: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyRequest extends $tea.Model {
  certifyId?: string;
  pictureReturnType?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      pictureReturnType: 'PictureReturnType',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      pictureReturnType: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: DescribeSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsDetailRequest extends $tea.Model {
  bizId?: string;
  currentPage: number;
  errorCode?: string;
  mobile?: string;
  outerOrderNo?: string;
  pageSize: number;
  sendDate: string;
  sendStatus?: string;
  signName?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      mobile: 'Mobile',
      outerOrderNo: 'OuterOrderNo',
      pageSize: 'PageSize',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      errorCode: 'string',
      mobile: 'string',
      outerOrderNo: 'string',
      pageSize: 'number',
      sendDate: 'string',
      sendStatus: 'string',
      signName: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsDetailResponse extends $tea.Model {
  code: string;
  currentPage: number;
  message: string;
  pageSize: number;
  requestId: string;
  totalItem: number;
  totalPage: number;
  items: DescribeSmsDetailResponseItems[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalItem: 'number',
      totalPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeSmsDetailResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyRequest extends $tea.Model {
  certFile?: string;
  certName?: string;
  certNationalEmblemUrl?: string;
  certNo?: string;
  certType?: string;
  certUrl?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      certFile: 'CertFile',
      certName: 'CertName',
      certNationalEmblemUrl: 'CertNationalEmblemUrl',
      certNo: 'CertNo',
      certType: 'CertType',
      certUrl: 'CertUrl',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFile: 'string',
      certName: 'string',
      certNationalEmblemUrl: 'string',
      certNo: 'string',
      certType: 'string',
      certUrl: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: ElementSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: ElementSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyAdvanceRequest extends $tea.Model {
  certFileObject: Readable;
  certName?: string;
  certNationalEmblemUrl?: string;
  certNo?: string;
  certType?: string;
  certUrl?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      certFileObject: 'CertFileObject',
      certName: 'CertName',
      certNationalEmblemUrl: 'CertNationalEmblemUrl',
      certNo: 'CertNo',
      certType: 'CertType',
      certUrl: 'CertUrl',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFileObject: 'Readable',
      certName: 'string',
      certNationalEmblemUrl: 'string',
      certNo: 'string',
      certType: 'string',
      certUrl: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyRequest extends $tea.Model {
  callbackToken?: string;
  callbackUrl?: string;
  certName?: string;
  certNo?: string;
  certType?: string;
  certifyId?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  idName?: string;
  idNo?: string;
  ip?: string;
  metaInfo?: string;
  mobile?: string;
  mode?: string;
  ocr?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idName: 'IdName',
      idNo: 'IdNo',
      ip: 'Ip',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      mode: 'Mode',
      ocr: 'Ocr',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackToken: 'string',
      callbackUrl: 'string',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idName: 'string',
      idNo: 'string',
      ip: 'string',
      metaInfo: 'string',
      mobile: 'string',
      mode: 'string',
      ocr: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: InitSmartVerifyResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: InitSmartVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $tea.Model {
  mobile: string;
  outerOrderNo?: string;
  signName: string;
  templateCode: string;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      outerOrderNo: 'OuterOrderNo',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      outerOrderNo: 'string',
      signName: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: SendSmsResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: SendSmsResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementRequest extends $tea.Model {
  bankCardFile?: string;
  bankCardNo?: string;
  bankCardUrl?: string;
  idName?: string;
  idNo?: string;
  mobile?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      bankCardFile: 'BankCardFile',
      bankCardNo: 'BankCardNo',
      bankCardUrl: 'BankCardUrl',
      idName: 'IdName',
      idNo: 'IdNo',
      mobile: 'Mobile',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankCardFile: 'string',
      bankCardNo: 'string',
      bankCardUrl: 'string',
      idName: 'string',
      idNo: 'string',
      mobile: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: VerifyBankElementResponseResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: VerifyBankElementResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementAdvanceRequest extends $tea.Model {
  bankCardFileObject: Readable;
  bankCardNo?: string;
  bankCardUrl?: string;
  idName?: string;
  idNo?: string;
  mobile?: string;
  mode?: string;
  outerOrderNo?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      bankCardFileObject: 'BankCardFileObject',
      bankCardNo: 'BankCardNo',
      bankCardUrl: 'BankCardUrl',
      idName: 'IdName',
      idNo: 'IdNo',
      mobile: 'Mobile',
      mode: 'Mode',
      outerOrderNo: 'OuterOrderNo',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankCardFileObject: 'Readable',
      bankCardNo: 'string',
      bankCardUrl: 'string',
      idName: 'string',
      idNo: 'string',
      mobile: 'string',
      mode: 'string',
      outerOrderNo: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  passed: string;
  riskInfo: string;
  subCode: string;
  verifyInfo: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      passed: 'Passed',
      riskInfo: 'RiskInfo',
      subCode: 'SubCode',
      verifyInfo: 'VerifyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      passed: 'string',
      riskInfo: 'string',
      subCode: 'string',
      verifyInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponseResultObject extends $tea.Model {
  materialInfo: string;
  passed: string;
  passedScore: number;
  subCode: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      passedScore: 'PassedScore',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      passed: 'string',
      passedScore: 'number',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsDetailResponseItems extends $tea.Model {
  bizId: string;
  content: string;
  errorCode: string;
  errorMessage: string;
  mobile: string;
  outerOrderNo: string;
  receiveDate: string;
  sendDate: string;
  sendStatus: string;
  signName: string;
  smsSize: number;
  taskDate: string;
  templateCode: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      content: 'Content',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      mobile: 'Mobile',
      outerOrderNo: 'OuterOrderNo',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      signName: 'SignName',
      smsSize: 'SmsSize',
      taskDate: 'TaskDate',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      content: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      mobile: 'string',
      outerOrderNo: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      sendStatus: 'string',
      signName: 'string',
      smsSize: 'number',
      taskDate: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  materialInfo: string;
  passed: string;
  subCode: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      materialInfo: 'string',
      passed: 'string',
      subCode: 'string',
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

export class SendSmsResponseResultObject extends $tea.Model {
  bizId: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementResponseResultObject extends $tea.Model {
  certifyId: string;
  materialInfo: string;
  passed: string;
  subCode: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      materialInfo: 'string',
      passed: 'string',
      subCode: 'string',
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
    let openPlatformEndpoint = this._openPlatformEndpoint;
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
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
    if (!Util.isUnset(request.facePicFileObject)) {
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
    }

    let contrastSmartVerifyResp = await this.contrastSmartVerify(contrastSmartVerifyReq, runtime);
    return contrastSmartVerifyResp;
  }

  async describeSmartVerify(request: DescribeSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSmartVerifyResponse>(await this.doRequest("DescribeSmartVerify", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeSmartVerifyResponse({}));
  }

  async describeSmartVerifySimply(request: DescribeSmartVerifyRequest): Promise<DescribeSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartVerify(request, runtime);
  }

  async describeSmsDetail(request: DescribeSmsDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSmsDetailResponse>(await this.doRequest("DescribeSmsDetail", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeSmsDetailResponse({}));
  }

  async describeSmsDetailSimply(request: DescribeSmsDetailRequest): Promise<DescribeSmsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsDetail(request, runtime);
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
    let openPlatformEndpoint = this._openPlatformEndpoint;
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
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
    if (!Util.isUnset(request.certFileObject)) {
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
    }

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

  async sendSms(request: SendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsResponse> {
    Util.validateModel(request);
    return $tea.cast<SendSmsResponse>(await this.doRequest("SendSms", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new SendSmsResponse({}));
  }

  async sendSmsSimply(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSms(request, runtime);
  }

  async verifyBankElement(request: VerifyBankElementRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyBankElementResponse>(await this.doRequest("VerifyBankElement", "HTTPS", "POST", "2020-06-18", "AK", null, $tea.toMap(request), runtime), new VerifyBankElementResponse({}));
  }

  async verifyBankElementSimply(request: VerifyBankElementRequest): Promise<VerifyBankElementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyBankElement(request, runtime);
  }

  async verifyBankElementAdvance(request: VerifyBankElementAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
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
    let verifyBankElementReq = new VerifyBankElementRequest({ });
    RPCUtil.convert(request, verifyBankElementReq);
    if (!Util.isUnset(request.bankCardFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    }

    let verifyBankElementResp = await this.verifyBankElement(verifyBankElementReq, runtime);
    return verifyBankElementResp;
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

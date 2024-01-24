// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
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

export class ContrastSmartVerifyAdvanceRequest extends $tea.Model {
  certName?: string;
  certNo?: string;
  certType?: string;
  facePicFileObject?: Readable;
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
      facePicFileObject: 'FacePicFile',
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
      facePicFileObject: 'Readable',
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

export class ContrastSmartVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: ContrastSmartVerifyResponseBodyResultObject;
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
      resultObject: ContrastSmartVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ContrastSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContrastSmartVerifyResponseBody,
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

export class DescribeSmartVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: DescribeSmartVerifyResponseBodyResultObject;
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
      resultObject: DescribeSmartVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSmartVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsDetailRequest extends $tea.Model {
  bizId?: string;
  currentPage?: number;
  errorCode?: string;
  mobile?: string;
  outerOrderNo?: string;
  pageSize?: number;
  sendDate?: string;
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

export class DescribeSmsDetailResponseBody extends $tea.Model {
  code?: string;
  currentPage?: number;
  items?: DescribeSmsDetailResponseBodyItems[];
  message?: string;
  pageSize?: number;
  requestId?: string;
  totalItem?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeSmsDetailResponseBodyItems },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmsDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSmsDetailResponseBody,
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

export class ElementSmartVerifyAdvanceRequest extends $tea.Model {
  certFileObject?: Readable;
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
      certFileObject: 'CertFile',
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

export class ElementSmartVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: ElementSmartVerifyResponseBodyResultObject;
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
      resultObject: ElementSmartVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElementSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ElementSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ElementSmartVerifyResponseBody,
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

export class InitSmartVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: InitSmartVerifyResponseBodyResultObject;
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
      resultObject: InitSmartVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSmartVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitSmartVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitSmartVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $tea.Model {
  mobile?: string;
  outerOrderNo?: string;
  signName?: string;
  templateCode?: string;
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

export class SendSmsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: SendSmsResponseBodyResultObject;
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
      resultObject: SendSmsResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendSmsResponseBody,
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

export class VerifyBankElementAdvanceRequest extends $tea.Model {
  bankCardFileObject?: Readable;
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
      bankCardFileObject: 'BankCardFile',
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

export class VerifyBankElementResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: VerifyBankElementResponseBodyResultObject;
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
      resultObject: VerifyBankElementResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBankElementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyBankElementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyBankElementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastSmartVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  passed?: string;
  riskInfo?: string;
  subCode?: string;
  verifyInfo?: string;
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

export class DescribeSmartVerifyResponseBodyResultObject extends $tea.Model {
  materialInfo?: string;
  passed?: string;
  passedScore?: number;
  subCode?: string;
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

export class DescribeSmsDetailResponseBodyItems extends $tea.Model {
  bizId?: string;
  content?: string;
  errorCode?: string;
  errorMessage?: string;
  mobile?: string;
  outerOrderNo?: string;
  receiveDate?: string;
  sendDate?: string;
  sendStatus?: string;
  signName?: string;
  smsSize?: number;
  taskDate?: string;
  templateCode?: string;
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

export class ElementSmartVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  materialInfo?: string;
  passed?: string;
  subCode?: string;
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

export class SendSmsResponseBodyResultObject extends $tea.Model {
  bizId?: string;
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

export class VerifyBankElementResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  materialInfo?: string;
  passed?: string;
  subCode?: string;
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certNo)) {
      body["CertNo"] = request.certNo;
    }

    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.facePicFile)) {
      body["FacePicFile"] = request.facePicFile;
    }

    if (!Util.isUnset(request.facePicString)) {
      body["FacePicString"] = request.facePicString;
    }

    if (!Util.isUnset(request.facePicUrl)) {
      body["FacePicUrl"] = request.facePicUrl;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ContrastSmartVerify",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContrastSmartVerifyResponse>(await this.callApi(params, req, runtime), new ContrastSmartVerifyResponse({}));
  }

  async contrastSmartVerify(request: ContrastSmartVerifyRequest): Promise<ContrastSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contrastSmartVerifyWithOptions(request, runtime);
  }

  async contrastSmartVerifyAdvance(request: ContrastSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ContrastSmartVerifyResponse> {
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

    let authConfig = new $OpenApi.Config({
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
    OpenApiUtil.convert(runtime, ossRuntime);
    let contrastSmartVerifyReq = new ContrastSmartVerifyRequest({ });
    OpenApiUtil.convert(request, contrastSmartVerifyReq);
    if (!Util.isUnset(request.facePicFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.facePicFileObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      contrastSmartVerifyReq.facePicFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let contrastSmartVerifyResp = await this.contrastSmartVerifyWithOptions(contrastSmartVerifyReq, runtime);
    return contrastSmartVerifyResp;
  }

  async describeSmartVerifyWithOptions(request: DescribeSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartVerifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.pictureReturnType)) {
      body["PictureReturnType"] = request.pictureReturnType;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartVerify",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartVerifyResponse>(await this.callApi(params, req, runtime), new DescribeSmartVerifyResponse({}));
  }

  async describeSmartVerify(request: DescribeSmartVerifyRequest): Promise<DescribeSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartVerifyWithOptions(request, runtime);
  }

  async describeSmsDetailWithOptions(request: DescribeSmsDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.errorCode)) {
      body["ErrorCode"] = request.errorCode;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sendDate)) {
      body["SendDate"] = request.sendDate;
    }

    if (!Util.isUnset(request.sendStatus)) {
      body["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmsDetail",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmsDetailResponse>(await this.callApi(params, req, runtime), new DescribeSmsDetailResponse({}));
  }

  async describeSmsDetail(request: DescribeSmsDetailRequest): Promise<DescribeSmsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsDetailWithOptions(request, runtime);
  }

  async elementSmartVerifyWithOptions(request: ElementSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certFile)) {
      body["CertFile"] = request.certFile;
    }

    if (!Util.isUnset(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certNationalEmblemUrl)) {
      body["CertNationalEmblemUrl"] = request.certNationalEmblemUrl;
    }

    if (!Util.isUnset(request.certNo)) {
      body["CertNo"] = request.certNo;
    }

    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.certUrl)) {
      body["CertUrl"] = request.certUrl;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ElementSmartVerify",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ElementSmartVerifyResponse>(await this.callApi(params, req, runtime), new ElementSmartVerifyResponse({}));
  }

  async elementSmartVerify(request: ElementSmartVerifyRequest): Promise<ElementSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.elementSmartVerifyWithOptions(request, runtime);
  }

  async elementSmartVerifyAdvance(request: ElementSmartVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ElementSmartVerifyResponse> {
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

    let authConfig = new $OpenApi.Config({
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
    OpenApiUtil.convert(runtime, ossRuntime);
    let elementSmartVerifyReq = new ElementSmartVerifyRequest({ });
    OpenApiUtil.convert(request, elementSmartVerifyReq);
    if (!Util.isUnset(request.certFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.certFileObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      elementSmartVerifyReq.certFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let elementSmartVerifyResp = await this.elementSmartVerifyWithOptions(elementSmartVerifyReq, runtime);
    return elementSmartVerifyResp;
  }

  async initSmartVerifyWithOptions(request: InitSmartVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitSmartVerifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackToken)) {
      body["CallbackToken"] = request.callbackToken;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certNo)) {
      body["CertNo"] = request.certNo;
    }

    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      body["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.idName)) {
      body["IdName"] = request.idName;
    }

    if (!Util.isUnset(request.idNo)) {
      body["IdNo"] = request.idNo;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.metaInfo)) {
      body["MetaInfo"] = request.metaInfo;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.ocr)) {
      body["Ocr"] = request.ocr;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossObjectName)) {
      body["OssObjectName"] = request.ossObjectName;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitSmartVerify",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitSmartVerifyResponse>(await this.callApi(params, req, runtime), new InitSmartVerifyResponse({}));
  }

  async initSmartVerify(request: InitSmartVerifyRequest): Promise<InitSmartVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initSmartVerifyWithOptions(request, runtime);
  }

  async sendSmsWithOptions(request: SendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParam)) {
      body["TemplateParam"] = request.templateParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendSms",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendSmsResponse>(await this.callApi(params, req, runtime), new SendSmsResponse({}));
  }

  async sendSms(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  async verifyBankElementWithOptions(request: VerifyBankElementRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bankCardFile)) {
      body["BankCardFile"] = request.bankCardFile;
    }

    if (!Util.isUnset(request.bankCardNo)) {
      body["BankCardNo"] = request.bankCardNo;
    }

    if (!Util.isUnset(request.bankCardUrl)) {
      body["BankCardUrl"] = request.bankCardUrl;
    }

    if (!Util.isUnset(request.idName)) {
      body["IdName"] = request.idName;
    }

    if (!Util.isUnset(request.idNo)) {
      body["IdNo"] = request.idNo;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyBankElement",
      version: "2020-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyBankElementResponse>(await this.callApi(params, req, runtime), new VerifyBankElementResponse({}));
  }

  async verifyBankElement(request: VerifyBankElementRequest): Promise<VerifyBankElementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyBankElementWithOptions(request, runtime);
  }

  async verifyBankElementAdvance(request: VerifyBankElementAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBankElementResponse> {
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

    let authConfig = new $OpenApi.Config({
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
    OpenApiUtil.convert(runtime, ossRuntime);
    let verifyBankElementReq = new VerifyBankElementRequest({ });
    OpenApiUtil.convert(request, verifyBankElementReq);
    if (!Util.isUnset(request.bankCardFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.bankCardFileObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      verifyBankElementReq.bankCardFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let verifyBankElementResp = await this.verifyBankElementWithOptions(verifyBankElementReq, runtime);
    return verifyBankElementResp;
  }

}

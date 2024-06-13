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

export class AIGCFaceVerifyRequest extends $tea.Model {
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  productCode?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: AIGCFaceVerifyResponseBodyResultObject;
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
      resultObject: AIGCFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AIGCFaceVerifyResponseBody;
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
      body: AIGCFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyRequest extends $tea.Model {
  bankCard?: string;
  identifyNum?: string;
  mobile?: string;
  paramType?: string;
  productType?: string;
  userName?: string;
  verifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      bankCard: 'BankCard',
      identifyNum: 'IdentifyNum',
      mobile: 'Mobile',
      paramType: 'ParamType',
      productType: 'ProductType',
      userName: 'UserName',
      verifyMode: 'VerifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankCard: 'string',
      identifyNum: 'string',
      mobile: 'string',
      paramType: 'string',
      productType: 'string',
      userName: 'string',
      verifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: BankMetaVerifyResponseBodyResultObject;
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
      resultObject: BankMetaVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BankMetaVerifyResponseBody;
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
      body: BankMetaVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyRequest extends $tea.Model {
  crop?: string;
  outerOrderNo?: string;
  productCode?: string;
  sceneId?: number;
  sourceCertifyId?: string;
  sourceFaceContrastPicture?: string;
  sourceFaceContrastPictureUrl?: string;
  sourceOssBucketName?: string;
  sourceOssObjectName?: string;
  targetCertifyId?: string;
  targetFaceContrastPicture?: string;
  targetFaceContrastPictureUrl?: string;
  targetOssBucketName?: string;
  targetOssObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sourceCertifyId: 'SourceCertifyId',
      sourceFaceContrastPicture: 'SourceFaceContrastPicture',
      sourceFaceContrastPictureUrl: 'SourceFaceContrastPictureUrl',
      sourceOssBucketName: 'SourceOssBucketName',
      sourceOssObjectName: 'SourceOssObjectName',
      targetCertifyId: 'TargetCertifyId',
      targetFaceContrastPicture: 'TargetFaceContrastPicture',
      targetFaceContrastPictureUrl: 'TargetFaceContrastPictureUrl',
      targetOssBucketName: 'TargetOssBucketName',
      targetOssObjectName: 'TargetOssObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      sourceCertifyId: 'string',
      sourceFaceContrastPicture: 'string',
      sourceFaceContrastPictureUrl: 'string',
      sourceOssBucketName: 'string',
      sourceOssObjectName: 'string',
      targetCertifyId: 'string',
      targetFaceContrastPicture: 'string',
      targetFaceContrastPictureUrl: 'string',
      targetOssBucketName: 'string',
      targetOssObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: CompareFaceVerifyResponseBodyResultObject;
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
      resultObject: CompareFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompareFaceVerifyResponseBody;
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
      body: CompareFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesRequest extends $tea.Model {
  sourceImageType?: string;
  sourceImageValue?: string;
  targetImageType?: string;
  targetImageValue?: string;
  static names(): { [key: string]: string } {
    return {
      sourceImageType: 'SourceImageType',
      sourceImageValue: 'SourceImageValue',
      targetImageType: 'TargetImageType',
      targetImageValue: 'TargetImageValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageType: 'string',
      sourceImageValue: 'string',
      targetImageType: 'string',
      targetImageValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBody extends $tea.Model {
  code?: string;
  data?: CompareFacesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CompareFacesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompareFacesResponseBody;
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
      body: CompareFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyRequest extends $tea.Model {
  certName?: string;
  certNo?: string;
  certType?: string;
  certifyId?: string;
  crop?: string;
  deviceToken?: string;
  encryptType?: string;
  faceContrastFile?: string;
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  ip?: string;
  mobile?: string;
  model?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  productCode?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      crop: 'Crop',
      deviceToken: 'DeviceToken',
      encryptType: 'EncryptType',
      faceContrastFile: 'FaceContrastFile',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      crop: 'string',
      deviceToken: 'string',
      encryptType: 'string',
      faceContrastFile: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ip: 'string',
      mobile: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyAdvanceRequest extends $tea.Model {
  certName?: string;
  certNo?: string;
  certType?: string;
  certifyId?: string;
  crop?: string;
  deviceToken?: string;
  encryptType?: string;
  faceContrastFileObject?: Readable;
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  ip?: string;
  mobile?: string;
  model?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  productCode?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      crop: 'Crop',
      deviceToken: 'DeviceToken',
      encryptType: 'EncryptType',
      faceContrastFileObject: 'FaceContrastFile',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      crop: 'string',
      deviceToken: 'string',
      encryptType: 'string',
      faceContrastFileObject: 'Readable',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ip: 'string',
      mobile: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: ContrastFaceVerifyResponseBodyResultObject;
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
      resultObject: ContrastFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContrastFaceVerifyResponseBody;
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
      body: ContrastFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyRequest extends $tea.Model {
  authYears?: number;
  bizType?: string;
  test?: boolean;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      authYears: 'AuthYears',
      bizType: 'BizType',
      test: 'Test',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authYears: 'number',
      bizType: 'string',
      test: 'boolean',
      userDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyResponseBody extends $tea.Model {
  authKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAuthKeyResponseBody;
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
      body: CreateAuthKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingRequest extends $tea.Model {
  bizName?: string;
  bizType?: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      guideStep: 'GuideStep',
      privacyStep: 'PrivacyStep',
      resultStep: 'ResultStep',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      guideStep: 'boolean',
      privacyStep: 'boolean',
      resultStep: 'boolean',
      solution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingResponseBody extends $tea.Model {
  bizName?: string;
  bizType?: string;
  requestId?: string;
  solution?: string;
  stepList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      requestId: 'RequestId',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      requestId: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVerifySettingResponseBody;
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
      body: CreateVerifySettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyRequest extends $tea.Model {
  certNum?: string;
  credName?: string;
  credType?: string;
  identifyNum?: string;
  imageContext?: string;
  imageUrl?: string;
  isCheck?: string;
  isOCR?: string;
  merchantId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      certNum: 'CertNum',
      credName: 'CredName',
      credType: 'CredType',
      identifyNum: 'IdentifyNum',
      imageContext: 'ImageContext',
      imageUrl: 'ImageUrl',
      isCheck: 'IsCheck',
      isOCR: 'IsOCR',
      merchantId: 'MerchantId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNum: 'string',
      credName: 'string',
      credType: 'string',
      identifyNum: 'string',
      imageContext: 'string',
      imageUrl: 'string',
      isCheck: 'string',
      isOCR: 'string',
      merchantId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: CredentialVerifyResponseBodyResultObject;
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
      resultObject: CredentialVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CredentialVerifyResponseBody;
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
      body: CredentialVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoRequest extends $tea.Model {
  bizType?: string;
  currentPage?: number;
  deviceId?: string;
  expiredEndDay?: string;
  expiredStartDay?: string;
  pageSize?: number;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      deviceId: 'DeviceId',
      expiredEndDay: 'ExpiredEndDay',
      expiredStartDay: 'ExpiredStartDay',
      pageSize: 'PageSize',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      currentPage: 'number',
      deviceId: 'string',
      expiredEndDay: 'string',
      expiredStartDay: 'string',
      pageSize: 'number',
      userDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $tea.Model {
  currentPage?: number;
  deviceInfoList?: DescribeDeviceInfoResponseBodyDeviceInfoList;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceInfoList: 'DeviceInfoList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceInfoList: DescribeDeviceInfoResponseBodyDeviceInfoList,
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceInfoResponseBody;
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
      body: DescribeDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyRequest extends $tea.Model {
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

export class DescribeFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: DescribeFaceVerifyResponseBodyResultObject;
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
      resultObject: DescribeFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaceVerifyResponseBody;
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
      body: DescribeFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBody extends $tea.Model {
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossUploadToken: 'OssUploadToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUploadToken: DescribeOssUploadTokenResponseBodyOssUploadToken,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssUploadTokenResponseBody;
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
      body: DescribeOssUploadTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataRequest extends $tea.Model {
  currentPage?: number;
  endDate?: string;
  pageSize?: number;
  productCode?: string;
  sceneId?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      productCode: 'string',
      sceneId: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponseBody extends $tea.Model {
  code?: string;
  currentPage?: string;
  items?: DescribePageFaceVerifyDataResponseBodyItems[];
  message?: string;
  pageSize?: string;
  requestId?: string;
  success?: string;
  totalCount?: string;
  totalPage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'string',
      items: { 'type': 'array', 'itemType': DescribePageFaceVerifyDataResponseBodyItems },
      message: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
      totalPage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePageFaceVerifyDataResponseBody;
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
      body: DescribePageFaceVerifyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListRequest extends $tea.Model {
  currentPage?: string;
  endDate?: string;
  pageSize?: string;
  sceneId?: string;
  serviceCode?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      endDate: 'string',
      pageSize: 'string',
      sceneId: 'string',
      serviceCode: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeSmartStatisticsPageListResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeSmartStatisticsPageListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSmartStatisticsPageListResponseBody;
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
      body: DescribeSmartStatisticsPageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBody extends $tea.Model {
  authorityComparisionScore?: number;
  faceComparisonScore?: number;
  idCardFaceComparisonScore?: number;
  material?: DescribeVerifyResultResponseBodyMaterial;
  requestId?: string;
  verifyStatus?: number;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      faceComparisonScore: 'FaceComparisonScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
      requestId: 'RequestId',
      verifyStatus: 'VerifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      faceComparisonScore: 'number',
      idCardFaceComparisonScore: 'number',
      material: DescribeVerifyResultResponseBodyMaterial,
      requestId: 'string',
      verifyStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVerifyResultResponseBody;
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
      body: DescribeVerifyResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKResponseBody extends $tea.Model {
  requestId?: string;
  sdkUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkUrl: 'SdkUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVerifySDKResponseBody;
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
      body: DescribeVerifySDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  callbackSeed?: string;
  callbackUrl?: string;
  faceRetainedImageUrl?: string;
  failedRedirectUrl?: string;
  idCardBackImageUrl?: string;
  idCardFrontImageUrl?: string;
  idCardNumber?: string;
  name?: string;
  passedRedirectUrl?: string;
  userId?: string;
  userIp?: string;
  userPhoneNumber?: string;
  userRegistTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callbackSeed: 'CallbackSeed',
      callbackUrl: 'CallbackUrl',
      faceRetainedImageUrl: 'FaceRetainedImageUrl',
      failedRedirectUrl: 'FailedRedirectUrl',
      idCardBackImageUrl: 'IdCardBackImageUrl',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      idCardNumber: 'IdCardNumber',
      name: 'Name',
      passedRedirectUrl: 'PassedRedirectUrl',
      userId: 'UserId',
      userIp: 'UserIp',
      userPhoneNumber: 'UserPhoneNumber',
      userRegistTime: 'UserRegistTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callbackSeed: 'string',
      callbackUrl: 'string',
      faceRetainedImageUrl: 'string',
      failedRedirectUrl: 'string',
      idCardBackImageUrl: 'string',
      idCardFrontImageUrl: 'string',
      idCardNumber: 'string',
      name: 'string',
      passedRedirectUrl: 'string',
      userId: 'string',
      userIp: 'string',
      userPhoneNumber: 'string',
      userRegistTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBody extends $tea.Model {
  ossUploadToken?: DescribeVerifyTokenResponseBodyOssUploadToken;
  requestId?: string;
  verifyPageUrl?: string;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ossUploadToken: 'OssUploadToken',
      requestId: 'RequestId',
      verifyPageUrl: 'VerifyPageUrl',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUploadToken: DescribeVerifyTokenResponseBodyOssUploadToken,
      requestId: 'string',
      verifyPageUrl: 'string',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVerifyTokenResponseBody;
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
      body: DescribeVerifyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesRequest extends $tea.Model {
  bizType?: string;
  materialValue?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      materialValue: 'MaterialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      materialValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBody extends $tea.Model {
  code?: string;
  data?: DetectFaceAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DetectFaceAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectFaceAttributesResponseBody;
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
      body: DetectFaceAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyRequest extends $tea.Model {
  identifyNum?: string;
  paramType?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: Id2MetaVerifyResponseBodyResultObject;
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
      resultObject: Id2MetaVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Id2MetaVerifyResponseBody;
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
      body: Id2MetaVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyRequest extends $tea.Model {
  authId?: string;
  birthday?: string;
  callbackToken?: string;
  callbackUrl?: string;
  certName?: string;
  certNo?: string;
  certType?: string;
  certifyId?: string;
  certifyUrlStyle?: string;
  certifyUrlType?: string;
  crop?: string;
  encryptType?: string;
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  faceGuardOutput?: string;
  ip?: string;
  metaInfo?: string;
  mobile?: string;
  mode?: string;
  model?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  procedurePriority?: string;
  productCode?: string;
  rarelyCharacters?: string;
  readImg?: string;
  returnUrl?: string;
  sceneId?: number;
  suitableType?: string;
  uiCustomUrl?: string;
  userId?: string;
  validityDate?: string;
  voluntaryCustomizedContent?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      birthday: 'Birthday',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      certifyUrlStyle: 'CertifyUrlStyle',
      certifyUrlType: 'CertifyUrlType',
      crop: 'Crop',
      encryptType: 'EncryptType',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      faceGuardOutput: 'FaceGuardOutput',
      ip: 'Ip',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      mode: 'Mode',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      procedurePriority: 'ProcedurePriority',
      productCode: 'ProductCode',
      rarelyCharacters: 'RarelyCharacters',
      readImg: 'ReadImg',
      returnUrl: 'ReturnUrl',
      sceneId: 'SceneId',
      suitableType: 'SuitableType',
      uiCustomUrl: 'UiCustomUrl',
      userId: 'UserId',
      validityDate: 'ValidityDate',
      voluntaryCustomizedContent: 'VoluntaryCustomizedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      birthday: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      certifyUrlStyle: 'string',
      certifyUrlType: 'string',
      crop: 'string',
      encryptType: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      faceGuardOutput: 'string',
      ip: 'string',
      metaInfo: 'string',
      mobile: 'string',
      mode: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      procedurePriority: 'string',
      productCode: 'string',
      rarelyCharacters: 'string',
      readImg: 'string',
      returnUrl: 'string',
      sceneId: 'number',
      suitableType: 'string',
      uiCustomUrl: 'string',
      userId: 'string',
      validityDate: 'string',
      voluntaryCustomizedContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: InitFaceVerifyResponseBodyResultObject;
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
      resultObject: InitFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitFaceVerifyResponseBody;
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
      body: InitFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyRequest extends $tea.Model {
  certifyId?: string;
  crop?: string;
  deviceToken?: string;
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  ip?: string;
  mobile?: string;
  model?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  productCode?: string;
  sceneId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      crop: 'Crop',
      deviceToken: 'DeviceToken',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      crop: 'string',
      deviceToken: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ip: 'string',
      mobile: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: LivenessFaceVerifyResponseBodyResultObject;
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
      resultObject: LivenessFaceVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LivenessFaceVerifyResponseBody;
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
      body: LivenessFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyRequest extends $tea.Model {
  identifyNum?: string;
  mobile?: string;
  paramType?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      mobile: 'Mobile',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      mobile: 'string',
      paramType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: Mobile3MetaDetailVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaDetailVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Mobile3MetaDetailVerifyResponseBody;
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
      body: Mobile3MetaDetailVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyRequest extends $tea.Model {
  identifyNum?: string;
  mobile?: string;
  paramType?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      mobile: 'Mobile',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      mobile: 'string',
      paramType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: Mobile3MetaSimpleVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaSimpleVerifyResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Mobile3MetaSimpleVerifyResponseBody;
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
      body: Mobile3MetaSimpleVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectRequest extends $tea.Model {
  mobiles?: string;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiles: 'string',
      paramType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: MobileDetectResponseBodyResultObject;
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
      resultObject: MobileDetectResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MobileDetectResponseBody;
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
      body: MobileDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusRequest extends $tea.Model {
  mobile?: string;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: MobileOnlineStatusResponseBodyResultObject;
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
      resultObject: MobileOnlineStatusResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MobileOnlineStatusResponseBody;
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
      body: MobileOnlineStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeRequest extends $tea.Model {
  mobile?: string;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: MobileOnlineTimeResponseBodyResultObject;
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
      resultObject: MobileOnlineTimeResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MobileOnlineTimeResponseBody;
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
      body: MobileOnlineTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoRequest extends $tea.Model {
  bizType?: string;
  deviceId?: string;
  duration?: string;
  expiredDay?: string;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      deviceId: 'DeviceId',
      duration: 'Duration',
      expiredDay: 'ExpiredDay',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      deviceId: 'string',
      duration: 'string',
      expiredDay: 'string',
      userDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoResponseBody extends $tea.Model {
  beginDay?: string;
  bizType?: string;
  deviceId?: string;
  expiredDay?: string;
  requestId?: string;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDay: 'BeginDay',
      bizType: 'BizType',
      deviceId: 'DeviceId',
      expiredDay: 'ExpiredDay',
      requestId: 'RequestId',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDay: 'string',
      bizType: 'string',
      deviceId: 'string',
      expiredDay: 'string',
      requestId: 'string',
      userDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDeviceInfoResponseBody;
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
      body: ModifyDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  faceImageUrl?: string;
  idCardBackImageUrl?: string;
  idCardFrontImageUrl?: string;
  idCardNumber?: string;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      faceImageUrl: 'FaceImageUrl',
      idCardBackImageUrl: 'IdCardBackImageUrl',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      idCardNumber: 'IdCardNumber',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      faceImageUrl: 'string',
      idCardBackImageUrl: 'string',
      idCardFrontImageUrl: 'string',
      idCardNumber: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBody extends $tea.Model {
  authorityComparisionScore?: number;
  idCardFaceComparisonScore?: number;
  material?: VerifyMaterialResponseBodyMaterial;
  requestId?: string;
  verifyStatus?: number;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
      requestId: 'RequestId',
      verifyStatus: 'VerifyStatus',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      idCardFaceComparisonScore: 'number',
      material: VerifyMaterialResponseBodyMaterial,
      requestId: 'string',
      verifyStatus: 'number',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyMaterialResponseBody;
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
      body: VerifyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  result?: string;
  score?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      result: 'Result',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      result: 'string',
      score: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  passed?: string;
  verifyScore?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      passed: 'Passed',
      verifyScore: 'VerifyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      passed: 'string',
      verifyScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBodyData extends $tea.Model {
  confidenceThresholds?: string;
  similarityScore?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceThresholds: 'ConfidenceThresholds',
      similarityScore: 'SimilarityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceThresholds: 'string',
      similarityScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  identityInfo?: string;
  materialInfo?: string;
  passed?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      identityInfo: 'IdentityInfo',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      identityInfo: 'string',
      materialInfo: 'string',
      passed: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBodyResultObject extends $tea.Model {
  materialInfo?: string;
  ocrInfo?: string;
  result?: string;
  riskScore?: { [key: string]: string };
  riskTag?: string;
  verifyDetail?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      ocrInfo: 'OcrInfo',
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
      verifyDetail: 'VerifyDetail',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      ocrInfo: 'string',
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
      verifyDetail: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo extends $tea.Model {
  beginDay?: string;
  bizType?: string;
  deviceId?: string;
  expiredDay?: string;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDay: 'BeginDay',
      bizType: 'BizType',
      deviceId: 'DeviceId',
      expiredDay: 'ExpiredDay',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDay: 'string',
      bizType: 'string',
      deviceId: 'string',
      expiredDay: 'string',
      userDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoList extends $tea.Model {
  deviceInfo?: DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponseBodyResultObject extends $tea.Model {
  deviceRisk?: string;
  deviceToken?: string;
  identityInfo?: string;
  materialInfo?: string;
  passed?: string;
  subCode?: string;
  success?: string;
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      deviceRisk: 'DeviceRisk',
      deviceToken: 'DeviceToken',
      identityInfo: 'IdentityInfo',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      success: 'Success',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceRisk: 'string',
      deviceToken: 'string',
      identityInfo: 'string',
      materialInfo: 'string',
      passed: 'string',
      subCode: 'string',
      success: 'string',
      userInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBodyOssUploadToken extends $tea.Model {
  bucket?: string;
  endPoint?: string;
  expired?: number;
  key?: string;
  path?: string;
  secret?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      expired: 'Expired',
      key: 'Key',
      path: 'Path',
      secret: 'Secret',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endPoint: 'string',
      expired: 'number',
      key: 'string',
      path: 'string',
      secret: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponseBodyItems extends $tea.Model {
  date?: string;
  productCode?: string;
  sceneId?: string;
  sceneName?: string;
  successCount?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      productCode: 'string',
      sceneId: 'string',
      sceneName: 'string',
      successCount: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponseBodyItems extends $tea.Model {
  date?: string;
  passRate?: string;
  productCode?: string;
  sceneId?: number;
  sceneName?: string;
  successCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      passRate: 'PassRate',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      passRate: 'string',
      productCode: 'string',
      sceneId: 'number',
      sceneName: 'string',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterialIdCardInfo extends $tea.Model {
  address?: string;
  authority?: string;
  backImageUrl?: string;
  birth?: string;
  endDate?: string;
  frontImageUrl?: string;
  name?: string;
  nationality?: string;
  number?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authority: 'Authority',
      backImageUrl: 'BackImageUrl',
      birth: 'Birth',
      endDate: 'EndDate',
      frontImageUrl: 'FrontImageUrl',
      name: 'Name',
      nationality: 'Nationality',
      number: 'Number',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authority: 'string',
      backImageUrl: 'string',
      birth: 'string',
      endDate: 'string',
      frontImageUrl: 'string',
      name: 'string',
      nationality: 'string',
      number: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterial extends $tea.Model {
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: boolean;
  faceQuality?: string;
  idCardInfo?: DescribeVerifyResultResponseBodyMaterialIdCardInfo;
  idCardName?: string;
  idCardNumber?: string;
  videoUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      faceQuality: 'FaceQuality',
      idCardInfo: 'IdCardInfo',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      videoUrls: 'VideoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'boolean',
      faceQuality: 'string',
      idCardInfo: DescribeVerifyResultResponseBodyMaterialIdCardInfo,
      idCardName: 'string',
      idCardNumber: 'string',
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBodyOssUploadToken extends $tea.Model {
  bucket?: string;
  endPoint?: string;
  expired?: number;
  key?: string;
  path?: string;
  secret?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      expired: 'Expired',
      key: 'Key',
      path: 'Path',
      secret: 'Secret',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endPoint: 'string',
      expired: 'number',
      key: 'string',
      path: 'string',
      secret: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $tea.Model {
  pitchAngle?: number;
  rollAngle?: number;
  yawAngle?: number;
  static names(): { [key: string]: string } {
    return {
      pitchAngle: 'PitchAngle',
      rollAngle: 'RollAngle',
      yawAngle: 'YawAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchAngle: 'number',
      rollAngle: 'number',
      yawAngle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $tea.Model {
  threshold?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $tea.Model {
  blur?: number;
  facequal?: number;
  facetype?: string;
  glasses?: string;
  headpose?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  integrity?: number;
  respirator?: string;
  smiling?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      facequal: 'Facequal',
      facetype: 'Facetype',
      glasses: 'Glasses',
      headpose: 'Headpose',
      integrity: 'Integrity',
      respirator: 'Respirator',
      smiling: 'Smiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      facequal: 'number',
      facetype: 'string',
      glasses: 'string',
      headpose: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
      integrity: 'number',
      respirator: 'string',
      smiling: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo extends $tea.Model {
  faceAttributes?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  faceRect?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect;
  static names(): { [key: string]: string } {
    return {
      faceAttributes: 'FaceAttributes',
      faceRect: 'FaceRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributes: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes,
      faceRect: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfos extends $tea.Model {
  faceAttributesDetectInfo?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo[];
  static names(): { [key: string]: string } {
    return {
      faceAttributesDetectInfo: 'FaceAttributesDetectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributesDetectInfo: { 'type': 'array', 'itemType': DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyData extends $tea.Model {
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  imgHeight?: number;
  imgWidth?: number;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      imgHeight: 'ImgHeight',
      imgWidth: 'ImgWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: DetectFaceAttributesResponseBodyDataFaceInfos,
      imgHeight: 'number',
      imgWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBodyResultObject extends $tea.Model {
  certifyId?: string;
  certifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      certifyUrl: 'CertifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      certifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseBodyResultObject extends $tea.Model {
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

export class Mobile3MetaDetailVerifyResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  ispName?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBodyResultObjectItems extends $tea.Model {
  area?: string;
  bizCode?: string;
  ispName?: string;
  mobile?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizCode: 'BizCode',
      ispName: 'IspName',
      mobile: 'Mobile',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizCode: 'string',
      ispName: 'string',
      mobile: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBodyResultObject extends $tea.Model {
  chargeCount?: string;
  items?: MobileDetectResponseBodyResultObjectItems[];
  static names(): { [key: string]: string } {
    return {
      chargeCount: 'ChargeCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeCount: 'string',
      items: { 'type': 'array', 'itemType': MobileDetectResponseBodyResultObjectItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  ispName?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponseBodyResultObject extends $tea.Model {
  bizCode?: string;
  ispName?: string;
  timeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      timeCode: 'TimeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
      timeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $tea.Model {
  address?: string;
  authority?: string;
  backImageUrl?: string;
  birth?: string;
  endDate?: string;
  frontImageUrl?: string;
  name?: string;
  nationality?: string;
  number?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authority: 'Authority',
      backImageUrl: 'BackImageUrl',
      birth: 'Birth',
      endDate: 'EndDate',
      frontImageUrl: 'FrontImageUrl',
      name: 'Name',
      nationality: 'Nationality',
      number: 'Number',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authority: 'string',
      backImageUrl: 'string',
      birth: 'string',
      endDate: 'string',
      frontImageUrl: 'string',
      name: 'string',
      nationality: 'string',
      number: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterial extends $tea.Model {
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: string;
  faceQuality?: string;
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  idCardName?: string;
  idCardNumber?: string;
  static names(): { [key: string]: string } {
    return {
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      faceQuality: 'FaceQuality',
      idCardInfo: 'IdCardInfo',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'string',
      faceQuality: 'string',
      idCardInfo: VerifyMaterialResponseBodyMaterialIdCardInfo,
      idCardName: 'string',
      idCardNumber: 'string',
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

  /**
   * @summary 新增AIGC人脸检测能力
   *
   * @param request AIGCFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AIGCFaceVerifyResponse
   */
  async aIGCFaceVerifyWithOptions(request: AIGCFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<AIGCFaceVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AIGCFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AIGCFaceVerifyResponse>(await this.callApi(params, req, runtime), new AIGCFaceVerifyResponse({}));
  }

  /**
   * @summary 新增AIGC人脸检测能力
   *
   * @param request AIGCFaceVerifyRequest
   * @return AIGCFaceVerifyResponse
   */
  async aIGCFaceVerify(request: AIGCFaceVerifyRequest): Promise<AIGCFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aIGCFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @summary 银行卡要素核验接口
   *
   * @param request BankMetaVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BankMetaVerifyResponse
   */
  async bankMetaVerifyWithOptions(request: BankMetaVerifyRequest, runtime: $Util.RuntimeOptions): Promise<BankMetaVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bankCard)) {
      query["BankCard"] = request.bankCard;
    }

    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.verifyMode)) {
      query["VerifyMode"] = request.verifyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BankMetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BankMetaVerifyResponse>(await this.callApi(params, req, runtime), new BankMetaVerifyResponse({}));
  }

  /**
   * @summary 银行卡要素核验接口
   *
   * @param request BankMetaVerifyRequest
   * @return BankMetaVerifyResponse
   */
  async bankMetaVerify(request: BankMetaVerifyRequest): Promise<BankMetaVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bankMetaVerifyWithOptions(request, runtime);
  }

  /**
   * @param request CompareFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CompareFaceVerifyResponse
   */
  async compareFaceVerifyWithOptions(request: CompareFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceVerifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sourceCertifyId)) {
      body["SourceCertifyId"] = request.sourceCertifyId;
    }

    if (!Util.isUnset(request.sourceFaceContrastPicture)) {
      body["SourceFaceContrastPicture"] = request.sourceFaceContrastPicture;
    }

    if (!Util.isUnset(request.sourceFaceContrastPictureUrl)) {
      body["SourceFaceContrastPictureUrl"] = request.sourceFaceContrastPictureUrl;
    }

    if (!Util.isUnset(request.sourceOssBucketName)) {
      body["SourceOssBucketName"] = request.sourceOssBucketName;
    }

    if (!Util.isUnset(request.sourceOssObjectName)) {
      body["SourceOssObjectName"] = request.sourceOssObjectName;
    }

    if (!Util.isUnset(request.targetCertifyId)) {
      body["TargetCertifyId"] = request.targetCertifyId;
    }

    if (!Util.isUnset(request.targetFaceContrastPicture)) {
      body["TargetFaceContrastPicture"] = request.targetFaceContrastPicture;
    }

    if (!Util.isUnset(request.targetFaceContrastPictureUrl)) {
      body["TargetFaceContrastPictureUrl"] = request.targetFaceContrastPictureUrl;
    }

    if (!Util.isUnset(request.targetOssBucketName)) {
      body["TargetOssBucketName"] = request.targetOssBucketName;
    }

    if (!Util.isUnset(request.targetOssObjectName)) {
      body["TargetOssObjectName"] = request.targetOssObjectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CompareFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompareFaceVerifyResponse>(await this.callApi(params, req, runtime), new CompareFaceVerifyResponse({}));
  }

  /**
   * @param request CompareFaceVerifyRequest
   * @return CompareFaceVerifyResponse
   */
  async compareFaceVerify(request: CompareFaceVerifyRequest): Promise<CompareFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @param request CompareFacesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CompareFacesResponse
   */
  async compareFacesWithOptions(request: CompareFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareFacesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceImageType)) {
      body["SourceImageType"] = request.sourceImageType;
    }

    if (!Util.isUnset(request.sourceImageValue)) {
      body["SourceImageValue"] = request.sourceImageValue;
    }

    if (!Util.isUnset(request.targetImageType)) {
      body["TargetImageType"] = request.targetImageType;
    }

    if (!Util.isUnset(request.targetImageValue)) {
      body["TargetImageValue"] = request.targetImageValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CompareFaces",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompareFacesResponse>(await this.callApi(params, req, runtime), new CompareFacesResponse({}));
  }

  /**
   * @param request CompareFacesRequest
   * @return CompareFacesResponse
   */
  async compareFaces(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  /**
   * @param request ContrastFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ContrastFaceVerifyResponse
   */
  async contrastFaceVerifyWithOptions(request: ContrastFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

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

    if (!Util.isUnset(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!Util.isUnset(request.encryptType)) {
      body["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.faceContrastFile)) {
      body["FaceContrastFile"] = request.faceContrastFile;
    }

    if (!Util.isUnset(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!Util.isUnset(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
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

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ContrastFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContrastFaceVerifyResponse>(await this.callApi(params, req, runtime), new ContrastFaceVerifyResponse({}));
  }

  /**
   * @param request ContrastFaceVerifyRequest
   * @return ContrastFaceVerifyResponse
   */
  async contrastFaceVerify(request: ContrastFaceVerifyRequest): Promise<ContrastFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contrastFaceVerifyWithOptions(request, runtime);
  }

  async contrastFaceVerifyAdvance(request: ContrastFaceVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let contrastFaceVerifyReq = new ContrastFaceVerifyRequest({ });
    OpenApiUtil.convert(request, contrastFaceVerifyReq);
    if (!Util.isUnset(request.faceContrastFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.faceContrastFileObject,
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
      contrastFaceVerifyReq.faceContrastFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let contrastFaceVerifyResp = await this.contrastFaceVerifyWithOptions(contrastFaceVerifyReq, runtime);
    return contrastFaceVerifyResp;
  }

  /**
   * @param request CreateAuthKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAuthKeyResponse
   */
  async createAuthKeyWithOptions(request: CreateAuthKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authYears)) {
      query["AuthYears"] = request.authYears;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.test)) {
      query["Test"] = request.test;
    }

    if (!Util.isUnset(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuthKey",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuthKeyResponse>(await this.callApi(params, req, runtime), new CreateAuthKeyResponse({}));
  }

  /**
   * @param request CreateAuthKeyRequest
   * @return CreateAuthKeyResponse
   */
  async createAuthKey(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  /**
   * @param request CreateVerifySettingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateVerifySettingResponse
   */
  async createVerifySettingWithOptions(request: CreateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.guideStep)) {
      query["GuideStep"] = request.guideStep;
    }

    if (!Util.isUnset(request.privacyStep)) {
      query["PrivacyStep"] = request.privacyStep;
    }

    if (!Util.isUnset(request.resultStep)) {
      query["ResultStep"] = request.resultStep;
    }

    if (!Util.isUnset(request.solution)) {
      query["Solution"] = request.solution;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVerifySetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVerifySettingResponse>(await this.callApi(params, req, runtime), new CreateVerifySettingResponse({}));
  }

  /**
   * @param request CreateVerifySettingRequest
   * @return CreateVerifySettingResponse
   */
  async createVerifySetting(request: CreateVerifySettingRequest): Promise<CreateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
  }

  /**
   * @summary 凭证核验
   *
   * @param request CredentialVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CredentialVerifyResponse
   */
  async credentialVerifyWithOptions(request: CredentialVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CredentialVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certNum)) {
      query["CertNum"] = request.certNum;
    }

    if (!Util.isUnset(request.credName)) {
      query["CredName"] = request.credName;
    }

    if (!Util.isUnset(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.isCheck)) {
      query["IsCheck"] = request.isCheck;
    }

    if (!Util.isUnset(request.isOCR)) {
      query["IsOCR"] = request.isOCR;
    }

    if (!Util.isUnset(request.merchantId)) {
      query["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageContext)) {
      body["ImageContext"] = request.imageContext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CredentialVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CredentialVerifyResponse>(await this.callApi(params, req, runtime), new CredentialVerifyResponse({}));
  }

  /**
   * @summary 凭证核验
   *
   * @param request CredentialVerifyRequest
   * @return CredentialVerifyResponse
   */
  async credentialVerify(request: CredentialVerifyRequest): Promise<CredentialVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.credentialVerifyWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDeviceInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeviceInfoResponse
   */
  async describeDeviceInfoWithOptions(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.expiredEndDay)) {
      query["ExpiredEndDay"] = request.expiredEndDay;
    }

    if (!Util.isUnset(request.expiredStartDay)) {
      query["ExpiredStartDay"] = request.expiredStartDay;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeviceInfo",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeviceInfoResponse>(await this.callApi(params, req, runtime), new DescribeDeviceInfoResponse({}));
  }

  /**
   * @param request DescribeDeviceInfoRequest
   * @return DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request DescribeFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFaceVerifyResponse
   */
  async describeFaceVerifyWithOptions(request: DescribeFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.pictureReturnType)) {
      query["PictureReturnType"] = request.pictureReturnType;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaceVerifyResponse>(await this.callApi(params, req, runtime), new DescribeFaceVerifyResponse({}));
  }

  /**
   * @param request DescribeFaceVerifyRequest
   * @return DescribeFaceVerifyResponse
   */
  async describeFaceVerify(request: DescribeFaceVerifyRequest): Promise<DescribeFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @param request DescribeOssUploadTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOssUploadTokenResponse
   */
  async describeOssUploadTokenWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeOssUploadToken",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssUploadTokenResponse>(await this.callApi(params, req, runtime), new DescribeOssUploadTokenResponse({}));
  }

  /**
   * @return DescribeOssUploadTokenResponse
   */
  async describeOssUploadToken(): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  /**
   * @summary Open API新增金融级数据统计API
   *
   * @param request DescribePageFaceVerifyDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyDataWithOptions(request: DescribePageFaceVerifyDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribePageFaceVerifyDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePageFaceVerifyData",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePageFaceVerifyDataResponse>(await this.callApi(params, req, runtime), new DescribePageFaceVerifyDataResponse({}));
  }

  /**
   * @summary Open API新增金融级数据统计API
   *
   * @param request DescribePageFaceVerifyDataRequest
   * @return DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyData(request: DescribePageFaceVerifyDataRequest): Promise<DescribePageFaceVerifyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePageFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeSmartStatisticsPageListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageListWithOptions(request: DescribeSmartStatisticsPageListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartStatisticsPageListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartStatisticsPageList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartStatisticsPageListResponse>(await this.callApi(params, req, runtime), new DescribeSmartStatisticsPageListResponse({}));
  }

  /**
   * @param request DescribeSmartStatisticsPageListRequest
   * @return DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageList(request: DescribeSmartStatisticsPageListRequest): Promise<DescribeSmartStatisticsPageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVerifyResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVerifyResultResponse
   */
  async describeVerifyResultWithOptions(request: DescribeVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifyResult",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifyResultResponse>(await this.callApi(params, req, runtime), new DescribeVerifyResultResponse({}));
  }

  /**
   * @param request DescribeVerifyResultRequest
   * @return DescribeVerifyResultResponse
   */
  async describeVerifyResult(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVerifySDKRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVerifySDKResponse
   */
  async describeVerifySDKWithOptions(request: DescribeVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySDKResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifySDK",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifySDKResponse>(await this.callApi(params, req, runtime), new DescribeVerifySDKResponse({}));
  }

  /**
   * @param request DescribeVerifySDKRequest
   * @return DescribeVerifySDKResponse
   */
  async describeVerifySDK(request: DescribeVerifySDKRequest): Promise<DescribeVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVerifyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVerifyTokenResponse
   */
  async describeVerifyTokenWithOptions(request: DescribeVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.callbackSeed)) {
      query["CallbackSeed"] = request.callbackSeed;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.faceRetainedImageUrl)) {
      query["FaceRetainedImageUrl"] = request.faceRetainedImageUrl;
    }

    if (!Util.isUnset(request.failedRedirectUrl)) {
      query["FailedRedirectUrl"] = request.failedRedirectUrl;
    }

    if (!Util.isUnset(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!Util.isUnset(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!Util.isUnset(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.passedRedirectUrl)) {
      query["PassedRedirectUrl"] = request.passedRedirectUrl;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userIp)) {
      query["UserIp"] = request.userIp;
    }

    if (!Util.isUnset(request.userPhoneNumber)) {
      query["UserPhoneNumber"] = request.userPhoneNumber;
    }

    if (!Util.isUnset(request.userRegistTime)) {
      query["UserRegistTime"] = request.userRegistTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifyToken",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifyTokenResponse>(await this.callApi(params, req, runtime), new DescribeVerifyTokenResponse({}));
  }

  /**
   * @param request DescribeVerifyTokenRequest
   * @return DescribeVerifyTokenResponse
   */
  async describeVerifyToken(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  /**
   * @param request DetectFaceAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetectFaceAttributesResponse
   */
  async detectFaceAttributesWithOptions(request: DetectFaceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.materialValue)) {
      body["MaterialValue"] = request.materialValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectFaceAttributes",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectFaceAttributesResponse>(await this.callApi(params, req, runtime), new DetectFaceAttributesResponse({}));
  }

  /**
   * @param request DetectFaceAttributesRequest
   * @return DetectFaceAttributesResponse
   */
  async detectFaceAttributes(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  /**
   * @summary 身份二要素接口
   *
   * @param request Id2MetaVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return Id2MetaVerifyResponse
   */
  async id2MetaVerifyWithOptions(request: Id2MetaVerifyRequest, runtime: $Util.RuntimeOptions): Promise<Id2MetaVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Id2MetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Id2MetaVerifyResponse>(await this.callApi(params, req, runtime), new Id2MetaVerifyResponse({}));
  }

  /**
   * @summary 身份二要素接口
   *
   * @param request Id2MetaVerifyRequest
   * @return Id2MetaVerifyResponse
   */
  async id2MetaVerify(request: Id2MetaVerifyRequest): Promise<Id2MetaVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.id2MetaVerifyWithOptions(request, runtime);
  }

  /**
   * @param request InitFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InitFaceVerifyResponse
   */
  async initFaceVerifyWithOptions(request: InitFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitFaceVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.birthday)) {
      query["Birthday"] = request.birthday;
    }

    if (!Util.isUnset(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.certifyUrlStyle)) {
      query["CertifyUrlStyle"] = request.certifyUrlStyle;
    }

    if (!Util.isUnset(request.certifyUrlType)) {
      query["CertifyUrlType"] = request.certifyUrlType;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!Util.isUnset(request.faceGuardOutput)) {
      query["FaceGuardOutput"] = request.faceGuardOutput;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!Util.isUnset(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!Util.isUnset(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.rarelyCharacters)) {
      query["RarelyCharacters"] = request.rarelyCharacters;
    }

    if (!Util.isUnset(request.readImg)) {
      query["ReadImg"] = request.readImg;
    }

    if (!Util.isUnset(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.suitableType)) {
      query["SuitableType"] = request.suitableType;
    }

    if (!Util.isUnset(request.uiCustomUrl)) {
      query["UiCustomUrl"] = request.uiCustomUrl;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.validityDate)) {
      query["ValidityDate"] = request.validityDate;
    }

    if (!Util.isUnset(request.voluntaryCustomizedContent)) {
      query["VoluntaryCustomizedContent"] = request.voluntaryCustomizedContent;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authId)) {
      body["AuthId"] = request.authId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitFaceVerifyResponse>(await this.callApi(params, req, runtime), new InitFaceVerifyResponse({}));
  }

  /**
   * @param request InitFaceVerifyRequest
   * @return InitFaceVerifyResponse
   */
  async initFaceVerify(request: InitFaceVerifyRequest): Promise<InitFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @param request LivenessFaceVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return LivenessFaceVerifyResponse
   */
  async livenessFaceVerifyWithOptions(request: LivenessFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<LivenessFaceVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!Util.isUnset(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!Util.isUnset(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.mobile)) {
      body["Mobile"] = request.mobile;
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

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LivenessFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LivenessFaceVerifyResponse>(await this.callApi(params, req, runtime), new LivenessFaceVerifyResponse({}));
  }

  /**
   * @param request LivenessFaceVerifyRequest
   * @return LivenessFaceVerifyResponse
   */
  async livenessFaceVerify(request: LivenessFaceVerifyRequest): Promise<LivenessFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @summary 手机三要素详版接口
   *
   * @param request Mobile3MetaDetailVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerifyWithOptions(request: Mobile3MetaDetailVerifyRequest, runtime: $Util.RuntimeOptions): Promise<Mobile3MetaDetailVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Mobile3MetaDetailVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Mobile3MetaDetailVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaDetailVerifyResponse({}));
  }

  /**
   * @summary 手机三要素详版接口
   *
   * @param request Mobile3MetaDetailVerifyRequest
   * @return Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerify(request: Mobile3MetaDetailVerifyRequest): Promise<Mobile3MetaDetailVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobile3MetaDetailVerifyWithOptions(request, runtime);
  }

  /**
   * @summary 手机号三要素简版接口
   *
   * @param request Mobile3MetaSimpleVerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerifyWithOptions(request: Mobile3MetaSimpleVerifyRequest, runtime: $Util.RuntimeOptions): Promise<Mobile3MetaSimpleVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Mobile3MetaSimpleVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Mobile3MetaSimpleVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaSimpleVerifyResponse({}));
  }

  /**
   * @summary 手机号三要素简版接口
   *
   * @param request Mobile3MetaSimpleVerifyRequest
   * @return Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerify(request: Mobile3MetaSimpleVerifyRequest): Promise<Mobile3MetaSimpleVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobile3MetaSimpleVerifyWithOptions(request, runtime);
  }

  /**
   * @summary 号码检测
   *
   * @param request MobileDetectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MobileDetectResponse
   */
  async mobileDetectWithOptions(request: MobileDetectRequest, runtime: $Util.RuntimeOptions): Promise<MobileDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mobiles)) {
      query["Mobiles"] = request.mobiles;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MobileDetect",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MobileDetectResponse>(await this.callApi(params, req, runtime), new MobileDetectResponse({}));
  }

  /**
   * @summary 号码检测
   *
   * @param request MobileDetectRequest
   * @return MobileDetectResponse
   */
  async mobileDetect(request: MobileDetectRequest): Promise<MobileDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileDetectWithOptions(request, runtime);
  }

  /**
   * @summary 查询手机号在网状态
   *
   * @param request MobileOnlineStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MobileOnlineStatusResponse
   */
  async mobileOnlineStatusWithOptions(request: MobileOnlineStatusRequest, runtime: $Util.RuntimeOptions): Promise<MobileOnlineStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MobileOnlineStatus",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MobileOnlineStatusResponse>(await this.callApi(params, req, runtime), new MobileOnlineStatusResponse({}));
  }

  /**
   * @summary 查询手机号在网状态
   *
   * @param request MobileOnlineStatusRequest
   * @return MobileOnlineStatusResponse
   */
  async mobileOnlineStatus(request: MobileOnlineStatusRequest): Promise<MobileOnlineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileOnlineStatusWithOptions(request, runtime);
  }

  /**
   * @summary 查询手机号在网时长
   *
   * @param request MobileOnlineTimeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MobileOnlineTimeResponse
   */
  async mobileOnlineTimeWithOptions(request: MobileOnlineTimeRequest, runtime: $Util.RuntimeOptions): Promise<MobileOnlineTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MobileOnlineTime",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MobileOnlineTimeResponse>(await this.callApi(params, req, runtime), new MobileOnlineTimeResponse({}));
  }

  /**
   * @summary 查询手机号在网时长
   *
   * @param request MobileOnlineTimeRequest
   * @return MobileOnlineTimeResponse
   */
  async mobileOnlineTime(request: MobileOnlineTimeRequest): Promise<MobileOnlineTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileOnlineTimeWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDeviceInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDeviceInfoResponse
   */
  async modifyDeviceInfoWithOptions(request: ModifyDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.expiredDay)) {
      query["ExpiredDay"] = request.expiredDay;
    }

    if (!Util.isUnset(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDeviceInfo",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDeviceInfoResponse>(await this.callApi(params, req, runtime), new ModifyDeviceInfoResponse({}));
  }

  /**
   * @param request ModifyDeviceInfoRequest
   * @return ModifyDeviceInfoResponse
   */
  async modifyDeviceInfo(request: ModifyDeviceInfoRequest): Promise<ModifyDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request VerifyMaterialRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyMaterialResponse
   */
  async verifyMaterialWithOptions(request: VerifyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.faceImageUrl)) {
      query["FaceImageUrl"] = request.faceImageUrl;
    }

    if (!Util.isUnset(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!Util.isUnset(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!Util.isUnset(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyMaterial",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyMaterialResponse>(await this.callApi(params, req, runtime), new VerifyMaterialResponse({}));
  }

  /**
   * @param request VerifyMaterialRequest
   * @return VerifyMaterialResponse
   */
  async verifyMaterial(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}
